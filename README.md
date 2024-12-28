# @trentrand/capacitor-instant

Capacitor plugin to check if Android Instant App or Apple App Clip

## Install

```bash
npm install @trentrand/capacitor-instant
npx cap sync
```

## API

<docgen-index>

* [`isInstantApp()`](#isinstantapp)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isInstantApp()

```typescript
isInstantApp() => Promise<{ value: boolean; }>
```

Returns whether the app is running as an Android Instant App or iOS App Clip.
This value is determined at app initialization and cached.

On Android: Uses PackageManager.isInstantApp()
On iOS: Checks for XCAppClipURL environment variable
On Web: Always returns false

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------

</docgen-api>
