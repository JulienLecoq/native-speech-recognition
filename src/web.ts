import { WebPlugin } from '@capacitor/core'

import { AudioPermissionStatus, NativeSpeechRecognitionPlugin, PermissionBool, SpeechRecognitionPermissionStatus } from './definitions'

export class NativeSpeechRecognitionWeb
    extends WebPlugin
    implements NativeSpeechRecognitionPlugin {
    hasAudioPermission(): Promise<PermissionBool> {
        throw this.unimplemented('Method not implemented on web.')
    }

    checkAudioPermission(): Promise<AudioPermissionStatus> {
        throw this.unimplemented('Method not implemented on web.')
    }

    requestAudioPermission(): Promise<AudioPermissionStatus> {
        throw this.unimplemented('Method not implemented on web.')
    }

    hasSpeechRecognitionPermission(): Promise<PermissionBool> {
        throw this.unimplemented('Method not implemented on web.')
    }

    checkSpeechRecognitionPermission(): Promise<SpeechRecognitionPermissionStatus> {
        throw this.unimplemented('Method not implemented on web.')
    }

    requestSpeechRecognitionPermission(): Promise<SpeechRecognitionPermissionStatus> {
        throw this.unimplemented('Method not implemented on web.')
    }
}
