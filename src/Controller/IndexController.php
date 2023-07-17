<?php

namespace App\Controller;

use App\Routing\Attribute\Route;

class IndexController extends AbstractPageController
{
  #[Route("/", name: "homepage")]
  public function home(): string
  {
    return $this->twig->render('index.html.twig');
  }
}
