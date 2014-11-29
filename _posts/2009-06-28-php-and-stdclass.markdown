--- 
wordpress_id: 279
layout: post
title: PHP and stdClass
wordpress_url: http://crem.in/?p=279
---
The built in class stdClass can be instantiated manually for creating generic objects which you can then set member variables for, this is useful for passing objects to other functions or methods which expect to take an object as an argument. An even more likely usage is casting an array to an object which takes each value in the array and adds it as a member variable with the name based on the key in the array.

<pre>&lt;?php
$obj = (object) array("foo" => "bar");
echo $obj->foo; // outputs "bar"
?&gt;
</pre>

One place you might get caught out here is trying to directly access numerically indexed values on the object, this breaks PHP's naming convention and does not work correctly even with escaping.

<pre>&lt;?php
$obj = (object) array("foo"=>"bar","foobar");
echo $obj->foo; //outputs "bar"
echo $obj->{0}; //$x->0 would cause a syntax error, this simply causes a notice for being unable to find the variable.
</pre>

