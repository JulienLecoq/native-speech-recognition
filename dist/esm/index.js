import { registerPlugin } from '@capacitor/core';
const NativeSpeechRecognition = registerPlugin('NativeSpeechRecognition', {
    web: () => import('./web').then(m => new m.NativeSpeechRecognitionWeb()),
});
export * from './definitions';
export { NativeSpeechRecognition };
//# sourceMappingURL=index.js.map