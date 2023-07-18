<?php

namespace App\Controller\Api;

use App\Controller\AbstractApiController;
use App\Routing\Attribute\Route;

class ProductController extends AbstractApiController
{
    protected $table = 'PRODUCT';

    public function __construct()
    {
        parent::__construct();
    }

    #[Route("/api/products", name: "api_products", httpMethod: "GET")]
    public function getAll()
    {
        $query = $this->db->query("SELECT * FROM $this->table");
        $products = $query->fetchAll(\PDO::FETCH_ASSOC);

        echo json_encode($products);
    }

    #[Route("/api/products/precieuses", name: "api_products_precieuses", httpMethod: "GET")]
    public function getPrecieuses()
    {
        $query = $this->db->query("SELECT product.nom, product.prix FROM $this->table inner join category c on c.id = id_categorie where c.nom = 'précieuses'");
        $products = $query->fetchAll(\PDO::FETCH_ASSOC);

        echo json_encode($products);
    }

    #[Route("/api/products/impertinentes", name: "api_products_impertinentes", httpMethod: "GET")]
    public function getImpertinentes()
    {
        $query = $this->db->query("SELECT * FROM $this->table inner join category c on c.id = id_categorie where c.nom = 'impertinentes'");
        $products = $query->fetchAll(\PDO::FETCH_ASSOC);

        echo json_encode($products);
    }

    #[Route("/api/products/couleurs", name: "api_products_couleurs", httpMethod: "GET")]
    public function getCouleurs()
    {
        $query = $this->db->query("SELECT c.nom FROM couleur c inner join product p on p.id_couleur = id");
        $products = $query->fetchAll(\PDO::FETCH_ASSOC);

        echo json_encode($products);
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