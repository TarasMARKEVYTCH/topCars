const Vehicles = require("../models/Vehicles.js");

exports.getAll = (req, res, next) => {
    Vehicles.queryForAll().then((data)=>{
        res.status(200).json(data)
    })
};
exports.getOne = (req, res, next) => {
    Vehicles.queryOneCar(req.params.id).then((car) => {
        res.status(200).json(car[0])
    })
};
exports.getTop = (req, res, next) => {
    Vehicles.getTop().then((data) => {
        res.status(200).json(data)
    })
};