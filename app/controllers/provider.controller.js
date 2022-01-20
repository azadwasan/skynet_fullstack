const {Providers, ProviderAddress} = require("../models/provider.model");

//create and store a new provider
exports.create = (req, res) =>{
    //Validate requst
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

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