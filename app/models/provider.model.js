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

const ProviderReview = function(bodyData){
    this.providerId     = null,
    this.overall        = bodyData.overall,
    this.behavior       = bodyData.behavior,
    this.time           = bodyData.time,
    this.service        = bodyData.service,
    this.review         = bodyData.review
};

const ProviderService = function(bodyData){
    this.providerId = bodyData.providerId,
    this.serviceId  = bodyData.serviceId,
    this.experience = bodyData.experience,
    this.status     = bodyData.status
};

const ProviderDocument = function(bodyData){
    this.providerId         = null,
    this.providerServiceId  = null,
    this.document           = bodyData.document,
    this.documentName      = bodyData.documentName
};

Providers.create = async (newProvider, providerAddress, result) =>{
    try{
        console.log("*** Adding a new provider and address **** ");
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
    try{
        [rows, fields] = await sqlConnection.query(queries['selectAllProviders']);
        result(null, rows);
    }
    catch(err){
        result(err, null);
        console.log(err);
    }
};

Providers.findById = async (id, result) =>{
    try{
        [rows, fields] = await sqlConnection.query(queries['findProviderById'], id);
        result(null, rows);
    }
    catch(err){
        result(err, null);
        console.log(err);
    }
};

Providers.findReviewById = async(id, result) =>{
    try{
        [rows, fields] = await sqlConnection.query(queries['findReviewById'], id);
        result(null, rows);
    }
    catch(err){
        result(err, null);
        console.log(err);
    }
};

Providers.createReview = async (id, reqBody, result) =>{
    const newReview = new ProviderReview(reqBody);
    newReview.providerId = id;

    try{
        console.log("*** Adding a new provider and address **** ");
        var [rows, fields] = await sqlConnection.query(queries['createReview'], Object.values(newReview));
        result(null, {id: rows.insertId});
    }
    catch(err){
        console.log("***** ERROR OCCURED ***** ");
        console.log(err);
        result(err, null);
    }
};

Providers.findServices = async (idProvider, result) =>{
    try{
        [rows, fields] = await sqlConnection.query(queries['findServiceByProviderId'], idProvider);
        result(null, rows);
    }
    catch(err){
        result(err, null);
        console.log(err);
    }
};

Providers.createService = async (idProvider, reqBody, result) =>{
    const newService = new ProviderService(reqBody);
    newService.providerId = idProvider;

    try{
        console.log("*** Adding a new provider and address **** ");
        var [rows, fields] = await sqlConnection.query(queries['createService'], Object.values(newService));
        result(null, {id: rows.insertId});
    }
    catch(err){
        console.log("***** ERROR OCCURED ***** ");
        console.log(err);
        result(err, null);
    }
};

Providers.findDocuments = async (idProvider, idService, result) =>{
    let queryStr = sqlConnection.format(queries['findDocumentsByProviderId'], idProvider);
    if(typeof idService !== 'undefined'){
        let queryStr2 = sqlConnection.format(queries['findDocumentServiceAppend'], idService );
        queryStr = queryStr.slice(0, -1) + queryStr2;
    }
    // let queryStr = queryStr1.slice(0, -1) + queryStr2;
    // const queryStr = sqlConnection.format(queries['findDocumentsByProviderId'], [idProvider, idService]);

    try{
        [rows, fields] = await sqlConnection.query(queryStr);
        result(null, rows);
    }
    catch(err){
        result(err, null);
        console.log(err);
    }
};

Providers.createDocuments = async (idProvider, idService, reqBody, result) =>{
    const newDocument = new ProviderDocument(reqBody);
    newDocument.providerId = idProvider;
    newDocument.providerServiceId = idService;

    try{
        console.log("*** Adding a new provider and address **** ");
        var [rows, fields] = await sqlConnection.query(queries['createProviderServiceDocument'], Object.values(newDocument));
        result(null, {id: rows.insertId});
    }
    catch(err){
        console.log("***** ERROR OCCURED ***** ");
        console.log(err);
        result(err, null);
    }
};

module.exports = {Providers, ProviderAddress};