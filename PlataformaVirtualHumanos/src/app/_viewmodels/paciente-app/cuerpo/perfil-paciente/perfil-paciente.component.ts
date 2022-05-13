import { AfterViewInit, Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Paciente } from 'src/app/_models/paciente_model/paciente';
import { PacienteService } from 'src/app/_services/paciente-service';
@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.scss']
})
export class PerfilPacienteComponent implements OnInit , AfterViewInit{

  form!: FormGroup;
  fechaActual:any;
  submitted:any;
  minimoFechaDeNacimiento:any;
  loading = false;
  disableSend:any;
  fechaActualRegistro:any;
  usuario!:any;

  editarButton:any;
  enviarButton:any;
  cancelarButton:any;

  constructor(private formBuilder: FormBuilder, private pacienteService:PacienteService) { }
  
  ngAfterViewInit(): void {

    this.editarButton=document.getElementById("idEditarButton");
    this.enviarButton=document.getElementById("idEnviarButton");
    this.cancelarButton=document.getElementById("idCancelarButton");
    

    this.form.disable();
    var pacienteInfo=localStorage.getItem('currentUser');
    if(pacienteInfo==null){
        pacienteInfo="null";
        throw console.error("Paciente no encontrado");
    }
    var usuario:any =JSON.parse(pacienteInfo);
    this.pacienteService.leerPaciente(usuario.id)
    .pipe(first())
    .subscribe((data) => {
      this.usuario=data;
      console.log(this.usuario)
      this.form.controls['carnetDeIdentidad'].setValue(this.usuario.carnetDeIdentidad);
      this.form.controls['nombres'].setValue(this.usuario.nombres);
      this.form.controls['apellidos'].setValue(this.usuario.apellidos);
      this.form.controls['fechaDeNacimiento'].setValue(this.convertirFechaYQuitarHoras(this.usuario.fechaDeNacimiento));
      this.form.controls['sexo'].setValue(this.usuario.sexo);
      this.form.controls['numeroTelefonico'].setValue(this.usuario.numeroTelefonico);
      this.form.controls['correoElectronico'].setValue(this.usuario.correoElectronico);
      this.form.controls['estado'].setValue(this.usuario.estado);
      this.form.controls['caducidadLicencia'].setValue(this.convertirFechaYQuitarHoras(this.usuario.caducidadLicencia));
      this.fechaActualRegistro=this.convertirFechaYQuitarHoras(this.usuario.fechaDeRegistro);
    }).add(() => {
      this.loading = false;

      this.disableSend=true;
      this.cancelarButton.disabled=true;
    });

   
   
  
    var fechaActualOriginal:any=new Date();
    this.fechaActual=this.convertirFechaYQuitarHoras(fechaActualOriginal);

    var currentYear=fechaActualOriginal.getFullYear();
    var fechaActual18AñosAntes= fechaActualOriginal.setFullYear(currentYear-18);
    this.minimoFechaDeNacimiento=this.convertirFechaYQuitarHoras(fechaActual18AñosAntes);
  }

  get f() { return this.form.controls; }

  ngOnInit(): void {

     

      this.submitted=false;
      this.form = this.formBuilder.group({
      carnetDeIdentidad: [{value:'',disabled:true}, Validators.required],
      nombres: ['', [Validators.required,this.noWhitespaceValidator]],
      apellidos: ['', [Validators.required,this.noWhitespaceValidator]],
      fechaDeNacimiento: ['', Validators.required],
      sexo: ['', Validators.required],
      numeroTelefonico: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email,this.noWhitespaceValidator]],
      estado: [{value:'',disabled:true}, [Validators.required]],
      caducidadLicencia: [{value:'',disabled:true}, Validators.required]
      });
  }

  @Input()  idPacienteSeleccionado:any;
  @Output() irAListarPacienteEmiter = new EventEmitter();

  irAListarPaciente(){
    this.irAListarPacienteEmiter.emit();
  }
  onSubmit(){
    this.submitted=true;

    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.disableSend=true;
    this.cancelarButton.disabled="true";
    var carnetDeIdentidadValue=this.form.controls.carnetDeIdentidad.value;
    var nombresValue=this.form.controls.nombres.value;
    var apellidosValue=this.form.controls.apellidos.value;
    var fechaDeNacimientoValue=this.form.controls.fechaDeNacimiento.value;
    var sexoValue=this.form.controls.sexo.value;
    var numeroTelefonicoValue=this.form.controls.numeroTelefonico.value;
    var correoElectronicoValue=this.form.controls.correoElectronico.value;
    var estado=this.form.controls.estado.value;
    var caducidadLicenciaValue=this.form.controls.caducidadLicencia.value;
  
    var paciente= new Paciente();
    paciente.id=this.usuario.id;
    paciente.carnetDeIdentidad=carnetDeIdentidadValue;
    paciente.contrasena=this.usuario.contrasena;
    paciente.nombres=nombresValue;
    paciente.apellidos=apellidosValue;
    paciente.fechaDeNacimiento=fechaDeNacimientoValue;
    paciente.fechaDeRegistro=this.fechaActual;
    paciente.estado=estado;
    paciente.numeroTelefonico=numeroTelefonicoValue;
    paciente.correoElectronico=correoElectronicoValue;
    paciente.sexo=sexoValue;
    paciente.caducidadLicencia=caducidadLicenciaValue;

    this.pacienteService.modificarPaciente(paciente)
    .pipe(first())
    .subscribe(() => {
      alert("Datos modificados");
    }).add(() => {
      this.loading = false;
      this.form.disable();
      this.editarButton.disabled=false;
      this.disableSend=true;
      this.cancelarButton.disabled="true"
    });
   
  }
  convertirFechaYQuitarHoras(fecha:any){
    var fechLibro = new Date(fecha);
    var dd = String(fechLibro.getDate()).padStart(2, '0');
    var mm = String(fechLibro.getMonth() + 1).padStart(2, '0'); 
    var yyyy = fechLibro.getFullYear();
    var fechaActualString= yyyy + '-' + mm+ '-' +dd;
    return fechaActualString;
  }
  editar(){
    this.form.controls.nombres.enable();
    this.form.controls.apellidos.enable();
    this.form.controls.fechaDeNacimiento.enable();
    this.form.controls.sexo.enable();
    this.form.controls.numeroTelefonico.enable();
    this.form.controls.correoElectronico.enable();
    this.editarButton.disabled="true";
    this.enviarButton.disabled=false;
    this.cancelarButton.disabled=false;
    this.disableSend=false;
    
  }
  cancelar(){
    this.form.disable();
    this.form.controls['carnetDeIdentidad'].setValue(this.usuario.carnetDeIdentidad);
      this.form.controls['nombres'].setValue(this.usuario.nombres);
      this.form.controls['apellidos'].setValue(this.usuario.apellidos);
      this.form.controls['fechaDeNacimiento'].setValue(this.convertirFechaYQuitarHoras(this.usuario.fechaDeNacimiento));
      this.form.controls['sexo'].setValue(this.usuario.sexo);
      this.form.controls['numeroTelefonico'].setValue(this.usuario.numeroTelefonico);
      this.form.controls['correoElectronico'].setValue(this.usuario.correoElectronico);
      this.form.controls['estado'].setValue(this.usuario.estado);
      this.form.controls['caducidadLicencia'].setValue(this.convertirFechaYQuitarHoras(this.usuario.caducidadLicencia));
      this.fechaActualRegistro=this.convertirFechaYQuitarHoras(this.usuario.fechaDeRegistro);
      this.editarButton.disabled=false;
      this.disableSend=true;
      this.cancelarButton.disabled="true";
  }
  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}
