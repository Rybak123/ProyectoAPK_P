package com.example.proyecto_apk.MisCanciones;

import android.content.Context;

import com.example.proyecto_apk.ConeccionConElServidor.ConeccionServidor;
import com.example.proyecto_apk.PacienteLogueado;
import com.example.proyecto_apk.data.model.Paciente;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Calendar;

public class CancionModel {
  String id;
  String titulo;
  String genero;
  String artista;
  Calendar fecha;
  String descripcion;
  String imagenPortada;

  public CancionModel() {
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getTitulo() {
    return titulo;
  }

  public void setTitulo(String titulo) {
    this.titulo = titulo;
  }

  public String getGenero() {
    return genero;
  }

  public void setGenero(String genero) {
    this.genero = genero;
  }

  public String getArtista() {
    return artista;
  }

  public void setArtista(String artista) {
    this.artista = artista;
  }

  public Calendar getFecha() {
    return fecha;
  }

  public void setFecha(Calendar fecha) {
    this.fecha = fecha;
  }

  public String getDescripcion() {
    return descripcion;
  }

  public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
  }

  public String getImagenPortada() {
    return imagenPortada;
  }

  public void setImagenPortada(String imagenPortada) {
    this.imagenPortada = imagenPortada;
  }


}
