
const bodyParser = require ("body-parser");
const express = require("express");
const dotenv = require('dotenv').config()

const dbConnect = require("./config/dbConnection");
dbConnect.connect((err)=>{
    if(err){
        return console.log('Oops, --ERROR: ' + err.message);
    } else {
        console.log('Database connection: OK');
    }
});
dbConnect.end();

const app = express();

app.use((req,res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTION");
    next();
})
app.use(bodyParser.json());
const vehiclesRouter = require("./routers/vehicles");
app.use('/api/', vehiclesRouter);

module.exports = app;
