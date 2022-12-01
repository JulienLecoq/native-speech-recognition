import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(NativeSpeechRecognitionPlugin)
public class NativeSpeechRecognitionPlugin: CAPPlugin {
    private var audioPermissionManager = AudioPermissionManager()
    private var speechRecognitionPermissionManager = SpeechRecognitionPermissionManager()
    
    /**
     * Resolves with true if the user has granted audio permission, false otherwise.
     */
    @objc public func hasAudioPermission(_ call: CAPPluginCall) {
        let hasPerm = self.audioPermissionManager.hasGrantedPermission()
        
        call.resolve([
            "hasPermission": hasPerm
        ])
    }
    
    /**
     * Request the record_audio permission.
     */
    @objc public func requestAudioPermission(_ call: CAPPluginCall) {
        self.audioPermissionManager.requestPermission(call)
    }
    
    /**
     * Check the record_audio permission.
     */
    @objc public func checkAudioPermission(_ call: CAPPluginCall) {
        let status = self.audioPermissionManager.checkPermission()
        call.resolve(status.toJSON())
    }
    
    /**
     * Resolves with true if the user has granted speech recognition permission, false otherwise.
     */
    @objc public func hasSpeechRecognitionPermission(_ call: CAPPluginCall) {
        let hasPerm = self.speechRecognitionPermissionManager.hasGrantedPermission()
        
        call.resolve([
            "hasPermission": hasPerm
        ])
    }
    
    /**
     * Request the speech recognition permission.
     */
    @objc public func requestSpeechRecognitionPermission(_ call: CAPPluginCall) {
        self.speechRecognitionPermissionManager.requestPermission(call)
    }
    
    /**
     * Check the speech recognition permission.
     */
    @objc public func checkSpeechRecognitionPermission(_ call: CAPPluginCall) {
        let status = self.speechRecognitionPermissionManager.checkPermission()
        call.resolve(status.toJSON())
    }
}
