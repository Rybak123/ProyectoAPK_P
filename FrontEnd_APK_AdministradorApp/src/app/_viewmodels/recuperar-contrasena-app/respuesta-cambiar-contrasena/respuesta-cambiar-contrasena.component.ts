import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { PacienteService } from 'src/app/_services/paciente-service';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { PsicologoService } from 'src/app/_services/psicologo_services/psicologo-service';
import { AdministradorService } from 'src/app/_services/administrador-service';

@Component({
  selector: 'app-respuesta-cambiar-contrasena',
  templateUrl: './respuesta-cambiar-contrasena.component.html',
  styleUrls: ['./respuesta-cambiar-contrasena.component.scss']
})
export class RespuestaCambiarContrasenaComponent implements OnInit {
  loginForm: FormGroup|any;
  loading = false;
  submitted = false;
  returnUrl: string|any;
  tokenRecibido!:any;
  idUsuarioRecibido!:any;
  tipoUsuarioRecibido!:any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService,
    private psicologoService: PsicologoService,
    private administradorService:AdministradorService){}
  ngOnInit(): void {
    const formOptions: AbstractControlOptions = { validators: MustMatch('contrasena', 'contrasenaRepetida') };
    this.loginForm = this.formBuilder.group({
      contrasena: ['', [Validators.minLength(6), Validators.required]],
      contrasenaRepetida: ['', Validators.required],
    },formOptions);
    this.tokenRecibido=this.route.snapshot.queryParams.token;
    this.idUsuarioRecibido=this.route.snapshot.queryParams.id;
    console.log(this.route.snapshot.queryParams);
    this.tipoUsuarioRecibido=this.route.snapshot.queryParams.tipo;
  }
  get f() { return this.loginForm.controls;}

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;
    console.log(this.tipoUsuarioRecibido);
    switch(this.tipoUsuarioRecibido){
      case "paciente":
        this.pacienteService.respuestaCambiarContrasena(this.tokenRecibido,this.idUsuarioRecibido,this.f.contrasena.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate(["/login"]);
            },
            error => {
                this.loading = false;
            });
      break;
      case "psicologo":
        this.psicologoService.respuestaCambiarContrasena(this.tokenRecibido,this.idUsuarioRecibido,this.f.contrasena.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate(["/loginPsicologo"]);
            },
            error => {
                this.loading = false;
            });
      break;
      case "administrador":
        this.administradorService.respuestaCambiarContrasena(this.tokenRecibido,this.idUsuarioRecibido,this.f.contrasena.value)
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
    this.router.navigate(["/login"]);
  }
}





