import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PacienteComponent } from './paciente/paciente.component';
import { AuthGuard } from '../app/_helpers';
const routes: Routes = [
{ path: '', component: PacienteComponent, canActivate: [AuthGuard]},
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegistroComponent},

// otherwise redirect to home
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
