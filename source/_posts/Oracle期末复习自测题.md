title: Oracle期末复习自测题
tags:
  - oracle
  - 复习
  - 大三
  - 期末
  - 自测
id: 1253
categories:
  - 课件❤资料
date: 2010-05-09 14:42:53
---

# 第1章 Oracle数据库系统的结构与安装

## 选择题

1、下列有关ORACLE实例的说法哪个是错误的？（      B    ）

A.   ORACLE实例主要由内存结构和进程结构两部分组成

B.   每一数据库至少有一个与之对应的实例，一个实例可以打开和使用多个数据库

C.   每一个数据库可以由多个实例使用，但一个实例只能打开和使用一个数据库

D.   实例就是运行状态下的ORACLE软件，主要是由内存结构和一些进程组成

2、以下哪些内存区域不是SGA的一部分？（B ）<!--more-->

A.   数据库缓冲区高速缓存

B．PGA

C．重做日志缓冲区

D.   共享池

3、DBWR进程是 （     C）

A.   从Shared Pool读出被更新的数据写入DataFiles

B.   从Shared Pool读出被更新的数据写入LogFiles

C.   从Database Buffer Cache读出被更新的数据写入DataFiles

D.   从Database Buffer Cache读出被更新的数据写入LogFiles

4、下面的描述中错误的是：（A ）

A.   Oracle表的存储结构为：一个表就是一个物理文件，物理文件和表之间存在着绝对的一一对应关系。

B.   表空间由一个或多个数据文件组成。

C.   系统全局区（SGA）可由所有的服务器和用户进程共享。

D.   段、区间、数据块是Oracle数据库的基本逻辑组织单位。

5、下面的描述中错误的是：（B ）

A.   表空间由一个或多个数据文件组成。

B.   表中的数据存储在数据文件，索引等其他模式对象的数据不存储在数据文件中。

C.   数据块是Oracle I/O操作的最小单位。

D.   区间是由数据块组成的。

6、下面的描述中错误的是：（A ）

A.   程序全局区（PGA）可由所有的用户进程共享。

B.   Oracle使用表空间组织数据库，每个数据库至少有一个System表空间。

C.   数据块是Oracle I/O操作的最小单位。

D.   区间是由连续的数据块组成的。

7、下面的描述中错误的是：（C ）

A.   每个数据库必须至少有一个控制文件。

B.   Oracle使用表空间组织数据库，每个数据库至少有一个System表空间。

C.   区间是Oracle I/O操作的最小单位。

D.   程序全局区(PGA)是由单个进程使用的内存区域，它是不共享的；系统全局区（SGA）为所有数据库进程所共享，是ORACLE的通信中心。

8、Oracle系统非正常关闭后，重新启动数据库时，执行一些数据库恢复操作的后台进程是：（C   ）

A.   恢复进程                                 B.   检查点进程

C.   系统监控进程                         D.   调度进程

9、在用户进程失败时进行进程恢复，释放用户进程资源的后台进程是：（C  ）

A.   系统监控进程                         B.   恢复进程

C.   进程监控进程              D.   调度进程

10、当某一个后台进程出现时，Oracle将内存中的数据写回到磁盘的数据文件中，并同时修改控制文件，这个后台进程是：（B   ）

A.   系统监控进程                         B.   检查点进程

C.   恢复进程                                 D.   调度进程

11、Oracle 数据库存储空间的最小I/O单位是：（B   ）

A.   表空间         B.   数据块         C.   段          D.   区间

12、ORACLE的SGA是表示（  B ）

A.   数据库数据所占用的内存空间

B.   数据库进程所占用的内存空间

C.   数据库数据所占用的硬盘空间

D.   数据库程序所占用的硬盘空间

13、下列关于表空间的描述那些是错的(多选题)（BD ）

A.   一个表只能存在一个表空间中。

B.   一个表空间只能由一个操作系统文件（或设备）构成。

C.   一个表空间的文件大小是固定不变的。

D.   必须逐个删除表空间内的对象，才能最后删除表空间。

## 填空题

1.  Oracle使用算法<span style="text-decoration: underline;"> </span>来管理数据块缓冲区中的数据。
2.  在归档模式下，<span style="text-decoration: underline;"> </span>文件在被覆盖前，系统为其建立一个备份。
3.  Oracle实例启动时，需要读取<span style="text-decoration: underline;"> </span>文件中的有关参数来分配SGA.。
4.  每当数据库结构发生改变或校验点进程产生时，数据库要修改<span style="text-decoration: underline;"> </span> 文件中的内容。
5.  Oracle使用表空间组织数据库，每个数据库至少有一个<span style="text-decoration: underline;"> </span>表空间。
6.  Oracle的存储空间最基本的存储单位是<span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span>。
7.  启动数据库的STARTUP NORMAL命令等价于以下三个命令：
STARTUP  <span style="text-decoration: underline;"> </span>;

