title: MooTools 1.3中的屏幕触摸事件
tags:
  - JavaScript
  - MooTools
  - 框架
id: 1563
categories:
  - JavaScript
date: 2010-10-17 20:13:56
---

[MooTools](http://mootools.net/)在其最新的1.3版本中加入了一个很给力的功能——检测屏幕触摸事件：`<span><span>touchstart</span></span>`<span><span>， </span></span>`<span><span>touchmove</span></span>`<span><span>， </span></span>`<span><span>touchend</span></span>`<span><span>，</span></span>`<span><span>touchcancel</span></span>`<span><span>， </span></span>`<span><span>gesturestart</span></span>`<span><span>， </span></span>`<span><span>gesturechange</span></span>`<span><span>，</span></span>`<span><span>gestureend</span></span>`<span><span>和 </span></span>`<span><span>orientationchange，使得这一</span></span>`Javascript框架更加完善。这篇文章就演示如何按照传统MooTools事件处理的语法，通过使用MooTools新特性来完成对移动事件的监听及响应。让移动设备用户在你的网页上完成原本只能在手机应用上进行的操作。

<span><span>先看演示：</span>[**必须用手机浏览器才有效果哦**~.](http://kainy.googlecode.com/svn/trunk/MooTools%201.3_%E5%B1%8F%E5%B9%95%E8%A7%A6%E6%91%B8%E4%BA%8B%E4%BB%B6_%E6%BC%94%E7%A4%BA/index.html)</span>

[![前两个是点击屏幕产生的，后面一列是滑动产生的，电阻屏，只能记录到这些啦。。。](http://kainy.googlecode.com/svn/trunk/MooTools%201.3_%e5%b1%8f%e5%b9%95%e8%a7%a6%e6%91%b8%e4%ba%8b%e4%bb%b6_%e6%bc%94%e7%a4%ba/mobile-touch-events-of-mootools-1-3.png "前两个是点击屏幕产生的，后面一列是滑动产生的，电阻屏，只能记录到这些啦。。。")](http://kainy.googlecode.com/svn/trunk/MooTools%201.3_%e5%b1%8f%e5%b9%95%e8%a7%a6%e6%91%b8%e4%ba%8b%e4%bb%b6_%e6%bc%94%e7%a4%ba/mobile-touch-events-of-mootools-1-3.png)<!--more-->

## <span><span>JavaScript语句：</span></span>

<span></span>

<span></span>

<span></span>

<span></span>

<span></span>

<span></span>

<span><span>
<div id="_mcePaste">MooTools提供了对四种不同的触摸状态（touchstart、 touchmove、 touchend、 touchcancel） 以及三种姿势（gesturestart、 gesturechange、 gestureend）的检测 。 你甚至可以通过orientationchange来检测到触摸屏幕的手指何时改变方向！</div>
<div id="_mcePaste">首先，我们按照MooTools的传统风格来创建对屏幕触摸事件的监听器：</div>
</span></span>
> //在网页文档的body中添加 touchstart 事件的方法：
> 
> document.body.addEvent('touchstart',function(e) {
> 
> //你需要的功能代码
> 
> });
> 
> //在网页文档的body中添加 touchmove 事件
> 
> document.body.addEvent('touchmove',function(e) {
> 
> //你需要的功能代码
> 
> });
> 
> // 在网页文档的body中添加 touchend 事件
> 
> document.body.addEvent('touchend',function(e) {
> 
> //你需要的功能代码
> 
> });
> 
> // 在文档的body中添加 gesturestart 事件
> 
> document.body.addEvent('gesturestart',function(e) {
> 
> //你需要的功能代码
> 
> });
> 
> / 在文档的body中添加 gesturechange 事件
> 
> document.body.addEvent('gesturechange',function(e) {
> 
> //你需要的功能代码
> 
> });
> 
> // 在文档的body中添加 gestureend 事件
> 
> document.body.addEvent('gestureend',function(e) {
> 
> //你需要的功能代码
> 
> });
> 
> // 在文档的body中添加 orientationchange 事件
> 
> document.body.addEvent('orientationchange',function(e) {
> 
> //你需要的功能代码
> 
> });
<div>屏幕触摸事件对象和其他事件对象并无差别，你可以在[MooTools事件文档](http://mootools.net/docs/core/Types/Event)中<span style="font-family: 'lucida grande', tahoma, verdana, arial, sans-serif; line-height: 21px; font-size: 12px;">找到相应事件的属性，这里以监听所有移动事件的代码片段为例：</span></div>
<div></div>
<div><span style="font-family: 'lucida grande', tahoma, verdana, arial, sans-serif; line-height: 21px; font-size: 12px;">
> <div>window.addEvent('domready',function() {  ['touchstart','touchmove','touchend','touchcancel','gesturestart','gesturechange','gestureend','orientationchange'].each(function(ev) {</div>
> <div>document.body.addEvent(ev,function(e) {</div>
> <div>new Element('li',{</div>
> <div>html: ev</div>
> <div>}).inject('mobileEventList','top');</div>
> <div>});</div>
> <div>});</div>
> <div>});</div>
<div>每当一个触摸屏事件触发，该事件的名称将被放置到顶部ID的一个UL元素中。</div>
<div></div>

## 如何找到的事件名称？

Element.Event 为我们提供了MooTools自身已支持事件类型的列表：
> Element.NativeEvents = {
> 
> click: 2, dblclick: 2, mouseup: 2, mousedown: 2, contextmenu: 2, //mouse buttons
> 
> mousewheel: 2, DOMMouseScroll: 2, //mouse wheel
> 
> mouseover: 2, mouseout: 2, mousemove: 2, selectstart: 2, selectend: 2, //mouse movement
> 
> keydown: 2, keypress: 2, keyup: 2, //keyboard
> 
> orientationchange: 2, // mobile
> 
> touchstart: 2, touchmove: 2, touchend: 2, touchcancel: 2, // touch
> 
> gesturestart: 2, gesturechange: 2, gestureend: 2, // gesture
> 
> focus: 2, blur: 2, change: 2, reset: 2, select: 2, submit: 2, //form elements
> 
> load: 2, unload: 1, beforeunload: 2, resize: 1, move: 1, DOMContentLoaded: 1, readystatechange: 1, //window
> 
> error: 1, abort: 1, scroll: 1 //misc
> 
> };
以上就是新的触摸/手势事件与传统的浏览器事件列表。

## MooTools Mobile

当然，以上只是MooTools1.3所带来新特性的简单运用，单靠以上对触摸/手势事件的使用不太可能满足实际移动应用上的需求，比如你无法判断用户的滑动方向，更不能识别多点触控事件？不过不用担心：MooTools的核心开发者Christoph Pojer开发的 [MooTools Mobile](http://github.com/cpojer/mootools-mobile)可以满足您这方面的需求，这是一组专门设计的MooTools类，可以为您提供更多触摸，滑动等动作细节的信息。

</span></div>