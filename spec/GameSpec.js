describe('Game test:',function(){
	var game;
	var my_console;
	var guess;
	var compare_number;
	var answer_generator
	beforeEach(function(){
		my_console = {
			log:function(object){

			}
		}
		answer_generator = new AnswerGenerator();
		compare_number = new CompareNumber();

		guess= new Guess(answer_generator,compare_number);
		game = new Game(my_console);

		spyOn(my_console,"log");
	});

	it('should return "Welcome!\n\nPlease input your number(6):"when game started',function(){
		//expect(game.start_game()).toBe();
		game.start_game();
		expect(my_console.log).toHaveBeenCalledWith('Welcome!\n\nPlease input your number(6):')
	});

	it('should return "Cannot input duplicate numbers!" when input numbers is repeat',function(){
		var input = "1123";
		game.get_input(input)
		expect(my_console.log)
		.toHaveBeenCalledWith('Cannot input duplicate numbers!');

	});

	it("should return '0A0B\n\nPlease input your number(5):' when input a regular number",function() {
		var input = "1234";
		var answer = "5678";
		spyOn(answer_generator,'random').and.returnValue(answer);

		game.start_game();
		game.get_input(input);

		expect(my_console.log).toBe('0A0B\n\nPlease input your number(5):');
	});

	it("should return what guess.guess_number returned", function(){
		my_console = {
			log:function(object){

			}
		}
	
		var guess = new Guess();
		spyOn(guess, "guess_number").and.returnValue("0A0B")
		var game = new Game(my_console);

		spyOn(my_console,"log");

		expect(guess.guess_number).toHaveBeenCalledWith(input);
		expect(my_console.log).toBe('0A0B\n\nPlease input your number(5):');


	});

});