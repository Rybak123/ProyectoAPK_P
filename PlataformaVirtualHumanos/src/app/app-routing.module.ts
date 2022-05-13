import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_viewmodels/login-app/login-paciente/login.component';
import { AuthGuard } from '../app/_helpers';
import { PacienteComponent } from './_viewmodels/paciente-app/paciente.component';
import { AdministradorAppComponent } from './_viewmodels/administrador-app/administrador-app.component';
import { LoginAdministradorComponent } from './_viewmodels/login-app/login-administrador/login-administrador.component';
import { LoginPsicologoComponent } from './_viewmodels/login-app/login-psicologo/login-psicologo.component';
import { PsicologoAppComponent } from './_viewmodels/psicologo-app/psicologo-app.component';
import { FormularioCambiarContrasenaComponent } from './_viewmodels/recuperar-contrasena-app/formulario-cambiar-contrasena/formulario-cambiar-contrasena.component';
import { RespuestaCambiarContrasenaComponent } from './_viewmodels/recuperar-contrasena-app/respuesta-cambiar-contrasena/respuesta-cambiar-contrasena.component';

const routes: Routes = [

//Login
{ path: 'login', component: LoginComponent},
{ path: 'loginAdministrador', component: LoginAdministradorComponent},
{ path: 'loginPsicologo', component: LoginPsicologoComponent},

//FormularioCambiarContraseña
{ path: 'cambiarContrasenaFormulario', component: FormularioCambiarContrasenaComponent},
//RespuestaCambiarContraseña
{ path: 'cambiarContrasenaRespuesta', component: RespuestaCambiarContrasenaComponent},

//Pagina Paciente
{ path: '', component: PacienteComponent, canActivate: [AuthGuard]},

//PaginaAdministrador
{ path: 'administrador', component: AdministradorAppComponent},

//PaginaPsicologo
{ path: 'psicologo', component: PsicologoAppComponent},



// otherwise redirect to home
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }