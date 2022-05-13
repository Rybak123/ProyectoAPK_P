import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prueba-general-lamina5',
  templateUrl: './prueba-general-lamina5.component.html',
  styleUrls: ['./prueba-general-lamina5.component.scss']
})
export class PruebaGeneralLamina5Component implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }
  @Output() emiterEvent= new EventEmitter();
  enviarActividad2(){
    this.emiterEvent.emit();
  }
}
