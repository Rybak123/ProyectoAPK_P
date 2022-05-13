import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prueba-general-lamina14',
  templateUrl: './prueba-general-lamina14.component.html',
  styleUrls: ['./prueba-general-lamina14.component.scss']
})
export class PruebaGeneralLamina14Component implements OnInit {
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
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      palabra1: [''],
      palabra2: [''],
      palabra3: [''],
      palabra4: [''],
      palabra5: [''],
      palabra6: [''],
      });
  }
  @Output() emiterEvent= new EventEmitter();
  enviarActividad2(){
    var prueba=localStorage.getItem('pruebaGeneralActual');
    if(prueba==null){
      prueba="null";
    }
    var pruebaGeneral=JSON.parse(prueba);
    pruebaGeneral.actividad14=this.form.value;;
    localStorage.setItem('pruebaGeneralActual',JSON.stringify(pruebaGeneral));
    this.emiterEvent.emit();
  }

}
