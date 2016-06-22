title: PHP函数setcookie写入重名cookie
tags:
  - cookie
  - php
id: 2250
categories:
  - PHP
date: 2013-01-06 14:09:27
---

[caption id="" align="alignnone" width="611"][![测试代码](http://a.kainy.cn/201212/setcookie%E5%87%BD%E6%95%B0%E5%86%99%E5%85%A5cookie%E7%9A%84%E9%A1%BA%E5%BA%8F-2012-12-03_114831.png)](http://a.kainy.cn/201212/setcookie%E5%87%BD%E6%95%B0%E5%86%99%E5%85%A5cookie%E7%9A%84%E9%A1%BA%E5%BA%8F-2012-12-03_114831.png) 测试代码[/caption]

<!--more-->

测试代码如上图

[caption id="" align="alignnone" width="445"][![执行结果](http://a.kainy.cn/201212/%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C-2012-12-03_115101.png)](http://a.kainy.cn/201212/%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C-2012-12-03_115101.png) 执行结果[/caption]

执行结果如上图

setcookie函数介绍
> The setcookie() function sends an HTTP cookie to a client.
> 
> A cookie is a variable, sent by the server to the browser. A cookie is typically a small text file that the server embeds on the user's computer. Each time the same computer requests a page with a browser, it will send the cookie too.
> 
> The name of the cookie is automatically assigned to a variable of the same name. For example, if a cookie was sent with the name "user", a variable is automatically created called $user, containing the cookie value.
> 
> A cookie must be assigned before any other output is sent to the client.
> 
> This function returns TRUE on success or FALSE on failure.
> 
> W3school
分析：

1.  同一域（不包括子域）上，cookie重名，则后定义的覆盖之前的；
2.  非同域，则先写入的先发送
所以

由于通过子域名“l.cuobian.com”访问，所以根域和子域的cookie均发送。至于为什么只显示先接收到（先定义）的cookie值，可能和$_COOKIE读取机制有关，

*   第一代码块中，同域（不定义则默认为受访域名）名为“order”的cookie 覆盖后显示“latter”；
*   第二代码块中，名为“domain”的cookie “cuobian.com”先定义先发送，先被接收被显示；
*   第三代码块中，同域覆盖后等效于只运行后两行，“l.cuobian.com”先定义故被显示。
<div>使用$_SERVER['HTTP_COOKIE'] 可以验证，确实接收到了同名不同域的两个cookie值。</div>
[caption id="" align="alignnone" width="654"][![通过$_SERVER[](http://a.kainy.cn/201212/%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C1-2012-12-03_121712.png)](http://a.kainy.cn/201212/%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C1-2012-12-03_121712.png) 通过$_SERVER['HTTP_COOKIE'] 可以验证的执行结果[/caption]