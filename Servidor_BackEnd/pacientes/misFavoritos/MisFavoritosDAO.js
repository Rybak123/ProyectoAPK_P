const config = require('config.json');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('_helpers/conexion');
const Paciente=db.Paciente;


module.exports = {
    create_MisFavoritosPaciente,
    listarMisFavoritosPaciente,
    update_Misfavoritos
};

async function listarMisFavoritosPaciente(infoJson) {
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});

    if(infoJson.tipo == "libro"){
        var misFavoritosPaciente=paciente.agendaVirtual.misFavoritos.libros;
    }
    if(infoJson.tipo == "momentos"){
        var misFavoritosPaciente=paciente.agendaVirtual.misFavoritos.momentos;
    }
    if(infoJson.tipo == "musica"){
        var misFavoritosPaciente=paciente.agendaVirtual.misFavoritos.musica;
    }
    if(infoJson.tipo == "peliculas"){
        var misFavoritosPaciente=paciente.agendaVirtual.misFavoritos.peliculas;
    }
    
    return misFavoritosPaciente;
}

async function create_MisFavoritosPaciente(infoJson) {
    console.log("entro al metodo de crear favoritos");
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});

    if(infoJson.tipo == "libro"){
        var libro={
            titulo: infoJson.titulo,
            imagen: infoJson.imagen,
            clasificacion: infoJson.clasificacion,
            descipcion: infoJson.descripcion
        }
        paciente.agendaVirtual.misFavoritos.libros.push(libro);
    }

    if(infoJson.tipo == "momentos"){
        var momentos={
            titulo: infoJson.titulo,
            imagen: infoJson.imagen,
            clasificacion: infoJson.clasificacion,
            descipcion: infoJson.descripcion
        }
        paciente.agendaVirtual.misFavoritos.momentos.push(momentos);
    }

    if(infoJson.tipo == "musica"){
        var musica={
            titulo: infoJson.titulo,
            imagen: infoJson.imagen,
            clasificacion: infoJson.clasificacion,
            descipcion: infoJson.descripcion
        }
        paciente.agendaVirtual.misFavoritos.musica.push(musica);
    }

    if(infoJson.tipo == "peliculas"){
        var peliculas={
            titulo: infoJson.titulo,
            imagen: infoJson.imagen,
            clasificacion: infoJson.clasificacion,
            descipcion: infoJson.descripcion
        }
        paciente.agendaVirtual.misFavoritos.peliculas.push(peliculas);
    }

    await paciente.save();
}

async function update_Misfavoritos(infoJson) {

    if (await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad})) {  

        if(infoJson.tipo == "libro"){

            var libro=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.misFavoritos.libros._id":infoJson.id});

            if(libro.length>0){

                if(infoJson.titulo){

                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.libros._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.libros.$.titulo': infoJson.titulo
                        }
                    })
                } 

                if(infoJson.imagen){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.libros._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.libros.$.imagen': infoJson.imagen
                        }
                    })
                }
                if(infoJson.clasificacion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.libros._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.libros.$.clasificacion': infoJson.clasificacion
                        }
                    })
                }
                if(infoJson.descripcion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.libros._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.libros.$.descripcion': infoJson.descripcion
                        }
                    })
                }
            }
        } 
        
        if(infoJson.tipo == "momentos"){

            var momentos=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.misFavoritos.momentos._id":infoJson.id});

            if(momentos.length>0){

                if(infoJson.titulo){

                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.momentos._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.momentos.$.titulo': infoJson.titulo
                        }
                    })
                } 

                if(infoJson.imagen){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.momentos._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.momentos.$.imagen': infoJson.imagen
                        }
                    })
                }
                if(infoJson.clasificacion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.momentos._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.momentos.$.clasificacion': infoJson.clasificacion
                        }
                    })
                }
                if(infoJson.descripcion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.momentos._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.momentos.$.descripcion': infoJson.descripcion
                        }
                    })
                }
            }
        }

        if(infoJson.tipo == "musica"){

            var musica=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.misFavoritos.musica._id":infoJson.id});

            if(musica.length>0){

                if(infoJson.titulo){

                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.musica._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.musica.$.titulo': infoJson.titulo
                        }
                    })
                } 

                if(infoJson.imagen){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.musica._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.musica.$.imagen': infoJson.imagen
                        }
                    })
                }
                if(infoJson.clasificacion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.musica._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.musica.$.clasificacion': infoJson.clasificacion
                        }
                    })
                }
                if(infoJson.descripcion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.musica._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.musica.$.descripcion': infoJson.descripcion
                        }
                    })
                }
            }
        }

        if(infoJson.tipo == "peliculas"){

            var peliculas=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.misFavoritos.peliculas._id":infoJson.id});

            if(peliculas.length>0){

                if(infoJson.titulo){

                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.peliculas._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.peliculas.$.titulo': infoJson.titulo
                        }
                    })
                } 

                if(infoJson.imagen){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.peliculas._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.peliculas.$.imagen': infoJson.imagen
                        }
                    })
                }
                if(infoJson.clasificacion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.peliculas._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.peliculas.$.clasificacion': infoJson.clasificacion
                        }
                    })
                }
                if(infoJson.descripcion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.peliculas._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.peliculas.$.descripcion': infoJson.descripcion
                        }
                    })
                }
            }
        }
        
        return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    }
    else{
        throw 'No se encontró el paciente';
    }
    
}