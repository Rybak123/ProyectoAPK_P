import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prueba-general-lamina7',
  templateUrl: './prueba-general-lamina7.component.html',
  styleUrls: ['./prueba-general-lamina7.component.scss']
})
export class PruebaGeneralLamina7Component implements OnInit {

  tareaCompletada:any=false;
  constructor() { }

  ngOnInit(): void {
  }
  @Output() emiterEvent= new EventEmitter();
  enviarActividad2(){
    var prueba=localStorage.getItem('pruebaGeneralActual');
    if(prueba==null){
      prueba="null";
    }
    var pruebaGeneral=JSON.parse(prueba);
    pruebaGeneral.actividad7=this.tareaCompletada;;
    localStorage.setItem('pruebaGeneralActual',JSON.stringify(pruebaGeneral));
    this.emiterEvent.emit();
  }
  cambiarColorMarco(event:any,msg:any){
    var btn1:any=document.getElementById("bt1");
    btn1.classList.remove("cuadroSeleccionadoRojo");
    var btn2:any=document.getElementById("bt2");
    btn2.classList.remove("cuadroSeleccionadoRojo");
    var btn3:any=document.getElementById("bt3");
    btn3.classList.remove("cuadroSeleccionadoRojo");
    var btn4:any=document.getElementById("bt4");
    btn4.classList.remove("cuadroSeleccionadoRojo");

    var tieneMarco=false;
    event.srcElement.classList.forEach((clase:any)=>{
      if(clase=="cuadroSeleccionadoRojo"){
       tieneMarco=true;
      }
    })
    if(tieneMarco){
      event.srcElement.classList.remove("cuadroSeleccionadoRojo");
    }
    else{
      event.srcElement.classList.add("cuadroSeleccionadoRojo");
    }
    if(msg=="si"){
      this.tareaCompletada=true;
    }
  }

}
