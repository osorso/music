import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

/**
 * path: string,
 * component?: Component,
 * name?: string, // 命名路由
 * components?: { [name: string]: Component }, // 命名视图组件
 * redirect?: string | Location | Function,
 * props?: boolean | Object | Function,
 * alias?: string | Array<string>,
 * children?: Array<RouteConfig>, // 嵌套路由
 * beforeEnter?: (to: Route, from: Route, next: Function) => void,
 * meta?: any,
 * // 2.6.0+
 * caseSensitive?: boolean, // 匹配规则是否大小写敏感？(默认值：false)
 * pathToRegexpOptions?: Object // 编译正则的选项
 * ----------------------------
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
  }
 **/

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: '*', redirect: '/404', hidden: true }
]

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes
})

export default router
