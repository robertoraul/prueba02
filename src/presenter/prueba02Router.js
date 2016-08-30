/**
 * Created by rcard on 29/08/2016.
 */
// Dependencias
var express = require('express');

var router = express.Router();

// Casos de uso
var casoUso = require("../aplication/ejemplo");

// Crear Ruta
router.get("/ejemplo", function(rec, res){
    res.send("Hola Mundo!");
});

// Exportar archivo
module.exports = router;