ALTER DATABASE <span style="text-decoration: underline;"> </span>;

ALTER DATABASE <span style="text-decoration: underline;"> </span>;

## 是非题

1、Oracle服务器由Oracle数据库和Oracle实例组成。           （R   ）

## 名词解释

1、进程

2、Oracle实例

# 第2章 Oracle常用管理

## 选择题

1、评估SQL/Plus命令：START emp_rec.sql 它与下面哪一条命令的执行效果相同？（     B）

A．&amp;emp_rec.sql                                  B．@emp_rec.sql

C．GET emp_rec.sql                      D．EXECUTE emp_rec.sql

2、下列那一条不是SQL*PLUS命令?     （ D ）

A．LIST

B．ACCEPT

C．CHANGE

D．UPDATE

E．DESCRIBE

3、以下关于SQL语句和SQL*PLUS命令的叙述中不正确的是：（D  ）

A．SQL*PLUS命令无需；结束，立即执行。

B．SQL语句是一种语言。

C．SQL*PLUS命令可以简写。

D．SQL*PLUS命令可以操纵数据库中的数据。

4、以下关于SQL语句和SQL*PLUS命令的叙述中不正确的是：（A　）

A.   SQL语句可以简写。

B.   SQL*PLUS命令不允许对数据库中的数据进行操纵。

C.   SQL语句用函数来实现数据的格式化而SQL*PLUS命令用命令来格式化数据。

D.   TRUNCATE命令是SQL的删除一个表中的所有记录的命令。

## 填空题

1.  使用命令<span style="text-decoration: underline;"> </span>可以在SQL*PLUS中执行D:\C3_01.SQL文件中的内容。
2.  使用命令<span style="text-decoration: underline;"> </span>可以在SQL*PLUS中调用D:\C3_01.SQL文件到内存中。
3.  查看EMP表结构的SQL*PLUS命令为：<span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span>；显示EMP表所有数据的SQL语句是：<span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span>。
4.  用<span style="text-decoration: underline;"> </span>命令控制当前SQL*Plus环境设置

## 是非题

1.  用SQL*PLUS命令能够存取数据库数据.                                                （ W   ）
2.  SQL*PLUS的set linesize 50环境命令是设置每页行数为50。             （   W ）
3.  SQL*PLUS的set linesize 110环境命令是设置每行宽度为110。   （ R   ）
4.  SQL*PLUS的set pagesize 30环境命令是设置每页行数为30。    （ R   ）

# 第3章 SQL语言基础与查询语句

## 选择题

1、执行以下语句出错的行是（ A ）

SELECT deptno,dname,ename,sal

FROM emp,dept

WHERE emp.deptno=dept.deptno

AND sal&gt;1000;

A. 第一行                 B. 第二行

C. 第三行                 D. 第四行

2、如果在where子句中有两个条件要同时满足，应该用哪个逻辑符来连接（ C）

A．OR

B．NOT

C．AND

D．NONE

3、外连接的条件可以放在以下的那一个子句中（ B ）

A．FROM

B.   WEHRE

C.   SELECT

D.   HAVING

4、在从两个表中查询数据时，连接条件要放在哪个子句中（B  ）

A.   FROM

B.   WHERE

C.   SELECT

D.   HAVING

5、用以下哪个子句来限制分组统计结果信息的显示（  D）

A.   FROM

B.   WEHRE

C.   SELECT

D.   HAVING

6、以下需求中哪个需要用分组函数来实现？（   C）

A.   把ORDER表中的定单时间显示成 'DD MON YYYY' 格式

B.   把字符串 'JANUARY 28, 2000' 转换成日期格式

C.   显示PRODUCT 表中的COST 列值总量

D.   把PRODUCT表中的DESCRIPTION列用小写形式显示

7、用以下的SQL语句查询数据库:

SELECT id_number "Part Number", SUM(price * quantity) TOTAL, description

FROM inventory

WHERE price &gt; 5.00

ORDER BY "Part Number", 3;

哪一句会产生错误?  （ C ）

A.   FROM INVENTORY

B.   WHERE PRICE &gt; 5.00

C.   ORDER BY "PART NUMBER", 3;

D.   SELECT id_number "Part Number", SUM(price * quantity) TOTAL, description

8、以下操作符中哪个可以用做单行简单查询的操作符（A  ）

A.   =

B.   IN

C.   LIKE

