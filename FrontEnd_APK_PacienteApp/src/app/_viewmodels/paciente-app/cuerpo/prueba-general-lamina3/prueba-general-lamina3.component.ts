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


  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit() {
      this.form = this.formBuilder.group({
      p1_d1: [''],
      p1_d2: [''],
      p1_d3: [''],
      p1_d4: [''],
      p1_d5: [''],

      p2_d1: [''],
      p2_d2: [''],
      p2_d3: [''],
      p2_d4: [''],
      p2_d5: [''],
      p2_d6: [''],
      p2_d7: [''],

      p3_d1: [''],
      p3_d2: [''],
      p3_d3: [''],
      p3_d4: [''],
      p3_d5: [''],
      p3_d6: [''],
      p3_d7: [''],

      p4_d1: [''],
      p4_d2: [''],
      p4_d3: [''],
      p4_d4: [''],
      p4_d5: [''],
      p4_d6: [''],

      p5_d1: [''],
      p5_d2: [''],
      p5_d3: [''],
      p5_d4: [''],
      p5_d5: [''],
      p5_d6: [''],
      p5_d7: [''],

      p6_d1: [''],
      p6_d2: [''],
      p6_d3: [''],
      p6_d4: [''],
      p6_d5: [''],
      p6_d6: [''],
      p6_d7: [''],
      p6_d8: [''],
      p6_d9: [''],
      });
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
    var prueba=localStorage.getItem('pruebaGeneralActual');
    if(prueba==null){
      prueba="null";
    }
    var pruebaGeneral=JSON.parse(prueba);
    pruebaGeneral.actividad3=this.form.value;
    localStorage.setItem('pruebaGeneralActual',JSON.stringify(pruebaGeneral));

    this.emiterEvent.emit();
  }
}
