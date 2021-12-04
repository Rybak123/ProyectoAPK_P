const express = require('express');
const router = express.Router();
const administradorServices = require('../Services/AdministradorServices');
//Rutas
router.post('/registrarAdministrador',registrarAdministrador);
router.post('/leerAdministrador',leerAdministrador);
router.get('/listarAdministrador',listarAdministrador);
router.post('/modificarAdministrador',modificarAdministrador);
router.post('/desabilitarAdministrador',desabilitarAdministrador);
router.post('/autenticarAdministrador',autenticarAdministrador);
router.post('/habilitarAdministrador',habilitarAdministrador);
router.post('/recuperarContrasena', recuperarContrasena);
router.post('/enlaceCambiarContrasena', cambiarContrasena);
module.exports = router;







function registrarAdministrador(req, res, next) {
    administradorServices.registrarAdministrador(req.body)
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function leerAdministrador(req, res, next) {
    administradorServices.leerAdministrador(req.body)
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function listarAdministrador(req, res, next) {
    administradorServices.listarAdministrador()
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function modificarAdministrador(req, res, next) {
    administradorServices.modificarAdministrador(req.body)
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function desabilitarAdministrador(req, res, next) {
    administradorServices.desabilitarAdministrador(req.body)
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function autenticarAdministrador(req, res, next) {
    administradorServices.autenticacionAdministrador(req.body)
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function habilitarAdministrador(req, res, next) {
    administradorServices.habilitarAdministrador(req.body)
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function cambiarContrasena(req, res, next) {
    administradorServices.cambiarContrasena(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(400))
        .catch(err => next(err));
}
async function recuperarContrasena(req, res, next) {
    administradorServices.recuperarContrasena(req.body)
    .then(user => user ? res.json(user) : res.sendStatus(500))
    .catch(err => next(err));
}