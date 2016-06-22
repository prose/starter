title: 大三【上】DELPHI课程期末复习材料
tags:
  - delphi
  - 复习
  - 材料
id: 640
categories:
  - 课件❤资料
date: 2010-01-08 00:05:04
---

明年的这个时候，现在大二的学弟学妹们估计就得用得着了

1、常见的英文缩写的含义：如**BDE数据库引擎、OOP面向对象程序设计、DLL动态链接库、VCL可视化控制库、SQL结构化查询语言** 等

2、关于Delphi中的文件

.pas-单元文件, .dpr-工程文件,.dfm-窗体文件，.dcu-单元编译文件, .exe-执行文件、.bgp-工程组文件；

工程中包含的单元主要有带Form的单元和不带Form的单元

3、Pascal中的语法知识

语句以分号结束，程序或单元以点句号结束

赋值符号、相等符号、运算符优先级

数组的下标默认是从0开始<!--more-->

循环语句：for 循环中的循环变量在循环体中不能赋值，且为有序类型

函数格式,返回值

4、面向对象编程语言的四个基本特征：抽象性、封装性、继承性和多态性

5、窗体中要放置多个相同的组件，使用技巧：按住Shift键 + 单击组件，然后在窗体上单击

双击一个组件在窗体上的位置

创建快捷方式的符号设置快捷键符号 &amp;

坐标(left,top)-相对于父对象而言

常用组件：

Label组件可以输出多行文本,不能获得焦点,不能用于输入

EDIT组件 –PASSWORD属性和TEXT属性 ;

COMBOBOX组件 –既可以输入、又可以用于选择

菜单选项中出现水平分隔符，是将菜单项的Caption属性设置为‘－’

6、对象监视器中，属性前的 + 、属性后的 … 的含义

对象监视器中并不是列出了所有属性

7、组件都具有的属性：Name-名称和 tag-标记

组件要显示提示信息需要设置ShowHint和Hint

8、异常处理

TRY…FINALLY、TRY…EXCEPT的语法、作用

常见的引发异常的事件

9、连接数据库系统的各层次组件间的关系、表的关联
<table cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="126" height="38" bgcolor="white">
<table cellspacing="0" cellpadding="0" width="100%">
<tbody>
<tr>
<td>TDatabase</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
10、 控制Table的可编辑的属性是：readonly

控制Query的可编辑的属性是： RequestLive，结果集默认是不可编辑的

TQuery返回一个结果集用方法OPEN，无返回结果集用方法EXECSQL；要执行的SQL语句在SQL属性中

11、 数据集的Locate方法的使用和结果

locate(关键字段，字段值，大小写匹配+部分匹配) 找到时返回true

找到结果则定位到找到的第一条，找不到则位置不动。

Locate不一定需要有索引

Findkey要求查询字段必须做过索引。

12、 数据集的Active与数据库Database的Connected属性的关系

可以由 Active:=true 触发 Database.Connected连接变为true，注意表/库该关闭的时候关闭

13、 数据库组件好处：提供事务的支持；减少与实际数据库的连接的句柄，减少开销；

可以提供内部使用的别名，即使外部文件路径改变也不用改变内部程序；登录提示可设置loginPrompt，LoginPrompt属性设置为False时，其连接数据的参数保存在TDatabase的Params属性中

BDE数据集组件可不必通过TDatabase组件与后端的数据建立连接

14、 BDE设置的问题：

取别名，非SQL数据库别名指定文件夹，SQL数据库指定到文件；

Table组件中的DataBaseName必须设成 Database.DataBaseName，通过TableName属性来选择要打开的数据表

15、 写步骤:

根据任务画界面示意图，并说明清楚什么对象什么事件,

16、 数据库编程

查找、更新程序的编写