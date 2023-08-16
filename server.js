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
const port = process.env.PORT || 8080;

// compress content with gzip
app.use(compression({filter: shouldCompress}));

app.get('/', (request, response, next) => response.sendFile(__dirname+'/dist/home.html'));
app.get('/browserconfig.xml', (request, response, next) => response.sendFile(__dirname+'/dist/browserconfig.xml'));
app.get('/site.webmanifest', (request, response, next) => response.sendFile(__dirname+'/dist/site.webmanifest'));

const maps = ['m01', 'm02', 'm03', 'm04', 'm05', 'm06', 'm07', 'm08', 'dlc1', 'dlc2', 'dlc3', 'dlc4', 'dlc5'];

for(const map of maps) {
	app.get(`/${map}/`, (request, response, next) => response.sendFile(__dirname+'/dist/map.html'));
}

app.use('/css', express.static('dist/css'));
app.use('/fonts', express.static('dist/fonts'));
app.use('/images', express.static('dist/images'));
app.use('/locales', express.static('dist/locales'));
app.use('/maps', express.static('dist/maps'));
app.use('/scripts', express.static('dist/scripts'));

app.listen(port, function() {
	console.log('map is running on http://localhost:' + port);
});