import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-crear-metas-personales',
  templateUrl: './crear-metas-personales.component.html',
  styleUrls: ['./crear-metas-personales.component.scss']
})
export class CrearMetasPersonalesComponent implements OnInit {

  constructor() { }
  miformularioMetasPersonales = new FormGroup({
    Titulo:new FormControl('',Validators.required),
    Fecha:new FormControl('',Validators.required),
    Prioridad:new FormControl('',Validators.required),
    Descripcion:new FormControl('',Validators.required)
  }
  );

  ngOnInit(): void {
  }

}
