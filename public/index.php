<?php
require_once __DIR__ . '/../vendor/autoload.php';

if (
    php_sapi_name() !== 'cli' &&
    preg_match('/\.(ico|png|jpg|jpeg|css|js|gif)/', $_SERVER["REQUEST_URI"])
) {
    return false;
}


use App\DependencyInjection\Container;
use App\Routing\RouteNotFoundException;
use App\Routing\Router;
use Symfony\Component\Dotenv\Dotenv;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$dotenv = new Dotenv();
$dotenv->loadEnv(__DIR__ . '/../.env');

// DB
[
    'DB_HOST' => $host,
    'DB_PORT' => $port,
    'DB_NAME' => $dbname,
    'DB_CHARSET' => $charset,
    'DB_USER' => $user,
    'DB_PASSWORD' => $password
] = $_ENV;

$dsn = "mysql:dbname=$dbname;host=$host:$port;charset=$charset";
/*
try {
  $pdo = new PDO($dsn, $user, $password);
  var_dump($pdo);
} catch (PDOException $ex) {
  echo "Erreur lors de la connexion à la base de données : " . $ex->getMessage();
  exit;
}*/

// Twig
$loader = new FilesystemLoader(__DIR__ . '/../templates/');
$twig = new Environment($loader, [
    'debug' => $_ENV['APP_ENV'] === 'dev',
    'cache' => __DIR__ . '/../var/twig/',
]);

$serviceContainer = new Container();
$serviceContainer
    ->set(Environment::class, $twig);

$router = new Router($serviceContainer);
$router->registerRoutes();

try {
    $router->execute($_SERVER['REQUEST_URI'], $_SERVER['REQUEST_METHOD']);
} catch (RouteNotFoundException $ex) {
    http_response_code(404);
    echo "Page not found";
}