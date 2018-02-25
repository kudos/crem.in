---
title: HTTP Auth with PHP
path: "/2009-06-27/http-auth-with-php"
date: "2009-06-27T00:00:00.000Z"
tags:
---
HTTP Auth has a number of practical uses even in complex PHP backed systems. A prime example, and the reason I had looked into it, is web service and API authentication. In this case it is much simpler for the client to provide the details in this manner rather than perform an extra request to grab an authorisation token. A basic example lifted from the PHP manual is below.

<pre><code>&lt;?php
if (!isset($_SERVER['PHP_AUTH_USER'])) {
&nbsp;&nbsp;&nbsp;&nbsp;header('WWW-Authenticate: Basic realm="My Realm"');
&nbsp;&nbsp;&nbsp;&nbsp;header('HTTP/1.0 401 Unauthorized');
&nbsp;&nbsp;&nbsp;&nbsp;echo 'Text to send if user hits Cancel button';
&nbsp;&nbsp;&nbsp;&nbsp;exit;
} else {
&nbsp;&nbsp;&nbsp;&nbsp;echo "&lt;p&gt;Hello {$_SERVER['PHP_AUTH_USER']}.&lt;/p&gt;";
&nbsp;&nbsp;&nbsp;&nbsp;echo "&lt;p&gt;You entered {$_SERVER['PHP_AUTH_PW']} as your password.&lt;/p&gt;";
}
?&gt;</code></pre>
