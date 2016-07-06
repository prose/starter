title: CSS图层混合（blending）
tags:
  - css3
id: 2145
categories:
  - 建站❤编程
date: 2012-08-08 20:49:39
---

玩过PS的童鞋应该都知道混合模式（Blending Mode）吧，出现的地方很多，比如修复用的刷子（Healing Brush Tool）、图章（Stamp Tool）、橡皮擦（Eraser Tool）、水滴（Blur Tool）等工具中都有这个选项。但印象最深的恐怕还是在图层面版中，因此以“图层混合模式”统称——本质上都是两个图层的混合。

而这一特性也有望在不久的将来通过CSS属性“blend-mode”在浏览器中得以实现。

下面举两个使用场景

一是让按钮上文字的纹理与背景图一致；

<!--more-->

![](http://a.kainy.cn/201208/fig03.jpg)

![](http://a.kainy.cn/201208/fig04.jpg)

二可以让文字阴影与背景颜色相协调，从而让投影效果更加自然。

![](http://a.kainy.cn/201208/fig05.jpg)

![](http://a.kainy.cn/201208/fig06.jpg)

&nbsp;

blending属性使用方法：
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="top" width="239">**元素**</td>
<td valign="top" width="239">**CSS 关键词**</td>
</tr>
<tr>
<td valign="top" width="239">盒子模型中的文字或子元素</td>
<td valign="top" width="239">foreground-blend-mode</td>
</tr>
<tr>
<td valign="top" width="239">文字阴影</td>
<td valign="top" width="239">text-shadow-blend-mode</td>
</tr>
<tr>
<td valign="top" width="239">背景图</td>
<td valign="top" width="239">background-blend-mode</td>
</tr>
<tr>
<td valign="top" width="239">盒子模型阴影</td>
<td valign="top" width="239">box-shadow-blend-mode</td>
</tr>
<tr>
<td valign="top" width="239">盒子模型自身</td>
<td valign="top" width="239">blend-mode</td>
</tr>
</tbody>
</table>
目前还没有浏览器支持该属性，想尝鲜的童鞋得下载[Adobe自建版](https://github.com/downloads/adobe/webkit/PrototypeEnhancementsForChromiumWin-may2012-f2f.zip "下载chromium")[Chromium](https://github.com/downloads/adobe/webkit/PrototypeEnhancementsForChromiumWin-may2012-f2f.zip "下载chromium") 。