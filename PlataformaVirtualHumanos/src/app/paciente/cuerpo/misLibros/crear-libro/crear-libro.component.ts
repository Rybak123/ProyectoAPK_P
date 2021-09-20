import { AlertService } from './../../../../_services/alert.service';
import { UserService } from './../../../../_services/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.scss']
})
export class CrearLibroComponent implements OnInit {
  //crearLibro:FormGroup|any; 
  //submitted=false;
  

  constructor() {}
  miformularioLibros = new FormGroup({
    Tituloo:new FormControl('',Validators.required),
    Autorr:new FormControl('',Validators.required),
    Editoriall: new FormControl('',Validators.required),
    ControlDePAginass:new FormControl('',Validators.required),
    Fechaa:new FormControl('',Validators.required),
    Generoo:new FormControl('',Validators.required),
    Descripcionn:new FormControl('',Validators.required),
    Imagenn:new FormControl('',Validators.required)
  }
  )

  ngOnInit(): void {
   
  }
 
}
