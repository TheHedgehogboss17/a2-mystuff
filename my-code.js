$(document).ready(function(){
	
	$("p").hide();
	$("#topPicture").hide();
	$("h2").click(function(){
 	$(this).next().fadeToggle(1000);	
	});
});
	/* this is jq - button selectors */
	$("#testbutton").click(function(){
	/*$("#jq02").css("background-color","#FF0000")*/
	$("#strong, #testbutton").css("background-color","#FF0000");	
	});
	$(document).ready(function() {
	
	$("p").hide();
	$("#topPicture").hide();
	
	$("h1").click(function() {

		$(this).next().fadeToggle(1000);

	});
	
	/* start of jq02 how to use buttons and selectors */
	
	$("#testbutton").click(function() {
		
		/* $("#jq02").css("background-color","#FF0000"); */
		
		$("strong").css("background-color","#FF0000");
		
	});

});
$(document).ready(function() {
	$(h3).mousedown(function(){
		$(this).css("background-color", "0000FF");{
			
		};
		$(h3).mouseup(function(){
		$(this).css("background-color", "00FF00");{	
		};
		$(h3).mouseenter(function(){
		$(this).css("background-color", "FF0000");{
			
		};
		$(h3).mouseleave(function(){
		$(this).css("background-color", "FFFF00");{
		};	
	});
});
