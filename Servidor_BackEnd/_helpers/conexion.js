//Configuración de la base de datos
const config = require('config.json');
//Libreria para acceder a la base de datos
const mongoose = require('mongoose');
//Opciones para la coneccion
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    Paciente: require('../usuarios/paciente/model/Paciente_model'),
    Psicologo: require('../usuarios/psicologo/Model/PsicologoModel'),
    Administrador: require('../usuarios/administrador/Model/AdministradorModel')
};