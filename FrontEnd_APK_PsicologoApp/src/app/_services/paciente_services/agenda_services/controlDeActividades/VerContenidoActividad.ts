import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import {ConeccionServidor} from '../coneccionFrontEndServices/ConeccionServidor';
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
        var mensaje="Este día estudiaste:\n";
        actividadJson.forEach((diasControlados: any) => {
            var fechaEncontrada=diasControlados.fecha;
            if(fechaSeleccionada==fechaEncontrada){
                diasControlados.materiasEstudiadas.forEach((element1:any) => {
                    var horasString=element1.cantidadDeTiempo.split(":")[0];
                    var minutosString=element1.cantidadDeTiempo.split(":")[1];
                    var segundosString=element1.cantidadDeTiempo.split(":")[2];
                    var descripcion= ""+element1.materia+" durante un tiempo de: "+parseInt(horasString)+" horas, "+parseInt(minutosString)+" minutos y "+parseInt(segundosString)+" segundos cronometrados.\n";
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