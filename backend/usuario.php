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
    $pass,$fechaNacimiento){
        $this->nombreCompleto = $nombreCompleto;
        $this->correoElectronico = $correoElectronico;
        $this->nombreUsuario = $nombreUsuario;
        $this->pass = $pass;
        $this->fechaNacimiento = $fechaNacimiento;        
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
        $consulta->bindValue(':activo', TRUE, PDO::PARAM_BOOL);
        $consulta->execute();
    }
    
}






?>