<?php

namespace App\Controller\Api;

use App\Controller\AbstractApiController;
use App\Routing\Attribute\Route;

class UserController extends AbstractApiController
{

    #[Route("/api/users", name: "api_users_get")]
    public function getUsers()
    {
        return json_encode([
            [
                'id' => 1,
                'login' => 'John Doe',
                'password' => '',
                'nom' => 'Doe',
                'prenom' => 'John',
                'telephone' => '0606060606',
                'id_role' => 1,
            ],
            [
                'id' => 2,
                'login' => 'Jane Doe',
                'password' => '',
                'nom' => 'Doe',
                'prenom' => 'Jane',
                'telephone' => '0606060606',
                'id_role' => 2,
            ]
        ]);
    }

    #[Route("/api/users", name: "api_users_post", httpMethod: "POST")]
    public function createUser()
    {
       header('Content-Type: application/json', true, 201);
       return json_encode([
           'message' => 'User created'
       ]);
    }

}
