const express = require('express'); //nos sirve para
const router = express.Router(); //nos sirve para diseñar rutas
const PruebaGeneralServices= require('../Services/PruebaGeneralServices')
//rutas

router.post('/leerPruebaGeneral', leerPruebaGeneral);
router.get('/listarPruebaGeneral', listarPruebaGeneral);

module.exports = router;
//el async es una promesa_hace uso del then

function leerPruebaGeneral(req, res, next) {
    PruebaGeneralServices.leerPruebaGeneral(req.body)
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
function listarPruebaGeneral(req, res, next) {
    PruebaGeneralServices.listarPruebaGeneral()
        .then((resultado) => res.json({resultado}))
        .catch(err => next(err));
}
