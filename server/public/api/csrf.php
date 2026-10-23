<?php
declare(strict_types=1);
require __DIR__ . '/_loader.php';
if ($_SERVER['REQUEST_METHOD'] !== 'GET') { header('Allow: GET'); respond(405, ['error'=>'invalid']); }
if (($_SERVER['HTTP_SEC_FETCH_SITE'] ?? '') === 'cross-site') respond(403, ['error'=>'csrf']);
if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] !== $config['origin']) respond(403, ['error'=>'csrf']);
limit_request('token', 30, 300, 300);
if (!isset($_SESSION['csrf']) || ($_SESSION['csrf_expires'] ?? 0) < time()) {
    $_SESSION['csrf'] = bin2hex(random_bytes(32)); $_SESSION['csrf_expires'] = time() + 1800;
}
respond(200, ['token'=>$_SESSION['csrf']]);
