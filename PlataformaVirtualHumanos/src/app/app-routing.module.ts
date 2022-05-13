import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuard } from '../app/_helpers';
import { PacienteComponent } from './_viewmodels/paciente-app/paciente.component';
import { AdministradorAppComponent } from './_viewmodels/administrador-app/administrador-app.component';


const routes: Routes = [
{ path: '', component: PacienteComponent, canActivate: [AuthGuard]},
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegistroComponent},
{ path: 'administrador', component: AdministradorAppComponent},

// otherwise redirect to home
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
