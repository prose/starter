title: Chrome充当手机模拟器
tags:
  - chrome
  - 手机
  - 模拟器
  - 浏览器
id: 1510
categories:
  - 系统❤软件
date: 2010-10-01 16:16:57
---

[![](http://a.kainy.cn/201009/%E5%9B%BE%E6%A0%87.png)](http://a.kainy.cn/201009/%E5%9B%BE%E6%A0%87.png)用过一个Chrome扩展叫做[Mobile Browser Simulator](https://chrome.google.com/extensions/detail/aefijhkcgkcnnafpibdnmoopjlpmpgpl?hl=zh-cn)，说是用来模拟移动浏览器的，可实际安装后发现只是模拟了“形”——手机浏览框的尺寸，如果不带参数浏览看到的仍是www网页，比如使用该插件输入[http://kainy.cn/](http://kainy.cn/)浏览本博客则在框内显示的仍是PC浏览器的效果，而不是输入 [这个](http://kainy.cn/?wpmp_switcher=mobile) URL时显示的wap页面。

于是弄了个小玩意，可以用谷歌Chrome浏览器，很方便地用来当3G手机模拟器。在安装了Chrome的系统下双击小程序，即可启动Chrome 模拟相应手机的浏览器去访问3G手机网页，从而真正做到“神形兼备”。

如果觉得Chrome页面太大，“神”似了 但看起来感觉却不是手机浏览那么回事，也可以和MBS扩展结合起来使用（附件包里提供了汉化过的 mbs汉化.crx）

<span style="color: #ff0000;">[<span style="color: #ff0000;">点击此处下载附件包</span>](http://a.kainy.cn/201009/12.%E6%89%8B%E6%9C%BA%E6%A8%A1%E6%8B%9F%E5%99%A8.zip)<!--more-->
</span>

至于原理嘛，也非常简单，很多网站都通过User-Agent来判断浏览器类型，如果是3G手机，显示手机页面内容，如果是普通浏览器，显示普通网页内容。小工具就是通过修改Chrome启动参数：User-Agent 来实现以假乱真的功能的 \(^o^)/~。

有了这个小玩意，开发手机界面的筒子们就不用为了测试页面效果而特地去安装个模拟器软件啦。

[![](http://a.kainy.cn/201009/kainy.cn.png)](http://a.kainy.cn/201009/kainy.cn.png)

[![](http://a.kainy.cn/201009/%E5%85%AB%E6%96%B9.png)](http://a.kainy.cn/201009/%E5%85%AB%E6%96%B9.png)

<span style="color: #ffffff;">P.S：看了最后一张图你想到什么了没？对，想体验LBS服务而又没有移动设备的话，也可以用这种方法骗过浏览器检测哦！这里测试通过的是网易八方，签到没问题了，其他服务大家有兴趣的可以试试哈。</span>