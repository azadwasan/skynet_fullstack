const {sqlConnection} = require("../common/db");
const queries = require('./queries');
const Services = require('./dbschema/db.schema.services');

Services.create = async ({service}, result) =>{
    try{
        var [rows, fields] = await sqlConnection.query(queries['insertServices'], service);
        result(null, {id: rows.insertId});
    }
    catch(err){
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