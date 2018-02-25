---
title: Read Only Samba Shares on OS X Leopard
path: "/2008-08-28/read-only-samba-shares-on-os-x-leopard"
date: "2008-08-28T00:00:00.000Z"
tags:
---
Currently on my iMac I have a couple of external disks attached that I want to share to the rest of my house. The problem though is that when sharing through Samba I can't make the shares read only, OS X pretends to accept the permissions change in preferences &gt; sharing, but just changes it right back. After a little bit of poking I've got read only shares working.

Open a terminal and replacing {sharename} with the name of the share you set up in Preferences, type:
<code>sudo nano /var/samba/shares/{sharename}</code>

Now append the following line to the end of the file and hit ctrl-o to save.
<code>read only = yes</code>

Finally, reload the Samba config files using this:
<code>sudo /usr/sbin/smbd reload</code>
