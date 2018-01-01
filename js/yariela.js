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

$("#bienvenida").modal("show"); 
hola();

function hola(){
	var cadena = "a";

	for (var i = 0; i < 100; i++) {
		cadena = cadena + "a";
	}
	console.log(cadena);
}