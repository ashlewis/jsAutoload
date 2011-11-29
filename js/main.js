$(function(){
	
	$("a.new").click(function(){
		
		var myinvalidNamespace = AutoLoad.load('invalidNamespace');
		myinvalidNamespace.init();
		
		
		return false;
	});
});

