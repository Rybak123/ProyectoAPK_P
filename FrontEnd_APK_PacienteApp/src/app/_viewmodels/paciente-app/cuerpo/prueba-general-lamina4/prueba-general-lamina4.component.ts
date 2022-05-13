import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prueba-general-lamina4',
  templateUrl: './prueba-general-lamina4.component.html',
  styleUrls: ['./prueba-general-lamina4.component.scss']
})
export class PruebaGeneralLamina4Component implements OnInit {
  constructor() { }
  listaDeMarcadosCorrectos:any=[];
  ngOnInit(): void {
  }
  @Output() emiterEvent= new EventEmitter();
  enviarActividad2(){
    var prueba=localStorage.getItem('pruebaGeneralActual');
    if(prueba==null){
      prueba="null";
    }
    var pruebaGeneral=JSON.parse(prueba);
    pruebaGeneral.actividad4=this.listaDeMarcadosCorrectos;
    localStorage.setItem('pruebaGeneralActual',JSON.stringify(pruebaGeneral));

    this.emiterEvent.emit();
  }
  removeItemFromArr(arr:any,item:any ) {
    var i = arr.indexOf( item );
    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
    return arr;
  }
  cambiarColorMarco(event:any,esElCorrecto:any){

    var resultado = this.listaDeMarcadosCorrectos.find((element:any) => element == event.target.id);
  
    if(esElCorrecto=="si"){
      if(resultado){
        console.log(resultado);
        console.log("enceontrado");
        this.removeItemFromArr(this.listaDeMarcadosCorrectos,event.target.id);
      }
      else{
        console.log(event.target.id);
        console.log("no encontrado");
        this.listaDeMarcadosCorrectos.push(event.target.id);
      }

    }
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
  }
}
