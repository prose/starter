title: 为什么所有浏览器的标记都带mozilla
tags:
  - Mozilla
  - 历史
  - 浏览器
  - 趣闻
id: 1746
categories:
  - 系统❤软件
date: 2010-11-24 15:51:44
---

今天在百度贴吧看到一条趣闻帖，楼主盖楼讲述了firefox、ie、netscape、safari等浏览器的user-agent带有mozilla标记的发展历程。感觉挺有意思的，整理了一下发到这儿。

原文地址：[http://tieba.baidu.com/f?kz=939896169](http://tieba.baidu.com/f?kz=939896169)

最早的时候有一个浏览器叫NCSA Mosaic，把自己标称为NCSA_Mosaic/2.0 (Windows 3.1)，它支持文字显示的同时还支持图片，于是Web开始好玩起来。

然后出现了一个新的网页浏览器，“Mozilla”，其实就是“Mosaic终结者”的意思，这搞的Mosaic很不爽，（毕竟Mosaic出道早，江湖老），新浏览器最后正式公布的名称是Netscape，它把自己标称为Mozilla/1.0 (Win3.1)，更好玩了。Netscape支持框架显示，后来框架在大家中间流行起来了，但Mosaic不支持框架啊，于是伟大的“用户代理人探测”技术出现了，如果<!--more-->是“Mozilla”，那就发给支持框架的页面，至于其他的浏览器，则发给不含框架的页面。

Netscape想逗Microsoft玩儿，把Windows叫做“几乎不曾做过调试的设备驱动器”，后者很恼火。Microsoft于是推出了自己的 网页浏览器，叫做Internet Explorer，希望它能成为“Netscape终结者”。Internet Explorer也支持框架，但它不是Mozilla啊，所以没人给它发送带有框架的页面。Microsoft慢慢烦躁起来，不再寄希望于网站管理员逐渐 认识IE并给它发框架，而是宣称自己是“兼容Mozilla”的，开始模仿Netscape，把自己标称为Mozilla/1.22 (compatible; MSIE 2.0; Windows 95)，这样Internet Explorer也能收到框架了，整个Microsoft狂喜，但网站管理员开始有点被搞糊涂了。

Microsoft把IE和Windows一起卖，并且把产品也弄得比Netscape更好了，拉开了第一场浏览器之战。结果和大家知道的一样，Netscape被干掉了，Microsoft大胜、大喜。但是后来Netscape以Mozilla的新名称重生了，构造了Gecko，标称其为Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.1) Gecko/20020826，Gecko属于渲染引擎，表现优异。Mozilla开发了Firefox，标称为Mozilla/5.0 (Windows; U; Windows NT 5.1; sv-SE; rv:1.7.5) Gecko/20041108 Firefox/1.0，并且Firefox表现也非常优秀。Gecko扩张迅速，一些浏览器使用了它的代码并标称为Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en-US; rv:1.7.2) Gecko/20040825 Camino/0.8.1 ，这是一个，还有Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.8.1.8) Gecko/20071008 SeaMonkey/1.0，另一个，它们都伪装成Mozilla，同时也都是基于Gecko支持的。

Gecko表现优秀，IE则很差劲，于是身份甄别再次发生，输送给Gecko的是设计良好的网页代码，其他浏览器就没有这个待遇了。Linux的跟随者很伤心，因为他们创建了基于KHTML引擎支持的Konqueror，但却不会被输送好代码，虽然他们自己认为KHTML和Gecko一样优秀，于是Konquerer开始伪装自己“像Gecko”那样以得到好的网页，并标称自己为Mozilla/5.0 (compatible; Konqueror/3.2; FreeBSD) (KHTML, like Gecko)，这个世界更让人困惑了。

后来出现了Opera这样的主儿，宣称“允许用户自己决定让浏览器装成谁”，它的菜单中提供了Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 9.51， Mozilla/5.0 (Windows NT 6.0; U; en; rv:1.8.1) Gecko/20061208 Firefox/2.0.0 Opera 9.51，Opera/9.51 (Windows NT 5.1; U; en) 供大家来选择，选谁是谁。

