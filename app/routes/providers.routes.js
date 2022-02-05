module.exports = app =>{
    const provider = require("../controllers/provider.controller");

    var router = require("express").Router();
    
    //Create a new Service provider
    router.post("/signup", provider.create);
    router.get("/signin", provider.signin);

    //Retrieve all tutorials
    router.get("/", provider.findAll);

    router.get("/:id", provider.findOne);

    router.get("/:id/reviews", provider.findReviews);
    router.post("/:id/reviews", provider.createReview);

    router.get("/:idProvider/services", provider.findServices);
    router.post("/:idProvider/services", provider.createService);

    router.get("/:idProvider/services/:idService/documents", provider.findDocuments);
    router.get("/:idProvider/services/documents", provider.findDocuments);
    router.post("/:idProvider/services/:idService/documents", provider.createDocuments);

    app.use('/api/providers', router);
};
