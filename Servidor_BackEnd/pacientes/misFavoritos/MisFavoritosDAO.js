const config = require('config.json');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('_helpers/conexion');
const Paciente=db.Paciente;


module.exports = {
    create_MisFavoritosPaciente,
    listarMisFavoritosPaciente,
    update_Misfavoritos,
    readMisFavoritosPaciente,
    deleteMisFavoritosPaciente
};

async function listarMisFavoritosPaciente(infoJson) {
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});

    console.log(infoJson);
    if(infoJson.tipoFavorito == "lugar"){
        var misFavoritosPaciente=paciente.agendaVirtual.misFavoritos.lugares;
    }
    if(infoJson.tipoFavorito == "momento"){
        var misFavoritosPaciente=paciente.agendaVirtual.misFavoritos.momentos;
    }
    if(infoJson.tipoFavorito == "cancion"){
        var misFavoritosPaciente=paciente.agendaVirtual.misFavoritos.canciones;
    }
    if(infoJson.tipoFavorito == "pelicula"){
        var misFavoritosPaciente=paciente.agendaVirtual.misFavoritos.peliculas;
    }
    
    return misFavoritosPaciente;
}
async function readMisFavoritosPaciente(infoJson) {
 //TODO completar
}

async function create_MisFavoritosPaciente(infoJson) {
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});

    if(infoJson.favorito.tipoDeFavorito == "lugar"){
        var lugar={
            titulo: infoJson.favorito.titulo,
            imagen: infoJson.favorito.imagen,
            clasificacion: infoJson.favorito.clasificacion,
            descripcion: infoJson.favorito.descripcion
        }
        if(!paciente.agendaVirtual.misFavoritos.lugares.push(lugar)){
          throw "Error al ingresar el lugares";
        };
    }else{
      if(infoJson.favorito.tipoDeFavorito == "momento"){
        var momentos={
            titulo: infoJson.favorito.titulo,
            imagen: infoJson.favorito.imagen,
            clasificacion: infoJson.favorito.clasificacion,
            descripcion: infoJson.favorito.descripcion
        }
        if(!paciente.agendaVirtual.misFavoritos.momentos.push(momentos)){
          throw "Error al ingresar el momento";
        };
      }
      else{
        if(infoJson.favorito.tipoDeFavorito == "cancion"){
          var cancion={
              titulo: infoJson.favorito.titulo,
              imagen: infoJson.favorito.imagen,
              clasificacion: infoJson.favorito.clasificacion,
              descripcion: infoJson.favorito.descripcion
          }
          if(!paciente.agendaVirtual.misFavoritos.canciones.push(cancion)){
            throw "Error al ingresar la cancion";
          };
        }
        else{
          if(infoJson.favorito.tipoDeFavorito == "pelicula"){
            var peliculas={
                titulo: infoJson.favorito.titulo,
                imagen: infoJson.favorito.imagen,
                clasificacion: infoJson.favorito.clasificacion,
                descripcion: infoJson.favorito.descripcion
            }
            if(!paciente.agendaVirtual.misFavoritos.peliculas.push(peliculas)){
              throw "Error al ingresar la pelicula";
            };
          }
        }
      }
    }
    return await paciente.save();
}

