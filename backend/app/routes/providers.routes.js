const requireAuth = require('../middlewares/requireAuth');

module.exports = app =>{
    const provider = require("../controllers/provider.controller");

    var router = require("express").Router();
    
    //Create a new Service provider
    router.post("/signup", provider.create);
    router.post("/signin", provider.signin);

    //Retrieve all tutorials
    router.get("/", provider.findAll);

    router.get("/:id", requireAuth, provider.findOne);

    router.get("/:id/reviews", provider.findReviews);
    router.post("/:id/reviews", provider.createReview);

    router.get("/:idProvider/services", provider.findServices);
    router.post("/:idProvider/services", provider.createService);

    router.get("/:idProvider/services/:idService/documents", provider.findDocuments);
    router.get("/:idProvider/services/documents", provider.findDocuments);
    router.post("/:idProvider/services/:idService/documents", provider.createDocuments);

    app.use('/api/providers', router);
};
