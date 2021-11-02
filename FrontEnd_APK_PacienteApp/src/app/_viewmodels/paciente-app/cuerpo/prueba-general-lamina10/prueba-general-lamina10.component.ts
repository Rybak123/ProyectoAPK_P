import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prueba-general-lamina10',
  templateUrl: './prueba-general-lamina10.component.html',
  styleUrls: ['./prueba-general-lamina10.component.scss']
})
export class PruebaGeneralLamina10Component implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      correctaP1: [''],
      no1: [''],
      no2: [''],
      correctaP2: [''],
      no3: [''],
      no4: [''],
      no5: [''],
      correctaP3: [''],
      no6: [''],
      });
  }
  @Output() emiterEvent= new EventEmitter();
  enviarActividad2(){
    var prueba=localStorage.getItem('pruebaGeneralActual');
    if(prueba==null){
      prueba="null";
    }
    var pruebaGeneral=JSON.parse(prueba);
    pruebaGeneral.actividad10=this.form.value;;
    localStorage.setItem('pruebaGeneralActual',JSON.stringify(pruebaGeneral));
    this.emiterEvent.emit();
  }
}
