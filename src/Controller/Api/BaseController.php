<?php

namespace App\Controller\Api;

use Symfony\Component\Dotenv\Dotenv;

abstract class BaseController
{
    protected $db;

    public function __construct()
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

        // DB
        [
            'DB_HOST' => $host,
            'DB_PORT' => $port,
            'DB_NAME' => $dbname,
            'DB_CHARSET' => $charset,
            'DB_USER' => $user,
            'DB_PASSWORD' => $password
        ] = $_ENV;


        $this->db = new \PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    }
}