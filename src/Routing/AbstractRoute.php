<?php

namespace App\Routing;

abstract class AbstractRoute
{
    protected string $name;
    protected string $path;
    protected string $httpMethod;
    protected string $guardRole;

    public function __construct(
        string $path,
        string $httpMethod = "GET",
        string $name = "default",
        string $guardRole = "public"
    ) {
        $this->path = $path;
        $this->httpMethod = $httpMethod;
        $this->name = $name;
        $this->guardRole = $guardRole;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPath(): string
    {
        return $this->path;
    }

    public function setPath(string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getHttpMethod(): string
    {
        return $this->httpMethod;
    }

    public function setHttpMethod(string $httpMethod): self
    {
        $this->httpMethod = $httpMethod;

        return $this;
    }

    public function getGuardRole(): string
    {
        return $this->guardRole;
    }

    public function setGuardRole(string $guardRole): self
    {
        $this->guardRole = $guardRole;

        return $this;
    }
}