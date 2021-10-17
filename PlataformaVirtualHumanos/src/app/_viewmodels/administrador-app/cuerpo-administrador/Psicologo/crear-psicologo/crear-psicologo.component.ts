import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Psicologo } from 'src/app/_models/psicologo_model/psicologo';
import { PsicologoService } from 'src/app/_services/psicologo_services/psicologo-service';


@Component({
  selector: 'app-crear-psicologo',
  templateUrl: './crear-psicologo.component.html',
  styleUrls: ['./crear-psicologo.component.scss']
})
export class CrearPsicologoComponent implements OnInit ,AfterViewInit{
  form!: FormGroup;
  fechaActual:any;
  submitted:any;
  minimoFechaDeNacimiento:any;
  loading = false;
  constructor(private formBuilder: FormBuilder,private psicologoService:PsicologoService){}
  ngAfterViewInit(): void {
    var fechaActualOriginal:any=new Date();
    this.fechaActual=this.convertirFechaYQuitarHoras(fechaActualOriginal);

    var currentYear=fechaActualOriginal.getFullYear();
    var fechaActual18AñosAntes= fechaActualOriginal.setFullYear(currentYear-20);
    this.minimoFechaDeNacimiento=this.convertirFechaYQuitarHoras(fechaActual18AñosAntes);
  }
  get f() { return this.form.controls; }
  
  ngOnInit(): void {
 this.submitted=false;

    this.form = this.formBuilder.group({
      carnetDeIdentidad: ['', Validators.required],
      nombres: ['', [Validators.required,this.noWhitespaceValidator]],
      apellidos: ['', [Validators.required,this.noWhitespaceValidator]],
      fecha_de_nacimiento: ['', Validators.required],
      
      sexo: ['', Validators.required],
      numeroTelefonico: ['', Validators.required],
      correoElectronico: ['', [Validators.required,this.noWhitespaceValidator]],
      estado: ['', [Validators.required]],
      
      //fechaDeshabilitacion: ['', [Validators.required]],
      //caducidadLicencia: ['', Validators.required]
      });
  }
  @Output() irAListarPsicologoEmiter = new EventEmitter();

  irAListarPsicologo(){
    this.irAListarPsicologoEmiter.emit();
  }
  onSubmit(){
    this.submitted=true;
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }
    this.loading=true;
  
    var carnetDeIdentidadValue=this.form.controls.carnetDeIdentidad.value
    var nombresValue=this.form.controls.nombres.value
    var apellidosValue=this.form.controls.apellidos.value
    var fechaDeNacimientoValue=this.form.controls.fecha_de_nacimiento.value
    var fechaDeRegistroValue=this.fechaActual
    var sexoValue=this.form.controls.sexo.value
    var numeroTelefonicoValue=this.form.controls.numeroTelefonico.value
    var correoElectronicoValue=this.form.controls.correoElectronico.value
    var estadoValue=this.form.controls.estado.value
   // var fechaDeDeshabilitaciónValue=this.form.controls.fechaDeshabilitacion.value
    //var caducidadLicenciaValue=this.form.controls.caducidadLicencia.value
    console.log(this.form.value);
    var psicologo=new Psicologo();
    psicologo.carnetDeIdentidad=carnetDeIdentidadValue;
    psicologo.contrasena="12345";
    psicologo.nombres=nombresValue;
    psicologo.apellidos=apellidosValue;
    psicologo.fecha_de_nacimiento=fechaDeNacimientoValue;
    psicologo.fechaDeRegistro=fechaDeRegistroValue;
    psicologo.sexo=sexoValue;
    psicologo.numeroTelefonico=numeroTelefonicoValue;
    psicologo.correoElectronico=correoElectronicoValue;
    psicologo.estado=estadoValue;
  //  psicologo.fechaDeDeshabilitacion=fechaDeDeshabilitaciónValue;
    console.log(psicologo);
    this.psicologoService.registrarPsicologo(psicologo)
    .pipe(first())
    .subscribe(() => {
      window.open("http://localhost:4000/excelUsuario/UsuarioRegistrado.csv", "_blank");
       this.irAListarPsicologo();
    }).add(()=>this.loading=false);
    
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
