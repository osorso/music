module.exports = {
  root: true, // eslint找当前配置文件不能往父级查找
  parser: 'vue-eslint-parser', // 指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  env: { // 指定环境的全局变量，下面的配置指定为浏览器环境
    browser: true,
    node: true,
    es6: true
  },
  extends: [ // 配置标准的js风格，就是说写代码的时候要规范的写
    'plugin:vue/essential', 'eslint:recommended'
  ],
  plugins: [ // 提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
    'vue'
  ],
  /**
   * 'off' -> 0 关闭规则
   * 'warn' -> 1 开启警告规则
   * 'error' -> 2 开启错误规则
  */
  rules: {
    'accessor-pairs': 2,
    'arrow-spacing': [
      2, {
        'before': true,
        'after': true
      }
    ],
    'block-spacing': [
      2, 'always'
    ],
    'brace-style': [
      2,
      '1tbs', {
        'allowSingleLine': true
      }
    ],
    'camelcase': [
      0, {
        'properties': 'always'
      }
    ],
    'comma-dangle': [ // 对象字面量项尾不能有逗号
      2, 'never'
    ],
    'comma-spacing': [
      2, {
        'before': false,
        'after': true
      }
    ],
    'comma-style': [
      2, 'last'
    ],
    'constructor-super': 2,
    'curly': [
      2, 'multi-line'
    ],
    'dot-location': [ // 对象访问符的位置，换行的时候在行首还是行尾
      2, 'property'
    ],
    'eol-last': 2, // 文件以单一的换行符结束
    'eqeqeq': [ // 必须使用全等
      2, 'allow-null'
    ],
    'generator-star-spacing': [
      2, {
        'before': true,
        'after': true
      }
    ],
    'handle-callback-err': [
      2, '^(err|error)$'
    ],
    'indent': [
      2,
      2, {
        'SwitchCase': 1
      }
    ],
    'jsx-quotes': [
      2, 'prefer-single'
    ],
    'key-spacing': [ // 对象字面量中冒号的前后空格
      2, {
        'beforeColon': false,
        'afterColon': true
      }
    ],
    'keyword-spacing': [
      2, {
        'before': true,
        'after': true
      }
    ],
    'new-cap': [
      2, {
        'newIsCap': true,
        'capIsNew': false
      }
    ],
    'no-constant-condition': 2, // 禁止在条件中使用常量表达式 if(true) if(1)
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': 'off',
    'no-class-assign': 2,
    'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
    'no-const-assign': 2,
    'no-control-regex': 2,
    'no-delete-var': 2,
    'no-dupe-args': 2, // 函数参数不能重复
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'no-empty-character-class': 2, // 正则表达式中的[]内容不能为空
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2, // 禁止扩展native对象
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [
      2, 'functions'
    ],
    'no-fallthrough': 2,
    'no-floating-decimal': 2, // 禁止省略浮点数中的0 .5 3.
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-implied-eval': 2,
    'no-inner-declarations': [
      2, 'functions'
    ],
    'no-invalid-regexp': 2, // 禁止无效的正则表达式
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [ // 禁止标签声明
      2, {
        'allowLoop': false,
        'allowSwitch': false
      }
    ],
    'no-lone-blocks': 2, // 禁止不必要的嵌套块
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2, // 不能用多余的空格
    'no-multi-str': 2,
    'no-multiple-empty-lines': [
      2, {
        'max': 1
      }
    ],
    'no-native-reassign': 2, // 不能重写native对象
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2, // 禁止重复声明变量
    'no-regex-spaces': 2,
    'no-return-assign': [  // return 语句中不能有赋值表达式
      2, 'except-parens'
    ],
    'no-self-assign': 2,
    'no-self-compare': 2, // 不能比较自身
    'no-sequences': 2, // 禁止使用逗号运算符
    'no-shadow-restricted-names': 2, // 严格模式中规定的限制标识符不能作为声明时的变量名使用
    'no-spaced-func': 2,
    'no-sparse-arrays': 2, // 禁止稀疏数组， [1,,2]
    'no-this-before-super': 2,
    'no-throw-literal': 2, // 禁止抛出字面量错误 throw 'error'
    'no-trailing-spaces': 2,
    'no-undef': 2, // 不可以有未定义的变量
    'no-undef-init': 2,
    'no-unexpected-multiline': 2, // 避免多行表达式
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [
      2, {
        'defaultAssignment': false
      }
    ],
    'no-unreachable': 2, // 不能有无法执行的代码
    'no-unsafe-finally': 2,
    'no-unused-vars': [ // 不能有声明后未被使用的变量或参数
      2, {
        'vars': 'all',
        'args': 'none'
      }
    ],
    'no-else-return': 1, // 如果if语句里面有return,后面不能跟else语句
    'no-useless-call': 2, // 禁止不必要的call和apply
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [ // 声明
      2, {
        'initialized': 'never'
      }
    ],
    'operator-linebreak': [
      2,
      'after', {
        'overrides': {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    'padded-blocks': [
      2, 'never'
    ],
    'quotes': [
      2,
      'single', {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    'semi': [ // 语句可以不需要分号结尾
      2, 'never'
    ],
    'semi-spacing': [
      2, {
        'before': false,
        'after': true
      }
    ],
    'space-before-blocks': [
      2, 'always'
    ],
    'space-before-function-paren': [ // 函数定义时括号前面要不要有空格
      2, 'never'
    ],
    'space-in-parens': [
      2, 'never'
    ],
    'space-infix-ops': 2, // 中缀操作符周围要不要有空格
    'space-unary-ops': [
      2, {
        'words': true,
        'nonwords': false
      }
    ],
    'spaced-comment': [
      2,
      'always', {
        'markers': [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ','
        ]
      }
    ],
    'template-curly-spacing': [
      2, 'never'
    ],
    'use-isnan': 2,
    'valid-typeof': 2, // 必须使用合法的typeof的值
    'wrap-iife': [
      2, 'any'
    ],
    'yield-star-spacing': [
      2, 'both'
    ],
    'yoda': [
      2, 'never'
    ],
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [
      2,
      'always', {
        objectsInObjects: false
      }
    ],
    'array-bracket-spacing': [2, 'never'],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/html-quotes': ['error', 'double'],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always'
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,
      'multiline': {
        'max': 3,
        'allowFirstLine': true
      }
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true,
      'ignores': ['pre', 'textarea']
    }],
    'vue/no-use-v-if-with-v-for': ['error', {
      'allowUsingIterationVar': false
    }],
    'vue/return-in-computed-property': ['error', {
      'treatUndefinedAsUnspecified': false
    }],
    'vue/no-unused-components': ['error', {
      'ignoreWhenBindingPresent': true
    }],
    'vue/attribute-hyphenation': ['error', 'always', {
      'ignore': []
    }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      'ignores': []
    }],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-multi-spaces': ['error', {
      'ignoreProperties': false
    }],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/no-template-shadow': ['error'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-default-prop': ['error'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/attributes-order': ['error', {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ]
    }],
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'vue/this-in-template': ['error', 'never']
  },
  // 指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
  parserOptions: {
    parser: 'babel-eslint'
  }
}
