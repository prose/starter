title: 大二（下）sql数据库期末考复习卷
id: 1076
categories:
  - 课件❤资料
date: 2009-12-16 19:37:51
tags:
---

一．选择题

1.（  ）是存储在加算计内有结构的数据的集合。

A．数据库系统 B.数据库 c数据库系统管理 d数据结构

2.在应用程序中，用户使用的是（）

A 外模式 b模式 c内模式 d存储模式

3.要保证数据库的数据的逻辑独立性，要修改的是（）

A外模式与模式之间的映射 b模式与外模式之间的映射<!--more-->

C模式 d三级模式

4.设有关系r，s和t如下，关系t是由关系r和s进过（）操作得到的。

A，r交s

B，r-s

C，r并s

D，r=s

5.在关系代数中，（）运算是从关系r与s的笛卡尔积中 ，选取r，s的相同属性组的值相等的那些元组的操作，并且在结果中去掉了重复的属性列。

A，等值连接b选择 c自然连接d连接

6.概念模型是显示世界的第一层抽象，这一类模型中最著名的模型是（）

A层次模型

B关系模型

C网状模型

D实体-联系模型

7.学生社团可以接纳多名学生参加，但每个学生只能参加一个社团，从社团到学生之间的联系类型是（）

A多对多

B一对一

C多对一

D一对多

8.现有如下关系，患者（患者编号，患者姓名，性别，出生日期，所在单位）,医疗（患者编号，医生编号，医生姓名，诊断日期，诊断结果），医疗关系中的外码是（）

A患者编号

B患者姓名

C患者编号和患者姓名

D医生编号和患者编号

9在关系数据库系统中，为了简化用户的查询操作，又不增加数据的存储空间，常用的方法是创建（）

A另一个表（table）

B游标（cursor）

C视图（view）

D索引（index）

10下面关于关系的叙述中，（）是不正确的叙述。

A，关系的属性是可分解的。

B， 在关系中元组的顺序是无关紧要的。

C， 在关系中列的顺序是无关紧要的。

D，不可以有两个完全相同的元组。

11，若要在基本表s中增加一列cn，可用语句（）实现。

A．add table s add cn char（8）

B． add table s alter cn char（8）

C． alter table s alter cn char（8）

D．alter table s add cn char（8）

12.关系数据库规范化是为解决关系数据库中（）

A．插入，删除和数据冗余问题而引入的

B．提高查询数度问题而引入的

C．减少数据操作的复杂性问题而引入的

D．保证数据的安全性和完整性为题而引入的

13.已知关系模式r（a，b，c，d，e）及其上的函数依赖集合f=（a-&gt;d,b-&gt;c,e-&gt;a）,该关系模式的候选码是（）

A．ab

B．be

C．cd

D．de

14.以下操作中，（）一定不会触发触发器。

A．修改表中的数据

B．插入数据到表中

C．删除表中的数据

D．查询表中的数据

15.下面有关e-r模型向关系模型转换的叙述中，不正确的是（）

A．一个实体类型转换为一个关系模式

B一个1：1联系可以转换为一个独立的关系模式，也可以与练习的任意一端实体所对应的关系模式合并

C一个1：n联系可以转化为一个独立的关系模式，也可以与联系的任意一端实体所对应的任意关系模式合并

D一个m：n联系转化为一个关系模式

16 sql语言集数据定义功能，数据操纵功能和数据控制功能于一体。如下列语句中，（）属于数据控制功能。

A grant

B create

C insert

D Select

17 在关系数据库设计中，调查，收集与分析用户在数据管理中的信息要求，处理要求。安全性与完整性要求，这是（）阶段的任务

A需求分析

B逻辑设计

C概念设计

D无力设计

18采用封锁机制实现并发控制时，如果事物t获得了数据项q上的共享则事物t对q（）

A只能读不能写

B只能写不能读

C既可读又可写

D不能读不能写

19事物日志可用于保存（）

A程序运行过程

B程序的执行结果

C对数据的更新操作

D对数据的查询操作

20设有两个事物t1，t2，其并发操作如下图所示，则该并发操作（）

A不存在问题

B丢失修改

C不能重复读

D读‘赃‘数据

二填空题

1写出以下缩写的中文含义

Dbms：

Sql：

2关系中主码的取值必需唯一且非空，这是由（      实体   ）完整性规则决定的

3.能唯一标识元组的属性或属性集称为（     码    ）

4.dbms必须提供数据的安全性保护，数据的完整性检查，（ 并发控制     ）（ 数据恢复   ）

等数据控制功能。

5.阅读以下命令，并填空

Create table jobs

（job_id smallint premary key,

Job_desc varchar(50) default ‘new hire’,

Min_lvl tinyint not null check(min_lvl&gt;=10),

Max_lvl tinyint not null check(max_lvl&lt;=250));

Create table employee

(emp_id empid primary key,

Ename char(10) not null,

Job_id smallint foreign key references jobs(job_id),

Job_lvl tinyint,

Hire_date datetime not null);

Employee表的主码是：（ emp id）；

Employee表的外码是：（  job id       ）；

Jobs表的job_id字段允许输入空值吗（ 不允许    ）

Min_lvl字段允许输入空值吗（  不允许  ）

如果向jobs表中插入一条记录，没有对job_desc字段赋值，job_desc的值应是什么（   new hire   ）

如果jobs表中存在一条job_id=2的记录，语句update jobs set max_lvl=255 where job_id=2能否成功执行(    不能    );原因是（ 违反外码约束max_lvl&lt;=250   ）

6当将局部e-r图集成为全局e-r图时，如果同一对象在一个局部e-r图中作为实体，而在另一个局部e-r图中作为属性，这种现象称为（   结构冲突   ）

