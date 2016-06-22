title: 微信webview远程调试
tags:
  - webview
  - 微信
  - 调试
id: 2654
categories:
  - 建站❤编程
date: 2015-04-05 05:05:06
---

1月10日，微信公众平台对外开放了微信内网页开发工具包(微信JS-SDK)。在广大开发者和微信营销圈内产生了巨大反响。

JS-SDK在丰富了HTML5应用能力的同时，也带来了开发复杂度的提升。主要有以下几个方面：

1.  微信webview中的缓存、localStorage等特性与原生浏览器的差异
2.  盲人摸象隔靴搔痒，无法给臭虫最直接的打击
3.  市面上的各种调试工具增加额外的学习成本，不如直接使用已熟手的 开发者工具。
在此背景下，开发者们需要一种更加便利的方式来面对挑战，提升效率。

<!--more-->

我们都知道Chrome mobile和Chrome PC双剑合璧让开发者可以像在PC上调试网页一样，用Chrome PC的开发者工具来调试Chrome mobile里的页面（这么说有点绕，直接[看图](http://kainy-migs.stor.sinaapp.com/original/12dcb0445b860e30232e3e543caa6d14.png "remote-debug-overview.png")）。好是好，无奈这种方法只能调试Chrome mobile中打开的页面，要想调试应用内webview中打开的页面，需要在应用中配置[setWebContentsDebuggingEnabled](https://developer.chrome.com/devtools/docs/remote-debugging#debugging-webviews)。这也就意味着，按常规方法想要远程调试微信webview中的页面，除非微信提供特定版本的客户端安装包。

为了突破限制，才华横溢的鹅前(xian)辈(lie)们已经做了[各种](http://www.webryan.net/2013/04/talk-about-remote-debugging-on-mobile-phone/ "关于移动终端上的Web前端调试方法探讨") [不同](http://www.webryan.net/2013/11/breakpoint-for-javascript-debugger-without-browser-supportted/ "【breakpoint】不依赖浏览器控制台的JavaScript断点调试方法")的[尝试](http://alloyteam.github.io/Rosin "Rosin A tool for web developers debug mobile page with fiddler")，解决了不同场景下的开发痛点，但都难以达到使用桌面版Chrome中原生开发者工具远程调试移动版Chrome内页面的体验（资源全局搜索、命令行交互等）。

为了实现这个目标，本人进行了一些思考和实践，分享如下：

如[这篇文章](http://www.quirksmode.org/blog/archives/2015/02/chrome_continue.html)所述，虽然Android4.3 开始默认安装 Chrome 但只有Nexus系列和摩托罗拉的设备将其设置为默认浏览器。各大设备厂商如三星HTC小米等都推出了基于Chromium（甚至Android Webikt ）的派生浏览器（Chromia）并设为系统默认浏览器。受到[这篇文章](http://km.oa.com/group/18061/articles/show/197412 "[精华]微信内嵌网页的远程调试方法")（内网）启发：既然系统安装了手机QQ浏览器，微信会自动选择使用手机QQ浏览器的内核。反向求解，如果非但不安装手机QQ浏览器，反而把系统默认的自带浏览器卸载了（嗯，要掌握此神技就得具备壮(hui)士(dao)断(zi)腕(gong)的勇气和魄力），然后安装最新的Chrome移动版，这样微信内打开网页调用webview时别无选择，是不是就该使用我们安装的Chrome了呢。所以首先要做的就是铲除这些经设备厂商们“改进”过的浏览器，使用刷机精灵“实用工具”tab下的“一键Root”和“卸载预装应用”就可以啦。注意，必须是安卓4.4或更新的系统。

1.  开启当前Android设备的USB调试（ [示意图](http://kainy-migs.stor.sinaapp.com/original/f30b4e0ec197e60f77269bb1d2798194.jpg " 勾选“网络ADB调试”") ）
2.  在PC或MAC上安装Chrome浏览器（版本&gt;=32）和对应的Android设备驱动（如果找不到，可以在这个 [列表](http://developer.android.com/tools/extras/oem-usb.html "OEM USB Drivers | Android Developers") 内尝试）
3.  用USB线连接Android设备，在PC或MAC上的Chrome地址栏输入 `chrome://inspect` 然后回车，或通过菜单图标→工具→检查设备，进入调试界面
4.  勾选界面中的 `Discover USB devices` ，直到搜索到你的Android设备（ [示意图](http://kainy-migs.stor.sinaapp.com/original/e0bf1076e5ab45b37dd92bf0b1b41870.png " 调试微信中的webview") ）
5.  在移动设备上弹出的是否允许远程调试上，选择“允许”
6.  在下面的页面列表（将展示已在Android上的Chrome中打开的页面），点击对应的 `inspect` 开始调试
7.  此时将在桌面版Chrome上弹出一个新的标签页，即为调试界面（ [示意图](http://kainy-migs.stor.sinaapp.com/original/7c38ec5c063edd2d489cf1034c2faef7.jpg " 调试微信中的webview") ）；
&nbsp;

如果不忍心看爱机菊花惨遭蹂躏，还可以试试用wifi连接 替代USB数据线进行远程调试 ，方法如下（其中斜体部分为手机ip和端口号，请根据实际情况修改）：

1.  确保手机和PC连入同一局域网，PC 能ping通手机ip；
2.  勾选“开发者选项”中的“网络ADB调试”；
3.  USB连接手机，命令行中输入“adb tcpip <span style="color: #00ffff;">_5555_</span>”；
4.  断开USB，命令行输入“adb connect <span style="color: #00ffff;">_172.16.0.2_</span>”（ [示意图](http://kainy-migs.stor.sinaapp.com/original/f4fb6ed9f3d9184b612f556305219267.jpg " adb connect $ip.jpg") ）；
[caption id="" align="alignnone" width="476"][![](http://kainy-migs.stor.sinaapp.com/original/571a0a65aac333ffd2e2d257b7dcc4c7.jpg)](http://kainy-migs.stor.sinaapp.com/original/571a0a65aac333ffd2e2d257b7dcc4c7.jpg) 通过wifi连接的效果也是一样一样嘀。[/caption]

[caption id="" align="alignnone" width="476"][![](http://kainy-migs.stor.sinaapp.com/original/8dc7b6d6cbede7e49c828f7a037e793c.jpg)](http://kainy-migs.stor.sinaapp.com/original/8dc7b6d6cbede7e49c828f7a037e793c.jpg) 手Q客户端内的webview也是一样可以调试。[/caption]

&nbsp;

<span style="line-height: 1.5;">总结如下：</span>

1.  如果是安卓4.4及以上版本的设备，使用本文介绍的方法体验最完整的远程调试功能，对于iOS和低版本安卓设备此方法就无能为力了；
2.  如果常用断点调试，使用henryguo介绍的[这种方法](http://www.webryan.net/2013/11/breakpoint-for-javascript-debugger-without-browser-supportted "【breakpoint】不依赖浏览器控制台的JavaScript断点调试方法")最合适；
3.  需要捕获脚本运行错误，console出数据的，可使用不同版本及平台通用的方法[Rosin](http://alloyteam.github.io/Rosin "Rosin A tool for web developers debug mobile page with fiddler")。
各种webview远程调试方法各有优缺点，还需要结合项目情况选择使用。比如在开发国际汇款过程中，由于是第一次接触微信服务应用开发，使用方法1就帮助我快速了解登陆态获取机制。

注：以上操作仅在本人小米1s和中兴X9180上验证成功，加之自己a对安卓系统知之甚少，如理解有误还望指出，遇到任何问题都可以留言讨论。