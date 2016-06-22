title: Chrome21中textarea的maxLength与value.length值不一致
tags:
  - chrome
id: 2158
categories:
  - 建站❤编程
date: 2012-09-08 20:11:54
---

###  问题描述：

Chrome21及以后版本中，在&lt;textarea&gt;中敲入回车换行，value.length值加一，而用于maxLength检测的长度值加二，导致value.length &lt; maxLength时，就不能再敲入内容。最极端的情况，当全部内容为换行时，value.length = maxLength/2， 演示如下

<iframe style="width: 100%; height: 300px;" src="http://jsfiddle.net/guotao/9hnHe/4/embedded/" frameborder="0" width="320" height="240"></iframe>
<!--more-->

### 原因分析：

目前只知道可能和转义字符有关
<table>
<tbody>
<tr>
<td>转义字符</td>
<td>意义</td>
<td>ASCII码值（十进制）</td>
</tr>
<tr>
<td>\n</td>
<td>换行(LF) ，将当前位置移到下一行开头</td>
<td>010</td>
</tr>
<tr>
<td>\r</td>
<td>回车(CR) ，将当前位置移到本行开头</td>
<td>013</td>
</tr>
</tbody>
</table>
Windows中回车返回\r\n ， 而Linux中返回\n ， 刚好长度有两倍关系。至于真正原因还得等知情者来解答了。

以上演示在Chrome、IE和Firefox下测试，最正常的是Firefox完全符合预想，其次是IE，最怪异的就是Chrome了，输入三个换行后再敲两个数字，这俩数字居然能“吃掉”一个换行。怪哉。