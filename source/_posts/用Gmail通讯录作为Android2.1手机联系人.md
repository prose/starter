title: 用Gmail通讯录作为Android2.1手机联系人
tags:
  - android
  - gmail
  - 同步
  - 手机
  - 联系人
  - 通讯录
id: 1387
categories:
  - 系统❤软件
date: 2010-09-04 21:27:10
---

Android的特色之一就是很多应用与网络结合愈加紧密了，整合了许多网络服务，确实用着挺爽。这里介绍一个用Gmail通讯录来编辑手机联系人信息的方法。

### 这么做的好处主要有：

*   第一、方便：电脑操作起来远比手机快吧，尤其Kainy用的小U 屏幕就2.8，输入时实在不是很惬意，更不用说添加联系人头像这样操作教复杂的重复性工作啦；
*   第二、功能强大：Android系统的手机联系人信息和Gmail通讯录格式差不多非常详细；
*   第三、美观：经过同步 可以使用通讯录里的头像做为手机联系人来电、短信的图标，对于追求个性的人士尤其有意义。

### 这么做之后的成果大致是：<!--more-->

![联系人](http://a.kainy.cn/201009/%E8%81%94%E7%B3%BB%E4%BA%BA.png "联系人显示效果") ![短信息](http://a.kainy.cn/201009/%E7%9F%AD%E4%BF%A1.png "短信列表的显示是这样滴。。")

来电的就不截图啦，就是中间显示联系人的头像，比上面两张图的大一些。

### 那么，究竟该怎么做呢？

大致的思路是用用Gmail通讯录编辑好全部联系人的信息，包括头像什么的；然后通过同步功能，把所有通讯录信息同步到联系人中；手机上设置联系人显示为Gmail账户的通讯录（这步很重要，很多朋友就是没有设置这个，导致电话短信的时候仍显示空白图像，而只有查看联系人的时候才是自己设置的头像）

具体看截图和说明：

[![通讯录 ](http://a.kainy.cn/201009/gmail%E8%81%94%E7%B3%BB%E4%BA%BA.png "步骤1.编辑：Google账户的通讯录在这儿，不会不懂吧？还没账户的赶快去注册一个咯！")](http://a.kainy.cn/201009/gmail%E8%81%94%E7%B3%BB%E4%BA%BA.png)

[caption id="" align="aligncenter" width="240" caption="设置-账户与同步-管理账户中选择你的Google账户就到这啦~"]![](http://a.kainy.cn/201009/%E5%90%8C%E6%AD%A5Google%E8%B4%A6%E5%8F%B71.png "步骤二：同步")[/caption]

[caption id="" align="aligncenter" width="240" caption="进入联系人，点击显示设置进入下一步"]![](http://a.kainy.cn/201009/%E8%81%94%E7%B3%BB%E4%BA%BA%E8%AE%BE%E7%BD%AE.png "步骤3.1")[/caption]

[caption id="" align="aligncenter" width="240" caption="勾选你设置同步的Google账户里需要显示在手机联系人的分组，为保美观 建议取消Google账户外联系人的显示."]![](http://a.kainy.cn/201009/%E8%81%94%E7%B3%BB%E4%BA%BA-%E8%AE%BE%E7%BD%AE-%E6%98%BE%E7%A4%BA%E8%AE%BE%E7%BD%AE.jpg "步骤3.2")[/caption]

怎样，现在是不是在你手机上看到了本文头两张截图的效果了呢？

### 最后对坛友们在论坛提出的问题说说我的观点：

[Google同步联系人出现问题！ 求救···](http://www.hiapk.com/bbs/viewthread.php?tid=34383&amp;highlight=%CD%AC%B2%BD%C1%AA%CF%B5%C8%CB)

出现这个问题就是步骤3中的显示设置没完成造成的啦，具体步骤见上文咯。

[电脑上操作GMAIL如何删除通讯录里的分组](http://www.hiapk.com/bbs/viewthread.php?tid=427878&amp;highlight=%CD%AC%B2%BD%C1%AA%CF%B5%C8%CB)

这个不难：打开需要删除的分组，点击右边联系人列表上方（下方也有）的“更多操作”，在下拉列表中就能看到你需要的操作“删除族群”啦。。。

[手机和gmail之间联系人同步，是没有方向的对吗？](http://www.hiapk.com/bbs/viewthread.php?tid=301219&amp;highlight=%CD%AC%B2%BD%C1%AA%CF%B5%C8%CB)

这点Kainy倒是没考虑太多，反正一般很少出现手机和电脑同时修改联系人的状况，一般修改其中一者前，想象是否在这之前曾修改过另一者，是的话就先同步下再做修改，这样一般就不会出现问题啦。不过即使两边同时修改，我估计问题也不大，毕竟软件工程中也有类似的同步软件 借鉴其中的技术应该可以实现不出错的同步，你看Googlecode的[SVN](http://kainy.cn/go/svn/)不是都做得挺好？大概是同步之前会比对一下两边的版本信息，同步时只处理上一次同步到本次同步这一时间段内的修改吧。

[同步联系人之后，号码被分隔符隔开了](http://www.hiapk.com/bbs/viewthread.php?tid=455079&amp;highlight=%CD%AC%B2%BD%C1%AA%CF%B5%C8%CB)

[aaccee](http://www.hiapk.com/bbs/space.php?uid=813930)朋友发帖截图中的乱码我倒是没见到，只是联系人号码确实会被以“-”分隔成形如:1-580-602-****这样的格式，不过不影响拨号和短信发送。

PS：另外 Google 日历的同步也不错哦！对于事物繁忙的人士尤其好用，大家有兴趣也可以试试。