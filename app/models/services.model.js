const res = require("express/lib/response");
const { NULL } = require("mysql/lib/protocol/constants/types");
const sqlConnection = require("./db");
const queries = require('./queries');

//Constructor for Services object
const Services = function(bodyData){
    this.service = bodyData.service
};

Services.create = async (service, result) =>{
    try{
        var [rows, fields] = await sqlConnection.query(queries['insertServices'], [service]);
        result(null, {id: rows.insertId});
    }
    catch(err){
        console.log("***** ERROR ENCOUNTERED ***** ");
        console.log(err);
        result(err, null);
    }
};

Services.getAll = async (result)=>{
    try{
        [rows, fields] = await sqlConnection.query(queries['selectAllServices']);
        result(null, rows);
    }
    catch(err){
        result(err, null);
        console.log(err);
    }
};

module.exports = {Services};