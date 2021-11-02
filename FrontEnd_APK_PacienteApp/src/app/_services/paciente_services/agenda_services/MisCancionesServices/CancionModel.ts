export class CancionModel
{
    id:any;
    titulo:any;
    genero:any;
    artista:any;
    fecha:any;
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
    set_genero(genero:any){
        this.genero=genero;
    }
    get_genero(){
        return this.genero
    }
    set_artista(artista:any){
        this.artista=artista;
    }
    get_artista(){
        return this.artista
    }
    set_fecha(fecha:any){
        this.fecha=fecha;
    }
    get_fecha(){
        return this.fecha
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