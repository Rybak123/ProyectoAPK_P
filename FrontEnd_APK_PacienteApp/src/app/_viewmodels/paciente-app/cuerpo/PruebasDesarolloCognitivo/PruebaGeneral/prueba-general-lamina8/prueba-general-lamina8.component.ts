import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prueba-general-lamina8',
  templateUrl: './prueba-general-lamina8.component.html',
  styleUrls: ['./prueba-general-lamina8.component.scss']
})
export class PruebaGeneralLamina8Component implements OnInit {
  images = [1, 2, 3,4,5,6,7,8].map((n) => `assets/img/Actividad8/primerIntento/imagen${n}.jpg`);
  @ViewChild("clotheCarousel") carousel: NgbCarousel|any;
  form!: FormGroup;
  showNavigationArrows = false;
  showNavigationIndicators = false;

  constructor(config: NgbCarouselConfig,private formBuilder: FormBuilder) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Guitarra: [''],
      Barco: [''],
      Trompeta: [''],
      Dedo: [''],
      Mani: [''],
      Serpiente: [''],
      Reloj: [''],
      Bicicleta: [''],
      Papas: [''],
      Llave: [''],
      Lata: [''],
      Chivo: ['']
      });
      this.carousel.pause();
    
  }
  @Output() emiterEvent= new EventEmitter();
  enviarActividad2(){
    var prueba=localStorage.getItem('pruebaGeneralActual');
    if(prueba==null){
      prueba="null";
    }
    var pruebaGeneral=JSON.parse(prueba);
    pruebaGeneral.actividad8=this.form.value;;
    localStorage.setItem('pruebaGeneralActual',JSON.stringify(pruebaGeneral));
    this.emiterEvent.emit();
  }
  intento1(){
    this.carousel.cycle();
  }
  onSlide(event:any){
    console.log(event);
    if(event.current=="ngb-slide-8"){
      this.carousel.pause();
    }
  }
}
