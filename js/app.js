//objetos de estado y objetos html
estado = {homeClicks:1,}


//funciones para el manejo del estado
function AumentarHomeClicks(estado){
	estado.homeClicks = estado.homeClicks + 1;
}

//funcioens para el manejo del domm

//funciones de accion
$(function(){
	$('body').hide();
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

// Funciones del NavBar
function cerrar() {
	$(".sideBar").hide();
	$("#capa").hide();
    // document.getElementById("mySidebar").style.display = "none";
    // document.getElementById("myOverlay").style.display = "none";
}

function abrir(){
	$("#capa").show();
	$(".sideBar").show();
	// document.getElementById("mySidebar").style.display = "block";
 //    document.getElementById("myOverlay").style.display = "block";
}

$("#navBarG").on("click", "li a",function(){
	$("li a").removeClass("active");
	$(this).addClass("active");
});

$(window).resize(function() {
	if ($(window).width() >= 575){
		$("#navBarG").show();
		$("#capa").hide();
	}else{
		cerrar();
	}
});
