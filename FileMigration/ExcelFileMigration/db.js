// Use the MariaDB Node.js Connector
var mariadb = require('mariadb');

// Create a connection pool
/*var pool = 
  mariadb.createPool({
    host: '127.0.0.1', 
    port: 3306,
    user: 'legal_office_db_admin', 
    password: 'legal_office_db',
    database: 'legal_office_db'
  });*/

  var pool = 
  mariadb.createPool({
    host: 'us-cdbr-east-06.cleardb.net', 
    port: 3306,
    user: 'b4a8a117364e67', 
    password: '880dd089',
    database: 'heroku_ab15f5dd16de3fd'
  });
 
// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
  pool: pool
});