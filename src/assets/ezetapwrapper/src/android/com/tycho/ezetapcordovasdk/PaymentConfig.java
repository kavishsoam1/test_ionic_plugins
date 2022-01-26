package com.tycho.ezetapcordovasdk;

import org.json.JSONException;
import org.json.JSONObject;

public class PaymentConfig {
    public static final String EZE_TAP_CONFIG_JSON   = "EzeTapConfigJson";
    public static final String EZE_TAP_ORDER_JSON    = "EzeTapOrderJson";
    public static final String EZE_TAP_ORDER_RESULT  = "EzeTapOrderResult";
    public static final String EZE_TAP_HAS_ERROR     = "EzeTapHasError";

    public static String getErrorString(String code, String message) {
        JSONObject jsonObject  = new JSONObject();
        JSONObject errorObject = new JSONObject();
        try {
            errorObject.put("code", code);
            errorObject.put("message", message);
            jsonObject.put("error", errorObject);
        } catch (JSONException e) {
            e.printStackTrace();
        }

        return jsonObject.toString();
    }
}
