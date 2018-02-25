---
title: PHP caching and APC
path: "/2009-10-09/php-caching-and-apc"
date: "2009-10-09T00:00:00.000Z"
tags:
---
A friend asked me recently about the caching options available to him with PHP on a linux stack. While he had looked into memcached and seen the difference it can make, he had overlooked APC.

APC, or Alternative PHP Cache, not only allows for faster pages through opcode caching, but also since v3.0.0, allows for users to store any kind of data in memory for access between and across all requests. See my example below for a better idea on how to use it.

```php
/* The first argument is the unique key which
 you will use to store some data later.
For globally cached data, the URL could make a good key,
and you could append the user id for user specific data.
The second argument is set to true or false depending
on whether APC finds data at the location,
if we don't find it, we know we need
to (re)generate it. */

$html = apc_fetch("unique_key_url", $success);
if(!$success)
{
	$html = big_and_slow_function();

	/*here the first argument is the key again,
	followed by the data to store and
	finally the time to live period in seconds */

	apc_add("unique_key_url", $html, 180);
}
echo $html;
```

Using a mechanism like this, you can see massive decreases in page load times. The friend I mentioned earlier brought his front page load time down from a number of seconds to low milliseconds.
