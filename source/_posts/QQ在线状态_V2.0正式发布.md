title: QQ在线状态 V2.0正式发布
tags:
  - QQ
  - 代码
  - 升级
  - 资料
id: 533
categories:
  - 建站❤编程
date: 2010-01-18 21:47:15
---

[](http://farm3.static.flickr.com/2688/4284268971_fd29167ac6.jpg "qq")

[ ](http://farm3.static.flickr.com/2688/4284268971_fd29167ac6.jpg "qq")

今天收到来自：QQ在线状态项目组&lt;wp@tencent.com&gt;的邮件，说是 “QQ在线状态”V2.0正式发布，解决了QQ2009用户点击“在线状态”后须添加好友才能对话的问题，提高了临时会话使用的安全性。琢磨了一番，共享一些资料吧。

## [![qq](http://farm3.static.flickr.com/2688/4284268971_fd29167ac6.jpg)](http://farm3.static.flickr.com/2688/4284268971_fd29167ac6.jpg "qq")1、什么是"在线状态"（Web pres-ence）？

"在线状态"是腾讯公司提供的一种快速沟通服务，该服务可以让您在不加好友的情况下和域中的朋友发起临时会话。您只需要将生成的代码嵌入至您网页上对应的页面代码中，如：日志、个人网页、邮件签名档等地方，即可拥有您的"在线状态"；从而进行个人沟通、商业交流或提供线上即时客户服务。

对于社区以及C2C业务的服务商来说，"在线状态"能帮助您满足用户之间强沟通的需求，提高已有用户的黏性以及满意度，从而不断地扩大网站的影响力以及知名度。

## 2、我已经在用"在线状态"了,还需要升级至"在线状态"V2.0吗？

如果您是2008年以前生成的“在线状态”，则需要升级。因为“在线状态”V2.0解决了QQ2009的用户点击后必须加为好友才能会话的问题。<!--more-->

## <span style="font-weight: normal;">3、</span><span style="font-weight: normal;">在线状态代码详解及如何自定义在线风格图片</span>

**代码样例：**
<table border="0" cellspacing="1" cellpadding="5" width="560px;" align="center" bgcolor="#cccccc">
<tbody>
<tr>
<td bgcolor="#ffffff">&lt;a href="http://sighttp.qq.com/cgi-bin/check?sigkey=81a37f0b7cac68639bddfdb9b93a6c92bc211f3e3a4e683afbb31a079382dc9d";target=_blank; onclick="var tempSrc='http://sighttp.qq.com/wpa.js?rantime='+Math.random()+'&amp;sigkey=81a37f0b7cac68639bddfdb9b93a6c92bc211f3e3a4e683afbb31a079382dc9d';var oldscript=document.getElementById('testJs');var newscript=document.createElement('script');newscript.setAttribute('type','text/javascript'); newscript.setAttribute('id', 'testJs');newscript.setAttribute('src',tempSrc);if(oldscript == null){document.body.appendChild(newscript);}else{oldscript.parentNode.replaceChild(newscript, oldscript);}return false;"&gt;&lt;img border="0" SRC='http://wpa.qq.com/pa?p=1:80000805:1' alt="点击这里给我发消息"&gt;&lt;/a&gt;</td>
</tr>
</tbody>
</table>
1)、sigkey为个人鉴权key，请勿修改，否则无法发起临时会话。

2)、临时会话图标&lt;img border="0" SRC='http://wpa.qq.com/pa?p=1:80000805:1' alt="点击这里给我发消息"&gt;

SRC是图标链接，自定义图标中可以替换这一部分为自己图片的链接，

参数：

P=以冒号“:”分隔多个参数

第一个参数为版本号，目前为1；

第二个为QQ/TM号码；

第三个参数为图像风格，支持多种状态。

alt是图标旁留言。

3)、除了自定义图标需要修改临时会话图标外，其他情况下建议不要修改代码，因为有可能导致在不同的环境和浏览器下，无法发起临时会话。

**自定义在线风格图片**

用JS实现，具体步骤如下：

