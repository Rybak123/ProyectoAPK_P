package com.example.proyecto_apk.Interfaces.MisLibrosInterfaces;

import android.content.Context;

import com.android.volley.VolleyError;
import com.example.proyecto_apk.MisLibros.LibroModel;

import java.util.List;

public interface I_read_Libro {
  void onSuccess(LibroModel respuesta, Context context);
  void onErrorResponse(VolleyError error, Context context);
}
