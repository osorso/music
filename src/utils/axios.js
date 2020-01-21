import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'

const _showLoading = () => {
  store.commit({
    type: 'SET_LOADING',
    loading: true
  })
}

const _hideLoading = () => {
  store.commit({
    type: 'SET_LOADING',
    loading: false
  })
}

const _error = (error) => {
  Message.error({
    title: '错误',
    showClose: false,
    duration: 3e3,
    message: error.message || '服务器异常'
  })
}

const _axios = axios.create({
  baseUrl: 'http://127.0.0.1:3000',
  timeout: 15000,
  retry: 2, // 请求重试次数
  retryDelay: 1000 // 求重试间隔1秒
})

_axios.interceptors.request.use(
  function(config) {
    _showLoading()
    return config
  },
  function(error) {
    _hideLoading()
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  function(response) {
    _hideLoading()
    const data = response.data
    if (response.request.responseType === 'blob') {
      return response
    }
    if (data.success) {
      return data.data
    } else if (data.error === 0) {
      return data
    } else {
      _error(data)
      return Promise.reject(new Error(data.message))
    }
  },
  function(error) {
    _error(error)
    _hideLoading()
    return Promise.reject(error)
  }
)

const _mixinParam = (param) => {
  const _userId = store.getters.userId
  Object.assign(param, {
    userId: _userId
  })
  return param
}

const _mixinUrl = (url, param) => {
  url = url || ''
  param = param || {}
  if (!url) return
  url = url.indexOf('?') > 0 ? '&' : '?'
  url = Object.keys(param).reduce((preVal, curItem) => {
    preVal += `${curItem}=${encodeURIComponent(param[curItem])}&`
    return preVal
  }, url)
  return url.replace(/[&?]$/, '')
}

const _mixinUrlUser = (url) => {
  const _userId = store.getters.userId
  url += url.indexOf('?') > 0 ? '&' : '?'
  url += `userId=${_userId}`
  return url
}

const _http = {}

_http.all = (urls) => {
  return new Promise((resolve, reject) => {
    axios.all(urls)
      .then(axios.spread((...res) => {
        resolve(res)
      }))
      .catch(err => reject(err))
  })
}

_http.getWithoutUserId = (url, params) => {
  return _axios.get(_mixinUrl(url, params))
}

_http.get = (url, params = {}, config) => {
  return _axios.get(_mixinUrl(url, _mixinParam(params)), config)
}

_http.delete = (url, params = {}, config) => {
  return _axios.delete(_mixinUrl(url, _mixinParam(params)), config)
}

_http.deleteByJson = (url, params) => {
  return _axios.delete(_mixinUrlUser(url), {
    data: params
  })
}

_http.post = (url, params = {}, config) => {
  return _axios.post(_mixinUrlUser(url), params, config)
}

_http.put = (url, params = {}, config) => {
  return _axios.put(_mixinUrlUser(url), params, config)
}

_http.postDownload = (url, params) => {
  return _axios.post(_mixinUrlUser(url), params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    responseType: 'blob'
  }).then(response => {
    saveFile(response, params ? params.fileName : '')
  })
}

_http.getDownload = (url, params = {}) => {
  return _axios.get(_mixinUrl(url), _mixinParam(params), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    responseType: 'blob'
  }).then(response => {
    saveFile(response, params ? params.fileName : '')
  })
}

const getFileName = (response, fileName) => {
  if (!fileName) {
    const disposition = response.headers['Content-Disposition'] || response.headers['content-disposition']
    if (disposition) {
      const _f = disposition.split(/fileName=/i)
      if (_f.length > 1) {
        fileName = _f[1]
      }
    }
  }
  return decodeURIComponent(escape(fileName)) || '文件'
}

const saveFile = (response, fileName) => {
  if (response.data.size === 0) {
    Message.error({
      title: '错误',
      message: '文件不存在'
    })
    return
  }

  if (response.data.type.toLowerCase() === 'application/json') {
    if (FileReader) {
      const _reader = new FileReader()
      _reader.onload = (e) => {
        const _error = JSON.parse(e.target.result)
        Message.error({
          title: '错误',
          message: _error.message
        })
      }
      _reader.readAsText(response.data)
    } else {
      Message.error({
        title: '错误',
        message: '服务器错误'
      })
    }
    return
  }

  fileName = getFileName(response, fileName)
  if (typeof window.chrome !== 'undefined') {
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(response.data)
    link.download = fileName
    link.click()
  } else if (typeof window.navigation.msSaveBlob !== 'undefined') {
    const blob = new Blob([response.data], {
      type: 'application/force-download'
    })
    window.navigator.msSaveBlob(blob, fileName)
  } else {
    const file = new File([response.data], fileName, {
      type: 'application/force-download'
    })
    window.open(URL.createObjectURL(file))
  }
}

var Plugin = {}
Plugin.install = (Vue, options) => {
  Vue.axios = _axios
  window.axios = _axios
  Vue.http = _http
  window.http = _http
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return _axios
      }
    },
    $http: {
      get() {
        return _http
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
