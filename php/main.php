<?php 
	session_start();
	$opcion = $_GET['opcion'];
	$salt = "f688db19a78e021f937cb1f95011df32";
	$passwordCrifado = "8067d9c03cd0b0244ff1084c49521c55";


	
	switch ($opcion) {
		case '1':
			$passwordUsuario = md5($salt.$_GET['password']);
			if ($passwordUsuario == $passwordCrifado) {
				$resultado["acceso"] = 1;
				$_SESSION['acceso'] = 1;
			}else{
				$_SESSION['acceso']	= 0;
				$resultado["acceso"] = 0;
			}

			echo json_encode($resultado);
		break;
		
		case '2':

			if ( array_key_exists("acceso", $_SESSION) ){
				if ( $_SESSION['acceso'] == 0){
					$resultado['acceso'] = 0;
				}
				$resultado['acceso'] = 1;
			}else{
				$resultado['acceso'] = 0;
			}
			

			echo json_encode($resultado);
		break;

		case '3':
			$clave = md5($salt."WuirraLinda");
			echo "contra: " . $clave;
			break;
	}

?>