---
path: "/2016-12-02/running-docker-on-ubuntu-with-lightsail"
title: "Running Docker on Ubuntu with Lightsail"
date: "2016-12-02T00:00:00.000Z"
tags:
--- 

Amazon released Lightsail this week, a new entry-level EC2 based VPS service to compete with the likes of Linode and Digital Ocean.

They come with some preset base OS images rather than allowing full customisation via AMIs. To alleviate this you can use "Launch Scripts". It does this using a subset of the functionality from cloud-init The downside to this is a delayed ready time for your server.

I've quickly thrown together a launch script for their Ubuntu 16.04 base image that gets the latest stable Docker installed.

```bash
# Copy and paste this into the "Launch Script" section when creating your server.
sudo apt update
sudo apt install -y linux-image-extra-$(uname -r) linux-image-extra-virtual apt-transport-https ca-certificates
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt update
sudo apt install -y docker-ce
```

You can tail the cloud-init log to watch the output of your script if you ssh in right after it boots.

```bash
$ ssh ubuntu@<your-ip-here>
$ tail -f /var/log/cloud-init-output.log
```
