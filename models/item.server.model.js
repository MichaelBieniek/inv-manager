var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var invSchema = new Schema({
	invName: String,
	invCount: Number,
	invLoc: String,
	invSubLoc: String,
	invNotes: String,
	createdOn: { type: Date, default: Date.now },
});

// expose (export) the model now...
module.exports = mongoose.model('Item', invSchema);
