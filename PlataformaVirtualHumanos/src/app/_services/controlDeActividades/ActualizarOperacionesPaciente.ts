import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import {ConeccionServidor} from '../coneccionFrontEndServices/ConeccionServidor'
import {OperacionesPaciente} from './OperacionesPaciente';
import {HttpClient} from "@angular/common/http";
export class ActualizarOperacionesPaciente
{
    operacionesPaciente:any;
    constructor(private http:HttpClient) {
        this.operacionesPaciente=new OperacionesPaciente(this.http);
    }
    async obtenerControlDeAnimo(){
        return this.operacionesPaciente.obtenerPaciente()
        .then((paciente:any) => {
            //Cambiar
            var localControlDeActividad=paciente.agendaVirtual.controlDeAnimo;
            var diasControlados=localControlDeActividad.diasControlados;
            return diasControlados;
        })
        .catch((error:any) => {
            console.error( 'función enRechazo invocada: ', error );
            return error;
        })
    }
    async obtenerControlDeAgua(){
        return await this.operacionesPaciente.obtenerPaciente()
        .then((paciente:any) => {
            var localControlDeActividad=paciente.agendaVirtual.controlDeConsumoDeAgua;
            var diasControlados=localControlDeActividad.diasControlados;
            return diasControlados;
            
        })
        .catch((error:any) => {
            console.error( 'función enRechazo invocada: ', error );
            return error;
        })
    }
    async obtenerControlDeEstudio(){
        return this.operacionesPaciente.obtenerPaciente()
        .then((paciente:any) => {
            //Cambiar
            var localControlDeActividad=paciente.agendaVirtual.controlDeEstudio;
            var diasControlados=localControlDeActividad.diasControlados;
            return diasControlados;
            
        })
        .catch((error:any) => {
            console.error( 'función enRechazo invocada: ', error );
            return error;
        })
    }
    async obtenerControlDeEnergia(){
        return this.operacionesPaciente.obtenerPaciente()
        .then((paciente:any) => {
            //Cambiar
            var localControlDeActividad=paciente.agendaVirtual.controlDeEnergia;
            var diasControlados=localControlDeActividad.diasControlados;
            return diasControlados;
            
        })
        .catch((error:any) => {
            console.error( 'función enRechazo invocada: ', error );
            return error;
        })
    }
    async obtenerControlDeSueno(){
        return this.operacionesPaciente.obtenerPaciente()
        .then((paciente:any) => {
            //Cambiar
            var localControlDeActividad=paciente.agendaVirtual.controlDeSueno;
            var diasControlados=localControlDeActividad.diasControlados;
            return diasControlados;
            
        })
        .catch((error:any) => {
            console.error( 'función enRechazo invocada: ', error );
            return error;
        })
    }
    convertirAEventosCalendario(activiadaJsonArray:any){
        var calendarEvents: EventInput[] = [];
        activiadaJsonArray.forEach((element: any) => {
            var anio:any=element.fecha.split("-")[0];
            var mes:any=element.fecha.split("-")[1];
            var dia:any=element.fecha.split("-")[2];
            var mydate = new Date().setFullYear(parseInt(anio),(parseInt(mes)-1),parseInt(dia));
            var descripcion= "estadoDeAnimo: "+element.estadoDeAnimo;
              calendarEvents= calendarEvents.concat({ 
               date:mydate
              })
        });
        return calendarEvents;
    }
    convertirAEventosCalendario_ControlDeEstudio(activiadaJsonArray:any){
        var calendarEvents: EventInput[] = [];
        activiadaJsonArray.forEach((element: any) => {
            var anio:any=element.fecha.split("-")[0];
            var mes:any=element.fecha.split("-")[1];
            var dia:any=element.fecha.split("-")[2];
            var mydate = new Date().setFullYear(parseInt(anio),(parseInt(mes)-1),parseInt(dia));
            var materiasEstudiadas=element.materiasEstudiadas;
            
            if(materiasEstudiadas.length>0){
                calendarEvents= calendarEvents.concat({ 
                    date:mydate
                })
            }
              
        });
        return calendarEvents;
    }
    convertirAEventosCalendario_ControlDeSueno(activiadaJsonArray:any){
        var calendarEvents: EventInput[] = [];
        activiadaJsonArray.forEach((element: any) => {
            var anio:any=element.fecha.split("-")[0];
            var mes:any=element.fecha.split("-")[1];
            var dia:any=element.fecha.split("-")[2];
            var mydate = new Date().setFullYear(parseInt(anio),(parseInt(mes)-1),parseInt(dia));
            var descripcion= "estadoDeAnimo: "+element.estadoDeAnimo;
              calendarEvents= calendarEvents.concat({ 
               date:mydate,
              imageurl:'img/iconosCalendario/sonando.png'
              })
        });
        return calendarEvents;
    }
}