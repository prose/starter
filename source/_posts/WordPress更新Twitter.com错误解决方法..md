title: WordPress更新Twitter.com错误解决方法.
tags:
  - Twitter
  - WordPress
  - 方法
id: 77
categories:
  - 建站❤编程
date: 2009-12-26 23:31:33
---

由于国内Twitter.com封锁，WordPress的Twitter.com更新错误，如下

**Warning: fsockopen() [function.fsockopen]: unable to connect to twitter.com:80 (Connection timed out) in [MYSITE]/wp-includes/class-snoopy.php on line 1142**

**解决:**

**1、修改系统hosts文件，添加128.121.146.228 twitter.com**

**2、**WordPress后台修改twitter tools插件源文件，所有‘http://twitter.com’修改为‘https://twitter.com’

3、修改wordpress程序wp_includes/class-snoopy.php中:var $port =80; 修改为 443;

OK.