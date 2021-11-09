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
import { CrearMetasPersonalesComponent } from './_viewmodels/paciente-app/cuerpo/AgendaVirtual_ActividadesRegistro/metasPersonales/crear-metas-personales/crear-metas-personales.component';
import { CrearMetasSocialesComponent } from './_viewmodels/paciente-app/cuerpo/AgendaVirtual_ActividadesRegistro/metasSociales/crear-metas-sociales/crear-metas-sociales.component';
import { VerFavoritosComponent } from './_viewmodels/paciente-app/cuerpo/AgendaVirtual_ActividadesRegistro/misFavoritos/ver-favoritos/ver-favoritos.component';
import { VerMetasPersonalesComponent } from './_viewmodels/paciente-app/cuerpo/AgendaVirtual_ActividadesRegistro/metasPersonales/ver-metas-personales/ver-metas-personales.component';
import { AuthImagePipe } from './_helpers/basic.pipe';
import { CrearFavoritoComponent } from './_viewmodels/paciente-app/cuerpo//AgendaVirtual_ActividadesRegistro/misFavoritos/crear-favorito/crear-favorito.component';
import { VerLibrosComponent } from './_viewmodels/paciente-app/cuerpo//AgendaVirtual_ActividadesRegistro/misLibros/ver-libros/ver-libros.component';
import { VerCancionesComponent } from './_viewmodels/paciente-app/cuerpo//AgendaVirtual_ActividadesRegistro/misCanciones/ver-canciones/ver-canciones.component';
import { CrearLibroComponent } from './_viewmodels/paciente-app/cuerpo//AgendaVirtual_ActividadesRegistro/misLibros/crear-libro/crear-libro.component';
import { CrearCancionesComponent } from './_viewmodels/paciente-app/cuerpo//AgendaVirtual_ActividadesRegistro/misCanciones/crear-canciones/crear-canciones.component';
import { CalificarMesComponent } from './_viewmodels/paciente-app/cuerpo/AgendaVirtual_ActividadesRegistro/calificar-mes/calificar-mes.component';
import { ResumenDeLaAgendaVirtualComponent } from './_viewmodels/paciente-app/cuerpo/resumen-de-la-agenda-virtual/resumen-de-la-agenda-virtual.component';
import { ChartsModule } from 'ng2-charts';
import { BarraDeNavegacionComponent } from './_viewmodels/paciente-app/barra-de-navegacion/barra-de-navegacion.component';
import { CuerpoComponent } from './_viewmodels/paciente-app/cuerpo/cuerpo.component';
import { PacienteComponent } from './_viewmodels/paciente-app/paciente.component';
import { ControlDeEstudioComponent } from './_viewmodels/paciente-app/cuerpo/AgendaVirtual_ActividadesControl/control-de-estudio/control-de-estudio.component';
import { ControlDeSuenoComponent } from './_viewmodels/paciente-app/cuerpo/AgendaVirtual_ActividadesControl/control-de-sueno/control-de-sueno.component';
import { ControlDeAnimoComponent } from './_viewmodels/paciente-app/cuerpo/AgendaVirtual_ActividadesControl/control-de-animo/control-de-animo.component';
import { ControlDeConsumoDeAguaComponent } from './_viewmodels/paciente-app/cuerpo/AgendaVirtual_ActividadesControl/control-de-consumo-de-agua/control-de-consumo-de-agua.component';
import { ControlDeEnergiaComponent } from './_viewmodels/paciente-app/cuerpo/AgendaVirtual_ActividadesControl/control-de-energia/control-de-energia.component';
import { NavigationService } from './_services/paciente_services/navigation_services/navigationService';
import { PacienteService } from './_services/paciente-service';
import { AlertComponent } from './_components/alert.component';
import { AdministradorNavigationService } from './_services/administrador_services/administrador.navigation.service';
import { PsicologoNavigationService } from './_services/psicologo_services/psicologo.navigation.service';
import { PerfilPacienteComponent } from './_viewmodels/paciente-app/cuerpo/perfil-paciente/perfil-paciente.component';
import { FormularioCambiarContrasenaComponent } from './_viewmodels/recuperar-contrasena-app/formulario-cambiar-contrasena/formulario-cambiar-contrasena.component';
import { RespuestaCambiarContrasenaComponent } from './_viewmodels/recuperar-contrasena-app/respuesta-cambiar-contrasena/respuesta-cambiar-contrasena.component';
import { PruebaGeneralComponent } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general/prueba-general.component';
import { PruebaGeneralLamina2Component } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-lamina2/prueba-general-lamina2.component';
import { PruebaGeneralLamina3Component } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-lamina3/prueba-general-lamina3.component';
import { PruebaGeneralLamina4Component } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-lamina4/prueba-general-lamina4.component';
import { PruebaGeneralLamina5Component } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-lamina5/prueba-general-lamina5.component';
import { PruebaGeneralLamina6Component } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-lamina6/prueba-general-lamina6.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { InicioPruebaGeneralComponent } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/inicio-prueba-general/inicio-prueba-general.component';
import { InicioPruebaActividadesComponent } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/inicio-prueba-actividades/inicio-prueba-actividades.component';
import { InicioPruebaMarcoComponent } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/inicio-prueba-marco/inicio-prueba-marco.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PruebaGeneralLamina7Component } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-lamina7/prueba-general-lamina7.component';
import { PruebaGeneralLamina8Component } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-lamina8/prueba-general-lamina8.component';
import { PruebaGeneralLamina9Component } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-lamina9/prueba-general-lamina9.component';
import { PruebaGeneralLamina10Component } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-lamina10/prueba-general-lamina10.component';
import { PruebaGeneralLamina11Component } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-lamina11/prueba-general-lamina11.component';
import { PruebaGeneralLamina12Component } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-lamina12/prueba-general-lamina12.component';
import { PruebaGeneralLamina13Component } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-lamina13/prueba-general-lamina13.component';
import { PruebaGeneralLamina14Component } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-lamina14/prueba-general-lamina14.component';
import { PruebaGeneralLamina15Component } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-lamina15/prueba-general-lamina15.component';
import { PruebaGeneralLamina16Component } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-lamina16/prueba-general-lamina16.component';
import { PruebaGeneralResultadosComponent } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/PruebaGeneral/prueba-general-resultados/prueba-general-resultados.component';
import { PruebaDeDesarolloCognitivoComponent } from './_viewmodels/paciente-app/cuerpo/PruebasDesarolloCognitivo/prueba-de-desarollo-cognitivo/prueba-de-desarollo-cognitivo.component';
import { LoginComponent } from './_viewmodels/login-app/login-paciente/login.component';
import { EventosNotificacionesComponent } from './_viewmodels/paciente-app/cuerpo/eventos-notificaciones/eventos-notificaciones.component';

