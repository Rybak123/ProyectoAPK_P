package com.example.proyecto_apk.ui.home.ControlDeEstudio;

public class MateriaPojo {
  private int id;
  private String nombre;
  private String cantidadTiempo;

  public MateriaPojo(int id, String nombre, String cantidadTiempo) {
    this.id = id;
    this.nombre = nombre;
    this.cantidadTiempo = cantidadTiempo;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getNombre() {
    return nombre;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public String getCantidadTiempo() {
    return cantidadTiempo;
  }

  public void setCantidadTiempo(String cantidadTiempo) {
    this.cantidadTiempo = cantidadTiempo;
  }
  @Override
  public String toString() {
    return this.nombre;
  }
}
