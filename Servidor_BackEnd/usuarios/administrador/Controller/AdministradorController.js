const express = require('express');
const router = express.Router();
const administradorServices = require('../Services/AdministradorServices');
//Rutas
router.post('/registrarAdministrador',registrarAdministrador);
router.post('/leerAdministrador',leerAdministrador);
router.post('/listarAdministrador',listarAdministrador);
router.post('/modificarAdministrador',modificarAdministrador);
router.post('/desabilitarAdministrador',desabilitarAdministrador);

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