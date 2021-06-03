'use strict';
var dbConn = require('./../../config/db.config');
//Employee object create
var Proyecto = function(proyecto){
    this.id = proyecto.id ? proyecto.id : null;
    this.nombre = proyecto.nombre;
    this.estado = proyecto.estado;
    this.imagen = proyecto.imagen;
    
    /*
    this.created_at     = new Date();
    this.updated_at     = new Date();
    */
};
Proyecto.create = function (newEmp, result) {
    dbConn.query("INSERT INTO proyectos set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Proyecto.findById = function (id, result) {
    dbConn.query("Select * from proyectos where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
Proyecto.findAll = function (result) {
    dbConn.query("Select * from proyectos", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('proyectos : ', res);
            result(null, res);
        }
    });
};
Proyecto.update = function(id, employee, result){
    dbConn.query("UPDATE proyectos SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employee.first_name,employee.last_name,employee.email,employee.phone,employee.organization,employee.designation,employee.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
Proyecto.delete = function(id, result){
    dbConn.query("DELETE FROM proyectos WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= Proyecto;