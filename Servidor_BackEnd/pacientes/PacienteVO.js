const internal = require("stream")

// Esta clase no se esta utilizando
// Clase que nos permite obtener bjetos de tipo paciente
class PersonaVO
{
    carnetDeIdentidad;
    nombres;
    apellidos;
    lugarDeNacimiento;
    fechaDeNacimiento;
    sexo;
    numeroDeContacto;
    correoElectronico;
    contrasena;
    nombreDeUsuario;
    parientes;
    hash;

    agendaVirtual;
    
    constructor(carnetDeIdentidad,nombres,apellidos,lugarDeNacimiento,fechaDeNacimiento,sexo,numeroDeContacto,parientes,correoElectronico,contrasena,nombreDeUsuario){
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
    set_carnetDeIdentidad(carnetDeIdentidad){
        this.carnetDeIdentidad=carnetDeIdentidad;
    }
    get_nombres(){
        return this.nombres;
    }
    set_nombres(nombres){
        this.nombres=nombres;
    }
    get_apellidos(){
        return this.apellidos;
    }
    set_apellidos(apellidos){
        this.apellidos=apellidos;
    }
    get_lugarDeNacimiento(){
        return this.lugarDeNacimiento;
    }
    set_lugarDeNacimiento(lugarDeNacimiento){
        this.lugarDeNacimiento=lugarDeNacimiento;
    }
    get_fechaDeNacimiento(){
        return this.fechaDeNacimiento;
    }
    set_fechaDeNacimiento(fechaDeNacimiento){
        this.fechaDeNacimiento=fechaDeNacimiento;
    }
    get_sexo(){
        return this.sexo;
    }
    set_sexo(sexo){
        this.sexo=sexo;
    }
    get_numeroDeContacto(){
        return this.numeroDeContacto;
    }
    set_numeroDeContacto(numeroDeContacto){
        this.numeroDeContacto=numeroDeContacto;
    }
    get_parientes(){
        return this.parientes;
    }
    set_parientes(parientes){
        this.parientes=parientes;
    }
    get_correoElectronico(){
        return this.correoElectronico;
    }
    set_correoElectronico(correoElectronico){
        this.correoElectronico=correoElectronico;
    }
    get_contrasena(){
        return this.contrasena;
    }
    set_contrasena(contrasena){
        this.contrasena=contrasena;
    }
    get_nombreDeUsuario(){
        return this.nombreDeUsuario;
    }
    set_nombreDeUsuario(nombreDeUsuario){
        this.nombreDeUsuario=nombreDeUsuario;
    }
    get_agendaVirtual(){
        return this.agendaVirtual;
    }
    set_agendaVirtual(agendaVirtual){
        this.agendaVirtual=agendaVirtual;
    }
}
module.exports = {PersonaVO}