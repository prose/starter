title: 'HTML5的设计[部分翻译]'
tags:
  - html5
  - 历史
id: 1591
categories:
  - HTML
date: 2010-10-22 21:59:23
---

又见HTML5，对HTML5功能特性、标准和概念的绍已是不绝于耳，正如被炒得如火如荼而又让人云里雾里的“云计算”概念。

不过这个演说的侧重点是html5的设计，而不是用html进行的设计。就像横空出世的大英雄，大家在对他的英雄事迹津津乐道后，总会有人想要关心英雄的身世（参考阅读：[The Internet: a historical encyclopedia](http://books.google.com.hk/books?id=qi-ItIG6QLwC&lpg=PP1&hl=zh-CN&pg=PP1#v=onepage&q&f=false)）。

<div style="align: center;">
![](http://counters.gigya.com/wildfire/IMP/CXNID=2000002.0NXC/bT*xJmx*PTEyODc3NTM*ODAxODcmcHQ9MTI4Nzc1MzcwNTg3NSZwPTEwMTkxJmQ9c3NfZW1iZWQmZz*yJm89MThkNGFkMjM1NmFh/NDA2NTkwNDJkY2JlZDEyMGJlNjkmb2Y9MA==.gif)<div style="width:425px ;align: center;" id="__ss_5403148"><object id="__sse5403148" width="425" height="355" align: center;><param name="movie" value="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=designofhtml5-101009175701-phpapp01&stripped_title=the-design-of-htm&userName=adactio" /><param name="allowFullScreen" value="true"/><param name="allowScriptAccess" value="always"/><embed name="__sse5403148" src="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=designofhtml5-101009175701-phpapp01&stripped_title=the-design-of-htm&userName=adactio" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="355"></embed></object></div>.</div>
<!--more-->

<iframe src="http://player.vimeo.com/video/15755349" width="400" height="225" frameborder="0"></iframe>.

<div>_以下内容来自：http://www.tech-q.cn/redirect.php?tid=13462&amp;goto=lastpost_</div>
今天我想跟大家谈一谈HTML5的设计。主要分两个方面：一方面是HTML5。我可以站在这儿只讲HTML5，但我并不打算这样做，因为如果你想了解HTML5的话，你可以Google搜索，可以看书，甚至可以看规范文档。

实际上，确实有人会谈到规范的内容。史蒂夫·福克纳（Steve Faulkner）会讲HTML5与可访问性。而保罗·艾里什（Paul Irish）则会讲HTML5提供的各种API。因此，我今天站在这里，不会光讲一讲HTML5就算完事了。

说老实话，在正式开始之前，我想先交待清楚我所说的HTML5到底是什么意思。这话听起来有点搞笑：这会子你一直在说HTML5，难道我们还不知道什么是HTML5吗？大家知道，有一个规范，它的名字叫HTML5。我所说的HTML5，指的就是这个规范。但问题是，有些人所说的HTML5，指的不仅仅是这个规范，还有别的意思。比如说，用HTML5来代指CSS3就是一种常见的叫法。我可不是这样的。我所说的HTML5，不包含CSS3，就是HTML5。

类似的术语问题以前也有过。Ajax本来是一种含义明确的技术，但过了不久，它的含义就变成了“用JavaScript来做一切好玩的东西”。这就是Ajax，对不对？今天，HTML5也面临同样的问题，它本来指的是一个特定的规范，但如今含义却成了“在Web上做一切好玩的事。”我说的不是这种HTML5，不是这种涵盖了最近刚刚出现的各种新东东的HTML5。我说的仅仅是规范本身：HTML5。

刚才已经说了，我今天想要讲的内容不多，也没有打算介绍HTML5都包含什么。今天我要讲的是它的另一方面，即HTML5的设计。换句话说，我要讲的不是规范里都包含什么，而是规范里为什么会包含它们，以及在设计这个规范的时候，设计者们是怎么看待这些东西的。

## 设计原理

设计原理本质上是一种信念、一种想法、一个概念，是你行动的支柱。不管你是制定规范，还是制造一种有形的物品，或者编写软件，甚至发明编程语言。你都能找到背后的一个或者多个设计原理，多人协作的任何成果都是例证。不仅仅Web开发领域是这样。纵观人类历史，像国家和社会这样大规模的构建活动背后，同样也有设计原理。

就拿美国为例吧，美国的设计原理都写在了《独立宣言》中了。
> 我们认为这些真理是不言而喻的，人人生而平等，造物主赋予了每个人不可剥夺的权利，包括生存、自由和追求幸福。
这里有一句口号：生存、自由和追求幸福。这是被写进宪法中的核心理念，它关系到我们所有人的一切，也就是我们构建自己社会的原则。

还有一个例子，就是卡尔·马克思（Karl Marx），他的著作在20世纪曾被奉为建设社会主义的圭臬。其基本思想大致可以归结为下面这条设计原理：
> 各尽所能，各取所需。
这其实就是一种经济体系背后的设计原理。

还有一个例子，比前面两个的历史更久远一些，不过大同小异：
> 人人为我，我为人人。
这个极为简单的设计原理，是两千年前的拿撒勒犹太人耶稣基督提出来的。而这条原则成为了后来许多宗教的核心教义。原理与实践有时候并不是同步的。

下面是小说中的一个例子。英国小说家乔治·奥威尔（George Orwell）笔下的《动物庄园》，就是在一条设计原理的基础上构建起来的虚拟社会。这条设计原理是：
> 四条腿的都是好人，两条腿的都是坏蛋！
《动物庄园》中有意思的是，随着社会的变迁——变得越来越坏，这条设计原理也跟着发生了改变，变成了“四条腿的都是好人，两条腿的就更好了。”最关键的是，即使是在虚构的作品里，设计原理都是存在的。

...
————————————————
 **接下来的内容请到**[**原文**](http://adactio.com/articles/1704/)**查看**。

演说比较长，E文不好的童鞋可能会比较痛苦了。六级水平的偶也是看得有些吃力，毕竟专业词汇比较多语速又快，这里顺带介绍下偶学习本视频的方法吧，如果也适合你就最好不过啦

**1.浏览ppt** ：大致了解内容框架结构，抓关键字词

通过ppt可知道，前1/3的内容大致是演说的引入和介绍背景，之后主要讲的是设计HTML5时考虑的几点原则，列提纲：

1.  avoid nedless complexity
2.  support existing content
3.  solve real problems
4.  pave the cowpaths
5.  degrade gracefullly
6.  priority of constituencies
**2.查看机译文章 **：凭映像中 ppt的关键字，查看关键点在文章中出现的位置，当然E文速读能力强的可以忽略这一步；

当我们扫过机译的段落：
> [24:13]所以我想告诉你的设计原则，你可以找到这个文件的某些。 这里有一个很简单，“避免不必要的复杂性。” 这似乎非常简单。 我会用一个例子说明。
> 
> [24:27]比方说，我在写一HTML4.01规范，所以我打开我的文档，**我将键入的DOCTYPE。 有没有人有这DOCTYPE的记忆？** 不，好吧，不，我想不会。 这是可能的，对不对？ 你是个令人讨厌一群。 这里的人可能有它记住。
> 
> [24:47]这**是HTML4的DOCTYPE，不要让我记住这东西**，因为这就是为什么我们有文字片断，这就是为什么我们有谷歌，这就是为什么我们的模板，对不对？ 好吧，那么如果我在写XHTML1.0，我已经10年写什么呢？ 我已经写了这一点。 任何人都该得到的doctype？
> 
> [25:05]嗯，它的串种同样长。 但基本上，你会说这个文件是XHTML1。 这基本上是它的话。 因此，在HTML5的省略不必要的复杂性，DOCTYPE是根本 &lt;！的DOCTYPE的HTML&gt;。 就是这样。 现在，连我都记得那个。
时眼睛就该亮了，知道这个位置大致对应了ppt中第一点的内容，这样对与进一步掌握演说内容是很有用的。

**3.观看视频** ：结合主讲人的语调，ppt演示进度。

即使语速快，生词多可能无法完全听懂，但通过演说者的肢体语言、语气可以看出哪里是演说者希望突出的地方，也就是理解演说者思想的重点，再结合之前对ppt的理解，大致可以在不暂停的情况下观看下来。

**4.再对仍有疑问**而又认为是比较重要的的地文段细研读原文。

这种方法对于短时间学习 阅读量较大的外文演说应该都适用。