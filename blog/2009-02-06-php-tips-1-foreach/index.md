---
title: "PHP Tips: foreach "
path: "/2009-02-06/php-tips-foreach"
date: "2009-02-06T00:00:00.000Z"
tags:
---
I love foreach loops for their simplicity and readability, but they're a bit quirky when it comes to PHP. Here's a couple of tips I've picked up.

<h3>The following are functionally the same:</h3>
<pre>&lt;?php
$arr = array("one", "two", "three");
reset($arr);
while (list($key, $value) = each($arr)) {
&nbsp;&nbsp;&nbsp;&nbsp;echo "Key: $key; Value: $value\n";
}
foreach ($arr as $key => $value) {
&nbsp;&nbsp;&nbsp;&nbsp;echo "Key: $key; Value: $value\n";
}
?&gt;
</pre>

<h3>Ever want to drive straight into a foreach without checking that the array has elements?</h3>
<pre>&lt;?php
$non_array = null;
foreach ((array) $non_array as $key => $value) {
&nbsp;&nbsp;&nbsp;&nbsp;echo "Key: $key; Value: $value\n";
}
?&gt;
</pre>
