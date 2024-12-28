package com.trentrand.plugins.instant;

import android.content.Context;
import android.content.pm.PackageManager;
import android.util.Log;

public class Instant {
    private final boolean isInstantApp;

    public Instant(Context context) {
        this.isInstantApp = context.getPackageManager().isInstantApp();
    }

    public boolean isInstantApp() {
        return isInstantApp;
    }
}
