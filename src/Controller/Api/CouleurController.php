<?php

namespace App\Controller\Api;

use App\Controller\AbstractApiController;
use App\Routing\Attribute\Route;

class CouleurController extends AbstractApiController
{
    protected $table = 'couleur';


    #[Route("/api/couleurs", name: "api_couleurs", httpMethod: "GET")]
    public function getAll()
    {
        $query = $this->db->query("SELECT * FROM $this->table");
        $couleurs = $query->fetchAll(\PDO::FETCH_ASSOC);

        return json_encode($couleurs);
    }
}