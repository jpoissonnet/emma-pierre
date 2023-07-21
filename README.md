# Sciences-U - B3 IW - PHP MVC - 2023

Participants: Kenza SCHULER, Brahim, Jules POISSONNET, Cihan KAFADAR

## Démarrage

### Composer

Pour récupérer les dépendances déclarées dans `composer.json` et générer l'autoloader PSR-4, exécuter la commande suivante :

```bash
composer install
```

### Démarrer l'application

Commande :

```bash
composer start
```

## Base de données

### DB Configuration

La configuration de la base de données doit être inscrite dans un fichier `.env.local`, sur le modèle du fichier `.env`.

### Script

Le script d'initilaisation de la base de données se touve dans le fichier `script/bdd.sql`. Il suffit de l'executer pour avoir une base de données fonctionnelle

### Rôle

Il existe 2 rôles pour faire utiliiser et administrer le site web:
- `Admin`: permet d'accéder à la console administrateur pour gérer les produits, user et commandes
- `User`: permet d'utiliser le site avec le panier sans avoir le droit à la console admin

## Architecture de l'application

### Front

Durant le migration de l'application du Challenge Stack du S1, nous avons pris la décision de servir les pages depuis l'applicaiton PHP. Pour cela, nous avons utilisé twig qui permet de rendre les pages.

### Back

Concernant le back nous avons décidé de construire par dessus le MVC que nous avions mis en place en cours de PHP. Cependant nous avons mis en place une API pour mettre la communication entre le client et le serveur.

La communication se fait au travers de fetch depuis le front end

## API

## Routing

Le Routing de l'application reprend un modèle hybride entre ce que fait Symphony et Angular.

### Les routes

Les routes sont définis dans le fichier `/Api/ApiController.php`, la définition d'une route prend en compte sa route, son nom, sa méthode:

```php
    #[Route("/inscription", name: "inscription")]
    public function inscription(): string
    {
        return $this->twig->render("inscription.html.twig");
    }
```

### Le Guard

Le Guard se définit toujours au niveau du fichier `/Api/ApiController.php`, un attribut spécial `Guard` permet de définir le rôle nécessaire pour accéder à la dite route:

```php
    #[Guard(role: "admin")]
    #[Route("/admin", name: "admin-console")]
    public function admin(): string
    {
        return $this->twig->render("admin.html.twig");
    }
```


## Controllers

###  Les Controllers

Les controllers sont définis dans le dossier `/Controller`, ils sont tous hérités de la classe `AbstractController` qui permet de définir les méthodes de bases pour les controllers.

###  Twig

Les pages sont rendues grâce à Twig, les templates sont définis dans le dossier `/templates`, les templates sont définis en 2 parties:

- `*.html.twig`: le template de la page en question
- `/components/*js`: les web-components réutilisés dans les pages twigs


