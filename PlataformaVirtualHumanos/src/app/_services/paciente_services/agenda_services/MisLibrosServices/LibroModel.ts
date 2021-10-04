export class LibroModel
{
    id:any;
    titulo:any;
    autor:any;
    editorial:any;
    cantidadPaginas:any;
    fecha:any;
    genero:any;
    descripcion:any;
    imagenPortada:any;
    constructor(){
    }
    set_id(id:any){
        this.id=id;
    }
    get_id(){
        return this.id
    }
    set_titulo(titulo:any){
        this.titulo=titulo;
    }
    get_titulo(){
        return this.titulo
    }
    set_autor(autor:any){
        this.autor=autor;
    }
    get_autor(){
        return this.autor
    }
    set_editorial(editorial:any){
        this.editorial=editorial;
    }
    get_editorial(){
        return this.editorial
    }
    set_cantidadPaginas(cantidadPaginas:any){
        this.cantidadPaginas=cantidadPaginas;
    }
    get_cantidadPaginas(){
        return this.cantidadPaginas
    }
    set_fecha(fecha:any){
        this.fecha=fecha;
    }
    get_fecha(){
        return this.fecha
    }
    set_genero(genero:any){
        this.genero=genero;
    }
    get_genero(){
        return this.genero
    }
    set_descripcion(descripcion:any){
        this.descripcion=descripcion;
    }
    get_descripcion(){
        return this.descripcion
    }
    set_imagenPortada(imagenPortada:any){
        this.imagenPortada=imagenPortada;
    }
    get_imagenPortada(){
        return this.imagenPortada
    }
}