title: js合并优化实践
tags:
  - 优化
  - 性能
id: 2749
categories:
  - 心路历程
---

http1.1时代，js资源合并（bundling optimization）仍是一个必要的实践。

我们在发版前会将入口模块引用的模块打包为一个js，但是对于重用度高的类库如jQ等，如果都合并进来就不太合适了，因为这部分模块改动频率不高，独立加载可发挥浏览器缓存的优势（图1），

<!--more-->

![](http://kainy-migs.stor.sinaapp.com/original/50d5c147c8f04a0f22e195dc3993e634.jpg)

所以对打包的工具r.js做了个小改动（图2），打合并包时判断模块尺寸，如果超过20k（经验值），就突出显示，供优化参考；

![](http://kainy-migs.stor.sinaapp.com/original/41101a1e5d35600a3b22a637d4e8252d.jpg)

执行打包命令的效果（图3），可以看出，在某个入参加密需求中引入的rsa模块由于几乎全局引用到，文件尺寸50k被打入所有包中，这个就应该抽离出来单独加载

![](http://kainy-migs.stor.sinaapp.com/original/b6d1ebab9c71ef2cace3be197c8c7132.jpg)

前后打包尺寸对比：（图4，图5）通过对比可以看出效果还是比较明显的。

[![](http://kainy-migs.stor.sinaapp.com/original/d3723bbf081210bc8043298e09ea7bec.jpg)](http://kainy-migs.stor.sinaapp.com/original/d3723bbf081210bc8043298e09ea7bec.jpg)

————————————

[![](http://kainy-migs.stor.sinaapp.com/original/97d02201a96a4b2892bfb232760697b0.jpg)](http://kainy-migs.stor.sinaapp.com/original/97d02201a96a4b2892bfb232760697b0.jpg)

分享这个小技巧其实并没啥高深的东东，但从数据来看，产出是正向的，这就所谓“因上努力”。下一篇介绍个监控数据收集的思路，结果上咱们也主动一把。