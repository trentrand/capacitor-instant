export interface InstantPlugin {
  /**
   * Returns whether the app is running as an Android Instant App or iOS App Clip.
   * This value is determined at app initialization and cached.
   *
   * On Android: Uses PackageManager.isInstantApp()
   * On iOS: Checks for XCAppClipURL environment variable
   * On Web: Always returns false
   *
   * @returns Promise with a boolean indicating if the app is an instant app
   */
  isInstantApp(): Promise<{ value: boolean }>;
}
