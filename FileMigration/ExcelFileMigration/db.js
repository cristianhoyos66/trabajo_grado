// Use the MariaDB Node.js Connector
var mariadb = require('mariadb');

// Create a connection pool
var pool = 
  mariadb.createPool({
    host: '127.0.0.1', 
    port: 3306,
    user: 'legal_office_db_admin', 
    password: 'legal_office_db',
    database: 'legal_office_db'
  });
 
// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
  pool: pool
});