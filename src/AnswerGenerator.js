function AnswerGenerator(){
	
};
AnswerGenerator.prototype.random = function() {
	var array = new Array();
	for(var position=0;position<4;position++){		
		array[position] = Math.floor(Math.random()*10);
	}
	console.log(array);
	while(_.uniq(array).length <4){
	array.push(Math.floor(Math.random()*10));	
	}
	return _.uniq(array);	
}
