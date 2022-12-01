//
//  SpeechRecognitionPermissionManager.swift
//  Plugin
//
//  Created by Julien Lecoq on 01/12/2022.
//  Copyright © 2022 Max Lynch. All rights reserved.
//

import Foundation
import Speech
import Capacitor

struct SpeechRecognitionPermissionStatus {
    var speech_recognition: PermissionState
    
    init(_ speech_recognition: PermissionState) {
        self.speech_recognition = speech_recognition
    }
    
    func toJSON() -> [String: PermissionState.RawValue] {
        return [
            "speech_recognition": self.speech_recognition.rawValue
        ]
    }
}

struct SpeechRecognitionPermissionManager {
    
    /**
     * Return true if the user has granted speech recognition permission, false otherwise.
     */
    func hasGrantedPermission() -> Bool {
        return SFSpeechRecognizer.authorizationStatus() == .authorized
    }
    
    /**
     * Check the  speech recognition permission.
     */
    func checkPermission() -> SpeechRecognitionPermissionStatus {
        let status = SFSpeechRecognizer.authorizationStatus()
        
        switch status {
        case .notDetermined:
            return SpeechRecognitionPermissionStatus(PermissionState.prompt)
        case .restricted, .denied:
            return SpeechRecognitionPermissionStatus(PermissionState.denied)
        case .authorized:
            return SpeechRecognitionPermissionStatus(PermissionState.granted)
        @unknown default:
            return SpeechRecognitionPermissionStatus(PermissionState.prompt)
        }
    }
    
    /**
     * Request the  speech recognition permission.
     */
    func requestPermission(_ call: CAPPluginCall) {
        SFSpeechRecognizer.requestAuthorization { (_: SFSpeechRecognizerAuthorizationStatus) in
            let status = self.checkPermission()
            call.resolve(status.toJSON())
        }
    }
}
