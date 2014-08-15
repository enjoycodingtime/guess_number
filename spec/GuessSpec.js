describe('Guess test',function() {
	var guess;
	var answer_generator;
	var compare_number;

	 beforeEach(function() {
    	answer_generator = new AnswerGenerator();
		spyOn(answer_generator,'random').and.returnValue('1234');
		compare_number = new CompareNumber();
		spyOn(compare_number,'compare').and.returnValue('4A0B');
 	 });


	it('should return 4A0B when answer is 1234 and input is 1234', function() {
		guess = new Guess(answer_generator,compare_number);
		guess.start();
		var returnValue = guess.guess_number('1234');
		
		expect(returnValue).toBe('4A0B');
		expect(compare_number.compare).toHaveBeenCalledWith('1234','1234');
	});

	// it('should return Welcome! when game started!', function(){
	// 	guess = new Guess(answer_generator,compare_number);
	// 	spyOn(guess,'start_guess').and.returnValue('Welcome!Please input your number(6):');
	// 	var start_information = guess.start_guess();

	// 	expect(start_information).toBe('Welcome!\n\nPlease input your number(6):');
	// });

	// it('should return "Cannot input duplicate numbers!" when input numbers is repeat',function(){
	// 	guess = new Guess(answer_generator,compare_number);
	// 	spyOn(guess,'get_input').and.returnValue('Cannot input duplicate numbers!');
	// 	var guess_get_input = guess.get_input();

	// 	expect(guess_get_input).toBe('Cannot input duplicate numbers!');
	// });
});