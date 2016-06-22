title: '是时候使用< !DOCTYPE HTML >了吗？'
tags:
  - doctype
  - html
id: 1773
categories:
  - HTML
date: 2010-12-11 23:22:37
---

&lt;!DOCTYPE html&gt;是HTML5中唯一的doctype，也被视作将网页“升级”到HTML5的第一步。

相比原来又臭又长的doctype，这种精简的doctype声明深受开发者们喜爱，其好处显而易见：**一方面便于记忆，一方面节省流量，最重要的是能够保持良好的****浏览器****兼容性**；三大好处，何乐而不为呢。但是马克思主义哲学教导我们 要用辩证思维看待事物，&lt;!DOCTYPE html&gt;华丽丽的外表下究竟存在哪些不足之处呢？俗话说“初生牛犊不怕虎”而半桶水又叮当响，我也来说说自己的疑问，一来希望得到高手们的指点，二来菜鸟的视角若能引发你的思考那也善莫大焉。

&lt;!DOCTYPE&gt; 声明位于文档中的最前面的位置，处于 &lt;html&gt; 标签之前。此标签可告知浏览器文档使用哪种 HTML 或 XHTML 规范，即应该用什么规则集来解释文档中的标记。换句话说，使用“&lt;!DOCTYPE HTML&gt;”声明的网页，浏览器在“阅读”的时候就是以HTML5的规则集来解释文档中的标记，那我们就来看看HTML5的几个新特性对网页文档解释过程所产生的影响：<!--more-->

## 新标记的影响

由[WebCore中的渲染机制](http://blog.csdn.net/tuhuolong/archive/2010/09/12/5879094.aspx)可知，浏览器在渲染网页的过程中，首先要创建渲染树(渲染对象[renderer]通过DOM创建)，然后对节点匹配对应的渲染方式，最终完成网页展示。而HTML5的新特性之一就是加入了article, aside, audio, canvas, command, datalist, details, embed, figcaption, figure, footer, header, hgroup, keygen, mark, meter, nav, output, progress, rp, rt, ruby, section, source, summary, time, video, wbr...近30个新元素，这就意味着每个节点在渲染时需要多进行30次匹配尝试，而普通网页动辄成百上千元素，也许对于现在的计算机而言这点运算量基本可忽略。但无论如何，因使用&lt; !DOCTYPE HTML &gt;声明而导致的资源浪费实实在在摆在那儿。

## 新应用程序接口（API）

除了原先的DOM接口，HTML5增加了更多API,如：

1.  用于即时2D绘图的Canvas标签
2.  定时媒体回放
3.  离线数据库存储
4.  文档编辑
5.  拖拽控制
6.  浏览历史管理

那么这些新增的API又从何而来呢？

> **离线数据库**：这个功能将内嵌一个本地的 SQL 数据库，以加速交互式搜索，缓存以及索引功能。同时，那些离线 Web 程序也将因此获益匪浅。
> 
> **不需要插件的富动画--Canvas**： 对象将给浏览器带来直接在上面绘制矢量图的能力，这意味着我们可以脱离 Flash 和 Silverlight，直接在浏览器中显示图形或动画。一些最新的浏览器，除了 IE，已经开始支持 Canvas。
> 
> — —： [百度百科](http://baike.baidu.com/view/951383.htm#6)
由以上描述不难看出，Canvas、Gear的API正是由浏览器自带程序提供，也许是用原先的doctype声明时这些程序都未激活，而你一句“&lt;!DOCTYPE HTML&gt;”就把别人唤醒了，接下来网页中却没有用到Canvas，这是不是有些烽火戏诸侯的意思呢？我们都知道系统为加快某些程序的启动，往往增加一些自动加载项目，而这些自启动的服务都会占用系统资源，按这种思路，你在实际网页中没有用到任何新特性，却使用“&lt;!DOCTYPE HTML&gt;”声明也有可能增加浏览器开销的嫌疑哦。

这就像浏览器通过MEMI类型区分不同种类的数据从而调用相应的软件打开文件。在浏览器向服务器请求时，服务器在返回所请求的文件之前会发送一个“header”来告诉浏览器如何处理接下来发出的文件，最常见的header就是所谓的 Content-Type，通常长得这模样：Content-Type: text/html，例如web浏览器就是通过MIME类型<span style="font-family: 宋体; line-height: normal; font-size: small; color: #4e4e4e;">video/quicktime</span>来确定xx.mov这个文件是需要QuickTimePlayer播放，然后启动QuickTimePlayer播放之。

<span style="font-family: 宋体; line-height: normal; font-size: small; color: #4e4e4e;"> </span>

本文全由个人目前的认识和一些搜索结果拼凑而成。也许你看到这里已被雷的外焦里嫩，也可能多年后的自己回过头来看这篇文章也会为今天的无知发笑，但那又何妨，谁还不是这么走过来的对吧。