7事物统称以命令（  commit ）或（ rollback  ）结束

8多个事物的并发执行是正确的，当且仅当其结果与按某一次序串行地执行它们是的结果相同，我们称这种调度策略为（  可串行化  ）的调度。

9在数据库运行阶段，对数据库经常性的维护工作主要是由（  dba   ）完成的。

10建立冗余数据最常用的技术是（ 登录日志稳检  ）和（  数据转储   ）

三 判断题

1关系规范化中的删除异常是指定该删除的数据未被删除 （f）

2关系代数的运算对象是关系，运算结果也为关系（t）

3在关系模式规范化的过程中，关系模式的分解是唯一的（f）

4 Sql语言是具有关系代数和关系演算双重特点的语言（t）

5关系规范话理论是数据库逻辑设计的一个有力工具（t）

四 简答体

设有以下关系

S（学号，姓名，性别，年龄，所在系）

C （课程号，课程名，先行课程号，学分）

Sc （学号，课程号，成绩）

根据要求完成以下问题：

（一）   用关系代数语言完成一下操作

1.  查询课程“计算机网络”的学分
Select ‘学分’ from c where ‘课程’=’计算就网络’

1.  查询学生“李四”的课程“数据库原理”的成绩
Select ‘成绩’from sc

Where sc.学号=

Select 学好 from s where 姓名=李四

（二）   分析语句功能

1.  对如下的sql语句
Select 学号，姓名，性别，年龄 from s

Where exists

（select * from sc

Where 学号=s.学号 and 课程号=‘3’）；

试写出该语句的查询功能

**输出所有选秀3****号课程学生的。。。信息。**

1.  指出此select 语句的查询结果是什么？
Select first.课程名，second.课程名

From c first，c secongd

Where first.先行课程号=second..课程号；

**查询所有课程及其先行课程名。**

（三）   用sql语句完成一下操作

1.  增加一新生的记录（“2000041”，“张剑”，“男”，“is”，20）
Add （“2000041”，“张剑”，“男”，“is”，20）to table a；

**Insert into s **

**value****（“2000041”，“张剑”，“男”，“is****”，20****）；**

1.  将学生“李四”的年龄改为20岁
Alart from s 年龄 with 20 where 名字=李四

**Update s **

**Set ****年龄=20 **

**Where ****姓名=****李四**

1.  查询学生“李四”选修的所有课程的课程名称
select 课程名

from c

where 课程号=exits

{select 课程号

from sc

where 学号=exits}

select 学号

from s

where 姓名=李四

**select ****课程号 **

**from c****，s****，sc**

**where sc.****课程号=c****。课程号 and sc****。学号=s****。学号 and ****姓名=****李四；**

1.  查询选修了二门（含2门）以上课程的学生学号
Select 学号 from sc group by 学号 having count（课程号）》=2

1.  查询名字中含有“方”的学生基本信息，并按年龄从小到大排序
Select * from s where 姓名like=‘%方%‘ order by 年龄 //asc/desc

1.  建立视图 vw_sc，查询那些选修了“操作系统”课程的学生的学号，课程号和成绩
Create view vw_sc

As

Select 。。。from c，sc

Where  c。课程号=sc。课程号 &amp;s。课程=操作系统

五 程序题

1创建一个作用在p（pno，pname，color，weight）表上的触发器

P_ud_ins，确保用户在插入或更新数据时所提供的weight值是非负和非零的。否则输出错误提示并回滚次操作。

Create_____trigger_____   p_ud_ins

On ___p____

___alter____ insert ,update

As

If (select weight from _inserted___ ) &lt;= 0

Begin

___rollback____transaction

Print ‘输入的值必须是大于零的整数值’

End

Else

Commit

Go

2.创建一个存储过程，功能为根据提供的学号，姓名，年龄等信息。往student（sno，sname，sage）表中插入数据，并返回插入该记录之后，student表中的记录数，调用该存储过程实现往student表中插入一条数据，并显示插入该记录之后，student表中的记录数。

Create___procedure___ p_s_ins;

@sno  char(5),

@sname  char(8),

@sage smallint

@p_count int_____output_____

As

Insert into student balues(@sno,__@sname______，@sage)

Select __@p_count __=count(*)  from student

Go

调用过程

Declare @v_count int

Exec p_s_ins ‘95005’,’李冰花’，18@v_count ___output_____

Print ‘student’ 表中记录数为：‘+convert（char（10），@v_count）

六，简答题

1.  某汽车运输公司数据库中有一个记录司机运输里程的关系模式：
r（司机编号，汽车牌照，行驶公里，车队编号，车队主管）

此处每个汽车牌照对应一辆汽车，“行驶公里”为某司机驾驶某辆汽车行驶的总公里数，如果规定每个司机属于一个车队，每个车队只有一个主管。

（1）       试列出关系模式r的基本函数依赖和码

（2）       说明r不是2nf模式的理由，并把r分解成2nf模式集

（3）       进而把r分解成3nf模式集，并说明理由

1.  某商店管理涉及三个实体，分别是商店，有属性：商店编号，店名，店址，店经理等；商品，有属性：商品编号，商品名，单价，产地等；职员，有属性：职工编号，职工名，性别，工资等，这些实体间的联系如下：百货公司管辖着若干连锁商店，每家商店经营若干商品，每家商店有若干职员，但每个职员只能服务于一家商店，职工参加某商店工作有开始时间，商店销售商品的有月销售量。
1）  请画出商店，商品和职工的e-r图。

2）  将该e-r图转化为关系数据模型，并标出主码。