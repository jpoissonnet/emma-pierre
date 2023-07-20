<?php

namespace App\Controller\Api;

use App\Controller\AbstractApiController;
use App\Routing\Attribute\Route;

class TypesController extends AbstractApiController
{
    protected $table = 'type';


    #[Route("/api/types", name: "api_types", httpMethod: "GET")]
    public function getAll()
    {
        $query = $this->db->query("SELECT * FROM $this->table");
        $types = $query->fetchAll(\PDO::FETCH_ASSOC);

        return json_encode($types);
    }
}