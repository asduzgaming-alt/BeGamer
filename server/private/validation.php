<?php
declare(strict_types=1);
function validate_contact(array $p):array {
    $errors=[];$allowed=['name','email','company','projectType','message','privacy','website','requestId','locale'];
    foreach(array_keys($p) as $key)if(!in_array($key,$allowed,true))$errors['form']='invalid';
    foreach(['name'=>[2,100],'email'=>[3,254],'company'=>[2,150],'message'=>[20,3000]] as $key=>$range){
        if(!isset($p[$key])||!is_string($p[$key])||trim($p[$key])===''){$errors[$key]='required';continue;}
        $value=trim($p[$key]);$length=mb_strlen($value,'UTF-8');
        if($length<$range[0]||$length>$range[1])$errors[$key]='length';
        if(preg_match('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/',$value))$errors[$key]='invalid';
    }
    if(isset($p['email'])&&is_string($p['email'])&&(!filter_var(trim($p['email']),FILTER_VALIDATE_EMAIL)||preg_match('/[\r\n]/',$p['email'])))$errors['email']='email';
    if(isset($p['name'])&&is_string($p['name'])&&preg_match('/[\r\n]/',$p['name']))$errors['name']='invalid';
    if(!in_array($p['projectType']??null,['corporate-gaming','schools','game-building','live-esports','other'],true))$errors['projectType']='required';
    if(($p['privacy']??false)!==true)$errors['privacy']='privacy';
    if(!is_string($p['requestId']??null)||!preg_match('/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i',$p['requestId']))$errors['form']='invalid';
    if(!in_array($p['locale']??null,['es','en'],true))$errors['form']='invalid';
    if(!is_string($p['website']??'')||strlen($p['website']??'')>200)$errors['form']='invalid';
    return $errors;
}
