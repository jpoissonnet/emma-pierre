<?php

namespace App\Controller\Api;

use App\Controller\AbstractApiController;
use App\Routing\Attribute\Route;

class ProductController extends AbstractApiController
{
    protected $table = 'PRODUCT';

    /**
     * This route can handle a category query parameter
     */
    #[Route("/api/products", name: "api_products", httpMethod: "GET")]
    public function getAll()
    {
        if (empty($_GET['category'])) {
            $query = $this->db->query("SELECT p.nom, p.prix, p.image, p.categorie, t.nom as 'type' FROM $this->table p inner join `type` t on t.id = p.id_type");
        } else if ($_GET['category'] == "precieuses") {
            $query = $this->db->query("SELECT p.nom, p.prix, p.image, p.categorie, t.nom as 'type' FROM $this->table p inner join `type` t on t.id = p.id_type WHERE categorie NOT IN ('impertinentes', 'par couleur', 'uniques')");
        } else {
            $query = $this->db->prepare("SELECT p.nom, p.prix, p.image, p.categorie, t.nom as 'type' FROM $this->table p inner join `type` t on t.id = p.id_type WHERE categorie = :category");
            $query->execute(['category' => $_GET['category']]);
        }
        $products = $query->fetchAll(\PDO::FETCH_ASSOC);

        echo json_encode($products);
    }

    #[Route("/api/products/precieuses", name: "api_products_precieuses", httpMethod: "GET")]
    public function getPrecieuses()
    {
        $query = $this->db->query("SELECT p.nom, p.prix, p.image, p.categorie, t.nom as 'type'
        FROM $this->table p
        inner join `type` t on t.id = p.id_type
        where categorie NOT IN ('impertinentes', 'par couleur', 'uniques')");
        $products = $query->fetchAll(\PDO::FETCH_ASSOC);

        echo json_encode($products);
    }

    #[Route("/api/products/{id}", name: "api_product", httpMethod: "GET")]
    public function getById(string $id)
    {
        echo json_encode($id);
    }


    public function get($id)
    {
        $query = $this->db->prepare('SELECT * FROM $TABLE WHERE id = :id');
        $query->execute(['id' => $id]);
        $product = $query->fetch(\PDO::FETCH_ASSOC);

        echo json_encode($product);
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
        $product = $query->fetch(\PDO::FETCH_ASSOC);

        echo json_encode($product);
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
        $product = $query->fetch(\PDO::FETCH_ASSOC);

        echo json_encode($product);
    }

    public function delete($id)
    {
        $query = $this->db->prepare('DELETE FROM $TABLE WHERE id = :id');
        $query->execute(['id' => $id]);

        echo json_encode(['message' => 'User deleted']);
    }

}