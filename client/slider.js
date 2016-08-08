$(document).ready(function(){

	//$("#part-2").draggable({ snap: "#box" },{ containment: "#box", scroll: true });

	$("#part-1").draggable({ snap: "#box" },{ containment: "#box", scroll: false });

	$("#part-1").click(function(){

		
		$(this).animate({ "top": "100px" }, "fast").animate({ "down": "100px" }, "fast");

	});

	
		
});
