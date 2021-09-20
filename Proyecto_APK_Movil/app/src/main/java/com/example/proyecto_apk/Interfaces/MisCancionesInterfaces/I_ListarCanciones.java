package com.example.proyecto_apk.Interfaces.MisCancionesInterfaces;

import android.content.Context;

import com.android.volley.VolleyError;
import com.example.proyecto_apk.MisCanciones.CancionModel;
import com.example.proyecto_apk.MisLibros.LibroModel;

import java.util.List;

public interface I_ListarCanciones {
  void onSuccess(List<CancionModel> respuesta, Context context);
  void onErrorResponse(VolleyError error, Context context);
}
