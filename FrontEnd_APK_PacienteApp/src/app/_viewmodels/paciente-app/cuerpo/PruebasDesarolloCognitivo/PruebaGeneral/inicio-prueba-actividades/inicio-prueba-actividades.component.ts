import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inicio-prueba-actividades',
  templateUrl: './inicio-prueba-actividades.component.html',
  styleUrls: ['./inicio-prueba-actividades.component.scss']
})
export class InicioPruebaActividadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 
  @Output() iniciarPruebaGeneralEmiter= new EventEmitter();
  cambiarAplicacion(){
    this.iniciarPruebaGeneralEmiter.emit();
    var pruebaGeneral={
      puntuacionFinal:0,
      FechaYhoraInicio:Date.now(),
      FechaYhoraFin:Date.now(),
      duracion:0,
      actividad1:"",
      actividad2:"",
      actividad3:"",
      actividad4:"",
      actividad5:"",
      actividad6:"",
      actividad7:"",
      actividad8:"",
      actividad9:"",
      actividad10:"",
      actividad11:"",
      actividad12:"",
      actividad13:"",
      actividad14:"",
      actividad15:"",
      actividad16:"",
    }
    localStorage.setItem('pruebaGeneralActual', JSON.stringify(pruebaGeneral));
  }
}
