import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prueba-general-lamina6',
  templateUrl: './prueba-general-lamina6.component.html',
  styleUrls: ['./prueba-general-lamina6.component.scss']
})
export class PruebaGeneralLamina6Component implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  items = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
  ]

  addSlide() {
    this.items.push({
      title: `Slide 4`
    });
  }
  
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


 
}
