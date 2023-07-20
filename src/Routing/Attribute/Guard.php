<?php

namespace App\Routing\Attribute;

use Attribute;

#[Attribute]
class Guard
{
    public function __construct(
        private string $role
    )
    {
    }

    public function getGuardRole(): string
    {
        return $this->role;
    }

}
