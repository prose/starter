title: 平安云平台（dcloud）应急解决生产问题实践
tags:
  - 平安
id: 2757
categories:
  - 建站❤编程
---

<span class="s1">关于云平台救火的方案，财富宝</span><span class="s2">PC</span><span class="s1">版上周五（很不幸地）率先实践了一把，提前暴露出以下可能遇到的困难：</span>

<span class="s1"> </span>

<span class="s2">1</span><span class="s1">、云桌面中</span><span class="s2">pawa</span><span class="s1">的开发模式启动不了，主要影响文件监听功能，编译没问题；</span>

<span class="s2">2</span><span class="s1">、云桌面中无法通过</span><span class="s2">idesk</span><span class="s1">安装密码控件；</span>

<span class="s1"> </span>

<span class="s1">问题一可能与</span><span class="s2">dcloud</span><span class="s1">中的磁盘是共享的有关，还没找到解决的办法，求助大家下；</span>

<span class="s1">由于</span><span class="s2">PC</span><span class="s1">版和</span><span class="s2">e</span><span class="s1">融都使用了密码控件，无法在</span><span class="s2">dcloud</span><span class="s1">中登陆，所以即便问题</span><span class="s2">1</span><span class="s1">解决了，还是需要在实体机搭一套开发环境，</span>

<span class="s1">但是实体机外网无法提交代码，代码改的需要人工同步到</span><span class="s2">dcloud</span><span class="s1">中提交，</span>

<span class="s1">不过</span><span class="s2">bug</span><span class="s1">修复一般不会有开发需求那么多的代码改动，这个问题应该只是影响效率。</span>

<span class="s1"> </span>

<span class="s1">由于云平台中进行开发存在上述已知的不便和其他不确定性，</span><span class="s2">bug</span><span class="s1">处理周期会比预期多的多。</span>

<span class="s1">所以需要先评估生产环境带</span><span class="s2">bug</span><span class="s1">的代码和最近一个版本的代码，对网站功能的影响，根据”两害相权取其轻“的原则，决定是否先进行版本回退。</span>

<span class="s1">为</span><span class="s2">bug</span><span class="s1">处理争取时间，同时控制</span><span class="s2">bug</span><span class="s1">影响范围。</span>

<span class="s1"> </span>

<span class="s1">版本回退需要有上一个版本的代码，</span><span class="s2">PC</span><span class="s1">版目前开发分支和主干分离，每次发版后，开发分支合回主干，所以主干中上一版本号的代码检出就是可回退的代码。</span>

<span class="s1">不过这个做法还是有时间和空间（</span><span class="s2">dcloud</span><span class="s1">磁盘空间有</span><span class="s2">5G</span><span class="s1">限制）上的成本，推荐的做法是提前在</span><span class="s2">dcloud</span><span class="s1">中存放前三个版本的代码备份包，这样基本可以把版本回退操作时间控制在</span><span class="s2">2</span><span class="s1">分钟内。</span>

<span class="s1">版本回退后就可以相对从容的进行</span><span class="s2">bug</span><span class="s1">修复、编译、自测、上传，避免由于时间紧迫产生次生事故。</span>

<span class="s1"> </span>

<span class="s1">以上是个人的一些思考，希望大家都用不到。</span>