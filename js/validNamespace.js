validNamespace = function(){
	
	var privateMethod = function(){
		console.log('validNamespace private method');
	};
	
	this.init = function(){
		console.log('validNamespace autoloaded!');
		privateMethod();
	};
	
	return this;
}
