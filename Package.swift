// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "TrentrandCapacitorInstant",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "TrentrandCapacitorInstant",
            targets: ["InstantPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "InstantPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/InstantPlugin"),
        .testTarget(
            name: "InstantPluginTests",
            dependencies: ["InstantPlugin"],
            path: "ios/Tests/InstantPluginTests")
    ]
)
