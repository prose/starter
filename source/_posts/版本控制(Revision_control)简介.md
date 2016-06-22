title: 版本控制(Revision control)简介
tags:
  - googlecode
  - TortoiseSVN
  - 版本控制
  - 规范
id: 1844
categories:
  - 系统❤软件
date: 2011-01-02 16:18:21
---

在进行团队项目开发时，往往需要将同一份代码反复修改，这样容易造成不一致。例如有两个同时在修改index.php这个文件，你修改了第m行，而同时另外一个成员修改了第n行的内容，如果你先传回修改过的文件，而后另一个人的传回的文件就必然覆盖你所做的修改，最终造成index.php文件只修改了第n行的内容；即便在此过程中两人做好沟通工作，对文件修改的合并也会增加一些额外的工作，当然这是每个人都不想做的。

此刻如果有一个公共的代码管理服务器就可以解决我们的问题，google code正是这样一个开源的代码托管服务（当然类似的服务有很多，SourceForge就是其中有名的一个，今天姑且不论他们之间各自有什么优点），下面我们就一块看看如何使用TortoiseSVN软件对托管在google code上的项目进行简单的操作。

## 一、版本控制简介：

<!--more-->版本控制是管理信息修改的艺术，它一直是程序员最重要的工具，程序员经常会花时间作出小的修改，然后又在某一天取消了这些修改，想象一下一个开发者并行工作的团队  -  或许是同时工作在同一个文件！-  你就会明白为什么一个好的系统需要管理潜在的混乱。

## 二、什么是  TortoiseSVN：

<div>
<div>TortoiseSVN  是  Subversion  版本控制系统的一个免费开源客户端，可以超越时间的管理文件和目录。文件保存在中央版本，除了能记住文件和目录的每次修改以外，版本库非常像普通的文件服务器。你可以将文件恢复到过去的版本，并且可以通过检查历史知道数据做了哪些修改，谁做的修改。这就是为什么许多人将Subversion  和版本控制系统看作一种 时间机器 。</div>
<div>某些版本控制系统也是软件配置管理(SCM)系统，这种系统经过精巧的设计，专门用来管理源代码树，并且具备许多与软件开发有关的特性   -  比如，对编程语言的支持，或者提供程序构建工具。不过   Subversion  并不是这样的系统；它是一个通用系统，可以管理任何类型的文件集，包括源代码。</div>
</div>

## 三、名词解释

<div>

1.  **检出工作副本：**你的版本库就像是一台时间机器，它记录了所有提交的修改，允许你检查文件或目录以及相关元数据的历史。通过一个Subversion 命令你可以根据时间或修订号取出一个过去的版本（或者恢复现在的工作拷贝），然而，有时候我们只是想看看历史而不想回到历史。
2.  **提交修改：**可以理解为上传修改文件的记录，就是把工作副本里面修改过的文件的记录上传到版本库里面。
3.  **更新工作副本：<span style="font-weight: normal; font-size: 13px;">可以理解为下载最新版本库文件的记录，就是把版本库里面最新上传的文件记录下载到工作副本里面。</span>**
4.  **锁定—修改—解锁：<span style="font-weight: normal; font-size: 13px;">许多版本控制系统使用“锁定 修改 解锁”机制解决这种问题，在这样的模型里，在一个时间段版本库的一个文件只允许被一个人修改。首先在修改之前，Harry 要“锁定”住这个文件，锁定很像是从图书馆借一本书，如果 Harry 锁住这个文件，Saly 不能做任何修改，如果 Sally 想请求得到一个锁，版本库会拒绝这个请求。Harry 结束编辑并且放开这个锁之前，她只可以阅读文件。Harry 解锁后，就要换班了，Saly 得到自己的轮换位置，锁定并且开始编辑这个文件。</span>**
</div>

## **四、TortoiseSVN基本操作：**

### 1.获取密码

