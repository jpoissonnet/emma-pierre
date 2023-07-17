<?php

namespace App\Controller\Api;

class ProductController extends BaseController
{
    const TABLE = 'PRODUCT';
    public function __construct()
    {
        parent::__construct();
    }

    public function getAll()
    {
        $query = $this->db->query('SELECT * FROM $TABLE');
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

    public function getByColor($color)
    {
        $query = $this->db->prepare('SELECT * FROM $TABLE JOIN COULEUR ON PRODUCT.id_couleur = COLOR.id WHERE COLOR.nom = :color');
        $query->execute(['color' => $color]);
        $product = $query->fetch(\PDO::FETCH_ASSOC);

        echo json_encode($product);
    }

    public function getByType($type) {
        $query = $this->db->prepare('SELECT * FROM $TABLE JOIN TYPE ON PRODUCT.id_type = TYPE.id WHERE TYPE.nom = :type');
        $query->execute(['type' => $type]);
        $product = $query->fetch(\PDO::FETCH_ASSOC);

        echo json_encode($product);
    }

    public function getByCategory($category) {
        $query = $this->db->prepare('SELECT * FROM $TABLE JOIN CATEGORIE ON PRODUCT.id_categorie = CATEGORIE.id WHERE CATEGORIE.nom = :category');
        $query->execute(['category' => $category]);
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