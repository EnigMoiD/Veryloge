var
express = require('express'),
app = express(),
stylus = require('stylus'),
nib = require('nib');

app.set('views', __dirname + '/views');

app.configure(function() {
	app.use(stylus.middleware({
			src: __dirname + '/views', 
			dest: __dirname + '/public', 
			compile: compile,
			force: true
		})
	);	
	app.use(express.static(__dirname + '/public'));
})

app.set('view engine', 'jade');

function compile(str, path) {
	return stylus(str)
		.set('filename', path)
		.use(nib());
}

// Routes

app.get('/', function (req, res) {
	res.render('index', {
		title : 'Home'
	});
});

app.listen(8080);

console.log('> running on port 8080');