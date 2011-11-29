//ns
var AutoLoad = new function(){
	
	this.load = function(namespace){
		
		try	{	
			var autoloadNs =  eval(namespace)();			
		}
		catch(e){
			if (e instanceof ReferenceError) {
				$.ajax({
					  url: 'js/'+ namespace +'.js',
					  dataType: 'script',
					  async: false,
					  success: function(){						
						autoloadNs = eval(namespace)();			
					  }				  
				});
			}
		}		
		return autoloadNs;		
	};	
};