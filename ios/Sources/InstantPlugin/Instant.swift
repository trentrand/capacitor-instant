import Foundation

@objc public class Instant: NSObject {
    private let isInstantAppValue: Bool

    override init() {
        self.isInstantAppValue = ProcessInfo.processInfo.environment["XCAppClipURL"] != nil
        super.init()
    }

    @objc public func isInstantApp() -> Bool {
        return isInstantAppValue
    }
}
