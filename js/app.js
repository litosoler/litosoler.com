//objetos de estado y objetos html
estado = {homeClicks:1,}

var navBarG =  '<div class="container"  >'+
					'<div class="row">'+
						'<div class="col-12">'+
							'<ul>'+
								'<li><a href="#" class="active">Home</a></li>'+
								'<li><a href="#">About</a></li>'+
								'<li><a href="#">Portfolio</a></li>'+
								'<li><a href="#">Contact</a></li>'+
								'<li><a href="#">CV</a></li>'+
							'</ul>'+
						'</div>'+
					'</div>'+
				'</div>'; 


var navBarP =   '<div class="row">' +
					'<div class="col-12">' +
						'<ul>' +
							'<li ><a href="#home" class="active">Home</a></li>' +
							'<li class="dropdown">' +
								'<a href="#" class="dropbtn">+</a>' +
								'<div class="dropdown-content">' +
									'<a href="#">About</a>' +
									'<a href="#">Portfolio</a>' +
									'<a href="#">Contact</a>' +
									'<a href="#">CV</a>' +
								'</div>' +
							'</li>' +
						'</ul>' +
					'</div>' +
				'</div>';

				



//funciones para el manejo del estado
function AumentarHomeClicks(estado){
	estado.homeClicks = estado.homeClicks + 1;
}

//funcioens para el manejo del domm
function renderNavBar(navbar){
	$("header").html(navbar);
}

//funciones de accion
$(function(){
	$("#fondo").css("margin-top", ($(window).height()-$("#fondo").innerHeight() - 10)/ 2);
	
	if ($(window).width() <= 460){
		renderNavBar(navBarP);
	}else{
		renderNavBar(navBarG);
	}
});

$("header").hover(function(){
	$(this).addClass("hover");
}, function(){
	$(this).removeClass("hover");
});

$("header").on({
	mouseenter: function(){
		if( !($(this).html() === "Home")  && !($(this).html() === "+") ){
			$(this).addClass("not-allowed")
			$("#no-disponible").show();
		}
	}, 
	mouseleave: function(){
		$(this).removeClass("not-allowed")
		$("#no-disponible").hide();
	},
	click: function(){
		if( $(this).html() === "Home"){
			//$("li a").removeClass("active");
			//$(this).addClass("active");
			AumentarHomeClicks(estado);
			if(estado.homeClicks == 5){
				$("#yariela").fadeIn(2000, "swing");	
			}
		}
	}	
}, "li a");

$("header").on({
	mouseenter: function(){
		$(".dropdown-content").show();		
	}, 
	mouseleave: function(){
		$(".dropdown-content").hide();
	},
	click: function(){
		$(".dropdown-content").toggle();

	}	
}, ".dropdown");



$(window).resize(function() {
	$("#fondo").css("margin-top", ($(window).height()-$("#fondo").innerHeight() - 10)/ 2);
	if ($(window).width() <= 460){
		renderNavBar(navbarP);
	}else{
		renderNavBar(navBarG);
	}
});
