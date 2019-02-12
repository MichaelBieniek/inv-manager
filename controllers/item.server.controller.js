var Item = require("../models/item.server.model.js");

exports.create = function(req, res) {
    var entry = new Item({
        invName: req.body.invName,
        invCount: req.body.invCount,
        invLoc: req.body.invLoc,
        invSubLoc: req.body.invSubLoc,
        invNotes: req.body.invNotes
    });
    entry.save();
    res.status(200).send(JSON.stringify(entry));
};

exports.getItem = function(req, res) {
    res.render("newItem", { title: "Inventory - New Item" });
};

exports.getAll = (req, res) => {
    const query = Item.find();
    query.exec((err, results) => {
        res.send(results);
    });
};

exports.getByName = (req, res, name) => {
    const query = Item.find();

    if (name.length > 0) {
        query.where({ invName: { $regex: `.*${name}.*` } });
    }

    query.limit(12).exec((err, results) => {
        res.send(results);
    });
};
