const res = require("express/lib/response");
const { NULL } = require("mysql/lib/protocol/constants/types");
const sqlConnection = require("../models/db");
const queries = require('./queries');
const {Providers, ProviderAddress, ProviderReview, ProviderService, ProviderDocument} = require("./dbschema/db.schema.providers");

async function executeQuery(result, query, queryParams = []){
    try{
        [rows, fields] = await sqlConnection.query(query, queryParams);
        result(null, rows);
    }
    catch(err){
        result(err, null);
        console.log(err);
    }
}

Providers.create = async (reqBody, result) =>{
    const newProvider          = new Providers(reqBody);
    const providerAddress   = new ProviderAddress(reqBody);

    try{
        console.log("*** Adding a new provider and address **** ");
        await sqlConnection.query(queries['startTransaction']);
        var [rows, fields] = await sqlConnection.query(queries['insertProvider'], Object.values(newProvider));
        const returnObject = {id: rows.insertId};
        providerAddress.providerId = rows.insertId;
        [rows, fields] = await sqlConnection.query(queries['insertCity'], [providerAddress.city]);
        [rows, fields] = await sqlConnection.query(queries['insertState'], [providerAddress.state]);
        [rows, fields] = await sqlConnection.query(queries['insertCountry'], [providerAddress.country]);
        [rows, fields] = await sqlConnection.query(queries['insertAddress'], Object.values(providerAddress));
        await sqlConnection.query(queries['commit']);

        result(null,returnObject);
    }
    catch(err){
        console.log("***** ERROR OCCURED ***** ");
        console.log(err);
        await sqlConnection.query(queries['rollback']);
        result(err, null);
    }
};

Providers.getAll = (firstName, result)=>{
    executeQuery(result, queries['selectAllProviders']);
};

Providers.findById = async (id, result) =>{
    executeQuery(result, queries['findProviderById'], id);
};

Providers.findReviewById = async(id, result) =>{
    executeQuery(result, queries['findReviewById'], id);
};

Providers.createReview = async (id, reqBody, result) =>{
    const newReview = new ProviderReview(reqBody);
    newReview.providerId = id;
    executeQuery(result, queries['createReview'], Object.values(newReview));
};

Providers.findServices = async (idProvider, result) =>{
    executeQuery(result, queries['findServiceByProviderId'], idProvider);
};

Providers.createService = async (idProvider, reqBody, result) =>{
    const newService = new ProviderService(reqBody);
    newService.providerId = idProvider;

    executeQuery(result, queries['createService'], Object.values(newService));
};

Providers.findDocuments = async (idProvider, idService, result) =>{
    let queryStr = sqlConnection.format(queries['findDocumentsByProviderId'], idProvider);
    if(typeof idService !== 'undefined'){
        let queryStr2 = sqlConnection.format(queries['findDocumentServiceAppend'], idService );
        queryStr = queryStr.slice(0, -1) + queryStr2;
    }

    executeQuery(result, queryStr);
};

Providers.createDocuments = async (idProvider, idService, reqBody, result) =>{
    const newDocument = new ProviderDocument(reqBody);
    newDocument.providerId = idProvider;
    newDocument.providerServiceId = idService;

    executeQuery(result, 'createProviderServiceDocument', Object.values(newDocument));
};

module.exports = {Providers};