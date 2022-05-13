import { AdministradorService } from './../../../../../_services/administrador-service';
import { Component, EventEmitter, OnInit, Output, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Administrador } from 'src/app/_models/administrador_model/administrador';
import { first } from 'rxjs/operators';
//import { Console } from 'console';

@Component({
  selector: 'app-crear-administrador',
  templateUrl: './crear-administrador.component.html',
  styleUrls: ['./crear-administrador.component.scss']
})
export class CrearAdministradorComponent implements OnInit,AfterViewInit {
  form!: FormGroup;
  fechaActual:any;
  submitted:any;
  minimoFechaDeNacimiento:any;
  loading = false;
  //fechaActualOriginal:any;

  constructor(private formBuilder: FormBuilder,private administradorService:AdministradorService) { }

  ngAfterViewInit(): void {
    //this.fechaActual= this.convertirFechaYQuitarHoras(Date.now());
    var fechaActualOriginal:any=new Date();

    this.fechaActual=this.convertirFechaYQuitarHoras(fechaActualOriginal);
    var currentYear=fechaActualOriginal.getFullYear();
    var fechaActual18AñosAntes= fechaActualOriginal.setFullYear(currentYear-20);
    this.minimoFechaDeNacimiento=this.convertirFechaYQuitarHoras(fechaActual18AñosAntes);
  }

  get f() { return this.form.controls; }

  ngOnInit(): void {
    this.submitted= false;
   
      this.form = this.formBuilder.group({
      carnetDeIdentidad: ['', Validators.required],
      nombres: ['', [Validators.required,this.noWhitespaceValidator]],
      apellidos: ['', [Validators.required,this.noWhitespaceValidator]],
      fechaDeNacimiento: ['', Validators.required],
      //fechaDeRegistro: ['', Validators.required],
      sexo: ['', Validators.required],
      numeroTelefonico: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email,this.noWhitespaceValidator]],
      estado: ['', [Validators.required]],
      //fechaDeshabilitacion: ['', [Validators.required]]
      
      });
  }
  @Output() irAListarAdministardorEmiter = new EventEmitter();
  irAListarAdministrador(){
    this.irAListarAdministardorEmiter.emit();
   
  }
  onSubmit(){
    this.submitted=true;
    console.log(this.form);
    if (this.form.invalid) {
            return;
        }
    this.loading = true;
    var carnetDeIdentidad=this.form.controls.carnetDeIdentidad.value
    var nombres=this.form.controls.nombres.value
    var apellidos=this.form.controls.apellidos.value
    var fechaDeNacimiento=this.form.controls.fechaDeNacimiento.value
   // var fechaDeRegistro=this.form.controls.fechaDeRegistro.value
    var sexo=this.form.controls.sexo.value
    var numeroTelefonico=this.form.controls.numeroTelefonico.value
    var correoElectronico=this.form.controls.correoElectronico.value
    var estado=this.form.controls.estado.value
    //var fechaDeDeshabilitación=this.form.controls.fechaDeshabilitacion.value
    
    var administrador= new Administrador();
    administrador.carnetDeIdentidad=carnetDeIdentidad;
    administrador.contrasena=carnetDeIdentidad;
    administrador.nombre=nombres;
    administrador.apellidos=apellidos;
    administrador.fechaDeNacimiento=fechaDeNacimiento;
    administrador.fechaDeRegistro=this.fechaActual;
    //administrador.fechaDeDesabilitacion=fechaDeDeshabilitación;
    administrador.estado=estado;
    administrador.numeroTelefonico=numeroTelefonico;
    administrador.correoElectronico=correoElectronico;
    administrador.sexo=sexo;
  

    this.administradorService.registrarAdminstrador(administrador)
    .pipe(first())
    .subscribe(() => {
        window.open("http://localhost:4000/excelUsuario/UsuarioRegistrado.csv", "_blank");
        this.irAListarAdministrador();
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
}
