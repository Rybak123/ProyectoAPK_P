export class Paciente {
  private carnetDeIdentidad: any;
  private contrasena: any;
  private nombres: any;
  private apellidos: any;
  private fechaDeNacimiento: any;
  private sexo: any;
  private numeroTelefonico: any;
  private correoElectronico: any;
  private caducidadLicencia: any;
  private token: any;

	constructor($nombres: any, $apellidos: any, $lugarDeNacimiento: any, $fechaDeNacimiento: any, $sexo: any, $numeroDeContacto: any, $correoElectronico: any, $contrasena: any, $nombreDeUsuario: any, $parientes: any, $hash: any, $agendaVirtual: any, $token: String ) {
		this.nombres = $nombres;
		this.apellidos = $apellidos;
		this.lugarDeNacimiento = $lugarDeNacimiento;
		this.fechaDeNacimiento = $fechaDeNacimiento;
		this.sexo = $sexo;
		this.numeroDeContacto = $numeroDeContacto;
		this.correoElectronico = $correoElectronico;
		this.contrasena = $contrasena;
		this.nombreDeUsuario = $nombreDeUsuario;
		this.parientes = $parientes;
		this.hash = $hash;
		this.agendaVirtual = $agendaVirtual;
		this.token = $token;
	}

    /**
     * Getter $carnetDeIdentidad
     * @return {any}
     */
	public get $carnetDeIdentidad(): any {
		return this.carnetDeIdentidad;
	}

    /**
     * Setter $carnetDeIdentidad
     * @param {any} value
     */
	public set $carnetDeIdentidad(value: any) {
		this.carnetDeIdentidad = value;
	}
 

}
