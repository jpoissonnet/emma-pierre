<<<<<<< HEAD
<?php

namespace App\Utils;

use FilesystemIterator;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use RecursiveRegexIterator;
use RegexIterator;

class Filesystem
{
    public static function getFqcns(string $baseDir, string $namespacePrefix = ''): array
    {
        $dir = new RecursiveDirectoryIterator($baseDir, FilesystemIterator::SKIP_DOTS | FilesystemIterator::UNIX_PATHS);

        $iterator = new RegexIterator(
            new RecursiveIteratorIterator($dir),
            '/^(.+)(\.php)$/i', // Isolate php extension in $2
            RecursiveRegexIterator::REPLACE
        );

        $iterator->replacement = '$1';
        return array_map(function ($e) use ($namespacePrefix, $baseDir) {
            $cleanedElement = $namespacePrefix . str_replace($baseDir . '/', '', $e);
            return str_replace("/", "\\", $cleanedElement);
        }, iterator_to_array($iterator));
    }
}
=======
<?php

namespace App\Utils;

use FilesystemIterator;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use RecursiveRegexIterator;
use RegexIterator;

class Filesystem
{
    public static function getFqcns(string $baseDir, string $namespacePrefix = ''): array
    {
        $dir = new RecursiveDirectoryIterator($baseDir, FilesystemIterator::SKIP_DOTS | FilesystemIterator::UNIX_PATHS);

        $iterator = new RegexIterator(
            new RecursiveIteratorIterator($dir),
            '/^(.+)(\.php)$/i', // Isolate php extension in $2
            RecursiveRegexIterator::REPLACE
        );

        $iterator->replacement = '$1';
        return array_map(function ($e) use ($namespacePrefix, $baseDir) {
            $cleanedElement = $namespacePrefix . str_replace($baseDir . '/', '', $e);
            return str_replace("/", "\\", $cleanedElement);
        }, iterator_to_array($iterator));
    }
}
>>>>>>> c776871cd893654b87470ea70bdec52735825c23
