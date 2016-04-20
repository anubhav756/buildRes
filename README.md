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
Now, specify the response's configuration in the respose object, as a property ```sh buildRes ```, and then call ```sh next() ```
```sh
...

res.buildRes({
	// Configurations
});

next();
```

## Configuration object defaults
```sh status ```: 200,
```sh headers ```: {},
```sh message ```: Accorging to the status code

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