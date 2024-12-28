import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(InstantPlugin)
public class InstantPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "InstantPlugin"
    public let jsName = "Instant"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "isInstantApp", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = Instant()

    @objc func isInstantApp(_ call: CAPPluginCall) {
        call.resolve([
            "value": implementation.isInstantApp()
        ])
    }
}