D.   BETWEEN

9、以下那些命令可以暗含提交操作？（  A）

A.   GRANT

B.   UPDATE

C.   SELECT

D.   ROLLBACK

10、Mr. King 是公司的总裁，手下有五个经理，每个经理手下都有若干下属。以下代码的执行结果是：未选定行

SELECT employee.ename FROM emp employee

WHERE employee.empno not in (

SELECT manager.mgr FROM emp manager);

是什么原因导致如此？（C   ）

A. 所有的雇员均有领导           B. 子查询结果集中只有一条记录

C. 子查询结果集中出现一个空值   D. IN运算符不能用在多行子查询中

11、用下面的语句查询数据库：

SELECT price FROM inventory

WHERE price BETWEEN 1 AND 50 OR (price IN(25,70,95)

AND price BETWEEN 25 AND 75);

下面哪一个值将会被查询到？（A  ）。

A．30                   B．51                       C．75                        D．95

12、下面哪一个操作返回数字值？（D  ）。

A．’01-2月-1998’+25

B．’03-10月-1997’-30

C．’07-7月-1997’+(480/24)

D．to_date(’01-1月-1998’)-to_date(’01-10月-1996’)

13、下面哪两个操作返回日期型？允许多选  （ AC  ）  。

A．to_date('01-2月-1998')+25

B．(to_date('01-1月-1998')-to_date('01-10月-1996'))/7

C．to_date('01-2月-1998')+12/24

D．to_date('01-1月-1998')-to_date('01-10月-1996')

14、查看已经建立了哪些表，下面哪些语句能够完成这个任务？（须多选）（BD  ）

A．desc user_tables;

B．select table_name from user_tables;

C．select table_name from user_tab_columns;

D．select * from tab;

15、如果要输出姓王的学生名单，在where子句中最好用哪一个操作符？（C  ）

A．=                                           B．IN

C．LIKE                                  D．BETWEEN

16、如果希望进行分组统计的查询输出，可以使用哪个子句。（B  ）

A．SELECT                                  B．GROUP BY

C．HAVING                 D．ORDER BY

17、表SERVICE的内容如下：

MACHINE_ID     TECHNICIAN_ID   SERVICE_DATE

----------    ---------------  -------------

600252       456123            31-六月-1997

980076                         21-十月-1996

458745       456123            21-六月-1997

985625       874512            20-四月-1997

785214       879514            18-五月-1997

执行下面的语句后，哪一个的值将排在最后？（D  ）。

SELECT machine_id,service_date FROM service

ORDER BY technician_id,service_date;

A．458745                               B．785214

C．600252                              D．980076

18、要查询表EMP中ENAME的第2个字母为A的所有的人，请选择正确的查询语句。（  A）

A.   SELECT EMPNO,ENAME,JOB FROM EMP WHERE ENAME LIKE ’_A%’;

B.   SELECT EMPNO,ENAME,JOB FROM EMP WHERE ENAME=’_A%’;

C.   SELECT EMPNO,ENAME,JOB FROM EMP WHERE ENAME LIKE AS ’_A%’;

D.   SELECT EMPNO,ENAME,JOB FROM EMP WHERE ENAME LIKE ’?A*’;

19、SELECT DEPTNO DNO,DNAME DNA,LOC DLOC FROM DEPT A WHERE A.DEPTNO BETWEEN 10 AND 20 AND DNAME&gt;’B’ AND DLOC ‘NEW YORK’; （ C ）

请选择对上述语句有错的正确描述。

A．A.DEPTNO的字段描述方式错。

B．WHERE子句有的表达式返回值不能进行逻辑运算。

C．WHERE子句不能用别名。

D. 以上三个描述都不对。

20、列出表EMP中ENAME和HIREDATE的所在年月的第一天 （ A ）

A.   SELECT ENAME,ROUND(HIREDATE,’MM’) XDATE FROM EMP

B.   SELECT ENAME,TOCHAR(HIREDATE,’YYYY-MM’)||’-01’ XDATE FROM EMP

C.   SELECT ENAME,TOCHAR(HIREDATE,’YYYY-MM’)+’-01’ XDATE FROM EMP

D.   SELECT ENAME,TO_CHAR(HIREDATE,’YYYY-MM’)+’-01’ XDATE FROM EMP

21、查询表EMP中不同DEPTNO的SAL字段的分类合计值 （ B ）

A.   SELECT DEPTNO,TOTAL(SAL) FROM EMP GROUP BY DEPTNO

B.   SELECT DEPTNO,SUM(SAL) FROM EMP GROUP BY DEPTNO

C.   SELECT ENAME,TOTAL(SAL) FROM EMP GROUP BY DEPTNO

