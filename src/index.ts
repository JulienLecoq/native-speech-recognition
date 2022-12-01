import { registerPlugin } from '@capacitor/core';

import type { NativeSpeechRecognitionPlugin } from './definitions';

const NativeSpeechRecognition = registerPlugin<NativeSpeechRecognitionPlugin>(
  'NativeSpeechRecognition',
  {
    web: () => import('./web').then(m => new m.NativeSpeechRecognitionWeb()),
  },
);

export * from './definitions';
export { NativeSpeechRecognition };
