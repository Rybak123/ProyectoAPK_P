package com.example.proyecto_apk.ConeccionConElServidor;

import android.content.Context;
import android.widget.Toast;

import com.android.volley.VolleyError;
import com.example.proyecto_apk.Interfaces.I_DevolverActividad;
import com.example.proyecto_apk.Interfaces.I_ObtenerControlDeActividadesPaciente;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Calendar;

public class VerActividadPaciente {
  Context context;

  public VerActividadPaciente(Context context) {
    this.context = context;
  }

  public Context getContext() {
    return context;
  }

  public void setContext(Context context) {
    this.context = context;
  }

  public void verContenidoActividad_ControlDeAgua(Calendar fecha, I_DevolverActividad callback){
    //TODO Cambiar
    OperacionesPaciente operaciones=new OperacionesPaciente(context);
    String parametroNombreActividad="cantidadDeAgua";

    StringBuilder mensajeActividad= new StringBuilder();
    Calendar MyDate = fecha;
    int month1=((MyDate.get(Calendar.MONTH)+1));
    int day1=(MyDate.get(Calendar.DAY_OF_MONTH));
    String month=String.valueOf(month1);
    String day=String.valueOf(day1);
    month="0"+month;
    day="0"+day;
    String fechaString = MyDate.get(Calendar.YEAR)+ "-"
      + month.substring(month.length()-2) + "-"
      + day.substring(day.length()-2);
    operaciones.obtenerControlDeAgua(new I_ObtenerControlDeActividadesPaciente() {
      @Override
      public void onSuccess(JSONArray listaDeEventos, Context context) {
        for(int i=0;i<listaDeEventos.length();i++){
          JSONObject diaDeEstudio1= null;
          try {
            diaDeEstudio1 = listaDeEventos.getJSONObject(i);
            String fechaJson=diaDeEstudio1.getString("fecha");
            if(fechaJson.equals(fechaString)){
              mensajeActividad.append(diaDeEstudio1.getString(parametroNombreActividad));
            }
          } catch (JSONException e) {
            e.printStackTrace();
          }
        }
        callback.onSuccess(mensajeActividad,context);
      }
      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public void verContenidoActividad_ControlDeAnimo(Calendar fecha, I_DevolverActividad callback){
    //TODO Cambiar
    OperacionesPaciente operaciones=new OperacionesPaciente(context);
    String parametroNombreActividad="estadoDeAnimo";

    StringBuilder mensajeActividad= new StringBuilder();
    Calendar MyDate = fecha;
    int month1=((MyDate.get(Calendar.MONTH)+1));
    int day1=(MyDate.get(Calendar.DAY_OF_MONTH));
    String month=String.valueOf(month1);
    String day=String.valueOf(day1);
    month="0"+month;
    day="0"+day;
    String fechaString = MyDate.get(Calendar.YEAR)+ "-"
      + month.substring(month.length()-2) + "-"
      + day.substring(day.length()-2);
    operaciones.obtenerControlDeAnimo(new I_ObtenerControlDeActividadesPaciente() {
      @Override
      public void onSuccess(JSONArray listaDeEventos, Context context) {
        for(int i=0;i<listaDeEventos.length();i++){
          JSONObject diaDeEstudio1= null;
          try {
            diaDeEstudio1 = listaDeEventos.getJSONObject(i);
            String fechaJson=diaDeEstudio1.getString("fecha");
            if(fechaJson.equals(fechaString)){
              mensajeActividad.append(diaDeEstudio1.getString(parametroNombreActividad));
            }
          } catch (JSONException e) {
            e.printStackTrace();
          }
        }
        callback.onSuccess(mensajeActividad,context);
      }
      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public void verContenidoActividad_ControlDeEnergia(Calendar fecha, I_DevolverActividad callback){
    //TODO Cambiar
    OperacionesPaciente operaciones=new OperacionesPaciente(context);
    String parametroNombreActividad="porcentajeDeEnergia";

    StringBuilder mensajeActividad= new StringBuilder();
    Calendar MyDate = fecha;
    int month1=((MyDate.get(Calendar.MONTH)+1));
    int day1=(MyDate.get(Calendar.DAY_OF_MONTH));
    String month=String.valueOf(month1);
    String day=String.valueOf(day1);
    month="0"+month;
    day="0"+day;
    String fechaString = MyDate.get(Calendar.YEAR)+ "-"
      + month.substring(month.length()-2) + "-"
      + day.substring(day.length()-2);
    operaciones.obtenerControlDeEnergia(new I_ObtenerControlDeActividadesPaciente() {
      @Override
      public void onSuccess(JSONArray listaDeEventos, Context context) {
        for(int i=0;i<listaDeEventos.length();i++){
          JSONObject diaDeEstudio1= null;
          try {
            diaDeEstudio1 = listaDeEventos.getJSONObject(i);
            String fechaJson=diaDeEstudio1.getString("fecha");
            if(fechaJson.equals(fechaString)){
              mensajeActividad.append(diaDeEstudio1.getString(parametroNombreActividad));
            }
          } catch (JSONException e) {
            e.printStackTrace();
          }
        }
        callback.onSuccess(mensajeActividad,context);
      }
      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public void verContenidoActividad_ControlDeSueno(Calendar fecha, I_DevolverActividad callback){
    //TODO Cambiar
    OperacionesPaciente operaciones=new OperacionesPaciente(context);
    String parametroNombreActividad="horasDeSueno";

    StringBuilder mensajeActividad= new StringBuilder();
    Calendar MyDate = fecha;
    int month1=((MyDate.get(Calendar.MONTH)+1));
    int day1=(MyDate.get(Calendar.DAY_OF_MONTH));
    String month=String.valueOf(month1);
    String day=String.valueOf(day1);
    month="0"+month;
    day="0"+day;
    String fechaString = MyDate.get(Calendar.YEAR)+ "-"
      + month.substring(month.length()-2) + "-"
      + day.substring(day.length()-2);
    operaciones.obtenerControlDeSueno(new I_ObtenerControlDeActividadesPaciente() {
      @Override
      public void onSuccess(JSONArray listaDeEventos, Context context) {
        for(int i=0;i<listaDeEventos.length();i++){
          JSONObject diaDeEstudio1= null;
          try {
            diaDeEstudio1 = listaDeEventos.getJSONObject(i);
            String fechaJson=diaDeEstudio1.getString("fecha");
            if(fechaJson.equals(fechaString)){
              mensajeActividad.append(diaDeEstudio1.getString(parametroNombreActividad));
            }
          } catch (JSONException e) {
            e.printStackTrace();
          }
        }
        callback.onSuccess(mensajeActividad,context);
      }
      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
}
