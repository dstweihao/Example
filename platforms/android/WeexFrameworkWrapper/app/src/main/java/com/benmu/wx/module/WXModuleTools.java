package com.benmu.wx.module;

import android.content.Intent;

import com.benmu.framework.manager.ManagerFactory;
import com.benmu.wx.service.update.DownloadService;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

import java.util.HashMap;
import java.util.Map;

public class WXModuleTools extends WXModule {

    /*
     * Android 6.0 动态申请权限
     *
     * */

    @JSMethod
    public void checkPermission(String permission, JSCallback callback) {
        WXPermissionManager permissionManager = ManagerFactory.getManagerService(WXPermissionManager.class);
        boolean hasPermission = permissionManager.hasPermissions(mWXSDKInstance.getContext(), permission);
        Map<String, Boolean> result = new HashMap<>();
        result.put("hasPermission", hasPermission);
        callback.invoke(result);
    }

    @JSMethod
    public void requestPermission(String permission, JSCallback callback) {
        WXPermissionManager permissionManager = ManagerFactory.getManagerService(WXPermissionManager.class);
        permissionManager.requestPermissions(mWXSDKInstance.getContext(), permission, callback);
    }

    /*
     * 检查更新
     *
     * */

    @JSMethod(uiThread = false)
    public void uptateApp(String url) {
        Intent intent = new Intent(mWXSDKInstance.getContext(), DownloadService.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.putExtra("url", url);
        mWXSDKInstance.getContext().startService(intent);
    }

}
