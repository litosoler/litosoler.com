//funciones de accion
$(function(){
	$("#fondo").css("margin-top", ($(window).height()-$("#fondo").innerHeight() - 10)/ 2);
	$('body').hide();

	// start up after 2sec no matter what
    setTimeout(function(){
    	$('html').removeClass("loading");
    	$("body").show(600);
    },1000);
});

$(window).resize(function() {
	$("#fondo").css("margin-top", ($(window).height()-$("#fondo").innerHeight() - 10)/ 2);
});
