import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/app/global-constants';
import { Psicologo } from 'src/app/_models/psicologo_model/psicologo';


@Injectable({
  providedIn: 'root'
})
export class PsicologoService {
//añadimos dependencia por medio de el httpclient injectable
  constructor(private http:HttpClient) { }

  listarPsicologo(){
    return this.http.get<Psicologo[]>(`${GlobalConstants.apiURL}/psicologo/listarPsicologo`);
  }
  registrarPsicologo(psicologo:Psicologo){
    return this.http.post(`${GlobalConstants.apiURL}/psicologo/registrarPsicologo`,psicologo);
  }
  leerPsicologo(idPsicologo:String){
    var objetoCuerpoPeticion={
      "id":idPsicologo
    }
    return this.http.post(`${GlobalConstants.apiURL}/psicologo/leerPsicologo`, objetoCuerpoPeticion);
  }
  modificarPsicologo(psicologo:Psicologo){
    return this.http.post(`${GlobalConstants.apiURL}/psicologo/modificarPsicologo`, psicologo);
  }
  deshabilitarPsicologo(idPsicologo:String){
    var objetoCuerpoPeticion={
      "id":idPsicologo
    }
    return this.http.post(`${GlobalConstants.apiURL}/psicologo/deshabilitarPsicologo`, objetoCuerpoPeticion);

  }
  habilitarPsicologo(idPsicologo:String){
    var objetoCuerpoPeticion={
      "id":idPsicologo
    }
    return this.http.post(`${GlobalConstants.apiURL}/psicologo/habilitarPsicologo`, objetoCuerpoPeticion);
  }
  recuperarContrasena(correoElectronico:String){
    var objetoCuerpoPeticion=
    {
      "correoElectronico":correoElectronico
    }
    return this.http.post(`${GlobalConstants.apiURL}/psicologo/recuperarContrasena`, objetoCuerpoPeticion);
  }
  respuestaCambiarContrasena(token:any,id:any,contrasena:any){
    var objetoCuerpoPeticion=
    {
      "token":token,
      "id":id,
      "contrasena":contrasena
    }
    return this.http.post(`${GlobalConstants.apiURL}/psicologo/enlaceCambiarContrasena`, objetoCuerpoPeticion);
  }
  
}