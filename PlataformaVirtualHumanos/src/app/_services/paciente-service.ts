import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../global-constants';
import { Paciente } from '../_models/paciente_model/paciente';

@Injectable({
  providedIn: 'root'
})

export class PacienteService {
  constructor(private http:HttpClient) {}

  listarPacientes(){    
    return this.http.get<Paciente[]>(`${GlobalConstants.apiURL}/paciente/listarPacientes`);               

  }
  registrarPaciente(paciente: Paciente){
    console.log(paciente);
    return this.http.post(`${GlobalConstants.apiURL}/paciente/registrarPaciente`, paciente);
  }

  leerPaciente(idPaciente:String){
    var objetoCuerpoPeticion=
    {
      "id":idPaciente
    }
    return this.http.post(`${GlobalConstants.apiURL}/paciente/leerPaciente`, objetoCuerpoPeticion);
  }

  modificarPaciente(paciente: Paciente){
    return this.http.post(`${GlobalConstants.apiURL}/paciente/modificarPaciente`, paciente);
  }
  
  deshabilitarPaciente(idPaciente:String){
    var objetoCuerpoPeticion=
    {
      "id":idPaciente
    }
    return this.http.post(`${GlobalConstants.apiURL}/paciente/deshabilitarPaciente`, objetoCuerpoPeticion);
  }
  habilitarPaciente(idPaciente:String){
    var objetoCuerpoPeticion=
    {
      "id":idPaciente
    }
    return this.http.post(`${GlobalConstants.apiURL}/paciente/habiltiar_Paciente`, objetoCuerpoPeticion);
  }
  recuperarContrasena(correoElectronico:String){
    var objetoCuerpoPeticion=
    {
      "correoElectronico":correoElectronico
    }
    return this.http.post(`${GlobalConstants.apiURL}/paciente/recuperarContrasena`, objetoCuerpoPeticion);
  }
  respuestaCambiarContrasena(token:any,id:any,contrasena:any){
    var objetoCuerpoPeticion=
    {
      "token":token,
      "id":id,
      "contrasena":contrasena
    }
    return this.http.post(`${GlobalConstants.apiURL}/paciente/enlaceCambiarContrasena`, objetoCuerpoPeticion);
  }

}
