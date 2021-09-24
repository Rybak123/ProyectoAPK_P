const config = require('config.json');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('_helpers/conexion');
const Paciente=db.Paciente;


module.exports = {
    listarLibrosPaciente,
    create_LibroPaciente,
    Read_LibroPaciente,
    update_LibroPaciente,
    delete_LibroPaciente
};
// Operaciones CRUD+Listar

async function listarLibrosPaciente(infoJson) {
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    var librosPaciente=paciente.agendaVirtual.misLibros;
    var libros={"libros":librosPaciente}
    return libros;
}
async function create_LibroPaciente(infoJson) {
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    var libro={
        titulo: infoJson.libro.titulo,
        autor: infoJson.libro.autor,
        editorial: infoJson.libro.editorial,
        cantidadPaginas: infoJson.libro.cantidadPaginas,
        fecha:infoJson.libro.fecha,
        genero:infoJson.libro.genero,
        descripcion: infoJson.libro.descripcion,
        imagenPortada: infoJson.libro.imagenPortada
    }
    paciente.agendaVirtual.misLibros.push(libro);
    return await paciente.save();
}
async function Read_LibroPaciente(infoJson) {
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    var librosPaciente= paciente.agendaVirtual.misLibros;
    var libros = librosPaciente.find(element => element._id == infoJson.libro.id);
    if(libros){
        return libros;
    }
    else{
        throw "Libro no encontrado"
    }
}
async function update_LibroPaciente(infoJson) {

    if (await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad})) {   
        var libro=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.misLibros._id":infoJson.libro.id});   
        if(libro.length){
            if(infoJson.libro.titulo){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misLibros._id': infoJson.libro.id
                  }, {
                    '$set': {
                      'agendaVirtual.misLibros.$.titulo': infoJson.libro.titulo
                    }
                })
            } 
            else
            {
                throw "Error al cambiar el titulo"
            }
            if(infoJson.libro.autor){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misLibros._id': infoJson.libro.id
                  }, {
                    '$set': {
                      'agendaVirtual.misLibros.$.autor': infoJson.libro.autor
                    }
                })
            }
            else
            {
                throw "Error al cambiar el autor"
            }
            if(infoJson.libro.editorial){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misLibros._id': infoJson.libro.id
                  }, {
                    '$set': {
                      'agendaVirtual.misLibros.$.editorial': infoJson.libro.editorial
                    }
                })
            }
            else
            {
                throw "Error al cambiar la editorial"
            }
            if(infoJson.libro.cantidadPaginas){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misLibros._id': infoJson.libro.id
                  }, {
                    '$set': {
                      'agendaVirtual.misLibros.$.cantidadPaginas': infoJson.libro.cantidadPaginas
                    }
                })
            }
            else
            {
                throw "Error al cambiar la cantidad de paginas"
            }
            if(infoJson.libro.fecha){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misLibros._id': infoJson.libro.id
                  }, {
                    '$set': {
                      'agendaVirtual.misLibros.$.fecha': infoJson.libro.fecha
                    }
                })
            }
            else
            {
                throw "Error al cambiar la fecha"
            }
            if(infoJson.libro.genero){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misLibros._id': infoJson.libro.id
                  }, {
                    '$set': {
                      'agendaVirtual.misLibros.$.genero': infoJson.libro.genero
                    }
                })
            }
            else
            {
                throw "Error al cambiar el genero"
            }
            if(infoJson.libro.descripcion){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misLibros._id': infoJson.libro.id
                  }, {
                    '$set': {
                      'agendaVirtual.misLibros.$.descripcion': infoJson.libro.descripcion
                    }
                })
            }
            else
            {
                throw "Error al cambiar la descripcion"
            }
            if(infoJson.libro.imagenPortada){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misLibros._id': infoJson.libro.id
                  }, {
                    '$set': {
                      'agendaVirtual.misLibros.$.imagenPortada': infoJson.libro.imagenPortada
                    }
                })
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
async function delete_LibroPaciente(infoJson) {
    var deleteCancion=await Paciente.findOneAndUpdate({
        carnetDeIdentidad: infoJson.carnetDeIdentidad,
        'agendaVirtual.misLibros._id': infoJson.id_libro
      }, {
        '$pull': {
          'agendaVirtual.misLibros': {"_id":infoJson.id_libro}
        }
    });
    if(deleteCancion){
        return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    }else{
        throw "No se encontró el libro";
    }
}