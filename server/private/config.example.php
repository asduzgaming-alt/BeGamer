<?php
// Copy to config.php OUTSIDE the web document root. Never commit real values.
return [
 'enabled'=>false,
 'origin'=>'https://begamer.xyz',
 'transport'=>'smtp',
 'smtp_host'=>'', 'smtp_port'=>587, 'smtp_encryption'=>'tls',
 'smtp_user'=>'', 'smtp_password'=>'', 'mail_from'=>'', 'mail_to'=>'',
 'rate_secret'=>'', // Generate at least 32 random bytes, e.g. bin2hex(random_bytes(32)).
 'storage'=>__DIR__.'/storage', 'global_limit'=>30,
 'privacy_version'=>'', // Set when the final policy is approved.
];
