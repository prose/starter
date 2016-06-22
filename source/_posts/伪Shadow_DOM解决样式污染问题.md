title: 伪Shadow DOM解决样式污染问题
tags:
  - 方法
id: 2340
categories:
  - JavaScript
date: 2013-04-18 22:22:15
---

前段时间在微信上看到伯乐在线推送的 [一行代码，浏览器变临时编辑器](http://blog.jobbole.com/32823) 文章，感觉还蛮酷的。看完原理部分后，感觉恰好可以套用前几天想到的一个解决方案。

就是[前文](http://blog.kainy.cn/2013/01/browse-on-mobile-device/ "博文：移动设备浏览当前页")中提到的[书签栏小工具](http://bmd.kainy.cn/ "移动设备浏览当前页")。自己在使用中发现，在一些网站中使用会出现小工具css规则被所在页的css规则覆盖，而导致二维码“破相”的问题，也有人称其为“样式污染” ，效果截图：

<!--more-->

[![](http://a.kainy.cn/201302/%E6%A0%B7%E5%BC%8F%E6%B1%A1%E6%9F%93.jpg)](http://a.kainy.cn/201302/%E6%A0%B7%E5%BC%8F%E6%B1%A1%E6%9F%93.jpg)

参考了一些其他 bookmarklet 的做法，大都是使用内联规则提升选择器优先级，同时加入reset css的做法，有点以暴制暴，主动出击的感觉。 BMD（小工具的简称）主要会受影响的也就是构成二维码的 table td tr 标签，如果为这些容易出问题的标签加上reset css也不算太麻烦，但这样一来以后每次扩展一些功能都需要考虑样式污染问题，还得琢磨reset 规则写法。

恰好昨天看到一篇介绍Shadow DOM 的文章，感觉这东东恰能达到我需要的效果，翻了几篇文章，大概了解了关于Shadow DOM几个要点：

1.  有shadow Host（影子宿主）、shadow root（影子子树根节点）、 shadow Boundary（影子边界）、和shadow DOM nodes（影子节点）几个概念，其中后三者组成shadow DOM Subtrees（影子子树）
2.  ShadowDOM提供功能模块的封装
3.  影子宿主是影子子树的依托，属于文档树
4.  影子子树的根节点由影子宿主确定
5.  在渲染过程中，影子子树取代对应的文档树子树
6.  影子根节点对象提供常规DOM操作函数（getElementByID…）获取影子子树节点
ShadowDOM 是为取代iframe 作为Widget 容器而产生，不过目前仅chrome支持 还需到chrome:flag 手动开启。 按照这个思路，要在常规浏览器中实现 shadowDOM 的效果，还是得依赖 iframe 元素，所以BMD采取的方案就是在文档body部分创建iframe 节点，iframe中再通过document.write 产生script标签完成js 文件引用。比原先直接将js文件插入现有网页文档 ，多了一层iframe 作隔离。

发了些时间把[原版RNB](https://gist.github.com/4666256 "jakeonrails ") 改造为 [这个版本](https://gist.github.com/kainy/73c428ba10fc3636de82 "Ruby Notepad Bookmarklet (IEbusters)")：
<script type="text/javascript" src="https://gist.github.com/kainy/73c428ba10fc3636de82.js"></script>

第一行代码，拖到书签栏就可以用了。

该方法解决了ie不支持Data URI的问题，故取名IE剋星版 :P 。