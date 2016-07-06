title: webrtc实现的视频聊天室应用
tags:
  - webrtc
id: 2192
categories:
  - JavaScript
date: 2013-01-08 09:26:25
---

在Github上逛荡，发现一个有趣的项目 webrtc.io-demo —— 对webRTC的简化应用。

百科上的介绍“webRTC实现了基于网页的视频会议，标准是WHATWG 协议，目的是通过浏览器提供简单的javascript就可以达到实时通讯（Real-Time Communications (RTC)）能力…”

看样子是很有希望在未来浏览器端到端通信大展拳脚。

<!--more-->

花了点功夫部署到AWS，地址是：[http://v.kainy.cn/](http://v.kainy.cn/ "视频聊天室演示 —— 基于webrtc.io") ，（原版使用node版本较旧，直接安装会有些问题，有空把修改后的代码提交[上去](https://github.com/kainy/webrtc.io-demo "webrtc.io-demo")）。

&nbsp;

说说如何使用吧，必须支持webRTC的浏览器**且**开启PeerConnection接口（方法：最新版chrome下，地址栏输入[chrome://flags](chrome://flags) 进入后找到“PeerConnection”项，点击下面的“开启”链接，然后重启浏览器）。

再然后“允许访问设备”即可。