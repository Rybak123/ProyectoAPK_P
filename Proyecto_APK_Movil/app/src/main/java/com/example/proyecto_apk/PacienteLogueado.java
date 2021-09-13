package com.example.proyecto_apk;

import android.app.Application;

import com.example.proyecto_apk.data.model.Paciente;

public class PacienteLogueado extends Application {

  private String URLApplication;
  private Paciente pacienteLogueadoInfo;

  public String getURLApplication() {
    return URLApplication;
  }

  public void setURLApplication(String URLApplication) {
    this.URLApplication = URLApplication;
  }

  public Paciente getPacienteLogueadoInfo() {
    return this.pacienteLogueadoInfo;
  }

  public void setPacienteLogueadoInfo(Paciente paciente) {
    this.pacienteLogueadoInfo = paciente;
  }
}
