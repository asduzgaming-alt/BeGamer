<?php
// Local integration testing only. Never copy this router into the public release.
$url=parse_url($_SERVER['REQUEST_URI'],PHP_URL_PATH);
if(str_starts_with($url,'/api/')){
 $file=realpath(__DIR__.'/../server/public'.$url);$base=realpath(__DIR__.'/../server/public/api');
 if($file&&str_starts_with($file,$base.DIRECTORY_SEPARATOR)&&is_file($file)){require $file;return;}
}
http_response_code(404);header('Content-Type: application/json');echo json_encode(['error'=>'not_found']);
