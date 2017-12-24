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

$("#navBarG").on("click", "li a",function(){
	var id = $(this).attr('id');

	if (!(id == "cv")){
		scroll("#"+id);
	}


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

function scroll(elemento){
	$('html,body').animate({
		scrollTop: $(elemento+1).offset().top
	}, 1000);	
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	$('html,body').animate({
		scrollTop: 0
	}, 1000);
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
