<?php
    require_once "usuarioController.php";
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if($_POST["accion"] == "postUser"){
            // var_dump($_POST);

            UsuarioController::CargarUsuario();//Crear Usuario, registro.
        }elseif($_POST["accion"] == "loginUser"){
            // var_dump($_POST);

           echo UsuarioController::LoginUsuario();
        }

    } elseif($_SERVER['REQUEST_METHOD'] == 'GET'){
        header('Content-Type: application/json');
        echo UsuarioController::TraerUsuarios();
    }
?>