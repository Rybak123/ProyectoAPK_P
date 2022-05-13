import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../../_services';
import { AuthenticacionAdministradorService } from 'src/app/_services/login_services/authentication-administrador.service';
@Component({
  selector: 'app-login-administrador',
  templateUrl: './login-administrador.component.html',
  styleUrls: ['./login-administrador.component.scss']
})
export class LoginAdministradorComponent implements OnInit {

  loginForm: FormGroup|any;
  loading = false;
  submitted = false;
  returnUrl: string|any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticacionAdministradorService,
    private alertService: AlertService
) {
    if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
    }
}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                if(data.resultado.estado){
                  this.router.navigate([this.returnUrl]);
                }
                else{
     
                  this.authenticationService.logout();
                  this.router.navigate(["/loginAdministrador"]);
                  alert("Usuario deshabilitado");
                  this.loading = false;
                }
                
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }
  irARecuperarContrasena(){
    this.router.navigate(["/cambiarContrasenaFormulario"],{ queryParams: { tipo: "administrador"}});
  }
}
