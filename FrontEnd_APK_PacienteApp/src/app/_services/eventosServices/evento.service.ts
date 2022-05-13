import { Injectable } from '@angular/core';
import{ GlobalConstants } from '../../global-constants';
import { HttpClient } from '@angular/common/http';
import { Evento } from 'src/app/_models/evento_model/Evento';


@Injectable({
  providedIn: 'root'
})
export class EventoService {


  constructor(private http:HttpClient) { }
  listarEventos(){
    return this.http.get<Evento[]>(`${GlobalConstants.apiURL}/eventos/listarEvento`);
  }
  registrarEventos(evento:Evento){
    return this.http.post(`${GlobalConstants.apiURL}/eventos/registrarEvento`,evento);
  }
  leerEventos(idEvento:String){
    var objetoCuerpoPeticion = {
      "_id": idEvento
    } 
    return this.http.post(`${GlobalConstants.apiURL}/eventos/leerEvento`,objetoCuerpoPeticion);
  }

  modificarEvento(evento:Evento){
    return this.http.post(`${GlobalConstants.apiURL}/eventos/modificarEvento`,evento);

  }
  
  desabilitarEvento(idEvento:String){
    var objetoCuerpoPeticion = {
      "_id": idEvento
    } 
    return this.http.post(`${GlobalConstants.apiURL}/eventos/desabilitarAdministrador`,objetoCuerpoPeticion);
  }
  habilitarEvento(idEvento:String){
    var objetoCuerpoPeticion = {
      "_id": idEvento
    } 
    return this.http.post(`${GlobalConstants.apiURL}/eventos/habilitarAdministrador`,objetoCuerpoPeticion);
  }
    
}
