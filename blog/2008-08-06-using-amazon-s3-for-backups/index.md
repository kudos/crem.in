---
title: Using Amazon S3 for backups
path: "/2008-08-06/using-amazon-s3-for-backups"
date: "2008-08-06T00:00:00.000Z"
tags:
---
<p>It became clear early on in the planning stages of our current project that we were going to need a reliable backup solution. We discussed backing up to another server we already have in the datacenter and backing up to a server in another datacenter. The former was not redundant enough for our liking and the latter would introduce extra costs we could do without so early on.</p><p>Enter <a href="http://aws.amazon.com/s3">Amazon S3</a>. You pay for as little as you need and it expands as you do. The S3 docs point to <a href="http://undesigned.org.za/2007/10/22/amazon-s3-php-class">undesigned's</a> PHP5 library using cURL. Perfect. 15 minutes and about 10 lines of code later we were archiving and backing up user content to S3.</p>
