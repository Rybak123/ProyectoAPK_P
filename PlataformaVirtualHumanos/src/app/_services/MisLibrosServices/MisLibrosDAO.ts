import {ConeccionServidor} from '../coneccionFrontEndServices/ConeccionServidor'
import {HttpClient} from "@angular/common/http";
import {LibroModel} from "./LibroModel";
import { ReplaySubject } from 'rxjs';
export class MisLibrosDAO
{
    coneccionServidor:any;
    carnetDeIdentidadPaciente:any;
    constructor(private http:HttpClient) {
        this.coneccionServidor=new ConeccionServidor(this.http)

        //ObtenerCarnetDeIdentiudad
        var pacienteInfo=localStorage.getItem('currentUser');
        if(pacienteInfo==null){
            pacienteInfo="null";
            throw console.error("Paciente no encontrado");
        }
        var usuario:any =JSON.parse(pacienteInfo);
        this.carnetDeIdentidadPaciente=usuario.carnetDeIdentidad;
        ////////////////////////////
    }

    //CRUD + Listar

    async listarLibros(){
        var parametros={"carnetDeIdentidad": this.carnetDeIdentidadPaciente}
        return await this.coneccionServidor.coneccionServidor(parametros,"/paciente/listarLibros");
    }


    async read_Libro(id_Libro:any){
        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "id_Libro":id_Libro
        }

        var respuestaHTTP_libro= await this.coneccionServidor.coneccionServidor(parametros,"/paciente/read_libro");
        
        var LibroLeido=new LibroModel();
        LibroLeido.set_id(respuestaHTTP_libro.id);
        LibroLeido.set_titulo(respuestaHTTP_libro.titulo);
        LibroLeido.set_fecha(respuestaHTTP_libro.fecha);
        return LibroLeido;
    }
    async create_Libro(titulo:any,genero:any,etc){
        
        var nuevoLibro=new LibroModel();
        nuevoLibro.set_titulo(titulo);

        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "libro":nuevoLibro};
        var respuesta=await this.coneccionServidor.coneccionServidor(parametros,"/paciente/create_libro")
        return respuesta;
    }
    async update_Libro(id,titulo,genero,etc){
        //Similar a create
            
    }
    async delete_Libro(id:any){
        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "id":id}
        return await this.coneccionServidor.coneccionServidor(parametros,"/paciente/delete_libro");
    }

}