package com.example.proyecto_apk.Interfaces;

import android.content.Context;

import com.android.volley.VolleyError;

import org.json.JSONArray;

public interface I_ObtenerControlDeActividadesPaciente {
  void onSuccess(JSONArray listaDeEventos, Context context);
  void onErrorResponse(VolleyError error, Context context);
}
