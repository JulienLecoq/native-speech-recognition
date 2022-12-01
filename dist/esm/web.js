import { WebPlugin } from '@capacitor/core';
export class NativeSpeechRecognitionWeb extends WebPlugin {
    hasAudioPermission() {
        throw this.unimplemented('Method not implemented on web.');
    }
    checkAudioPermission() {
        throw this.unimplemented('Method not implemented on web.');
    }
    requestAudioPermission() {
        throw this.unimplemented('Method not implemented on web.');
    }
    hasSpeechRecognitionPermission() {
        throw this.unimplemented('Method not implemented on web.');
    }
    checkSpeechRecognitionPermission() {
        throw this.unimplemented('Method not implemented on web.');
    }
    requestSpeechRecognitionPermission() {
        throw this.unimplemented('Method not implemented on web.');
    }
}
//# sourceMappingURL=web.js.map