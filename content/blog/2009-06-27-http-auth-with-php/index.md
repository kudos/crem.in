---
title: HTTP Auth with PHP
path: "/2009-06-27/http-auth-with-php"
date: "2009-06-27T00:00:00.000Z"
tags:
---

HTTP Auth has a number of practical uses even in complex PHP backed systems. A prime example, and the reason I had looked into it, is web service and API authentication. In this case it is much simpler for the client to provide the details in this manner rather than perform an extra request to grab an authorisation token. A basic example lifted from the PHP manual is below.

```
<?php
if (!isset($_SERVER['PHP_AUTH_USER'])) {
  header('WWW-Authenticate: Basic realm="My Realm"');
  header('HTTP/1.0 401 Unauthorized');
  echo 'Text to send if user hits Cancel button';
  exit;
} else {
  echo "<p>Hello {$_SERVER['PHP_AUTH_USER']}.</p>";
  echo "<p>You entered {$_SERVER['PHP_AUTH_PW']} as your password.</p>";
}
?>
```
