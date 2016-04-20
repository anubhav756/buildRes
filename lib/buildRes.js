var getMessage = require('./getMessage');

module.exports = function(req, res, next) {
	if(!res.buildRes)
		return res.end();
	
	if(!res.buildRes.status)
		res.buildRes.status = 200;
	
	res.set(res.buildRes.headers);
	
	if(!res.buildRes.message)
		res.buildRes.message = getMessage(res.buildRes.status);
	
	res.status(res.buildRes.status).send({ message: res.buildRes.message });
};