title: 纯CSS 利用“-moz-box-shadow”为图片添加阴影效果
tags:
  - CSS
  - 图片
  - 效果
  - 网页
id: 475
categories:
  - 建站❤编程
date: 2010-01-10 23:20:36
---

这几天Kainy在网上闲逛见到一些博客的图片有漂亮的阴影效果，还以为是每张图片上传前处理过，可是在ie6下浏览则无阴影效果，问了好多地方都没结果，网络上查找到的也大都是用css调用带阴影图片做背景和图片结合起来，形式的阴影效果，并非纯css生成的阴影效果。

今天看到QQ空间的相册中也用到了这一效果，于是翻翻源码，经一番努力发现原来是用到了“-moz-box-shadow”这──盒子阴影。这个特性允许在任何支持盒子模型的元素上投射出“阴影”效果。
<div id="_mcePaste">由于CSS3的盒子阴影属性目前还在发展中，所以Firefox特化的把他实现为-moz-box-shadow。这种特化方式是Firefox实现CSS中的实验属性的方法之一，在属性前面加上前缀“-moz-”。等到这个属性最终被CSS3确定之后，属性会重新命名为“box-shadow”。</div>
<span style="font-family: verdana, geneva, sans-serif; line-height: 17px; color: #111111;"> </span>

为元素添加盒子阴影效果非常直观。[CSS3标准中](http://dev.w3.org/csswg/css3-background/#the-box-shadow)允许的取值为：<!--more-->

    none | &lt;shadow&gt; [ &lt;shadow&gt; ]*
    `</pre>

    这里`&lt;shadow&gt;`被定义为：

    <pre class="text" style="font: normal normal normal 1em/133% 'courier new', courier, monospace; font-family: monospace;">`&lt;shadow&gt; = inset? &amp;&amp; [ &lt;length&gt;{2,4} &amp;&amp; &lt;color&gt;? ]
    `</pre>

    前面两个length长度取值对应着影子在_水平和竖直方向的位移_。第三个length长度取值是_模糊半径_。最后第四个length长度取值是_传播半径_，使用正数表示影子拉长，使用负数表示影子缩短，而这个长度是相对于父元素的大小而言的。

    知道了以上参数，要实现图片的阴影效果也就不难了，例如wp中，只需

    1.添加样式：

    <pre class="css" style="font: normal normal normal 1em/133% 'courier new', courier, monospace; font-family: monospace;">`shadow{-moz-box-shadow<span style="color: #00aa00;">:</span> <span style="color: #993333;">2px</span> <span style="color: #993333;">2px</span> <span style="color: #993333;">6px</span> <span style="color: #cc00cc;">#00f</span><span style="color: #00aa00;">;}</span>`</pre>
    2.在插入图片时候，“高级选项”→“**CSS Class<span style="color: #111111; font-family: verdana, geneva, sans-serif; font-weight: normal; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; line-height: 17px;">”中写入 “shadow” 更新就Ok啦。</span>**

    为了获得最大程度的支持，Kainy建议您定义全部三个属性，包括`-moz`、`-webkit`和标准的CSS3词法。相应的浏览器会选择相应的属性进行实现。即：

    <pre class="css" style="font: normal normal normal 1em/133% 'courier new', courier, monospace; font-family: monospace;">`
    shadow{`</pre>
    <pre class="css" style="font: normal normal normal 1em/133% 'courier new', courier, monospace; font-family: monospace;">`-moz-box-shadow<span style="color: #00aa00;">:</span> <span style="color: #993333;">1px</span> <span style="color: #993333;">1px</span> <span style="color: #993333;">10px</span> <span style="color: #cc00cc;">#00f</span><span style="color: #00aa00;">;</span>
    -webkit-box-shadow<span style="color: #00aa00;">:</span> <span style="color: #993333;">1px</span> <span style="color: #993333;">1px</span> <span style="color: #993333;">10px</span> <span style="color: #cc00cc;">#00f</span><span style="color: #00aa00;">;</span>
    box-shadow<span style="color: #00aa00;">:</span> <span style="color: #993333;">1px</span> <span style="color: #993333;">1px</span> <span style="color: #993333;">10px</span> <span style="color: #cc00cc;">#00f</span><span style="color: #00aa00;">;}</span>`</pre>
    <span style="font-family: verdana, geneva, sans-serif; line-height: 17px; color: #111111;"> </span>

    如果你需要，你还可以定义多个阴影，使用逗号隔开（例子来自[Markus Stange](http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/)）：

    <pre class="css" style="font: normal normal normal 1em/133% 'courier new', courier, monospace; font-family: monospace;">`
    -moz-box-shadow<span style="color: #00aa00;">:</span> 0 0 <span style="color: #993333;">20px</span> <span style="color: #000000; font-weight: bold;">black</span><span style="color: #00aa00;">,</span> <span style="color: #993333;">20px</span> <span style="color: #993333;">15px</span> <span style="color: #993333;">30px</span> <span style="color: #993333;">yellow</span><span style="color: #00aa00;">,</span> <span style="color: #993333;">-20px</span> <span style="color: #993333;">15px</span> <span style="color: #993333;">30px</span> <span style="color: #993333;">lime</span><span style="color: #00aa00;">,</span> `</pre>
    <pre class="css" style="font: normal normal normal 1em/133% 'courier new', courier, monospace; font-family: monospace;">`<span style="color: #993333;">-20px</span> <span style="color: #993333;">-15px</span> <span style="color: #993333;">30px</span> <span style="color: #000000; font-weight: bold;">blue</span><span style="color: #00aa00;">,</span> <span style="color: #993333;">20px</span> <span style="color: #993333;">-15px</span> <span style="color: #993333;">30px</span> <span style="color: #993333;">red</span><span style="color: #00aa00;">;</span>`</pre>
    <pre class="css" style="font: normal normal normal 1em/133% 'courier new', courier, monospace; font-family: monospace;">`<span style="color: #00aa00;">
    </span>

[![写博](http://farm5.static.flickr.com/4020/4262035610_6a7d2a3daf.jpg)](http://farm5.static.flickr.com/4020/4262035610_6a7d2a3daf.jpg "写博")

<div></div>
<div><span style="font-family: verdana, geneva, sans-serif; line-height: 17px; color: #111111;">不同的阴影效果非常柔和的融合在一起，您也可能注意到，他们的定义顺序不同产生的效果也不同。因为`box-shadow`是CSS3的特性，而Firefox 3.5遵循的是CSS3的绘画顺序。也就是说，最先定义的影子显示在_顶端_，所以在设计多阴影的时候需要注意这一点。</span></div>