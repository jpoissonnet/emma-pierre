<?php

namespace App\Controller\Api;

class AuthenticationController extends BaseController
{
    const TABLE = 'USER';
    const ADRESS = 'ADRESSE';
    const ROLE = 'ROLE';

    public function __construct()
    {
        parent::__construct();
    }

    public function sign_up($data)
    {
        $hashed_password = password_hash($data['password'], PASSWORD_DEFAULT);
        $adress_query = $this->db->prepare('INSERT INTO $ADRESS (numero, rue, code_postal, ville, pays) VALUES (:numero, :rue, :code_postal, :ville, :pays)');
        $role_query = $this->db->prepare('INSERT INTO $ROLE (role) VALUES (:role)');

        // créer adresse et role
        // récupérer id adresse et id role
        // créer user avec id adresse et id role

        $user_query = $this->db->prepare('INSERT INTO $TABLE (nom, prenom, email, password, id_adresse, id_role) VALUES (:nom, :prenom, :email, :password, :id_adresse, :id_role)');
        $user_query->execute([
            'nom' => $data['nom'],
            'prenom' => $data['prenom'],
            'email' => $data['email'],
            'password' => $hashed_password,
            'id_adresse' => $data['id_adresse'],
            'id_role' => $data['id_role']
        ]);

        $id = $this->db->lastInsertId();

        $query = $this->db->prepare('SELECT * FROM $TABLE WHERE id = :id');
        $query->execute(['id' => $id]);
        $user = $query->fetch(\PDO::FETCH_ASSOC);

        echo json_encode($user);
    }

}