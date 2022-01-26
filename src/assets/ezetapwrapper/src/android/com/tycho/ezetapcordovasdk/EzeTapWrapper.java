package com.tycho.ezetapcordovasdk;

import static com.tycho.ezetapcordovasdk.PaymentConfig.EZE_TAP_CONFIG_JSON;
import static com.tycho.ezetapcordovasdk.PaymentConfig.EZE_TAP_HAS_ERROR;
import static com.tycho.ezetapcordovasdk.PaymentConfig.EZE_TAP_ORDER_JSON;
import static com.tycho.ezetapcordovasdk.PaymentConfig.EZE_TAP_ORDER_RESULT;

import android.content.Intent;
import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;


public class EzeTapWrapper extends CordovaPlugin {

    private static final int REQUEST_CODE_PAYMENT = 101;
    private CallbackContext callbackContext;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("payWithEzeTap")) {
            String configJson = args.getString(0);
            String orderJson  = args.getString(1);
            payWithEzeTap(configJson, orderJson, callbackContext);
            return true;
        }
        return false;
    }

    private void payWithEzeTap(String configJson, String orderJson, CallbackContext callbackContext) {
        this.callbackContext = callbackContext;
        if (configJson != null && configJson.length() > 0 && orderJson != null && orderJson.length() > 0) {
            Intent intent = new Intent(cordova.getActivity(), PaymentActivity.class);
            intent.putExtra(EZE_TAP_CONFIG_JSON, configJson);
            intent.putExtra(EZE_TAP_ORDER_JSON, orderJson);
            cordova.startActivityForResult(this, intent, REQUEST_CODE_PAYMENT);
        } else {
            callbackContext.error(PaymentConfig.getErrorString("111", "Expected one non-empty string argument."));
        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        super.onActivityResult(requestCode, resultCode, intent);
        if (intent != null && intent.getStringExtra(EZE_TAP_ORDER_RESULT) != null) {
            String result    = intent.getStringExtra(EZE_TAP_ORDER_RESULT);
            boolean hasError = intent.getBooleanExtra(EZE_TAP_HAS_ERROR, true);
            sendResult(result, hasError);
        } else
            sendResult(null, true);
    }

    private void sendResult(String result, boolean hasError) {
        if (callbackContext != null) {
            if (hasError)
                callbackContext.error(result != null ? result : PaymentConfig.getErrorString("111", "Something went wrong"));
            else
                callbackContext.success(result);
        }
    }
}