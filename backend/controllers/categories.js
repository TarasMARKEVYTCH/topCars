const Categories = require("../models/Categories");

exports.getAll = (req, res, next) => {
    Categories.queryForAll().then((data) => {
        res.status(200).json(data)
    })
}
exports.getOneCategorie = (req, res, next) => {
    Categories.queryOneCategorie(req.params.id).then((data) => {
        res.status(200).json(data)
        console.log(req.params.id);
    })
}