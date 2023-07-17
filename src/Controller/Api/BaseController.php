<?php

namespace App\Controller\Api;

abstract class BaseController
{
    protected $db;

    public function __construct()
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

        $this->db = new \PDO('mysql:host=localhost;dbname=api', 'root', '');
    }
}