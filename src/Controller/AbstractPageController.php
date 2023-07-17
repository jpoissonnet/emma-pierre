<?php

namespace App\Controller;

abstract class AbstractPageController
{
    public function __construct(
        protected \Twig\Environment $twig
    ) {
    }
}
