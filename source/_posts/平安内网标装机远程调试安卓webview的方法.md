title: 平安内网标装机远程调试安卓webview的方法
tags:
  - android
  - webview
  - 调试
id: 2724
categories:
  - 建站❤编程
date: 2016-01-03 06:06:46
---

由于安全策略限制，我们的开发机只能连入内网，且需要经过标装。

平安内部主要用到两张网，一张是办公开发用的PA_WLAN，另一张是移动设备接入的MA网，开发机与测试机由于不在同一网段，也就只能上演人鬼情未了了（用Mac开发的土豪例外）；

另一方面，标装过的机器木有管理员权限，无法通过共享wifi给手机来创建局域网环境，于是另一条路被宣告堵死。

以往的方法都不灵，只能另辟蹊径咯~ 最终希望寄托在连通二者的USB线。

<!--more-->

于是问题转化为：**如何通过USB线实现开发机与测试手机通信，让手机的流量通过USB线走开发机网络**。

### 先介绍解题思路

1.  通过Chrome的远程调试工具连通手机和开发机，实现通信；
2.  将手机流量通过代理指向开发机端口；
3.  开发机监听端口，接收代理流量

### 具体操作步骤

**针对第一点**，标装机需要安装ADB驱动（没有管理员权限的话到idesk搜索“Android”安装第一个搜索结果）

[caption id="" align="alignnone" width="507"][![](http://kainy-migs.stor.sinaapp.com/original/7a2d487c57fa72a290ce41a1d65d42af.png)](http://kainy-migs.stor.sinaapp.com/original/7a2d487c57fa72a290ce41a1d65d42af.png) 安装之后，勾选“Extras”下的“Google USB Driver package”，然后安装。[/caption]

安装之后的操作；

1.  开启当前Android设备的USB调试模式
2.  开发机上安装Chrome浏览器（版本&gt;=32）
3.  用USB线连接Android设备，在PC或MAC上的Chrome地址栏输入chrome://inspect 然后回车，或通过菜单图标→工具→检查设备，进入调试界面
4.  勾选界面中的 Discover USB devices ，直到搜索到你的Android设备
5.  在移动设备上弹出的是否允许远程调试上，选择“允许”
6.  在下面的页面列表（将展示已在Android上的Chrome中打开的页面），点击对应的 inspect 开始调试
7.  此时将在桌面版Chrome上弹出一个新的标签页，即为调试界面；
[caption id="" align="alignnone" width="507"]![](http://kainy-migs.stor.sinaapp.com/original/0d090881e4633f59e460b353553aa8ca.jpg) 连通后的效果是这样的~[/caption]

这样以后，开发机的Chrome开发者工具就可以远程调试手机上的Chrome页面，但仅限于Chrome。接下来解决手机APP联网和流量抓包的问题。

**第二点的实现**，得借助一款叫做“Transparent Proxy”的软件实现（需root权限），配置全局代理后，所有APP的流量就都指向Chrome的8888端口了；

需要注意的是：开发机与手机之间网络连接需要靠大小Chrome通奸来维持，所以即使不是调试手机版Chrome网页，也要保持手机Chrome后台运行状态（即 保持上图中的小绿点常亮）

[caption id="" align="alignnone" width="267"][![](http://kainy-migs.stor.sinaapp.com/original/0d4e25d348f6c1ee7c929b2c9423bc18.jpg)](http://kainy-migs.stor.sinaapp.com/original/0d4e25d348f6c1ee7c929b2c9423bc18.jpg) 需要如图配置三个地方[/caption]

**第三点**，到目前为止，手机上的流量已经全部转向台式机的Chrome，接下来要做的，是将台式机Chrome接收到的流量转到我们熟悉的抓包工具——Fiddler上

[caption id="" align="alignnone" width="274"]![](http://kainy-migs.stor.sinaapp.com/original/564feabd2260bb3208ef99206ae489f8.jpg) Chrome的配置[/caption]

Fiddler的配置方法就不介绍了，不懂的百度一下，记得勾选“Allow remote computers to connect”哦。

[caption id="" align="alignnone" width="508"][![](http://kainy-migs.stor.sinaapp.com/original/0c1d947659ef874b5dc848f600241926.jpg)](http://kainy-migs.stor.sinaapp.com/original/0c1d947659ef874b5dc848f600241926.jpg) 财富宝APP的抓包，从User-Agent值可以看到系统和内核信息[/caption]

目前我们用较多的是console.re 和blog.qqbrowser.cc的方案；

*   方案一本质是模拟console，依赖第三方服务器且存在网络延迟问题，功能也远不及Chrome开发者工具强大；
*   方案二需要安装鹅厂产品，不过相比带来的调试便利，这点推广还算良心。另外这个方案只能调试内核使用x5的APP，如微信、QQ空间等，且对APP版本有要求，如微信6.1以后才支持x5内核。
相比之下，咱们这套方法有三个优势：

1.  不需要专门去安装个QQ浏览器用于调试（对于办公机内存吃紧如我的同学而言还是蛮赞的）；
2.  不仅限于X5内核，可调试所有安卓应用中的webview；
3.  手机使用开发机网络，无需MA账号，妈妈再也不用担心你的手机流量~

### 最终实现的效果

[caption id="" align="alignnone" width="508"][![](http://kainy-migs.stor.sinaapp.com/original/2201bd030fe674a53f69ccb0862c8b64.jpg)](http://kainy-migs.stor.sinaapp.com/original/2201bd030fe674a53f69ccb0862c8b64.jpg) 手机上打开页面的列表，点击“inspect”开始调试[/caption]

[caption id="" align="alignnone" width="507"][![](http://kainy-migs.stor.sinaapp.com/original/9877ff22b5f74ef5a6450767fcdcf3bc.jpg)](http://kainy-migs.stor.sinaapp.com/original/9877ff22b5f74ef5a6450767fcdcf3bc.jpg) 远程调试Chrome中打开的页面[/caption]

[caption id="" align="alignnone" width="507"][![](http://kainy-migs.stor.sinaapp.com/original/5b3e164808cf6fd89973f38fd9bb101c.jpg)](http://kainy-migs.stor.sinaapp.com/original/5b3e164808cf6fd89973f38fd9bb101c.jpg) 远程调试APP webview中的页面[/caption]

[caption id="" align="alignnone" width="506"][![](http://kainy-migs.stor.sinaapp.com/original/cb87eec44182dd0370992051828be327.jpg)](http://kainy-migs.stor.sinaapp.com/original/cb87eec44182dd0370992051828be327.jpg) 远程调试微信webview中的页面[/caption]

不将就于console.re模拟调试、不局限于仅满足特定场景的调试方案，要就用最直接的开发工具，做有追求的开发者（追求高效、追求简单、追求纯粹、追求XX… ）。

迂回妥协的方案如：设置全局开关 然后判断页面运行环境切换开关 虽然也是经验的结晶，但终究影响开发效率和体验。

面对外部条件和环境给开发带来的不便，我们还是要保持有开发者的初心，而不是以此为理由降低对开发过程和自己的要求，相信有光，于是光就在前方不远处。