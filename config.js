/**
 * Created by rcard on 29/08/2016.
 */

//    "database": "mongodb://localhost:27017/nombreDeTuBaseDeDatos"
var Sequelize = require('sequelize');
var conexion = new Sequelize('mysql://root:@localhost:3306/regapp01');
module.exports = conexion;
