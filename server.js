// Dependencias
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
//var mongoose = require("mongoose");
var path = require("path");
var cors = require("cors");
var config = require("./config");
var sequelize = require("sequelize");
var app = express();
var conexion = require('./config');

// Configuraciones
var port = 3000;
// conexion.connect(config.database);
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Public Folder
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.use("/api", require("./src/presenter/ejemploRouter"));

// Iniciar Servidor
app.listen(port)
console.log("La magia ocurre en el puerto http://localhost:" + port);

