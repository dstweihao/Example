package com.benmu.wx.utils;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.support.v4.content.FileProvider;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class Utils {
    /**
     * 安装apk文件
     */
    public static void installAPK(Context context, String filePath) {
        //开始执行安装
        File apkFile = new File(filePath);
        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        //版本大于 N ，开始使用 fileProvider 进行安装
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            intent.setFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            Uri contentUri = FileProvider.getUriForFile(
                context
                , "com.zlgcloud.candtu.fileprovider"
                , apkFile);
            intent.setDataAndType(contentUri, "application/vnd.android.package-archive");
        } else {
            //正常进行安装
            intent.setDataAndType(Uri.fromFile(apkFile), "application/vnd.android.package-archive");
        }
        context.startActivity(intent);
    }
    public static boolean isGif(String file) {
        FileInputStream imgFile = null;
        try {
            imgFile = new FileInputStream(file);
            byte[] header = new byte[3];
            int length = imgFile.read(header);
            return length == 3 && header[0] == (byte) 'G' && header[1] == (byte) 'I' && header[2] == (byte) 'F';
        } catch (Exception e) {
            // ignore
        } finally {
            if (imgFile != null) {
                try {
                    imgFile.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        return false;
    }

}
