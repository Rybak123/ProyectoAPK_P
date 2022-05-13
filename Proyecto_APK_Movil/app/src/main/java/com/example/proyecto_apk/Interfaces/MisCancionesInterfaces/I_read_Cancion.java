package com.example.proyecto_apk.Interfaces.MisCancionesInterfaces;

import android.content.Context;

import com.android.volley.VolleyError;
import com.example.proyecto_apk.MisCanciones.CancionModel;
import com.example.proyecto_apk.MisLibros.LibroModel;

public interface I_read_Cancion {
  void onSuccess(CancionModel respuesta, Context context);
  void onErrorResponse(VolleyError error, Context context);
}