1) 申请代码
<table border="0" cellspacing="1" cellpadding="5" width="560px;" align="center" bgcolor="#cccccc">
<tbody>
<tr>
<td bgcolor="#ffffff">&lt;a href="http://sighttp.qq.com/cgi-bin/check?sigkey=81a37f0b7cac68639bddfdb9b93a6c92bc211f3e3a4e683afbb31a079382dc9d"; target=_blank; onclick="var tempSrc='http://sighttp.qq.com/wpa.js?rantime='+Math.random()+'&amp;sigkey=81a37f0b7cac68639bddfdb9b93a6c92bc211f3e3a4e683afbb31a079382dc9d';var oldscript=document.getElementById('testJs');var newscript=document.createElement('script');newscript.setAttribute('type','text/javascript'); newscript.setAttribute('id', 'testJs');newscript.setAttribute('src',tempSrc);if(oldscript == null){document.body.appendChild(newscript);}else{oldscript.parentNode.replaceChild(newscript, oldscript);}return false;"&gt;&lt;img border="0" SRC='http://wpa.qq.com/pa?p=1:80000805:1' alt="点击这里给我发消息"&gt;&lt;/a&gt;</td>
</tr>
</tbody>
</table>
2) 定义online数组，必须是online命名

&lt;script&gt;var online= new Array();&lt;/script&gt;

3) 获取在线状态

&lt;script src="http://webpresence.qq.com/getonline?Type=1&amp;80000805:"&gt;&lt;/script&gt;

可以获取多个，必须以冒号分隔，以冒号结尾，比如:

&lt;script src="http://webpresence.qq.com/getonline?Type=1&amp;80000805:10000:123456:"&gt;&lt;/script&gt;

online[0]=0,表示80000805离线

online[1]=1,表示10000在线

online[2]=1,表示123456在线

填写号码的先后顺序，分别对应数组online的0、1、2

4) 添加代码

把SRC='http://wpa.qq.com/pa?p=1:80000805:1'替换为自己的图片，比如:
<table border="0" cellspacing="1" cellpadding="5" width="560px;" align="center" bgcolor="#cccccc">
<tbody>
<tr>
<td bgcolor="#ffffff">&lt;script&gt; if(online[0]==0) document.write("&lt;a href="http://sighttp.qq.com/cgi-bin/check?sigkey=81a37f0b7cac68639bddfdb9b93a6c92bc211f3e3a4e683afbb31a079382dc9d"; target=_blank; onclick="var tempSrc='http://sighttp.qq.com/wpa.js?rantime='+Math.random()+'&amp;sigkey=81a37f0b7cac68639bddfdb9b93a6c92bc211f3e3a4e683afbb31a079382dc9d';var oldscript=document.getElementById('testJs');var newscript=document.createElement('script');newscript.setAttribute('type','text/javascript'); newscript.setAttribute('id', 'testJs');newscript.setAttribute('src',tempSrc);if(oldscript == null){document.body.appendChild(newscript);}else{oldscript.parentNode.replaceChild(newscript, oldscript);}return false;"&gt;&lt;img border="0" SRC='<span>http://xxxx/outline.jpg</span>' alt="点击这里给我发消息"&gt;&lt;/a&gt;");
else document.write("&lt;a href="http://sighttp.qq.com/cgi-bin/check?sigkey=81a37f0b7cac68639bddfdb9b93a6c92bc211f3e3a4e683afbb31a079382dc9d"; target=_blank; onclick="var tempSrc='http://sighttp.qq.com/wpa.js?rantime='+Math.random()+'&amp;sigkey=81a37f0b7cac68639bddfdb9b93a6c92bc211f3e3a4e683afbb31a079382dc9d';var oldscript=document.getElementById('testJs');var newscript=document.createElement('script');newscript.setAttribute('type','text/javascript'); newscript.setAttribute('id', 'testJs');newscript.setAttribute('src',tempSrc);if(oldscript == null){document.body.appendChild(newscript);}else{oldscript.parentNode.replaceChild(newscript, oldscript);}return false;"&gt;&lt;img border="0" SRC='<span>http://xxxx/online.jpg</span>' alt="点击这里给我发消息"&gt;&lt;/a&gt;"); &lt;/script&gt;</td>
</tr>
</tbody>
</table>
最后来看看Kainy做的一个样式吧，点→[![](http://wpa.qq.com/pa?p=1:125326572:43)](http://sighttp.qq.com/cgi-bin/check?sigkey=f17ea1a597382af8184ba0bcd09b7a3a62e3618411c045ed0572ff250348bba5) 试试哈。