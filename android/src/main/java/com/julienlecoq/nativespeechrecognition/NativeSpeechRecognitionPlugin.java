package com.julienlecoq.nativespeechrecognition;

import android.Manifest;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;

@CapacitorPlugin(name = "NativeSpeechRecognition",
        permissions = {
                @Permission(
                        strings = { Manifest.permission.RECORD_AUDIO },
                        alias = "record_audio"
                ),
        }
)
public class NativeSpeechRecognitionPlugin extends Plugin {

    private PermissionManager permissionManager;

    @Override
    public void load() {
        super.load();
        permissionManager = new PermissionManager(bridge);
    }

    /**
     * Resolves with true if the user has granted audio permission, false otherwise.
     */
    @PluginMethod
    public void hasAudioPermission(PluginCall call) {
        boolean hasPerm = this.permissionManager.hasGrantedRecordAudioPermission();

        JSObject response = new JSObject();
        response.put("hasPermission", hasPerm);

        call.resolve(response);
    }

    /**
     * Request the record_audio permission.
     */
    @PluginMethod
    public void requestAudioPermission(PluginCall call) {
        super.requestPermissions(call);
    }

    /**
     * Check the record_audio permission.
     */
    @PluginMethod
    public void checkAudioPermission(PluginCall call) {
        super.checkPermissions(call);
    }

    @PluginMethod
    public void hasSpeechRecognitionPermission(PluginCall call) {
        JSObject response = new JSObject();
        response.put("hasPermission", true);

        call.resolve(response);
    }

    @PluginMethod
    public void requestSpeechRecognitionPermission(PluginCall call) {
        call.unimplemented("Not implemented on Android.");
    }

    @PluginMethod
    public void checkSpeechRecognitionPermission(PluginCall call) {
        call.unimplemented("Not implemented on Android.");
    }
}
