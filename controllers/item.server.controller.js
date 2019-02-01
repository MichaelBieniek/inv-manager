var Item = require('../models/item.server.model.js');

exports.create = function(req, res) {
	var entry = new Item({
		invName: req.body.invName,
		invCount: req.body.invCount,
		invLoc: req.body.invLoc,
		invSubLoc: req.body.invSubLoc,
		invNotes: req.body.invNotes,
	});

	entry.save();

	// redirect to home page...
	res.redirect(301, '/');
};

exports.getNote = function(req, res) {
	res.render('newItem', { title: 'Inventory - New Item' });
};
