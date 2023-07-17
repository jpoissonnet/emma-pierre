<?php

namespace App\Controller\Api;

class UserController extends BaseController
{
    const TABLE = 'USER';
    public function __construct()
    {
        parent::__construct();
    }

    public function getAll()
    {
        $query = $this->db->query('SELECT * FROM $TABLE');
        $users = $query->fetchAll(\PDO::FETCH_ASSOC);

        echo json_encode($users);
    }

    public function get($id)
    {
        $query = $this->db->prepare('SELECT * FROM $TABLE WHERE id = :id');
        $query->execute(['id' => $id]);
        $user = $query->fetch(\PDO::FETCH_ASSOC);

        echo json_encode($user);
    }

    public function create()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $query = $this->db->prepare('INSERT INTO $TABLE (name, email) VALUES (:name, :email)');
        $query->execute([
            'name' => $data['name'],
            'email' => $data['email']
        ]);

        $id = $this->db->lastInsertId();

        $query = $this->db->prepare('SELECT * FROM $TABLE WHERE id = :id');
        $query->execute(['id' => $id]);
        $user = $query->fetch(\PDO::FETCH_ASSOC);

        echo json_encode($user);
    }

    public function update($id)
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $query = $this->db->prepare('UPDATE $TABLE SET name = :name, email = :email WHERE id = :id');
        $query->execute([
            'name' => $data['name'],
            'email' => $data['email'],
            'id' => $id
        ]);

        $query = $this->db->prepare('SELECT * FROM $TABLE WHERE id = :id');
        $query->execute(['id' => $id]);
        $user = $query->fetch(\PDO::FETCH_ASSOC);

        echo json_encode($user);
    }

    public function delete($id)
    {
        $query = $this->db->prepare('DELETE FROM $TABLE WHERE id = :id');
        $query->execute(['id' => $id]);

        echo json_encode(['message' => 'User deleted']);
    }

}