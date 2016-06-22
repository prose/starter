title: UltraEdit实用技巧(转)
id: 841
categories:
  - 系统❤软件
date: 2010-03-19 10:34:46
tags:
---

UltraEdit-32是这学期开Java课的薛老师推荐的编辑器，之前比较少用，一直想知道是什么原因让薛老师如此喜爱这款编辑器，看了以下资料后大概有些明白了。。。。

查找操作

1.ctrl+b
写程序的时候，括号一般要一一对应的，但是如果嵌套太多，看花眼了，怎么办？你把光标放在括号开始的地方，按ctrl+b，UE 会帮你找到相对应的括号结尾的地方。你还可以试试连着多按几次ctrl+b。

3．ctrl+f2
程序会有很多行你当然可以记得你要到的行数，然后用ctrl+g，然后输入行号，到所在的行。但是用ctrl+f2我觉得更方便 。比如说你要频繁在多个function中切换。可以在function开始的地方，按一下ctrl+f2，给这一行加一个书签 。然后再另外的function开始的地方，也来一下ctrl+f2，有书签的地方，字的背景色会不同。当你想换到下一个书签的 时候，就按f2,但是想到上一个标签怎么办？ctrl+f2?不对，嘿嘿，再按就是加书签或者取消当前行的书签了。应该是alt +f2<!--more-->

4.F3
默认情况下,当你按F3的时候UE可以查找现在选中的内容，F3是下一个符合的内容，ctrl+f3是上一个符合的内容.(请查 看advanced/configuration/Find标签)

5.UE的function列表功能

打开一个程序文件，比如*.js
确保view/view as(*)/Javascript
选择view/(view/lists)/function list.也可以用F8

6\. 打开的文件中切换 ctrl+tab

快捷编辑

1.UE的列编辑功能 alt+c
首先alt+c进入列编辑模式
这是后，你可以用鼠标选择一个方形的区域。删除，复制全看你喜欢了。
如果你想在每一行第二个字符开始加入一个’test’，在列编辑模式下，定位光标到第一行，第二列。
Column/(Insert/Fill column)
,你还可以用这个功能插入行数。在列编辑状态下的复制粘贴都很有意思，某些情况下可以取得意想不到的效果。

2.大块代码缩进的调整

选中要调整的代码块 按tab,进行缩进,反之shift+tab

3.删除整行 Ctrl+e

4\. 编辑文件如何加入时间戳

F7快捷键即可

5\. 恢复到上次存盘状态 file/revert to saved.

6.排序 移除重复

文件-&gt;排序-&gt;高级排序

7.自动补全 AutoComplete

配制-&gt;编辑-&gt;自动完成文件

UE的右键功能
1.去处行末的空格
选中要去空格的区域。点右键/format/menu../trim trailing spaces

2.给代码加注释
首先要确定选中了正确的语法加亮显示
view/view as(*)/Javascript
然后选中要注释的部分
点右键/delete/comment add 或者comment remove

3.格式化代码
首先要确定选中了正确的语法加亮显示
view/view as(*)/Javascript
然后选中要格式化的部分，就是让代码的缩进好看点
点右键/format menu/reIndent selection
不过，如果你的代码是一行，没有按照句子分号。好像没啥效果。

4.复制当前编辑文件的路径
如果你要把当前文件作其他处理，需要这个文件的路径，这个功能可以不用再去敲路径
点右键
copy file path/name

正则表达式查找

1．如何去掉所编辑文本中包含特定字符串的行?
这则技巧是在UltraEdit的帮助文件里提到．CTRL+R 调出来替换(Replace)窗口,选中"使用正则表达式";然后用查找 %*你的字符串*^p 替换成空内容即可.如，我当前有个文本文件，需要去掉所有包含 http://www.dbanotes.net/ 这个字符串的行，查找　%*http://www.dbanotes.net/*^p　替换成空即可．注意,^p 是 DOS 文件类型的换行符．如果是 Unix 类型文件，则用 ^n.

Tip 2: 如何在行末添加特定字符，比如逗号?
有了上面的经验(其实我第一次是从同事那里学到的)，CTRL+R 调出来替换(Replace)窗口,选中"使用正则表达式".然后可以查找 ^p(或者^n,如果是Unix 文件),用 ,^p(或者,^n)进行"全部替换"即可.补充一点，如果是 MAC(Apple) 类型文件,则换行符号为 ^r .

2． 如何删除空行?
参考上面两个例子,查找 ^p$ 然后替换为空即可．

3.简单的用正则表达式的查找替换
有时候会有一些简单文本处理的工作。比如你手头有一个文本，需要给所有行后边添加一个";"。用查找替换来完成ctrl+r,查找 ‘^p’ 替换为’^p;’,(记得选中regular Expressions,这样才能用正则表达式的功能。)然后你可以选replace all(alt+a)，或者点开始，一个一个的查找，替换，这样的好处是知道都替换了那些，有些时候你可能不想全部替换

