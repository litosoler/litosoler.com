//objetos de estado y objetos html
estado = {homeClicks:0,}


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

// habilita el modal secreto
$(".js-cuentaClicks").click(function(event) {
	AumentarHomeClicks(estado);
	if(estado.homeClicks == 1){
		$("#modal-secreto").modal("show"); 
		estado.homeClicks = 0;
	}
});

//despues de dar click en el boton de enviar del modal secreto.
$("#boton-secreto").click(function(event) {
	var pwd = $("#pwd").val();
	
	$.ajax({
		url: 'php/main.php',
		type: 'GET',
		dataType: 'json',
		data: {password: pwd},
	})
	.done(function(result) {
		if (result.acceso == 1) {
			window.location.href = "yariela.php";
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
	
	
});
