export interface NativeSpeechRecognitionPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}