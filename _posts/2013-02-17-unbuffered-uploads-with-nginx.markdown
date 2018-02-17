--- 
layout: post
title: "Unbuffered Uploads with Nginx"
---

Ok, the title is a little misleading. It's [not actually possible](http://trac.nginx.org/nginx/ticket/251) to directly stream uploads to backends like http proxies, or CGIs without having them buffered by Nginx. This makes sense for worker type backends where a few slow uploads could tie up all of your workers. However it does not make sense for event loop based backends (think Node.js or Tornado) where the process simply does other things while waiting for more data.<!-- more -->

If you want to operate on or react to uploads as they come in to the app, you might need the data to stream directly to it. Maybe you want to mark a file as being locked as soon as someone starts to upload to it, or you want to inform third parties how much longer they will have to wait for large files.

[Tengine](http://tengine.taobao.org/) is a fork of Nginx by Chinese internet shopping site Taobao. Amongst the many additions to the codebase is [unbuffered uploads](http://tengine.taobao.org/document/http_core.html). Just set `proxy_request_buffering` to `off` in your nginx config and uploads will start streaming directly to your app, instead of waiting for the whole file to be received first. This parameter is also available in Nginx, but it is ignored when a file is being uploaded.

I have created a [Homebrew tap for Tengine](https://github.com/kudos/homebrew-tengine) which is almost identical to the Nginx Homebrew formula. There's also a [PPA for the latest Tengine](https://launchpad.net/~eric-freeyoung/+archive/tengine) on Ubuntu although I'm not sure how trustworthy that is.