title: 开发WP7应用的方法
tags:
  - WP7
  - 开发
  - 手机
  - 操作系统
id: 1970
categories:
  - 系统❤软件
date: 2011-04-05 18:49:51
---

Windows Phone 7号称应用数量11500 开发者3.6万，开发工具已经被下载150万次；WP7用户平均每周下载应用12个，本周新增开发者1200名...看了这些数据不知你是否有些心动了呢？反正哥是有些不淡定了，乘着放假没事折腾了一番。虽然拥有一架wp7设备到目前还只是小小滴梦想。。。不过没有设备不应该算问题撒，别拿自己不当Developer！

# 开发工具：

<span>首先介绍一下本文中，开发WP7（Windows Phone7）应用所使用的工具：Visual Studio 2010（[下载链接](http://www.microsoft.com/visualstudio/en-us/try?CR_CC=200000862&amp;WT.mc_id=MSCOM_MEDIA&amp;WT.mc_id=MSCOM_HP_US_BIZ_113LMUS004262 "下载vs2010")） 和 Silverlight for Windows Phone（下载[链接](http://www.silverlight.net/getstarted/devices/windows-phone/ "下载Silverlight.")）同时还需要</span><span>Windows Phone 7 developer toolkit，就在同一页面，躲在下方的那个家伙。</span>

<span>准备好这些工具以后，就可以开始开发我们的应用了，这里要做的是一个功能比较简单的停表应用，当然你可以在此基础上发挥自己的聪明才智，折腾出更多的实用功能或者更精美的界面。这里只是介绍一下制作应用的大致流程，所以为完善的地方还望见谅咯。<!--more--></span>

# 搭建框架：

<span>先介绍下如何完成新应用的框架 – 在 Visual Studio 新建项目中选择 Windows Phone Application ，这里利用自带的模板，如下图：</span>

[![Creating a new project, leveraging the template](http://a.kainy.cn/201103/6406.image_5F00_36B7787A.png "点击图片放大")](http://a.kainy.cn/201103/6406.image_5F00_36B7787A.png)

[![image](http://a.kainy.cn/201103/0537.image_5F00_2FC4996A.png "image")](http://a.kainy.cn/201103/0537.image_5F00_2FC4996A.png)

<span>实际上这已经可以算做一个应用了。虽然只是运行在模拟器中，却已具备一些基本的功能，如下图! 第一个是默认界面的截图，可以看到默认的标题和应用的起始页面。模拟器中包含了真实设备所具有的按键功能。比如，当点击中间的 "windows” 图形按钮，会展现手机的起始界面，这儿只有一个IE图标（图2）。再点击IE图标旁边的导航按键就可以看见第三个截屏——展示了手机已有的应用，当然也包括我们正在创建的计时器啦。最后一张截屏展示的是点击搜索按钮后的语音搜索功能。怎么样?</span><span>Visual Studio中的模拟器够给力吧。</span><span>如此直观的展示开发产品的界面和功能，相信能为你的开发工作减轻不少负担。</span>

[![image](http://a.kainy.cn/201103/5466.image_5F00_thumb_5F00_1720C24E.png "image")](http://a.kainy.cn/201103/5466.image_5F00_thumb_5F00_1720C24E.png)[![image](http://a.kainy.cn/201103/5775.image_5F00_4D423A9D.png "image")](http://a.kainy.cn/201103/5775.image_5F00_4D423A9D.png)[![image](http://a.kainy.cn/201103/3568.image_5F00_4B151607.png "image")](http://a.kainy.cn/201103/3568.image_5F00_4B151607.png)[![image](http://a.kainy.cn/201103/0434.image_5F00_5C94DB05.png "image")](http://a.kainy.cn/201103/0434.image_5F00_5C94DB05.png)

# 从简单入手 – 应用名称和标题

<span>回到 Visual Studio, 可以看到类似DW中的设计模式和代码模式的两种显示，在设计模式中可以通过点击模拟器中的应用界面，在右下角显示并修改对应控件的属性，比如这里要做的是一个停表小应用，就直接把title设置为“The Stopwatch”</span>

[![image](http://a.kainy.cn/201103/3823.image_5F00_5C90C706.png "image")](http://a.kainy.cn/201103/3823.image_5F00_5C90C706.png)

<span>同时，我们也应该对“Name”一栏进行修改，这里的名称将会显示在手机应用列表中。在“solutions explorer”中单击方案名，在弹出的属性设置页面中修改“deployment options”和“title options”中的title，如下图</span>[![image](http://a.kainy.cn/201103/1665.image_5F00_2CC23713.png "image")](http://a.kainy.cn/201103/1665.image_5F00_2CC23713.png)

<span>重新编译并运行，就可以看到上一步所作的修改了</span>

[![image](http://a.kainy.cn/201103/7571.image_5F00_16C7DD4F.png "image")](http://a.kainy.cn/201103/7571.image_5F00_16C7DD4F.png)[![image](http://a.kainy.cn/201103/6825.image_5F00_12BA3D25.png "image")](http://a.kainy.cn/201103/6825.image_5F00_12BA3D25.png)[![image](http://a.kainy.cn/201103/1072.image_5F00_6F2D72F2.png "image")](http://a.kainy.cn/201103/1072.image_5F00_6F2D72F2.png)

通过VS开发WP7应用还是挺方便的哈，毕竟都是微软家的儿子。。

到这一步我们已经完成了整个应用的框架部分。

# 创建时间显示界面

<span>进入核心功能的开发阶段，这里将使用 “DD:HH:MM:SS:mmm”的格式来显示时间。</span>

<span>通过 View → Toolbox 打开控件工具栏，其中包含所有当前可选的控件。</span>

[![image](http://a.kainy.cn/201103/3124.image_5F00_171FD678.png "image")](http://a.kainy.cn/201103/3124.image_5F00_171FD678.png)

<span>选择“Textbox”控件作为主显示（双击即可）。然后是属性设置，这里将默认显示内容设为00:00:00:000 字体大小设为64，<span>按需要拖动调整控件的位置和尺寸，一切都是那么滴河蟹，让我回忆起大二学Delphi的情景。</span></span>

[![image](http://a.kainy.cn/201103/0218.image_5F00_739F1E13.png "image")](http://a.kainy.cn/201103/0218.image_5F00_739F1E13.png)

<span>接下来要添加的是启动计时器和暂停即时的按钮，P两个合适的jpg图片文件罢。。通过 “Project.Add Existing Item…” 将图标文件添加到项目中去</span>

[![image](http://a.kainy.cn/201103/6433.image_5F00_4354355E.png "image")](http://a.kainy.cn/201103/6433.image_5F00_4354355E.png)[![image](http://a.kainy.cn/201103/4382.image_5F00_7935D820.png "image")](http://a.kainy.cn/201103/4382.image_5F00_7935D820.png)[![image](http://a.kainy.cn/201103/7853.image_5F00_5B93D754.png "image")](http://a.kainy.cn/201103/7853.image_5F00_5B93D754.png)

<span>拖入按钮控件。。。</span>

[![image](http://a.kainy.cn/201103/5430.image_5F00_7C77242E.png "image")](http://a.kainy.cn/201103/5430.image_5F00_7C77242E.png)

<span>我们希望将之前做的图片作为按钮，只需修改XAML 文件，将其中 &lt;Button /&gt; 标签中的内容部分用“&lt;Image&gt;图片信息&lt;Image /&gt;”来替换即可，</span>

<span>这样，我们就完成了应用的皮肤部分，接下来就要给它安上骨肉，也就是功能代码。</span>

[![image](http://a.kainy.cn/201103/8865.image_5F00_0C727AC1.png "image")](http://a.kainy.cn/201103/8865.image_5F00_0C727AC1.png)

# 停表的功能代码

<span>点击计时按键的时候进行初始化的代码：</span>

[![image](http://a.kainy.cn/201103/3531.image_5F00_58C5FA63.png "image")](http://a.kainy.cn/201103/3531.image_5F00_58C5FA63.png)

<span>添加功能代码的方法和Delphi中很想，双击按钮控件，敲入代码balabala....</span>

### 引用基础类（简称鸡肋）

[![image](http://a.kainy.cn/201103/0312.image_5F00_7FD093D8.png "image")](http://a.kainy.cn/201103/0312.image_5F00_7FD093D8.png)

### 定义变量

[![image](http://a.kainy.cn/201103/7762.image_5F00_09D50F37.png "image")](http://a.kainy.cn/201103/7762.image_5F00_09D50F37.png)

### 计时/停止控制

[![image](http://a.kainy.cn/201103/0456.image_5F00_364E1950.png "image")](http://a.kainy.cn/201103/0456.image_5F00_364E1950.png)

### 返回参数

### [![image](http://a.kainy.cn/201103/2821.image_5F00_70996964.png "image")](http://a.kainy.cn/201103/2821.image_5F00_70996964.png)

## 大功告成！

<span>在模拟器中运行的截图：</span>

[![image](http://a.kainy.cn/201103/1781.image_5F00_6B1AD2F3.png "image")](http://a.kainy.cn/201103/1781.image_5F00_6B1AD2F3.png)[![image](http://a.kainy.cn/201103/4885.image_5F00_750F2884.png "image")](http://a.kainy.cn/201103/4885.image_5F00_750F2884.png)[![image](http://a.kainy.cn/201103/2843.image_5F00_0B617B72.png "image")](http://a.kainy.cn/201103/2843.image_5F00_0B617B72.png)[![image](http://a.kainy.cn/201103/2262.image_5F00_2876FDAF.png "image")](http://a.kainy.cn/201103/2262.image_5F00_2876FDAF.png)

## 感慨一番

就个人所接触的开发工具和开发方法。相比较Android应用的开发环境，WP7应用的开发入门还算简单，工具使用起来容易上手，起码用Visual Studio是这样的，也比较直观。有点像设计模式和代码模式下做网页的差别，至于哪种比较好，那就仁者见仁智者见智了。

这里有个比较完善的[停表应用](http://www.windowsphonegeek.com/AppHub/Application/935362ca-fd48-e011-854c-00237de2db9e)，有兴趣的可以此为标杆，尝试编码实现这样一个应用。

如果觉得这样的开发太繁琐，你所开发的应用不需要如此复杂的功能，也可以试试这个[不编程也开发 无代码开发Windows Phone 7应用工具](http://mobile.51cto.com/hot-251117.htm "http://mobile.51cto.com/hot-251117.htm")。