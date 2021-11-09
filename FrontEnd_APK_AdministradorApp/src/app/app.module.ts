import { CuerpoAdministradorComponent } from './_viewmodels/administrador-app/cuerpo-administrador/cuerpo-administrador.component';
import { BarraDeNavegacionAdministradorComponent } from './_viewmodels/administrador-app/barra-de-navegacion-administrador/barra-de-navegacion-administrador.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthImagePipe } from './_helpers/basic.pipe';
import { ChartsModule } from 'ng2-charts';
import { AdministradorAppComponent } from './_viewmodels/administrador-app/administrador-app.component';
import { GestionPacientesComponent } from './_viewmodels/administrador-app/cuerpo-administrador/gestion-pacientes/gestion-pacientes.component';
import { CrearPacienteComponent } from './_viewmodels/administrador-app/cuerpo-administrador/Pacientes/crear-paciente/crear-paciente.component';
import { AlertComponent } from './_components/alert.component';
import { LoginAdministradorComponent } from './_viewmodels/login-app/login-administrador/login-administrador.component';
import { AdministradorNavigationService } from './_services/administrador_services/administrador.navigation.service';
import { PerfilAdministradorComponent } from './_viewmodels/administrador-app/cuerpo-administrador/perfil-administrador/perfil-administrador.component';
import { GestionPsicologoComponent } from './_viewmodels/administrador-app/cuerpo-administrador/gestion-psicologo/gestion-psicologo.component';
import { CrearPsicologoComponent } from './_viewmodels/administrador-app/cuerpo-administrador/Psicologo/crear-psicologo/crear-psicologo.component';
import { GestionAdministradorComponent } from './_viewmodels/administrador-app/cuerpo-administrador/gestion-administrador/gestion-administrador.component';
import { CrearAdministradorComponent } from './_viewmodels/administrador-app/cuerpo-administrador/Administradores/crear-administrador/crear-administrador.component';
import { FormularioCambiarContrasenaComponent } from './_viewmodels/recuperar-contrasena-app/formulario-cambiar-contrasena/formulario-cambiar-contrasena.component';
import { RespuestaCambiarContrasenaComponent } from './_viewmodels/recuperar-contrasena-app/respuesta-cambiar-contrasena/respuesta-cambiar-contrasena.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PsicologoService } from './_services/psicologo_services/psicologo-service';
import { PacienteService } from './_services/paciente-service';
import { GestionEventosComponent } from './_viewmodels/administrador-app/cuerpo-administrador/Eventos/gestion-eventos/gestion-eventos.component';
import { CrearEventoComponent } from './_viewmodels/administrador-app/cuerpo-administrador/Eventos/crear-evento/crear-evento.component';
import { NotificacionesService } from './_services/notificacionesServices';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    AuthImagePipe,
    AdministradorAppComponent,
    BarraDeNavegacionAdministradorComponent,
    CuerpoAdministradorComponent,
    CrearPacienteComponent,
    AlertComponent,
    LoginAdministradorComponent,
    PerfilAdministradorComponent,
    GestionPacientesComponent,
    GestionPsicologoComponent,
    GestionAdministradorComponent,
    CrearPsicologoComponent,
    CrearAdministradorComponent,
    FormularioCambiarContrasenaComponent,
    RespuestaCambiarContrasenaComponent,
    GestionEventosComponent,
    CrearEventoComponent,
 
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    BrowserAnimationsModule,
    ChartsModule,
    NgbModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    AdministradorNavigationService,PsicologoService,PacienteService,NotificacionesService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
