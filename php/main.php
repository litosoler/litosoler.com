<?php 
	session_start();

	$salt = "f688db19a78e021f937cb1f95011df32";
	$passwordCrifado = "5aea614e8d021103592bc096b63752b4";

	$passwordUsuario = md5($salt.$_GET['password']);
	
	if ($passwordUsuario == $passwordCrifado) {
		$resultado["acceso"] = 1;
		$_SESSION['acceso'] = 1;
	}else{
		$_SESSION['acceso']	= 0;
		$resultado["acceso"] = 0;
	}

	echo json_encode($resultado);


?>