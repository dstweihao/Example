package com.benmu.wx;

import android.app.Application;

import com.benmu.framework.BMWXApplication;
import com.benmu.wx.module.WXModuleTools;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

/**
 * Created by Carry on 2017/8/23.
 */

public class App extends BMWXApplication {
    public Application mInstance;

    @Override
    public void onCreate() {
        super.onCreate();
        mInstance = this;


        //初始化Weex
        InitConfig config = new InitConfig.Builder().setImgAdapter(null).build();
        WXSDKEngine.initialize(this, config);

        try {
            //通信方法 zTools是weex调用原生的方法名
            WXSDKEngine.registerModule("WXModuleTools", WXModuleTools.class);

        } catch (WXException e) {
            e.printStackTrace();
        }
    }

}
