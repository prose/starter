title: 用Navigation Timing API测试前端性能
tags:
  - html5
  - 前端
  - 性能
id: 2327
categories:
  - HTML
date: 2013-02-11 13:58:06
---

[Navigation Timing 接口](https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/NavigationTiming/Overview.html "Navigation Timing")为我们提供了监控网站性能所需的数据。相比于以往基于JS的监测机制，此接口提供的数据更为准确和全面。

JS中通过 window.performance 调用数据，该特性在IE9、最新的Firefox和Chrome中都已实现（http://caniuse.com/nav-timing）

具体的介绍已经有人做了详尽总结 http://www.cnblogs.com/mrsunny/archive/2012/09/04/2670727.html

为了方便理解和测试，对图片稍稍加工为网页，把各时间节点和区间（差值）计算结果标注在旁边，有兴趣的可以访问：[http://github.kainy.cn/NavigationTiming/](http://github.kainy.cn/NavigationTiming/ "Navigation Timing test")

<!--more-->

[caption id="attachment_2328" align="aligncenter" width="300"][![timing-overview](http://blog.kainy.cn/wp-content/uploads/2013/01/timing-overview-2013-01-23_143700-300x172.png)](http://blog.kainy.cn/wp-content/uploads/2013/01/timing-overview-2013-01-23_143700.png) 时间点和时间间隔以颜色区分，鼠标移到数字上显示指标名[/caption]

页面上很全面的记录了一次网页加载过程中各个环节的性能指标，例如网络情况可以参考DNS+TCP时间，服务器响应速度参考Request时长，服务器回传页面到浏览器速度参考Response时长等等。

前端性能主要看图片后半部分，比如document对象创建完成的时刻（domLoading）、文档解析完成的时刻（domInteractive）以及javascript类库中DOMready事件触发的时刻（DOMComplete）等，时刻相减得到的就是花费时长。

有个问题不太明白的是关于时长DOMComplete，页面上计算出的结果（图中右上角绿色第二块）和浏览器开发者工具中DOMContentLoaded值差别明显（落在domContetLoaded时刻～ domComplete时刻区间内），根据[规范中的描述](https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/NavigationTiming/Overview.html#dom-performancetiming-domcomplete "domComplete attribute") 这样的计算方法（domComplete - navigationStart）应该没问题，实在令人不解。

还有一个现象是FF下测试结果，onLoad和DOMContentLoaded值比Chrome下相同页面的低不少（均关闭缓存），亦不知何解。