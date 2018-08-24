// appBoard，mediator 不建议进行修改 如果修改了 也请对应修改
module.exports = {
    'eslint': false,
    'webpackWarnings': false,
    'exports': [
        // appBoard
        'js/config/index.js',
        // mediator
        'js/mediator/index.vue',
        // home
        'js/pages/component/index.vue',
        'js/pages/component/zbutton/index.vue',
        'js/pages/component/zbuttons/index.vue',
        'js/pages/component/zcell/index.vue',
        'js/pages/component/zinput/index.vue',
        'js/pages/component/zinputview/index.vue',
        'js/pages/component/znormalcell/index.vue',
        'js/pages/component/zslidercell/index.vue',
        'js/pages/component/ztoolbar/index.vue',
        'js/pages/component/hcell/index.vue',
        'js/pages/component/hradio/index.vue',
        'js/pages/component/hslidercell/index.vue',
        'js/pages/module/index.vue',
    ],
    'alias': {
        'Components': 'js/components',
        'Common': 'js/common',
        'Config': 'js/config',
        'Widget': 'js/widget',
        'Pages': 'js/pages',
        'Utils': 'js/utils',
        'Css': 'js/css',
    },
    'diff': {
        'pwd': '/Users/yangmingzhe/Work/opensource/eros-diff-folder',
        'proxy': 'https://app.weex-eros.com/source'
    },
    'server': {
        'path': './',
        'port': 8889
    },
    'mockServer': {
        'port': 52077,
        'mockDir': './dist/mock'
    },
    'socketServer': {
        'port': 8890,
        'switch': true
    }
}
