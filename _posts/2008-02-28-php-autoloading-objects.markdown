--- 
wordpress_id: 9
layout: post
title: "PHP: Autoloading Objects"
wordpress_url: http://crem.in/2008/02/28/php-autoloading-objects/
---
Having only relatively recently shifting completely to PHP5 and OO development, there’s a few very useful things that slipped past me. One of these is Autoloading Objects, using a special __autoload function you can include the class file just in time for the first object creation. If you don’t create an instance of a class, you don’t waste resources by having PHP parse code it’s not going to use. What’s more, you can be less mindful of what your including on a given page, you can let autoload take care of it.

<code>&lt;?php
function __autoload($class_name)
{
  require_once $class_name . '.php';
}
$obj  = new MyClass1();
$obj2 = new MyClass2();
?&gt;</code>
