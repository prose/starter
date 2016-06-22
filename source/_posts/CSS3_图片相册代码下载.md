title: CSS3 图片相册代码下载
tags:
  - CSS
  - css3
  - 下载
  - 相册
  - 设计
id: 793
categories:
  - 建站❤编程
date: 2010-03-05 12:30:36
---

[![](http://a.kainy.cn/201003/imagegallerycss3.jpg "imagegallerycss3")](http://a.kainy.cn/201003/imagegallerycss3.jpg)尽管CSS3仍处于发展阶段，却是新的热潮，令许多网站开发者感到兴奋。 CSS3 将带来新的更大的网络发展，实现网页设计的与时俱进，让网页设计师和开发人员的创造力得到充分展现。 CSS3增加了许多新特性 如：文本阴影，圆形边界，动画，自定义网页字体，等等。 甚至有他们不少人认为一旦所有浏览器都支持CSS3 它将取代JavaScript的动画特效。 下面是一个CSS3图片相册的编写过程：

### HTML结构

首先，我们将创建如下结构。 第一个图像是类名“mini”，第二个是时显示的图片与类名“pic”。<!--more-->
<pre>&lt;div id="gallery"&gt;
    &lt;ul&gt;
        &lt;li&gt; &lt;img src="images/imagen1_small.jpg" class="mini" width="100" height="100"  /&gt; &lt;img src="images/imagen1.jpg" class="pic"  /&gt; &lt;/li&gt;
        &lt;li&gt; &lt;img src="images/imagen2_small.jpg" class="mini" width="100" height="100"  /&gt; &lt;img src="images/imagen2.jpg" class="pic"  /&gt;  &lt;/li&gt;
        &lt;li&gt; &lt;img src="images/imagen3_small.jpg" class="mini" width="100" height="100"  /&gt; &lt;img src="images/imagen3.jpg" class="pic"  /&gt; &lt;/li&gt;
        &lt;li&gt; &lt;img src="images/imagen4_small.jpg" class="mini" width="100" height="100"  /&gt; &lt;img src="images/imagen4.jpg" class="pic"  /&gt; &lt;/li&gt;
        &lt;li&gt; &lt;img src="images/imagen5_small.jpg" class="mini" width="100" height="100"  /&gt; &lt;img src="images/imagen5.jpg" class="pic"  /&gt; &lt;/li&gt;
        &lt;li&gt; &lt;img src="images/imagen6_small.jpg" class="mini" width="100" height="100"  /&gt; &lt;img src="images/imagen6.jpg" class="pic"  /&gt;  &lt;/li&gt;
        &lt;li&gt; &lt;img src="images/imagen7_small.jpg" class="mini" width="100" height="100" /&gt; &lt;img src="images/imagen7.jpg" class="pic"  /&gt; &lt;/li&gt;
        &lt;li&gt; &lt;img src="images/imagen8_small.jpg" class="mini" width="100" height="100" /&gt; &lt;img src="images/imagen8.jpg" class="pic"  /&gt; &lt;/li&gt;
        &lt;li&gt; &lt;img src="images/imagen9_small.jpg" class="mini" width="100" height="100" /&gt; &lt;img src="images/imagen9.jpg" class="pic"  /&gt;  &lt;/li&gt;
        &lt;li&gt; &lt;img src="images/imagen10_small.jpg" class="mini" width="100" height="100"  /&gt; &lt;img src="images/imagen10.jpg" class="pic"  /&gt; &lt;/li&gt;
        &lt;li&gt; &lt;img src="images/imagen11_small.jpg" class="mini" width="100" height="100" /&gt; &lt;img src="images/imagen11.jpg" class="pic"  /&gt; &lt;/li&gt;
        &lt;li&gt; &lt;img src="images/imagen12_small.jpg" class="mini" width="100" height="100" /&gt; &lt;img src="images/imagen12.jpg" class="pic"  /&gt; &lt;/li&gt;
     &lt;/ul&gt;
&lt;/div&gt;</pre>
<pre>

### CSS样式

<div>第二部用到CSS3的属性[box-shadow](http://www.w3.org/TR/css3-background/#the-box-decoration-break).</div>
<div>
<pre>#gallery {
    border: 10px solid #1D0C16;
    height: 300px;
    width: 800px;
    margin-left: auto;
    margin-right: auto;
    overflow: visible;
    background: #272229;
    /*box shadow effect in Safari and Chrome*/
    -webkit-box-shadow: #272229 10px 10px 20px;
    /*box shadow effect in Firefox*/
    -moz-box-shadow: #272229 10px 10px 20px;
    /*box shadow effect in IE*/
    filter: progid:DXImageTransform.Microsoft.Shadow(color='#272229', Direction=135, Strength=10);     
    /*box shadow effect in Browsers that support it, Opera 10.5 pre-alpha release*/
     box-shadow: #272229 10px 10px 20px;
}</pre>
</div>
<div>
<pre>#gallery ul{
    /* This position the ul content in the middle of the gallery*/
    margin-left:-30px; 
}</pre>
<pre>
<pre>/* This create the desired effect of showing the image when we mouseover the thumbnail*/
#gallery ul li:hover .pic {
    /* width and height is how much the picture is going to growth with the effect */
   width:200px; 
   height:200px;
   opacity:1; 
   visibility:visible; 
   float:right;
}</pre>
<pre>具体代码可以右键“查看源代码”啦。</pre>
<pre>演示地址：[http://a.kainy.cn/201003/css3相册-www.kainy.cn/index.html](http://a.kainy.cn/201003/css3%E7%9B%B8%E5%86%8C-www.kainy.cn/index.html)</pre>
<pre>下载代码：[http://a.kainy.cn/201003/css3相册-www.kainy.cn.zip](http://a.kainy.cn/201003/css3相册-www.kainy.cn.zip)</pre>
</pre>
</div></pre>