$(document).ready(function(){

	//$("#part-1").draggable();
	$("#part-1").draggable({ snap: "#box" },{ containment: "#box", scroll: false });

	$("#part-1").click(function(){

		$(this).animate({ "left": "+=50px" }, "fast");

	});

	//$("#part-2").draggable();
		
});
