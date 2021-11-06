const express = require('express');
const router = express.Router();
const eventosServices = require('../Services/EventosServices');
//Rutas
router.post('/registrarEvento',registrarEvento);
router.post('/leerEvento',leerEvento);
router.get('/listarEvento',listarEvento);
router.post('/modificarEvento',modificarEvento);

module.exports = router;

function registrarEvento(req, res, next) {
    eventosServices.registrarEvento(req, res, next)

}
function leerEvento(req, res, next) {
    eventosServices.leerEvento(req.body)
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function listarEvento(req, res, next) {
    eventosServices.listarEvento()
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function modificarEvento(req, res, next) {
    eventosServices.modificarEvento(req.body)
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}