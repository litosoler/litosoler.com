//objetos de estado
estado = {homeClicks:1,}

//funciones para el manejo del estado
function AumentarHomeClicks(estado){
	estado.homeClicks = estado.homeClicks + 1;
}

//funcioens para el manejo del domm


//funciones de accion
$(function(){
	$("#mensaje").css("margin-top", ($(window).height() / 2) - 100);
});

$("header").hover(function(){
	$(this).addClass("hover");
}, function(){
	$(this).removeClass("hover");
});

$("li a").hover(function(){
	if( !($(this).html() === "Home")){
		$(this).addClass("not-allowed")
		$("#no-disponible").show();
	}
},function(){
	$(this).removeClass("not-allowed")
	$("#no-disponible").hide();

});

$("li a").click(function(){
	if( $(this).html() === "Home"){
	$("li a").removeClass("active");
	$(this).addClass("active");
	AumentarHomeClicks(estado);
	if(estado.homeClicks == 5){
		$("#yariela").fadeIn(2000, "swing");	
	}
	}
});

