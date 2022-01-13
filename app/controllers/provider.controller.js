const {Provider, ProviderAddress} = require("../models/provider.model");

//create and store a new provider
exports.create = (req, res) =>{
    //Validate requst
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);
    //create a Provider
    const provider = new Provider({
        firstName:              req.body.firstName,
        lastName:               req.body.lastName, 
        middleName:             req.body.middleName,
        workRadius:             req.body.workRadius, 
        status:                 req.body.status,
        cnic:                   req.body.cnic,
        userName:               req.body.userName,
        dateOfBirth:            req.body.dateOfBirth,
        photo:                  req.body.photo, 
        phoneNumber1:           req.body.phoneNumber1,
        phoneNumber2:           req.body.phoneNumber2,
        briefDescription:       req.body.briefDescription,
        detailedDescription:    req.body.detailedDescription
    });
    
    const providerAddress = new ProviderAddress({
        type:           req.body.type,
        addressRow1:    req.body.addressRow1,
        addressRow2:    req.body.addressRow2,
        addressRow3:    req.body.addressRow3,
        postalCode:     req.body.postalCode,
        city:           req.body.city,
        state:          req.body.state,
        country:        req.body.country
    });

    //Save provider in the database
    Provider.create(provider, (err, data)=>{
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

    Provider.getAll(firstName, (err, data) =>{
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