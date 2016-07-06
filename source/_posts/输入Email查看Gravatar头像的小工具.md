title: 输入Email查看Gravatar头像的小工具
tags:
  - Gravatar
  - JavaScript
  - 工具
id: 1628
categories:
  - JavaScript
date: 2010-10-27 20:12:03
---

![](http://a.kainy.cn/201010/gravatar34.jpg)当你到任何一个支持[Gravatar](http://gravatar.com/)的网站留言时，这个网站都就会根据你留言时提供的Email地址为你显示出匹配的头像。当然，这个头像，是需要你事先到Gravatar的网站注册并上传的，否则，在这个网站上，就只会显示成一个默认的头像（如右图）。具体介绍见[这篇文章](http://www.iplaysoft.com/gravatar.html)。

下面介绍下本文的主角：这是一个可以查看email所对应Gravatar头像的小工具，[用浏览器打开](http://kainy.googlecode.com/svn/trunk/Email2Gravatar/index.html)后，输入需要查询的email，点击旁边的按钮提交后即可<!--more-->

[![](http://a.kainy.cn/201010/Email2Gravatar.png)](http://a.kainy.cn/201010/Email2Gravatar.png)

大致就是这个效果啦。原理很简单，就是通过调用js文件将输入框提交的email字符串进行md5值计算，然后按格式：

> http://www.gravatar.com/avatar/字符串的DM5值

替换掉原来图片的src属性的值，图片就替换为属于所输入email的Gravatar头像啦。Gravatar也提供了[API](http://en.gravatar.com/site/implement/)但多是服务端脚本，这里做的就是把这些工作提到前端来做。不过目前这小页面还是很有问题滴，最大的问题就是只能在ie6下使用啦，在Chrome下头像图片就是不出来，太不给力了，估计和调用函数的方式不恰当有关系吧。

权当练手，目前的JavaScript水平也就做到这一步啦，有机会日后再改进了，读者中若有知道如何解决此bug的js高手也烦请指点指点小弟，先谢过了。

演示地址：[http://kainy.googlecode.com/svn/trunk/Email2Gravatar/index.html](http://kainy.googlecode.com/svn/trunk/Email2Gravatar/index.html) .

**P.S： **

[<span style="color: #ff0000;">20101217</span>]最新更新~ 已将该小工具代码托管到Github，号称代码玩家的MySpace，地址是：[https://github.com/kainy/Email2Avatar/](https://github.com/kainy/Email2Avatar/)

欢迎有兴趣者 fork ^_^

[<span style="color: #ff0000;">20110514</span>]已作为WebApp 发布到Chrome Web Store！ Google搜索关键词“Email2Gravatar”

发布页面：[https://chrome.google.com/webstore/detail/kgbpphialbelagkhejpbkjoghklpoocd?hl=en-GB](https://chrome.google.com/webstore/detail/kgbpphialbelagkhejpbkjoghklpoocd?hl=en-GB) 。