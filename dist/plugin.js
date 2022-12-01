var capacitorNativeSpeechRecognition = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