D.   SELECT ENAME,SUM(SAL) FROM EMP GROUP BY DEPTNO

22、查询表EMP的任意10条记录。（B ）

A．SELECT * FROM EMP WHERE ROWNUM&lt;=11

B.   SELECT * FROM EMP WHERE ROWNUM&lt;11

C.   SELECT * FROM EMP WHERE ROWID&lt;=11

D.   SELECT * FROM EMP WHERE ROWID&lt;11

23、查询一个序列SEQ_HZ的新值 （ C ）

A．       SELECT SEQ_HZ.NEXT FROM DUAL

B.   SELECT SEQ_HZ.NEWVAL FROM DAUL

C.   SELECT SEQ_HZ.NEXTVAL FROM DUAL

D.   SELECT SEQ_HZ.NEXTROW FROM DAUL

## 填空题

1.  要统计各班女同学数目，命令为
select sclass,<span style="text-decoration: underline;"> </span>from student where ssex=<span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span>。

1.  要查询超出公司平均月薪的雇员的工号、姓名及月薪，命令为
select empno,ename,sal from emp
where <span style="text-decoration: underline;"> </span>
2.  建立一个查询，显示哪些所挣的月薪比任何一个办事员（job为CLERK）所挣的薪水都多的员工的姓名、工种及月薪，要求查询结果按月薪值从高到低排序。
SELECT ename, job, sal　FROM   emp

WHERE  <span style="text-decoration: underline;"> </span>

ORDER BY <span style="text-decoration: underline;"> </span>;

1.  SQL命令：SELECT ename,deptno FROM emp WHERE deptno IN(10,30) order by ename; 的执行结果是：<span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span>。
2.  SQL命令：select round(11.5768,2) from dual; 的结果是<span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span>。
3.  SQL命令：select round(14.5678,2) from dual; 的结果是<span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span>。
4.  SQL命令：SELECT initcap('mr teplow.') from dual; 的结果是<span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span>。
5.  SQL命令：SELECT replace('mnp',’m’,’rr’) from dual; 的结果是<span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span>。
6.  SQL命令：SELECT substr('mnp',2,1) from dual; 的结果是<span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span>。
7.  SQL命令：SELECT FLOOR(11.6) from dual; 的结果是<span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span>。
8.  SQL命令：SELECT CEIL(11.6) from dual; 的结果是<span style="text-decoration: underline;"> </span><span style="text-decoration: underline;"> </span>。
9.  写出下列SQL语句的结果
（ ）1) SELECT      CEIL(11.6)   FROM   DUAL;

（ ）2) SELECT      FLOOR(17.4681) FROM  DUAL;

（ ）3) SELECT INITCAP(‘dear’) FROM  DUAL;

（ ）4) SELECT      REPLACE(‘ABC’,’BC’,’A’) FROM  DUAL;

（ ）5) SELECT ADD_MONTHS(’03-05月-98’,2) FROM DUAL;

<span style="text-decoration: underline;"> </span>

## 是非题

1.  Top-N分析使用ROWNUM属性作为行号。                              　　(    R )
2.  多行子查询中，“&gt;ANY”的意思是大于最小值。
(  R   )

1.  在一个序列中，要用CURRVAL获得当前值，必须先使用NEXTVAL至少产生一个编号。
(   R  )

1.  WHERE子句限制单个的行，但HAVING子句限制组。
(  R   )

1.  COUNT函数不将列中的空值计算在内。
(  W   )

1.  一个连接至少需要两种不同的表。
(    W )

