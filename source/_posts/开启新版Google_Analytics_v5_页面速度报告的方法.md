title: 开启新版Google Analytics v5 页面速度报告的方法
tags:
  - 方法
id: 2017
categories:
  - 建站❤编程
date: 2011-05-07 19:09:19
---

新版中增加的功能：

[![Google Analytics 开始提供页面速度报告](http://a.kainy.cn/201105/%E6%96%B0%E7%89%88Google%20Analytics%20v5%20%E9%A1%B5%E9%9D%A2%E9%80%9F%E5%BA%A6%E6%8A%A5%E5%91%8A.png "Google Analytics 开始提供页面速度报告")](http://a.kainy.cn/201105/%E6%96%B0%E7%89%88Google%20Analytics%20v5%20%E9%A1%B5%E9%9D%A2%E9%80%9F%E5%BA%A6%E6%8A%A5%E5%91%8A.png)

<!--more-->

页面速度报告。了解了不同人群访问网页的载入速度才能有针对性的进行优化，进入新版后，在左侧的Content里的Site Speed即可看到统计，包括：

*   哪个页面读取的最慢
*   不同地区的人们访问速度有何区别
*   在不同浏览器里的读取速度如何
*   哪个来源的读取速度最快
要启用这个功能，你需要修改统计代码。开启方法如下，添加图中黑色字体部分即可【注意：Asynchronous Code (默认)和 Traditional Snippet 添加到是不一样代码哦！请对照你采用的统计代码类型修改】。

![Google Analytics 新版 速度 方法](http://a.kainy.cn/201105/google-analytics-site-speed-code.png "Google Analytics 新版 速度 方法") .

正确修改后，你才能在后台看到速度的统计报告。如果在24小时候还没看到统计数据，那么请检查你的代码是否正确修改。