import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import {ConeccionServidor} from '../conectionServices/ConeccionServidor'
import {OperacionesPaciente} from './OperacionesPaciente';
import {HttpClient} from "@angular/common/http";
export class MandarOperacionesPaciente{
    
    coneccionServidor:any;
    constructor(private http:HttpClient) {
        this.coneccionServidor=new ConeccionServidor(this.http)
    }

    async actualizarControlDeActividad(jsonActividad:any,route:any){
        var pacienteInfo=localStorage.getItem('currentUser');
        if(pacienteInfo==null){
            pacienteInfo="null";
            throw console.error("Paciente no encontrado");
        }
        var usuario:any =JSON.parse(pacienteInfo);
        var carnetDeIdentidad=usuario.carnetDeIdentidad;
        var MyDate = new Date(); 
        var datetime = MyDate.getFullYear()+ '-'
        + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'
        + ('0' + MyDate.getDate()).slice(-2);
        jsonActividad.fecha=datetime;
        jsonActividad.carnetDeIdentidad=carnetDeIdentidad;
  
        return await this.coneccionServidor.coneccionServidor(jsonActividad,route);
    }
    async actualizarControlDeAgua(actividadeDelDia:any){
        //Cambiar
        var jsonActividad={"cantidadDeAgua":actividadeDelDia};//5vasos de agua
        var route="/pacientes/actualizarControlDeConsumoDeAgua";
        return await this.actualizarControlDeActividad(jsonActividad,route)
        .then((paciente:any) => {
            return true;
            
        })
        .catch((error:any) => {
            console.log(error);
            return false;
        });
    }
    async actualizarControlDeEnergia(actividadeDelDia:any){
        //Cambiar
        var jsonActividad={"porcentajeDeEnergia":actividadeDelDia};
        var route="/pacientes/actualizarControlDeEnergia";
        return await this.actualizarControlDeActividad(jsonActividad,route)
        .then((paciente:any) => {
            return true;
        })
        .catch((error:any) => {
            console.log(error);
            return false;
        });
    }
    async actualizarControlDeEstudio(actividadeDelDia:any){
        //Cambiar
        var jsonActividad={"materiasEstudiadas":actividadeDelDia};
        var route="/pacientes/actualizarHorasDeEstudio";
        return await this.actualizarControlDeActividad(jsonActividad,route)
        .then((paciente:any) => {

            return true;
            
        })
        .catch((error:any) => {
            console.log(error);
            return false;
        });
    }
    async actualizarControlDeSueno(actividadeDelDia:any){
        //Cambiar
        var jsonActividad={"horasDeSueno":actividadeDelDia};
        var route="/pacientes/actualizarControlDeSueno";
        return await this.actualizarControlDeActividad(jsonActividad,route)
        .then((paciente:any) => {
            return true;
            
        })
        .catch((error:any) => {
            console.log(error);
            return false;
        });
    }
    async actualizarControlDeAnimo(actividadeDelDia:any){
        //Cambiar
        var jsonActividad={"estadoDeAnimo":actividadeDelDia};
        var route="/pacientes/actualizarControlDeAnimo";
        return await this.actualizarControlDeActividad(jsonActividad,route)
        .then((paciente:any) => {
            return true;
            
        })
        .catch((error:any) => {
            console.log(error);
            return false;
        });
    }
}
