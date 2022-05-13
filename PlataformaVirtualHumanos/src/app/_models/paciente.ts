export class PacienteVO
{
    carnetDeIdentidad:any;
    nombres:any;
    apellidos:any;
    lugarDeNacimiento:any;
    fechaDeNacimiento:any;
    sexo:any;
    numeroDeContacto:any;
    correoElectronico:any;
    contrasena:any;
    nombreDeUsuario:any;
    parientes:any;
    hash:any;
    agendaVirtual:any;
    token: String|any;
    
    constructor(carnetDeIdentidad:any,nombres:any,apellidos:any,lugarDeNacimiento:any,fechaDeNacimiento:any,sexo:any,numeroDeContacto:any,parientes:any,correoElectronico:any,contrasena:any,nombreDeUsuario:any){
        this.carnetDeIdentidad=carnetDeIdentidad;
        this.nombres=nombres;
        this.apellidos=apellidos;
        this.lugarDeNacimiento=lugarDeNacimiento;
        this.fechaDeNacimiento=fechaDeNacimiento;
        this.sexo=sexo;
        this.numeroDeContacto=numeroDeContacto;
        this.parientes=parientes;
        this.correoElectronico=correoElectronico;
        this.contrasena=contrasena;
        this.nombreDeUsuario=nombreDeUsuario;
    }
    get_carnetDeIdentidad(){
        return this.carnetDeIdentidad;
    }
    set_carnetDeIdentidad(carnetDeIdentidad:any){
        this.carnetDeIdentidad=carnetDeIdentidad;
    }
    get_nombres(){
        return this.nombres;
    }
    set_nombres(nombres:any){
        this.nombres=nombres;
    }
    get_apellidos(){
        return this.apellidos;
    }
    set_apellidos(apellidos:any){
        this.apellidos=apellidos;
    }
    get_lugarDeNacimiento(){
        return this.lugarDeNacimiento;
    }
    set_lugarDeNacimiento(lugarDeNacimiento:any){
        this.lugarDeNacimiento=lugarDeNacimiento;
    }
    get_fechaDeNacimiento(){
        return this.fechaDeNacimiento;
    }
    set_fechaDeNacimiento(fechaDeNacimiento:any){
        this.fechaDeNacimiento=fechaDeNacimiento;
    }
    get_sexo(){
        return this.sexo;
    }
    set_sexo(sexo:any){
        this.sexo=sexo;
    }
    get_numeroDeContacto(){
        return this.numeroDeContacto;
    }
    set_numeroDeContacto(numeroDeContacto:any){
        this.numeroDeContacto=numeroDeContacto;
    }
    get_parientes(){
        return this.parientes;
    }
    set_parientes(parientes:any){
        this.parientes=parientes;
    }
    get_correoElectronico(){
        return this.correoElectronico;
    }
    set_correoElectronico(correoElectronico:any){
        this.correoElectronico=correoElectronico;
    }
    get_contrasena(){
        return this.contrasena;
    }
    set_contrasena(contrasena:any){
        this.contrasena=contrasena;
    }
    get_nombreDeUsuario(){
        return this.nombreDeUsuario;
    }
    set_nombreDeUsuario(nombreDeUsuario:any){
        this.nombreDeUsuario=nombreDeUsuario;
    }
    get_agendaVirtual(){
        return this.agendaVirtual;
    }
    set_agendaVirtual(agendaVirtual:any){
        this.agendaVirtual=agendaVirtual;
    }
}
