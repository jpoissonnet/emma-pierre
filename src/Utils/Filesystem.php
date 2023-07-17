<?php

namespace App\Utils;

class Filesystem
{
  public static function getClassNames(string $dir): array
  {
    $files = glob($dir, GLOB_BRACE);

    return array_map(fn ($filename) => pathinfo($filename, PATHINFO_FILENAME), $files);
  }
}
