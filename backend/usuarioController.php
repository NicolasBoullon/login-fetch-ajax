
<?php

require_once "./usuario.php";

class UsuarioController{

        public static function CargarUsuario(){

            $nombreCompleto = $_POST['nombreCompleto'];
            $correoElectronico = $_POST['correoElectronico'];
            $nombreUsuario = $_POST['nombreUsuario'];
            $pass = $_POST['pass'];
            $fechaNacimiento = $_POST['fechaNacimiento'];
            //$usr = new Usuario($nombre,$apellido,$clave,$tipo);
            $usr = new Usuario($nombreCompleto,$correoElectronico,$nombreUsuario,$pass,$fechaNacimiento);
            $usr->crearUsuario();
        }

    }

    
?>