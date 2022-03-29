
const mysql = require("mysql");
const dbConnect = mysql.createConnection({
    host: process.env.hostDB,
    port: process.env.portDB,
    user: process.env.userDB,
    password: process.env.passDB,
    database: process.env.database
});
module.exports = dbConnect;