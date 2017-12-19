$(function(){
	alineacionV("#section1", "#logo-footer");
});

function cerrar() {
	$(".sideBar").hide();
	$("#capa").hide();
}

function abrir(){
	$("#capa").show();
	$(".sideBar").show();
}

// $("#navBarG").on("click", "li a",function(){
// 	var id = $(this).attr('id');

// 	if (!(id == "cv")){
// 	$("li a").removeClass("active");
// 	$(this).addClass("active");
// 	}


// });

$("#cv").focusin(function(event) {
	/* Act on the event */
	$("#cvs").attr('color', 'black');
});
$(window).resize(function() {
	if ($(window).width() >= 575){
		$("#navBarG").show();
		$("#capa").hide();
	}else{
		cerrar();
	}
	alineacionV("#section1", "#logo-footer");
});

// boton volver al inicio

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top-btn").style.display = "block";
    } else {
        document.getElementById("top-btn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// fin boton volver al inicio

//footer
// centra el logo
function alineacionV(selectorPadre, selectorHijo){
	var marginTop = ($(selectorPadre).outerHeight() - $(selectorHijo).outerHeight() - 30 ) / 2; 
	if($(selectorPadre).outerWidth() >= 575){
	$(selectorHijo).css('margin-top', marginTop );
	}else{
		$(selectorHijo).css('margin-top', 0 );
	}
}	
// fin footer
