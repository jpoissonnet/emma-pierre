<?php

namespace App\Controller\Api;

use App\Controller\AbstractApiController;
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

    #[Route("/api/register", name: "api_users_post", httpMethod: "POST")]
    public function createUser()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $login = $data['login'];
        $password = $data['password'];
        $nom = $data['nom'];
        $prenom = $data['prenom'];
        //TODO: handle rue
        //TODO: handle ville

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

        $query = $this->db->prepare('INSERT INTO user (login, password, nom, prenom, id_role) VALUES (:login, :password, :nom, :prenom, :id_role)');
        $query->execute([
            'login' => $login,
            'password' => $hashedPassword,
            'nom' => $nom,
            'prenom' => $prenom,
            'id_role' => 2
        ]);


        header('Content-Type: application/json', true, 201);
        return json_encode([
            'message' => 'User created',
            'body' => $data
        ]);
    }

    #[Route("/api/login", name: "api_login_post", httpMethod: "POST")]
    public function connect()
    {
        //TODO: handle login twice
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


        //TODO: check if session already exists
        //TODO: put this in a class
        $query = $this->db->prepare('INSERT INTO session (id,user_id) VALUES (:id,:user_id)');

        $session = [
            'id' => rand(0, 1000000000),
            'user_id' => $user['id']
        ];

        $query->execute($session);

        return json_encode([
            'message' => 'User connected',
            'session' => $session['id']
        ]);
    }

    #[Route("/api/logout", name: "api_logout_post", httpMethod: "POST")]
    public function logout()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $sessionId = $data['session'];

        $query = $this->db->prepare('DELETE FROM session WHERE id = :id');
        $query->execute([
            'id' => $sessionId
        ]);

        header('Content-Type: application/json', true, 200);
        return json_encode([
            'message' => 'User disconnected'
        ]);
    }
}
