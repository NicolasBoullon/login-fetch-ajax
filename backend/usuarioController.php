
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
            $usr = new Usuario($nombreCompleto,$correoElectronico,$nombreUsuario,$pass,$fechaNacimiento,1);
            $usr->crearUsuario();
        }

        public static function LoginUsuario(){
            $nombreUsuario = $_POST['nombreUsuario'];
            $pass = $_POST['pass'];
            
            $bool = Usuario::loginUser($nombreUsuario,$pass);

            // En lugar de retornar, hacemos eco del valor.
            // Asegúrate de devolver un contenido que pueda ser correctamente interpretado por JavaScript, como JSON.
            // echo json_encode($bool);
            return  json_encode(array($bool));
        }

        public static function TraerUsuarios(){
            $lista = Usuario::obtenerTodosUsuarios();
            // return json_encode(array("listaUsuario" => $lista));
            return json_encode(array($lista));
        }
    }

    
?>