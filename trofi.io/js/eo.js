window.addEventListener("resize", divResize);
window.onload = function() {
  divResize();
};


function divResize() {
 	if($(window).width() < 1200) {
 		var plateHeight = $("#eo-plate").height();
 		var divMargin = plateHeight * .83;
 		var heightFix = (plateHeight + divMargin);
 	}
 	else {
 		var plateHeight = $("#eo-plate").height();
 		var divMargin = plateHeight * .03;
 		var heightFix = (plateHeight + divMargin);
 	}

	$(document).ready(function() {
	  $("#eo-div").css("height", heightFix + "px");
	});
}