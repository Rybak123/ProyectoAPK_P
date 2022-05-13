import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prueba-general-lamina15',
  templateUrl: './prueba-general-lamina15.component.html',
  styleUrls: ['./prueba-general-lamina15.component.scss']
})
export class PruebaGeneralLamina15Component implements OnInit {

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
    var prueba=localStorage.getItem('pruebaGeneralActual');
    if(prueba==null){
      prueba="null";
    }
    var pruebaGeneral=JSON.parse(prueba);
    pruebaGeneral.actividad15={
      partesCuerpo:this.partesDelCuerpo,
      frutas:this.frutas,
      animales:this.animales,
    };
    localStorage.setItem('pruebaGeneralActual',JSON.stringify(pruebaGeneral));
    this.emiterEvent.emit();
  }

  partesDelCuerpo = [
    'Gato',
    'Pera',

  ];

  frutas = [
    'Fresa',
    'Vaca',
 
  ];
  animales=[
    'Codo',
    'Mano',
  ]

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
