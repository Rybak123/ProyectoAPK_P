import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../app/_helpers';
import { AdministradorAppComponent } from './_viewmodels/administrador-app/administrador-app.component';
import { LoginAdministradorComponent } from './_viewmodels/login-app/login-administrador/login-administrador.component';
import { FormularioCambiarContrasenaComponent } from './_viewmodels/recuperar-contrasena-app/formulario-cambiar-contrasena/formulario-cambiar-contrasena.component';
import { RespuestaCambiarContrasenaComponent } from './_viewmodels/recuperar-contrasena-app/respuesta-cambiar-contrasena/respuesta-cambiar-contrasena.component';

const routes: Routes = [

//Login
{ path: 'login', component: LoginAdministradorComponent},

//FormularioCambiarContraseña
{ path: 'cambiarContrasenaFormulario', component: FormularioCambiarContrasenaComponent},
//RespuestaCambiarContraseña
{ path: 'cambiarContrasenaRespuesta', component: RespuestaCambiarContrasenaComponent},

//Pagina Paciente
{ path: '', component: AdministradorAppComponent, canActivate: [AuthGuard]},

{ path: '**', redirectTo: 'login' }

];


// otherwise redirect to home
//{ path: '**', redirectTo: '' }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
