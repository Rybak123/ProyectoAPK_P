import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {SidenavService} from '../app/_services/sidenavService'
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import {A11yModule} from '@angular/cdk/a11y';
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
import { CrearLibroComponent } from './_viewmodels/paciente-app/cuerpo/misLibros/crear-libro/crear-libro.component';
import { CrearCancionesComponent } from './_viewmodels/paciente-app/cuerpo/misCanciones/crear-canciones/crear-canciones.component';
import { CrearMetasPersonalesComponent } from './_viewmodels/paciente-app/cuerpo/metasPersonales/crear-metas-personales/crear-metas-personales.component';
import { CrearMetasSocialesComponent } from './_viewmodels/paciente-app/cuerpo/metasSociales/crear-metas-sociales/crear-metas-sociales.component';
import { VerFavoritosComponent } from './_viewmodels/paciente-app/cuerpo/misFavoritos/ver-favoritos/ver-favoritos.component';
import { VerMetasPersonalesComponent } from './_viewmodels/paciente-app/cuerpo/metasPersonales/ver-metas-personales/ver-metas-personales.component';
import { AuthImagePipe } from './_helpers/basic.pipe';
import { CrearFavoritoComponent } from './_viewmodels/paciente-app/cuerpo/misFavoritos/crear-favorito/crear-favorito.component';
import { VerLibrosComponent } from './_viewmodels/paciente-app/cuerpo/misLibros/ver-libros/ver-libros.component';
import { VerCancionesComponent } from './_viewmodels/paciente-app/cuerpo/misCanciones/ver-canciones/ver-canciones.component';
import { CalificarMesComponent } from './_viewmodels/paciente-app/cuerpo/calificar-mes/calificar-mes.component';
import { ResumenDeLaAgendaVirtualComponent } from './_viewmodels/paciente-app/cuerpo/resumen-de-la-agenda-virtual/resumen-de-la-agenda-virtual.component';
import { ChartsModule } from 'ng2-charts';
import { AdministradorAppComponent } from './_viewmodels/administrador-app/administrador-app.component';
import { BarraDeNavegacionComponent } from './_viewmodels/paciente-app/barra-de-navegacion/barra-de-navegacion.component';
import { CuerpoComponent } from './_viewmodels/paciente-app/cuerpo/cuerpo.component';
import { PacienteComponent } from './_viewmodels/paciente-app/paciente.component';
import { ControlDeEstudioComponent } from './_viewmodels/paciente-app/cuerpo/control-de-estudio/control-de-estudio.component';
import { ControlDeSuenoComponent } from './_viewmodels/paciente-app/cuerpo/control-de-sueno/control-de-sueno.component';
import { ControlDeAnimoComponent } from './_viewmodels/paciente-app/cuerpo/control-de-animo/control-de-animo.component';
import { ControlDeConsumoDeAguaComponent } from './_viewmodels/paciente-app/cuerpo/control-de-consumo-de-agua/control-de-consumo-de-agua.component';
import { ControlDeEnergiaComponent } from './_viewmodels/paciente-app/cuerpo/control-de-energia/control-de-energia.component';
import { NavigationService } from './_services/paciente_services/navigation_services/navigationService';
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
    LoginComponent,
    RegistroComponent,
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
    AdministradorAppComponent
    
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
    ChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    SidenavService,NavigationService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
