title: jQuery插件的创建方法
tags:
  - jQuery
  - 插件
  - 方法
id: 1567
categories:
  - JavaScript
date: 2010-10-18 22:47:04
---

![](http://a.kainy.cn/201010/BQ200968213243.gif)一周前看到[小谢发布自己的第一个jQuery插件-Xslider](http://x1989.com/a/278.html)，对谢同学的崇敬之情顿时油然而生。于是这几天看到相关内容都留意一下，琢磨着啥时候也整一个自己的插件。要下定决心潜心研究jQuery的内部工作机制并创建一个作品 ，本身就是个不小的困难，而面对貌似不可能完成的困难，总是容易让我产生不愿向前一步的惰性，为了克服自身问题，还是按照习惯的学习方法，逆向工程学习法——张鑫旭大哥介绍了一个不错的[文字信息提示插件——Colortip](http://www.zhangxinxu.com/wordpress/?p=1168)，就从对这个插件的研究入手结合[官方教程](http://docs.jquery.com/Plugins/Authoring)，来认识jQuery插件的创建方法。

当然，这样的学习方法虽然容易上手能在较短时间里产出，却以牺牲规范性为代价，有很多不严谨的地方也在所难免。而在此过程中我也会将更多的精力放在插件的结构而不是功能的实现细节和最终效果上。<!--more-->

## 第一步

我们首先要做的是按我们需要的扩展功能来**创建jQuery对象**。在这里，我希望为页面中class为“tip”的元素添加文字提示信息。先创建一个jquery.tooltip.js文件并保存以下代码：
> <div id="_mcePaste">(function($){</div>
> <div id="_mcePaste">$.fn.tooltip = function() {</div>
> <div id="_mcePaste">};</div>
> <div id="_mcePaste">})(jQuery);</div>
_一些教程里认为应该避免使用$符号，因为这可能造成冲突。关于$()函数的冲突，jQuery中给出了解决方法：jQuery.noConflict()。_

## 第二步

接下来要做的是构造功能函数，以便于用户调用相应功能。 为了使我们的插件尽可能灵活我们还可以提供一些**默认参数**，这样用户使用插件时就不用手动更新参数列表。 我们可以使用jQuery的extend方法做到这一点。
> (function($){
> 
> $.fn.tooltip = function(options) {
> 
> var defaults = {
> 
> color: '#ffffff',
> 
> tipColor: '#000000'
> 
> };
> 
> var options = $.extend(defaults, options);
> 
> // 在这里添加我们插件要实现功能所需的具体代码
> 
> };
> 
> })(jQuery);

## 第三步

这就是我们自己的插件的最终长相啦。jquery.tooltip.js中的全部内容：
> (function ($) {
> 
> $.fn.tooltip = function (options) {
> 
> var defaults = {
> 
> color: '#ffffff',
> 
> tipColor: '#000000'
> 
> };
> 
> var options = $.extend(defaults, options);
> 
> $(this).hover(
> 
> ** function () {**
> 
> ** $(this).append($('&lt;div class="tooltip" style="color:' + options.color + '; background-color:' + options.tipColor + ';"&gt;' + $(this).attr('title') + ' &lt;div class="tip-bottom"&gt;&lt;/div&gt;&lt;/div&gt;'));**
> 
> ** }, function () {**
> 
> ** $(this).find('.tooltip').remove();**
> 
> ** });**
> 
> };
> 
> })(jQuery);

## 第四步

现在就差在网页中**调用插件**包啦。 要看到插件效果，你需要为给每个link或href类的title属性加入提示文本。
> &lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
> 
> &lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;
> 
> &lt;head&gt;
> 
> &lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /&gt;
> 
> &lt;title&gt;Kainy.CN | Build My jQuery Plugin&lt;/title&gt;
> 
> &lt;script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.js"&gt;&lt;/script&gt;
> 
> &lt;script type="text/javascript" src="build_my_jquery_plugin/jquery.tooltip.js"&gt;&lt;/script&gt;
> 
> &lt;script&gt;
> 
> $(document).ready(function() {
> 
> $('.tip').tooltip({
> 
> <span style="white-space: pre;"> </span>
> 
> <span style="white-space: pre;"> </span>color: '#fff',
> 
> <span style="white-space: pre;"> </span>tipColor: '#333'
> 
> <span style="white-space: pre;"> </span>
> 
> <span style="white-space: pre;"> </span> });
> 
> });
> 
> &lt;/script&gt;
> 
> &lt;style&gt;
> 
> .tip{
> 
> <span style="white-space: pre;"> </span>position:relative;
> 
> <span style="white-space: pre;"> </span>top:85px;
> 
> <span style="white-space: pre;"> </span>left:50px;
> 
> <span style="white-space: pre;"> </span>}
> 
> .tip{text-decoration:none!important;}
> 
> .tooltip{
> 
> <span style="white-space: pre;"> </span>display:inline;
> 
> <span style="white-space: pre;"> </span>font-size:12px;
> 
> <span style="white-space: pre;"> </span>position:absolute;
> 
> <span style="white-space: pre;"> </span>bottom:40px;
> 
> <span style="white-space: pre;"> </span>left:-10%;<span style="white-space: pre;"> </span>
> 
> <span style="white-space: pre;"> </span>border-radius:5px;
> 
> <span style="white-space: pre;"> </span>-moz-border-radius:5px;
> 
> <span style="white-space: pre;"> </span>-webkit-border-radius:5px;
> 
> <span style="white-space: pre;"> </span>background-color:#000;
> 
> <span style="white-space: pre;"> </span>border:1px solid #333;
> 
> <span style="white-space: pre;"> </span>color:#FFF;
> 
> <span style="white-space: pre;"> </span>text-align:center;
> 
> <span style="white-space: pre;"> </span>text-shadow:0px 1px #000;
> 
> <span style="white-space: pre;"> </span>min-width:180px;
> 
> <span style="white-space: pre;"> </span>padding:5px;}<span style="white-space: pre;"> </span>
> 
> .tip-bottom{
> 
> <span style="white-space: pre;"> </span>position:absolute;
> 
> <span style="white-space: pre;"> </span>bottom:-11px;
> 
> <span style="white-space: pre;"> </span>left:20%;
> 
> <span style="white-space: pre;"> </span>width:23px;
> 
> <span style="white-space: pre;"> </span>height:11px;
> 
> <span style="white-space: pre;"> </span>background-image:url('build_my_jquery_plugin/tip.png');
> 
> <span style="white-space: pre;"> </span>background-repeat:repeat;
> 
> <span style="white-space: pre;"> </span>}
> 
> <span style="white-space: pre;"> </span>
> 
> .notice{
> 
> <span style="white-space: pre;"> </span>padding:10px;
> 
> <span style="white-space: pre;"> </span>background-color:#FF6;
> 
> <span style="white-space: pre;"> </span>color:#000;
> 
> <span style="white-space: pre;"> </span>border:2px solid #FC3;
> 
> <span style="white-space: pre;"> </span>text-shadow:0px 1px #FFC;
> 
> <span style="white-space: pre;"> </span>}
> 
> &lt;/style&gt;
> 
> &lt;/head&gt;
> 
> &lt;body&gt;
> 
> &lt;div class="notice"&gt;将鼠标移到链接上查看插件效果!&lt;/div&gt;
> 
> &lt;a href="http://kainy.cn/?p=1567" title="查看原文：jQuery插件的创建方法" class="tip"&gt;Continue Reading&lt;/a&gt;
> 
> &lt;/body&gt;
> 
> &lt;/html&gt;
好啦，最终效果是这样的：[Demo](http://kainy.googlecode.com/svn/trunk/build_my_jquery_plugin/demo.html) 。有些简陋，并且许多问题比如ie6兼容的问题没解决。真正有需要用到该插件的可以使用[张鑫旭大哥的修正版](http://www.zhangxinxu.com/study/down/zxx.colortip.zip).演示地址：[Demo](http://kainy.googlecode.com/svn/trunk/build_my_jquery_plugin/colortip-demo.html)。

恩，这样就算完成俺第一个插件的创建了。虽然来的有些旁门左道的味道，但终究是完成了该有的功能了哈，如果你觉得这样的“教程”还算和你胃口，那很高兴又多一个趣味相投者；更多的可能你会觉得这样的方法过于另类太非主流了，那么请无视本文。