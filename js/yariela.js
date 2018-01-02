//verifica si el usuario a iniciado sesion
$.ajax({
	url: 'php/main.php',
	type: 'GET',
	dataType: 'json',
	data: {opcion: '2'},
})
.done(function(result) {
	if ( result.acceso == 0 ){
    	window.location.href = "index.html";
  	}
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});//finn ajax


function abrirModal(){
	if (verificarCumple()) {
		$("#bienvenida").modal("show"); 
	}
}

//verifica la fecha
function verificarCumple(){
	var cumple = false;
	var dt = new Date();

	// Display the month, day, and year. getMonth() returns a 0-based number.
	var month = dt.getMonth()+1;
	var day = dt.getDate();
	var year = dt.getFullYear();
	
	if (day == 4 && month == 1) {
		cumple = true;
	}

	return cumple;
}

function elegirMensaje(){
	topFunction();
	var dt = new Date();

	// Display the month, day, and year. getMonth() returns a 0-based number.
	var day = dt.getDate();

	if (day >= 4) {
		$("#bienvenida").modal("show");
	}else{
		$("#bloqueado").modal("show");
	}
}

//cuando la pagina este lista
$(function(){
	abrirModal(); 
});