<?php
declare(strict_types=1);
require __DIR__ . '/_loader.php';
require $private . '/validation.php';
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Allow: POST'); respond(405, ['error'=>'invalid']); }
if (($_SERVER['HTTP_ORIGIN'] ?? '') !== $config['origin']) respond(403, ['error'=>'csrf']);
if (!str_starts_with(strtolower($_SERVER['CONTENT_TYPE'] ?? ''), 'application/json')) respond(415, ['error'=>'invalid']);
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 16384) respond(413, ['error'=>'invalid']);
$raw = file_get_contents('php://input', false, null, 0, 16385);
if ($raw === false || strlen($raw) > 16384) respond(413, ['error'=>'invalid']);
$payload = json_decode($raw, true);
if (!is_array($payload) || json_last_error() !== JSON_ERROR_NONE) respond(422, ['error'=>'invalid']);
$csrf = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
if (!is_string($csrf) || !isset($_SESSION['csrf']) || ($_SESSION['csrf_expires'] ?? 0) < time() || !hash_equals($_SESSION['csrf'], $csrf)) respond(403, ['error'=>'csrf']);
limit_request('submit', 5, 600, (int)($config['global_limit'] ?? 30));
$fields = validate_contact($payload);
if ($fields) respond(422, ['error'=>'invalid','fields'=>$fields]);
if (($payload['website'] ?? '') !== '') respond(422, ['error'=>'invalid']);
$id=$payload['requestId'];
foreach ($_SESSION['accepted'] ?? [] as $key=>$timestamp) if ($timestamp < time()-1800) unset($_SESSION['accepted'][$key]);
if (isset($_SESSION['accepted'][$id])) respond(200,['ok'=>true,'requestId'=>$id]);
$message = implode("\n", [
    'Nombre: '.trim($payload['name']), 'Correo: '.trim($payload['email']),
    'Empresa: '.trim($payload['company']), 'Servicio: '.$payload['projectType'],
    'Idioma: '.$payload['locale'], 'Privacidad aceptada: sí', 'Versión privacidad: '.$config['privacy_version'],
    'Referencia: '.$id, '', trim($payload['message'])
]);
try {
    if (($config['transport'] ?? '') === 'test' && getenv('BEGAMER_TEST_MODE') === '1' && in_array($_SERVER['REMOTE_ADDR'] ?? '', ['127.0.0.1','::1'], true)) {
        if (getenv('BEGAMER_TEST_FAILURE') === '1') throw new RuntimeException('Transport failure');
        file_put_contents($config['storage'].'/test-deliveries.log', $id."\n", FILE_APPEND | LOCK_EX);
    } else {
        if (!is_file($private.'/vendor/autoload.php')) respond(503,['error'=>'unavailable']);
        require_once $private.'/vendor/autoload.php';
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        $mail->isSMTP(); $mail->Host=$config['smtp_host']; $mail->Port=(int)$config['smtp_port'];
        $mail->SMTPAuth=true; $mail->Username=$config['smtp_user']; $mail->Password=$config['smtp_password'];
        $mail->SMTPSecure=$config['smtp_encryption']; $mail->Timeout=10; $mail->CharSet='UTF-8';
        $mail->setFrom($config['mail_from'], 'BeGamer Agency'); $mail->addAddress($config['mail_to']);
        $mail->addReplyTo(trim($payload['email']), trim($payload['name']));
        $mail->Subject='Nueva consulta BeGamer · '.$payload['projectType'];
        $mail->Body=$message; $mail->isHTML(false); $mail->send();
    }
    $_SESSION['accepted'][$id]=time();
    error_log('begamer contact accepted '.$id);
    respond(200,['ok'=>true,'requestId'=>$id]);
} catch (Throwable $e) {
    $detail=isset($mail)&&$mail->ErrorInfo!==''?$mail->ErrorInfo:$e->getMessage();
    error_log('begamer contact transport_failed '.$id.' '.substr(preg_replace('/\s+/',' ',$detail),0,300));
    respond(503,['error'=>'network','requestId'=>$id]);
}
