package com.example.proyecto_apk.Interfaces;

import android.content.Context;

import com.android.volley.VolleyError;
import com.applandeo.materialcalendarview.EventDay;

import java.util.List;

public interface I_ActualizarControlDeActividad {
  void onSuccess(Boolean respuesta, Context context);
  void onErrorResponse(VolleyError error, Context context);
}
