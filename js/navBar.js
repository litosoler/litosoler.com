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
	$("li a").removeClass("active");
	$(this).addClass("active");
	}

	
});

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
});
