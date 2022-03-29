const mysql = require("mysql");
const dbConnect = mysql.createConnection({
    host: process.env.hostDB,
    port: process.env.portDB,
    user: process.env.userDB,
    password: process.env.passDB,
    database: process.env.database
});


exports.queryForAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM cars_categories`, (err, results) => {
            if(err){
                reject(err);
            } else {
                resolve(results)
            }
        })
    })
}
exports.queryOneCategorie = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * from cars c LEFT JOIN cars_categories cc on c.categorie_car = cc.categorie_id WHERE c.categorie_car = ${id}`, (err, results) => {
            if(err) {
                reject(err)
            } else {
                resolve(results)
                console.log(results);
            }
        })
    })
}