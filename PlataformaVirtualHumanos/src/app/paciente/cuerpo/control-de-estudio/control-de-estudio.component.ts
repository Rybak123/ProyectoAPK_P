import { OnInit } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
@Component({
  selector: 'app-control-de-estudio',
  templateUrl: './control-de-estudio.component.html',
  styleUrls: ['./control-de-estudio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ControlDeEstudioComponent implements OnInit {
  public hora:number = 0;
  public minutos:number = 0;
  public segundos:number = 0;

  /*public horalapso: number;
  public minutoslapso: number;
  public segundoslapso: number;*/
 /* public coleccion:Array<any> =[];*/
  public contador:any;

  constructor() { }

  start(){ 
    if(this.contador == undefined){ 
      this.contador = setInterval(()=>{ 
        this.segundos += 1;
        if(this.segundos == 60){ 
          this.segundos = 0;
          this.minutos +=1;
          if(this.minutos == 60){ 
            this.minutos = 0;
            this.hora +=1;
            if(this.hora = 24){ 
              this.hora = 0;
            }
          }
        }
      }
      ,1000);
    }

  }
  /*lapso(){ 
    let obj:any = {};
    obj.hora = this.hora;
    obj.minutos = this.minutos;
    obj.segundos = this.segundos;

    this.coleccion.push(obj);
  }*/

  stop(){ 
    clearInterval(this.contador);
    this.hora = 0;
    this.minutos = 0;
    this.segundos = 0;
    this.contador = null;
  }

  ngOnInit(): void {
    this.iniciarCalendario(controlDeEstudio);
  }
  title = 'practica1';
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'event 1', date: '2020-06-27' },
      { title: 'event 2', date: '2020-06-30' }   
    ]
  };
  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }

  iniciarCalendario(controlDeEstudioJson:any){
    
  }
  

}
var controlDeEstudio=[
  {fecha:"2021-03-08T04:00:00.000+00:00",cantidadDeTiempo:3,materia:"Matematicas"},
  {fecha:"2021-04-08T04:00:00.000+00:00",cantidadDeTiempo:6,materia:"Lenguaje"},
  {fecha:"2021-05-08T04:00:00.000+00:00",cantidadDeTiempo:9,materia:"Fisica"},
]; 


