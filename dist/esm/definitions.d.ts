export interface PermissionBool {
    /**
     * Permission state for record_audio alias.
     */
    hasPermission: boolean;
}
export interface AudioPermissionStatus {
    /**
     * Permission state for record_audio alias.
     */
    record_audio: PermissionState;
}
export interface SpeechRecognitionPermissionStatus {
    /**
     * Permission state for Speech recognition.
     */
    speech_recognition: PermissionState;
}
export interface NativeSpeechRecognitionPlugin {
    /**
     * Check if the user has granted the record_audio permission.
     */
    hasAudioPermission(): Promise<PermissionBool>;
    /**
     * Check record_audio permission.
     */
    checkAudioPermission(): Promise<AudioPermissionStatus>;
    /**
     * Request record_audio permission.
     * Resolves with the new permission status after the user has denied/granted the request.
     */
    requestAudioPermission(): Promise<AudioPermissionStatus>;
    /**
     * Check if the user has granted the speech recognition permission.
     */
    hasSpeechRecognitionPermission(): Promise<PermissionBool>;
    /**
     * Check speech recognition permission.
     */
    checkSpeechRecognitionPermission(): Promise<SpeechRecognitionPermissionStatus>;
    /**
     * Request speech recognition permission.
     * Resolves with the new permission status after the user has denied/granted the request.
     */
    requestSpeechRecognitionPermission(): Promise<SpeechRecognitionPermissionStatus>;
}
