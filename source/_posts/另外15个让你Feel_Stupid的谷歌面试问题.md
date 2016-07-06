title: 另外15个让你Feel Stupid的谷歌面试问题
tags:
  - google
  - 面试
  - 题目
id: 1708
categories:
  - 学而时嘻
date: 2010-11-13 20:23:02
---

<div>谷歌这样的大科技公司，举手投足总能引来千百万人们的关注，无论与科技是否相关。比Google办公环境更亮眼的是Google引进人才的考核方式，下面就让我们来看看Google面试都考些啥。</div>

1.  Every wife in the village instantly knows when a man other than her husband has cheated, but does not know when her own husband has. The village has a law that does not allow for adultery. Any wife who can prove that her husband is unfaithful must kill him that very day. The women of the village would never disobey this law. One day, the queen of the village visits and announces that at least one husband has been unfaithful. What happens?
2.  If the probability of observing a car in 30 minutes on a highway is 0.95, what is the probability of observing a car in 10 minutes (assuming constant default probability)?<!--more-->
3.  Unfortunately, they only have one flashlight and it only has enough light left for seventeen minutes. The bridge is too dangerous to cross without a flashlight, and it's only strong enough to support two people at any given time. Each of the campers walks at a different speed. One can cross the bridge in 1 minute, another in 2 minutes, the third in 5 minutes, and the slow poke takes 10 minutes to cross. How do the campers make it across in 17 minutes?
4.  Your friend makes you a wager that for every person you find that has the same birthday as you, you get $1; for every person he finds that does not have the same birthday as you, he gets $2\. would you accept the wager?        Job: Product Manager
5.  If you look at a clock and the time is 3:15, what is the angle between the hour and the minute hands? (The answer to this is not zero!)
6.  What is the probability of breaking a stick into 3 pieces and forming a triangle?
7.  There's a latency problem in South Africa. Diagnose it.
8.  How many lines can be drawn in a 2D plane such that they are equidistant from 3 non-collinear points?
9.  What's 2 to the power of 64?
10.  Imagine you have a closet full of shirts. It’s very hard to find a shirt. So what can you do to organize your shirts for easy retrieval?
11.  <div id="_mcePaste">You have to write a function in which you pass the whole game and name of a player. The function will return whether the player has won the game or not. First you to decide which data structure you will use for the game. You need to tell the algorithm first and then need to write the code. Note: Some position may be blank in the game। So your data structure should consider this condition also.</div>
<div id="_mcePaste">Job: Software Engineer</div>
You have to write a function in which you pass the whole game and name of a player. The function will return whether the player has won the game or not. First you to decide which data structure you will use for the game. You need to tell the algorithm first and then need to write the code. Note: Some position may be blank in the game। So your data structure should consider this condition also.    Job: Software Engineer
12.  How long it would take to sort 1 trillion numbers? Come up with a good estimate.
13.  The object of the game is to direct a frog to avoid cars while crossing a busy road. You may represent a road lane via an array. Generalize the solution for an N-lane road.    Job: Software Engineer
14.  How many resumes does Google receive each year for software engineering?
15.  When you reach the end of the list you will come back to the beginning of the list (a circular list). Write the most efficient algorithm to find the minimum # in this list. Find any given # in the list. The numbers in the list are always increasing but you don’t know where the circular list begins, ie: 38, 40, 55, 89, 6, 13, 20, 23, 36\.    Job: Quantitative Compensation Analyst
Answers：

