const mysql = require("mysql");

/*var mysqlConnection = mysql.createConnection(
    {
        host : "34.93.127.226",
        user : "root",
        password : "Password123!",
        database : "servicetest",
        multipleStatements: true
    }
);*/

/*var mysqlConnection = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "Password123!",
        database : "service",
        multipleStatements: true
    }
);
*/

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connected");
    }
    else{
        console.log("Connection Failed!");
    }
});


module.exports = mysqlConnection;