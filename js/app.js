//objetos de estado y objetos html
estado = {homeClicks:1,}


//funciones para el manejo del estado
function AumentarHomeClicks(estado){
	estado.homeClicks = estado.homeClicks + 1;
}

//funcioens para el manejo del domm

//funciones de accion
$(function(){
	// start up after 2sec no matter what
    setTimeout(function(){
    	$('html').removeClass("loading");
    	$("body").show(600);
    },1000);
});

// bloque los elementos del nav que no estan Habilitados
// $("header").on({
// 	mouseenter: function(){
// 		if( !($(this).html() === "Home")  && !($(this).html() === "+") ){
// 			$(this).addClass("not-allowed")
// 			$("#no-disponible").show();
// 		}
// 	}, 
// 	mouseleave: function(){
// 		$(this).removeClass("not-allowed")
// 		$("#no-disponible").hide();
// 	},
// 	click: function(){
// 		if( $(this).html() === "Home"){
// 			//$("li a").removeClass("active");
// 			//$(this).addClass("active");
// 			AumentarHomeClicks(estado);
// 			if(estado.homeClicks == 5){
// 				$("#yariela").fadeIn(2000, "swing");	
// 			}
// 		}
// 	}	
// }, "li a");

