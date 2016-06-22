title: Hotmail设置邮件转发的方法
tags:
  - hotmail
  - 域名
  - 方法
  - 邮箱
id: 1227
categories:
  - 建站❤编程
date: 2010-07-21 17:24:18
---

在live上有一个邮箱，平时很少登录，每次需要用到时都发现收件箱满满，原本有用的邮件因为没能及时查看，多半没什么意义了。于是考虑设置转发到qq邮箱或gmail这些有客户端，收到邮件随时提示的邮箱帐号中。

不过有点麻烦的是：Hotmail只允许“转发至以 hotmail.com、msn.com、live.com 结尾或属于 Windows Live Custom Domains 的其他电子邮件地址。” 如果是转发到msn.com、live.com结尾这样同样不能提示收件的邮箱也就没什么意义了，所以要实现转发到前**提就是要拥有加入Live@edu计划的邮箱**。其实只要有自己的域名，要加入并不难，只需要通过完成Cname解析来验证域名所有即可。如果不能弄到这么一个帐号，接下来的内容也就没必要看下去了。

开通邮件转发到方法是：登录Hotmail，点击页面右上方个人资料下面的“选项-更多选项”；在“管理账户”下就有“转发电子邮件至其他电子邮件帐户”的链接。这里填写你的已加入Live@edu计划的邮箱（比如我的 live@fjut.us ），确认就行啦。<!--more-->

[![](http://a.kainy.cn/201006/hotmail%E9%82%AE%E4%BB%B6%E8%BD%AC%E5%8F%91%E8%AE%BE%E7%BD%AE%E6%88%90%E5%8A%9F.jpg)](http://a.kainy.cn/201006/hotmail%E9%82%AE%E4%BB%B6%E8%BD%AC%E5%8F%91%E8%AE%BE%E7%BD%AE%E6%88%90%E5%8A%9F.jpg)

这样以后live帐号收到的信件就可以转发出去了。

然后就是用自己的域名开通腾讯域名邮箱/企业邮箱 或者 gmail的企业邮箱，注意：域名的MX记录是指向企业邮箱而不是domain.live.com哦，这样确就完成对转发邮件的接收。

这样以后，live邮箱有收信时就可以收到提示了。