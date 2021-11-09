import { Output,EventEmitter, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Evento } from 'src/app/_models/evento_model/Evento';
import { Paciente } from 'src/app/_models/paciente_model/paciente';
import { EventoService } from 'src/app/_services/eventosServices/evento.service';
import { PacienteService } from 'src/app/_services/paciente-service';
import { NotificacionesService } from 'src/app/_services/notificacionesServices';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.scss']
})
export class CrearEventoComponent implements OnInit {

  form!: FormGroup;
  fechaActual:any;
  submitted:any;
  loading = false;

  constructor(private formBuilder: FormBuilder, private eventoService:EventoService,private notificacionesService:NotificacionesService) { }

  ngAfterViewInit(): void {
    var fechaActualOriginal:any=new Date();
    this.fechaActual=this.convertirFechaYQuitarHoras(fechaActualOriginal);
  }

  get f() { return this.form.controls; }

  @Input()  idEventoSeleccionado:any;
  @Output() irAListarEventoEmiter = new EventEmitter();

  irAListarEvento(){
    this.irAListarEventoEmiter.emit();
  }

  ngOnInit(): void {
    this.submitted=false;
    this.form = this.formBuilder.group({
    titulo: ['', Validators.required,this.noWhitespaceValidator],
    descripcion:['', Validators.required,this.noWhitespaceValidator],
    fechaDePublicacion: ['', [Validators.required]],
    fechaDelEvento: ['', Validators.required],
    imagen: ['', Validators.required],
    estado: ['', [Validators.required]]
    });
}
  onSubmit(){
    this.submitted=true;

    if (this.form.invalid) {
      return;
    }
    this.loading = true;
  
    var evento= new Evento();
    evento.Titulo=this.form.controls.titulo.value;
    evento.Descripcion=this.form.controls.descripcion.value;
    evento.FechaDePublicacion=this.fechaActual
    evento.FechaDelEvento=this.form.controls.fechaDelEvento.value;
    evento.Imagen=this.form.controls.imagen.value;
    evento.Estado=this.form.controls.estado.value;

    var formularioImagen=new FormData();
    formularioImagen.append('myFile', this.archivoActual, this.archivoActual.name);
    formularioImagen.append('Titulo', evento.Titulo);
    formularioImagen.append('Descripcion', evento.Descripcion);
    formularioImagen.append('FechaDePublicacion', evento.FechaDePublicacion);
    formularioImagen.append('FechaDelEvento', evento.FechaDelEvento);
    formularioImagen.append('Imagen', evento.Imagen);
    formularioImagen.append('Estado', evento.Estado);
   
    this.eventoService.registrarEventos(formularioImagen)
    .pipe(first())
    .subscribe(() => {
      this.notificacionesService.sendMessage("Hola a todos");
      this.irAListarEvento();
      
    }).add(() => this.loading = false);
    
  }
  convertirFechaYQuitarHoras(fecha:any){
    var fechLibro = new Date(fecha);
    var dd = String(fechLibro.getDate()).padStart(2, '0');
    var mm = String(fechLibro.getMonth() + 1).padStart(2, '0'); 
    var yyyy = fechLibro.getFullYear();
    var fechaActualString= yyyy + '-' + mm+ '-' +dd;
    return fechaActualString;
  }
  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  archivoActual:any;
  archivos=[];
  
  capturarFile(event:any){
    this.archivoActual=<File>event.target.files[0];
    const files = event.target.files;
    if (files.length === 0)
        return;
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        alert("Only images are supported.");
        return;
    }
  }

}
