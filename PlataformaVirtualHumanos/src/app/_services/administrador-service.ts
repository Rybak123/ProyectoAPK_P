import { Injectable } from '@angular/core';
import{ GlobalConstants } from '../global-constants';
import { HttpClient } from '@angular/common/http';
import { Administrador } from '../_models/administrador_model/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http:HttpClient) { }
  listarAdministrador(){
    return this.http.get<Administrador[]>(`${GlobalConstants.apiURL}/administrador/listarAdministrador`);
  }
  registrarAdminstrador(administrador:Administrador){
    return this.http.post(`${GlobalConstants.apiURL}/administrador/registrarAdministrador`,administrador);
  }
  leerAdminstrador(idAdministrador:String){
    var objetoCuerpoPeticion = {
      "id": idAdministrador
    } 
    return this.http.post(`${GlobalConstants.apiURL}/administrador/leerAdministrador`,objetoCuerpoPeticion);
  }
  modificarAdminstrador(administrador:Administrador){
    return this.http.post(`${GlobalConstants.apiURL}/administrador/modificarAdministrador`,administrador);

  }
  desabilitarAdmisntrador(idAdministrador:String){
    var objetoCuerpoPeticion = {
      "id": idAdministrador
    } 
    return this.http.post(`${GlobalConstants.apiURL}/administrador/desabilitarAdministrador`,objetoCuerpoPeticion);
  }
  habilitarAdministrador(idAdministrador:String){
    var objetoCuerpoPeticion = {
      "id": idAdministrador
    } 
    return this.http.post(`${GlobalConstants.apiURL}/administrador/habilitarAdministrador`,objetoCuerpoPeticion);
  }
  recuperarContrasena(correoElectronico:String){
    var objetoCuerpoPeticion=
    {
      "correoElectronico":correoElectronico
    }
    return this.http.post(`${GlobalConstants.apiURL}/administrador/recuperarContrasena`, objetoCuerpoPeticion);
  }
  respuestaCambiarContrasena(token:any,id:any,contrasena:any){
    var objetoCuerpoPeticion=
    {
      "token":token,
      "id":id,
      "contrasena":contrasena
    }
    return this.http.post(`${GlobalConstants.apiURL}/administrador/enlaceCambiarContrasena`, objetoCuerpoPeticion);
  }
}
