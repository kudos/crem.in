---
title: "PHP Tips: foreach "
path: "/2009-02-06/php-tips-foreach"
date: "2009-02-06T00:00:00.000Z"
tags:
---
I love foreach loops for their simplicity and readability, but they're a bit quirky when it comes to PHP. Here's a couple of tips I've picked up.

The following are functionally the same:

```php
<?php
$arr = array("one", "two", "three");
reset($arr);
while (list($key, $value) = each($arr)) {
  echo "Key: $key; Value: $value\n";
}
foreach ($arr as $key => $value) {
  echo "Key: $key; Value: $value\n";
}
?>
```

Ever want to drive straight into a foreach without checking that the array has elements?

```php
<?php
$non_array = null;
foreach ((array) $non_array as $key => $value) {
  echo "Key: $key; Value: $value\n";
}
?>
```
