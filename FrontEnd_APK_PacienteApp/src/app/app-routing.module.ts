import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_viewmodels/login-app/login-paciente/login.component';
import { AuthGuard } from '../app/_helpers';
import { PacienteComponent } from './_viewmodels/paciente-app/paciente.component';
import { FormularioCambiarContrasenaComponent } from './_viewmodels/recuperar-contrasena-app/formulario-cambiar-contrasena/formulario-cambiar-contrasena.component';
import { RespuestaCambiarContrasenaComponent } from './_viewmodels/recuperar-contrasena-app/respuesta-cambiar-contrasena/respuesta-cambiar-contrasena.component';
import { InicioPruebaGeneralComponent } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/inicio-prueba-general/inicio-prueba-general.component';
import { InicioPruebaMarcoComponent } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/inicio-prueba-marco/inicio-prueba-marco.component';

const routes: Routes = [

//Login
{ path: 'login', component: LoginComponent},
//FormularioCambiarContraseña
{ path: 'cambiarContrasenaFormulario', component: FormularioCambiarContrasenaComponent},
//RespuestaCambiarContraseña
{ path: 'cambiarContrasenaRespuesta', component: RespuestaCambiarContrasenaComponent},
//Pagina Paciente
{ path: '', component: PacienteComponent, canActivate: [AuthGuard]},
//PaginaPsicologo
{ path: 'pruebaDeDesarollo', component: InicioPruebaMarcoComponent},

// otherwise redirect to home
{ path: '**', redirectTo: '' }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
