package com.example.proyecto_apk.MisLibros;

import android.content.Context;
import android.icu.text.SimpleDateFormat;
import android.os.Build;

import androidx.annotation.RequiresApi;

import com.android.volley.VolleyError;
import com.example.proyecto_apk.ConeccionConElServidor.ConeccionServidor;
import com.example.proyecto_apk.Interfaces.MisLibrosInterfaces.I_ListarLibros;
import com.example.proyecto_apk.Interfaces.MisLibrosInterfaces.I_read_Libro;
import com.example.proyecto_apk.Interfaces.VolleyCallback;
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

public class LibroDAO {
  Context context;
  ConeccionServidor coneccionServidor;
  Paciente paciente;
  public LibroDAO(Context context) {
    this.context = context;
    coneccionServidor=new ConeccionServidor(context);
    paciente=((PacienteLogueado) context.getApplicationContext()).getPacienteLogueadoInfo();
  }
  public void listarLibros(I_ListarLibros callback){
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    coneccionServidor.coneccionHTTPPostWithToken(parametros, "/pacientes/listarLibros", paciente.getToken(), new VolleyCallback() {
      @RequiresApi(api = Build.VERSION_CODES.N)
      @Override
      public void onSuccess(JSONObject result, Context context) {
        List<LibroModel> listaDeLibros=new ArrayList<>();
        try {
          JSONArray misLibros=result.getJSONArray("");
          for (int i=0;i<misLibros.length();i++){
            JSONObject libroJson=misLibros.getJSONObject(i);
            LibroModel nuevoLibro=new LibroModel();
            nuevoLibro.setId(libroJson.getString("id"));
            nuevoLibro.setTitulo(libroJson.getString("titulo"));
            nuevoLibro.setAutor(libroJson.getString("autor"));
            nuevoLibro.setEditorial(libroJson.getString("editorial"));
            nuevoLibro.setCantidadPaginas(libroJson.getInt("cantidadPaginas"));
            Calendar cal = Calendar.getInstance();
            SimpleDateFormat sdf = new SimpleDateFormat("EEE MMM dd HH:mm:ss z yyyy", Locale.ENGLISH);
            try {
              cal.setTime(sdf.parse(libroJson.getString("fecha")));
            } catch (ParseException e) {
              e.printStackTrace();
            }
            nuevoLibro.setFecha(cal);
            nuevoLibro.setGenero(libroJson.getString("genero"));
            nuevoLibro.setDescripcion(libroJson.getString("descripcion"));
            nuevoLibro.setImagenPortada(libroJson.getString("imagenPortada"));
            listaDeLibros.add(nuevoLibro);
          }
        } catch (JSONException e) {
          e.printStackTrace();
        }
        callback.onSuccess(listaDeLibros,context);
      }
      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public void create_Libro(String id,String titulo,String autor,String editorial,int cantidadPaginas,Calendar fecha, String genero,String descripcion,String imagenPortada, VolleyCallback callback){
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    LibroModel nuevoLibro=new LibroModel();
    nuevoLibro.setId(id);
    nuevoLibro.setTitulo(titulo);
    nuevoLibro.setAutor(autor);
    nuevoLibro.setEditorial(editorial);
    nuevoLibro.setCantidadPaginas(cantidadPaginas);
    nuevoLibro.setFecha(fecha);
    nuevoLibro.setGenero(genero);
    nuevoLibro.setDescripcion(descripcion);
    nuevoLibro.setImagenPortada(imagenPortada);
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
      parametros.put("libro",nuevoLibro);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    coneccionServidor.coneccionHTTPPostWithToken(parametros, "/pacientes/create_Libro", paciente.getToken(), new VolleyCallback() {
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
  public void read_Libro(String idLibro, I_read_Libro callback){

    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
      parametros.put("id", idLibro);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    coneccionServidor.coneccionHTTPPostWithToken(parametros, "/pacientes/read_Libro", paciente.getToken(), new VolleyCallback() {
      @RequiresApi(api = Build.VERSION_CODES.N)
      @Override
      public void onSuccess(JSONObject result, Context context) {
        JSONObject libroJson=result;
        LibroModel nuevoLibro=new LibroModel();
        try {
          nuevoLibro.setId(libroJson.getString("id"));
          nuevoLibro.setTitulo(libroJson.getString("titulo"));
          nuevoLibro.setAutor(libroJson.getString("autor"));
          nuevoLibro.setEditorial(libroJson.getString("editorial"));
          nuevoLibro.setCantidadPaginas(libroJson.getInt("cantidadPaginas"));
          Calendar cal = Calendar.getInstance();
          SimpleDateFormat sdf = new SimpleDateFormat("EEE MMM dd HH:mm:ss z yyyy", Locale.ENGLISH);
          try {
            cal.setTime(sdf.parse(libroJson.getString("fecha")));
          } catch (ParseException e) {
            e.printStackTrace();
          }
          nuevoLibro.setFecha(cal);
          nuevoLibro.setGenero(libroJson.getString("genero"));
          nuevoLibro.setDescripcion(libroJson.getString("descripcion"));
          nuevoLibro.setImagenPortada(libroJson.getString("imagenPortada"));
        } catch (JSONException e) {
          e.printStackTrace();
        }
        callback.onSuccess(nuevoLibro,context);
      }

      @Override
      public void onErrorResponse(VolleyError error, Context context) {
        callback.onErrorResponse(error,context);
      }
    });
  }
  public void update_Libro(String id,String titulo,String autor,String editorial,int cantidadPaginas,Calendar fecha, String genero,String descripcion,String imagenPortada, VolleyCallback callback){
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    LibroModel nuevoLibro=new LibroModel();
    nuevoLibro.setId(id);
    nuevoLibro.setTitulo(titulo);
    nuevoLibro.setAutor(autor);
    nuevoLibro.setEditorial(editorial);
    nuevoLibro.setCantidadPaginas(cantidadPaginas);
    nuevoLibro.setFecha(fecha);
    nuevoLibro.setGenero(genero);
    nuevoLibro.setDescripcion(descripcion);
    nuevoLibro.setImagenPortada(imagenPortada);
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
      parametros.put("libro",nuevoLibro);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    coneccionServidor.coneccionHTTPPostWithToken(parametros, "/pacientes/update_Libro", paciente.getToken(), new VolleyCallback() {
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
  public void delete_Libro(String idLibro, VolleyCallback callback){
    String carnetDeIdentidad=String.valueOf(paciente.getCarnetDeIdentidad());
    JSONObject parametros=new JSONObject();
    try {
      parametros.put("carnetDeIdentidad", carnetDeIdentidad);
      parametros.put("id", idLibro);
    } catch (JSONException e) {
      e.printStackTrace();
    }

    coneccionServidor.coneccionHTTPPostWithToken(parametros, "/pacientes/delete_Libro", paciente.getToken(), new VolleyCallback() {
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
