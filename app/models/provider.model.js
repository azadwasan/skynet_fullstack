const res = require("express/lib/response");
const sqlConnection = require("../models/db");

const ProviderAbstract = function(){
    //Constructor for Provider object
    this.firstName;
    this.lastName;
    this.middleName;
    this.workRadius;
    this.status;
    this.cnic;
    this.userName;
    this.dateOfBirth;
    this.photo;
    this.phoneNumber1;
    this.phoneNumber2;
    this.briefDescription;
    this.detailedDescription;
};

//Constructor for Provider object
const Provider = function(provider){
    // this = new ProviderAbstract();
    this.firstName              = null;
    this.lastName               = null;
    this.middleName             = null;
    this.workRadius             = null;
    this.status                 = null;
    this.cnic                   = null;
    this.userName               = null;
    this.dateOfBirth            = null;
    this.photo                  = null;
    this.phoneNumber1           = null;
    this.phoneNumber2           = null;
    this.briefDescription       = null;
    this.detailedDescription    = null;

    console.log(this);
    for(let i in provider){
        this[i] = provider[i];
    }
    console.log(this);
};

const ProviderAddress = function(ProviderAddress){
    this.type = ProviderAddress.type;
    this.addressRow1 = ProviderAddress.addressRow1;
    this.addressRow2 = ProviderAddress.addressRow2;
    this.addressRow3 = ProviderAddress.addressRow3;
    this.postalCode = ProviderAddress.postalCode;
    this.city = ProviderAddress.city;
    this.state = ProviderAddress.state;
    this.country = ProviderAddress.country;
};

Provider.create = (newProvider, result) =>{

    var sqlQryStr = `INSERT INTO 
        service.provider(
            first_name,
            last_name,
            middle_name,
            work_radius,
            status,
            cnic,
            username,
            date_of_birth,
            photo,
            phone_number_1,
            phone_number_2,
            brief_description,
            detailed_description
            )
    VALUES (?, ?, ?, IFNULL(?,DEFAULT(work_radius)), IFNULL(?,DEFAULT(status)), ?, ?, ?, IFNULL(?,DEFAULT(photo)), ?, IFNULL(?,DEFAULT(phone_number_2)), ?, IFNULL(?,DEFAULT(detailed_description)));`;

/*    var qry = sqlConnection.query(sqlQryStr,
        Object.values(newProvider),
        (err, res)=>{
            if(err){
                console.log("Error:", err);
                result(err, null);
                return;
            }
            result(null, {id: res.insertedId, ...newProvider});
        }
    );
    */
   sendQuery(newProvider, sqlQryStr, result);
//    console.log(qry.sql);
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

Provider.getAll = (firstName, result)=>{
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

module.exports = {Provider, ProviderAddress};