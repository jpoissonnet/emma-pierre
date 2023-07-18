<?php

namespace App\Controller\Api;

use App\Controller\Api\AbstractApiController;
use App\Routing\Attribute\Route;

class UserController extends AbstractApiController
{
    #[Route("/api/users", name: "api_users_get")]
    public function getUsers()
    {
        try {
            $this->db->query('SELECT * FROM user');
            $users = $this->db->fetchAll();

            header('Content-Type: application/json', true, 200);
            return json_encode($users);
        } catch (\Throwable $th) {
            header('Content-Type: application/json', true, 500);
            return json_encode([
                'message' => 'Internal error while trying to fetch users'
            ]);
        }

    }

    #[Route("/api/users", name: "api_users_post", httpMethod: "POST")]
    public function createUser()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $login = $data['login'];
        $password = $data['password'];
        $nom = $data['nom'];
        $prenom = $data['prenom'];
        $telephone = $data['telephone'];

        $query = $this->db->prepare('SELECT * FROM user WHERE login = :login');
        $query->execute([
            'login' => $login
        ]);
        $user = $query->fetch();

        if ($user) {
            header('Content-Type: application/json', true, 409);
            return json_encode([
                'message' => 'User already exists'
            ]);
        }

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $query = $this->db->prepare('INSERT INTO user (login, password, nom, prenom, telephone, id_role) VALUES (:login, :password, :nom, :prenom, :telephone, :id_role)');
        $query->execute([
            'login' => $login,
            'password' => $hashedPassword,
            'nom' => $nom,
            'prenom' => $prenom,
            'telephone' => $telephone,
            'id_role' => 2
        ]);


        header('Content-Type: application/json', true, 201);
        return json_encode([
            'message' => 'User created'
        ]);
    }

    #[Route("/api/login", name: "api_login_post", httpMethod: "POST")]
    public function connect()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $login = $data['login'];
        $password = $data['password'];

        $query = $this->db->prepare('SELECT * FROM user WHERE login = :login');
        $query->execute([
            'login' => $login
        ]);
        $user = $query->fetch();

        if (!$user) {
            header('Content-Type: application/json', true, 404);
            return json_encode([
                'message' => 'User not found'
            ]);
        }

        if (!password_verify($password, $user['password'])) {
            header('Content-Type: application/json', true, 401);
            return json_encode([
                'message' => 'Wrong login or password try again nerd'
            ]);
        }

        header('Content-Type: application/json', true, 200);
        return json_encode([
            'message' => 'User connected'
        ]);
    }
}
