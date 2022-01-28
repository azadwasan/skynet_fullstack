const {Providers, ProviderAddress} = require("../models/provider.model");

//create and store a new provider
exports.create = (req, res) =>{
    //Validate requst
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const provider = new Providers(req.body);
    const providerAddress = new ProviderAddress(req.body);

    //Save provider in the database

    Providers.create(provider, providerAddress, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occured while creating a new Service Provider."
            });
        }
        else{
            res.send(data);
        }
    });
}

//Retrieve all service providers from teh database (with an optional condition)

exports.findAll = (req, res) =>{
    const firstName = req.query.firstName;

    Providers.getAll(firstName, (err, data) =>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occured while retrieving service providers."
            })
        }
        else{
            res.send(data);
        }
    });
};

exports.findOne = (req, res) =>{
    Providers.findById(req.params.id, (err, data) =>{
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                message: `Not found Provider with id ${req.params.id}.`
              });
            } 
            else {
              res.status(500).send({
                message: "Error retrieving Tutorial with id " + req.params.id
              });
            }
        } 
        else{
            res.send(data);
        } 
    });
};

exports.findReviews = (req, res) =>{
    console.log("Retrieving review for provider id = " + req.params.id);

    Providers.findReviewById(req.params.id, (err, data)=>{
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                message: `Review not found for Provider with id ${req.params.id}.`
              });
            } 
            else {
              res.status(500).send({
                message: "Error retrieving review for provider with id " + req.params.id
              });
            }
        } 
        else{
            res.send(data);
        }
    });
};

exports.createReview = (req, res) => {
    console.log("Creating review for provider id = " + req.params.id);

    Providers.createReview(req.params.id, req.body, (err, data)=>{
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                message: `Review not found for Provider with id ${req.params.id}.`
              });
            } 
            else {
              res.status(500).send({
                message: "Error retrieving review for provider with id " + req.params.id
              });
            }
        } 
        else{
            res.send(data);
        }
    });
};