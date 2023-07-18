<?php

namespace App\Controller\Pages;

use App\Controller\AbstractPageController;
use App\Routing\Attribute\Route;

class PageController extends AbstractPageController
{
    #[Route("/", name: "homepage")]
    public function home(): string
    {
        return $this->twig->render('index.html.twig');
    }

    #[Route("/about", name: "about")]
    public function about(): string
    {
        return $this->twig->render('about.html.twig');
    }

    #[Route("/blog", name: "blog")]
    public function blog(): string
    {
        return $this->twig->render('blog.html.twig');
    }

    #[Route("/contact", name: "contact")]
    public function contact(): string
    {
        return $this->twig->render('contact.html.twig');
    }

    #[Route("/couleur", name: "couleur")]
    public function couleur(): string
    {
        return $this->twig->render("couleur.html.twig");
    }

    #[Route("/impertinentes", name: "impertinentes")]
    public function impertinentes(): string
    {
        return $this->twig->render("impertinentes.html.twig");
    }

    #[Route("/month-product", name: "month-product")]
    public function monthProduct(): string
    {
        return $this->twig->render("month-product.html.twig");
    }

    #[Route("/panier", name: "panier")]
    public function panier(): string
    {
        return $this->twig->render("panier.html.twig");
    }

    #[Route("/precieuses", name: "precieuses")]
    public function precieuses(): string
    {
        return $this->twig->render("precieuses.html.twig");
    }

    #[Route("/uniques", name: "uniques")]
    public function uniques(): string
    {
        return $this->twig->render("uniques.html.twig");
    }

}
