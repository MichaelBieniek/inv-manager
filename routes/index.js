var express = require('express');
var router = express.Router();
var itemCtrl = require('../controllers/item.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

// GET new item page
router.get('/newItem', (req, res) => {
	return itemCtrl.getItem(req, res);
});

// POST new item page
router.post('/newItem', (req, res) => {
	return itemCtrl.create(req, res);
});

module.exports = router;
