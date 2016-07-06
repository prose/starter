title: 使用Android模拟器进行前端开发与前端调优
tags:
  - android
  - 前端开发
id: 2510
categories:
  - 系统❤软件
date: 2013-08-07 21:53:05
---

上一篇介绍了模拟器在移动版页面兼容性测试中的应用。 更进一步地， 我们常常希望能在开发过程中实时预览提高开发效率 或者在网页遇到性能瓶颈时利用强大的开发者工具寻找优化方案。

Android 提供了remote debugging 功能， 可通过Chrome for Android启用USB网页调试来实现以上预想。 常规的做法是 实体设备通过USB连接PC， 成本较高。 延续上一篇的思路， 我们可以用模拟器虚拟出Android 系统环境， 然后安装Chrome for Android 进行调试， 这就是本文所介绍方法的实现原理。

偶然了解到的[信息](http://jiepang.com/user/story?uid=578876010&amp;pid=103611335)更激起了郭郭了解虚拟化技术与Web开发结合点的兴趣， 也明确了研究目的：利用虚拟化技术， 使用软件模拟出真机环境取代硬件设备。 在不影响调试效果的前提下， 降低开发时间和资金成本。当然，如果是想通过拉更多的人力、服务器、设备资源来彰显公司上层对自己部门/项目的重视程度就不是以下内容要讨论的范围了。

恰好利用这两天年假空闲，在家深入了一下ADT。

<!--more-->

接下来说说具体的实现步骤 和本人实践中偶得的技巧。

使用过ADT的同学都应该能感到模拟器的“慢一拍”， 这是由于ADT自带的系统镜像模拟的是ARM内核的实体机， 且默认不开启宿主机硬件加速无法利用GPU等硬件资源。对于Intel CPU或显存配置高的PC， 通过开启这两项， 可以显著提升虚拟机运行速度。

关于使用英特尔® 硬件加速执行管理器（英特尔® HAXM）加速模拟器运行的资料：[英文](http://software.intel.com/en-us/articles/speeding-up-the-android-emulator-on-intel-architecture) | [中文](http://www.cnblogs.com/beginor/archive/2013/01/13/2858228.html)

以上文章对操作步骤的描述都很详细， 本文就不赘述了， 这里假设你已完成HAXM的安装。 接下来依旧是多图<del>杀猫</del>：

1.CPU-ABI选择Intel Atom（x86），同时勾选“Use Host GPU”

[![](http://a.kainy.cn/201308/1.CPU-ABI%E9%80%89%E6%8B%A9Intel%20Atom%EF%BC%88x86%EF%BC%89.jpg)](http://a.kainy.cn/201308/1.CPU-ABI%E9%80%89%E6%8B%A9Intel%20Atom%EF%BC%88x86%EF%BC%89.jpg)

2.Fast virt模式启动模拟器，启动完成后可关闭eclipse 减少内存占用

[![](http://a.kainy.cn/201308/2.Fast%20virt%E6%A8%A1%E5%BC%8F%E5%90%AF%E5%8A%A8%E6%A8%A1%E6%8B%9F%E5%99%A8.jpg)](http://a.kainy.cn/201308/2.Fast%20virt%E6%A8%A1%E5%BC%8F%E5%90%AF%E5%8A%A8%E6%A8%A1%E6%8B%9F%E5%99%A8.jpg)

&nbsp;

3.下载安装包（[英特尔X86架构处理器版Chrome手机浏览器](http://yun.baidu.com/mall/product/detail?pid=310161883619451120 "搜了个底朝天，才搞到的X86版本哦 - com.android.chromeX86-28.0.1500.94")）， 解压后通过adt install 命令安装到模拟器虚拟出的系统中

[![](http://a.kainy.cn/201308/3.chromeX86%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F.jpg)](http://a.kainy.cn/201308/3.chromeX86%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F.jpg)[![](http://a.kainy.cn/201308/4.chromeX86about.jpg)](http://a.kainy.cn/201308/4.chromeX86about.jpg)

&nbsp;

5.开发者工具-勾选“启用USB网页调试”

[![](http://a.kainy.cn/201308/5.%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7-%E5%8B%BE%E9%80%89%E2%80%9C%E5%90%AF%E7%94%A8USB%E7%BD%91%E9%A1%B5%E8%B0%83%E8%AF%95%E2%80%9D.jpg)](http://a.kainy.cn/201308/5.%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7-%E5%8B%BE%E9%80%89%E2%80%9C%E5%90%AF%E7%94%A8USB%E7%BD%91%E9%A1%B5%E8%B0%83%E8%AF%95%E2%80%9D.jpg)

6.端口转发（通过adb forward 命令）

[![](http://a.kainy.cn/201308/6.%E7%AB%AF%E5%8F%A3%E8%BD%AC%E5%8F%91.jpg)](http://a.kainy.cn/201308/6.%E7%AB%AF%E5%8F%A3%E8%BD%AC%E5%8F%91.jpg)

7.Chrome打开local：9222（解决无法打开*.appspot.com链接的问题）

[![](http://a.kainy.cn/201308/7.Chrome%E6%89%93%E5%BC%80local%EF%BC%9A9222.jpg)](http://a.kainy.cn/201308/7.Chrome%E6%89%93%E5%BC%80local%EF%BC%9A9222.jpg)

&nbsp;

8.使用Chrome桌面版的开发者工具调试模拟器中的Chrome移动版网页-审查元素

[![](http://a.kainy.cn/201308/8.%E4%BD%BF%E7%94%A8Chrome%E6%A1%8C%E9%9D%A2%E7%89%88%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E8%B0%83%E8%AF%95%E6%A8%A1%E6%8B%9F%E5%99%A8%E4%B8%AD%E7%9A%84Chrome%E7%A7%BB%E5%8A%A8%E7%89%88%E7%BD%91%E9%A1%B5-%E5%AE%A1%E6%9F%A5%E5%85%83%E7%B4%A0.jpg)](http://a.kainy.cn/201308/8.%E4%BD%BF%E7%94%A8Chrome%E6%A1%8C%E9%9D%A2%E7%89%88%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E8%B0%83%E8%AF%95%E6%A8%A1%E6%8B%9F%E5%99%A8%E4%B8%AD%E7%9A%84Chrome%E7%A7%BB%E5%8A%A8%E7%89%88%E7%BD%91%E9%A1%B5-%E5%AE%A1%E6%9F%A5%E5%85%83%E7%B4%A0.jpg)

&nbsp;

9.使用Chrome桌面版的开发者工具调试模拟器中的Chrome移动版网页-资源面板

[![](http://a.kainy.cn/201308/9.%E4%BD%BF%E7%94%A8Chrome%E6%A1%8C%E9%9D%A2%E7%89%88%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E8%B0%83%E8%AF%95%E6%A8%A1%E6%8B%9F%E5%99%A8%E4%B8%AD%E7%9A%84Chrome%E7%A7%BB%E5%8A%A8%E7%89%88%E7%BD%91%E9%A1%B5-%E8%B5%84%E6%BA%90%E9%9D%A2%E6%9D%BF.jpg)](http://a.kainy.cn/201308/9.%E4%BD%BF%E7%94%A8Chrome%E6%A1%8C%E9%9D%A2%E7%89%88%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E8%B0%83%E8%AF%95%E6%A8%A1%E6%8B%9F%E5%99%A8%E4%B8%AD%E7%9A%84Chrome%E7%A7%BB%E5%8A%A8%E7%89%88%E7%BD%91%E9%A1%B5-%E8%B5%84%E6%BA%90%E9%9D%A2%E6%9D%BF.jpg)

&nbsp;

10.使用Chrome桌面版的开发者工具调试模拟器中的Chrome移动版网页-network面板

[![](http://a.kainy.cn/201308/10.%E4%BD%BF%E7%94%A8Chrome%E6%A1%8C%E9%9D%A2%E7%89%88%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E8%B0%83%E8%AF%95%E6%A8%A1%E6%8B%9F%E5%99%A8%E4%B8%AD%E7%9A%84Chrome%E7%A7%BB%E5%8A%A8%E7%89%88%E7%BD%91%E9%A1%B5-network%E9%9D%A2%E6%9D%BF.jpg)](http://a.kainy.cn/201308/10.%E4%BD%BF%E7%94%A8Chrome%E6%A1%8C%E9%9D%A2%E7%89%88%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E8%B0%83%E8%AF%95%E6%A8%A1%E6%8B%9F%E5%99%A8%E4%B8%AD%E7%9A%84Chrome%E7%A7%BB%E5%8A%A8%E7%89%88%E7%BD%91%E9%A1%B5-network%E9%9D%A2%E6%9D%BF.jpg)

&nbsp;

11.使用Chrome桌面版的开发者工具调试模拟器中的Chrome移动版网页-资源面板

[![](http://a.kainy.cn/201308/11.%E4%BD%BF%E7%94%A8Chrome%E6%A1%8C%E9%9D%A2%E7%89%88%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E8%B0%83%E8%AF%95%E6%A8%A1%E6%8B%9F%E5%99%A8%E4%B8%AD%E7%9A%84Chrome%E7%A7%BB%E5%8A%A8%E7%89%88%E7%BD%91%E9%A1%B5-%E8%B5%84%E6%BA%90%E9%9D%A2%E6%9D%BF.jpg)](http://a.kainy.cn/201308/11.%E4%BD%BF%E7%94%A8Chrome%E6%A1%8C%E9%9D%A2%E7%89%88%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E8%B0%83%E8%AF%95%E6%A8%A1%E6%8B%9F%E5%99%A8%E4%B8%AD%E7%9A%84Chrome%E7%A7%BB%E5%8A%A8%E7%89%88%E7%BD%91%E9%A1%B5-%E8%B5%84%E6%BA%90%E9%9D%A2%E6%9D%BF.jpg)

&nbsp;

12.使用Chrome桌面版的开发者工具调试模拟器中的Chrome移动版网页-时间轴面板

[![](http://a.kainy.cn/201308/12.%E4%BD%BF%E7%94%A8Chrome%E6%A1%8C%E9%9D%A2%E7%89%88%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E8%B0%83%E8%AF%95%E6%A8%A1%E6%8B%9F%E5%99%A8%E4%B8%AD%E7%9A%84Chrome%E7%A7%BB%E5%8A%A8%E7%89%88%E7%BD%91%E9%A1%B5-%E6%97%B6%E9%97%B4%E8%BD%B4%E9%9D%A2%E6%9D%BF.jpg)](http://a.kainy.cn/201308/12.%E4%BD%BF%E7%94%A8Chrome%E6%A1%8C%E9%9D%A2%E7%89%88%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E8%B0%83%E8%AF%95%E6%A8%A1%E6%8B%9F%E5%99%A8%E4%B8%AD%E7%9A%84Chrome%E7%A7%BB%E5%8A%A8%E7%89%88%E7%BD%91%E9%A1%B5-%E6%97%B6%E9%97%B4%E8%BD%B4%E9%9D%A2%E6%9D%BF.jpg)

&nbsp;

14.Fiddler设置：Tools-fiddler options下的Connections选项卡， 勾选“Allow remote pomputers to connect”

[![](http://a.kainy.cn/201308/14.Fiddler%E8%AE%BE%E7%BD%AE%EF%BC%9ATools-fiddler%20options%E4%B8%8B%E7%9A%84Connections%E9%80%89%E9%A1%B9%E5%8D%A1.jpg)](http://a.kainy.cn/201308/14.Fiddler%E8%AE%BE%E7%BD%AE%EF%BC%9ATools-fiddler%20options%E4%B8%8B%E7%9A%84Connections%E9%80%89%E9%A1%B9%E5%8D%A1.jpg)

15.设置-更多…-移动网络-APN-修改接入点-填写本机IP及fiddler设置的端口8888（比修改“手机”host方便不少）

[![](http://a.kainy.cn/201308/15.%E8%AE%BE%E7%BD%AE-%E6%9B%B4%E5%A4%9A%E2%80%A6-%E7%A7%BB%E5%8A%A8%E7%BD%91%E7%BB%9C-APN-%E4%BF%AE%E6%94%B9%E6%8E%A5%E5%85%A5%E7%82%B9-%E5%A1%AB%E5%86%99%E6%9C%AC%E6%9C%BAIP%E5%8F%8Afiddler%E8%AE%BE%E7%BD%AE%E7%9A%84%E7%AB%AF%E5%8F%A38888.jpg)](http://a.kainy.cn/201308/15.%E8%AE%BE%E7%BD%AE-%E6%9B%B4%E5%A4%9A%E2%80%A6-%E7%A7%BB%E5%8A%A8%E7%BD%91%E7%BB%9C-APN-%E4%BF%AE%E6%94%B9%E6%8E%A5%E5%85%A5%E7%82%B9-%E5%A1%AB%E5%86%99%E6%9C%AC%E6%9C%BAIP%E5%8F%8Afiddler%E8%AE%BE%E7%BD%AE%E7%9A%84%E7%AB%AF%E5%8F%A38888.jpg)

。