const Vehicles = require("../models/Vehicles.js");

exports.getAll = (req, res, next) => {
    Vehicles.queryForAll().then((obj)=>{
        res.status(200).json(obj)
    })
}
exports.getOne = (req, res, next) => {
    Vehicles.queryOneCar(req.params.id).then((car) => {
        res.status(200).json(car[0])
    })
}