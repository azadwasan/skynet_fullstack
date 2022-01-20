const res = require("express/lib/response");
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
    this.type           = bodyData.type,
    this.addressRow1    = bodyData.addressRow1,
    this.addressRow2    = bodyData.addressRow2,
    this.addressRow3    = bodyData.addressRow3,
    this.postalCode     = bodyData.postalCode,
    this.latitude       = bodyData.latitutde,
    this.longitude      = bodyData.longitude,
    this.city           = bodyData.city,
    this.state          = bodyData.state,
    this.country        = bodyData.country
};

Providers.create = (newProvider, providerAddress, result) =>{
   const sqlQryStr = queries['insertProvider'];
   sendQuery(newProvider, sqlQryStr, result);
};

function sendQuery(obj, qryStr, result){
    sqlConnection.query(qryStr,
        Object.values(obj),
        (err, res)=>{
            if(err){
                console.log("Error:", err);
                result(err, null);
                return;
            }
            result(null, {id: res.insertedId, ...obj});
        }
    );
}

Providers.getAll = (firstName, result)=>{
    var query = "SELECT * from provider";

 /*  if(firstName){
        query += `WHERE first_name LIKE '%${firstName}%`;
    }
*/
    sqlConnection.query(query, (err, res)=>{
        if(err){
            console.log("Error: ", err);
            result (null, err);
            return;
        }
        //console.log("Providers : ", res);
        result(null, res);
    });
};

module.exports = {Providers, ProviderAddress};