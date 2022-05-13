const express = require('express');
const compression = require('compression');
const app = express();

function shouldCompress(req, res) {
	if (req.headers['x-no-compression']) {
		// don't compress responses with this request header
		return false;
	}
	// fallback to standard filter function
	return compression.filter(req, res);
}

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 80;

// compress content with gzip
app.use(compression({filter: shouldCompress}));

app.get('/a/', (request, response, next) => response.sendFile(__dirname+'/dist/map.html'));
app.get('/', (request, response, next) => response.sendFile(__dirname+'/dist/home.html'));

// make express look in the dist directory for assets (css/js/img)
app.use('/css', express.static('dist/css'));
app.use('/fonts', express.static('dist/fonts'));
app.use('/images', express.static('dist/images'));
app.use('/locales', express.static('dist/locales'));
app.use('/maps', express.static('dist/maps'));
app.use('/scripts', express.static('dist/scripts'));

app.listen(port, function() {
	console.log('map is running on http://localhost:' + port);
});