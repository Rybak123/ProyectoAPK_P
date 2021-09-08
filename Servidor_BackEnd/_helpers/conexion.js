//Configuración de la base de datos
const config = require('config.json');
//Libreria para acceder a la base de datos
const mongoose = require('mongoose');
//Opciones para la coneccion
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    Paciente: require('../pacientes/PacienteSchemaDB'),
    ControlDeEstudio: require('../users/user.model')
};