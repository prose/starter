title: 调用Google Maps API实现HTML5 Geo定位
tags:
  - html5
  - 作品
  - 应用
id: 1732
categories:
  - HTML
date: 2010-11-20 21:47:44
---

HTML5进入人们视线的时间并不长，但我们已经能看到浏览器变得更强大，应用也变得越具智能。充分利用HTML5的新特性能使我们的生活更加便利。这儿就有一个例子——我们结合HTML5技术和地图应用接口来实现定位。

该应用可兼容的浏览器包括：Opera,Chrome, FireFox,Safari。以及……偶滴U8110自带浏览器（Safari Mobile）上测试通过。

[![允许](http://a.kainy.cn/201011/%E6%89%8B%E6%9C%BA%20html5geo%E5%AE%9A%E4%BD%8D%E5%BA%94%E7%94%A8%20%E5%85%81%E8%AE%B8%E5%AE%9A%E4%BD%8Dsnap20101120_212031.png)<!--more-->](http://a.kainy.cn/201011/%E6%89%8B%E6%9C%BA%20html5geo%E5%AE%9A%E4%BD%8D%E5%BA%94%E7%94%A8%20%E5%85%81%E8%AE%B8%E5%AE%9A%E4%BD%8Dsnap20101120_212031.png).

[![定位成功](http://a.kainy.cn/201011/%E6%89%8B%E6%9C%BA%20html5geo%E5%AE%9A%E4%BD%8D%E5%BA%94%E7%94%A8%20%E6%89%BE%E5%88%B0%E4%BD%8D%E7%BD%AEsnap20101120_212438.png)](http://a.kainy.cn/201011/%E6%89%8B%E6%9C%BA%20html5geo%E5%AE%9A%E4%BD%8D%E5%BA%94%E7%94%A8%20%E6%89%BE%E5%88%B0%E4%BD%8D%E7%BD%AEsnap20101120_212438.png)

大致原理是这样的：浏览器通过Google Map Canvas将我们的位置信息发送给API接口，然后显示地图位置。不过目前定位的准确度有时会出问题，比如福州大学城就跑到乌山路去鸟~不太力额。。。

[![Googlemap定位误差](http://a.kainy.cn/201011/%E5%AE%9A%E4%BD%8D%E5%81%8F%E5%B7%AE.png)](http://a.kainy.cn/201011/%E5%AE%9A%E4%BD%8D%E5%81%8F%E5%B7%AE.png)

演示地址是：[http://kainy.googlecode.com/svn/trunk/HTML5_Geo_location_using_the_Google_API/index.html](http://kainy.googlecode.com/svn/trunk/HTML5_Geo_location_using_the_Google_API/index.html) .