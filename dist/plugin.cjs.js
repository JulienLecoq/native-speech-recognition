'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const NativeSpeechRecognition = core.registerPlugin('NativeSpeechRecognition', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.NativeSpeechRecognitionWeb()),
});

class NativeSpeechRecognitionWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    NativeSpeechRecognitionWeb: NativeSpeechRecognitionWeb
});

exports.NativeSpeechRecognition = NativeSpeechRecognition;
//# sourceMappingURL=plugin.cjs.js.map
