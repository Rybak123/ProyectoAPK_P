import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from '../../../../../../_components/card/keyframes';

import { Subject } from 'rxjs';


@Component({
  selector: 'app-prueba-general-lamina16',
  templateUrl: './prueba-general-lamina16.component.html',
  styleUrls: ['./prueba-general-lamina16.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]
})
export class PruebaGeneralLamina16Component implements OnInit {

  indice=0;
  currentValue:any;
  values:any=[];
  nombreTargetas:any=[
    "Boca",
    "Gato",
    "Cama",
    "Pera",
    "Codo",
    "Arbol",
    "Gallo",
    "Lapiz",
    "Zorro",
    "Mano",
    "fresa",
    "Ceja",
    "Vaca",
    "Flor",
  ]
  @Output() emiterEvent= new EventEmitter();
  enviarActividad2(){
    var prueba=localStorage.getItem('pruebaGeneralActual');
    if(prueba==null){
      prueba="null";
    }
    var pruebaGeneral=JSON.parse(prueba);
    pruebaGeneral.actividad16=this.values;
    localStorage.setItem('pruebaGeneralActual',JSON.stringify(pruebaGeneral));
    this.emiterEvent.emit();
  }
  
  cardAnimation(value:any) {
    console.log(value);
    if(value=="swiperight"){
      if(this.currentValue=="Gato"){
        this.values.push(1);
      }
      if(this.currentValue=="Pera"){
        this.values.push(1);
      }
      if(this.currentValue=="Codo"){
        this.values.push(1);
      }
      if(this.currentValue=="Mano"){
        this.values.push(1);
      }
      if(this.currentValue=="Vaca"){
        this.values.push(1);
      }
    }
    var siguiente=this.nombreTargetas.shift();
    this.currentValue=siguiente;

    if(this.nombreTargetas.length==0){
      var x :any=document.getElementById("tarjeta");
      x.style.visibility="hidden";
    }
    this.startAnimation(value)
  }

  public index = 0;
  @Input()
  parentSubject: Subject<any>|any;



  animationState: string|any;
  constructor() { }

  ngOnInit() {
    var siguiente=this.nombreTargetas.shift();
    this.currentValue=siguiente;
  }

  startAnimation(state:any) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state:any) {
    this.animationState = '';
    this.index++;
  }

}
