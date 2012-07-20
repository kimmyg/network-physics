function du( a, b ) {
	return a + Math.floor( Math.random() * b );
}

function Simulation( t ) {
	this.t0 = t;

	this.clients = [];

	var self = this;

	this.client_onMessage = function( message ) {
		message = JSON.parse( message );

		console.log( message );
	};

	this.client_onClose = function() {
		
	};
}

Simulation.prototype.update = function( t ) {
	var dt = t - this.t0;
	this.t0 = t;

	// update
}

Simulation.prototype.addClient = function( client ) {
	client.on( 'message', this.client_onMessage );
	client.on( 'close', this.client_onClose );	

	this.clients.forEach( function( c ) {
		c.send( JSON.stringify({ type: 'add', location: location }) );

	this.clients.push
