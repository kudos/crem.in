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
sudo apt-key adv --keyserver hkp://ha.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
echo "deb https://apt.dockerproject.org/repo ubuntu-xenial main" | sudo tee /etc/apt/sources.list.d/docker.list
sudo apt update
sudo apt install -y docker-engine
```

You can tail the cloud-init log to watch the output of your script if you ssh in right after it boots.

```bash
$ ssh ubuntu@<your-ip-here>
$ tail -f /var/log/cloud-init-output.log
```
