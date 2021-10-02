import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteComponent } from './paciente/paciente.component';
import { BarraDeNavegacionComponent } from './paciente/barra-de-navegacion/barra-de-navegacion.component';
import { CuerpoComponent } from './paciente/cuerpo/cuerpo.component';
import { ControlDeEstudioComponent } from './paciente/cuerpo/control-de-estudio/control-de-estudio.component';
import { ControlDeSuenoComponent } from './paciente/cuerpo/control-de-sueno/control-de-sueno.component';
import { ControlDeAnimoComponent } from './paciente/cuerpo/control-de-animo/control-de-animo.component';
import { ControlDeConsumoDeAguaComponent } from './paciente/cuerpo/control-de-consumo-de-agua/control-de-consumo-de-agua.component';
import { ControlDeEnergiaComponent } from './paciente/cuerpo/control-de-energia/control-de-energia.component';
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
import { CrearLibroComponent } from './paciente/cuerpo/misLibros/crear-libro/crear-libro.component';
import { CrearCancionesComponent } from './paciente/cuerpo/misCanciones/crear-canciones/crear-canciones.component';
import { CrearMetasPersonalesComponent } from './paciente/cuerpo/metasPersonales/crear-metas-personales/crear-metas-personales.component';
import { CrearMetasSocialesComponent } from './paciente/cuerpo/metasSociales/crear-metas-sociales/crear-metas-sociales.component'; 
import { VerFavoritosComponent } from './paciente/cuerpo/misFavoritos/ver-favoritos/ver-favoritos.component';
import { VerMetasPersonalesComponent } from './paciente/cuerpo/metasPersonales/ver-metas-personales/ver-metas-personales.component';
import { AuthImagePipe } from './_helpers/basic.pipe';
import { CrearFavoritoComponent } from './paciente/cuerpo/misFavoritos/crear-favorito/crear-favorito.component';
import { VerLibrosComponent } from './paciente/cuerpo/misLibros/ver-libros/ver-libros.component';
import { VerCancionesComponent } from './paciente/cuerpo/misCanciones/ver-canciones/ver-canciones.component';
import { CalificarMesComponent } from './paciente/cuerpo/calificar-mes/calificar-mes.component';
import { NavigationService } from './_services/navigationServices/navigationService';
import { ResumenDeLaAgendaVirtualComponent } from './paciente/cuerpo/resumen-de-la-agenda-virtual/resumen-de-la-agenda-virtual.component';
import { ChartsModule } from 'ng2-charts';
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
    ResumenDeLaAgendaVirtualComponent
    
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
