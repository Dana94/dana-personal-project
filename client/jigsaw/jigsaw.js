$(document).ready(function(){

	$("#part-1").draggable({ snap: "#part-2", snapMode: "outer" });
	//$("#part-1").draggable({ snap: "#box", snapMode: "inner" });
	//,{ containment: "#box", scroll: false });
		
	$("#part-2").draggable({ snap: "#box", snapMode: "inner" });

		//changes z-index of whichever piece is being used inside the div
		$( "#box div" ).draggable({ stack: "#box div" });
			

});

