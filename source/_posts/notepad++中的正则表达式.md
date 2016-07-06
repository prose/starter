title: notepad++中的正则表达式
tags:
  - 正则
  - 编辑器
id: 1107
categories:
  - 网海拾贝
date: 2010-05-20 23:57:45
---

按《程序员修炼之道》 书中提到，熟练掌握一种文本编辑器，本人比较认同，所以有了这篇文章。

因为Notepad++项目是基于另一个开源编辑器Scintilla，所有关于Scintilla 的正则表达式也同样适用Notepad++。

**第一部分：要开始用正则表达式前，必须了解特殊字符列**

正则表达式的特殊字符列表如下：

.
匹配任意字符
(
标记域的开始符（具体使用可参见例子）
)
标记域的结束符（具体使用可参见例子）
\n<!--more-->
n可以是1到9 代表正在替换的第一到第九的标记域
\&lt;
匹配Scintilla定义的单词的开始
\&gt;
匹配Scintilla定义的单词的结束
\x
转义符. 例如, \[ 表示 [ 而不是字符集(character set)的开始符.
[...]
字符集(character set), 例如, [abc] 代表字符 a, b or c. 也可以使用范围, 如 [a-z] 代表所有小写字母
[^...]
非字符集中的字符. 例如, [^A-Za-z] 代表处理大小写字母以外的字符
^
行开始符
$
行尾符
*
匹配0次或多次. 例如, Sa*m 匹配 Sm , Sam , Saam , Saaam等等.
+
匹配1次或多次. 例如, Sa+m 匹配 Sam , Saam , Saaam and 等等.

**第二部分：五个例子 **

例子1：
目标：如何把 Fred2XXX 替换成 Sam2YYY
技巧：搜索 Fred([1-9])XXX 替换成 Sam\1YYY

例子2：
目标：把 == title == 替换成 = title =
技巧：分两步:1, 搜索 ^=(=) 替换成 \1 ；2， 搜索=(=)$ 替换成\1。

例子3：
目标：把德国日期格式(dd.mm.yy) 转换成(yy-mm-dd)格式。
技巧：搜索 ([^0-9])([0123][0-9])\.([01][0-9])\.([0-9][0-9])([^0-9]) 替换成\1\4-\3-\2\5
*  31.12.97 became 97-12-31
* 14.08.05 became 05-08-14
* the IP address 14.13.14.14 虽然匹配，但是要小心不要改变

例子四：
目标：在一个目录中通过命令 dir /b/s &gt; filelist.txt，修改文件中的\为/，并加上前缀file:///。
技巧：分两步：1, 搜索 \\ 替换为 /  ；2， 搜索 ^(.*)$  替换为 file:///\1

例子五：(英文原文中，这个例子有误，我这里修正了)
目标：把文中的空格替换成,
[Data]
EU AX ALA 248 ?and Islands
EU AL ALB 008 Albania, People's Socialist Republic of
AF DZ DZA 012 Algeria, People's Democratic Republic of
OC AS ASM 016 American Samoa
EU AD AND 020 Andorra, Principality of
AF AO AGO 024 Angola, Republic of
NA AI AIA 660 Anguilla
AN AQ ATA 010 Antarctica (the territory South of 60 deg S)
NA AG ATG 028 Antigua and Barbuda
SA AR ARG 032 Argentina, Argentine Republic
AS AM ARM 051 Armenia
NA AW ABW 533 Aruba
OC AU AUS 036 Australia, Commonwealth of

[Final Data]
EU,AX,ALA,248,?and Islands
EU,AL,ALB,008,Albania, People's Socialist Republic of
AF,DZ,DZA,012,Algeria, People's Democratic Republic of
OC,AS,ASM,016,American Samoa
EU,AD,AND,020,Andorra, Principality of
AF,AO,AGO,024,Angola, Republic of
NA,AI,AIA,660,Anguilla
AN,AQ,ATA,010,Antarctica (the territory South of 60 deg S)
NA,AG,ATG,028,Antigua and Barbuda
SA,AR,ARG,032,Argentina, Argentine Republic
AS,AM,ARM,051,Armenia
NA,AW,ABW,533,Aruba
OC,AU,AUS,036,Australia, Commonwealth of

技巧：搜索 ([A-Z]+) ([A-Z]+) ([A-Z]+) ([0-9]+) (.*)  替换为 \1,\2,\3,\4,\5

英文网址：[How to use regular expressions in Notepad++](http://sourceforge.net/apps/mediawiki/notepad-plus/index.php?title=Regular_Expressions "Regular_Expressions")

译文地址：[http://sesame.javaeye.com/blog/592388](http://sesame.javaeye.com/blog/592388)