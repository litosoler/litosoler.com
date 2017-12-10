//funciones de accion
autoMargin();
$(window).resize(function() {
	autoMargin();
});

function autoMargin(){
$("#fondo").css("margin-top", ($(window).height()-$("#fondo").innerHeight() - 10)/ 2);
}
