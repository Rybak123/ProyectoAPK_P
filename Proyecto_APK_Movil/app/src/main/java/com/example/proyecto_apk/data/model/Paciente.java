package com.example.proyecto_apk.data.model;

import java.util.Date;

public class Paciente {
  int carnetDeIdentidad;
  String nombres;
  String apellidos;
  String lugarDeNacimiento;
  Date fechaDeNacimiento;
  String sexo;
  int numeroDeContacto;
  String correoElectronico;
  String contrasena;
  String nombreDeUsuario;
  Object parientes;
  String hash;
  Object agendaVirtual;
  String token;

  public Paciente() {
  }

  public Paciente(int carnetDeIdentidad, String nombres, String apellidos, String lugarDeNacimiento, Date fechaDeNacimiento, String sexo, int numeroDeContacto, String correoElectronico, String contrasena, String nombreDeUsuario, Object parientes, String hash, Object agendaVirtual, String token) {
    this.carnetDeIdentidad = carnetDeIdentidad;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.lugarDeNacimiento = lugarDeNacimiento;
    this.fechaDeNacimiento = fechaDeNacimiento;
    this.sexo = sexo;
    this.numeroDeContacto = numeroDeContacto;
    this.correoElectronico = correoElectronico;
    this.contrasena = contrasena;
    this.nombreDeUsuario = nombreDeUsuario;
    this.parientes = parientes;
    this.hash = hash;
    this.agendaVirtual = agendaVirtual;
    this.token = token;
  }

  public int getCarnetDeIdentidad() {
    return carnetDeIdentidad;
  }

  public void setCarnetDeIdentidad(int carnetDeIdentidad) {
    this.carnetDeIdentidad = carnetDeIdentidad;
  }

  public String getNombres() {
    return nombres;
  }

  public void setNombres(String nombres) {
    this.nombres = nombres;
  }

  public String getApellidos() {
    return apellidos;
  }

  public void setApellidos(String apellidos) {
    this.apellidos = apellidos;
  }

  public String getLugarDeNacimiento() {
    return lugarDeNacimiento;
  }

  public void setLugarDeNacimiento(String lugarDeNacimiento) {
    this.lugarDeNacimiento = lugarDeNacimiento;
  }

  public Date getFechaDeNacimiento() {
    return fechaDeNacimiento;
  }

  public void setFechaDeNacimiento(Date fechaDeNacimiento) {
    this.fechaDeNacimiento = fechaDeNacimiento;
  }

  public String getSexo() {
    return sexo;
  }

  public void setSexo(String sexo) {
    this.sexo = sexo;
  }

  public int getNumeroDeContacto() {
    return numeroDeContacto;
  }

  public void setNumeroDeContacto(int numeroDeContacto) {
    this.numeroDeContacto = numeroDeContacto;
  }

  public String getCorreoElectronico() {
    return correoElectronico;
  }

  public void setCorreoElectronico(String correoElectronico) {
    this.correoElectronico = correoElectronico;
  }

  public String getContrasena() {
    return contrasena;
  }

  public void setContrasena(String contrasena) {
    this.contrasena = contrasena;
  }

  public String getNombreDeUsuario() {
    return nombreDeUsuario;
  }

  public void setNombreDeUsuario(String nombreDeUsuario) {
    this.nombreDeUsuario = nombreDeUsuario;
  }

  public Object getParientes() {
    return parientes;
  }

  public void setParientes(Object parientes) {
    this.parientes = parientes;
  }

  public String getHash() {
    return hash;
  }

  public void setHash(String hash) {
    this.hash = hash;
  }

  public Object getAgendaVirtual() {
    return agendaVirtual;
  }

  public void setAgendaVirtual(Object agendaVirtual) {
    this.agendaVirtual = agendaVirtual;
  }

  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }

  public String getUserId() {
    return "";
  }

  public String getDisplayName() {
    return "";
  }
}
