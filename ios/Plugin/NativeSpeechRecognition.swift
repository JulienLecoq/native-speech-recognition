import Foundation

@objc public class NativeSpeechRecognition: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
