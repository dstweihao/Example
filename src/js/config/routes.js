// 这里的后缀都是 .js 因为打包出来的都是js文件，而不是.vue文件，我们要告诉客户端跳转那个js

//  这里的路径和dev.json路径的区别
//  pages里面配置的是路由跳转的地址，也就是dev生成的 dist文件夹下的js bundle路径 从dist/js开始
//  dev.json 的 exports 需要打包的js地址，填入src的需要被打包成js bundle的地址   从src开始

export default {
    'eros': {
        title: 'eros',
        url: '/pages/component/index.js'
    },
    'zbutton': {
        title: 'ZButton',
        url: '/pages/component/zbutton/index.js'
    },
    'zbuttons': {
        title: 'ZButtons',
        url: '/pages/component/zbuttons/index.js'
    },
    'zcell': {
        title: 'ZCell',
        url: '/pages/component/zcell/index.js'
    },
    'zinput': {
        title: 'ZInput',
        url: '/pages/component/zinput/index.js'
    },

    'zinputview': {
        title: 'ZInputView',
        url: '/pages/component/zinputview/index.js'
    },
    'znormalcell': {
        title: 'ZNormalCell',
        url: '/pages/component/znormalcell/index.js'
    },
    'zslidercell': {
        title: 'ZSliderCell',
        url: '/pages/component/zslidercell/index.js'
    },
    'ztoolbar': {
        title: 'ZToolBar',
        url: '/pages/component/ztoolbar/index.js'
    },
    'hcell': {
        title: 'HCell',
        url: '/pages/component/hcell/index.js'
    },
    'hradio': {
        title: 'HRadio',
        url: '/pages/component/hradio/index.js'
    }, 
    'hslidercell': {
        title: 'HSliderCell',
        url: '/pages/component/hslidercell/index.js'
    },
}
