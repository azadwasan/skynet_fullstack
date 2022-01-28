module.exports = app =>{
    const provider = require("../controllers/provider.controller");

    var router = require("express").Router();

    
    //Create a new Service provider
    router.post("/", provider.create);

    //Retrieve all tutorials
    router.get("/", provider.findAll);

    router.get("/:id", provider.findOne);

    router.get("/:id/reviews", provider.findOneReview);
    router.post("/:id/reviews", provider.createReview);

    app.use('/api/providers', router);
};
