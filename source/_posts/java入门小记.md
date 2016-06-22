title: java入门小记
tags:
  - java
  - java程序设计
  - JDK
id: 817
categories:
  - 学习笔记
date: 2010-03-14 16:49:48
---

这学期开的Java程序设计课，这周上了第一节实验课，这里将实验中碰到的一些问题拿来小结一下。

### 首先是JDK的安装与配置，分为三步：

**1.下载 安装jdk **

下载页：http://java.sun.com/javase/downloads/index.jsp

**2.设定系统变量**
<div id="_mcePaste">在「系统变量」中「新建」，其中「变量名称」设为</div>
<div id="_mcePaste">JAVA_HOME，「变量值」设为刚才安装的目录下的jdk</div>
<div id="_mcePaste">文件夹(例如：C:\Java\jdk1.5.0_05)</div>
<div id="_mcePaste">在「系统变量」中「新建」，其中「变量名」设为</div>
<div id="_mcePaste">classpath，「变量值」为<!--more--></div>
> <div id="_mcePaste">“.;%java_home%\lib;%java_home%\lib\tools.jar</div>
<div id="_mcePaste">接着在原有的「系统变量」中找到PATH「编辑」，在</div>
<div id="_mcePaste">「变量值」的最前面加入</div>
> <div id="_mcePaste">%java_home%\bin;%java_home%\jre\bin；</div>
<div>**3.测试：**</div>
<div>在「命令提示字符」下，打 java 指令，若没有出现找不到指令就可以了，接着以程序直接测试。</div>
<div></div>

### 编译和运行的步骤：

在「命令提示字符下」输入以下指令

先切换到档案所在目录，例如C:\

编译：输入下列命令：
> javac HelloWorld.java
编译OK会产生 Helloworld.class

JVM通过Java解释器来解释执行.class文件。
> java HelloWorld
> 
> (显示)   Hello World !!
注意：

1、一个.java文件只能有一个public类。

2、这个public类中有且只能有一个静态的main()方法。

3、如果.java文件中有public类，则文件名必须与该public类名一致。

4、Java语言区分大小写。

5、注意在文件中不要加入排版信息（不要用office中的word来写代码）。

### 一些例题：

**1.关于Java中的加号**

<span style="font-family: Arial, Helvetica, sans-serif, SimSun; line-height: 22px; font-size: 14px;"> </span>

> public class a1
> 
> {
> 
> public static void main(String args[])
> 
> {
> 
> char x='你',y='好';
> 
> System.out.println(x+y);
> 
> System.out.println(" "+x+y);
> 
> }
> 
> }

运行结果为：

**43229**

** 你好**

可见 System.out.println(x+y); 中将加号用作运算符 而 System.out.println(" "+x+y);这里则是用作连接符。估计是操作数之前出现过字符串("") 那么之后的加号就用作连接符 ，否则就用作运算符吧。

**2.下面这个的经典的题目了，网上一搜，好多历年试卷里都有**

> public class Conv
> 
> {
> 
> public static void main(String args[])
> 
> {
> 
> Conv c=new Conv();
> 
> String s=new String("Hello");
> 
> c.amethod(s);
> 
> }
> 
> public void amethod(String s)
> 
> {
> 
> char c='H';
> 
> c+=s;
> 
> System.out.println(c);
> 
> }
> 
> }

编译时候的错误提示是：

> 找到： char
> 
> 需要： java.lang.String
> 
> c+=s;
> 
> ^
> 
> 1 错误

看这样的提示是不是会一头雾水呢？ 估计是中文直译，开始的时候也没能从错误提示中得到什么信息，认真看了整段代码结合课本才知道原来是定义变量c的类型错误了，char 和 string 怎能杂交咯，解决办法是将  char c='H'; 一句改为 String c=new String("H"); 这样以后就编译通过啦，结果是“Hello”。