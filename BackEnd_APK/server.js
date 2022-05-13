require('rootpath')();
const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const formidable = require('express-formidable');

const io = require('socket.io')(http, {
  cors: {
    origin:"*",
    methods: ["GET", "POST"]
  }
});

require('./mensajesNotificaciones.js')(io);


app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use(cors());
app.use(
  cors({
      origin:'*'
}));


app.use('/eventosImagenes', express.static('EventosImagenes/EventosAdministradores'));//ruta para las imagenes


app.use('/datosPacientes', express.static('datos/datos_pacientes'));//ruta para las imagenes

app.use('/excelUsuario', express.static('excelInfoUsuario'));//ruta El Archivoexcel
// api routes

app.use('/paciente', require('./usuarios/paciente/controller/PacienteController'));
//ruta a para los psicologos

app.use('/psicologo', require('./usuarios/psicologo/Controller/PsicologoController'));
//requare es para alamacenar archivos dentro de la misma   // global error handler
//ruta para administrador

app.use('/administrador', require('./usuarios/administrador/Controller/AdministradorController'));
//app.use('/administrador', require('./administrador/Controller/AdministradorController'));

app.use('/pruebasGenerales', require('./pruebasDeDesarrolloCognitivo/pruebasGenerales/Controller/PruebaGeneralController'));

app.use('/eventos', require('./eventos/controller/EventosController'));

app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

http.listen(port, function () {
    console.log('Server listening on port ' + port);
});



