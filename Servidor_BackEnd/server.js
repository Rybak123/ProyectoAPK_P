require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const formidable = require('express-formidable');

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(cors());

// use JWT auth to secure the api
app.use(jwt());
app.use('/datosPacientes', express.static('datos/datos_pacientes'));//ruta para las imagenes
// api routes
app.use('/paciente', require('./usuarios/paciente/controller/PacienteController'));
//ruta a para los psicologos
app.use('/psicologo', require('./usuarios/psicologo/Controller/PsicologoController'));
//requare es para alamacenar archivos dentro de la misma   // global error handler
//ruta para administrador
app.use('/administrador', require('./usuarios/administrador/Controller/AdministradorController'));
//app.use('/administrador', require('./administrador/Controller/AdministradorController'));
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
