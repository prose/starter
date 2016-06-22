title: 使用Android模拟器进行移动版网页的兼容性测试
id: 2506
categories:
  - 系统❤软件
date: 2013-07-29 21:49:30
tags:
---

目前跟进的新版开放平台和论坛项目中都涉及移动版页面的开发， 测试那边都使用实体机来测试页面兼容性。  除了一堆设备外还需要可连接公司内网的wifi帐号， 比较麻烦。而跨终端预览工具[Focus](http://focus.peaches.io/?url=www.kainy.cn&amp;type=mac) 虽然支持UA改写可模拟不同分辨率， 但渲染仍是使用PC端浏览器， 如果要测试UC等第三方浏览器下网页展示效果就无能为力了， 而这些浏览器的份额又不容忽视。 所以考虑使用模拟器进行网页兼容性测试， 提高效率。

Android官网提供的开发者工具包（ adt-bundle） 已经很好的集成了所需工具， 基本不需要什么额外的设置， 以下是操作步骤：

安装Java SDK 和 ADT（[Android Developer Tools](http://dl.google.com/android/adt/adt-bundle-windows-x86_64-20130717.zip)）之后。

<!--more-->

1.打开ADT后点击左上角（红框内）的小图标；
[![](http://a.kainy.cn/201307/1.%E6%89%93%E5%BC%80ADT%E5%90%8E%E7%82%B9%E5%87%BB%E5%B7%A6%E4%B8%8A%E8%A7%92%EF%BC%88%E7%BA%A2%E6%A1%86%E5%86%85%EF%BC%89%E7%9A%84%E5%B0%8F%E5%9B%BE%E6%A0%87.jpg)](http://a.kainy.cn/201307/1.%E6%89%93%E5%BC%80ADT%E5%90%8E%E7%82%B9%E5%87%BB%E5%B7%A6%E4%B8%8A%E8%A7%92%EF%BC%88%E7%BA%A2%E6%A1%86%E5%86%85%EF%BC%89%E7%9A%84%E5%B0%8F%E5%9B%BE%E6%A0%87.jpg)

2.新建虚拟设备；

[![](http://a.kainy.cn/201307/2.%E6%96%B0%E5%BB%BA%E8%99%9A%E6%8B%9F%E8%AE%BE%E5%A4%87.jpg)](http://a.kainy.cn/201307/2.%E6%96%B0%E5%BB%BA%E8%99%9A%E6%8B%9F%E8%AE%BE%E5%A4%87.jpg)
3.通过Device下拉栏选择模拟器配置，我们的目的是测试网页兼容性所以主要关注的是屏幕尺寸-分辨率；

[![](http://a.kainy.cn/201307/3.%E9%80%9A%E8%BF%87Device%E4%B8%8B%E6%8B%89%E6%A0%8F%E9%80%89%E6%8B%A9%E6%A8%A1%E6%8B%9F%E5%99%A8%E9%85%8D%E7%BD%AE%EF%BC%8C%E6%88%91%E4%BB%AC%E7%9A%84%E7%9B%AE%E7%9A%84%E6%98%AF%E6%B5%8B%E8%AF%95%E7%BD%91%E9%A1%B5%E5%85%BC%E5%AE%B9%E6%80%A7%E6%89%80%E4%BB%A5%E4%B8%BB%E8%A6%81%E5%85%B3%E6%B3%A8%E7%9A%84%E6%98%AF%E5%B1%8F%E5%B9%95%E5%B0%BA%E5%AF%B8-%E5%88%86%E8%BE%A8%E7%8E%87.jpg)](http://a.kainy.cn/201307/3.%E9%80%9A%E8%BF%87Device%E4%B8%8B%E6%8B%89%E6%A0%8F%E9%80%89%E6%8B%A9%E6%A8%A1%E6%8B%9F%E5%99%A8%E9%85%8D%E7%BD%AE%EF%BC%8C%E6%88%91%E4%BB%AC%E7%9A%84%E7%9B%AE%E7%9A%84%E6%98%AF%E6%B5%8B%E8%AF%95%E7%BD%91%E9%A1%B5%E5%85%BC%E5%AE%B9%E6%80%A7%E6%89%80%E4%BB%A5%E4%B8%BB%E8%A6%81%E5%85%B3%E6%B3%A8%E7%9A%84%E6%98%AF%E5%B1%8F%E5%B9%95%E5%B0%BA%E5%AF%B8-%E5%88%86%E8%BE%A8%E7%8E%87.jpg)

4.测试往往需要修改host，可通过adb push命令完成， 记得先执行“adb remount”哦， 不然会因为权限问题报错；

[![](http://a.kainy.cn/201307/4.%E6%B5%8B%E8%AF%95%E5%BE%80%E5%BE%80%E9%9C%80%E8%A6%81%E4%BF%AE%E6%94%B9host%EF%BC%8C%E5%8F%AF%E9%80%9A%E8%BF%87adb%20push%E5%91%BD%E4%BB%A4%E5%AE%8C%E6%88%90.jpg)](http://a.kainy.cn/201307/4.%E6%B5%8B%E8%AF%95%E5%BE%80%E5%BE%80%E9%9C%80%E8%A6%81%E4%BF%AE%E6%94%B9host%EF%BC%8C%E5%8F%AF%E9%80%9A%E8%BF%87adb%20push%E5%91%BD%E4%BB%A4%E5%AE%8C%E6%88%90.jpg)

5.使用模拟器自带浏览器测试网页兼容性；

[![](http://a.kainy.cn/201307/5.%E4%BD%BF%E7%94%A8android%E5%8E%9F%E7%94%9F%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B5%8B%E8%AF%95%E7%BD%91%E9%A1%B5%E5%85%BC%E5%AE%B9%E6%80%A7.jpg)](http://a.kainy.cn/201307/5.%E4%BD%BF%E7%94%A8android%E5%8E%9F%E7%94%9F%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B5%8B%E8%AF%95%E7%BD%91%E9%A1%B5%E5%85%BC%E5%AE%B9%E6%80%A7.jpg)

&nbsp;

6.如果需要使用第三方浏览器调试， 则需先通过adb install 命令安装apk 。

附上本届D2论坛 [@徐凯-鬼道](http://weibo.com/777865156) 带来的天猫移动浏览器兼容性分级， 可作为选测参考， 再结合自己网站的访客情况来确定测试基准。

[![](http://a.kainy.cn/201307/%E7%A7%BB%E5%8A%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7%E5%88%86%E7%BA%A7.jpg)](http://a.kainy.cn/201307/%E7%A7%BB%E5%8A%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7%E5%88%86%E7%BA%A7.jpg)。