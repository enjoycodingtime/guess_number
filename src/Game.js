function Game(my_console, guess){
	this.console = my_console;
	this.status = null;
	this.guess = guess;
};
Game.prototype.start_game = function() {
	this.status = "started"
	this.guess.start();
	this.console.log('Welcome!\n\nPlease input your number(6):');
};

Game.prototype.get_input = function() {
	return 'Cannot input duplicate numbers!'
};
Game.prototype.out_put = function(information) {
	console.log(information);
};