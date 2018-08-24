package com.benmu.wx.module;

import com.benmu.framework.manager.impl.PermissionManager;
import com.benmu.framework.model.UniversalResultModule;
import com.taobao.weex.bridge.JSCallback;

import java.util.List;

public class WXPermissionManager extends PermissionManager {

    public void requestPermissions(Object object, final String perms, final JSCallback callback) {
        requestPermissions(object, new PermissionListener() {
            @Override
            public void onPermissionsGranted(List<String> perms) {
                if (callback != null) {
                    callback.invoke(new UniversalResultModule("", 19, null));
                }
            }

            @Override
            public void onPermissionsDenied(List<String> perms) {
                if (callback != null) {
                    callback.invoke(new UniversalResultModule("noPermission", 119, null));
                }
            }

            @Override
            public void onPermissionRequestRejected() {

            }
        }, perms);
    }

}
