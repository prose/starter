title: Android WebView 前端开发调试
tags:
  - 安卓
  - 调试
id: 2743
categories:
  - JavaScript
date: 2016-03-24 17:44:07
---

在这次的参数RSA+AES加密需求(160310版本)中，由于涉及的接口众多，测试回归时需要在微信中到相关页面进行验证，工作量巨大，所以需要一个更高效率的[移动端调测方式](https://slides.com/guotao/mobile-debugging)。

[这篇文章](http://iffe.top/blog/%e5%b9%b3%e5%ae%89%e5%86%85%e7%bd%91%e6%a0%87%e8%a3%85%e6%9c%ba%e8%bf%9c%e7%a8%8b%e8%b0%83%e8%af%95%e5%ae%89%e5%8d%93webview%e7%9a%84%e6%96%b9%e6%b3%95/)要里介绍了连接和抓包，其中出现远程调试安卓Webview的截图，很多同事尝试时在列表中只能看到chrome中打开的页面，通过 [这篇文章](http://imweb.io/topic/551b9f7057c4fc5a3a6da6bd)可以知道，原因是其他app可能没有开启webContentsDebuggingEnabled，chrome的安全策略限制了这些网址的展示，要突破这一限制，需要用到一款叫Xposed的APP 。

Xposed的原理是利用动态劫持，通过替换/system/bin/app_process程序控制zygote进程，使得app_process在启动过程中会加载XposedBridge.jar这个jar包，从而完成对Zygote进程及其创建的Dalvik虚拟机的劫持。

<!--more-->

Xposed的安装在[这篇文章](http://sspai.com/24538)中已经介绍了很清楚，这里不赘述。下面截几个过程中的图

![](http://kainy-migs.stor.sinaapp.com/original/2cd2eaef26bfbf8c5ac26cb8745b4d86.jpg)

![](http://kainy-migs.stor.sinaapp.com/original/7e2e0bd85521038be8245e0dce8f01b8.jpg)

![](http://kainy-migs.stor.sinaapp.com/original/b80060f2e73e59a3d2781e49676151d8.jpg)

![](http://kainy-migs.stor.sinaapp.com/original/01e235a2bff16c3bf2dbf047634bda5b.png)

IMWeb团队袁飞翔这篇文章中介绍了开启QQ客户端debug模式的方法，参考其中代码：

![](http://kainy-migs.stor.sinaapp.com/original/7fb84049ed58860fb96b897ca42b8a30.jpg)

把里面的 packageName 的判断去掉，重新编[译成apk](http://pan.baidu.com/s/1gecd5dD "提取密码：6abk") 就可以啦。也许有童鞋会说“我是前端开发怎么知道如何编译安卓app呢？”

身为前端，如果说web开发对于我们是陆地，客户端和服务端开发可能就是海洋和天空。离开了陆地我们无法生存，但这不应该成为我们放弃追求上天和入水的理由。

跳出舒适圈，才能走向更广阔的海洋和天空；正所谓技多不压身，了解其他领域的开发技能，有助于让我们从不同维度来思考工作中遇到的问题，虽然过程中可能需要投入额外的时间，但有的时候放适当放慢解决问题的速度，反而是对个人能力的提升——如果一开始看到那堆java代码感觉和平时写的js语法差异很大，看不懂就放弃了，可能就不会开始APP开发的第一步，更不会去思考如何编译打包的问题。而是直接采用QQ浏览器微信调试工具，这样既省时又省事的方式，但后续如果需调试微信之外的APP就卡壳了，一味追寻捷径也可能让人迷失，尤其对于开发新人。

_需要指出的时，Xposed需要root权限（这个对开发应该不是啥问题吧），另外新版本的QQ和微信安卓客户端已经使用X5内核而不调系统Webview了，新版可以尝试在存储卡根目录下放置文件：debug.conf，或者使用老版本的客户端。_

参考文章：

1.  [使用Xposed强制androidwebView开启debug模式 ](http://imweb.io/topic/551b9f7057c4fc5a3a6da6bd)
2.  [安卓教程：Xposed 框架安装及使用](http://sspai.com/24538)
3.  [Xposed 入门与模块示例 - 电量伪装](http://3dobe.com/archives/113)
4.  [QQ浏览器开启网页调试教程](http://blog.qqbrowser.cc/kai-qi-wang-ye-diao-shi-jiao-cheng)