import { NotificacionesService } from './_services/notificacionesService';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin, 
  interactionPlugin 
]); 
@NgModule({ 
  declarations: [
    AppComponent,
    BarraDeNavegacionComponent,
    CuerpoComponent,
    PacienteComponent,
    ControlDeEstudioComponent,
    ControlDeSuenoComponent,
    ControlDeAnimoComponent,
    ControlDeConsumoDeAguaComponent,
    ControlDeEnergiaComponent,
    CrearLibroComponent,
    CrearCancionesComponent,
    CrearMetasPersonalesComponent,
    CrearMetasSocialesComponent,
    VerMetasPersonalesComponent,
    VerFavoritosComponent,
    CrearFavoritoComponent,
    AuthImagePipe,
    VerLibrosComponent,
    VerCancionesComponent,
    CalificarMesComponent,
    ResumenDeLaAgendaVirtualComponent,
    AlertComponent,
    LoginComponent,
    PerfilPacienteComponent,
    FormularioCambiarContrasenaComponent,
    RespuestaCambiarContrasenaComponent,
    PruebaGeneralComponent,
    PruebaGeneralLamina2Component,
    PruebaGeneralLamina3Component,
    PruebaGeneralLamina4Component,
    PruebaGeneralLamina5Component,
    PruebaGeneralLamina6Component,
    InicioPruebaGeneralComponent,
    InicioPruebaActividadesComponent,
    InicioPruebaMarcoComponent,
    PruebaGeneralLamina7Component,
    PruebaGeneralLamina8Component,
    PruebaGeneralLamina9Component,
    PruebaGeneralLamina10Component,
    PruebaGeneralLamina11Component,
    PruebaGeneralLamina12Component,
    PruebaGeneralLamina13Component,
    PruebaGeneralLamina14Component,
    PruebaGeneralLamina15Component,
    PruebaGeneralLamina16Component,
    PruebaGeneralResultadosComponent,
    PruebaDeDesarolloCognitivoComponent,
    EventosNotificacionesComponent
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
    NgbModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    SidenavService,NavigationService,PacienteService,AdministradorNavigationService,PsicologoNavigationService,
    NotificacionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
