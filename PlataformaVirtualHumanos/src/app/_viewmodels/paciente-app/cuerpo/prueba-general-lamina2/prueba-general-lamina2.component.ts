import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prueba-general-lamina2',
  templateUrl: './prueba-general-lamina2.component.html',
  styleUrls: ['./prueba-general-lamina2.component.scss']
})
export class PruebaGeneralLamina2Component implements OnInit {
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

  constructor(private formBuilder: FormBuilder) {
   
  }
  @Output() emiterEvent= new EventEmitter();
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      diaActual: [''],
      mesActual: [''],
      añoActual: [''],
      departamentoActual: [''],
      });
  }
  enviarActividad2(){
    this.emiterEvent.emit();
  }

}
