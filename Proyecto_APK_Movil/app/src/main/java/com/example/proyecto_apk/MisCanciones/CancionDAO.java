package com.example.proyecto_apk.MisCanciones;

import android.content.Context;
import android.icu.text.SimpleDateFormat;
import android.os.Build;

import androidx.annotation.RequiresApi;

import com.android.volley.VolleyError;
import com.example.proyecto_apk.ConeccionConElServidor.ConeccionServidor;
import com.example.proyecto_apk.Interfaces.MisCancionesInterfaces.I_ListarCanciones;
import com.example.proyecto_apk.Interfaces.MisCancionesInterfaces.I_read_Cancion;
import com.example.proyecto_apk.Interfaces.VolleyCallback;
import com.example.proyecto_apk.MisLibros.LibroModel;
import com.example.proyecto_apk.PacienteLogueado;
import com.example.proyecto_apk.data.model.Paciente;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Locale;

public class CancionDAO {
  Context context;
  ConeccionServidor coneccionServidor;
  Paciente paciente;
  public CancionDAO(Context context) {
    this.context = context;
    coneccionServidor=new ConeccionServidor(context);
    paciente=((PacienteLogueado) context.getApplicationContext()).getPacienteLogueadoInfo();
  }
  public void listarCanciones(I_ListarCanciones callback){
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    coneccionServidor.coneccionHTTPPostWithToken(parametros, "/pacientes/listarCanciones", paciente.getToken(), new VolleyCallback() {
      @RequiresApi(api = Build.VERSION_CODES.N)
      @Override
      public void onSuccess(JSONObject result, Context context) {
        List<CancionModel> listaDeCanciones=new ArrayList<>();
        try {
          JSONArray misLibros=result.getJSONArray("");
          for (int i=0;i<misLibros.length();i++){
            JSONObject cancionJson=misLibros.getJSONObject(i);
            CancionModel nuevaCancion=new CancionModel();
            nuevaCancion.setId(cancionJson.getString("id"));
            nuevaCancion.setTitulo(cancionJson.getString("titulo"));
            nuevaCancion.setArtista(cancionJson.getString("artista"));
            Calendar cal = Calendar.getInstance();
            SimpleDateFormat sdf = new SimpleDateFormat("EEE MMM dd HH:mm:ss z yyyy", Locale.ENGLISH);
            try {
              cal.setTime(sdf.parse(cancionJson.getString("fecha")));
            } catch (ParseException e) {
              e.printStackTrace();
            }
            nuevaCancion.setFecha(cal);
            nuevaCancion.setGenero(cancionJson.getString("genero"));
            nuevaCancion.setDescripcion(cancionJson.getString("descripcion"));
            nuevaCancion.setImagenPortada(cancionJson.getString("imagenPortada"));
            listaDeCanciones.add(nuevaCancion);
          }
        } catch (JSONException e) {
          e.printStackTrace();
        }
        callback.onSuccess(listaDeCanciones,context);
      }
      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public void create_Cancion(String id,String titulo, String genero,String artista,Calendar fecha,String descripcion,String imagenPortada, VolleyCallback callback){
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    CancionModel nuevaCancion=new CancionModel();
    nuevaCancion.setId(id);
    nuevaCancion.setTitulo(titulo);
    nuevaCancion.setArtista(artista);
    nuevaCancion.setFecha(fecha);
    nuevaCancion.setGenero(genero);
    nuevaCancion.setDescripcion(descripcion);
    nuevaCancion.setImagenPortada(imagenPortada);
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
      parametros.put("cancion",nuevaCancion);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    coneccionServidor.coneccionHTTPPostWithToken(parametros, "/pacientes/create_Cancion", paciente.getToken(), new VolleyCallback() {
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
  public void read_Cancion(String idCancion, I_read_Cancion callback){
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
      parametros.put("id", idCancion);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    coneccionServidor.coneccionHTTPPostWithToken(parametros, "/pacientes/read_Cancion", paciente.getToken(), new VolleyCallback() {
      @RequiresApi(api = Build.VERSION_CODES.N)
      @Override
      public void onSuccess(JSONObject result, Context context) {
        JSONObject cancionJson=result;
        CancionModel nuevaCancion=new CancionModel();
        try {
          nuevaCancion.setId(cancionJson.getString("id"));
          nuevaCancion.setTitulo(cancionJson.getString("titulo"));
          nuevaCancion.setArtista(cancionJson.getString("artista"));
          Calendar cal = Calendar.getInstance();
          SimpleDateFormat sdf = new SimpleDateFormat("EEE MMM dd HH:mm:ss z yyyy", Locale.ENGLISH);
          try {
            cal.setTime(sdf.parse(cancionJson.getString("fecha")));
          } catch (ParseException e) {
            e.printStackTrace();
          }
          nuevaCancion.setFecha(cal);
          nuevaCancion.setGenero(cancionJson.getString("genero"));
          nuevaCancion.setDescripcion(cancionJson.getString("descripcion"));
          nuevaCancion.setImagenPortada(cancionJson.getString("imagenPortada"));
        } catch (JSONException e) {
          e.printStackTrace();
        }
        callback.onSuccess(nuevaCancion,context);
      }

      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public void update_Cancion(String id,String titulo, String genero,String artista,Calendar fecha,String descripcion,String imagenPortada, VolleyCallback callback){
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    CancionModel nuevaCancion=new CancionModel();
    nuevaCancion.setId(id);
    nuevaCancion.setTitulo(titulo);
    nuevaCancion.setArtista(artista);
    nuevaCancion.setFecha(fecha);
    nuevaCancion.setGenero(genero);
    nuevaCancion.setDescripcion(descripcion);
    nuevaCancion.setImagenPortada(imagenPortada);
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
      parametros.put("cancion",nuevaCancion);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    coneccionServidor.coneccionHTTPPostWithToken(parametros, "/pacientes/update_Cancion", paciente.getToken(), new VolleyCallback() {
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
  public void delete_Cancion(String idCancion, VolleyCallback callback){
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
      parametros.put("id", idCancion);
    } catch (JSONException e) {
      e.printStackTrace();
    }

    coneccionServidor.coneccionHTTPPostWithToken(parametros, "/pacientes/delete_Cancion", paciente.getToken(), new VolleyCallback() {
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
