import Foundation

@objc public class Instant: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
