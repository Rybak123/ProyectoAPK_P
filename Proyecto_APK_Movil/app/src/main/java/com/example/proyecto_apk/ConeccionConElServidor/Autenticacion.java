package com.example.proyecto_apk.ConeccionConElServidor;

import android.content.Context;

import com.android.volley.VolleyError;
import com.example.proyecto_apk.Interfaces.VolleyCallback;

import org.json.JSONException;
import org.json.JSONObject;

public class Autenticacion {
  public static void AutenticarPaciente(String nombreDeUsuario,String contrasena,Context context,VolleyCallback callback){
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("nombreDeUsuario", nombreDeUsuario);
      parametros.put("contrasena", contrasena);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    ConeccionServidor coneccionServidor=new ConeccionServidor(context);
    coneccionServidor.coneccionHTTPPost(parametros,"/pacientes/autenticacion", new VolleyCallback() {
      @Override
      public void onSuccess(JSONObject result, Context context) {
        callback.onSuccess(result,context);
      }

      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });

  }
}
