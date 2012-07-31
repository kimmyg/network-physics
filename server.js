var http = require('http');
var ws = require('ws');
var fs = require('fs');

var Simulation = require('simulation').Simulation;

var hs = new http.Server();

var wss = new ws.Server({ server: hs });

var simulation = new Simulation();

simulation.start();

hs.listen( 9222, function() {
	console.log( 'listening on 9222' );
});

hs.on( 'request', function( request, response ) {
	fs.readFile( 'index.html', 'utf8', function( error, data ) {
		if( error ) {
			response.writeHead( 500 );
			response.end();
		}
		else {
			response.writeHead( 200 );
			response.write( data );
			response.end();
		}
	});
});

wss.on( 'connection', simulation.client_onConnection );
