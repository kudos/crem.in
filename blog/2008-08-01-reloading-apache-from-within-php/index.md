---
title: Reloading Apache from within PHP
path: "/2008-08-01/reloading-apache-from-within-php"
date: "2008-08-01T00:00:00.000Z"
tags:
---

```php
<?php
exec('echo "/usr/bin/sudo /etc/init.d/httpd reload" | /usr/bin/at now');
?>
```

There's a couple of steps to follow to get the above code working as Apache runs on port 80, which requires root priviliges to access. These steps are for Redhat/Centos (tested on Centos 5), but can easily be modified for any distro. You should avoid restarting if at all possible. If you absolutely have to, just replace "reload" with "restart" in the instructions below.

* Edit your sudoers file and add the following line (if you are using suPHP/suexec you'll need to change apache to your web user)
```
apache ALL= NOPASSWD: /etc/init.d/httpd reload
```
* Comment out the following line in your sudoers file
```
Defaults requiretty
```
* Add the web user to `/etc/at.allow` to give it access to 'at'.

That's it, you should now be able to reload Apache from within PHP using the code segment provided.

