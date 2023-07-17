<?php

namespace App\Controller;

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
}
