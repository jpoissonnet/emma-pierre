<?php

namespace App\Controller\Api;

use App\Controller\AbstractApiController;
use App\Routing\Attribute\Route;

class ProductController extends AbstractApiController
{
    protected $table = 'product';

    /**
     * This route can handle a category query parameter
     */
    #[Route("/api/products", name: "api_products", httpMethod: "GET")]
    public function getAll()
    {
        if (empty($_GET['category'])) {
            $query = $this->db->query("SELECT p.nom, p.prix, p.image, p.categorie, p.id, t.nom as 'type' FROM $this->table p inner join `type` t on t.id = p.id_type");
        } else if ($_GET['category'] == "precieuses") {
            $query = $this->db->query("SELECT p.nom, p.prix, p.image, p.categorie, p.id, t.nom as 'type' FROM $this->table p inner join `type` t on t.id = p.id_type WHERE categorie NOT IN ('impertinentes', 'par couleur', 'uniques')");
        } else {
            $query = $this->db->prepare("SELECT p.nom, p.prix, p.image, p.categorie, p.id, t.nom as 'type' FROM $this->table p inner join `type` t on t.id = p.id_type WHERE categorie = :category");
            $query->execute(['category' => $_GET['category']]);
        }
        $query = $this->db->query("SELECT * FROM $this->table");
        $products = $query->fetchAll(\PDO::FETCH_ASSOC);

        return json_encode($products);
    }

    #[Route("/api/products/{id}", name: "api_details_id", httpMethod: "GET")]
    public function getById(int $id)
    {
        $query = $this->db->prepare("SELECT p.nom, prix, taille, categorie, c.nom as `couleur`, image
        FROM $this->table p inner join couleur c on c.id = p.id_couleur
        WHERE p.id = :id");
        $query->execute(['id' => $id]);
        $product = $query->fetch(\PDO::FETCH_ASSOC);

        echo json_encode($product);
    }

    #[Route("/api/products", name: "api_products_create", httpMethod: "POST")]
    public function createProduct()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        return json_encode($data);

        $query = $this->db->query("INSERT INTO $this->table (nom, prix, taille, image, categorie, id_type, id_couleur) VALUES (:nom, :prix, :taille, :image, :categorie, :id_type, :id_couleur)");
        $queryStmt = $this->db->prepare($query);

        $queryStmt->execute([
            'nom' => $data['nom'],
            'prix' => $data['prix'],
            'taille' => $data['taille'],
            'image' => $data['image'],
            'categorie' => $data['categorie'],
            'id_type' => $data['id_type'],
            'id_couleur' => $data['id_couleur'],
        ]);

        return json_encode(['message' => 'product created']);
    }

    #[Route("/api/products/{id}", name: "api_products_edit", httpMethod: "PUT")]
    public function editProduct()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $query = $this->db->query("UPDATE $this->table SET nom = :nom, prix = :prix, taille = :taille, image = :image, id_type = :id_type, id_couleur = :id_couleur WHERE id = :id");
        $queryStmt = $this->db->prepare($query);

        $queryStmt->execute([
            'nom' => $data['nom'],
            'prix' => $data['prix'],
            'taille' => $data['taille'],
            'image' => $data['image'],
            'id_type' => $data['id_type'],
            'id_couleur' => $data['id_couleur'],
            'id' => $data['id']
        ]);

        return json_encode(['message' => 'product edited']);
    }

    #[Route("/api/products/{id}", name: "api_product_delete", httpMethod: "DELETE")]
    public function delete($id)
    {
        $query = $this->db->prepare('DELETE FROM $TABLE WHERE id = :id');
        $query->execute(['id' => $id]);

        echo json_encode(['message' => 'product deleted']);
    }
}