const express = require('express'); //nos sirve para
const router = express.Router(); //nos sirve para diseñar rutas
const psicologoServices= require('../Services/PsicologoServices')
//rutas
router.post('/registrarPsicologo', registrarPsicologo);
router.post('/leerPsicologo', leerPsicologo);
router.get('/listarPsicologo', listarPsicologo);
router.post('/modificarPsicologo', modificarPsicologo);
router.post('/deshabilitarPsicologo', deshabilitarPsicologo);
router.post('/habilitarPsicologo', habilitarPsicologo);
router.post('/autenticarPsicologo', autenticarPsicologo);
router.post('/recuperarContrasena', recuperarContrasena);
router.post('/enlaceCambiarContrasena', cambiarContrasena);
module.exports = router;
//el async es una promesa_hace uso del then
function registrarPsicologo(req, res, next) {
    psicologoServices.registarPsicologo(req.body)
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function leerPsicologo(req, res, next) {
    psicologoServices.leerPsicologo(req.body)
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function listarPsicologo(req, res, next) {
    psicologoServices.listarPsicologo()
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function modificarPsicologo(req, res, next) {
    psicologoServices.modificarPsicologo(req.body)
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function deshabilitarPsicologo(req, res, next) {
    psicologoServices.deshabilitarPsicologo(req.body)
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function habilitarPsicologo(req, res, next) {
    psicologoServices.habilitarPsicologo(req.body)
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}

function autenticarPsicologo(req, res, next) {
    psicologoServices.autenticacionPsicologo(req.body)
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function cambiarContrasena(req, res, next) {
    psicologoServices.cambiarContrasena(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(400))
        .catch(err => next(err));
}
async function recuperarContrasena(req, res, next) {
    psicologoServices.recuperarContrasena(req.body)
    .then(user => user ? res.json(user) : res.sendStatus(500))
    .catch(err => next(err));
}