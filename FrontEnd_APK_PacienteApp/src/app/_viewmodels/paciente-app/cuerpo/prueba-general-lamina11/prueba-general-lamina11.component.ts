import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prueba-general-lamina11',
  templateUrl: './prueba-general-lamina11.component.html',
  styleUrls: ['./prueba-general-lamina11.component.scss']
})
export class PruebaGeneralLamina11Component implements OnInit {

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
      campo1: [''],
      campo2: [''],
      campo3: [''],
      campo4: [''],
      campo5: [''],
      campo6: [''],
      campo7: [''],
      campo8: [''],
      campo9: [''],
      campo10: [''],
      campo11: [''],
      campo12: [''],
      campo13: [''],
      campo14: [''],
      campo15: [''],
      campo16: [''],
      });
  }
  @Output() emiterEvent= new EventEmitter();
  enviarActividad2(){
    var prueba=localStorage.getItem('pruebaGeneralActual');
    if(prueba==null){
      prueba="null";
    }
    var pruebaGeneral=JSON.parse(prueba);
    pruebaGeneral.actividad11=this.form.value;;
    localStorage.setItem('pruebaGeneralActual',JSON.stringify(pruebaGeneral));
    this.emiterEvent.emit();
  }
}
