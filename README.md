# native-speech-recognition

Improve/add missing features of the capacitor community Native speech recognition plugin

## Install

```bash
npm install native-speech-recognition
npx cap sync
```

## API

<docgen-index>

* [`hasAudioPermission()`](#hasaudiopermission)
* [`checkAudioPermission()`](#checkaudiopermission)
* [`requestAudioPermission()`](#requestaudiopermission)
* [`hasSpeechRecognitionPermission()`](#hasspeechrecognitionpermission)
* [`checkSpeechRecognitionPermission()`](#checkspeechrecognitionpermission)
* [`requestSpeechRecognitionPermission()`](#requestspeechrecognitionpermission)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### hasAudioPermission()

```typescript
hasAudioPermission() => Promise<PermissionBool>
```

Check if the user has granted the record_audio permission.

**Returns:** <code>Promise&lt;<a href="#permissionbool">PermissionBool</a>&gt;</code>

--------------------


### checkAudioPermission()

```typescript
checkAudioPermission() => Promise<AudioPermissionStatus>
```

Check record_audio permission.

**Returns:** <code>Promise&lt;<a href="#audiopermissionstatus">AudioPermissionStatus</a>&gt;</code>

--------------------


### requestAudioPermission()

```typescript
requestAudioPermission() => Promise<AudioPermissionStatus>
```

Request record_audio permission.
Resolves with the new permission status after the user has denied/granted the request.

**Returns:** <code>Promise&lt;<a href="#audiopermissionstatus">AudioPermissionStatus</a>&gt;</code>

--------------------


### hasSpeechRecognitionPermission()

```typescript
hasSpeechRecognitionPermission() => Promise<PermissionBool>
```

Check if the user has granted the speech recognition permission.

**Returns:** <code>Promise&lt;<a href="#permissionbool">PermissionBool</a>&gt;</code>

--------------------


### checkSpeechRecognitionPermission()

```typescript
checkSpeechRecognitionPermission() => Promise<SpeechRecognitionPermissionStatus>
```

Check speech recognition permission.

**Returns:** <code>Promise&lt;<a href="#speechrecognitionpermissionstatus">SpeechRecognitionPermissionStatus</a>&gt;</code>

--------------------


### requestSpeechRecognitionPermission()

```typescript
requestSpeechRecognitionPermission() => Promise<SpeechRecognitionPermissionStatus>
```

Request speech recognition permission.
Resolves with the new permission status after the user has denied/granted the request.

**Returns:** <code>Promise&lt;<a href="#speechrecognitionpermissionstatus">SpeechRecognitionPermissionStatus</a>&gt;</code>

--------------------


### Interfaces


#### PermissionBool

| Prop                | Type                 | Description                              |
| ------------------- | -------------------- | ---------------------------------------- |
| **`hasPermission`** | <code>boolean</code> | Permission state for record_audio alias. |


#### AudioPermissionStatus

| Prop               | Type                                                        | Description                              |
| ------------------ | ----------------------------------------------------------- | ---------------------------------------- |
| **`record_audio`** | <code><a href="#permissionstate">PermissionState</a></code> | Permission state for record_audio alias. |


#### SpeechRecognitionPermissionStatus

| Prop                     | Type                                                        | Description                              |
| ------------------------ | ----------------------------------------------------------- | ---------------------------------------- |
| **`speech_recognition`** | <code><a href="#permissionstate">PermissionState</a></code> | Permission state for Speech recognition. |


### Type Aliases


#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

</docgen-api>
