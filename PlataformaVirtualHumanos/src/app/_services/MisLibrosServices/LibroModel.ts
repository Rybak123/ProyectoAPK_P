export class LibroModel
{
    id:any;
    titulo:any;
    fecha:any;
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
    set_fecha(fecha:any){
        this.fecha=fecha;
    }
    get_fecha(){
        return this.fecha
    }
}