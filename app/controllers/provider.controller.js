const {Providers} = require("../models/provider.model");

function errorCallback (res, err, data){
    if(err){
        res.status(400).send({
            message: err.sqlMessage || "Some error occured while creating a new Service Provider."
        });
    }
    else{
        res.send(data);
    }
}

function checkBadRequest(data, res){
    if(Object.keys(data).length === 0){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return true;
    }
}

exports.create = (req, res) =>{
    if(checkBadRequest(req.body, res)) return;
    Providers.create(req.body, errorCallback.bind(this, res));
}

exports.findAll = (req, res) =>{
    const firstName = req.query.firstName;
    Providers.getAll(firstName, errorCallback.bind(this, res));
};

exports.findOne = (req, res) =>{
    Providers.findById(req.params.id, errorCallback.bind(this, res));
};

exports.findReviews = (req, res) =>{
    Providers.findReviewById(req.params.id, errorCallback.bind(this, res));
};

exports.createReview = (req, res) => {
    console.log("Creating review for provider id = " + req.params.id);
    if(checkBadRequest(req.body, res)) return;
    Providers.createReview(req.params.id, req.body, errorCallback.bind(this, res));
};

exports.findServices = (req, res) =>{
    console.log("Retrieving services for provider id = " + req.params.idProvider);
    Providers.findServices(req.params.idProvider, errorCallback.bind(this, res));
};

exports.createService = (req, res) => {
    if(checkBadRequest(req.body, res)) return;
    Providers.createService(req.params.idProvider, req.body, errorCallback.bind(this, res));
};

exports.findDocuments = (req, res) =>{
    console.log("Retrieving documents for provider id = " + req.params.idProvider + ", service id = " + req.params.idService);
    Providers.findDocuments(req.params.idProvider, req.params.idService, errorCallback.bind(this, res));
};

exports.createDocuments = (req, res) => {
    console.log("Creating document for provider id = " + req.params.idProvider + ", service id = " + req.params.idService);
    if(checkBadRequest(req.body, res)) return;
    Providers.createDocuments(req.params.idProvider, req.params.idService,  req.body, errorCallback.bind(this, res));
};