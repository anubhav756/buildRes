var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	res.buildRes = {
		status:404,
		headers: {
			header1: 'firstHeader',
			header2: 'secondHeader'
		},
		message: 'Sorry, not found'
	};
	
	next();
});

module.exports = router;
