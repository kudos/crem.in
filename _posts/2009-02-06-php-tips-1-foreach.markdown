--- 
wordpress_id: 215
layout: post
title: "PHP Tips #1: foreach "
wordpress_url: http://jonathancremin.com/?p=215
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
