title: output_buffering详细介绍
tags:
  - htm
  - php
  - 原理
id: 257
categories:
  - 学习笔记
date: 2010-01-01 01:07:36
---

今天转到国外linux主机的博客，偶尔出现Cannot modify header information ..... 错误，上网查找解决办法。

主要的造成的原因和解决办法如下：

1.php.ini配置问题，解决办法：打开 php.ini 然后把 output_buffering 设为 on ,重启appache即可。

2.使用windows记事本编辑的wp-config文件造成(UTF8编码和BOM冲突)，解决办法：使用Notepad++、UltraEdit、EditPlus等编辑器编辑文件保存（用windows记事本直接保存为ANSI编码也可以）。

于是顺便看了看“output_buffering”究竟是做什么的，引用如下：<!--more-->

HTTP Header
为什么要使用Output Buffering技术
Output Buffering的<span style="text-decoration: underline;">**工作**</span>原理
基本用法
高级用法
使事情更为简单
哈哈，我成功了
我个人认为，Output buffering是比较纯粹的<span style="text-decoration: underline;">**PHP**</span>4.0特征。尽管从概念上看来相当简单，但是output buffering功能非常强大，能使开发者更容易地开发高级而有效的程序。
本文将介绍HTTP header，以及output buffering如何帮助您处理HTTP header，并介绍了output buffering的一些高级用法。
HTTP Header[HTTP 标题]
对 于使用HTTP 协议建立的每个请求，Web服务器产生的响应通常包括两个部分 – 标题和主体。例如，如果在Web服务器的文档根目录下有一个小文本文件，叫做example.txt，文件中包含文本Hello, world!，那么对此文件的HTTP 请求响应如下所示：
HTTP/1.1 200 OK
Date: Sat, 02 Sep 2000 21:40:08 GMT
Server: Apache/1.3.11 (Unix) mod_macro/1.1.1 PHP/4.0.2-dev
Last-Modified: Sat, 02 Sep 2000 21:39:49 GMT
ETag: "12600b-e-39b173a5"
Accept-Ranges: bytes
Content-Length: 14
Connection: close
Content-Type: text/plain
Hello, world!
这 个请求中的第一部分（就是较多的那部分）就是HTTP header。虽然用户在浏览器中看不到HTTP header，但它包含了用于浏览器的信息，例如文档内容类型，使用的协议版本，文档的最后更改日期等等。HTTP header并没有太多的规则，通常情况下，它的格式如下：
Field: Value[字段：值]
必须用空行将它们和文档主体分开。
可以从PHP脚本添加或更改此HTTP header的信息。例如，可以使用 header() 函数：
header("Location: http://www.php.net/");     // 重定向到 http://www.php.net/
也可以使用 SetCookie() 函数：
SetCookie("foo", "bar");
你可能会知道HTTP cookies是使用 HTTP headers 来实现的。例如，以下PHP文件的 HTTP 请求响应
&lt;?php
SetCookie("foo", "bar");
print "Set cookie.";
?&gt;
将会是这样的：
HTTP/1.1 200 OK
Date: Sat, 02 Sep 2000 21:43:02 GMT
Server: Apache/1.3.11 (Unix) mod_macro/1.1.1<span style="color: #6665cb;">PHP</span>/4.0.2-dev
X-Powered-By: PHP/4.0.2-dev
Set-Cookie: foo=bar
Connection: close
Content-Type: text/html
Set cookie.
浏览器读取从服务器返回的 HTTP header，知道送来了一个叫做 foo 的 cookie (在这里是一个 session cookie)，它的值是 bar。
为什么要使用Output Buffering技术
早 在PHP/FI 2.0时就很明显需要output buffering技术了。如果你使用过这种版本的PHP，那么可能还记得经常会碰到 Oops, SetCookie called after header has been sent 这个错误消息，并使你捎头抓耳，也弄不清是什么原因。
如 果你已使用过PHP的最新版本 -- PHP 3.0 甚至 PHP 4.0 -- 那么你会知道这个错误消息: Oops, php_set_cookie called after header has been sent。或者，你在试图调用 PHP 的 header() 函数时会遇到 Cannot add header information - headers already sent 消息。一般来说，output buffering技术用户避免这些烦人的错误消息，同时开发人员也可用于高级的用途。
这些错误是什么时候产生的呢？如果你在已经发送了HTTP header之后试图添加或修改标题信息，以及在文档主体和标题之间缺少空行时，就会产生这些错误消息。为了理解这是如何产生的，让我们来看看PHP是如何处理HTTP header输出和主体输出的。
脚本开始执行时，它可以同时发送header(标题)信息和主体信息。
Header信息(来自 header() 或 SetCookie() 函数)并不会立即发送，相反，它被保存到一个列表中。
这样就可以允许你修改标题信息，包括缺省的标题(例如 Content-Type 标题）。但是，一旦脚本发送了任何非标题的输出（例如，使用<span style="color: #6665cb;"><span style="text-decoration: underline;">**HTML**</span></span><span style="text-decoration: underline;">**代码**</span>块或 print() 调用)，那么PHP就必须先发送所有的标题，然后再送出空行，终止 HTTP header，而在此之后才会继续发送主体数据。从这时开始，任何添加或修改标题信息的试图都是不允许的，并会发送上述的错误消息之一。
虽然这并不会引起多大的问题，有时候只是在发出任何输入之前终止HTTP header，从而引起脚本逻辑的复杂化而已。Output buffering技术可以解决这些问题。
Output Buffering的工作原理
启用output buffering时，在脚本发送输出时，<span style="color: #6665cb;">PHP</span>并 不发送HTTP header。相反，它将此输出通过管道（pipe）输入到动态增加的缓存中（只能在PHP 4.0中使用，它具有中央化的输出机制）。你仍然可以修改，添加标题行，或者设置cookie，因为标题实际上并没有发送。最简单的情况是，当脚本终止 时，PHP将自动发送HTTP header到浏览器，然后再发送输出缓冲中的内容。这简单吧。
基本用法
可以使用下面的四个函数，它们可以帮助你控制output buffering：
ob_start()
启用output buffering机制。
Output buffering支持多层次 -- 例如，可以多次调用 ob_start() 函数。

