function Guess(answer,compare){
	this.answer = answer.random();
	this.compare =compare;
}

Guess.prototype.guess_number = function(input_number){
    return this.compare.compare(this.answer, input_number);
};