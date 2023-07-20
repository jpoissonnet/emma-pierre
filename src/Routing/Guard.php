<?php

namespace App\Routing;

use App\Controller\Api\SessionController;

class Guard
{
    public function check(string $guardRole)
    {
        $sessionController = new SessionController();
        $role = $sessionController->getRole();
        if ($role === "admin" || $role === $guardRole) {
            return true;
        } else {
            header('Content-Type: application/json', true, 403);
            die(json_encode([
                'message' => 'Forbidden'
            ]));
        }

    }
}