1.  外部连接返回的信息通常比在相同的表上执行等值连接返回的信息要多。(    R )
2.  请查询雇员信息，要求显示雇员编号、雇员姓名及其上级领导。
3.  请查询雇员信息，要求显示雇员编号、雇员姓名及工资。
4.  删除职务为‘CLARK’的雇员的信息。
5.  删除部门编号为10的雇员的信息。
6.  删除1979年12月31日之前（包括1979年12月31日）进入公司的雇员的信息。
7.  增加一个部门信息，其中部门代码为99，部门名称为‘UNKNOW’，所在地为空。
8.  树结构查询：请查询雇员编号为7934的雇员以及他的所有上级领导的所有信息。
9.  树结构查询：请查询雇员编号为7566和7782的雇员以及他们的所有下级雇员的所有信息。
10.  请查询姓名中包含字母‘A’，或者职务为‘SALESMAN’的雇员的所有信息。
11.  建立视图VW_GYXX，要求只显示工资高于2000（包含2000）的员工的所有信息。
12.  建立视图VW_GYXX，要求只包含雇员编号、雇员姓名、职务及上级领导等信息。
13.  建立视图VW_GYXX，要求只包含部门编号为10的员工的所有信息。（2分）
14.  请查询人数超过3人（包含3人）的部门的部门编号和部门人数，并按部门人数升序排列。
15.  将所有工资少于2000（包括2000）的雇员的工资上浮10%。
16.  将所有职务为‘SALESMAN’的雇员的工资下降10%。
17.  将所有工资大于2000（包括2000）的雇员的工资下降10%。
18.  请分别使用嵌套查询和多表联合查询实现：查询所有‘ACCOUNTING’部门的雇员信息，要求显示雇员姓名、雇员编码及工资。
19.  请分别使用嵌套查询和多表联合查询实现：查询所有在‘NEW YORK’工作的雇员信息，要求显示雇员姓名、雇员编码和工资。
20.  请分别使用嵌套查询和多表联合查询实现：查询所有‘SALES’部门的雇员信息，要求显示雇员姓名、雇员编码及工资。
21.  在EMP表中对字段‘JOB’和‘HIREDATE’建立复合索引。其中索引名为INDEX_EMP_ JOB _ HIREDATE。
22.  在DEPT表中对字段‘DNAME’和‘LOC’建立复合索引。其中索引名为INDEX_DEPT_DNAME_LOC。
23.  在EMP表中对字段‘ENAME’和‘DEPTNO’建立复合索引。其中索引名为INDEX_EMP_ENAME_DEPTNO。
24.  请查询姓名中包含字母‘A’，并且职务为‘SALESMAN’的雇员的所有信息。
25.  请查询姓名中以字母‘A’开头，并且在1981年12月31日之前（包括1981年12月31日）进入公司的雇员的所有信息。
26.  请查询人数超过3人（包含3人）的部门的部门编号和部门人数，并按部门人数升序排列。
27.  查询每一门课的课号和其间接先修课（即先修课的先修课）的课号。

## 请写出下列SQL语句：

SELECT  FIRST.Cno,  SECOND.Cpno

FROM  Course  FIRST,  Course  SECOND

WHERE FIRST.Cpno = SECOND.Cno;

1.  请写出一个SELECT语句，列出所有部门的名字(DEP    T.DNAME)及其雇员的名字(EMP.ENAME)，用多表连接完成
2.  SELECT A.DNAME,B.ENAME FROM DEPT A,EMP B
3.  WHERE A.DEPTNO=B.DEPTNO GROUP BY A.DEPTNO
4.  请写出一个SELECT语句，列出在DEPT.LOC为’NEW YORK’的所有雇员的名字EMP.ENAME，用子查询完成
SELECT ENAME FROM EMP

WHERE DEPTNO IN (SELECT DEPTNO FROM DEPT WHERE LOC='NEW YORK')

1.  请写出一个SELECT语句，有表EMPA与表EMP结构相同，EMPNO是两表的唯一性索引，列出表EMP中所有的记录的EMPNO、ENAME和对应表EMPA中的ENAME值（表EMPA中无该记录ENAME为NULL）。
SELECT A.EMPNO,A.ENAME,B.ENAME FROM EMP A,EMP B

WHERE A.EMPNO=B.EMPNO(+)

## 简答题

1、以下SQL命令的执行任务是什么?

select empno,ename,sal from emp

where sal&gt;(select avg(sal) from emp);

2、如果用等值连接来查询５张表内的信息，至少需要几个连接条件？

3、以下SQL命令的执行任务是什么?

SELECT ename FROM emp
WHERE ename LIKE ’_A%’;

还要求写出查询结果集。

4、以下SQL命令的执行任务是什么?

SQL＞SELECT ename, job, sal

FROM   emp

WHERE  sal &gt; all ( SELECT sal

FROM   emp

WHERE  job=’CLERK’)

ORDER BY sal DESC;

5、用SQL的查询语句输出所有学生的学习成绩，要求给出学号、姓名、课号(cno)和成绩(score)。(成绩表名为score)

select a.sno,a.sname,b.cno,b.score

from student A,score B

where a.sno=b.sno;

6、根据上题的查询语句创建视图stu_score。

7、用SQL的查询语句输出所有学生的学习成绩，要求给出学号、姓名、课号(cno)、课程名称(cname)和成绩(score)。(成绩表名为score，课程表名为course)

8、请叙述出以下SQL命令的执行结果是什么?

SQL＞select a.sname,b.cno,b.score

from student A,score B

where a.sno=b.sno and A.sname&lt;&gt;'成功' and b.cno in(select cno

from student A,score B

where A.sno=B.sno and A.sname='成功');