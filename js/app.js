//objetos de estado y objetos html
estado = {homeClicks:0,}


//funciones para el manejo del estado
function AumentarHomeClicks(estado){
	estado.homeClicks = estado.homeClicks + 1;
}

//funcioens para el manejo del domm
function renderNavItem(){
	$("#secreto").html('<a href="yariela.html">Página Secreta</a>');
}

//funciones de accion
//verifica si se ha iniciado session secreta
$.ajax({
		url: 'php/main.php',
		type: 'GET',
		dataType: 'json',
		data: {opcion: '2'},
	})
	.done(function(result) {
		if ( !(result.acceso == 0)) {
			renderNavItem();
		}
	})
	.fail(function(result) {
		console.log("error");
		console.log(result);
	})
	.always(function() {
		console.log("complete");
	});

// habilita el modal secreto
$(".js-cuentaClicks").click(function(event) {
	AumentarHomeClicks(estado);
	if(estado.homeClicks == 5){
		$("#modal-secreto").modal("show"); 
		estado.homeClicks = 0;
	}
});

//despues de dar click en el boton de enviar del modal secreto.

function validarForm(){
	var pwd = $("#pwd").val();
	
	$.ajax({
		url: 'php/main.php',
		type: 'GET',
		dataType: 'json',
		data: {opcion: '1', password: pwd},
	})
	.done(function(result) {
		if (result.acceso == 1) {
			window.location.href = "yariela.html";
		}else{
			$("#pwd-alert").show();
			$('#pwd').val("");
		}
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
}


$("#boton-secreto").click(function(event) {	
	validarForm();
});
$("form").submit(function(event) {
	validarForm();
});
