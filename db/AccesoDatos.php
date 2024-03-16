<?php

class AccesoDatos
{
    private static $objAccesoDatos;
    private $objetoPDO;
 
    private function __construct() {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "login";
    
        $this->objetoPDO = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $this->objetoPDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
 
    public static function obtenerInstancia()
    {
        if (!isset(self::$objAccesoDatos)) {
            self::$objAccesoDatos = new AccesoDatos();
        }
        return self::$objAccesoDatos;
    }

    public function prepararConsulta($sql)
    {
        return $this->objetoPDO->prepare($sql);
    }

}
?>