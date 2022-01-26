const mySQL = require("mysql2/promise");
const dbConfig = require("../config/db.config");

/*const connection = async config => {
    const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';
  
    // Establish a connection to the database
    return mySQL.createPool({
      user: process.env.DB_USER, // e.g. 'my-db-user'
      password: process.env.DB_PASS, // e.g. 'my-db-password'
      database: process.env.DB_NAME, // e.g. 'my-database'
      // If connecting via unix domain socket, specify the path
      socketPath: `${dbSocketPath}/${process.env.INSTANCE_CONNECTION_NAME}`,
      // Specify additional properties here.
      ...config,
    });
  };*/

// Establish a connection to the database
/*return mySQL.createPool({
    user: process.env.DB_USER, // e.g. 'my-db-user'
    password: process.env.DB_PASS, // e.g. 'my-db-password'
    database: process.env.DB_NAME, // e.g. 'my-database'
    // If connecting via unix domain socket, specify the path
    socketPath: `${dbSocketPath}/${process.env.INSTANCE_CONNECTION_NAME}`,
    // Specify additional properties here.
    ...config,
});
};*/

/*const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';
var config;

var connection = mySQL.createPool({
    user: process.env.DB_USER, // e.g. 'my-db-user'
    password: process.env.DB_PASS, // e.g. 'my-db-password'
    database: process.env.DB_NAME, // e.g. 'my-database'
    // If connecting via unix domain socket, specify the path
    socketPath: `${dbSocketPath}/${process.env.INSTANCE_CONNECTION_NAME}`
    , ...config,
    });
*/

var connectionPool = mySQL.createPool({
    host : dbConfig.HOST,
    user : dbConfig.USER,
    password : dbConfig.PASSWORD,
    database : dbConfig.DATABASE,
    multipleStatements: dbConfig.MULTIPLESTATEMENTS
  });
// const promisePool = connectionPool.promise();

module.exports = connectionPool;