Apple开发了Safari，使用了KHTML，同时也增加了很多新特性，后来干脆一锅煮，另起炉灶叫了WebKit，但是它有希望能够得到那些为KHTML编写的网页，于是Safari标称自己为Mozilla/5.0 (Macintosh; U; PPC Mac OS X; de-de) AppleWebKit/85.7 (KHTML, like Gecko) Safari/85.5，这个世界更混乱了。

Microsoft越来越担心Firefox的发展，重新启动了Internet Explorer的开发，标称自己为Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) ，可以很好的渲染代码，但那要看网站管理员是否指示它这么做。

Google也开发了自己的浏览器Chrome， 使用了Webkit，有点像Safari，希望能得到为Safari编写的网页，于是决定装成Safari。这样啊，Chrome使用了WebKit渲染 引擎，想装成Safari，而WebKit呢又伪装自己是KHTML，KHTML呢又是伪装成Gecko的，同时所有的浏览器又都宣称自己是 Mozilla，于是，Chrome宣称自己是Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.27 Safari/525.13,，UserAgent字符串彻底混乱了，也几乎不再发挥任何作用，每个人都宣称自己是别人，混乱充斥人间啊。

————————分割线————————

原文就是这样，有点调侃的味道，可以总结为一句话：Mozilla是Netscape的吉祥物，也是Netscape Navigator浏览器使用的内部开发代号。由于Netscape早期的影响力，直到今天，所有浏览器包括IE，向Web服务器报告自己的浏览器标识的 时候，都以 "Mozilla"开头，表明自己是Mozilla兼容的。这，就是原因啦。

查看浏览器标记的方法也很容易，通过JavaScript语句：
> <span style="font-family: 宋体; line-height: 24px; font-size: 14px; -webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px;">javascript:alert(navigator.userAgent)</span>
<span style="font-family: 宋体; line-height: 24px; font-size: 14px; -webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px;">在地址栏输入以上代码，然后回车。</span>

<span style="font-family: 宋体; line-height: 24px; font-size: 14px; -webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px;">[![](http://a.kainy.cn/201011/%E6%9F%A5%E7%9C%8BuserAgent%E7%9A%84%E5%91%BD%E4%BB%A4-snap20101124_152028.png)](http://a.kainy.cn/201011/%E6%9F%A5%E7%9C%8BuserAgent%E7%9A%84%E5%91%BD%E4%BB%A4-snap20101124_152028.png)</span>

<span style="font-family: 宋体; line-height: 24px; font-size: 14px; -webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px;">.</span>

<span style="font-family: 宋体; line-height: 24px; font-size: 14px; -webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px;">[![](http://a.kainy.cn/201011/u8110-userAgent-snap20101124_152002.png)](http://a.kainy.cn/201011/u8110-userAgent-snap20101124_152002.png)</span>

<span style="font-family: 宋体; line-height: 24px; font-size: 14px; -webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px;">.</span>

<span style="font-family: 宋体; line-height: 24px; font-size: 14px; -webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px;">[![](http://a.kainy.cn/201011/%E8%AE%BF%E5%AE%A2%E8%AE%B0%E5%BD%95-apple%EF%BC%9F%2BSafari-snap20101124_152228.png)](http://a.kainy.cn/201011/%E8%AE%BF%E5%AE%A2%E8%AE%B0%E5%BD%95-apple%EF%BC%9F%2BSafari-snap20101124_152228.png)</span>

<span style="font-family: 宋体; line-height: 24px; font-size: 14px; -webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px;">今天终于搞明白为什么使用自己的小幽打开本站时，访客记录的图标是apple+Safari啦。</span>

<span style="font-family: 宋体; line-height: 24px; font-size: 14px; -webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px;">
</span>