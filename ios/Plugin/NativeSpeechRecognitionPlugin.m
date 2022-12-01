#import <Capacitor/Capacitor.h>
#import <Foundation/Foundation.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(NativeSpeechRecognitionPlugin, "NativeSpeechRecognition",
           CAP_PLUGIN_METHOD(hasAudioPermission, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(requestAudioPermission, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(checkAudioPermission, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(hasSpeechRecognitionPermission, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(requestSpeechRecognitionPermission, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(checkSpeechRecognitionPermission, CAPPluginReturnPromise);
)
