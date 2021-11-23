import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {SidenavService} from '../app/_services/sidenavService'
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
import { NavigationService } from './_services/paciente_services/navigation_services/navigationService';
import { PacienteService } from './_services/paciente-service';
import { AlertComponent } from './_components/alert.component';
import { LoginPsicologoComponent } from './_viewmodels/login-app/login-psicologo/login-psicologo.component';
import { PsicologoAppComponent } from './_viewmodels/psicologo-app/psicologo-app.component';
import { CuerpoPsicologoComponent } from './_viewmodels/psicologo-app/cuerpo-psicologo/cuerpo-psicologo.component';
import { BarraDeNavegacionPsicologoComponent } from './_viewmodels/psicologo-app/barra-de-navegacion-psicologo/barra-de-navegacion-psicologo.component';
import { PerfilPsicologoComponent } from './_viewmodels/psicologo-app/cuerpo-psicologo/perfil-psicologo/perfil-psicologo.component';
import { AdministradorNavigationService } from './_services/administrador_services/administrador.navigation.service';
import { PsicologoNavigationService } from './_services/psicologo_services/psicologo.navigation.service';
import { FormularioCambiarContrasenaComponent } from './_viewmodels/recuperar-contrasena-app/formulario-cambiar-contrasena/formulario-cambiar-contrasena.component';
import { RespuestaCambiarContrasenaComponent } from './_viewmodels/recuperar-contrasena-app/respuesta-cambiar-contrasena/respuesta-cambiar-contrasena.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PacientesComponent } from './_viewmodels/psicologo-app/cuerpo-psicologo/pacientes/pacientes.component';
import { ResumenDeLaAgendaVirtualComponent } from './_viewmodels/psicologo-app/cuerpo-psicologo/pacientes/resumen-de-la-agenda-virtual/resumen-de-la-agenda-virtual.component';
import { ResultadosPruebasDeDesarolloCognitivoComponent } from './_viewmodels/psicologo-app/cuerpo-psicologo/pacientes/resultados-pruebas-de-desarollo-cognitivo/resultados-pruebas-de-desarollo-cognitivo.component';
FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    AuthImagePipe,
    AlertComponent,
    LoginPsicologoComponent,
    PsicologoAppComponent,
    CuerpoPsicologoComponent,
    BarraDeNavegacionPsicologoComponent,
    PerfilPsicologoComponent,
    FormularioCambiarContrasenaComponent,
    RespuestaCambiarContrasenaComponent,
    PacientesComponent,
    ResumenDeLaAgendaVirtualComponent,
    ResultadosPruebasDeDesarolloCognitivoComponent
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
    IvyCarouselModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    SidenavService,NavigationService,PacienteService,AdministradorNavigationService,PsicologoNavigationService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
