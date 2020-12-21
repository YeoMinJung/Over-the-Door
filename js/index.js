$(document).ready(function() {
	$(".door-button").on("click", function () {
		
		$(".background").animate({opacity:'0'}, 400)
		$(".hero").animate({opacity:'100'}, 400)
		$(".girl").animate({opacity:'100'}, 400)
		$(".flashlight").animate({opacity:'100'}, 400)
		$(".tree").animate({opacity:'100'}, 400)
		$(".box").animate({opacity:'100'}, 400)
		$(".twinkle").addClass("twinkles")

		})

})