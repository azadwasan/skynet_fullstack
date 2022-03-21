const {Services} = require("../models/services.model")

exports.create = (req, res) =>{
    //Validate requst
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const service = new Services(req.body);

    Services.create(service, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occured while creating a new Service."
            });
        }
        else{
            res.send(data);
        }
    });
}

//Retrieve all services from teh database

exports.findAll = (req, res) =>{
   Services.getAll((err, data) =>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occured while retrieving services."
            })
        }
        else{
            res.send(data);
        }
    });
};