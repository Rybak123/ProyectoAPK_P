import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prueba-general',
  templateUrl: './prueba-general.component.html',
  styleUrls: ['./prueba-general.component.scss']
})
export class PruebaGeneralComponent implements OnInit {

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
      nombreCompleto: [''],
      fechaDeNacimiento: [''],
      edad: [''],
      fechaActual: [''],
      genero:[''],
      ocupacion: [''],
      });
  }
  enviarActividad1(){
    this.emiterEvent.emit();
  }
}
