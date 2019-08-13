//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "09 sep 2019 00:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	