function du( a, b ) {
	return a + Math.floor( Math.random() * b );
}

function Simulation( t ) {
	this.t0 = t;

	this.clients = [];
}

Simulation.prototype.update = function( t ) {
	var dt = t - this.t0;
	this.t0 = t;

	// update
}

Simulation.prototype.addClient = function( c ) {
	this.clients.forEach( function( client ) {
		

	this.clients.push
