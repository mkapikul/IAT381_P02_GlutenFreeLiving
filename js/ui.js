$(document).ready(function(){
	
	//debugging code
	//$("title").html("Debug: "+debugText);

	var windowWidth = $(window).width();

	//$("title").html("Debug: "+windowWidth);

	if(windowWidth<496) {
		$("#navToggle").css("display", "block");
		$('.sideNav').hide();
	}

	$("#navToggle").click(function(){
		$(".sideNav").show();
	});

	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth>496){
			$(".sideNav").show();
		} 

		else{
			$("#navToggle").css("display", "block");
			$(".sideNav").hide();
		}
	});
});