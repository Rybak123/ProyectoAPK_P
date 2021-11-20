import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { first } from 'rxjs/operators';
import { PacienteService } from 'src/app/_services/paciente-service';

import { pPuebaGeneral } from 'src/app/_models/pruebasDeDesarrolloCognitivo-model/pruebasDeDesarrolloCognitivo';


@Component({
  selector: 'app-prueba-de-desarollo-cognitivo',
  templateUrl: './prueba-de-desarollo-cognitivo.component.html',
  styleUrls: ['./prueba-de-desarollo-cognitivo.component.scss']
})
export class PruebaDeDesarolloCognitivoComponent implements OnInit {
  public PruebaDeDesarolloCognitivo!:pPuebaGeneral[]; //indica que el atributo puede ser nulo

  constructor(private PruebasGenerales:PacienteService) { }

  ngOnInit(): void {
    this.listarPsicologo();
    console.log(this.PruebasGenerales);
    }
    private listarPsicologo(){
    this.PruebasGenerales.listarPruebasDeDesarolloCognitivo()
    .pipe()
    .subscribe((PruebaDeDesarolloCognitivo:any)=>this.PruebaDeDesarolloCognitivo=PruebaDeDesarolloCognitivo.resultado);
  }
  @Output() emiterEvent= new EventEmitter();
  enviarActividad2(){
    this.emiterEvent.emit();
  }
  @Output() emiterEventIrResultados= new EventEmitter();
  resultadosDePruebasDesarolloCognitivo(){
    this.emiterEventIrResultados.emit();
  }

}






