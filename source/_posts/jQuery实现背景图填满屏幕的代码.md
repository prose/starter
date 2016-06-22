title: jQuery实现背景图填满屏幕的代码
tags:
  - jQuery
  - 代码
id: 1586
categories:
  - JavaScript
date: 2010-10-24 20:23:40
---

[拾贝电台](http://radio.sbboy.com/)是一个收集了众多优秀电台资源的广播频道聚合器，其功能模块较少，无非播放控制和播放列表等几个窗口。为了不至于留下太多的空白区域影响整体美观，设置了可拉伸的背景图片。这里把实现该效果的代码贴出:

用jQuery实现背景拉伸，自适应窗口的调整而改变大小。该段代码应该放在网页内容之前，最好是紧跟在&lt;body&gt;之后，这样可以避免页面加载时出现太突兀的情景。

JavaScript计算客户端浏览器窗口尺寸比较简单。第一个模块的代码做一些初步的计算，判断图像比例，浏览器宽度。

再使用jQuery来操作相应节点的CSS规则改变图片显示，以保持图像的的比例不变 适应浏览器窗口的调整。<!--more-->

**JavaScript代码：**
> $(document).ready(function() {
> 
> var bgImage = $('#background-image');
> 
> function resizeImg() {
> var imgwidth = bgImage.width(),
> imgheight = bgImage.height(),
> winwidth = $(window).width(),
> winheight = $(window).height(),
> widthratio = winwidth / imgwidth,
> heightratio = winheight / imgheight,
> widthdiff = heightratio * imgwidth,
> heightdiff = widthratio * imgheight;
> 
> if(heightdiff&gt;winheight) {
> bgImage.css({
> width: winwidth+'px',
> height: heightdiff+'px'
> });
> } else {
> bgImage.css({
> width: widthdiff+'px',
> height: winheight+'px'
> });
> }
> 
> $("#background-image").show();
> 
> }
> resizeImg();
> $(window).resize(function() {
> resizeImg();
> });
> 
> });
**CSS代码：**
> #background-image{
> position:absolute;   //配合z-index使背景图片显示在网页内容下方
> top:0;
> left:0;
> z-index:-10;
> overflow: hidden;
> width: 100%;
> display:none;    //未开启JavaScript的浏览器将不会显示背景图片
> }
**演示：**

[http://radio.sbboy.com/](http://radio.sbboy.com/) 打开后可以取消最大化，拖动修改窗口尺寸 则页面的背景图片也会随之变化。