const mysql = require("mysql");

const dbConnect = mysql.createConnection({
    host: process.env.hostDB,
    port: process.env.portDB,
    user: process.env.userDB,
    password: process.env.passDB,
    database: process.env.database,
    multipleStatements: true
});
exports.queryForAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * from cars`, (err, results) => {
            if(err){
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
};
exports.queryOneCar = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM cars WHERE car_id = ${id}`, (err,results) => {
            if(err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}