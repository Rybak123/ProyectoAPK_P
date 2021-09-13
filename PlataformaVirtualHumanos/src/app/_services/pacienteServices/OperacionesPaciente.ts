import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import { ConeccionServidor} from '../conectionServices/ConeccionServidor'
import {HttpClient} from "@angular/common/http";
export class OperacionesPaciente
{
   
    constructor(private http:HttpClient) { }

    async obtenerPaciente(){
        var coneccionServidor=new ConeccionServidor(this.http);
        var pacienteInfo=localStorage.getItem('currentUser');
        if(pacienteInfo==null){
            pacienteInfo="null";
            throw console.error("Paciente no encontrado");
        }
        var usuario:any =JSON.parse(pacienteInfo);
        var carnetDeIdentidad=usuario.carnetDeIdentidad;
        var parametros={"carnetDeIdentidad": carnetDeIdentidad}
        return await coneccionServidor.coneccionServidor(parametros,"/pacientes/obtenerPaciente");
    }
    
}
