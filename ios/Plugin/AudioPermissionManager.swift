//
//  AudioPermissionManager.swift
//  Plugin
//
//  Created by Julien Lecoq on 01/12/2022.
//  Copyright © 2022 Max Lynch. All rights reserved.
//

import Foundation
import Speech
import Capacitor

struct AudioPermissionStatus {
    var record_audio: PermissionState
    
    init(_ record_audio: PermissionState) {
        self.record_audio = record_audio
    }
    
    func toJSON() -> [String: PermissionState.RawValue] {
        return [
            "record_audio": self.record_audio.rawValue
        ]
    }
}

struct AudioPermissionManager {
    
    /**
     * Return true if the user has granted audio permission, false otherwise.
     */
    func hasGrantedPermission() -> Bool {
        return AVCaptureDevice.authorizationStatus(for: .audio) == .authorized
    }
    
    /**
     * Check the record_audio permission.
     */
    func checkPermission() -> AudioPermissionStatus {
        let status = AVCaptureDevice.authorizationStatus(for: .audio)
        
        switch status {
        case .notDetermined:
            return AudioPermissionStatus(PermissionState.prompt)
        case .restricted, .denied:
            return AudioPermissionStatus(PermissionState.denied)
        case .authorized:
            return AudioPermissionStatus(PermissionState.granted)
        @unknown default:
            return AudioPermissionStatus(PermissionState.prompt)
        }
    }
    
    /**
     * Request the record_audio permission.
     */
    func requestPermission(_ call: CAPPluginCall) {
         AVCaptureDevice.requestAccess(for: .audio) { (_: Bool) in
             let status = self.checkPermission()
             call.resolve(status.toJSON())
         }
    }
}
