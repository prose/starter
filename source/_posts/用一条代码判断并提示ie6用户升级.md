title: 用一条代码判断并提示ie6用户升级
tags:
  - ie
  - 升级
  - 方法
  - 用户
id: 975
categories:
  - 建站❤编程
date: 2010-04-01 19:05:11
---

万恶的IE6，一直是网页设计人员心中的痛，虽然有很多解决兼容性办法的方法，但我觉得直接判断网页是不是IE6的比较直接有效，如果是IE6则像用户提示升级，并提供升级的链接，如果用户仍然“执迷不悟”的话，那也不必强求了，毕竟顾客才是上帝嘛，如果他们关闭了提示信息也就没必要再多唠叨了，所以可以通过cookie记录，关闭后不再显示提示信息。

实现代码（<span style="font-family: monospace;"><span style="color: #ff0000;">gbk编码的网页中</span><span style="font-family: Georgia, 'Times New Roman', 'Bitstream Charter', Times, serif;">）：</span></span>

`
`

`
<div id="_mcePaste">&lt;!--[if lt IE 7]&gt;</div>
<div id="_mcePaste">&lt;script src="http://kainy.googlecode.com/svn/trunk/ie6/killie6.gbk.js"&gt;&lt;/script&gt;</div>
<div id="_mcePaste">&lt;![endif]--&gt;</div>
`

实现代码（<span style="font-family: monospace;"><span style="color: #ff0000;">utf-8编码的网页中</span><span style="font-family: Georgia, 'Times New Roman', 'Bitstream Charter', Times, serif;">）：</span></span>

`
`

`
<div id="_mcePaste" style="text-align: left;">&lt;!--[if lt IE 7]&gt;</div>
<div id="_mcePaste" style="text-align: left;">&lt;script src="http://kainy.googlecode.com/svn/trunk/ie6/killie6.utf-8.js"&gt;&lt;/script&gt;</div>
<div id="_mcePaste" style="text-align: left;">&lt;![endif]--&gt;</div>
<div style="text-align: left;">.</div>
<div style="text-align: left;">将以上代码加入网页的 head 中，这样以后，用ie6打开该页面的访客就会在浏览器右下角显示如下图片啦：</div>
<div style="text-align: left;">.</div>
<div>[![](http://a.kainy.cn/kie6/killie6.jpg "killie6")](http://a.kainy.cn/kie6/killie6.jpg)</div>
<div>.</div>
`