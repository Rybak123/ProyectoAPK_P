import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prueba-general-lamina4',
  templateUrl: './prueba-general-lamina4.component.html',
  styleUrls: ['./prueba-general-lamina4.component.scss']
})
export class PruebaGeneralLamina4Component implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  @Output() emiterEvent= new EventEmitter();
  enviarActividad2(){
    this.emiterEvent.emit();
  }
}
