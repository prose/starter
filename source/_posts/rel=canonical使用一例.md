title: rel=canonical使用一例
tags:
  - iWebSNS
  - 优化
id: 2179
categories:
  - 建站❤编程
date: 2012-10-28 15:59:42
---

厝边网基于iWebSNS二次开发，沿用了其网站架构和框架，即：应用页（modules.php为入口）作为iframe子页分别由 个人中心页（main.php 仅登录用户访问）和用户主页（home.php 内容对外开放）两个父页面引用。

内容由应用页承载，如果直接访问[应用页（iframe）](http://cuobian.com/modules.php?app=album&amp;user_id=97 "路径：“Antifin的主页&gt;	Antifin的图册&gt; 闽都杂记”") 则js跳转到[包含父框架的地址](http://cuobian.com/home.php?h=97#?app=photo_list&amp;tab=album_list&amp;album_id=43&amp;user_id=97&amp;wraper=home "标题：““Antifin的图册-厝边网福州十邑乡亲网上的家””")，虽然最终能到达目标地址，但由于使用js执行判断，跳转前子页已渲染完毕，如此跳转影响用户体验，于是考虑让子页的搜录排名在完整页之后，作为妥协方案。

<!--more-->

![](http://a.kainy.cn/201210/2012-10-10_102421-modules_php.png)

![](http://a.kainy.cn/201210/2012-10-10_110511-iframe%E9%A1%B5%E9%9D%A2%E7%9A%84%E6%9D%83%E9%87%8D%E8%BD%AC%E7%A7%BB%E7%BB%99%E7%88%B6%E9%A1%B5%E9%9D%A2%EF%BC%88%E8%AE%BF%E9%97%AE%E8%80%85%E7%BB%8F%E8%B7%B3%E8%BD%AC%E5%90%8E%E6%9C%80%E7%BB%88%E8%AE%BF%E9%97%AE%E9%A1%B5%E9%9D%A2%EF%BC%89%E3%80%82.png)

&nbsp;

modules.php权重转移至home.php，以期让相同内容父页面在搜索结果中排在iframe页之前，从而避免通过Google来访者的一次跳转。

效果尚待观察。