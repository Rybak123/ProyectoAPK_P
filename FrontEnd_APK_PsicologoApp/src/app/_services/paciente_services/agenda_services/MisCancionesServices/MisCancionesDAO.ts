import {ConeccionServidor} from '../coneccionFrontEndServices/ConeccionServidor'
import {HttpClient} from "@angular/common/http";
import {CancionModel} from "./CancionModel";
import { ReplaySubject } from 'rxjs';

export class MisCancionesDAO
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
    }
    async listarCanciones(){
        var parametros={"carnetDeIdentidad": this.carnetDeIdentidadPaciente}
        return await this.coneccionServidor.coneccionServidor(parametros,"/paciente/listarCanciones");
    }

    async read_Cancion(id_Cancion:any){
        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "id_Cancion":id_Cancion
        }

        var respuestaHTTP_cancion= await this.coneccionServidor.coneccionServidor(parametros,"/paciente/read_cancion");
        
        var CancionLeida=new CancionModel();
        CancionLeida.set_id(respuestaHTTP_cancion.id);
        CancionLeida.set_titulo(respuestaHTTP_cancion.titulo);
        CancionLeida.set_genero(respuestaHTTP_cancion.genero);
        CancionLeida.set_artista(respuestaHTTP_cancion.artista);
        CancionLeida.set_fecha(respuestaHTTP_cancion.fecha);
        CancionLeida.set_descripcion(respuestaHTTP_cancion.descripcion);
        CancionLeida.set_imagenPortada(respuestaHTTP_cancion.imagenPortada);
        return CancionLeida;
    }

    async create_Cancion(titulo:any,genero:any,artista:any,fecha:any,descripcion:any,imagenPortada:any){
        
        var nuevaCancion=new CancionModel();
        nuevaCancion.set_titulo(titulo);
        nuevaCancion.set_genero(genero);
        nuevaCancion.set_artista(artista);
        nuevaCancion.set_fecha(fecha);
        nuevaCancion.set_descripcion(descripcion);
        nuevaCancion.set_imagenPortada(imagenPortada);

        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "cancion":nuevaCancion};
        var respuesta=await this.coneccionServidor.coneccionServidor(parametros,"/paciente/create_cancion")
        return respuesta;
    }

    async update_Cancion(id:any,titulo:any,artista:any,fecha:any,genero:any,descripcion:any,imagenPortada:any){
        //Similar a create
        var modificarCancion=new CancionModel();
        modificarCancion.set_id(id);
        modificarCancion.set_titulo(titulo);
        modificarCancion.set_genero(genero);
        modificarCancion.set_artista(artista);
        modificarCancion.set_fecha(fecha);
        modificarCancion.set_descripcion(descripcion);
        modificarCancion.set_imagenPortada(imagenPortada);
        console.log(modificarCancion);
        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "cancion":modificarCancion};
        var respuesta=await this.coneccionServidor.coneccionServidor(parametros,"/paciente/update_cancion")
        return respuesta;
            
    }
    async delete_Cancion(id_Cancion:any){
        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "id_cancion":id_Cancion}
        return await this.coneccionServidor.coneccionServidor(parametros,"/paciente/delete_cancion");
    }
    async create_cancionMandarImagen(id:any,formularioImagen:any){
        return await this.coneccionServidor.coneccionServidor(formularioImagen,`/paciente/mandar_imagen_cancion?id=${id}&carnetDeIdentidad=${this.carnetDeIdentidadPaciente}`);
    }

}
