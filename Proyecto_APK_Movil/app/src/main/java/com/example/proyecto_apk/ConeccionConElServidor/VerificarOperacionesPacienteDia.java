package com.example.proyecto_apk.ConeccionConElServidor;

import android.content.Context;

import com.android.volley.VolleyError;
import com.applandeo.materialcalendarview.EventDay;
import com.example.proyecto_apk.Interfaces.I_ActualizarControlDeActividad;
import com.example.proyecto_apk.Interfaces.I_ObtenerControlDeActividadesPaciente;

import org.json.JSONArray;
import org.json.JSONException;

import java.util.Calendar;
import java.util.List;

public class VerificarOperacionesPacienteDia {
  Context context;

  public VerificarOperacionesPacienteDia(Context context) {
    this.context = context;
  }

  public Context getContext() {
    return context;
  }

  public void setContext(Context context) {
    this.context = context;
  }
  public void ControlDeDiaEstaActualizado_ControlDeAgua(I_ActualizarControlDeActividad callback){
    OperacionesPaciente operaciones=new OperacionesPaciente(context);
    operaciones.obtenerControlDeAgua(new I_ObtenerControlDeActividadesPaciente() {
      @Override
      public void onSuccess(JSONArray listaDeEventos, Context context) {
        Boolean respuesta=false;
        for(int i=0;i<listaDeEventos.length();i++){

          String fechaEvento = null;
          try {
            fechaEvento = listaDeEventos.getJSONObject(i).getString("fecha");
          } catch (JSONException e) {
            e.printStackTrace();
          }

          Calendar fechaDeHoy= Calendar.getInstance();
          int month_fechaHoy1=('0' + (fechaDeHoy.get(Calendar.MONTH)+1));
          int day_fechaHoy1=('0' + fechaDeHoy.get(Calendar.DAY_OF_YEAR));
          String month_fechaHoy=String.valueOf(month_fechaHoy1);
          String day_fechaHoy=String.valueOf(day_fechaHoy1);
          String fechaHoy = fechaDeHoy.get(Calendar.YEAR)+ '-'
            + month_fechaHoy.substring(month_fechaHoy.length()-2) + '-'
            + day_fechaHoy.substring(day_fechaHoy.length()-2);

          if(fechaEvento==fechaHoy){
            respuesta=true;
          }
          else{
            respuesta=false;
          }
        }
        if(respuesta){
          callback.onSuccess(true,context);
        }
        else{
          callback.onSuccess(false,context);
        }
      }

      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  //TODO Copiar 5 para cada actividad
}
