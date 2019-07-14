---
title: Reasons I use Kohana over Codeigniter
path: "/2008-12-01/5-reasons-i-use-kohana-over-codeigniter"
date: "2008-12-01T00:00:00.000Z"
tags:
---
I orginally discovered [Codeigniter](http://codeigniter.com) about 18 months ago and I was delighted to find a PHP framework that behaved largely intuitively to me. As I got used to its quirks and adapted it to better suit me, I happened across a forked project called Kohana. Having built a number of applications with [Kohana](http://kohanaphp.com), I have yet to feel the need to modify its default behaviour in any significant way. It just fits well with me.

These features are my favourite benefits of using Kohana over Codeigniter:

1. Seperation of system files and static content by default. No extra work is needed to seperate your application files from the framework system files
2. Static classes for helpers instead of functions, allowing logical grouping of utility functions.
3. Does not break $_GET variables. I don't care what the CI proponents say, breaking $_GET is unacceptable.
4. The session driver can optionally use native sessions. An application on it's own secure enviroment doesn't need to worry about native session security like you do on shared servers.
5. Supports only PHP5+; PHP4 is dead, and PHP6 is not too far off, it's time to cast off the dead weight.

There's plenty more things I like better in Kohana, but the 5 above will have to do for now.

Codeigniter does have one advantage, better documentation, but as Kohana matures so should its documentation.
