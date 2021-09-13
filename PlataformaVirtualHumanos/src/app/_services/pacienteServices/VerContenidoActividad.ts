import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import {ConeccionServidor} from '../conectionServices/ConeccionServidor';
import {OperacionesPaciente} from './OperacionesPaciente';
import { ActualizarOperacionesPaciente } from './ActualizarOperacionesPaciente';
export class VerContenidoActividad{
    verContenidoActividad_Animo(actividadJson:any,fechaSeleccionada:any){
        var mensaje="";
        actividadJson.forEach((diaControlado: any) => {
            var fechaEncontrada=diaControlado.fecha;
            if(fechaSeleccionada==fechaEncontrada){
                mensaje+=diaControlado.estadoDeAnimo
            }
        });
        return mensaje;
    }
    verContenidoActividad_Estudio(actividadJson:any,fechaSeleccionada:any){
        var mensaje="";
        actividadJson.forEach((diasControlados: any) => {
            var fechaEncontrada=diasControlados.fecha;
            if(fechaSeleccionada==fechaEncontrada){
                diasControlados.materiasEstudiadas.forEach((element1:any) => {
                    var descripcion= "Tiempo: "+element1.cantidadDeTiempo+'\n'+"Materia: "+element1.materia;
                    mensaje+=descripcion;
                })
            };      
        });
        return mensaje;
    }
    verContenidoActividad_Sueno(actividadJson:any,fechaSeleccionada:any){
        var mensaje="";
        actividadJson.forEach((diaControlado: any) => {
            var fechaEncontrada=diaControlado.fecha;
            if(fechaSeleccionada==fechaEncontrada){
                mensaje+=diaControlado.horasDeSueno
            }
        });
        return mensaje;
    }
    verContenidoActividad_Energia(actividadJson:any,fechaSeleccionada:any){
        var mensaje="";
        actividadJson.forEach((diaControlado: any) => {
            var fechaEncontrada=diaControlado.fecha;
            if(fechaSeleccionada==fechaEncontrada){
                mensaje+=diaControlado.porcentajeDeEnergia
            }
        });
        return mensaje; 
    }
    verContenidoActividad_Agua(actividadJson:any,fechaSeleccionada:any){
        var mensaje="";
        actividadJson.forEach((diaControlado: any) => {
            var fechaEncontrada=diaControlado.fecha;
            if(fechaSeleccionada==fechaEncontrada){
                mensaje+=diaControlado.cantidadDeAgua
            }
        });
        return mensaje;
    }
}