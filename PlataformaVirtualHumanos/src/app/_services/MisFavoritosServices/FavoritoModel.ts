export class FavoritoModel
{
    id:any;
    titulo:any;
    imagen:any;
    clasificacion:any;
    descripcion:any;
    tipoDeFavorito:any;
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
    set_imagen(imagen:any){
        this.imagen=imagen;
    }
    get_imagen(){
        return this.imagen
    }
    
    set_clasificacion(clasificacion:any){
        this.clasificacion=clasificacion;
    }
    get_clasificacion(){
        return this.clasificacion
    }
    set_descripcion(descripcion:any){
        this.descripcion=descripcion;
    }
    get_descripcion(){
        return this.descripcion
    }
    set_tipoDeFavorito(tipoDeFavorito:any){
        this.tipoDeFavorito=tipoDeFavorito;
    }
    get_tipoDeFavorito(){
        return this.tipoDeFavorito
    }
}