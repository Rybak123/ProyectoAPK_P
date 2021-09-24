const config = require('config.json');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('_helpers/conexion');
const Paciente=db.Paciente;


module.exports = {
    listarCancionesPaciente,
    create_CancionPaciente,
    Read_CancionPaciente,
    update_CancionPaciente,
    delete_CancionPaciente
};
// Operaciones CRUD+Listar

async function listarCancionesPaciente(infoJson) {
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    var cancionesPaciente=paciente.agendaVirtual.misCanciones;
    var canciones={"canciones":cancionesPaciente}
    return canciones;
}
async function create_CancionPaciente(infoJson) {
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    var cancion={
        titulo: infoJson.cancion.titulo,
        genero:infoJson.cancion.genero,
        artista: infoJson.cancion.artista,
        fecha:infoJson.cancion.fecha,
        descripcion: infoJson.cancion.descripcion,
        imagenPortada: infoJson.cancion.imagenPortada
    }
    paciente.agendaVirtual.misCanciones.push(cancion);
    return await paciente.save();
}
async function Read_CancionPaciente(infoJson) {
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    var cancionPaciente= paciente.agendaVirtual.misCanciones;
    var cancion = cancionPaciente.find(element => element._id == infoJson.cancion.id);
    if(cancion){
        return cancion;
    }
    else{
        throw "Cancion no encontrada"
    }
}
async function update_CancionPaciente(infoJson) {

    if (await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad})) {   
        var paciente=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.misCanciones._id":infoJson.cancion.id});   
        if(paciente){
            if(infoJson.cancion.titulo){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misCanciones._id': infoJson.cancion.id
                  }, {
                    '$set': {
                      'agendaVirtual.misCanciones.$.titulo': infoJson.cancion.titulo
                    }
                })
            } 
            else
            {
                throw "Error al cambiar el titulo"
            }
            if(infoJson.cancion.artista){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misCanciones._id': infoJson.cancion.id
                  }, {
                    '$set': {
                      'agendaVirtual.misCanciones.$.artista': infoJson.cancion.artista
                    }
                })
            }
            else
            {
                throw "Error al cambiar el autor"
            }
            if(infoJson.cancion.fecha){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misCanciones._id': infoJson.cancion.id
                  }, {
                    '$set': {
                      'agendaVirtual.misCanciones.$.fecha': infoJson.cancion.fecha
                    }
                })
            }
            else
            {
                throw "Error al cambiar la fecha"
            }
            if(infoJson.cancion.genero){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misCanciones._id': infoJson.cancion.id
                  }, {
                    '$set': {
                      'agendaVirtual.misCanciones.$.genero': infoJson.cancion.genero
                    }
                })
            }
            else
            {
                throw "Error al cambiar el genero"
            }
            if(infoJson.cancion.descripcion){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misCanciones._id': infoJson.cancion.id
                  }, {
                    '$set': {
                      'agendaVirtual.misCanciones.$.descripcion': infoJson.cancion.descripcion
                    }
                })
            }
            else
            {
                throw "Error al cambiar la descripcion"
            }
            if(infoJson.cancion.imagenPortada){
                
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misCanciones._id': infoJson.cancion.id
                  }, {
                    '$set': {
                      'agendaVirtual.misCanciones.$.imagenPortada': infoJson.cancion.imagenPortada
                    }
                });
            }
            else
            {
                throw "Error al cambiar la portada"
            }
        }
        return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    }
    else{
        throw 'No se encontró el paciente';
    }
    
}
async function delete_CancionPaciente(infoJson) {
    var deleteCancion=await Paciente.findOneAndUpdate({
        carnetDeIdentidad: infoJson.carnetDeIdentidad,
        'agendaVirtual.misCanciones._id': infoJson.id_cancion
      }, {
        '$pull': {
          'agendaVirtual.misCanciones': {"_id":infoJson.id_cancion}
        }
    });
    if(deleteCancion){
        return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    }else{
        throw "No se encontró la canción";
    }
}