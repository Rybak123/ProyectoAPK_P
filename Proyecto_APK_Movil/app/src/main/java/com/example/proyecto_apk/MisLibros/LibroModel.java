package com.example.proyecto_apk.MisLibros;

import java.util.Calendar;

public class LibroModel {
  String id;
  String titulo;
  String autor;
  String editorial;
  int cantidadPaginas;
  Calendar fecha;
  String genero;
  String descripcion;
  String imagenPortada;

  LibroModel(){}

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

  public String getAutor() {
    return autor;
  }

  public void setAutor(String autor) {
    this.autor = autor;
  }

  public String getEditorial() {
    return editorial;
  }

  public void setEditorial(String editorial) {
    this.editorial = editorial;
  }

  public int getCantidadPaginas() {
    return cantidadPaginas;
  }

  public void setCantidadPaginas(int cantidadPaginas) {
    this.cantidadPaginas = cantidadPaginas;
  }

  public Calendar getFecha() {
    return fecha;
  }

  public void setFecha(Calendar fecha) {
    this.fecha = fecha;
  }

  public String getGenero() {
    return genero;
  }

  public void setGenero(String genero) {
    this.genero = genero;
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