[下面的页面中](http://code.google.com/hosting/settings "点此打开页面")就有相应的svn密码，当然有了密码和路径就可以上传和获取源代码了。

[![Googlecode SVN 基本使用-获取密码](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-1.gif "Googlecode SVN 基本使用-获取密码")](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-1.gif)

不过请**注意**：大部分时候上面的页面是无法打开的，当然也就无法获取svn密码。这里姑且不说是怎么造成的，就直接说一下如何解决吧。方法很简单：就是打开您的hosts文件（位于：C:\Windows\System32\drivers\etc\Hosts，修改之前建议备份），在下面添加：66.249.80.104 code.google.com 一行即可。

### 2.初次上传源代码（import）

既然svn的url和密码都有了，当然就管理我们的源代码了。首先安装TortoiseSVN，它是一个图形界面的svn源代码管理工具。下面就用它上传我们的源代码吧。

首先选择要上传的项目文件所在文件夹，点击右键，使用TortoiseSVN的**import**命令导入。

[![Googlecode SVN 基本使用-2](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-2.gif "Googlecode SVN 基本使用-2")](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-2.gif)

此时要求输入svn地址

[![Googlecode SVN 基本使用](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-3.gif "Googlecode SVN 基本使用")](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-3.gif)

接着需要输入svn账户信息，用户名就是google账户，密码就是上面说的google随机生成的密码。

[![Googlecode SVN 基本使用](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-4.gif "Googlecode SVN 基本使用")](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-4.gif)

输入完后点击ok，即可进行传输。

[![Googlecode SVN 基本使用](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-5.gif "Googlecode SVN 基本使用")](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-5.gif)

### 3.获取源代码（update）

或者说是更新本地源码；上传源代码后就可以下载来编辑，编辑之后再更新到服务器，这也是标准的源代码管理流程。那么如何签出编辑呢？其实很简单，安装完TortoiseSVN就可看到右键"SVN **Checkout**"，这样就可以签出源代码。

[![Googlecode SVN 基本使用](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-6.gif "Googlecode SVN 基本使用")](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-6.gif)

输入svn的url和本地源代码副本地址

[![Googlecode SVN 基本使用](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-7.gif "Googlecode SVN 基本使用")](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-7.gif)

接着就会获得源代码到本地

[![Googlecode SVN 基本使用](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-8.gif "Googlecode SVN 基本使用")](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-8.gif)

注意：上面是使用签出命令，事实上您如果不需要修改只需要获得源代码的时候，只需要使用TortoiseSVN的"Export"命令导出源代码即可。

### 4.提交改动后的代码（commit）

提交代码是将更新到本地的代码做出修改后，提交到原代码库中。操作基本和初次上传代码一致，多出的一个步骤是填写提交备注信息，这些信息对日后的维护，以及发现问题后进行版本回溯的意义重大。

[![Googlecode SVN 基本使用-9](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-9.gif "Googlecode SVN 基本使用-9")](http://a.kainy.cn/201101/Googlecode%20SVN%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-9.gif)

### <span style="font-size: x-small;"><span style="font-weight: normal;">.</span></span>

## 五、推荐的代码提交规范

代码提交规范有三大点，必须严格遵守：

1.  控制好提交粒度。每次的提交都必需具有**独立性**的原子性，建议是以一个功能点或Bug fix为单位；无直接关联的文件不能在同一次提交；除了初次提交，尽量不用commit -a。
2.  认真对待提交备注，多花一分钟回想本次提交的代码所含的意义，清晰描述下来，很有可能以后看备注的人是你。
3.  编译、运行及测试没通过的代码**不允许**提交。
基本上，严格遵守上面的代码提交规范，在双主分支的结构上协作，过程马上会变得舒服，如果加上一个提交粒度辅助工具的配合，那么效果更佳。

## 六、其他参考资料

1.百度百科：[http://baike.baidu.com/view/183136.htm](http://baike.baidu.com/view/183136.htm)
2.Tortoise SVN 进阶教程:  （建议点击文档下方的“full”按钮全屏观看）
<object id="__sse6419738" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="477" height="510" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="src" value="http://static.slidesharecdn.com/swf/doc_player.swf?doc=tortoisesvn-101231235744-phpapp02&amp;stripped_title=tortoise-svn&amp;userName=kainy" /><param name="name" value="__sse6419738" /><param name="allowfullscreen" value="true" /><embed id="__sse6419738" type="application/x-shockwave-flash" width="477" height="510" src="http://static.slidesharecdn.com/swf/doc_player.swf?doc=tortoisesvn-101231235744-phpapp02&amp;stripped_title=tortoise-svn&amp;userName=kainy" name="__sse6419738" allowscriptaccess="always" allowfullscreen="true"></embed></object>

View more documents from [Kainy](http://www.slideshare.net/kainy)。