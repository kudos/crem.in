--- 
wordpress_id: 19
layout: post
title: Reloading Apache from within PHP
wordpress_url: http://crem.in/?p=19
---
<pre class="code">
&lt;?php
exec('echo "/usr/bin/sudo /etc/init.d/httpd reload" | /usr/bin/at now');
?&gt;
</pre>

There's a couple of steps to follow to get the above code working as Apache runs on port 80, which requires root priviliges to access. These steps are for Redhat/Centos (tested on Centos 5), but can easily be modified for any distro. You should avoid restarting if at all possible. If you absolutely have to, just replace "reload" with "restart" in the instructions below.

* Edit your sudoers file and add the following line ( If you are using suPHP/suexec you'll need to change apache below to your web user ): <code>apache ALL= NOPASSWD: /etc/init.d/httpd reload</code>
* Comment out the following line in your sudoers file <code>Defaults requiretty</code>
* Add the web user to /etc/at.allow to give it access to 'at'.

That's it, you should now be able to reload Apache from within PHP using the code segment provided.

