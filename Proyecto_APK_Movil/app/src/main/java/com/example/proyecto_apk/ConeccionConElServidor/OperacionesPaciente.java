package com.example.proyecto_apk.ConeccionConElServidor;

import android.content.Context;
import android.graphics.Color;

import com.android.volley.VolleyError;
import com.applandeo.materialcalendarview.CalendarView;
import com.applandeo.materialcalendarview.EventDay;
import com.example.proyecto_apk.Interfaces.I_ObtenerControlDeActividadesPaciente;
import com.example.proyecto_apk.Interfaces.VolleyCallback;
import com.example.proyecto_apk.PacienteLogueado;
import com.example.proyecto_apk.R;
import com.example.proyecto_apk.data.model.Paciente;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class OperacionesPaciente {
  Context context;
  String token;

  public OperacionesPaciente(Context context) {
    this.context = context;
  }

  public Context getContext() {
    return context;
  }

  public void setContext(Context context) {
    this.context = context;
  }

  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }

  public void obtenerInfomracionPaciente(VolleyCallback callback){
    ConeccionServidor coneccionServidor=new ConeccionServidor(context);
    Paciente paciente=((PacienteLogueado) context.getApplicationContext()).getPacienteLogueadoInfo();
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    coneccionServidor.coneccionHTTPPostWithToken(parametros,"/pacientes/obtenerPaciente", paciente.getToken(), new VolleyCallback() {
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
  public void obtenerControlDeAgua(I_ObtenerControlDeActividadesPaciente callback){
    ConeccionServidor coneccionServidor=new ConeccionServidor(context);
    Paciente paciente=((PacienteLogueado) context.getApplicationContext()).getPacienteLogueadoInfo();
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    coneccionServidor.coneccionHTTPPostWithToken(parametros,"/pacientes/obtenerPaciente", paciente.getToken(), new VolleyCallback() {
      @Override
      public void onSuccess(JSONObject paciente, Context context) {
        try {
          JSONObject agendaVirtual=paciente.getJSONObject("agendaVirtual");
          JSONObject controlDeEstudio=agendaVirtual.getJSONObject("controlDeConsumoDeAgua");
          JSONArray diasDeEstudio=controlDeEstudio.getJSONArray("diasControlados");
          callback.onSuccess(diasDeEstudio,context);
        } catch (JSONException e) {
          e.printStackTrace();
        }
      }
      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public void obtenerControlDeAnimo(I_ObtenerControlDeActividadesPaciente callback){
    ConeccionServidor coneccionServidor=new ConeccionServidor(context);
    Paciente paciente=((PacienteLogueado) context.getApplicationContext()).getPacienteLogueadoInfo();
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    coneccionServidor.coneccionHTTPPostWithToken(parametros,"/pacientes/obtenerPaciente", paciente.getToken(), new VolleyCallback() {
      @Override
      public void onSuccess(JSONObject paciente, Context context) {
        try {
          JSONObject agendaVirtual=paciente.getJSONObject("agendaVirtual");
          JSONObject controlDeEstudio=agendaVirtual.getJSONObject("controlDeAnimo");
          JSONArray diasDeEstudio=controlDeEstudio.getJSONArray("diasControlados");
          callback.onSuccess(diasDeEstudio,context);
        } catch (JSONException e) {
          e.printStackTrace();
        }
      }
      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public void obtenerControlDeEnergia(I_ObtenerControlDeActividadesPaciente callback){
    ConeccionServidor coneccionServidor=new ConeccionServidor(context);
    Paciente paciente=((PacienteLogueado) context.getApplicationContext()).getPacienteLogueadoInfo();
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    coneccionServidor.coneccionHTTPPostWithToken(parametros,"/pacientes/obtenerPaciente", paciente.getToken(), new VolleyCallback() {
      @Override
      public void onSuccess(JSONObject paciente, Context context) {
        try {
          JSONObject agendaVirtual=paciente.getJSONObject("agendaVirtual");
          JSONObject controlDeEstudio=agendaVirtual.getJSONObject("controlDeEnergia");
          JSONArray diasDeEstudio=controlDeEstudio.getJSONArray("diasControlados");
          callback.onSuccess(diasDeEstudio,context);
        } catch (JSONException e) {
          e.printStackTrace();
        }
      }
      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public void obtenerControlDeEstudio(I_ObtenerControlDeActividadesPaciente callback){
    ConeccionServidor coneccionServidor=new ConeccionServidor(context);
    Paciente paciente=((PacienteLogueado) context.getApplicationContext()).getPacienteLogueadoInfo();
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    coneccionServidor.coneccionHTTPPostWithToken(parametros,"/pacientes/obtenerPaciente", paciente.getToken(), new VolleyCallback() {
      @Override
      public void onSuccess(JSONObject paciente, Context context) {
        try {
          JSONObject agendaVirtual=paciente.getJSONObject("agendaVirtual");
          JSONObject controlDeEstudio=agendaVirtual.getJSONObject("controlDeEstudio");
          JSONArray diasDeEstudio=controlDeEstudio.getJSONArray("diasControlados");
          callback.onSuccess(diasDeEstudio,context);
        } catch (JSONException e) {
          e.printStackTrace();
        }
      }
      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public void obtenerControlDeSueno(I_ObtenerControlDeActividadesPaciente callback){
    ConeccionServidor coneccionServidor=new ConeccionServidor(context);
    Paciente paciente=((PacienteLogueado) context.getApplicationContext()).getPacienteLogueadoInfo();
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    coneccionServidor.coneccionHTTPPostWithToken(parametros,"/pacientes/obtenerPaciente", paciente.getToken(), new VolleyCallback() {
      @Override
      public void onSuccess(JSONObject paciente, Context context) {
        try {
          JSONObject agendaVirtual=paciente.getJSONObject("agendaVirtual");
          JSONObject controlDeEstudio=agendaVirtual.getJSONObject("controlDeSueno");
          JSONArray diasDeEstudio=controlDeEstudio.getJSONArray("diasControlados");
          callback.onSuccess(diasDeEstudio,context);
        } catch (JSONException e) {
          e.printStackTrace();
        }
      }
      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public List<EventDay> convertirAEventoCalendario_estudio(JSONArray diasDeActividad,Context context){
    List<EventDay> events =new ArrayList<>();
    for(int i=0;i<diasDeActividad.length();i++){
      JSONObject diaDeEstudio1= null;
      try {
        diaDeEstudio1 = diasDeActividad.getJSONObject(i);
        String[] fechaJson=diaDeEstudio1.getString("fecha").toString().split("-");
        Calendar fecha=Calendar.getInstance();
        fecha.set(Integer.parseInt(fechaJson[0]),Integer.parseInt(fechaJson[1])-1,Integer.parseInt(fechaJson[2]));
        events.add(new EventDay(fecha, R.drawable.libro, Color.parseColor("#228B22")));

      } catch (JSONException e) {
        e.printStackTrace();

      }
    }
    return events;
  }
  public List<EventDay> convertirAEventoCalendario_sueno(JSONArray diasDeActividad,Context context){
    List<EventDay> events =new ArrayList<>();
    for(int i=0;i<diasDeActividad.length();i++){
      JSONObject diaDeEstudio1= null;
      try {
        diaDeEstudio1 = diasDeActividad.getJSONObject(i);
        String[] fechaJson=diaDeEstudio1.getString("fecha").toString().split("-");
        Calendar fecha=Calendar.getInstance();
        fecha.set(Integer.parseInt(fechaJson[0]),Integer.parseInt(fechaJson[1])-1,Integer.parseInt(fechaJson[2]));
        events.add(new EventDay(fecha, R.drawable.sonando, Color.parseColor("#228B22")));

      } catch (JSONException e) {
        e.printStackTrace();

      }
    }
    return events;
  }
  public List<EventDay> convertirAEventoCalendario_agua(JSONArray diasDeActividad,Context context){
    List<EventDay> events =new ArrayList<>();
    for(int i=0;i<diasDeActividad.length();i++){
      JSONObject diaDeEstudio1= null;
      try {
        diaDeEstudio1 = diasDeActividad.getJSONObject(i);
        String[] fechaJson=diaDeEstudio1.getString("fecha").toString().split("-");
        Calendar fecha=Calendar.getInstance();
        fecha.set(Integer.parseInt(fechaJson[0]),Integer.parseInt(fechaJson[1])-1,Integer.parseInt(fechaJson[2]));
        events.add(new EventDay(fecha, R.drawable.waterdrop, Color.parseColor("#228B22")));

      } catch (JSONException e) {
        e.printStackTrace();

      }
    }
    return events;
  }
  public List<EventDay> convertirAEventoCalendario_animo(JSONArray diasDeActividad,Context context){
    List<EventDay> events =new ArrayList<>();
    for(int i=0;i<diasDeActividad.length();i++){
      JSONObject diaDeEstudio1= null;
      try {
        diaDeEstudio1 = diasDeActividad.getJSONObject(i);
        String[] fechaJson=diaDeEstudio1.getString("fecha").toString().split("-");
        Calendar fecha=Calendar.getInstance();
        fecha.set(Integer.parseInt(fechaJson[0]),Integer.parseInt(fechaJson[1])-1,Integer.parseInt(fechaJson[2]));
        events.add(new EventDay(fecha, R.drawable.leave, Color.parseColor("#228B22")));

      } catch (JSONException e) {
        e.printStackTrace();

      }
    }
    return events;
  }
  public List<EventDay> convertirAEventoCalendario_energia(JSONArray diasDeActividad,Context context){
    List<EventDay> events =new ArrayList<>();
    for(int i=0;i<diasDeActividad.length();i++){
      JSONObject diaDeEstudio1= null;
      try {
        diaDeEstudio1 = diasDeActividad.getJSONObject(i);
        String[] fechaJson=diaDeEstudio1.getString("fecha").toString().split("-");
        Calendar fecha=Calendar.getInstance();
        fecha.set(Integer.parseInt(fechaJson[0]),Integer.parseInt(fechaJson[1])-1,Integer.parseInt(fechaJson[2]));
        events.add(new EventDay(fecha, R.drawable.lighting, Color.parseColor("#228B22")));

      } catch (JSONException e) {
        e.printStackTrace();

      }
    }
    return events;
  }
}
