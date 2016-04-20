# buildRes
This plugin will help you configure your response messages easily, in ExpressJS

### Usage
Specify the buildRes middleware, after specifying all the other route handlers.
```sh
app.use(index, '/');
app.use(users, '/users');

...

app.use(require('./lib/buildRes'));
```
Now, specify the response's configuration in the respose object, as a property ```buildRes```, and then call ```next()```
```sh
...

res.buildRes({
	// Configurations
});

next();
```

## Configuration object defaults
```status```: 200,\n
```headers ```: {},\n
```message```: Accorging to the status code

### Example
```sh
router.get('/', function(req, res, next) {
	
	// Configuration object
	res.buildRes = {
		status:404,
		headers: {
			header1: 'firstHeader',
			header2: 'secondHeader'
		},
		message: 'Sorry, not found'
	};
	
	// Call next()
	next();
});
```