package com.example.proyecto_apk.Interfaces;

import android.content.Context;

import com.android.volley.VolleyError;

import org.json.JSONObject;

public interface VolleyCallback {
  void onSuccess(JSONObject result, Context context);

  void onErrorResponse(VolleyError error, Context context);
}
