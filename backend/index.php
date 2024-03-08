<?php
    require_once "usuarioController.php";
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
       
        UsuarioController::CargarUsuario();

    } else {
        echo "Método no permitido";
    }
?>