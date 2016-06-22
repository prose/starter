title: 屏蔽IM软件 输入状态的方法
tags:
  - IM
  - 方法
  - 注册表
id: 1494
categories:
  - 系统❤软件
date: 2010-09-27 22:26:52
---

在使用即QQ、baiduhi等即时消息软件与朋友聊天，每当我在输入的时候，对方的聊天窗口中就会有类似：“对方正在输入”的状态提示，这是聊天软件不断完善而产生的功能，而有的时候我们又不希望对方看到自己的输入状态，有些软件比如QQ，可以通过“我的资料--系统设置--状态与提醒--及时共享”进行设置，但遇到软件本身没有设置该功能的情况，我们可以通过如下方法进行解决：
> 在“运行”中输入“regedit”，打开注册表编辑器，找到“
> HKEY_USERS\.DEFAULT\Control  Panel\Input Method”分支，将右边窗口中“
> Show Status”的键值修改成“0”（“1”显示，“0”不显示状态条），然后
> 重新启动系统，输入法状态条就隐藏了。
按照此原理，这里提供一个合并注册表来屏蔽输入状态的方法：<!--more-->
> <div id="_mcePaste">Windows Registry Editor Version 5.00</div>
> <div id="_mcePaste">[HKEY_USERS\.DEFAULT\Control Panel\Input Method]</div>
> <div id="_mcePaste">"Show Status"="0"</div>
将以上内容保存到新建的文本文档（如：[输入状态屏蔽.reg](http://a.kainy.cn/201009/%E8%BE%93%E5%85%A5%E7%8A%B6%E6%80%81%E5%B1%8F%E8%94%BD.zip "也可下载本文件直接使用")），保存后双击后确认“允许合并”即可。