const res           = require("express/lib/response");
const { NULL }      = require("mysql/lib/protocol/constants/types");
const sqlConnection = require("../models/db");
const queries       = require('./queries');
const {encryptPassword, getToken, comparePassword} = require('../security/authCommon')

const {Providers, ProviderAddress, ProviderReview, ProviderService, ProviderDocument} = require("./dbschema/db.schema.providers");

async function executeQuery(result, query, queryParams = []){
    try{
        [rows, fields] = await sqlConnection.query(query, queryParams);
        result(null, rows);
    }
    catch(err){
        result(err, null);
    }
}

Providers.create = async (reqBody, result) =>{
    const newProvider       = new Providers(reqBody);
    const providerAddress   = new ProviderAddress(reqBody);

    try{
        console.log("*** Adding a new provider and address **** ");
        newProvider.password = await encryptPassword(reqBody.password);

        await sqlConnection.query(queries['startTransaction']);
        var [rows, fields] = await sqlConnection.query(queries['insertProvider'], Object.values(newProvider));

        const token = getToken(rows.insertId);

        const returnObject = {id: rows.insertId, token: token};

        providerAddress.providerId = rows.insertId;
        [rows, fields] = await sqlConnection.query(queries['insertCity'], [providerAddress.city]);
        [rows, fields] = await sqlConnection.query(queries['insertState'], [providerAddress.state]);
        [rows, fields] = await sqlConnection.query(queries['insertCountry'], [providerAddress.country]);
        [rows, fields] = await sqlConnection.query(queries['insertAddress'], Object.values(providerAddress));
        await sqlConnection.query(queries['commit']);

        result(null, returnObject);
    }
    catch(err){
        console.log("***** ERROR OCCURED ***** ");
        console.log(err);
        await sqlConnection.query(queries['rollback']);
        result(err, null);
    }
};

Providers.signin = (reqBody, result) =>{
    const{username, password} = reqBody;
    if(!username || !password){
        return result({message: 'username or password can not be empty'}, null);
    }
    async function internalResultFunc (err, rows){
        if(err){
            console.log({message: 'internalResultFunc error '} + err);
            return result(err, null);
        }

        var queryResult = rows[0];

        try {
            if(await comparePassword(password, queryResult.password)){
                result(null, {id: queryResult.id, token: getToken(queryResult.id)});
            }
            else{
                console.log('comparePassword failed!');
                result({message: 'Inocrrect password'}, null);
            }
        }
        catch(err){
            result({message: 'Inocrrect password'}, null);
        }
    };

    executeQuery(internalResultFunc, queries['selectAllProvidersByUsername'], username);
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
    if(idService){
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