<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
$private = getenv('BEGAMER_PRIVATE_DIR') ?: dirname(__DIR__, 2) . '/begamer-private';
if (!is_file($private . '/bootstrap.php')) {
    http_response_code(503); echo json_encode(['error' => 'unavailable']); exit;
}
require $private . '/bootstrap.php';
