---
title: "Punkjs — A Dotjs Successor"
path: "/2015-12-06/punkjs-dotjs-successor"
date: "2015-12-06T00:00:00.000Z"
tags:
---

[![](https://raw.githubusercontent.com/kudos/punkjs/master/assets/logo-256.png)](https://github.com/kudos/punkjs)

[Punkjs](https://github.com/kudos/punkjs) is a new Chrome [extension](https://chrome.google.com/webstore/detail/dkjpmglejjkidbgnokkgkiablgbdabpk) and [app](https://chrome.google.com/webstore/detail/ecnapnimgoienbogbgcmchpgjbgeaobk) that I started working on earlier this week.

It's a lot like Defunkt's now unmaintained [dotjs](https://github.com/defunkt/dotjs). It allows you to load local Javascript files into web pages based on the filename. It can load them from a directory of your choosing (like ~/.js) into web pages that match the domain, like google.com.js on www.google.com.

<!-- more -->

Unlike Dotjs, Punkjs doesn't require you to run a local web server, or add self-signed ssl root keys. Dotjs needs to do this to get around the pesky security feature of Chrome extensions that disallows filesystem access.

Punkjs takes another approach. It uses a Chrome app, which *can* access the filesystem, as a sort of bridge to the filesystem for the extension. It is not a web server and doesn't listen on any TCP port. Instead the app and extension use the Chrome runtime messaging API.

"Why not just let the app do all the work if it has filesystem access?" I hear you say. Apps can't access your tabs, only extensions can do that. And here we are.

This does mean installing two things in Chrome instead of one, but I think it's still a big improvement. As a bonus, it's fully cross-platform, supporting Windows, Mac and Linux. I think dotjs unofficially supported Linux, but not Windows.

As for the name, punk is the English phonetic spelling of the Irish word for dot, "ponc". I wanted to call this "Poncjs", but I also didn't want it to be difficult to search for.

If you think there's anything that could be done to improve it, please feel welcome to open an issue or pull request on the [project page](https://github.com/kudos/punkjs).
