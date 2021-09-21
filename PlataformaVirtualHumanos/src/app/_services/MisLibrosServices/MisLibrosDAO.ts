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
        return await this.coneccionServidor.coneccionServidor(parametros,"/pacientes/listarLibros");
    }


    async read_Libro(id_Libro:any){
        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "id_Libro":id_Libro
        }

        var respuestaHTTP_libro= await this.coneccionServidor.coneccionServidor(parametros,"/pacientes/read_libro");
        
        var LibroLeido=new LibroModel();
        LibroLeido.set_id(respuestaHTTP_libro.id);
        LibroLeido.set_titulo(respuestaHTTP_libro.titulo);
        LibroLeido.set_autor(respuestaHTTP_libro.autor);
        LibroLeido.set_editorial(respuestaHTTP_libro.editorial);
        LibroLeido.set_cantidadPaginas(respuestaHTTP_libro.cantidadPaginas);
        LibroLeido.set_fecha(respuestaHTTP_libro.fecha);
        LibroLeido.set_genero(respuestaHTTP_libro.genero);
        LibroLeido.set_descripcion(respuestaHTTP_libro.descripcion);
        LibroLeido.set_imagenPortada(respuestaHTTP_libro.imagenPortada);
        return LibroLeido;
    }
    async create_Libro(titulo:any,autor:any,editorial:any,cantidadPaginas:any,fecha:any,genero:any,descripcion:any,imagenPortada:any){
        
        var nuevoLibro=new LibroModel();
        nuevoLibro.set_titulo(titulo);
        nuevoLibro.set_autor(autor);
        nuevoLibro.set_editorial(editorial);
        nuevoLibro.set_cantidadPaginas(cantidadPaginas);
        nuevoLibro.set_fecha(fecha);
        nuevoLibro.set_genero(genero);
        nuevoLibro.set_descripcion(descripcion);
        nuevoLibro.set_imagenPortada(imagenPortada);

        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "libro":nuevoLibro};
        var respuesta=await this.coneccionServidor.coneccionServidor(parametros,"/pacientes/create_libro")
        return respuesta;
    }
    async update_Libro(titulo:any,autor:any,editorial:any,cantidadPaginas:any,fecha:any,genero:any,descripcion:any,imagenPortada:any){
        //Similar a create
        var modificarLibro=new LibroModel();
        modificarLibro.set_titulo(titulo);
        modificarLibro.set_autor(autor);
        modificarLibro.set_editorial(editorial);
        modificarLibro.set_cantidadPaginas(cantidadPaginas);
        modificarLibro.set_fecha(fecha);
        modificarLibro.set_genero(genero);
        modificarLibro.set_descripcion(descripcion);
        modificarLibro.set_imagenPortada(imagenPortada);

        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "libro":modificarLibro};
        var respuesta=await this.coneccionServidor.coneccionServidor(parametros,"/pacientes/update_libro")
        return respuesta;
            
    }
    async delete_Libro(id:any){
        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "id":id}
        return await this.coneccionServidor.coneccionServidor(parametros,"/pacientes/delete_libro");
    }

}