import { WebPlugin } from '@capacitor/core';
import { AudioPermissionStatus, NativeSpeechRecognitionPlugin, PermissionBool, SpeechRecognitionPermissionStatus } from './definitions';
export declare class NativeSpeechRecognitionWeb extends WebPlugin implements NativeSpeechRecognitionPlugin {
    hasAudioPermission(): Promise<PermissionBool>;
    checkAudioPermission(): Promise<AudioPermissionStatus>;
    requestAudioPermission(): Promise<AudioPermissionStatus>;
    hasSpeechRecognitionPermission(): Promise<PermissionBool>;
    checkSpeechRecognitionPermission(): Promise<SpeechRecognitionPermissionStatus>;
    requestSpeechRecognitionPermission(): Promise<SpeechRecognitionPermissionStatus>;
}
