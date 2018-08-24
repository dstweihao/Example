module.exports = {
    'appName': 'test',
    'appBoard': '/config/index.js',
    // android 监听全局事件homeBack 如果为true 安卓端需要自行调用router.finish方法来关闭应用
    'androidIsListenHomeBack': 'true',
    'customBundleUpdate': 'false',
    'version': {
        'android': '1.0.0',
        'iOS': '1.0.0'
    },
    'page': {
        'homePage': 'tabBar',
        'mediatorPage': '/mediator/index.js',
        'navBarColor': '#1DA1F2',
        'navItemColor': '#ffffff'
    },
    'url': {
        'image': 'https://lev-inf.benmu-health.com/test/xxx',
        'bundleUpdate': 'http://localhosts:3001/app/check'
    },
    'zipFolder': {
        'iOS': '/ios/WeexEros/WeexEros',
        'android': '/android/WeexFrameworkWrapper/app/src/main/assets'
    },
    'getui': {
        'enabled': 'false',
        'appId': '',
        'appKey': '',
        'appSecret': ''
    },
    'tabBar': {
        'color': '#979797',
        'selectedColor': '#40b0ff',
        'backgroundColor': '#f8f8f8',
        'borderColor': '#dadada',
        'list': [{
            'pagePath': '/pages/component/index.js',
            'text': '组件',
            'icon': 'bmlocal://assets/TabBar_Item1@2x.png',
            'selectedIcon': 'bmlocal://assets/TabBar_Item1_Selected@2x.png',
            'navShow': 'true',
            'navTitle': 'Component'
        },
        {
            'pagePath': '/pages/module/index.js',
            'text': '模块',
            'icon': 'bmlocal://assets/TabBar_Item2@2x.png',
            'selectedIcon': 'bmlocal://assets/TabBar_Item2_Selected@2x.png',
            'navShow': 'true',
            'navTitle': 'Module'
        },
        // {
        //     'pagePath': '/pages/mine/index.js',
        //     'text': '其他',
        //     'icon': 'bmlocal://assets/TabBar_Item3@2x.png',
        //     'selectedIcon': 'bmlocal://assets/TabBar_Item3_Selected@2x.png',
        //     'navShow': 'true',
        //     'navTitle': '其他'
        // }
        ]
    }
}