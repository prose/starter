title: Android手机屏幕录像方法
tags:
  - android
  - 录像
id: 1429
categories:
  - 系统❤软件
date: 2010-09-11 14:55:08
---

虽然论坛上已经有了安致手机截屏的软件，使用也很方便。但是有时候视频演示效果会很好。今天在googlecode上发现了一个好用的在windows、linux和mac下都能使用的捕获视频的工具：
> [http://code.google.com/p/androidscreencast/](http://code.google.com/p/androidscreencast/ "http://code.google.com/p/androidscreencast/")
使用java web start技术，因此可以通过浏览器直接使用。

![](http://a.kainy.cn/201009/image_thumb30.png) ![](http://a.kainy.cn/201009/image_thumb31.png)<!--more-->

左边是程序录制的界面，右边是视频播放的界面。效果不错。

使用很简单：

*   首先要确保机器上安装了java sdk；
*   然后，将android手机通过usb连接到计算机上
*   运行adb devices命令，并且看到设备，这一步很重要，会启动android adb相关的服务，否则无法在工具运行后使用；
*   点击链接：[http://androidscreencast.googlecode.com/svn/trunk/AndroidScreencast/dist/androidscreencast.jnlp](http://androidscreencast.googlecode.com/svn/trunk/AndroidScreencast/dist/androidscreencast.jnlp "http://androidscreencast.googlecode.com/svn/trunk/AndroidScreencast/dist/androidscreencast.jnlp")将下载jnlp文件，然后双击该文件，或者执行命令：javaws jnlp_file_path即可
说一下基本使用。

可以通过鼠标在计算机上模拟手指来控制手机。

如果想在计算机上横屏显示，只需右击鼠标。

录制操作，点击：

![](http://a.kainy.cn/201009/image_thumb32.png)

这样操作手机的视频会录制，再次点击record停止录制。

[via.](http://marshal.easymorse.com/archives/3230)