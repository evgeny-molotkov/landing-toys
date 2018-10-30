$(document).ready(function() {
	$("#faq .qa .quest").click(function() {
		if ($(this).parent().hasClass("active")) {
			$(this).parent().removeClass("active");
		}
		else {
			$(this).parent().addClass("active");
		}
	});

	$(".slideLink").click(function (){
		var objName = $(this).attr('link');
		$('html, body').animate({
			scrollTop: $('#'+objName+'').offset().top,
		}, 1000);
		
		return false;
	});
});
