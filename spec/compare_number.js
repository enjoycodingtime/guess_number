describe('CompareNumber',function(){

it('should return 0A0B when answer is 1234 and input is 5678 ',function() {
	var compare = new CompareNumber('1234','5678');
	expect(compare.compare()).toEqual('0A0B');
});

it('should return 4A0B when answer is 1234 and input is 1234',function() {
	var compare = new CompareNumber('1234','1234');
	expect(compare.compare()).toEqual('4A0B');
});

it('should return 0A4B when answer is 1234 and input is 4321',function() {
	var compare = new CompareNumber('1234','4321');
	expect(compare.compare()).toEqual('0A4B');
});

it('should return 2A2B when answer is 1234 and input is 1243',function() {
	var compare = new CompareNumber('1234','1243');
	expect(compare.compare()).toEqual('2A2B');
});
var test_repeat = function(number) {
	if(_.uniq(number).length !=4){
		return false;
	}
	else{
		return true
	}	
};

it("should return a number don't repeat any position ",function(){
	var answer_generator = new AnswerGenerator();
	expect(test_repeat(answer_generator.random())).toEqual(true);
})

})