4.把类似’{$abc}’替换为’var abc=abc;’,abc有可能是其他字符
ctrl+r,查找 ‘{^$^(*^)}’ 替换为’var ^1=^1;’(记得选中regular Expressions,这样才能用正则表达式的功能。)然后你可以选replace all(alt+a)，或者点开始，一个一个的查找，替换。

其他功能
1.计算选中区域数字的合
比如如下文本
2
23a1
4 1.1
5
6
先选中，然后Column/(sum column/Selection),UE会以空格，字母分割数字，告诉你一个总数
2.UE文件的比较
UE内置一个比较功能，可以帮你比较2个文件的不同
file/compare files…
如果你打开了2个要比较的文件，UE会把这2个文件自动填入2个要比较的文件位置，不然，你要用browse功能去找到那2个文 件，设置一下text还是bin,是否要ignore一些你不关心的东西。然后点击compare就到比较界面。你可以设置只显 示不同或者相同或者都显示。日常的应用是可以了。(有点像BC，不知道谁抄谁的)

3.文件备份,重命名
一个文件要备份,你如果选save as了，那当前打开的就是你save as之后的文件了。
用fle/(make copy/backup)
你还可以直接重命名当前编辑的文件 file/Rename file

4.UE的project功能
11.00以后有了一个自动打开上次关闭时打开着的文件这个功能了，以前好像没有。这就可以用到Project功能。其实就是定 义一组相关的文件。
project/(new project/workspace),UE会要求你存一个*.prj的文件。下次你可以打开UE的时候，project/(o pen project/workspace),继续上次的那个project的session工作。
也可以file/(recent project/workspace)

5.自定义快捷键
UE很多功能都有快捷键，但不是所有的都有。11.00有一个Text2html的功能。我工作中遇到了要对大量代码进行这种操 作的情况。我就想自己定一个快捷键。
advanced/configuration/key mapping
在commands里面找到你要用的command.我这里是HTMLConvertSpecialChars,然后点Pres s new key下面的输入框，设置一个自己觉得爽，不冲突的快捷键。比如ctrl+alt+s.然后点ok.这样用常用的功能，可以成倍 提高效率。

其他功能
1.打开文件内容中的文件
如果文件的内容里面有
"c:\test.txt" 或者"http://www.test.com/js/test.js"
这样的内容
你可以把鼠标定位到上面，点右键。弹出的菜单最上边会多个选项
"c:\test.txt" 或者"http://www.test.com/…/test.js"
点击它，打开相应文件。

2.调整，添加语法高亮显示
advanced/configuration/syntax Highlighting 点击下边的full path name for word list后边的open
打开的文件如：d:\Program Files\UltraEdit\WORDFILE.TXT
就是UE语法高亮显示的配置文件
/L1"C/C++" 就是第一种语言，/L2就是第二种。目前这些word files 可以从下面连接下载到
http://www.ultraedit.com/index.php?…id=40#wordfiles
用的时候，下载相应的word file,复制出来，粘贴到d:\Program Files\UltraEdit\WORDFILE.TXT，注意修改刚开始的/L1和你现有系统匹配。
好像对xml.xsl的显示不是很好，不够准确

3.运行dos命令，直接得到结果
F9,会跳出来一个窗口，让你输入命令和工作目录。比如 dir c:
会列出来c盘的目录。如果你要给朋友发目录列表，除了从dos窗口复制过来，还可以用这个简单的方法。加上一下简单的列编辑。结 果就更好看了。

4.内置的ascii table
view/ascii table
有时候需要知道某个字母的ascii值，从这里就能查出来
!是33
A是65
。。。

5.11.00版之后的code folding功能
就是可以把一个function展开或者合上。如果你用了11的版本却没有这个功能，请查看advanced/configur ation/general/display/Enable show/hide lines and code folding是否为on
但是对xml的支持不是很好，没有xmlspy好。

6.内置的多个剪贴板
你点右键可以看到
clipboards，里面内置了10个剪贴板。按说windows的copy只能复制一个内容。如果你要复制多个内容，跟据不 同的情况进行粘贴，这10个剪贴板，应该够你用了。
ctrl+0-9的数字键，是在剪贴板之间切换。比如
ctrl+1,然后copy了内容"a"
ctrl+2,然后copy了内容"b"
你如果想paste a，就要先按1下ctrl+1再ctrl+v,要paste b，就按一下ctrl+2再ctrl+v
我有时候不小心更换了剪贴板，就奇怪从别的地方复制的东西粘贴不过来。这种情况要注意

原文：http://blog.donews.com/swap/archive/2009/05/02/1492683.aspx