import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../global-constants';
import { Paciente } from '../_models/paciente_model/paciente';
import { pPuebaGeneral } from '../_models/pruebasDeDesarrolloCognitivo-model/pruebasDeDesarrolloCognitivo';

@Injectable({
  providedIn: 'root'
})

export class PacienteService {
  constructor(private http:HttpClient) {}

  listarPacientes(){    
    return this.http.get<Paciente[]>(`${GlobalConstants.apiURL}/paciente/listarPacientes`);               
  }
  registrarPaciente(paciente: Paciente){
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
  //para ver las pruebas de desarrollo cognitivo
  listarPruebasDeDesarolloCognitivo(){

    return this.http.get<pPuebaGeneral[]>(`${GlobalConstants.apiURL}/pruebasGenerales/listarPruebaGeneral`);

  }

  obtenePruebasDeDesarolloCognitivo(codigoDePrueba:String){

  var objetoCuerpoPeticion = {

        "id": codigoDePrueba

      }

      return this.http.post(`${GlobalConstants.apiURL}/pruebasGenerales/leerPruebaGeneral`,objetoCuerpoPeticion);

  }
  marcarComoVistoUnEvento(idPaciente:any,idEvento:any){
    var objetoCuerpoPeticion=
    {
      carnetDeIdentidad:idPaciente,
      idEvento:idEvento,
    }
    return this.http.post(`${GlobalConstants.apiURL}/paciente/aumentarNotificacionesVistas`, objetoCuerpoPeticion);
  }
  desmarcarComoVistoUnEvento(idPaciente:any,idEvento:any){
    var objetoCuerpoPeticion=
    {
      carnetDeIdentidad:idPaciente,
      idEvento:idEvento,
    }
    return this.http.post(`${GlobalConstants.apiURL}/paciente/quitarNotificacionVista`, objetoCuerpoPeticion);
  }
  ingresarPruebaDeDesarolloCognitivo(idPaciente:any,pruebaDeDesarolloCognitivo:any){
    var objetoCuerpoPeticion=
    {
      id:idPaciente,
      pruebasDeDesarolloCognitivo:pruebaDeDesarolloCognitivo,
    }
    return this.http.post(`${GlobalConstants.apiURL}/paciente/ingresarPruebaDeDesarolloCognitivo`, objetoCuerpoPeticion).toPromise();
  }
  leerPruebasDeDesarolloCognitivo(idPaciente:any){
    
    return this.http.post(`${GlobalConstants.apiURL}/paciente/leerPruebaDeDesarolloCognitivo`,{idPaciente}).toPromise();
  }
}
