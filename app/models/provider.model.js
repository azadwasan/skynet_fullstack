const res = require("express/lib/response");
const { NULL } = require("mysql/lib/protocol/constants/types");
const sqlConnection = require("../models/db");
const queries = require('./queries');

function objectCopier(source, destination){
    for(let i in source){
        destination[i] = source[i];
    }
};

//Constructor for Provider object
const Providers = function(bodyData){
    this.firstName              = bodyData.firstName
    this.lastName               = bodyData.lastName
    this.middleName             = bodyData.middleName
    this.workRadius             = bodyData.workRadius
    this.status                 = bodyData.status
    this.cnic                   = bodyData.cnic
    this.userName               = bodyData.userName
    this.dateOfBirth            = bodyData.dateOfBirth
    this.photo                  = bodyData.photo
    this.phoneNumber1           = bodyData.phoneNumber1
    this.phoneNumber2           = bodyData.phoneNumber2
    this.briefDescription       = bodyData.briefDescription
    this.detailedDescription    = bodyData.detailedDescription
};

const ProviderAddress = function(bodyData){
    this.providerId     = NULL,
    this.addressType    = bodyData.addressType,
    this.addressRow1    = bodyData.addressRow1,
    this.addressRow2    = bodyData.addressRow2,
    this.addressRow3    = bodyData.addressRow3,
    this.postalCode     = bodyData.postalCode,
    this.latitudeX      = bodyData.latitutdeX,
    this.latitudeY      = bodyData.latitutdeY,
    this.longitudeX     = bodyData.longitudeX,
    this.longitudeY     = bodyData.longitudeY,
    this.city           = bodyData.city,
    this.state          = bodyData.state,
    this.country        = bodyData.country
};

Providers.create = async (newProvider, providerAddress, result) =>{
    try{
        await sqlConnection.query(queries['startTransaction']);
        var [rows, fields] = await sqlConnection.query(queries['insertProvider'], Object.values(newProvider));
        providerAddress.providerId = rows.insertId;
        [rows, fields] = await sqlConnection.query(queries['insertCity'], [providerAddress.city]);
        [rows, fields] = await sqlConnection.query(queries['insertState'], [providerAddress.state]);
        [rows, fields] = await sqlConnection.query(queries['insertCountry'], [providerAddress.country]);
        [rows, fields] = await sqlConnection.query(queries['insertAddress'], Object.values(providerAddress));
        await sqlConnection.query(queries['commit']);

        result(null, {id: rows.insertId});
    }
    catch(err){
        console.log("***** ERROR OCCURED ***** ");
        console.log(err);
        await sqlConnection.query(queries['rollback']);
        result(err, null);
    }
};


Providers.getAll = async (firstName, result)=>{
    var query = "SELECT * from provider";

 /*  if(firstName){
        query += `WHERE first_name LIKE '%${firstName}%`;
    }
*/
    try{
        [rows, fields] = await sqlConnection.query(queries['selectAllProviders']);
        result(null, rows);
    }
    catch(err){
        result(err, null);
        console.log(err);
    }
};

module.exports = {Providers, ProviderAddress};