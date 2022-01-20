module.exports = app =>{
    const provider = require("../controllers/provider.controller");

    var router = require("express").Router();

    //Create a new Service provider
    router.post("/", provider.create);

    //Retrieve all tutorials
    router.get("/", provider.findAll);

    app.use('/api/providers', router);
};
