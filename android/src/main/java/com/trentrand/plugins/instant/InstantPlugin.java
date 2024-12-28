package com.trentrand.plugins.instant;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Instant")
public class InstantPlugin extends Plugin {
    private Instant implementation;

    @Override
    public void load() {
        implementation = new Instant(getContext());
    }

    @PluginMethod
    public void isInstantApp(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", implementation.isInstantApp());
        call.resolve(ret);
    }
}
