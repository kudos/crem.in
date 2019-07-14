---
title: "Command-line Downloading on Hostr"
path: "/2014-12-16/command-line-downloading-on-hostr"
date: "2014-12-16T00:00:00.000Z"
tags:
---

If you have no idea what a command-line is, don't worry, this feature isn't something you'd be interested in anyway.

You can now download files on Hostr from the command-line using `wget` and `curl`. Perfect for when you're on a remote server and need to grab a file from Hostr.

![Command-line downloading demonstration](./cli.gif)

Here are some examples:

```bash
curl -JO https://hostr.co/p4l1wZlvTm27
```

```bash
wget --content-disposition https://hostr.co/p4l1wZlvTm27
```

Passing `-JO` for `curl` `--content-disposition` and for `wget` tell them to output the file using the remote header filename, otherwise you'll end up with a file called `p4l1wZlvTm27` instead of `test.txt`.

Bear in mind that you're bypassing our malware warnings when you do this, so you should open the link in a browser somewhere first. Files we're sure are just malware are removed, but less clear cut cases carry warnings instead.
