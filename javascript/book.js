$(document).ready(function() {
	let greeting;
	$('#pre').text( greeting );
	$('#pre').fadeIn(5000);
	
	$('#pulldown').hide();
	$('#nav').hover(
		function(){
		$('#pulldown').fadeToggle(300);
	});
});



 
 