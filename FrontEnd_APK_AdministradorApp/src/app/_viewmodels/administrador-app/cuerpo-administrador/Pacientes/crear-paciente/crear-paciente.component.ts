import { AfterViewInit, Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { GlobalConstants } from 'src/app/global-constants';
import { Paciente } from 'src/app/_models/paciente_model/paciente';
import { PacienteService } from 'src/app/_services/paciente-service';


@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.scss']
})
export class CrearPacienteComponent implements OnInit, AfterViewInit {
  form!: FormGroup;
  fechaActual:any;
  submitted:any;
  minimoFechaDeNacimiento:any;
  loading = false;

  constructor(private formBuilder: FormBuilder, private pacienteService:PacienteService) { }

  ngAfterViewInit(): void {
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
      carnetDeIdentidad: ['', Validators.required],
      nombres: ['', [Validators.required,this.noWhitespaceValidator]],
      apellidos: ['', [Validators.required,this.noWhitespaceValidator]],
      fechaDeNacimiento: ['', Validators.required],
      sexo: ['', Validators.required],
      numeroTelefonico: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email,this.noWhitespaceValidator]],
      estado: ['', [Validators.required]],
      caducidadLicencia: ['', Validators.required]
      });
  }

  @Input()  idPacienteSeleccionado:any;
  @Output() irAListarPacienteEmiter = new EventEmitter();

  irAListarPaciente(){
    this.irAListarPacienteEmiter.emit();
  }
  onSubmit(){
    console.log(this.form.value);
    this.submitted=true;

    if (this.form.invalid) {
      return;
    }
    this.loading = true;
   
    var carnetDeIdentidadValue=this.form.controls.carnetDeIdentidad.value;
    var nombresValue=this.form.controls.nombres.value;
    var apellidosValue=this.form.controls.apellidos.value;
    var fechaDeNacimientoValue=this.form.controls.fechaDeNacimiento.value;
    var sexoValue=this.form.controls.sexo.value
    var numeroTelefonicoValue=this.form.controls.numeroTelefonico.value
    var correoElectronicoValue=this.form.controls.correoElectronico.value
    var estado=this.form.controls.estado.value
    var caducidadLicenciaValue=this.form.controls.caducidadLicencia.value
  
    var paciente= new Paciente();
    paciente.carnetDeIdentidad=carnetDeIdentidadValue;
    paciente.contrasena="1";
    paciente.nombres=nombresValue;
    paciente.apellidos=apellidosValue;
    paciente.fechaDeNacimiento=fechaDeNacimientoValue;
    paciente.fechaDeRegistro=this.fechaActual;
    paciente.estado=estado;
    paciente.numeroTelefonico=numeroTelefonicoValue;
    paciente.correoElectronico=correoElectronicoValue;
    paciente.sexo=sexoValue;
    paciente.caducidadLicencia=caducidadLicenciaValue;

    this.pacienteService.registrarPaciente(paciente)
    .pipe(first())
    .subscribe(() => {
      window.open(`${GlobalConstants.apiURL}/excelUsuario/UsuarioRegistrado.csv`, "_blank");
      this.irAListarPaciente();
   
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
