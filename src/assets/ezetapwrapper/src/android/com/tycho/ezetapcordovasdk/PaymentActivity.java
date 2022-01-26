package com.tycho.ezetapcordovasdk;

import static com.tycho.ezetapcordovasdk.PaymentConfig.EZE_TAP_HAS_ERROR;
import static com.tycho.ezetapcordovasdk.PaymentConfig.EZE_TAP_CONFIG_JSON;
import static com.tycho.ezetapcordovasdk.PaymentConfig.EZE_TAP_ORDER_JSON;
import static com.tycho.ezetapcordovasdk.PaymentConfig.EZE_TAP_ORDER_RESULT;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import com.eze.api.EzeAPI;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Objects;

//http://d.eze.cc/ezetapsdk/ezetap-native-android-sdk/getting_started/initialize_sdk/
public class PaymentActivity extends AppCompatActivity {

    private static final String TAG = "PaymentActivity";
    private static final int REQUEST_CODE_INITIALIZE = 1001;
    private static final int REQUEST_CODE_SALE_TXN   = 1002;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        FrameLayout frameLayout = new FrameLayout(this);
        frameLayout.setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        frameLayout.setBackgroundColor(Color.WHITE);
        setContentView(frameLayout);
        try {
            doInitializeEzeTap();
            doSaleTxn();
        } catch(Exception e) {
            e.printStackTrace();
            onResult(PaymentConfig.getErrorString("100", ""+e.getMessage()), true);
        }
    }


    private void doInitializeEzeTap() throws JSONException {
        /*
         {
            "demoAppKey": "your demo app key",
            "prodAppKey": "your prod app key",
            "merchantName": "your merchant name",
            "userName": "your user name",
            "currencyCode": "INR",
            "appMode": "DEMO/PROD",
            "captureSignature": "true/false",
            "prepareDevice": "true/false"
         }
         */
        String jsonRequest = getIntent().getStringExtra(EZE_TAP_CONFIG_JSON);
        Log.d(TAG, "config json: "+jsonRequest);
        EzeAPI.initialize(this, REQUEST_CODE_INITIALIZE, new JSONObject(Objects.requireNonNull(jsonRequest)));
    }

    private void doSaleTxn() throws JSONException {
        /*
         {
            "amount": "1",
            "options": {
                "references": {
                    "reference1": "orderId"
                },
                "customer": {
                    "name": "xyz",
                    "mobileNo": "1234567890",
                    "email": "abc@xyz.com"
                }
            },
            "mode": "SALE"
         }
         */
        String jsonRequest = getIntent().getStringExtra(EZE_TAP_ORDER_JSON);
        Log.d(TAG, "order json: "+jsonRequest);
        EzeAPI.cardTransaction(this, REQUEST_CODE_SALE_TXN, new JSONObject(Objects.requireNonNull(jsonRequest)));
    }


    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        Log.d(TAG, "requestCode = " + requestCode + "resultCode = " + resultCode);
        if (requestCode == REQUEST_CODE_SALE_TXN) {
            if (resultCode == RESULT_OK)
                onResponse(data);
            else
                onError(data);
        }
    }

    private void onResponse(Intent data) {
        if (data != null && data.hasExtra("response"))
            onResult(data.getStringExtra("response"), false);
        else
            onError(data);
    }

    private void onError(Intent data) {
        if (data != null && data.hasExtra("response"))
            onResult(data.getStringExtra("response"), true);
        else
            onResult(PaymentConfig.getErrorString("101", "Please check request json"), true);
    }

    private void onResult(String result, boolean hasError) {
        Intent intent = new Intent();
        intent.putExtra(EZE_TAP_ORDER_RESULT, result);
        intent.putExtra(EZE_TAP_HAS_ERROR, hasError);
        setResult(RESULT_OK, intent);
        finish();
    }
}

