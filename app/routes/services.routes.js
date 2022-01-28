module.exports = app =>{
    const services = require("../controllers/services.controller");

    var router = require("express").Router();

    //Create a new Service
    router.post("/", services.create);

    //Retrieve all tutorials
    router.get("/", services.findAll);

    app.use('/api/services', router);
};
