import { Injectable } from '@angular/core';
import{ GlobalConstants } from '../../global-constants';
import { HttpClient } from '@angular/common/http';
import { Evento } from 'src/app/_models/evento_model/Evento';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private actualizarEventos : Subject<null>;

  constructor(private http:HttpClient) {
    this.actualizarEventos = new Subject<null>();
  }
  public asObservable() 
  {
      return this.actualizarEventos.asObservable();
  }
  public actualizarNotificaiones(){
      this.actualizarEventos.next();
  }

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
  marcarVistoEvento(idEvento:String){
    var objetoCuerpoPeticion = {
      "_id": idEvento
    } 
    return this.http.post(`${GlobalConstants.apiURL}/eventos/desabilitarAdministrador`,objetoCuerpoPeticion);
  }
  marcarNoVistoEvento(idEvento:String){
    var objetoCuerpoPeticion = {
      "_id": idEvento
    } 
    return this.http.post(`${GlobalConstants.apiURL}/eventos/habilitarAdministrador`,objetoCuerpoPeticion);
  }
    
}
