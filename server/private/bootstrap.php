<?php
declare(strict_types=1);
function respond(int $status, array $data): void {http_response_code($status);echo json_encode($data,JSON_UNESCAPED_UNICODE);exit;}
set_exception_handler(function(Throwable $e):void{error_log('begamer internal_error');respond(503,['error'=>'unavailable']);});
$configFile=getenv('BEGAMER_CONFIG') ?: __DIR__.'/config.php';
if (!is_file($configFile)) respond(503,['error'=>'unavailable']);
$config=require $configFile;
if (!is_array($config) || empty($config['enabled']) || empty($config['origin']) || strlen($config['rate_secret'] ?? '')<32 || empty($config['storage']) || empty($config['privacy_version'])) respond(503,['error'=>'unavailable']);
$test=($config['transport']??'')==='test'&&getenv('BEGAMER_TEST_MODE')==='1';
if (!$test) {
    foreach(['smtp_host','smtp_port','smtp_user','smtp_password','mail_from','mail_to','smtp_encryption'] as $key) if(empty($config[$key])) respond(503,['error'=>'unavailable']);
    if (!filter_var($config['mail_from'],FILTER_VALIDATE_EMAIL)||!filter_var($config['mail_to'],FILTER_VALIDATE_EMAIL)||!in_array($config['smtp_encryption'],['tls','ssl'],true)) respond(503,['error'=>'unavailable']);
    if (!str_starts_with($config['origin'],'https://')) respond(503,['error'=>'unavailable']);
}
if (!is_dir($config['storage']) && !mkdir($config['storage'],0700,true)) respond(503,['error'=>'unavailable']);
ini_set('session.use_strict_mode','1');
session_name('begamer_session');
session_set_cookie_params(['lifetime'=>0,'path'=>'/api/','secure'=>str_starts_with($config['origin'],'https://'),'httponly'=>true,'samesite'=>'Lax']);
session_start();
function limit_request(string $scope,int $limit,int $window,int $globalLimit):void {
    global $config;
    $fp=fopen($config['storage'].'/rate-limits.json','c+');
    if (!$fp || !flock($fp,LOCK_EX)) respond(503,['error'=>'unavailable']);
    $raw=stream_get_contents($fp);$state=$raw?json_decode($raw,true):[];if(!is_array($state))$state=[];
    $now=time();foreach($state as $key=>$entry)if(($entry['until']??0)<=$now)unset($state[$key]);
    $ip=hash_hmac('sha256',$_SERVER['REMOTE_ADDR']??'unknown',$config['rate_secret']);
    $keys=[$scope.':'.$ip=>$limit,$scope.':global'=>$globalLimit];$blocked=false;
    foreach($keys as $key=>$max){$entry=$state[$key]??['count'=>0,'until'=>$now+$window];if($entry['count']>=$max)$blocked=true;$entry['count']++;$state[$key]=$entry;}
    rewind($fp);ftruncate($fp,0);fwrite($fp,json_encode($state));fflush($fp);flock($fp,LOCK_UN);fclose($fp);
    if($blocked){header('Retry-After: '.$window);respond(429,['error'=>'rate']);}
}
