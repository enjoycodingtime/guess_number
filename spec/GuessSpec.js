describe('Guess test',function() {
	var guess;

	it('should return 4A0B when answer is 1234 and input is 1234', function() {
		var answer_generator = new AnswerGenerator();
		spyOn(answer_generator,'random').and.returnValue('1234');
		var compare_number = new CompareNumber();
		spyOn(compare_number,'compare').and.returnValue('4A0B');

		guess = new Guess(answer_generator,compare_number);
		var returnValue = guess.guess_number('1234');
		
		expect(returnValue).toBe('4A0B');
		expect(compare_number.compare).toHaveBeenCalledWith('1234','1234');

	});
});