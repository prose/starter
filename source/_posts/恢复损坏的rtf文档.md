title: 恢复损坏的rtf文档
tags:
  - 文档
  - 方法
  - 解决
id: 773
categories:
  - 学习笔记
date: 2010-03-07 16:19:01
---

一篇1年多来收集经典语句的文档一直保存为rtf格式，上次存盘的时候意外损坏  打开以后的样子大概是这样的代码：

{\rtf1\ansi\deff0{\fonttbl{\f0\fnil\fcharset134 \'cb\'ce\'cc\'e5;}{\f1\froman\fprq1\fcharset128 MS PGothic;}{\f2\fswiss\fcharset238{\*\fname Arial;}Arial CE;}{\f3\froman\fprq1\fcharset161 MS PGothic;}{\f4\froman\fprq1\fcharset238 MS PGothic;}{\f5\froman\fprq1\fcharset0 MS PGothic;}{\f6\fmodern\fprq6\fcharset136 PMingLiU;"}}" 　　{\*\generator Msftedit 5.41.15.1507;}\viewkind4\uc1\pard\lang2052\f0\fs20\'d0\'cf\'11\'e0\'a1? &gt; \'03 ?\tab \'06 \'05 \'01 \'10 \'02 \'01 ?\'ff\'ff \'05 \'06 \'02 \'ff\'ff\'ff\'ff\'ff\'ff\'ff\'ff\'ff\'ff\'ff\'ff\'ff\'ff\'ff\'ff\'ff\'ff 。。。

经多次查网页+自己琢磨了近5个小时，本来有点小绝望了，各种网上的方法都试了也没用，下载了转换软件出来的也还是上面的那些代码符号。<!--more-->

可这也不算是乱码，这已经都是格式代码了。一直不甘心，就把原来的代码都一直留着，今天无意搜索rtf时在维基百科看到这样一段：
> <pre>{\rtf1\ansi
> Hello!\par
> This is some {\b bold} text.\par
> }</pre>
> 在字处理软件上将显示为如下效果：
> 
> Hello!
> This is some **bold** text.
> 
> 反斜线符号（`\`）标志着RTF控制代码开始。代码`\par`表示开始新的一行，代码`\b`将文本以粗体显示。花括号`{`和`}`定义一个群组。上述例子中使用了一个群组来限制代码`\b`的作用范围。合法的RTF文档是一个以代码`\rtf`开始的群组。 维基百科
于是照着这格式（首：<span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px; font-size: 12px; white-space: pre;">**_{\rtf1\ansi_**；<span style="font-family: Georgia, 'Times New Roman', 'Bitstream Charter', Times, serif; line-height: 19px; white-space: normal; font-size: 13px;">尾：<span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px; font-size: 12px; white-space: pre;">**_\par} _**都要添上<span style="font-family: Georgia, 'Times New Roman', 'Bitstream Charter', Times, serif; line-height: 19px; white-space: normal; font-size: 13px;">），再把原来的编码写入为txt文件，最后修改后缀为.rtf，这样以后就可以用word打开啦，哈哈，文件恢复了，一年多来收集整理的资料回来鸟。。高兴ing，顺便分享下解决方法 ^_^ 。</span></span></span></span>