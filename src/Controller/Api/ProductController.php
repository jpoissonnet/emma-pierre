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
            $query = $this->db->query("SELECT p.nom, p.prix, p.image, p.categorie, p.id, p.taille, c.nom as couleur, t.nom as 'type' FROM $this->table p inner join `type` t on t.id = p.id_type inner join couleur c on c.id = p.id_couleur");
        } else if ($_GET['category'] == "precieuses") {
            $query = $this->db->query("SELECT p.nom, p.prix, p.image, p.categorie, p.id, t.nom as 'type' FROM $this->table p inner join `type` t on t.id = p.id_type WHERE categorie NOT IN ('impertinentes', 'par couleur', 'uniques')");
        } else {
            $query = $this->db->prepare("SELECT p.nom, p.prix, p.image, p.categorie, p.id, t.nom as 'type' FROM $this->table p inner join `type` t on t.id = p.id_type WHERE categorie = :category");
            $query->execute(['category' => $_GET['category']]);
        }
        $products = $query->fetchAll(\PDO::FETCH_ASSOC);

        return json_encode($products);
    }

    #[Route("/api/products/last", name: "api_products_last", httpMethod: "GET")]
    public function getLast()
    {
        $query = $this->db->query("select p.id, p.nom, p.image, p.prix from $this->table p order by p.id desc limit 4;");
        $products = $query->fetchAll(\PDO::FETCH_ASSOC);

        echo json_encode($products);
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

        $query = $this->db->prepare("INSERT INTO $this->table (nom, prix, taille, image, categorie, id_type, id_couleur) VALUES (:nom, :prix, :taille, :image, :categorie, :id_type, :id_couleur)");

        $query->execute([
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
    public function editProduct(int $id)
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $query = $this->db->prepare("UPDATE $this->table SET nom = :nom, prix = :prix, taille = :taille, image = :image, id_type = :id_type, id_couleur = :id_couleur WHERE id = :id");
        $query->execute([
            'nom' => $data['nom'],
            'prix' => $data['prix'],
            'taille' => $data['taille'],
            'image' => $data['image'],
            'id_type' => $data['id_type'],
            'id_couleur' => $data['id_couleur'],
            'id' => $id,
        ]);

        return json_encode(['message' => 'product edited']);
    }

    #[Route("/api/products/{id}", name: "api_product_delete", httpMethod: "DELETE")]
    public function delete(int $id)
    {
        $query = $this->db->prepare("DELETE FROM $this->table WHERE id = :id");
        $query->execute(['id' => intval($id)]);

        return json_encode(['message' => 'product deleted']);
    }
}