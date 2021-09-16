const express = require('express');
const router = express.Router();
const PacienteDao = require('./PacienteDao');

// rutas
router.post('/registrarPaciente', registrar);
router.get('/listarPacientes', listarPacientes);
router.post('/obtenerPaciente', obtenerPaciente);
router.post('/actualizarHorasDeEstudio', actualizarHorasDeEstudio);
router.post('/actualizarControlDeSueno', actualizarControlDeSueno);
router.post('/actualizarControlDeEnergia', actualizarControlDeEnergia);
router.post('/actualizarControlDeAnimo', actualizarControlDeAnimo);
router.post('/actualizarControlDeConsumoDeAgua', actualizarcontrolDeConsumoDeAgua);
router.post('/autenticacion', autenticacion);
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
function autenticacion(req, res, next) {
    PacienteDao.autenticacion(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'nombre de usuario o contraseña incorrectos' }))
        .catch(err => next(err));
}
