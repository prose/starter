title: ThinKPHP学习笔记-2
tags:
  - php
  - ThinkPHP
  - 实习
  - 框架
  - 问题
id: 1297
categories:
  - PHP
date: 2010-07-27 15:13:59
---

**第一个问题：**在JS中调用TP定义的几个常量如 __URL__、__APP__ 时出现的问题：
TP给我们定义了这些常量确实挺好用，在模板中调用的时候感觉非常舒服。但是，这仅在模板，在JS中就不是那么回事了，看一下如下的关键代码：
> $.ajax(
> {
> type:"post",
> url:"__URL__/checkLogin"
> }
> );
怎么使用都错误，用Firebug一看，发现递交的地址类似于http://xxx.com/__URL__/checkLogin，压根就没有解析，解决办法就是在模板文件，也就是html文件中，写入定义JS全局变量的语句，也就是这样子
> <script type="text/javascript">// <![CDATA[
>           var URL = "__URL__";         var APP = "__APP__";         var ROOT = "__ROOT__";
> // ]]></script>
现在你可以在相关JS文件中使用这些全局变量来代替路径了，比如上面的ajax提交就可以这样子写<!--more-->
> $.ajax(
> {
> type:"post",
> url:URL+"/checkLogin"
> }
> );
**第二个问题：**关于登录的问题，要后台管理和登录模块分块。
权限验证最好写在相应的Action中定义的_initialize方法中，（_initialize（）函数类中每个函数执行时，都要先执行它）。
> class LoginAction extends Action
> {
> public function _initialize()
> {
> //checkCookie为判断是否选择长效登录的方法，如果判断长效登录并没有退出登录，则将部分值设置给SESSION变量，也就是为啥下面用SESSION进行判断。
> checkCookie();
> if($_SESSION[C('MANAGER_KEY')] == 0)
> {
> //在初始化中实行跳转的话，那么就不能将登录等模块写在同一个Action中，否则未登录状态必然会无线跳转
> $this -&gt; redirect("login", "Manage");
> }
> parent::_initialize();
> }
> }
还有一个问题，暂时没有搞定，不知道是我没有弄好还是怎么回事，就是ThinkTemplate中一些用其自身的标签来导入JS、CSS等，没有成功，所以我现在还在使用HTML标准的方法来进行JS、CSS导入。