<?php

namespace App\Controller\Api;

use App\Controller\AbstractApiController;

class SessionController extends AbstractApiController
{
    public function __construct()
    {
        parent::__construct();
        header('Content-Type: text/html');
    }

    public function getRole()
    {
        if (isset($_COOKIE['session_id'])) {
            $session_id = $_COOKIE['session_id'];
            $query = $this->db->prepare("SELECT r.nom FROM role r join user u on r.id = u.id_role join session s on u.id = s.user_id where s.id = :session_id");
            $query->execute(['session_id' => $session_id]);
            $session = $query->fetch(\PDO::FETCH_ASSOC);
            return $session['nom'];
        }
        return null;
    }


}