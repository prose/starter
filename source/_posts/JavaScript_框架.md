title: JavaScript 框架
tags:
  - JavaScript
  - 兼容
  - 框架
id: 1646
categories:
  - JavaScript
date: 2010-11-01 14:54:15
---

由于不同 Web 浏览器所支持DOM标准版本不尽相同，与 HTML 和 CSS一样，不同的浏览器有不同的 JavaScript 实现方式。这使得早期 JavaScript 代码实现**跨浏览器兼容**成为一场噩梦。

就拿网站右下角常见的浮动提示框举例：

1.  首先，必须通过判断`getElementById()` 方法存在与否来决定是用document.getElementById("floater").style还是document.floater方法进行浮动框定位；
2.  要想把浮动内容固定在右下角，脚本需要知道可用页面的宽度和高度，这时又得考虑不同浏览器上访问这些对象的方法也存在window.innerHeight和document.body.clientHeight的差异；
3.  针对上下或左右滚动页面时浮动内容也需要随着页面移动，又需要考虑是用window.pageXOffset方法还是document.body.scrollLeft方法。。。
而使用JavaScript 框架就清净多了，比如jQuery就有专门的Floatbox库扩展，一句$.floatbox({content: "xxxx" );就能搞定，要是心情好还可以考虑是否加入渐变效果啥的，jQuery库在众多流行的 Web 浏览器版本上进行了可靠性测试，我们可以放心地使用这些框架，产生的JavaScript代码将会在不同浏览器和平台上以类似的方式工作。<!--more-->

JavaScript 框架除了能轻松生成跨浏览器兼容的 JavaScript 代码外，更重要的是包含了大量的**工具和函数**。

大多数 JavaScript 框架都具备的实用特性包括：

*   选择器
*   DOM 遍历
*   DOM 操作
*   实用函数
_使用 JavaScript 框架可以更容易地编写检索、遍历、操作 DOM 元素。js框架不仅提供获取 DOM 元素的快捷函数，还允可以以菊花链（别想歪了哦）方式查找任意深度的父元素、子元素、兄弟元素。最后，框架还提供一系列函数来更轻松地操作这些对象，可以改变、添加或删除内容本身；或者使用 CSS 样式类来改变元素的外观。_

*   事件处理
_框架的另一重要特性是其改进的事件处理支持。由于不同浏览器的实现方式各不相同，跨浏览器事件处理将会非常艰难。因此 JavaScript 框架通常封装浏览器事件，并提供一组有用的跨浏览器兼容的函数来进行处理。有些框架还会提供一组标准键盘代码来表示基于键盘的事件（如按下 Escape 键、Return 键、光标键，等等）。_

*   Ajax
_所有这些特性都非常有用，但 JavaScript 框架有一个特性对于它最近的流行非常重要 — 支持 Ajax。与 JavaScript 的其他许多方面一样，每个 Web 浏览器往往以不同方式支持 Ajax，这使得以一种在所有 Web 浏览器中都受支持的方式处理 Ajax 变得十分复杂。几乎所有 JavaScript 框架都包含某种形式的 Ajax 库支持，通常提供 Ajax 请求和响应对象，以及用于评价响应、更新 DOM 元素、查询特定请求的帮助函数（helper）。_

**个人理解**，所有这些JavaScript库所作的就是

1.  定义一套自己的操作语法，比如用来查找元素的伪选择器（pseudo-selector）；
2.  将一些常用操作写成实用（Utility）函数，提供接口供使用者调用；
3.  在此基础上扩展一些高级功能，把原本需要大量JavaScript代码来完成的操作优化后全部打包到库中，固化为解决特定问题的工具。
4.  UX 增强功能，插件扩展。
一个JavaScript框架就如一个工具箱，不同的JavaScript框架就是不同的工具箱，工具箱不同就在于里面的工具规格和操作手册之间的差异。有了工具和操作手册，完成原本需要手工完成的操作就省力、省心得多了。但就像世上不存在万能工具，工具总是不如手指来的灵活，工具所能胜任的工作也大大受到限制，也因此产生了不同的工具箱来适应不同工作环境，这也就是为什么jQuery虽然貌似最受欢迎，也还有多种框架并存的原因。

**主流js框架特性**对比：

[![js框架特性对比](http://a.kainy.cn/201010/JavaScript%20Framework%20%E5%AF%B9%E6%AF%94%E8%A1%A8.png "js框架特性对比")](http://a.kainy.cn/201010/JavaScript%20Framework%20%E5%AF%B9%E6%AF%94%E8%A1%A8.png)

**非主流框架介绍/演示：**

#### 1. [Dojo](http://dojotoolkit.org/) ([演示地址](http://dojocampus.org/explorer/))

Dojo是一个强大的面向对象JavaScript框架。主要由三大模块组成：Core、Dijit、DojoX。Core提供ajax，events，packaging，CSS-based querying，animations，JSON等相关操作API。Dijit是一个可更换皮肤，基于模板的WEB UI控件库。DojoX包括一些创新/新颖的代码和控件：DateGrid，charts，离线应用，跨浏览器矢量绘图等。

#### 2. [Mocha](http://greghoustondesign.com/demos/mocha/) ([演示地址](http://mochaui.com/demo/))

Mocha是一个构建在Mootools Javascript框架上的web应用程序UI库。Mocha GUI组件由canvas标记产生。

#### 3. [Rich Ajax Framework](http://openrico.org/) ([演示地址](http://demos.openrico.org/))

Rich是一个面向对象的JavaScript框架，用于开发RIA应用程序。它实现了Grid，Calendar，Tree，Accordion等控件。简化Ajax处理，拖放支持，提供幻灯片展示效果等。

#### 4. [Glow](http://www.bbc.co.uk/glow/) ([演示地址](http://www.bbc.co.uk/glow/demos/))

Glow是由BBC广播公司开发的一个开源JavaScript框架，提供的功能与jQuery、MooTools等框架相似。它除了提供一些常用的功能和解决跨浏览器的问题之外，还提供一组Web UI控件.

#### 5. [UIZE JavaScript Framework](http://www.uize.com/) ([演示地址](http://www.uize.com/))

UIZE JavaScript Framework是一个强大、开源、面向对象的JavaScript框架。支持widgets、AJAX、DOM、模板等。

#### 6. [EdoJS框架](http://www.edojs.com/) ([演示地址](http://www.edojs.com/demo.html))

1.  **丰富的组件库**
2.  **简单,强大,灵活**的可编程性
3.  强大的**可视化设计支持** : IDE
4.  完善的文档和细致的教程: Api doc
5.  **小体积** : javascript css一共只有100K
6.  **专业的团队**,强大细致的技术支持 : 全天候的服务, 您可以随时联系我们解决您的疑难杂症.
7.  **高级UI** : 除常规组件外,提供甘特图,日历,文档管理器和excel这样的高级组件.
8.  **极限的性能 **: edo做出来的东西,初始化速度达到理论的极限值!组件的操作性能也是极速!
9.  对传统UI框架的**突破** : 随着界面的复杂度增加,浏览器内的DOM元素量增多,导致用户操作越来越慢,UI的响应越来越差,甚至导致做出来的界面慢的无法运行. edo天然做了这方面的优化,强大的”动态”机制,即时您需要支持1万行N(N&gt;=100)列的表格组件,在edo中也已经成为现实! **性能!是edo的一大杀手锏。**

#### 7. [June Framework](http://june-js.com/index.php) ([演示地址](http://june-js.com/v20/examples/))

基于Core核心库的一个小巧的JS框架，它的作者是 Kevin Yank 和 Cameron Adams。开发人员可以将这个框架引入自己的项目中，不必担心与其它JS库发生冲突，因为JUNE是它独特的命名空间。

JUNE 具有强大的支持功能：

*   DOM 选择 (例如: JUNE.Dom.getByTags/getByClass/getByAttribute),
*   DOM 操作 (例如: JUNE.Dom.insertBefore/insertAfter/removeChild

#### 8. [Scripty2](http://scripty2.com/) ([演示地址](http://scripty2.com/demos/cards/))

Scripty2 一个完全重写的Script.aculo.us 脚本库，增强了动感效果。

#### 9. [Ajax Push Engine](http://www.ape-project.org/en/home.html) ([演示地址](http://www.ape-project.org/en/demos/))

Ajax Push Engine为一开源的插件,允许数以千计浏览者即时交换数据,而无需在重新加载网页,也不需要安装其他的插件。

由以上js框架的演示可以看到使用 JavaScript 框架编程的优势以及它们是如何简化交互式应用程序的编写。用户界面（UI）组件以及用户体验（UX）增强，这些在以往需要付出巨大努力来完成的工作竟可以如此轻松地完成。JavaScript框架正在使开发人员从原本注重效果的代码实现方法中解放出来，将更多的精力投入到交互功能的实现和用户体验的提升中。可以预见，在不远的将来，JavaScript必将在应用程序从桌面转移到 Web 平台（比如云操作系统）和前端开发领域大展拳脚，而日益健全的JavaScript框架将为此锦上添花。

参考资料：

1.  这里的几个演示将带你体验JavaScript的精妙之处 ：[http://goo.gl/qJ1P](http://goo.gl/qJ1P)
2.  以及让Kainy喜欢上JavaScript的一个小玩意：
_打开任一网页，在地址栏粘贴下面一段代码后就可以编辑该网页_
> javascript:document.body.contentEditable='true'; document.designMode='on'; void 0
.