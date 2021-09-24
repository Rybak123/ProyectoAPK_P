const express = require('express');
const router = express.Router();
const PacienteDao = require('./PacienteDao');
const PacienteLibrosDao = require('./misLibros/MisLibrosDAO');
const PacienteCancionesDao = require('./misCanciones/MisCancionesDAO');
const PacienteMetasDao = require('./misMetas/MisMetasDAO');
const PacienteMetasPersonalesDao = require('./MisMetasPersonales/misMetasPersonales');
const PacienteMisFavoritosDao = require('./misFavoritos/MisFavoritosDAO');
// rutas
router.post('/registrarPaciente', registrar);
router.post('/listarPacientes', listarPacientes);
router.post('/obtenerPaciente', obtenerPaciente);
router.post('/actualizarHorasDeEstudio', actualizarHorasDeEstudio);
router.post('/actualizarControlDeSueno', actualizarControlDeSueno);
router.post('/actualizarControlDeEnergia', actualizarControlDeEnergia);
router.post('/actualizarControlDeAnimo', actualizarControlDeAnimo);
router.post('/actualizarControlDeConsumoDeAgua', actualizarcontrolDeConsumoDeAgua);
router.post('/autenticacion', autenticacion);

//libros
router.post('/listarLibros', listarLibrosPacientes);
router.post('/create_libro', crearLibro);
router.post('/read_libro', ReadLibro);
router.post('/update_libro', actualizarLibro);
router.post('/delete_libro',deleteLibro)
//libros
router.post('/listarCanciones', listarCancionesPacientes);
router.post('/create_cancion', createCancion);
router.post('/read_cancion', ReadCancion);
router.post('/update_cancion', updateCancion);
router.post('/delete_cancion',deleteCancion)
//Metas
router.post('/listarMetas', listarMetasPacientes);
router.post('/create_meta', createMetas);
router.post('/read_meta', ReadMetas);
router.post('/update_meta', updateMetas);
router.post('/delete_meta',deleteMetas)
//Metas personales
router.post('/listarMetasPersonales', listarMetasPersonalesPacientes);
router.post('/create_metas_personales', createMetasPersonales);
//Favoritos
router.post('/listarFavoritos',listarMisFavoritos);
router.post('/create_favorito', createFavoritos);
router.post('/read_favorito', ReadFavoritos);
router.post('/update_favorito', updateFavoritos);
router.post('/delete_favorito',deleteFavoritos)

module.exports = router;


function registrar(req, res, next) {
    PacienteDao.create_Paciente(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function listarPacientes(req, res, next) {
    PacienteDao.paciente_listarTodos()
        .then(users => res.json(users))
        .catch(err => next(err));
}
function obtenerPaciente(req, res, next) {
    PacienteDao.read_Paciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(400))
        .catch(err => {next(err);console.log(res);});
}
function autenticacion(req, res, next) {
    PacienteDao.autenticacion(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'nombre de usuario o contraseña incorrectos' }))
        .catch(err => next(err));
}
function actualizarHorasDeEstudio(req, res, next) {
    PacienteDao.actualizarHoraDeEstudio(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}
function actualizarControlDeSueno(req, res, next) {
    PacienteDao.actualizarControlDeSueno(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}
function actualizarControlDeAnimo(req, res, next) {
    PacienteDao.actualizarControlDeAnimo(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}
function actualizarControlDeEnergia(req, res, next) {
    PacienteDao.actualizarControlDeEnergia(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}
function actualizarcontrolDeConsumoDeAgua(req, res, next) {
    PacienteDao.actualizarcontrolDeConsumoDeAgua(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}
////////////// libros //////////////
function listarLibrosPacientes(req, res, next) {
    PacienteLibrosDao.listarLibrosPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function crearLibro(req,res, next){
    PacienteLibrosDao.create_LibroPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function ReadLibro(req,res, next){
    PacienteLibrosDao.Read_LibroPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function actualizarLibro(req, res, next) {
    PacienteLibrosDao.update_LibroPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function deleteLibro(req, res, next) {
    PacienteLibrosDao.delete_LibroPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}
////////////// Canciones //////////////
function listarCancionesPacientes(req, res, next) {
    PacienteCancionesDao.listarCancionesPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function createCancion(req,res, next){
    PacienteCancionesDao.create_CancionPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function ReadCancion(req,res, next){
    PacienteCancionesDao.Read_CancionPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function updateCancion(req, res, next) {
    PacienteCancionesDao.update_CancionPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function deleteCancion(req, res, next) {
    PacienteCancionesDao.delete_CancionPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}
////////////// Metas //////////////
function listarMetasPacientes(req, res, next) {
    PacienteMetasDao.listarMetasPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function createMetas(req,res, next){
    PacienteMetasDao.create_MetasPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function ReadMetas(req,res, next){
    PacienteMetasDao.Read_MetaPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function updateMetas(req, res, next) {
    PacienteMetasDao.update_MetaPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function deleteMetas(req, res, next) {
    PacienteMetasDao.delete_MetaPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}
////////////// Metas personales //////////////
function listarMetasPersonalesPacientes(req, res, next) {
    PacienteMetasPersonalesDao.listarMetasPersonalesPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function createMetasPersonales(req,res, next){
    PacienteMetasPersonalesDao.create_MetasPersonalPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}
////////////// Favoritos //////////////
function listarMisFavoritos(req, res, next) {
    PacienteMisFavoritosDao.listarMisFavoritosPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function createFavoritos(req,res, next){
    PacienteMisFavoritosDao.create_MisFavoritosPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function ReadFavoritos(req,res, next){
    PacienteMisFavoritosDao.ReadFavoritos(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function updateFavoritos(req, res, next) {
    PacienteMisFavoritosDao.update_Misfavoritos(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}

function deleteFavoritos(req, res, next) {
    PacienteMisFavoritosDao.deleteMisFavoritosPaciente(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(500))
        .catch(err => next(err));
}