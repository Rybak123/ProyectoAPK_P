//Configuración de la base de datos
const config = require('config.json');
//Libreria para acceder a la base de datos
const mongoose = require('mongoose');
//Opciones para la coneccion
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

mongoose.connect("mongodb+srv://ProyectoAPK:cybercenter1@cluster0.p7ywu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", connectionOptions);
mongoose.Promise = global.Promise;


module.exports = {
    Paciente: require('../usuarios/paciente/model/Paciente_model'),
    Psicologo: require('../usuarios/psicologo/Model/PsicologoModel'),
    Administrador: require('../usuarios/administrador/Model/AdministradorModel'),
    PruebaGeneral: require('../pruebasDeDesarrolloCognitivo/pruebasGenerales/Model/PruebaGeneralModel')
};