async function update_Misfavoritos(infoJson) {

    if (await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad})) {  

        if(infoJson.favorito.tipoDeFavorito == "lugar"){

            var libro=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.misFavoritos.lugares._id":infoJson.favorito.id});

            if(libro.length>0){

                if(infoJson.favorito.titulo){

                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.lugares._id': infoJson.favorito.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.lugares.$.titulo': infoJson.favorito.titulo
                        }
                    })
                } 

                if(infoJson.favorito.imagen){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.lugares._id': infoJson.favorito.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.lugares.$.imagen': infoJson.favorito.imagen
                        }
                    })
                }
                if(infoJson.favorito.clasificacion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.lugares._id': infoJson.favorito.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.lugares.$.clasificacion': infoJson.favorito.clasificacion
                        }
                    })
                }
                if(infoJson.favorito.descripcion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.lugares._id': infoJson.favorito.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.lugares.$.descripcion': infoJson.favorito.descripcion
                        }
                    })
                }
            }
        } 
        
        if(infoJson.favorito.tipoDeFavorito == "momento"){

            var momentos=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.misFavoritos.momentos._id":infoJson.favorito.id});

            if(momentos.length>0){

                if(infoJson.favorito.titulo){

                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.momentos._id': infoJson.favorito.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.momentos.$.titulo': infoJson.favorito.titulo
                        }
                    })
                } 

                if(infoJson.favorito.imagen){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.momentos._id': infoJson.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.momentos.$.imagen': infoJson.favorito.imagen
                        }
                    })
                }
                if(infoJson.favorito.clasificacion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.momentos._id': infoJson.favorito.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.momentos.$.clasificacion': infoJson.favorito.clasificacion
                        }
                    })
                }
                if(infoJson.favorito.descripcion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.momentos._id': infoJson.favorito.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.momentos.$.descripcion': infoJson.favorito.descripcion
                        }
                    })
                }
            }
        }

        if(infoJson.favorito.tipoDeFavorito == "cancion"){
         
            var musica=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.misFavoritos.canciones._id":infoJson.favorito.id});

            if(musica.length>0){

                if(infoJson.favorito.titulo){

                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.canciones._id': infoJson.favorito.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.canciones.$.titulo': infoJson.favorito.titulo
                        }
                    })
                } 

                if(infoJson.favorito.imagen){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.canciones._id': infoJson.favorito.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.canciones.$.imagen': infoJson.favorito.imagen
                        }
                    })
                }
                if(infoJson.favorito.clasificacion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.canciones._id': infoJson.favorito.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.canciones.$.clasificacion': infoJson.favorito.clasificacion
                        }
                    })
                }
                if(infoJson.favorito.descripcion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.canciones._id': infoJson.favorito.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.canciones.$.descripcion': infoJson.favorito.descripcion
                        }
                    })
                }
            }
        }

        if(infoJson.favorito.tipoDeFavorito == "pelicula"){

            var peliculas=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.misFavoritos.peliculas._id":infoJson.favorito.id});

            if(peliculas.length>0){

                if(infoJson.favorito.titulo){

                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.peliculas._id': infoJson.favorito.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.peliculas.$.titulo': infoJson.favorito.titulo
                        }
                    })
                } 

                if(infoJson.favorito.imagen){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.peliculas._id': infoJson.favorito.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.peliculas.$.imagen': infoJson.favorito.imagen
                        }
                    })
                }
                if(infoJson.favorito.clasificacion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.peliculas._id': infoJson.favorito.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.peliculas.$.clasificacion': infoJson.favorito.clasificacion
                        }
                    })
                }
                if(infoJson.favorito.descripcion){
                    await Paciente.findOneAndUpdate({
                        carnetDeIdentidad: infoJson.carnetDeIdentidad,
                        'agendaVirtual.misFavoritos.peliculas._id': infoJson.favorito.id
                      }, {
                        '$set': {
                          'agendaVirtual.misFavoritos.peliculas.$.descripcion': infoJson.favorito.descripcion
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
async function deleteMisFavoritosPaciente(infoJson) {

  console.log(infoJson);
  console.log(infoJson);
  if(infoJson.tipoDeFavorito == "lugar"){
console.log("entro lugar");
    var deleteCancion=await Paciente.findOneAndUpdate({
      carnetDeIdentidad: infoJson.carnetDeIdentidad,
      'agendaVirtual.misFavoritos.lugares._id': infoJson.id_Favorito
      }, {
        '$pull': {
          'agendaVirtual.misFavoritos.lugares': {"_id":infoJson.id_Favorito}
        }
    });
    if(deleteCancion){
        return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    }else{
        throw "No se encontró el libro";
    }
}else{
  if(infoJson.tipoDeFavorito == "momento"){
    var deleteCancion=await Paciente.findOneAndUpdate({
      carnetDeIdentidad: infoJson.carnetDeIdentidad,
      'agendaVirtual.misFavoritos.momentos._id': infoJson.id_Favorito
      }, {
        '$pull': {
          'agendaVirtual.misFavoritos.momentos': {"_id":infoJson.id_Favorito}
        }
    });
    console.log(deleteCancion);
    if(deleteCancion){
        return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    }else{
        throw "No se encontró el libro";
    }
  }
  else{
    if(infoJson.tipoDeFavorito == "cancion"){
      var deleteCancion=await Paciente.findOneAndUpdate({
        carnetDeIdentidad: infoJson.carnetDeIdentidad,
        'agendaVirtual.misFavoritos.canciones._id': infoJson.id_Favorito
        }, {
          '$pull': {
            'agendaVirtual.misFavoritos.canciones': {"_id":infoJson.id_Favorito}
          }
      });
      if(deleteCancion){
          return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
      }else{
          throw "No se encontró el libro";
      }
    }
    else{
      if(infoJson.tipoDeFavorito == "pelicula"){
        var deleteCancion=await Paciente.findOneAndUpdate({
          carnetDeIdentidad: infoJson.carnetDeIdentidad,
          'agendaVirtual.misFavoritos.peliculas._id': infoJson.id_Favorito
          }, {
            '$pull': {
              'agendaVirtual.misFavoritos.peliculas': {"_id":infoJson.id_Favorito}
            }
        });
        if(deleteCancion){
            return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
        }else{
            throw "No se encontró el libro";
        }
      }
    }
  }
}
return await paciente.save();

  
}