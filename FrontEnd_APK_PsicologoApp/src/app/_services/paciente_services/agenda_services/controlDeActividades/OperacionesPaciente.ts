import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import { ConeccionServidor} from '../coneccionFrontEndServices/ConeccionServidor'
import {HttpClient} from "@angular/common/http";
export class OperacionesPaciente
{
   
    constructor(private http:HttpClient,private idpaciente:any) {

     }

    async obtenerPaciente(){
        var coneccionServidor=new ConeccionServidor(this.http);
        var parametros={"id": this.idpaciente}
        return await coneccionServidor.coneccionServidor(parametros,"/paciente/leerPaciente");
    }    
}
