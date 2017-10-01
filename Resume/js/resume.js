(function(){const RESUME = 'testDemo';
var myResume = function(){
	var writting, photoSrc,
		getWritting = function(){return writting},
		setWritting = function(text){
			writting = text;
		}
	return {
		get: getWritting,
		set: setWritting
	}
};




var engine = function(){
	var resumeController = function(){
		var HuangWuFeng_Resume = new myResume;
		HuangWuFeng_Resume.set(RESUME);
	},
	var domController = function(){

	}
	
}


var Dom = function(){
	var character = '',
	createTextContainer = function(type){
		var container = $.createElement(type);
		$(container).html(character);
		character = '';
	},
	setCharacter = function (c){
		character = c;
	}
}


$(target).
}(target))