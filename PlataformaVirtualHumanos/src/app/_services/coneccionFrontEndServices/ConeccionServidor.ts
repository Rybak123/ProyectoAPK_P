import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import {HttpClient} from "@angular/common/http";
import{ GlobalConstants } from '../../../app/global-constants';
export class ConeccionServidor
{
    constructor(private http:HttpClient) { }

    url=`${GlobalConstants.apiURL}`;
    
    async coneccionServidor(parametros:any,ruta:String){
        return await this.http.post(this.url+ruta, parametros).toPromise();
    }
}
