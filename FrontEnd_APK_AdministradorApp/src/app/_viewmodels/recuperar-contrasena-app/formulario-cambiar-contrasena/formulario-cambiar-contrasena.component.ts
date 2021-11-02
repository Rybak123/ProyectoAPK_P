import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AdministradorService } from 'src/app/_services/administrador-service';

@Component({
  selector: 'app-formulario-cambiar-contrasena',
  templateUrl: './formulario-cambiar-contrasena.component.html',
  styleUrls: ['./formulario-cambiar-contrasena.component.scss']
})

export class FormularioCambiarContrasenaComponent implements OnInit {
  loginForm: FormGroup|any;
  loading = false;
  submitted = false;
  returnUrl: string|any;
  tipo:any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private administradorService:AdministradorService)
  {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['',  [Validators.required, Validators.email]]
    });
    this.tipo=this.route.snapshot.queryParams.tipo;
  }
  get f() { return this.loginForm.controls;}

  onSubmit() {
    this.submitted = true;
    
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;

    switch(this.tipo){
        case "administrador":
          this.administradorService.recuperarContrasena(this.f.username.value)
          .pipe(first())
          .subscribe(
            data => {
                this.router.navigate(["/loginAdministrador"]);
            },
            error => {
                this.loading = false;
          });
        break;
    }
    
  }
  volverAlLogin(){
    switch(this.tipo){
      case "paciente":
        this.router.navigate(["/login"]);
      break;
      case "psicologo":
        this.router.navigate(["/loginPsicologo"]);
      break;
      case "administrador":
        this.router.navigate(["/loginAdministrador"]);
      break;
    }
    
  }
  irARecuperarContrasena(){

  }
}



