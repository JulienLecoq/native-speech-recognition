import { WebPlugin } from '@capacitor/core';

import type { NativeSpeechRecognitionPlugin } from './definitions';

export class NativeSpeechRecognitionWeb
  extends WebPlugin
  implements NativeSpeechRecognitionPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
