import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-crear-canciones',
  templateUrl: './crear-canciones.component.html',
  styleUrls: ['./crear-canciones.component.scss']
})
export class CrearCancionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  miformularioCanciones = new FormGroup({
    Titulo:new FormControl('',Validators.required),
    Genero:new FormControl('',Validators.required),
    Artista: new FormControl('',Validators.required),
    Fecha:new FormControl('',Validators.required),
    Descripcion:new FormControl('',Validators.required),
    Imagenn:new FormControl('',Validators.required)

  }
  )

}
