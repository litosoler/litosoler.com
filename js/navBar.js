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