ob_end_flush()
发送output buffer（输出缓冲）并禁用output buffering机制。

ob_end_clean()
清除output buffer但不发送，并禁用output buffering。

ob_get_contents()
将当前的output buffer返回成一个字符串。允许你处理脚本发出的任何输出。

此外，可以启用 php.ini 中的 output_buffering 指令。如果启用了此指令，那么每个PHP脚本都相当于一开始就调用了ob_start()函数。
Example 1
&lt;?php ob_start(); ?&gt;
&lt;h1&gt;Example 1&lt;/h1&gt;
&lt;?php
print "Hello, $user ";
SetCookie("Wow", "This cookie has been set even though we've already emitted output!");
?&gt;
这里，尽管你已发送了输出(<span style="color: #6665cb;">HTML</span>代 码块中和 print 语句中)，也可以使用 SetCookie() 调用，而不会出错，真的要感谢output buffering机制。请注意使用output buffering机制用于这种目的会引起一定程度上的性能损失，因此最好缺省情况下不要启用此机制。但是，对于复杂一些的脚本，output buffering可以简化逻辑性。
Example 2
&lt;?php
ob_start();
print "Here's a pretty dumb way to calculate the length of a string.";
$length = strlen(ob_get_buffer());
ob_end_clean();
?&gt;
这个例子显示了一个效率很低的确定字符串长度的<span style="text-decoration: underline;">**方法**</span>。它不是简单的使用strlen()函数处理，而是先启用 output buffering 机制，将字符串打印出来,然后再确定output buffer的长度。最后清除output buffer(并没有发送），然后禁用output buffering机制。

原文地址：[http://hi.baidu.com/pingfandexiake/blog/item/3673eac3fbf2715db219a876.html](http://hi.baidu.com/pingfandexiake/blog/item/3673eac3fbf2715db219a876.html)