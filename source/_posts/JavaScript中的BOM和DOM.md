title: JavaScript中的BOM和DOM
tags:
  - BOM
  - DOM
  - JavaScript
  - 标准
id: 1531
categories:
  - JavaScript
date: 2010-10-10 00:51:46
---

**BOM（JavaScript Object Modle）——浏览器对象模型**是浏览器开发厂商为防止目前以及日后可能加入的大量可被控制的页面元素（HTML标签）给开发者造成的混乱，而为浏览器定义的浏览器模型，BOM结构如图示：

[![](http://a.kainy.cn/201010/browser%20object%20model%20BOM%E7%BB%93%E6%9E%84%E5%9B%BE.png)](http://a.kainy.cn/201010/browser%20object%20model%20BOM%E7%BB%93%E6%9E%84%E5%9B%BE.png)<!--more-->

BOM并不是标准，因为它关注的是浏览器的整体结构，包括浏览器窗口的属性和行为。每个浏览器都可以有自己的BOM，它们并不是完全一致的，上图只是列出了大多数浏览器都兼容的部分。

**DOM（Document Object Modle）——是文档对象模型**的简称，[官方对DOM的解释](http://www.w3.org/DOM/#what)是：应用于HTML或者XML的一种与平台、语言无关的接口（方法和属性），允许程序和脚本动态访问和更新文档的内容，结构和样式。

**与BOM关注浏览器的整体不同，DOM只关注浏览器所载入的文档**，也就是HTML标签对象。DOM并不是BOM的替代品，而只是把能够统一的东西尽量标准化。从逻辑上说BOM和DOM的关系，就是不管用什么设备生产罐头，生产出来的罐头必须符合国家罐头标准，这样才能减少由罐头引发的食品卫生案件。

对HTML中的节点而言，节点以BOM模型对页面本身进行处理；而DOM则增加了处理节点间关系的方便性。事实上，DOM的出现也是W3C为了标准化管理文档结构而创建的一种解决方案。

**DOM与JavaScript的关系**：无论组件有多少配置属性、还是事件、方法等等，其最终都会转化为HTML在浏览器上显示出来，而每一个HTML页面都有一个层次分明的DOM树模型，浏览器中的所有内容都有相应的DOM对象，动态改变页面的内容，正是通过使用脚本语言来操作DOM对象实现。

<div id="_mcePaste">仅仅有DOM是不够的，比如要把页面中的某一个节点移到其它位置，要给某一个节点添加阴影效果，要隐藏或显示某一个节点等，我们都需要通过 javascript的操作。</div>