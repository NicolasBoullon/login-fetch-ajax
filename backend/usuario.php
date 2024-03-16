<?php
require_once "../db/AccesoDatos.php";

class Usuario{

    public $id;
    public $nombreCompleto;
    public $correoElectronico;
    public $nombreUsuario;
    public $pass;
    public $fechaNacimiento;
    public $activo;

    public function __construct($nombreCompleto,$correoElectronico,$nombreUsuario,
    $pass,$fechaNacimiento,$activo){
        $this->nombreCompleto = $nombreCompleto;
        $this->correoElectronico = $correoElectronico;
        $this->nombreUsuario = $nombreUsuario;
        $this->pass = $pass;
        $this->fechaNacimiento = $fechaNacimiento;
        $this->activo = $activo;
        
    }


    public function crearUsuario()
    {
        $objAccesoDatos = AccesoDatos::obtenerInstancia();
        $consulta = $objAccesoDatos->prepararConsulta("INSERT INTO tabla_usuarios (nombre_completo, correo_electronico,nombre_usuario,pass,fecha_nacimiento,activo) VALUES
        (:nombre_completo, :correo_electronico, :nombre_usuario, :pass, :fecha_nacimiento,:activo)");
        $consulta->bindValue(':nombre_completo', $this->nombreCompleto, PDO::PARAM_STR);
        $consulta->bindValue(':correo_electronico', $this->correoElectronico, PDO::PARAM_STR);
        $consulta->bindValue(':nombre_usuario', $this->nombreUsuario, PDO::PARAM_STR);
        $consulta->bindValue(':pass', $this->pass, PDO::PARAM_STR);
        $consulta->bindValue(':fecha_nacimiento', $this->fechaNacimiento, PDO::PARAM_STR);
        $consulta->bindValue(':activo', $this->activo, PDO::PARAM_BOOL);
        $consulta->execute();
    }

    public static function loginUser($nombreUsuario,$pass){
        $usuarios = self::obtenerTodosUsuarios();
        foreach ($usuarios as $user) {
            if($user["nombre_usuario"] == $nombreUsuario && $user["pass"] == $pass){
                // echo "TRUEEEEE";
                return true;
            }
        }
        // echo "FALSO";
        return false;
    }

    public static function obtenerTodosUsuarios()
    {
        $objAccesoDatos = AccesoDatos::obtenerInstancia();
        $consulta = $objAccesoDatos->prepararConsulta("SELECT id,nombre_completo, correo_electronico,nombre_usuario,pass,fecha_nacimiento,activo FROM tabla_usuarios");
        $consulta->execute();

        // return $consulta->fetchAll(PDO::FETCH_CLASS, 'Usuario'); // esto lo q hace es parsearlo a un tipo objeto, y le indicamos que es usuario
        return $consulta->fetchAll(PDO::FETCH_ASSOC);
    }
    
}






?>