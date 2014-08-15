function Guess(answer,compare){
	this.answer_generator = answer;
	this.compare =compare;
}

Guess.prototype.guess_number = function(input_number){
    return this.compare.compare(this.answer, input_number);
};

Guess.prototype.start = function(){
	this.answer = this.answer_generator.random();
}