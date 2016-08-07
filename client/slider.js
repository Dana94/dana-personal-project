$(document).ready(function(){

	//$("#part-1").draggable();
	$("#part-1").draggable({ snap: "#box" });

	$("#part-1").click(function(){

		$(this).animate({ "left": "+=50px" }, "slow" );

	});

	//$("#part-2").draggable();
		
});
