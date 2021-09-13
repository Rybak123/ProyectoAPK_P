package com.example.proyecto_apk.Interfaces;

import android.content.Context;

import com.android.volley.VolleyError;

public interface I_DevolverActividad {
  void onSuccess(StringBuilder  respuesta, Context context);
  void onErrorResponse(VolleyError error, Context context);
}
