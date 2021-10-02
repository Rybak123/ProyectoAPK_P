const express = require('express'); //nos sirve para
const router = express.Router(); //nos sirve para diseñar rutas
const psicologoServices= require('../Services/PsicologoServices')
//rutas
router.post('/registrarPsicologo', registrarPsicologo);
router.post('/leerPsicologo', leerPsicologo);
router.post('/listarPsicologo', listarPsicologo);
router.post('/modificarPsicologo', modificarPsicologo);
router.post('/deshabilitarPsicologo', deshabilitarPsicologo);
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