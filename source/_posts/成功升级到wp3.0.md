title: 成功升级到wp3.0
tags:
  - WordPress
  - 升级
  - 站点
id: 1191
categories:
  - 生活点滴
date: 2010-06-18 19:40:37
---

WordPress3.0正式版今天发布了，前几天就开始在本地调试rc3版本多站点功能，感觉挺好的。

升级后，插件完全没有问题，不过要开启多站点功能，要求常规选项中的“博客地址”和“WordPress安装地址”必须是相同的，这样kainy就不得不现改变下站点的结构咯，不过还好，挺容易的，把安装地址改到根目录，然后程序文件都移动出来就ok啦；然后就是开通多站点功能前，所有插件必须停用，修改wp-config文件开启多站点功能后重新启动插件，这也好办；另外一个需要注意的就是，如果要用二级域名作为子站点的域名的话，要求博客程序必须安装在根目录，否则就只能把子站点放到子目录咯，不过也有办法通过修改.htaccess文件来进行重定向来支持二级域名绑定功能就是了。

升级后马上就能体验到一些不错的细节啦，就拿自己看到的几点来说下：

1.修改管理员邮箱时候有这样一个提示：<!--more-->
> This address is used for admin purposes. If you change this we will send you an e-mail at your new address to confirm it. **The new address will not become active until confirmed.**
也就是要修改管理员邮箱的话必须通过原来管理邮箱收到确认信里的链接激活后，新的管理邮箱设置才能生效，这样显然安全性提升不少哈，也许是WPMu那里沿袭过来的吧，反正我之前是不知道有这样的措施就是了。

[![](http://a.kainy.cn/201006/wp3.0%E6%94%B9%E7%AE%A1%E7%90%86%E9%82%AE%E7%AE%B1%20%E9%82%AE%E4%BB%B6%E9%80%9A%E7%9F%A5.png)](http://a.kainy.cn/201006/wp3.0%E6%94%B9%E7%AE%A1%E7%90%86%E9%82%AE%E7%AE%B1%20%E9%82%AE%E4%BB%B6%E9%80%9A%E7%9F%A5.png)

2.多站点功能

![](http://a.kainy.cn/201006/%E5%BA%94%E8%81%98%E7%AB%99%E9%A6%96%E9%A1%B5.png)

[![](http://a.kainy.cn/201006/%E5%BA%94%E8%81%98blog%E9%A1%B5.png)](http://a.kainy.cn/201006/%E5%BA%94%E8%81%98blog%E9%A1%B5.png)

之所以这么急着升级，主要就是看准了多站点的功能。今天下午就抽空顺便把一直以来想建的一个个人求职专题站弄起来了，之前由于害怕两个站不仅难以保证内容和维护的质量一直没上线，现在好啦，共用一套程序，只是数据库增加一些。小的站用的是收费主题[creativezodiac](http://themeforest.net/item/creative-zodiac-portfolio-blog-wordpress-theme/93427)，第一眼看到就觉得应该有一个属于自己的这样的站，现在只是完成了安装和基本的信息修改，由于这个主题使用的cufont并不支持中文，开始接使用的时候会有一些疑惑，js还有一些小错误，不过现在已经差不错了，完美支持中文啦~ 由于尚未完善，也就不贴出地址了，想看主题效果的可以点[这里](http://demo.freshface.cz/file/cz/wp/)。

总的来说这次升级还是挺顺利的，虽然发布的是英文版，不过Kainy用之前的汉化语言包也没什么大问题，所以还是推荐升级咯。