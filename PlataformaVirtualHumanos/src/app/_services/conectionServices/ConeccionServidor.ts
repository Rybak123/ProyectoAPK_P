import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import {HttpClient} from "@angular/common/http";

export class ConeccionServidor
{
    constructor(private http:HttpClient) { }

    url="http://localhost:4000";
    
    async coneccionServidor(parametros:any,ruta:String){
        return await this.http.post(this.url+ruta, parametros).toPromise();
    }
}
