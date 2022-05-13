import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inicio-prueba-general',
  templateUrl: './inicio-prueba-general.component.html',
  styleUrls: ['./inicio-prueba-general.component.scss']
})
export class InicioPruebaGeneralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() iniciarPruebaGeneralEmiter= new EventEmitter();
  cambiarAplicacion(){
    this.iniciarPruebaGeneralEmiter.emit();
  }
}
