import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import {ConeccionServidor} from '../coneccionFrontEndServices/ConeccionServidor'
import {OperacionesPaciente} from './OperacionesPaciente';
import {HttpClient} from "@angular/common/http";
export class VerificarOperacionesPaciente{
    operacionesPaciente:any;
    constructor(private http:HttpClient) {
        this.operacionesPaciente=new OperacionesPaciente(this.http);
    }
    async verControlDeAnimoActualizado(){
        var diaActualizado=false;
       
        return await this.operacionesPaciente.obtenerPaciente()
        .then((paciente:any) => {
            //Cambiar
            var localControlDeActividad=paciente.agendaVirtual.controlDeAnimo;

            var MyDate = new Date(); 
            var fechaActual = MyDate.getFullYear()+ '-'
            + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'
            + ('0' + MyDate.getDate()).slice(-2);

            var diasControlados=localControlDeActividad.diasControlados;
            diasControlados.forEach((diaControlado: any) => {
                var fechaEncontrada=diaControlado.fecha;
                if(fechaActual==fechaEncontrada){
                    diaActualizado=true;
                }
            });
            return diaActualizado;
        })
        .catch((error:any) => {
            return error;
        })
    }
    async verControlDeEstudioActualizado(){
        var diaActualizado=false;
        return await this.operacionesPaciente.obtenerPaciente()
        .then((paciente:any) => {
            //Cambiar
            var localControlDeActividad=paciente.agendaVirtual.controlDeEstudio;

            var MyDate = new Date(); 
            var fechaActual = MyDate.getFullYear()+ '-'
            + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'
            + ('0' + MyDate.getDate()).slice(-2);

            var diasControlados=localControlDeActividad.diasControlados;
            diasControlados.forEach((diaControlado: any) => {
                var fechaEncontrada=diaControlado.fecha;
                if(fechaActual==fechaEncontrada){
                    var materiasEstudiadas=diaControlado.materiasEstudiadas;
                    if(materiasEstudiadas.length>0){
                        diaActualizado=true;
                    }
                }
            });
            return diaActualizado;
        })
        .catch((error:any) => {
            return error;
        })
    }
    async verControlDeAguaActualizado(){
        var diaActualizado:any=false;
        return await this.operacionesPaciente.obtenerPaciente()
        .then((paciente:any) => {
            var localControlDeActividad=paciente.agendaVirtual.controlDeConsumoDeAgua;
            var MyDate = new Date(); 
            var fechaActual = MyDate.getFullYear()+ '-'
            + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'
            + ('0' + MyDate.getDate()).slice(-2);
           
            var diasControlados=localControlDeActividad.diasControlados;
            diasControlados.forEach((diaControlado: any) => {
                var fechaEncontrada=diaControlado.fecha;
                if(fechaActual==fechaEncontrada){
                    console.log(fechaActual+" "+fechaEncontrada);
                    diaActualizado=true;
                }
            });
            return diaActualizado;
        })
        .catch((error:any) => {
            return error;
        })
    }
    async verControlDeEnergiaActualizado(){
        var diaActualizado=false;
        return await this.operacionesPaciente.obtenerPaciente()
        .then((paciente:any) => {
            //Cambiar
            var localControlDeActividad=paciente.agendaVirtual.controlDeEnergia;

            var MyDate = new Date(); 
            var fechaActual = MyDate.getFullYear()+ '-'
            + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'
            + ('0' + MyDate.getDate()).slice(-2);

            var diasControlados=localControlDeActividad.diasControlados;
            diasControlados.forEach((diaControlado: any) => {
                var fechaEncontrada=diaControlado.fecha;
                if(fechaActual==fechaEncontrada){
                    diaActualizado=true;
                }
            });
            return diaActualizado;
        })
        .catch((error:any) => {
            return error;
        })
    }
    async verControlDeSuenoActualizado(){
        var diaActualizado=false;
        return await this.operacionesPaciente.obtenerPaciente()
        .then((paciente:any) => {
            //Cambiar
            var localControlDeActividad=paciente.agendaVirtual.controlDeSueno;

            var MyDate = new Date(); 
            var fechaActual = MyDate.getFullYear()+ '-'
            + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'
            + ('0' + MyDate.getDate()).slice(-2);

            var diasControlados=localControlDeActividad.diasControlados;
            diasControlados.forEach((diaControlado: any) => {
                var fechaEncontrada=diaControlado.fecha;
                if(fechaActual==fechaEncontrada){
                    diaActualizado=true;
                }
            });
            return diaActualizado;
        })
        .catch((error:any) => {
            return error;
        })
    }
}