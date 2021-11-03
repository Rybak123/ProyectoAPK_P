import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-prueba-general-lamina6',
  templateUrl: './prueba-general-lamina6.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./prueba-general-lamina6.component.scss',]
})
export class PruebaGeneralLamina6Component implements OnInit {
  images = [1, 2, 3,4,5,6].map((n) => `assets/img/Actividad6/PrimerIntento/imagen${n}.jpg`);
  @ViewChild("clotheCarousel") carousel: NgbCarousel|any;
  
  movies = [
    'Gato',
    'Pera',
    'Mano',
    'Fresa',
    'Vaca',
    'Codo',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  
  showNavigationArrows = false;
  showNavigationIndicators = false;

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  items = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
  ]

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


  ngOnInit(): void {
    this.carousel.pause();
  }
  @Output() emiterEvent= new EventEmitter();
  enviarActividad2(){
    var prueba=localStorage.getItem('pruebaGeneralActual');
    if(prueba==null){
      prueba="null";
    }
    var pruebaGeneral=JSON.parse(prueba);
    pruebaGeneral.actividad6=this.movies;;
    localStorage.setItem('pruebaGeneralActual',JSON.stringify(pruebaGeneral));
    this.emiterEvent.emit();
  }

  intento1(){
    this.carousel.cycle();
  }
  onSlide(event:any){
    if(event.current=="ngb-slide-5"){
      this.carousel.pause();
    }
  }
 
}
