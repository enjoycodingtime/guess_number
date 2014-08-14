function CompareNumber() {
	// this.input = input;
	// this.answer = answer;
}
CompareNumber.prototype.compare = function(input,answer) {
	var number_A=0;
	var number_B=0;
	for (var positionA=0;positionA<4;positionA++){
		if(input[positionA]==answer[positionA]){
			number_A+=1;
		}
		for(var positionB=0;positionB<4;positionB++){
			if(input[positionA]==answer[positionB]&&positionA!=positionB){
				number_B +=1;
			}
		}
	}
	return number_A+'A'+number_B+'B';	// body...
};