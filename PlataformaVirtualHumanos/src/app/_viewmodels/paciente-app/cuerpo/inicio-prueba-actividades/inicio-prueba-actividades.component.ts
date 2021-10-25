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
  }
}
