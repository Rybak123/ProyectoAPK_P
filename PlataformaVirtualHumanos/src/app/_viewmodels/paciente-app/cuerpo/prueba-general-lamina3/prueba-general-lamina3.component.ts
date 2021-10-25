import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prueba-general-lamina3',
  templateUrl: './prueba-general-lamina3.component.html',
  styleUrls: ['./prueba-general-lamina3.component.scss']
})
export class PruebaGeneralLamina3Component implements OnInit {
  form!: FormGroup;
  fechaActual:any;
  submitted:any;
  minimoFechaDeNacimiento:any;
  loading = false;
  disableSend:any;
  fechaActualRegistro:any;
  usuario!:any;
  editarButton:any;
  enviarButton:any;
  cancelarButton:any;
  get f() { return this.form.controls; }


  code: FormArray ;
  constructor(private fb: FormBuilder) {
    const controls = [];
    for (let i = 0; i < 6; i++) {
      controls.push(['', [Validators.required]]);
    }
    this.code = this.fb.array(controls);
  }

  ngOnInit() {

  }

  moveToNext(event:any) {
    console.log(event);
    if(event.code!="Backspace" && event.code!="ArrowLeft" && event.code!="ArrowDown"){
      let next = event.target.nextElementSibling;
      if (next) {
        next.focus();
      } else {
        event.target.blur();
      }
    }
    else{
      if(event.code=="Backspace"){
        let next = event.target;
        if (next) {
          next.focus();
        } else {
          event.target.blur();
        }
      }
      else{
        if(event.code=="ArrowLeft"||event.code!="ArrowDown" ){
          let next = event.target.previousSibling;
          if (next) {
            next.focus();
          } else {
            event.target.blur();
          }
        }
      }
    }  
  }
  @Output() emiterEvent= new EventEmitter();
  enviarActividad2(){
    this.emiterEvent.emit();
  }
}
