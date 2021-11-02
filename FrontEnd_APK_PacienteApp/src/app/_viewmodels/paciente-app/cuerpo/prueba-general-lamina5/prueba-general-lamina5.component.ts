import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  resultado1:any=0;
  resultado2:any=0;
  resultado3:any=0;
  resultado4:any=0;
  resultado5:any=0;

  preguntaMat2:any;
  preguntaMat3:any;
  preguntaMat4:any;
  preguntaMat5:any;
  resultadoBtn:any;
  get f() { return this.form.controls; }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mateRsp1: [''],
      mateRsp2: [''],
      mateRsp3: [''],
      mateRsp4: [''],
      mateRsp5: [''],
      });
    this.preguntaMat2=document.getElementById("pregunta2");
    this.preguntaMat3=document.getElementById("pregunta3");
    this.preguntaMat4=document.getElementById("pregunta4");
    this.preguntaMat5=document.getElementById("pregunta5");
    this.resultadoBtn=document.getElementById("resultadoBtn");
    
    this.preguntaMat2.style.visibility = "hidden";
    this.preguntaMat3.style.visibility = "hidden";
    this.preguntaMat4.style.visibility = "hidden";
    this.preguntaMat5.style.visibility = "hidden";
    this.resultadoBtn.disabled = true;
  }
  @Output() emiterEvent= new EventEmitter();
  enviarActividad2(){
    var prueba=localStorage.getItem('pruebaGeneralActual');
    if(prueba==null){
      prueba="null";
    }
    var pruebaGeneral=JSON.parse(prueba);
    pruebaGeneral.actividad5=this.form.value;;
    localStorage.setItem('pruebaGeneralActual',JSON.stringify(pruebaGeneral));
    this.emiterEvent.emit();
  }
  calificar(numero:any){
    switch(numero){
      case 1:
        this.preguntaMat2.style.visibility = "visible";
        this.resultado1=this.form.value.mateRsp1;
      break;
      case 2:
        this.preguntaMat3.style.visibility = "visible";
        this.resultado2=this.form.value.mateRsp2;
      break
      case 3:
        this.preguntaMat4.style.visibility = "visible";
        this.resultado3=this.form.value.mateRsp3;
      break;
      case 4:
        this.preguntaMat5.style.visibility = "visible";
        this.resultado4=this.form.value.mateRsp4;
      break;
      case 5:
        this.resultado5=this.form.value.mateRsp5;
        this.resultadoBtn.disabled = false;
      break;
    }
  }
}
