module.exports = app =>{
    const provider = require("../controllers/provider.controller");

    var router = require("express").Router();

    //Create a new Service provider
    router.post("/", provider.create);

    //Retrieve all tutorials
    router.get("/", provider.findAll);

    app.use('/api/provider', router);
};


/*Router.get("/", (req, res)=>{
    mysqlConnection.query("SELECT * from service.provider", (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log("Database, data retrieval error!");
        }
    })
})*/

//module.exports = Router;
