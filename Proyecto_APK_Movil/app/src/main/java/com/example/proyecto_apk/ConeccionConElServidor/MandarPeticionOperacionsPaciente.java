package com.example.proyecto_apk.ConeccionConElServidor;

import android.content.Context;
import android.icu.number.Scale;
import android.widget.Toast;

import com.android.volley.VolleyError;
import com.example.proyecto_apk.Interfaces.I_ActualizarControlDeActividad;
import com.example.proyecto_apk.Interfaces.I_ObtenerControlDeActividadesPaciente;
import com.example.proyecto_apk.Interfaces.VolleyCallback;
import com.example.proyecto_apk.PacienteLogueado;
import com.example.proyecto_apk.data.model.Paciente;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Calendar;

public class MandarPeticionOperacionsPaciente {
  Context context;

  public MandarPeticionOperacionsPaciente(Context context) {
    this.context = context;
  }

  public Context getContext() {
    return context;
  }

  public void setContext(Context context) {
    this.context = context;
  }
  public void actualizarControlDeActividad(JSONObject parametros,String route, VolleyCallback callback){
    ConeccionServidor coneccionServidor=new ConeccionServidor(context);
    Paciente paciente=((PacienteLogueado) context.getApplicationContext()).getPacienteLogueadoInfo();
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    String token=paciente.getToken();
    Calendar MyDate = Calendar.getInstance();
    int month1=((MyDate.get(Calendar.MONTH)+1));
    int day1=(MyDate.get(Calendar.DAY_OF_MONTH));
    String month=String.valueOf(month1);
    String day=String.valueOf(day1);
    month="0"+month;
    day="0"+day;
    String fechaString = MyDate.get(Calendar.YEAR)+ "-"
      + month.substring(month.length()-2) + "-"
      + day.substring(day.length()-2);
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
      parametros.put("fecha", fechaString);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    coneccionServidor.coneccionHTTPPostWithToken(parametros, route, token, new VolleyCallback() {
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
  public void actualizaControlDeAgua(String actividadMensaje, I_ActualizarControlDeActividad callback){
    String actividadPropiedad="cantidadDeAgua";
    String route="/pacientes/actualizarControlDeConsumoDeAgua";
    JSONObject consultaJson=new JSONObject();
    try {
      consultaJson.put(actividadPropiedad,actividadMensaje);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    actualizarControlDeActividad(consultaJson, route, new VolleyCallback() {
      @Override
      public void onSuccess(JSONObject result, Context context) {
        callback.onSuccess(true,context);
      }

      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public void actualizaControlDeAnimo(String actividadMensaje, I_ActualizarControlDeActividad callback){
    String actividadPropiedad="estadoDeAnimo";
    String route="/pacientes/actualizarControlDeAnimo";
    JSONObject consultaJson=new JSONObject();
    try {
      consultaJson.put(actividadPropiedad,actividadMensaje);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    actualizarControlDeActividad(consultaJson, route, new VolleyCallback() {
      @Override
      public void onSuccess(JSONObject result, Context context) {
        callback.onSuccess(true,context);
      }

      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public void actualizaControlDeEnergia(String actividadMensaje, I_ActualizarControlDeActividad callback){
    String actividadPropiedad="porcentajeDeEnergia";
    String route="/pacientes/actualizarControlDeEnergia";
    JSONObject consultaJson=new JSONObject();
    try {
      consultaJson.put(actividadPropiedad,actividadMensaje);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    actualizarControlDeActividad(consultaJson, route, new VolleyCallback() {
      @Override
      public void onSuccess(JSONObject result, Context context) {
        callback.onSuccess(true,context);
      }

      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public void actualizaControlDeSueno(String actividadMensaje, I_ActualizarControlDeActividad callback){
    String actividadPropiedad="horasDeSueno";
    String route="/pacientes/actualizarControlDeSueno";
    JSONObject consultaJson=new JSONObject();
    try {
      consultaJson.put(actividadPropiedad,actividadMensaje);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    actualizarControlDeActividad(consultaJson, route, new VolleyCallback() {
      @Override
      public void onSuccess(JSONObject result, Context context) {
        callback.onSuccess(true,context);
      }

      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public void actualizaControlDeEstudio(JSONArray actividadMensaje, I_ActualizarControlDeActividad callback){
    String actividadPropiedad="materiasEstudiadas";
    String route="/pacientes/actualizarHorasDeEstudio";
    JSONObject consultaJson=new JSONObject();
    try {
      consultaJson.put(actividadPropiedad,actividadMensaje);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    actualizarControlDeActividad(consultaJson, route, new VolleyCallback() {
      @Override
      public void onSuccess(JSONObject result, Context context) {
        callback.onSuccess(true,context);
      }

      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
}