1.  from reader Olivier Coudert:The cheating husband problem is a classic recursion pb. Once all the wives know there are at least 1 cheating husband, we can understand the process recursively. Let's assume that there is only 1 cheating husband. Then his wife doesn't see anybody cheating, so she knows he cheats, and she will kill him that very day. If there are 2 cheating husband, their wives know of one cheating husband, and must wait one day before concluding that their own husbands cheat (since no husband got killed the day of the announcement). So with 100 cheating husbands, all life is good until 99 days later, when the 100 wives wives kill their unfaithful husband all on the same day.
2.  The trick here is that .95 is the probability for 1 or more cars, not the probability of seeing just one car. The prob. of NO cars in 30 minutes is 0.05, so the prob of no cars in 10 minutes is the cube root of that, so the prob of seeing a car in 10 minutes is one minus *that*, or ~63%.
3.  1 and 2 across (2 minutes) ；1 goes back (3 minutes) ；5 and 10 go across (13 minutes) ；2 goes back (15 minutes) ；1 and 2 cross (17 minutes) - and everyone safe and sound.
4.  Ignoring seasonal upticks in births, there's about 1/365 probability that any other person has the same birthday as you and 364/365 chance that any other random person does not. Do not take this bet.
5.  Every minute on the clock represents 6 degrees (360 degrees/60 minutes) ；Every hour, the hour hand moves from one number to the next (in this case, it is moving from 3 to 4) which represents 30 degrees；Since it is exactly 1/4 past the hour, the hour hand is 1/4 of the way into its 30-degree trip or 1/4 or 30 degrees....which is 7.5 degrees.
6.  Since this question doesn't say the sticks must intersect at their tips to form the triangle, the answer has to be 100%. Any three sticks of any size can make a triangle.
7.  This is obviously an extremely vague question, and there isn't really one correct answer. A good answer is one in which the interviewee demonstrates familiarity with the term "latency" and enough imagination to come up with an interesting problem with an interesting solution.
8.  Three.  Take any two of the points. Draw a line that is parallel to the line segment made by those two points and halfway between that line segment and the third point. Repeat for every combination of two points.
9.  1.84467441 × 10ˆ19This is a pretty easy answer to figure out when you're not sitting in an interview with no calculator around.
10.  Organize them according to types of clothes like a HASH and then organize each type into a 2-3-4-Tree or RedBlack Tree.
11.  The data structure that is required is a two character dimensional array. Call the function to check the 6 conditions if there are any winners, the 6th condition is to see if there are any more spaces left. If there is a winner the characters X or O are associated with the players, in this case you need a flag. If there is a winner return the value to the calling function to end the game. If not the run the game.
12.  Merge Sort for sorting. ；O(1,000,000,000,000 Log 1,000,000,000,000) - Average Case Scenario ；O(1,000,000,000,000 Log 1,000,000,000,000) - Worst Case Scenario；I'd guess you can do 1 billion operations per second, thus 3000 seconds.
13.  "One approach is to write a recursive algorithm that determines when to "wait" or to "jump" to the next lane, depending if there is an approaching obstacle in the next lane."
14.  A candiate for Quantitative Compensation Analyst should know that Google hired about 3,400 people in 2008\. Figure 75%, or 2,550, of those hired were engineers and that, like Harvard, Google only accepted 3% of those who applied. 2,550 is 3% of 85,000.
15.  Create temporary pointer and start from the root. (Most of the time circular lists have a front and back pointers.) Check if front is larger or if back is larger. If front is larger then you know you are at the end of the list and at the front of the list. If front is larger then traverse the opposite direction and compare numbers. If there is no root or a pointer pointing to any part of the list then your data is lost in memory.
下面是来自译言网的翻译，建议当做参考即可，因为有很多地方翻译后容易造成对题目理解的偏差，比如“线”和“直线”的区别，对于这类开放性较强的试题影响可能是决定性的。
> <span style="font-family: Verdana, 'BitStream vera Sans', Helvetica, sans-serif; line-height: 20px; font-size: 14px; color: #555555;"> </span>
> 
> <span style="padding: 0px; margin: 0px;" lang="EN-US">1) </span><span style="padding: 0px; margin: 0px;">村子里有100对夫妻，其中每个丈夫都瞒着自己的妻子偷情。村里的每个妻子都能立即发现除自己丈夫之外的其他男人是否偷情，唯独不知道她自己的丈夫到底有没有偷情。村里的规矩不容忍通奸。任何一个妻子，一旦能证明自己的男人偷情，就必须当天把他杀死。村里的女人全都严格照此规矩办事。一天，女头领出来宣布，村里至少有一个丈夫偷情。请问接下来会发生什么事？</span>
> 
> <span id="more-4797" style="padding: 0px; margin: 0px;"> </span>
> 
> <span style="padding: 0px; margin: 0px;">**答案：**这是一个典型的递归问题。一旦所有的妻子都知道至少有一个男人出轨，我们就可以按递归方式来看待这个流程。先让我们假设只有一个丈夫偷情。则他的妻子见不到任何偷情的男人，因此知道这个人就是自己丈夫，她当天就会杀了他。假如有两个丈夫偷情，则他俩的妻子只知道不是自己丈夫的那一个男人偷情。因此她会等上一天看那个人有没有被杀死。假如第一天没人被杀死，她就能确定她自己的丈夫也偷了情。依此类推，假如有<span style="padding: 0px; margin: 0px;" lang="EN-US">100</span>个丈夫偷情，则他们能安全活上<span style="padding: 0px; margin: 0px;" lang="EN-US">99</span>天，直到<span style="padding: 0px; margin: 0px;" lang="EN-US">100</span>天时，所有妻子把他们全都杀死。</span>
> 
> <span style="padding: 0px; margin: 0px;">_应聘职位：产品经理_</span>
> 
> <span style="padding: 0px; margin: 0px;" lang="EN-US">2</span><span style="padding: 0px; margin: 0px;">）假设在一段高速公路上，30分钟之内见到汽车经过的概率是。那么，在<span style="padding: 0px; margin: 0px;" lang="EN-US">10</span>分钟内见到汽车经过的概率是多少？（假设缺省概率固定）</span>
> 
> <span style="padding: 0px; margin: 0px;">**答案：**这题的关键在于<span style="padding: 0px; margin: 0px;" lang="EN-US">0.95</span>是见到一辆或多辆汽车的概率，而不是仅见到一辆汽车的概率。在<span style="padding: 0px; margin: 0px;" lang="EN-US">30</span>分钟内，见不到任何车辆的概率为<span style="padding: 0px; margin: 0px;" lang="EN-US">0.05</span>。因此在<span style="padding: 0px; margin: 0px;" lang="EN-US">10</span>分钟内见不到任何车辆的概率是这个值的立方根，而在<span style="padding: 0px; margin: 0px;" lang="EN-US">10</span>分钟内见到一辆车的概率则为<span style="padding: 0px; margin: 0px;" lang="EN-US">1</span>减去此立方根，也就是大约<span style="padding: 0px; margin: 0px;" lang="EN-US">63%</span>。</span>
> 
> <span style="padding: 0px; margin: 0px;">_应聘职位：产品经理_</span>
> 
> <span style="padding: 0px; margin: 0px;" lang="EN-US">3</span><span style="padding: 0px; margin: 0px;">）有四个人要在夜里穿过一条悬索桥回到宿营地。可是他们只有一支手电，电池只够再亮<span style="padding: 0px; margin: 0px;" lang="EN-US">17</span>分钟。过桥必须要有手电，否则太危险。桥最多只能承受两个人同时通过的重量。这四个人的过桥速度都不一样：一个需要<span style="padding: 0px; margin: 0px;" lang="EN-US">1</span>分钟，一个需要<span style="padding: 0px; margin: 0px;" lang="EN-US">2</span>分钟，一个需要<span style="padding: 0px; margin: 0px;" lang="EN-US">5</span>分钟，还有一个需要<span style="padding: 0px; margin: 0px;" lang="EN-US">10</span>分钟。他们如何才能在<span style="padding: 0px; margin: 0px;" lang="EN-US">17</span>分钟之内全部过桥？</span>
> 
> <span style="padding: 0px; margin: 0px;">**答案：**<span style="padding: 0px; margin: 0px;" lang="EN-US">1</span><span style="padding: 0px; margin: 0px;">和<span style="padding: 0px; margin: 0px;" lang="EN-US">2</span>一起过（<span style="padding: 0px; margin: 0px;" lang="EN-US">2</span>分钟）；<span style="padding: 0px; margin: 0px;" lang="EN-US">1</span>返回（<span style="padding: 0px; margin: 0px;" lang="EN-US">3</span>分钟）；<span style="padding: 0px; margin: 0px;" lang="EN-US">5</span>和<span style="padding: 0px; margin: 0px;" lang="EN-US">10</span>一起过（<span style="padding: 0px; margin: 0px;" lang="EN-US">13</span>分钟）；<span style="padding: 0px; margin: 0px;" lang="EN-US">2</span>返回（<span style="padding: 0px; margin: 0px;" lang="EN-US">15</span>分钟）；<span style="padding: 0px; margin: 0px;" lang="EN-US">1</span>和<span style="padding: 0px; margin: 0px;" lang="EN-US">2</span>一起过（<span style="padding: 0px; margin: 0px;" lang="EN-US">17</span>分钟）。全体安全过桥。</span></span>
> 
> <span style="padding: 0px; margin: 0px;">_应聘职位：产品经理_</span>
> 
> <span style="padding: 0px; margin: 0px;" lang="EN-US">4) </span><span style="padding: 0px; margin: 0px;">你和一个朋友去参加聚会。聚会算上你们一共<span style="padding: 0px; margin: 0px;" lang="EN-US">10</span>人。。。你的朋友想要跟你打个赌：你在这些人每找到一个和你生日相同的，你就赢<span style="padding: 0px; margin: 0px;" lang="EN-US">1</span>块钱。他在这些人里每找到一个和你生日不同的人，他就赢<span style="padding: 0px; margin: 0px;" lang="EN-US">2</span>块钱。你该不该打这个赌？</span>
> 
> <span style="padding: 0px; margin: 0px;">**答案：**不算闰年的话，别人跟你生日相同的概率是<span style="padding: 0px; margin: 0px;" lang="EN-US">1/365</span>；跟你生日不同的概率是<span style="padding: 0px; margin: 0px;" lang="EN-US">364/365</span>。因此不要打这个赌。</span>
> 
> <span style="padding: 0px; margin: 0px;">_应聘职位：产品经理_</span>
> 
> <span style="padding: 0px; margin: 0px;" lang="EN-US">5</span><span style="padding: 0px; margin: 0px;">）如果你看到时钟上面的时间是<span style="padding: 0px; margin: 0px;" lang="EN-US">3</span>：<span style="padding: 0px; margin: 0px;" lang="EN-US">15</span>，那么其时针和分针之间的角度是多少？（答案不是零）</span>
> 
> <span style="padding: 0px; margin: 0px;">**答案：**<span style="padding: 0px; margin: 0px;" lang="EN-US">7.5</span><span style="padding: 0px; margin: 0px;">度。时钟上每一分钟是<span style="padding: 0px; margin: 0px;" lang="EN-US">6</span>度（<span style="padding: 0px; margin: 0px;" lang="EN-US">360</span>度<span style="padding: 0px; margin: 0px;" lang="EN-US">/60</span>分钟）。时针每小时从一个数字走到下一个数字（此例中为从<span style="padding: 0px; margin: 0px;" lang="EN-US">3</span>点到<span style="padding: 0px; margin: 0px;" lang="EN-US">4</span>点），也就是<span style="padding: 0px; margin: 0px;" lang="EN-US">30</span>度。因为此题中时间刚好走过<span style="padding: 0px; margin: 0px;" lang="EN-US">1/4</span>小时，因此时针走完<span style="padding: 0px; margin: 0px;" lang="EN-US">30</span>度的<span style="padding: 0px; margin: 0px;" lang="EN-US">1/4</span>，也就是<span style="padding: 0px; margin: 0px;" lang="EN-US">7.5</span>度。</span></span>
> 
> <span style="padding: 0px; margin: 0px;">_应聘职位：产品经理_</span>
> 
> <span style="padding: 0px; margin: 0px;" lang="EN-US">6</span><span style="padding: 0px; margin: 0px;">）将一根木条折成<span style="padding: 0px; margin: 0px;" lang="EN-US">3</span>段之后，可以形成一个三角形的概率有多大？</span>
> 
> <span style="padding: 0px; margin: 0px;">**答案：**因为题目中没有说要求木条必须首尾相连的做成三角形，因此答案是<span style="padding: 0px; margin: 0px;" lang="EN-US">100%</span>。任何长度的三根木条都可以形成一个三角形。</span>
> 
> <span style="padding: 0px; margin: 0px;">_应聘职位：产品经理_</span>
> 
> <span style="padding: 0px; margin: 0px;" lang="EN-US">7</span><span style="padding: 0px; margin: 0px;">）南非有个延时问题。请对其加以分析。</span>
> 
> <span style="padding: 0px; margin: 0px;">**答案：**这显然是个非常模糊的问题，因此没有唯一的正确答案。比较好的回答应该是由被<span style="padding: 0px; margin: 0px;" lang="EN-US"><span style="padding: 0px; margin: 0px;" lang="EN-US"><span style="padding: 0px; margin: 0px;" lang="EN-US">面试</span></span></span>者展示自己对<span style="padding: 0px; margin: 0px;" lang="EN-US">“</span>延时<span style="padding: 0px; margin: 0px;" lang="EN-US">”</span>概念的熟悉程度以及发挥自己的想象力，构想出一个有趣的延时问题并对其提供一个有趣的解决方案。</span>
> 
> <span style="padding: 0px; margin: 0px;">_应聘职位：产品经理_</span>
> 
> <span style="padding: 0px; margin: 0px;" lang="EN-US">8</span><span style="padding: 0px; margin: 0px;">）在一个两维平面上有三个不在一条直线上的点。请问能够作出几条与这些点距离相同的线？</span>
> 
> <span style="padding: 0px; margin: 0px;">**答案：**三条。将两点之间联成一条线段。在这条线段与第三点之间正中的位置，做一条与此线段平行的直线，即为一条距三点等距的线。然后按此方法对其余两点的组合做出另外两条来。</span>
> 
> <span style="padding: 0px; margin: 0px;">_应聘职位：软件工程师_</span>
> 
> <span style="padding: 0px; margin: 0px;" lang="EN-US">9</span><span style="padding: 0px; margin: 0px;">）<span style="padding: 0px; margin: 0px;" lang="EN-US">2</span>的<span style="padding: 0px; margin: 0px;" lang="EN-US">64</span>次方是多少？</span>
> 
> <span style="padding: 0px; margin: 0px;">**答案**：如果你不是因为坐在<span style="padding: 0px; margin: 0px;" lang="EN-US"><span style="padding: 0px; margin: 0px;" lang="EN-US"><span style="padding: 0px; margin: 0px;" lang="EN-US">面试</span></span></span>室里，手边没有计算器的话，应该可以很容易找到答案，即<span style="padding: 0px; margin: 0px;" lang="EN-US">1.84467441 </span>乘以<span style="padding: 0px; margin: 0px;" lang="EN-US">10</span>的<span style="padding: 0px; margin: 0px;" lang="EN-US">19</span>次方。</span>
> 
> _应聘职位：软件工程_
> 
> <span style="padding: 0px; margin: 0px;" lang="EN-US">10</span><span style="padding: 0px; margin: 0px;">）假设你在衣橱里挂满衬衫，很难从中挑出某一件来。请问你打算怎样整理一下，使得它们容易挑选？</span>
> 
> <span style="padding: 0px; margin: 0px;">**答案**：此题没有固定答案。考验的是被<span style="padding: 0px; margin: 0px;" lang="EN-US">_<span style="padding: 0px; margin: 0px;" lang="EN-US"><span style="padding: 0px; margin: 0px;" lang="EN-US">面试</span></span>_</span>者在解决问题方面的想象力和创造性。我们觉得读者<span style="padding: 0px; margin: 0px;" lang="EN-US">”Dude”</span>的这个答案可能会给<span style="padding: 0px; margin: 0px;" lang="EN-US">Google</span>留下深刻印象：把它们按布料的种类进行哈希（<span style="padding: 0px; margin: 0px;" lang="EN-US">HASH</span>）组合。然后每类再按<span style="padding: 0px; margin: 0px;" lang="EN-US">2-3-4</span>树或红黑树（都是计算机算法）排序。</span>
> 
> <span style="padding: 0px; margin: 0px;">_应聘职位：软件工程师_</span>
> 
> <span style="padding: 0px; margin: 0px;" lang="EN-US">11</span><span style="padding: 0px; margin: 0px;">）给你一副井字棋（<span style="padding: 0px; margin: 0px;" lang="EN-US">Tic Tac Toe</span>）。。。你来写一个程序，以整个游戏和一个玩家的名字为参数。此函数需返回游戏结果，即此玩家是否赢了。首先你要决定使用哪种数据结构处理游戏。你还要先讲出使用哪种算法，然后写出代码。注意：这个游戏中的某些格子里可能是空的。你的数据结构需要考虑到这个条件。</span>
> 
> <span style="padding: 0px; margin: 0px;">**答案**：所需要的数据结构应为二元字符数列。调用此函数检查<span style="padding: 0px; margin: 0px;" lang="EN-US">6</span>种条件，判断是否有赢家。其中第<span style="padding: 0px; margin: 0px;" lang="EN-US">6</span>种条件就是看是否还有空格。如果有赢家，则字符判断玩家是<span style="padding: 0px; margin: 0px;" lang="EN-US">X</span>还是<span style="padding: 0px; margin: 0px;" lang="EN-US">O</span>。因此你需要一个旗标。如果有赢家则返回此值并结束游戏，如果没有则继续游戏。</span>
> 
> <span style="padding: 0px; margin: 0px;">_应聘职位：软件工程师_</span>
> 
> <span style="padding: 0px; margin: 0px;" lang="EN-US">12</span><span style="padding: 0px; margin: 0px;">）为<span style="padding: 0px; margin: 0px;" lang="EN-US">1</span>万亿个数排序需要多长时间？请说出一个靠谱的估计。</span>
> 
> <span style="padding: 0px; margin: 0px;">**答案**：这又是一个没有标准答案的题目。目的是考察被<span style="padding: 0px; margin: 0px;" lang="EN-US">_<span style="padding: 0px; margin: 0px;" lang="EN-US"><span style="padding: 0px; margin: 0px;" lang="EN-US">面试</span></span>_</span>者的创造性。我们倾向于两位读者给出的简单答案：用归并排序法（<span style="padding: 0px; margin: 0px;" lang="EN-US">Merge Sort</span>）排序。平均情况下为_<span style="padding: 0px; margin: 0px;" lang="EN-US">O(1,000,000,000,000 Log 1,000,000,000,000)</span>_。最差情况下为_<span style="padding: 0px; margin: 0px;" lang="EN-US">O(1,000,000,000,000 Log 1,000,000,000,000)。</span>_现在可以做到每秒<span style="padding: 0px; margin: 0px;" lang="EN-US">10</span>亿次的运算，所以大约应需要<span style="padding: 0px; margin: 0px;" lang="EN-US">3000</span>秒。</span>
> 
> <span style="padding: 0px; margin: 0px;">_应聘职位：软件工程师_</span>
> 
> <span style="padding: 0px; margin: 0px;" lang="EN-US">13</span><span style="padding: 0px; margin: 0px;">）请设计一个<span style="padding: 0px; margin: 0px;" lang="EN-US">“</span>蛙跳<span style="padding: 0px; margin: 0px;" lang="EN-US">”</span>游戏的算法，并写出方案的代码。。。</span>
> 
> <span style="padding: 0px; margin: 0px;">**答案**：这个游戏的目标是引导一个青蛙避开来往车辆，横穿一条繁忙的公路。你可以用一个数列来代表一条车道。将方案简化成一条<span style="padding: 0px; margin: 0px;" lang="EN-US">N</span>车道的公路。我们只找到一个对此问题的解答，它来自<span style="padding: 0px; margin: 0px;" lang="EN-US">Glassdoor.com</span>网站：<span style="padding: 0px; margin: 0px;" lang="EN-US">“</span>一个方法是写一个递归算法来决定何时等待，何时跳进下一个车道。这由下条车道中是否有逐渐接近的障碍物来决定。<span style="padding: 0px; margin: 0px;" lang="EN-US">”</span></span>
> 
> <span style="padding: 0px; margin: 0px;">_应聘职位：软件工程师_</span>
> 
> <span style="padding: 0px; margin: 0px;" lang="EN-US">14</span><span style="padding: 0px; margin: 0px;">）<span style="padding: 0px; margin: 0px;" lang="EN-US">Google</span>每年收到多少份软件工程师的简历？这也是在考察应试者是否有能力把问题简单明确化，并提出创造性的解决方案。</span>
> 
> <span style="padding: 0px; margin: 0px;">**答案**：一个<span style="padding: 0px; margin: 0px;" lang="EN-US">“</span>量化报酬分析师<span style="padding: 0px; margin: 0px;" lang="EN-US">”</span>职位的求职者，应该知道<span style="padding: 0px; margin: 0px;" lang="EN-US">2008</span>年<span style="padding: 0px; margin: 0px;" lang="EN-US">Google</span>雇佣了<span style="padding: 0px; margin: 0px;" lang="EN-US">3400</span>人。估计其中<span style="padding: 0px; margin: 0px;" lang="EN-US">75%</span>，即<span style="padding: 0px; margin: 0px;" lang="EN-US">2550</span>人，应该是工程师，并且<span style="padding: 0px; margin: 0px;" lang="EN-US">Google</span>和哈佛的录取率类似，即从申请人中取<span style="padding: 0px; margin: 0px;" lang="EN-US">3%</span>。由此可知应该收到大约<span style="padding: 0px; margin: 0px;" lang="EN-US">85000</span>简历（<span style="padding: 0px; margin: 0px;" lang="EN-US">85000 x 3% = 2550</span>）</span>
> 
> <span style="padding: 0px; margin: 0px;">_应聘职位：量化报酬分析师_</span>
> 
> <span style="padding: 0px; margin: 0px;" lang="EN-US">15</span><span style="padding: 0px; margin: 0px;">）给你一个数字链表。。。链表到头之后又会从头开始（循环链表）。请写出寻找链表中最小数字的最高效算法。找出此链表中的任意给定数字。链表中的数字总是不断增大的，但是你不知道循环链表从何处开始。例：<span style="padding: 0px; margin: 0px;" lang="EN-US">38, 40, 55, 89, 6, 13, 20, 23, 36.</span></span>
> 
> <span style="padding: 0px; margin: 0px;">**答案**：我们最喜欢的答案来自读者<span style="padding: 0px; margin: 0px;" lang="EN-US">”dude”</span>：建立临时指针并从根上开始。（循环链表大多数情况下都有向前或向后指针。）判断是向前更大还是向后更大。如果向前更大则知道已达到链表最后，又重新位于链表开始位置。如果向前更大，那你可以向后搜寻并进行数字比较。如果既没有根也没有指针指向链表，那么你的数据就丢失在内存中了。</span>
> 
> <span style="padding: 0px; margin: 0px;">_应聘职位：量化报酬分析师_</span>
相比国内企业（包括互联网企业)招聘试题，侧重考察基础知识的掌握和数学运算的精确性，这样的题目是否更能吸引你解题的欲望呢？