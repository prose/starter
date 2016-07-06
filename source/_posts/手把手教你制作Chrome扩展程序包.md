title: 手把手教你制作Chrome扩展程序包
tags:
  - chrome
  - 扩展
id: 1519
categories:
  - 系统❤软件
date: 2010-08-25 19:57:19
---

Chrome扩展程序主要由JSON、HTML、JavaScript、Icons 4类文件构成(UTF-8编码)，再将它们打包成一个ZIP压缩文件(扩展名为.crx)即可。下边为一个简单的示例，演示了Chrome扩展程序的制作和打包过程。

<div>**1.文件准备**</div>
<div>**
**</div>
<div>

在磁盘新建一个文件夹用于存放我们的Chrome扩展程序，例如F:\GoToGoogle，然后放入下边两个文件：

manifest.json：<!--more-->

</div>
> <div>{
> "name": "GoToGoogle",
> "version": "1.0",
> "description": "Goto Google when open Baidu.",
> "content_scripts": [
> {
> "matches": ["http://*.baidu.com/*"],
> "js": ["GoToGoogle.js"]
> }
> ]
> }</div>
<div>GoToGoogle.js文件内容：</div>
> <div>if(confirm("GoTo g.cn?"))document.location.href="http://g.cn/";</div>
<div>_说明：manifest.json是一个json文件，相当于Chrome扩展程序的配置文件，这个文件在每个Chrome扩展程序都必须存在。_

**2.扩展程序打包**

**
**

使用Chrome浏览器我们就能完成扩展程序的打包工作。在Chrome浏览器中打开扩展程序页面管理页面(chrome://extensions/)，先载入正在开发的扩展程序，再打包扩展程序即可。流程如下图所示：

</div>

[![](http://a.kainy.cn/201010/015.gif)](http://a.kainy.cn/201010/015.gif)

[![](http://a.kainy.cn/201010/016.gif)](http://a.kainy.cn/201010/016.gif)

[![](http://a.kainy.cn/201010/017.gif)](http://a.kainy.cn/201010/017.gif)

[![](http://a.kainy.cn/201010/019.gif)](http://a.kainy.cn/201010/019.gif)

[![](http://a.kainy.cn/201010/020.gif)](http://a.kainy.cn/201010/020.gif)

[![](http://a.kainy.cn/201010/018.gif)](http://a.kainy.cn/201010/018.gif)

3.发布插件

插件试用没有问题后，就可以将它发布出去让更多人使用。首先将插件所在的文件夹压缩成一个ZIP文件。然后再到扩展管理页，点击右下角的“获得更多扩展程序”链接，进入<span style="color: #3366cc;">Chrome</span>官方插件下载页面，在这个网页的左下角，你能看到“发布扩展程序”的链接，点击链接，上传ZIP压缩文件、添加插件的使用说明和截图，就可以发布插件了；但由于缺乏审核机制使得 Chrome 扩展中心中的扩展质量良莠不齐，甚至发放盗版软件序列号这种明显违法法律的扩展都可以堂而皇之的列于其中，更有甚者直接威胁到了用户的网络安全与隐私。为了改善这种情况，Google8月20日在 Chromium Blog 中宣布对 Chrome 扩展中心进行了两大重大改变：1，收取注册费用。2，域名验证系统，所以在8月20日之后注册的开发者账户要想发布自己的扩展就得先交5美元咯。