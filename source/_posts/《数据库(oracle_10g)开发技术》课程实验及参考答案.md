title: 《数据库(oracle 10g)开发技术》课程实验及参考答案
tags:
  - oracle
  - 实验
  - 数据库
  - 答案
id: 1266
categories:
  - 课件❤资料
date: 2010-05-08 20:33:24
---

课程使用教材：《Oracle 10g SQL和PL/SQL编程指南》

**一、** **实验目的**

**《数据库开发技术》课程之实验三**

**连接查询，集合运算，子查询和** **TOP-N** **分析**

1． 掌握分组查询，连接查询和集合运算的使用方法。

2． 掌握子查询的使用，包括在：

having 子句中；

from 子句中；

CREATE, UPDATA, INSERT, DELETE 语句中；

3． 掌握多列子查询和相关子查询的使用。。

4． 掌握 TOP-N 分析方法；

**二、** **实验内容和要求**

**第一部分：使用** **SQL** **语句完成以下查询要求。**

1.    查询使用红色零件的工程名称。(考核多表（三表）连接操作) (分别使用相关的子查询、带 in 谓词的子

查询、带 exists 谓词的子查询和连接查询实现。注意体会不同实现方式的区别。实验报告要求写出其中

的两种方法)

/* 连接查询    */

select distinct jname from j,spj,p where p.pno=spj.pno and spj.jno=j.jno and color='红'

jname

--------

弹簧厂

三建

一汽

造船厂

/*三层带 IN 谓词的嵌套查询    */

select jname from j where jno in                                        --这里上题有的 distinct 可以不需要

(select jno from spj where pno in

(select pno from p where color='红'));

/* 带 exists 的子查询    */

Select jname from j where exists

(Select * from spj where jno=j.jno and exists

(select * from p

where pno=spj.pno and color='红'));

/* 相关的子查询    */

Select jname from j where jno in

(Select jno from spj where jno=j.jno and '红'=

(select color from p

where pno=spj.pno));

.OR.

Select jname from j where jno in

(Select jno from spj where jno=j.jno and pno in

(select pno from p

where pno=spj.pno and color='红'));

.OR.

Select jname from j where '红' in

(Select color from p,spj

Where p.pno=spj.pno and jno=j.jno);

2.    *查询每一种零件被供应的次数，要求：

1）结果显示零件号、零件名称和被供应的次数。

2）零件表中的所有零件都要统计。

SELECT    P.PNO,    PNAME,    COUNT(SPJ.PNO)

FROM    P left outer join SPJ                          --必须使用外连接

ON    P.PNO = SPJ.PNO

GROUP BY    P.PNO,    PNAME

.OR.

SELECT      P.PNO,    PNAME,    COUNT(SPJ.PNO)    COUNT_P

FROM    P,    SPJ

WHERE      P.PNO = SPJ.PNO(+)

GROUP    BY    P.PNO,    PNAME;

显示效果形如下：

PNO PNAME             COUNT_P

--- ---------- --------------

P1  螺母                    4

P2  螺栓                    2

P3  螺丝刀                  5

P4  螺丝刀                  0

P5  凸轮                    3

P6  齿轮                    3

P7  把手                    0

已选择 7 行。

问题 1？GROUP BY P.PNO 还是 SPJ.PNO?

Answer: P.PNO

问题 2？GROUP BY P.PNO 和 GROUP BY P.PNO, PNAME 结果是否一样？

Answer: 一样,  如果只要求显示零件号。如果要求显示的是零件号和零件名称，则必须要用      GROUP  BY

P.PNO, PNAME。

问题 3？COUNT(SPJ.PNO)还是 COUNT(P.PNO)

Answer: COUNT(SPJ.PNO)，否则将那些没有供应过的零件也计算了一次，因为 P 中所有的零件都有机会出

现在查询结果中，不管有没有被供应过。

问题 4？如果查询结果不要求显示零件号，只要求显示零件名称和数量，以下这个 SQL 语句对吗？

SELECT      PNAME, COUNT(SPJ.PNO)

FROM  P,    SPJ

WHERE      P.PNO = SPJ.PNO(+)

GROUP BY    PNAME;

Answer: 不对，P 表的 PNAME 有可能重复

正确的还是要用：

SELECT        PNAME, COUNT(SPJ.PNO)

FROM  P,    SPJ

WHERE      P.PNO = SPJ.PNO(+)

GROUP BY      P.PNO,    PNAME;

3.    查询 student 表中各系学生数占全校学生人数的百分比

SELECT    A.sdept, ROUND((A.s_sum / B.s_total)*100,1)    "%Student"

FROM        (SELECT    sdept, COUNT(sno)    s_sum

FROM          student

GROUP      BY      sdept)    A,

(SELECT    COUNT(sno)    s_total

FROM          student)    B;

**.OR.**

SELECT    sdept, ROUND(count(sno) / (select count(sno) from student)*100,1)    "%Student"

FROM    student

GROUP      BY      sdept;

SDEPT        %Student

---------- ----------

CS               33.3

FL               22.2

IS               22.2

MA               22.2

已选择 4 行。

4.    查询工资高于本部门平均工资的员工信息。

select *

from emp outer

where sal&gt;(select avg(sal)

from    emp

where    outer.deptno=emp.deptno

group by deptno)

.OR.

select *

from emp outer

where sal&gt;(select avg(sal)

from    emp

where    outer.deptno=emp.deptno)

5.    显示与 30 部门任何雇员薪水及岗位相匹配的雇员的姓名、部门编号、薪水及佣金。

SELECT    ename, deptno, sal, comm

FROM    emp

WHERE    sal    IN   (SELECT    sal

FROM        emp

WHERE    deptno = 30)

AND    job    IN    (SELECT    job

FROM      emp

WHERE    deptno = 30);

6.    *显示部门的雇员比部门 20 的雇员更多的部门的名称。

Select dname

From emp,dept

Where emp.deptno=dept.deptno

Group by emp.deptno,dname

Having count(empno)&gt;(select count(empno)

From emp

Where deptno=20);

DNAME

--------------

SALES

.OR.

已选择 1 行。

Select dname

From dept

Where deptno in

(select deptno from emp

Group by deptno

Having count(empno)&gt;(select count(empno)

From emp

Where deptno=20));

7.    查询其他系中比计算机科学系某一学生年龄大的学生姓名与年龄，用两种方法实现，写其中一种即可。

**SELECT Sname, Sage FROM Student **

**WHERE Sage &gt;** **ANY ( SELECT Sage **

** FROM Student**

** WHERE Sdept='CS')** **AND Sdept&lt;&gt;'CS';**

/*    **方法二：** */

**SELECT Sname, Sage FROM Student **

**WHERE Sage &gt;** **( SELECT min(Sage) **

** FROM Student**

** WHERE Sdept='CS')** **AND Sdept&lt;&gt;'CS';**

SNAME                      SAGE

-------------------- ----------

张军                         21

8.    *查询至少选修了学生 95002 选修的全部课程的学生学号(不包括 95002 学生本身)。

**SELECT DISTINCT Sno    FROM SC SCX**

**WHERE sno&lt;&gt;’95002’ and NOT EXISTS        --** **不存在**

**(SELECT * FROM SC SCY    -- 95002** **学生选修的课程**

** WHERE SCY.Sno='95002' AND**

**NOT EXISTS        -- X** **学生没有选修同一课程**

** ( SELECT *    FROM SC SCZ**

** WHERE SCZ.Sno=SCX.Sno**

** AND SCZ.Cno=SCY.Cno)); **

SNO

----------

95001

**附加题：**

1.   *查询工资第 3 低的员工的工号、姓名和薪水（假设 SAL 子段作了惟一限制。）（提示：使用 from 子查

询语句、内嵌视图和 ROWNUM 伪列）

select empno,ename,sal

from    (select empno,ename,sal from

(select empno,ename,sal from emp

order by sal)

where rownum&lt;=3 order by sal desc)

where rownum&lt;=1;

EMPNO ENAME             SAL

---------- ---------- ----------

7876 ADAMS            1100

已选择 1 行。

.OR.

select empno,ename,sal

from (Select rownum topn,empno,ename,sal

From (select empno,ename,sal from emp

Order by sal)

Where rownum&lt;=3) a

where topn=3;

.OR.

select empno,ename,sal

from (Select rownum,empno,ename,sal

from emp

Order by sal)

Where rownum&lt;=3

Minus

select empno,ename,sal

from (Select rownum,empno,ename,sal

from emp

Order by sal)

Where rownum&lt;=2;

.OR.

select empno,ename,sal from        --    此法的前题是工资值是不雷同的，这种解法适合于查找一列中

--  第 N 大值或第 N 小值

(select emp.*,dense_rank() over (order by sal) rank from emp)

where rank = 3;

**第二部分：**

自己设计实例完成在 CREATE, UPDATA, INSERT, DELETE 语句中使用子查询的实验；

**三、** **实验报告**

根据实验内容要求写出相应的  SQL  语句，并记录实验过程中遇到的困难和解决问题的方

法。(实验报告中不要求写加*题目的实验过程和内容)

实验参考数据：

CREATE TABLE STUDENT(

SNO

NUMBER(5) PRIMARY KEY  ,

SNAME      VARCHAR2(20)       ,

SSEX

CHAR(2)

,

SAGE

NUMBER(3)     ,

SDEPT        VARCHAR2(10)       );

CREATE TABLE COURSE(

CNO

NUMBER(4) PRIMARY KEY,

CNAME     VARCHAR2(30),

CPNO       NUMBER(4),

CCREDIT     NUMBER(2),

CLIMIT      NUMBER(4));

CREATE TABLE SC(

SNO

CNO

NUMBER(5)  ,

NUMBER(4)  ,

GRADE      NUMBER(3,1)     ,

PRIMARY KEY(SNO,CNO));

INSERT INTO STUDENT VALUES(95001,'李明勇','男',20,'CS');

INSERT INTO STUDENT VALUES(95002,'刘晨','女',19,'IS');

INSERT INTO STUDENT VALUES(95003,'王名','女',18,'MA');

INSERT INTO STUDENT VALUES(95004,'张立','男',19,'CS');

INSERT INTO STUDENT VALUES(95005,'张军','男',21,'MA');

INSERT INTO STUDENT VALUES(95006,'王张凤','女',19,'FL');

INSERT INTO STUDENT VALUES(95007,'王敬','女',18,'IS');

INSERT INTO STUDENT VALUES(95008,'张名惠','男',19,'FL');

COMMIT;

INSERT INTO COURSE VALUES(1,'数据库',5,5,10);

INSERT INTO COURSE VALUES(2,'数学',NULL,3,10);

INSERT INTO COURSE VALUES(3,'信息系统',1,4,12);

INSERT INTO COURSE VALUES(4,'操作系统',6,4,12);

INSERT INTO COURSE VALUES(5,'数据结构',7,5,16);

INSERT INTO COURSE VALUES(6,'数据处理',NULL,3,15);

INSERT INTO COURSE VALUES(7,'PASCAL 语言',6,2,NULL);

COMMIT;

INSERT INTO SC VALUES(95001,5,92);

INSERT INTO SC VALUES(95002,3,80);

INSERT INTO SC VALUES(95001,1,58);

INSERT INTO SC VALUES(95002,2,90);

INSERT INTO SC VALUES(95003,3,NULL);

INSERT INTO SC VALUES(95001,3,70);

INSERT INTO SC VALUES(95002,1,84.5);

INSERT INTO SC VALUES(95003,2,67);

INSERT INTO SC VALUES(95007,2,NULL);

INSERT INTO SC VALUES(95008,1,34.5);

INSERT INTO SC VALUES(95001,2,85);

COMMIT;

create table stuscore(cname varchar2(30),grade NUMBER(3,1), sno number(5));

insert into stuscore values('数据库',78,95001);

insert into stuscore values('信息系统',80,95001);

insert into stuscore values('操作系统',90,95001);

insert into stuscore values('数据库',79,95002);

insert into stuscore values('信息系统',82,95002);

insert into stuscore values('操作系统',92,95002);

COMMIT;

INSERT INTO SC VALUES(95007,2,45);

INSERT INTO SC VALUES(95007,1,44);

INSERT INTO SC VALUES(95007,3,64);

INSERT INTO SC VALUES(95007,4,34);

INSERT INTO SC VALUES(95007,5,50);

INSERT INTO SC VALUES(95007,6,20);
<!--nextpage-->

**一、** **实践目的**

**《数据库开发技术》课程之实验四**

**控制结构和嵌入式** **SQL**

1． 掌握 PL/SQL 程序设计的基本知识。

2． 掌握 PL/SQL 中控制结构的使用。具体包括：

选择结构（IF 语句和 CASE 语句）；

循环结构（三种循环语句）：

3． 掌握 PL/SQL 中 SELECT 语句和 DML 语句的正确使用方法。

**二、** **实践内容和要求**

1.    通过 CASE 语句判断 7788 雇员的工资等级后输出，工资等级划分条件是：3000(含)以上为高，1500（含）

至 3000 为中，低于 1500 为低。

SET SERVEROUTPUT ON

DECLARE

v_sal      NUMBER(5);

BEGIN

SELECT sal INTO v_sal FROM emp WHERE empno=7788;

CASE

WHEN v_sal&gt;=3000 THEN DBMS_OUTPUT.PUT_LINE('工资等级：高');

WHEN v_sal&gt;=1500 THEN DBMS_OUTPUT.PUT_LINE('工资等级：中');

ELSE DBMS_OUTPUT.PUT_LINE('工资等级：低');

END CASE;

END;

执行结果为：

工资等级：高

PL/SQL 过程已成功完成。

2.    用 PL/SQL 的 FOR 循环输出以下实心三角形:

1              *

2            ***

3          *****

4        *******

5      *********

Set serveroutput on

BEGIN

FOR I IN 1..5 LOOP                                    --采用 FOR 循环结构

DBMS_OUTPUT.PUT_LINE(to_char(I)||rpad(' ',8-I,' ')||rpad('*',2*I-1,'*'));

END LOOP;

END;

或者

DECLARE

String varchar2(20);

BEGIN

FOR I IN 1..5 LOOP                                    --采用 FOR 循环结构

String:=(i|| rpad(' ',5)||substr(‘

‘,1,(5-i))||substr(‘*********’,1,(i*2-1)));

END;

DBMS_OUTPUT.PUT_LINE(string);

END LOOP;

3.    先创建 d_asc 表。再编写一个匿名 PL/SQL 块，实现往此表插入 ASCII 码值从 32 至 126 的码号和相应

码值的字符。(提示：用 CHR()函数,   要求分别用两种循环方法实现)。

create table d_asc(n number, a char);

begin

for i in 32..126 loop                                                                    --FOR loop      有计数的循环

insert into d_asc values(i, chr(i));                                      --PL/SQL 中嵌入了 DML 语句

end loop;

commit;

end;

/

/* 检查 PL/SQL 程序块执行结果*/

Select * from d_asc;

**.OR. **

declare

i number(4):=32;

begin

while i&lt;=126 loop                                                                    --WHILE loop      有条件的循环

insert into d_asc values(i, chr(i));

i:=i+1;

end loop;

commit;

end;

/

**附加题：**

用 PL/SQL 的循环语句编程，求：1２+3２+5２+...+13２+15２ 的值。

SET SERVEROUTPUT ON

DECLARE

v_sub NUMBER(5):=12;

v_sum    NUMBER(5):=0;

BEGIN

LOOP

v_sum:=v_sum+v_sub;

v_sub:=v_sub+20;

EXIT WHEN v_sub&gt;152;

END LOOP;

DBMS_OUTPUT.PUT_LINE(v_sum);

END;

执行结果为：

656

PL/SQL 过程已成功完成。
<!--nextpage-->

**一、** **实验目的**

**《数据库开发技术》课程之实验五**

**PL/SQL** **的游标和异常处理**

1.    掌握游标和参数化游标的使用方法。

2.    掌握游标 FOR 循环、SELECT…FOR  UPDATE 游标和 WHERE  CURRENT  OF 子句的

使用方法。

**3.** **实验内容和要求**

1.      编写匿名 PL/SQL 程序块，根据用户输入的部门编号实现在 PL/SQL 中逐行显示 emp 表中该部门员

工的工资级别。工资级别是：当工资为空时，为空，工资在 1000 元以下的为‘低’，在 1000 和 3000

之间的为‘中’，高于 3000 元的为‘高’。要求使用参数化游标。

declare

v_deptno      emp.deptno%type;

cursor c_emp(cp_deptno    emp.deptno%type)

is    select empno,sal from emp where deptno=cp_deptno;

v_emp        c_emp%rowtype;

v_lev          varchar2(6);

begin

v_deptno:= &amp;dept_id

open c_emp(v_deptno);                                                            --还可采用游标 FOR 循环等其他方法

loop

fetch    c_emp into v_emp;

exit when c_emp%notfound;

if v_emp.sal is null then

v_lev:=null;

elsif    v_emp.sal&lt;1000    then

v_lev:='低';

elsif    v_emp.sal&gt;=1000 and v_emp.sal&lt;3000 then

v_lev:='中';

elsif v_emp.sal&gt;=3000    then

v_lev:='高';

end if;

dbms_output.put_line(v_emp.empno||','||v_emp.sal||','||v_lev);

end loop;

close c_emp;

end;

/

2.      创建一个 PL/SQL 块，要求根据用户输入的员工编号（EMPNO），查询出 EMP 表中该编号员工所

在的部门编号(deptno)及其直接管理者的姓名(ename)，要有异常处理(该员工编号不存在)。查询效

果形如下：

declare

v_empno      emp.empno%type;

v_deptno    emp.deptno%type;

v_mgrname emp.ename%type;

begin

v_empno:= &amp;员工编号;

select e.deptno, m.ename into v_deptno, v_mgrname

from emp e left outer join emp m on e.mgr=m.empno    --这里使用自身外连接确保无主管的员工也能正常处理

where e.empno=v_empno;

dbms_output.put_line('员工编号'||lpad(' ',5)||'部门编号'||lpad(' ',5)||'上司姓名');

dbms_output.put_line(lpad('-',34,'-'));

dbms_output.put_line(v_empno||lpad(' ',10)||v_deptno||lpad(' ',10)| v_mgrname);

EXCEPTION

when no_data_found then

dbms_output.put_line('该员工不存在！');

end;

/

或者

declare

v_empno      emp.empno%type;

no_exist_empno exception;

v_deptno    emp.deptno%type;

v_mgrname emp.ename%type;

begin

v_empno:= &amp;员工编号;

update emp set sal=sal where empno=v_empno;

if    SQL%rowcount=0 then

raise    no_exist_empno;                                --显式抛出用户自定义的异常

end if;

select e.deptno, m.ename into v_deptno, v_mgrname

from emp e, emp m

where e.empno=v_empno and e.mgr=m.empno;

dbms_output.put_line('员工编号'||lpad(' ',5)||'部门编号'||lpad(' ',5)||'上司姓名');

dbms_output.put_line(lpad('-',34,'-'));

dbms_output.put_line(v_empno||lpad(' ',10)| v_deptno||lpad(' ',10)||v_mgrname);

EXCEPTION

when no_exist_empno then

dbms_output.put_line('该员工不存在！');

when no_data_found then

dbms_output.put_line('该员工是总裁，无直接主管！');

end;

/

或者

declare

v_empno      emp.empno%type;

no_exist_empno exception;

cursor c_emp(cp_empno    emp.empno%type)

is    select e.empno, e.deptno, m.ename

from emp e left outer join emp m on e.mgr=m.empno

where e.empno=cp_empno;

v_emp    c_emp%rowtype;

begin

v_empno:= &amp;emp_id;

open c_emp(v_empno);

fetch c_emp into v_emp;

if c_emp%notfound then

raise    no_exist_empno;

end if;

dbms_output.put_line('员工编号'||lpad(' ',5)||'部门编号'||lpad(' ',5)||'上司姓名');

dbms_output.put_line(lpad('-',34,'-'));

dbms_output.put_line(v_emp.empno||lpad(' ',10)||v_emp.deptno||lpad(' ',10)| v_emp.ename);

close c_emp;

EXCEPTION

when no_exist_empno then

dbms_output.put_line('该员工不存在！');

end;

/

3.  *创建一个 PL/SQL 块，根据输入的部门编号，逐条输出 EMP 表中该部门每位员工的编号(empno)、

姓名(ename)和工资(sal)信息，要求用游标实现，信息显示格式要求如下：

编号

姓名

工资

declare

7396

PETER        1500.00

v_deptno      emp.deptno%type := &amp;dept_id;

cursor c_emp(cp_deptno    emp.deptno%type)

is    select empno, ename, sal from emp where deptno=cp_deptno;

v_emp        c_emp%rowtype;

begin

if    not c_emp%isopen then

open c_emp(v_deptno);

end if;

dbms_output.put_line('编号'| lpad(' ',10)||'姓名'||lpad(' ',10)||'工资');

loop

fetch    c_emp into v_emp;

exit when c_emp%notfound;

dbms_output.put_line(v_emp.empno||lpad(' ',10)||rpad(v_emp.ename,10)||lpad(' ',4)| v_emp.sal);

end loop;

close c_emp;

end;

4.    创建一个 PL/SQL 块，每输出 DEPT 表的一条记录（DEPTNO,DNAME,LOC）后，随后输出该部门

的员工记录（EMPNO,ENAME,HIREDATE,SAL），输出格式形如下：

部门编号:10      部门名称:SALES

部门位置:DALAS

――――――――――――――――――――――――――――

7369

KING

05-12-87           $1500

7135                    PETER            03-22-89            $1100

……………………

部门编号:20      部门名称:PROGRAM     部门位置: BOSTON

――――――――――――――――――――――――――――

7029

JOHN

05-12-87           $1200

BEGIN

……………………

FOR dept_rec in (select * from dept) loop

dbms_output.put_line('部门编号:'|| dept_rec.deptno||lpad(' ',5)

||'部门名称:'||rpad(dept_rec.dname,10)||lpad(' ',5)||'部门位置:'| dept_rec.loc);

dbms_output.put_line(lpad('-',58,'-'));

FOR emp_rec in (select empno, ename, to_char(hiredate, ‘mm-dd-yy’) HD, to_char(sal, ‘$99999’) salary

from emp Where deptno= dept_rec.deptno)    LOOP

dbms_output.put_line(emp_rec.empno||lpad(' ',10)||rpad(emp_rec.ename,10)||lpad(' ',8)

|| emp_rec.HD||lpad(‘ ’,8)||emp_rec.salary);

END loop;

END loop;

END;

5.    *有这么一张表 t_t，他只有一个 number(8)的字段 a，由于在创建表时忘记设置主键约束，导致表中

有很多重复的记录。请你编写一个程序，将表中重复的记录保留一个，删除其余的。

create table t_t(a number(8));

insert into t_t values(1);

insert into t_t values(3);

insert into t_t values(6);

insert into t_t values(1);

insert into t_t values(6);

insert into t_t values(5);

insert into t_t values(3);

insert into t_t values(1);

insert into t_t values(1);

declare

cursor c_t is

select distinct a from t_t ;

v_t  c_t%rowtype;

begin

open c_t;

delete from t_t;

loop

fetch    c_t into v_t;

exit when c_t%notfound;

dbms_output.put_line(to_char(v_t.a));

insert into t_t values(v_t.a);

end loop;

commit;

close c_t;

end;

--  可以通过查看表 t_t 的值来验证程序的执行情况。

Select * from t_t;

6.    *利用 REF 游标（游标变量）完成以下组合查询任务:    根据姓名、所在系任意组合查询学员信息。

DECLARE

l_name student.sname%TYPE;

l_sdept student.sdept%TYPE;

l_sql    VARCHAR2(200);

type    cur_type    IS    ref    cursor;      --       以下两句可以用这句 refCur SYS_REFCURSOR 代替;

cur    cur_type;

stuRec student%ROWTYPE;

BEGIN

l_name := '&amp;Name';

l_sdept := '&amp;dept';

l_sql := 'SELECT * FROM student WHERE 1=1 ';

IF l_name IS NOT NULL THEN

l_sql := l_sql || 'AND sname='''||l_name||'''';

END IF;

IF l_sdept IS NOT NULL THEN

l_sql := l_sql || 'AND sdept='''||l_sdept||'''';

END IF;

DBMS_OUTPUT.PUT_LINE(l_sql);

OPEN cur FOR l_sql;

LOOP

FETCH cur INTO stuRec;

EXIT WHEN cur%NOTFOUND;

DBMS_OUTPUT.PUT_LINE(stuRec.sname);

END LOOP;

CLOSE cur;

END;

/

**附加题：*******

利用 SELECT … FOR UPDATE 游标和 UPDATE 语句中的 WHERE CURRENT OF 子句完成以下任务：

把所有年龄小于 18 岁的学员成绩增加 10 分。

DECLARE

tempScore NUMBER;

l_score NUMBER;

l_name VARCHAR2(50);

CURSOR stuCur IS

SELECT a.score , b.stuName FROM stuScore a,stuInfo b

WHERE a.stuId = b.stuId AND b.stuAge &lt; 18 FOR UPDATE OF a.score;

BEGIN

OPEN stuCur;

LOOP

FETCH stuCur INTO l_score,l_name;

EXIT WHEN stuCur%NOTFOUND;

tempScore := l_score + 10;

IF l_score &gt;= 90 THEN

tempScore := 99;

END IF;

UPDATE stuScore SET score = tempScore

WHERE CURRENT OF stuCur;

DBMS_OUTPUT.PUT_LINE('已经更新:'||l_name);

END LOOP;

CLOSE stuCur;

COMMIT;

END;

**二、** **实验报告**

根据实验内容要求写出相应的  PL/SQL  程序，并记录实验过程中遇到的困难和解决问

题的方法。(实验报告中不要求写加*题目和附加题的实验过程和内容)
<!--nextpage-->

**一、** **实验目的**

**《数据库开发技术》课程之实验六**

**PL/SQL** **复合数据类型：记录、表和可变数组**

1.    掌握如何创建 PL/SQL 记录   。

2.    会用%ROWTYPE      属性创建一个记录。

3.    掌握如何创建 PL/SQL 表和记录表。

4.    掌握那些能获得复合数据信息的内置方法的使用。

5.    掌握可变数组的使用。

**二、** **实验内容和要求**

1.    根据表 emp 的全部字段定义记录变量 emp_record。用 SELECT 语句将编号为 7788 的雇员的全部字

段对应地存入该记录变量，最后输出记录变量的雇员名称字段 emp_record.ename 和雇员工资字段

的内容。

SET SERVEROUTPUT ON

DECLARE

emp_record emp%ROWTYPE;              --定义记录变量

BEGIN

SELECT * INTO emp_record

FROM    emp

WHERE  empno = 7788;                  --取出一条记录

DBMS_OUTPUT.PUT_LINE(emp_record.ename||'的工资为：'||

To_char(emp_record.sal));   --输出记录变量的某个字段

END;

执行结果如下：

SCOTT 的工资为：3000

PL/SQL 过程已成功完成。

2.    声明一张 Index_By 表，用来接收并存储 DEPT 表的信息，把部门号作为键，不要忘记部门号是 10

的倍数。使用循环从 DEPT 表中将所有部门信息检索到 PL/SQL 记录表中，然后用另一个循环来显

示表中的这些信息。

DECLARE

TYPE dept_list_type IS TABLE OF dept%ROWTYPE index by binary_integer;

dept_list dept_list_type;

v_count number(3);

BEGIN

SELECT count(*) INTO v_count FROM dept;

FOR counter IN 1..v_count LOOP

SELECT * INTO dept_list(counter*10) FROM dept

WHERE deptno=counter*10;

END LOOP;

FOR COUNTER IN 1..v_count LOOP

DBMS_OUTPUT.PUT_LINE(to_char(dept_list(counter*10).deptno)||', '||

dept_list(counter*10).dname||', '||dept_list(counter*10).loc);

END LOOP;

END;

/

执行结果为：

10, ACCOUNTING, NEW YORK

20, RESEARCH, DALLAS

30, SALES, CHICAGO

40, OPERATIONS, BOSTON

PL/SQL 过程已成功完成。

3.    阅读以下程序，找出出错之处，说明出错原因，预测运行输出结果是什么。请删改错误，加上适当

注释后，运行该程序，验证自己的预测是否正确。（注：实验报告中只要指出出错的语句和出错的原因

即可，不要抄原程序！）

SET SERVEROUTPUT ON

DECLARE

TYPE dept_list IS TABLE OF dept.dname%TYPE;                  --定义嵌套表

TYPE top5_list IS VARRAY(5) OF dept.loc%TYPE;                --定义可变数组

dis_dept dept_list;                                                                          --嵌套表的声明

num_5 top5_list;                                                                            --可变数组的声明

BEGIN

/*  下 面的这 条                                  dis_dept(1):='AMGN'    赋值 语句是 非 法的， 因为 集合 尚未初始 化。出 现错 误提示

（ORA-06531: 引用未初始化的集合，是以下 ORA-06531  Reference  to  uninitialized  collection 的翻

译）。集合变量的初始化是通过调用集合的构造函数来实现的，集合构造函数与集合对象（而不是集合

变量）同名。改正的方法有二。一是在集合变量声明的同时进行初始化，例如：

dis_dept dept_list :=dept_list('AMGN', 'BGEN'); 也可以在变量声明之后再进行初始化，例如：

dis_dept dept_list;

……

dis_dept :=dept_list('AMGN','BGEN');

本题则可以直接将下面的这条 dis_dept(1):='AMGN'      语句删除即可。

*/

-- dis_dept(1):='AMGN';

IF dis_dept IS NULL THEN

--显式调用构造函数进行集合的初始化

dis_dept :=dept_list('AMGN','BGEN');

DBMS_OUTPUT.PUT_LINE('dis_dept 表当前元素个数为：'||to_char(dis_dept.count));

END IF;

num_5:=top5_list('ORCL','CSCO',NULL,NULL);

IF num_5(3) IS NULL THEN

num_5(3):='CPQ';

END IF;

num_5(4):='DELL';

FOR COUNTER IN 1..4 LOOP

DBMS_OUTPUT.PUT_LINE(NUM_5(COUNTER));

END LOOP;

END;

/

执行结果为：

dis_dept 表当前元素个数为：2

ORCL

CSCO

CPQ

DELL

PL/SQL 过程已成功完成。

**以下是另一个相关的例子：**

SET SERVEROUTPUT ON

DECLARE

TYPE dept_list IS TABLE OF dept.dname%TYPE;                  --定义嵌套表

TYPE top5_list IS VARRAY(5) OF dept.loc%TYPE;                --定义可变数组

dis_dept dept_list;                                                                          --嵌套表的声明

num_5 top5_list;                                                                            --可变数组的声明

v_count number(3);

BEGIN

IF dis_dept IS NULL THEN

--嵌套表要显式调用构造函数进行集合的初始化

dis_dept :=dept_list('AMGN','BGEN');

DBMS_OUTPUT.PUT_LINE('dis_dept 表当前元素个数为：'||to_char(dis_dept.count));

dis_dept.extend(2);

dis_dept(3):='EXTEND_ELEMENT';

v_count:=dis_dept.count;

--嵌套表必须使用 extend(n)动态增加元素

DBMS_OUTPUT.PUT_LINE('dis_dept 表扩充后的元素个数为：'||to_char(dis_dept.count));

FOR i IN 1.. v_count loop                                    --输出嵌套表 dis_dept 的内容

DBMS_OUTPUT.PUT_LINE(dis_dept(i));

END LOOP;

END IF;

num_5:=top5_list('ORCL','CSCO',NULL,NULL);

IF num_5(3) IS NULL THEN

num_5(3):='CPQ';

END IF;

num_5(4):='DELL';

FOR COUNTER IN 1..4 LOOP

DBMS_OUTPUT.PUT_LINE(NUM_5(COUNTER));

END LOOP;

END;

/

执行结果为：

dis_dept 表当前元素个数为：2

dis_dept 表扩充后的元素个数为：4

AMGN

BGEN

EXTEND_ELEMENT

ORCL

CSCO

CPQ

DELL

PL/SQL 过程已成功完成。

4.    *将上题改为使用 INDEX BY BINARY_INTEGER 的索引表，则实现同一执行结果，程序要做哪些

相应的改变。

DECLARE

TYPE dept_list IS TABLE OF dept.dname%TYPE index by binary_integer;    --定义索引组织表

TYPE top5_list IS VARRAY(5) OF dept.loc%TYPE;

dis_dept dept_list;

num_5 top5_list;

BEGIN

dis_dept(1):='AMGN';                                                                                  --为表元素赋值

IF not dis_dept.exists(2) THEN

dis_dept(2) :='BGEN';

DBMS_OUTPUT.PUT_LINE('dis_dept 表当前元素个数为：'||to_char(dis_dept.count));

END IF;

num_5:=top5_list('ORCL','CSCO',NULL,NULL);

IF num_5(3) IS NULL THEN

num_5(3):='CPQ';

END IF;

num_5(4):='DELL';

FOR COUNTER IN 1..4 LOOP

DBMS_OUTPUT.PUT_LINE(NUM_5(COUNTER));

END LOOP;

END;

/

执行结果为：

dis_dept 表当前元素个数为：2

ORCL

CSCO

CPQ

DELL

PL/SQL 过程已成功完成。

**以下是与上题对应的另一个相关的例子：**

SET SERVEROUTPUT ON

DECLARE

TYPE dept_list IS TABLE OF dept.dname%TYPE index by binary_integer;            --定义索引组织表

TYPE top5_list IS VARRAY(5) OF dept.loc%TYPE;                                                    --定义可变数组

dis_dept dept_list;                                                                                                              --索引表的声明

num_5 top5_list;                                                                                                                  --可变数组的声明

v_count number(3);

BEGIN

dis_dept(1):='AMGN';                                                                                                      --为表元素赋值

IF not dis_dept.exists(2) THEN

DBMS_OUTPUT.PUT_LINE('dis_dept 表当前元素个数为：'||to_char(dis_dept.count));

-- dis_dept.extend(2);

dis_dept(3):='EXTEND_ELEMENT';

v_count:=dis_dept.count;

--索引表无须使用 extend(n)增加元素，使用了反而出错

DBMS_OUTPUT.PUT_LINE('dis_dept 表增添元素后的个数为：'||to_char(dis_dept.count));

FOR i IN 1.. v_count loop

DBMS_OUTPUT.PUT_LINE(dis_dept(i));

END LOOP;

END IF;

num_5:=top5_list('ORCL','CSCO',NULL,NULL);

IF num_5(3) IS NULL THEN

num_5(3):='CPQ';

END IF;

num_5(4):='DELL';

FOR COUNTER IN 1..4 LOOP

DBMS_OUTPUT.PUT_LINE(NUM_5(COUNTER));

END LOOP;

END;

/

执行结果为：

dis_dept 表当前元素个数为：2

dis_dept 表增添元素后的个数为：3

AMGN

BGEN

EXTEND_ELEMENT

ORCL

CSCO

CPQ

DELL

PL/SQL 过程已成功完成。

**附加题：**

*分割省份信息放入嵌套表结构中。用户输入：湖南|河南|江西，按”|”分割省份。

1)  接受用户输入

2)  分割字符串，把省份分割出放入嵌套表结构中

3)  遍历输出嵌套表

提示：str := '&amp;STR'                          -- str:= '湖南|河南|江西';

SET SERVEROUTPUT ON

DECLARE

TYPE prov_type IS TABLE OF varchar(15);                --定义嵌套表

prov_list prov_type:=prov_type();                                  --嵌套表的声明与初始化

str varchar(150);

v_loc number(3);

v_count number(2):=1;

BEGIN

str:= '&amp;STR';    -- str:= '湖南|河南|江西';

LOOP

v_loc :=instr(str,'|',1);

prov_list.extend;

IF v_loc=0 THEN

prov_list(v_count):=str;

EXIT;

ELSE

prov_list(v_count):=substr(str,1,v_loc-1);

str:=substr(str,v_loc+1);

v_count:=v_count+1;

END IF;

END LOOP;

DBMS_OUTPUT.PUT_LINE(‘用户输入的省份显示如下：’);

FOR i IN 1.. v_count loop                                    --输出嵌套表 prov_list 的内容

DBMS_OUTPUT.PUT_LINE(prov_list(i));

END LOOP;

END;

/

5.    参照教材和课件中的相关例子，自选实例使用复合数据的各种内置方法。

**三、** **实验报告**

根据实验内容要求写出相应的  PL/SQL  程序，并记录实验过程中遇到的困难和解决问

题的方法。(实验报告中不要求写加*题目和附加题的实验过程和内容)
<!--nextpage-->

**《数据库开发技术》课程之实验七**

**PL/SQL** **过程和函数**

**一、** **实验目的**

1． 掌握正确使用异常处理的方法。

2． 掌握局部（本地）过程和存储过程的正确使用方法。

3． 掌握局部（本地）函数和存储函数的正确使用方法。

**二、** **实验内容和要求**

1.    创建一个显示 EMP 表中雇员总人数的存储过程。然后在程序块中和 SQL*Plus 环境中调用该存储过

程。

CREATE OR REPLACE PROCEDURE EMP_COUNT

AS

V_TOTAL NUMBER(10);

BEGIN

SELECT COUNT(*) INTO V_TOTAL FROM EMP;

DBMS_OUTPUT.PUT_LINE('雇员总人数为：'||V_TOTAL);

END;

/* 在匿名块中调用：*/

BEGIN

EMP_COUNT;

END;

/* 在 SQL*Plus 环境中调用：*/

Exec[ute]    EMP_COUNT;

执行结果：

雇员总人数为：14

2.    编写一个存储函数函数，用于判断         DEPT  表中某一编号的部门是否存在，若存在此部门编号，则返

回 TRUE，否则返回 FALSE。

CREATE OR REPLACE FUNCTION GET_DNO(P_DNO IN NUMBER)

RETURN BOOLEAN  IS

V_DNO EMP.DEPTNO%TYPE;

BEGIN

SELECT DISTINCT DEPTNO INTO V_DNO FROM EMP

WHERE DEPTNO=P_DNO;

RETURN TRUE;

EXCEPTION

WHEN NO_DATA_FOUND THEN

RETURN FALSE;

END;

3.      编写一过程，调用第     2  题的函数判断某一编号的部门是否存在，存在则输出该部门员工的姓名、工

作，否则提示不存在此部门或此部门无员工。

CREATE OR REPLACE PROCEDURE DEMP_OUT (P_DNO IN NUMBER) IS

BEGIN

IF GET_DNO(P_DNO) THEN

FOR EMP_REC IN (SELECT ENAME,JOB FROM EMP

WHERE DEPTNO=P_DNO) LOOP

DBMS_OUTPUT.PUT_LINE(‘姓名: ’|| EMP_REC.ENAME||lpad(' ',3)||‘工作: ’|| EMP_REC.JOB);

END LOOP;

ELSE

DBMS_OUTPUT.PUT_LINE(‘没有此部门号！’);

END IF;

END;

4.    编写一个 PL/SQL 程序块调用第 2 题的存储函数，查询并显示 30 号部门的人数。

DECLARE

v_deptno    dept.deptno%type;

v_count int;

e_null  exception;

BEGIN

v_deptno:=30;

IF GET_DNO(v_deptno) THEN

SELECT COUNT(*) INTO v_count FROM EMP WHERE deptno= v_deptno;

DBMS_OUTPUT.PUT_LINE(to_char(v_deptno)||'号部门的人数为：'|| to_char (v_count)|| '人');

END IF;

EXCEPTION

when others then

raise_application_error(-20002,'程序运行过程中出现错误号为'||sqlcode||'错误信息为'||sqlerrm||'的错

误，请与系统管理员联系，以便尽快解决问题。');

END;

执行结果：

30 号部门的人数为：6 人

PL/SQL  过程已成功完成。

5.      有一个权限控制的表中有三个字段，分别存放用户姓名、密码和权限级别。创建一个用户登录存储

函数，用户登录时核对用户名和密码，正确则函数返回真，否则返回假。要求有适当的异常处理，

还要求进行适当的测试以验证函数的正确性。

Create table login(uname varchar(12), pw varchar(12), right_lel varchar(12));

insert into login values('xiaoli','12345','DBA');

insert into login values('zhangsan','zzz','GUEST');

create or replace function    func_login(in_uname    login.uname%type, in_pw login.pw%type)

return    boolean

is

v_pw    login.pw%type;

begin

select    pw into v_pw from login where uname=in_uname;

if v_pw=in_pw then

return true;

else

return false;

end if;

exception

when no_data_found then

raise_application_error(-20001,'不存在用户名为'|| in_uname||'的用户!');

when others then

raise_application_error(-20002,'程序运行过程中出现错误号为'||sqlcode||'错误信息为'||sqlerrm||'的错

误，请与系统管理员联系，以便尽快解决问题。');

end func_login;

--登录函数测试

Set serveroutput on

Set verify off

Declare

v_uname login.uname%type:='&amp;user_name';

v_password login.pw%type:='&amp;password';

begin

if func_login(v_uname, v_password) then

dbms_output.put_line('登录成功!');

else

dbms_output.put_line('用户密码有误!');

end if;

end;

/

输入  user_name      的值:    xiaoli

输入  password        的值:    12345

登录成功!

PL/SQL  过程已成功完成。

6.    *阅读、理解并执行以下程序，并在注释处完成填空，指明当条语句的作用或意义，一行不够写自行

加一行注释。最后要求写出你的上机执行结果，对此执行结果写出一句总结。

DECLARE

TYPE EmpTabTyp IS TABLE OF emp%ROWTYPE;    <span style="text-decoration: underline;">-- </span> 定义一个嵌套表类型 <span style="text-decoration: underline;">EmpTabTyp </span>

emp_tab EmpTabTyp := EmpTabTyp(NULL);          --  <span style="text-decoration: underline;">显式调用构造函数进行表</span> <span style="text-decoration: underline;">emp_tab</span> <span style="text-decoration: underline;">的初始化</span>

t1 NUMBER(5);

t2 NUMBER(5);

t3 NUMBER(5);

PROCEDURE get_time (t OUT NUMBER) IS    --    过程头：创建过程 <span style="text-decoration: underline;">get_time</span>，过程有一个输出

--参<span style="text-decoration: underline;">数</span><span style="text-decoration: underline;"> t ,</span> 参数模式为 <span style="text-decoration: underline;">OUT</span> <span style="text-decoration: underline;">模式</span>，参数类型是 <span style="text-decoration: underline;">NUMBER</span> <span style="text-decoration: underline;">型</span>。

/* 'SSSSS'日期/时间格式的含义为：距离午夜的秒数（0 ~ 86399）。*/

BEGIN                    --以下语句<span style="text-decoration: underline;">将调用瞬间距离午夜的秒数以字符类型的形式</span>赋给输出参数 <span style="text-decoration: underline;">t</span><span style="text-decoration: underline;">。</span>

SELECT TO_CHAR(SYSDATE,'SSSSS') INTO t FROM dual;

END;

PROCEDURE do_nothing1 (tab IN OUT EmpTabTyp) IS    --过程有一个 <span style="text-decoration: underline;">IN OUT</span> 模式的参数 tab，数

--  据类型是嵌套表类型 <span style="text-decoration: underline;">EmpTabTyp</span>，根据 PL/SQL 的默认方式，实参与形参间是按值传递的。

BEGIN

NULL;                              -- 过程 do_nothing1 是一个什么也不做的过程

END;

PROCEDURE do_nothing2 (tab IN OUT NOCOPY EmpTabTyp) IS --过程有一个 IN OUT 模式的参

--  数 tab，实参与形参间由于有编译提示 <span style="text-decoration: underline;">NOCOPY</span>，所以是按引用传递的。

BEGIN NULL; END;

BEGIN

SELECT * INTO emp_tab(1) FROM emp WHERE empno = 7788;    -- 将雇员 7788 的信息存入表元

--  素 1 中

emp_tab.EXTEND(249999, 1);    <span style="text-decoration: underline;">--</span> 向表 <span style="text-decoration: underline;">emp_tab</span> 追加第 <span style="text-decoration: underline;">1</span> 个元素的 <span style="text-decoration: underline;">249999</span> 个拷贝，即将元素 <span style="text-decoration: underline;">1</span> 的

<span style="text-decoration: underline;">--</span><span style="text-decoration: underline;">值拷贝到表的</span> <span style="text-decoration: underline;">2..250000</span> <span style="text-decoration: underline;">位置中。</span>

get_time(t1);

do_nothing1(emp_tab);                --                                                             将嵌套表 emp_tab 传递给过程 do_nothing1 的 IN OUT                                                                               形参

get_time(t2);

do_nothing2(emp_tab); --    将嵌套表 <span style="text-decoration: underline;">emp_tab</span> 传递给过程 do_nothing2 的 IN OUT NOCOPY 形参

get_time(t3);

dbms_output.put_line('Call Duration (secs)');

dbms_output.put_line('--------------------');

dbms_output.put_line('Just IN OUT: ' || TO_CHAR(t2 - t1)); --<span style="text-decoration: underline;">显示出用值传递参数方式的执行用</span>时（秒）。

dbms_output.put_line('With NOCOPY: ' || TO_CHAR(t3 - t2)); --显示出用引用传递方式的执行用时（秒）。

END;

/

Call Duration (secs)                      --250000 条记录，即 25 万条记录

--------------------

Just IN OUT: 2

With NOCOPY: 0

PL/SQL  过程已成功完成。

Call Duration (secs)                      --2500000 条记录，即 250 万条记录

--------------------

Just IN OUT: 381

With NOCOPY: 0

PL/SQL  过程已成功完成。

**三、** **实验报告**

记录实验过程中遇到的困难和解决问题的方法。

**四、** **实验小结**

分析本次实验主要综合运用了哪些知识点，你的运用情况如何等。
<!--nextpage-->

**一、** **实验目的**

**《数据库开发技术》课程之实验八**

**PL/SQL** **的触发器与包**

1． 掌握正确使用触发器的方法。

2． 掌握包的正确使用方法。

**二、** **实验内容和要求**

1.    编写一个触发器，在 DEPT 表执行 INSERT 语句后被激发，此触发器将新部门的编号(deptno)、名称

(dname)及执行此操作的用户（USER）、当时的日期（SYSDATE）插入 N_DEPT 表{注：此表已建好，

表结构为 N_DEPT（DEPTNO NUMBER(4),DNAME VARCHAR2(10), UNAME VARCHAR2(20),

INDATE DATE）}。

Create table N_DEPT (DEPTNO NUMBER(4),DNAME VARCHAR2(10), UNAME VARCHAR2(20),

INDATE DATE);

CREATE OR REPLACE TRIGGER T_DEPT_INS

AFTER INSERT ON DEPT

FOR EACH ROW

BEGIN

INSERT INTO N_DEPT VALUES (:new.deptno, :new.dname, user, sysdate);

COMMIT;

END;

**测试：**

INSERT INTO DEPT VALUES(50, 'DEVELOP', 'BEIJING')

**检查：**

SELECT * FROM N_DEPT;

DEPTNO DNAME      UNAME                INDATE

---------- ---------- -------------------- --------------

50 DEVELOP    SCOTT                04-6 月 -10

2.    创建触发器 CHECK_SAL，禁示对职务为 CLERK 的雇员的工资修改值超出 1000 至 2000 的范围，即

CLERK 职务员工的修改后工资值只能在 1000~2000 之间。要求测试该触发器。

步骤 1：创建和编译以下触发器：

CREATE OR REPLACE TRIGGER check_sal

BEFORE

UPDATE **OF sal** ON emp

FOR EACH ROW

**WHEN (old.job='CLERK')**

BEGIN

IF :new.job='CLERK' AND (:new.sal&lt;1000 OR :new.sal&gt;2000) THEN

RAISE_APPLICATION_ERROR(-20001, '工资修改值超出 1000 至 2000 的范围,   操作取消！');

END IF;

END;

步骤 2：在 EMP 表中修改记录，对触发器进行测试：

UPDATE emp SET sal=800 WHERE empno=7876;

执行结果：

UPDATE emp SET sal=800 WHERE empno=7876

*

ERROR 位于第  1    行:

ORA-20001:                                                           工资修改值超出 1000 至 2000 的范围,  操作取消！

ORA-06512:       在"***.CHECK_SAL", line 3

ORA-04088:                                          触发器  '***.CHECK_SAL'    执行过程中出错

3.    *编写一个管理雇员信息的包 emp_mgmt。包中有成员如下：

程序结构

类型

说明

Emp_count

init

tax_emp

Hire_emp

Fire_emp

公有变量   跟踪员工的总人数变化，插入和删除员工时要修改该变量的值

公有过程   初始化包，初始化员工人数和当前个人所得税率，建议有一个输入参数

p_tax，传入当前个人所得税率，暂定为工资的 8%。

公有函数   通过员工编号计算出员工应交个人所得税款

公有过程   通过员工编号插入员工

公有过程   通过员工编号删除员工

**emp_tax_record** 记录

用于游标 C_emp 的 RETURN（强类型游标）语句中

C_emp

游标

用于游标 FOR 循环中，会被过程 show_emp_tax 所使用

show_emp_tax

Exist_emp

公有过程   按工资升序输出所有雇员的应交所得税清单

私有函数   判断某个编号的员工是否存在，该函数会被 hire_emp 和 fire_emp 等过程调

用

sal_null

……

异常名

公有或私

有变量

工资为空值时的异常名

可加入你认为需要的各种变量，但在程序中要有变量用途的注释

**步骤** **1****：创建包头和包体：**

CREATE OR REPLACE PACKAGE emp_mgmt                     --     包头部分

IS

EMP_COUNT NUMBER(5);

TYPE emp_tax_record IS RECORD

-- 员工总人数

(Empno NUMBER(4), Ename emp.ename%type, Salary NUMBER );                      --  记录定义

CURSOR c_emp RETURN emp_tax_record;                                --    游标定义

Sal_null    EXCEPTION;                                                                --    异常名定义

PROCEDURE INIT(p_tax NUMBER);                                                                 --       初始化过程

FUNCTION tax_emp(p_Empno    emp.empno%type)                  --    函数：计算员工应交个人所得税款

RETURN number;

PROCEDURE    hire_emp (P_EMPNO NUMBER,    P_ENAME VARCHAR2,    P_JOB VARCHAR2,

P_SAL NUMBER);

PROCEDURE Fire_emp(P_EMPNO NUMBER);

--     插入员工

--         删除雇员

PROCEDURE show_emp_tax;                                            --按工资升序输出所有雇员的应交所得税清单

END emp_mgmt;

执行结果：

程序包已创建。

CREATE OR REPLACE PACKAGE BODY emp_mgmt                    --       包体部分

IS

CURSOR c_Emp RETURN emp_tax_record IS

SELECT empno, ename, sal FROM    emp ORDER BY sal;

V_tax NUMBER;                                                                                  --                                                                                                   存放当前个人所得税率

--------------------私有函数：判断员工是否存在----------------------------

FUNCTION EXIST_EMP(P_EMPNO IN emp.empno%type)

RETURN BOOLEAN --判断雇员是否存在的私有函数

IS

V_NUM int;

BEGIN

SELECT COUNT(*) INTO V_NUM FROM EMP WHERE EMPNO= P_EMPNO;

IF V_NUM=1 THEN

RETURN TRUE;

ELSE

RETURN FALSE;

END IF;

END    EXIST_EMP;

-------------------------------         初始化过程  ----------------------------

PROCEDURE INIT(p_tax NUMBER)

IS

BEGIN

SELECT COUNT(*) INTO EMP_COUNT FROM EMP;

V_tax:= p_tax;

DBMS_OUTPUT.PUT_LINE('当前个人所得税率：'||V_tax||'%');

DBMS_OUTPUT.PUT_LINE('当前雇员总人数'||EMP_COUNT);

DBMS_OUTPUT.PUT_LINE('初始化过程已经完成！');

END INIT;

------------------公有函数：通过员工编号计算出员工应交个人所得税款----------------------------

FUNCTION tax_emp (p_Empno    emp.empno%type)

RETURN    NUMBER                                                            --    定义该函数返回的数据类型，只能定义

IS                                                                                                    --       数据类型，不能定义长度

v_Sal      NUMBER;

v_ReturnValue    NUMBER;

BEGIN

IF EXIST_EMP(P_EMPNO) THEN

SELECT sal      INTO v_Sal    FROM emp    WHERE empno=p_Empno;

IF V_SAL IS NULL THEN

RAISE sal_null;

ELSE

v_ReturnValue:=v_Sal* V_tax;

RETURN    v_ReturnValue;                                          --      返回语句，确定该函数返回的值

END IF;

END IF;

Exception

when sal_null then

raise_application_error(-20001, p_empno||'号员工工资为空，无所得税！');

when others then

raise_application_error(-20002,'程序运行过程中出现错误号为 '||sqlcode||'错误信息为'||sqlerrm||'的错

误!');

END tax_emp;

------------------公有过程：通过员工编号插入员工----------------------------

PROCEDURE    hire_emp (P_EMPNO NUMBER,    P_ENAME VARCHAR2,    P_JOB VARCHAR2,

P_SAL NUMBER)

IS

BEGIN

IF NOT EXIST_EMP(P_EMPNO) THEN

INSERT INTO emp (EMPNO,ENAME,JOB,SAL) VALUES (P_EMPNO, P_ENAME, P_JOB, P_SAL);

COMMIT;

EMP_COUNT:= EMP_COUNT + 1;

DBMS_OUTPUT.PUT_LINE('雇员'||P_EMPNO||'已插入!');

DBMS_OUTPUT.PUT_LINE('当前雇员总人数'||EMP_COUNT);

ELSE

DBMS_OUTPUT.PUT_LINE('雇员'||P_EMPNO||'已存在,不能插入!');

END IF;

EXCEPTION

WHEN OTHERS THEN

DBMS_OUTPUT.PUT_LINE('雇员'||P_EMPNO||'插入失败!');

END hire_emp;

------------------公有过程：通过员工编号删除员工----------------------------

PROCEDURE Fire_emp(P_EMPNO NUMBER)

IS

BEGIN

IF EXIST_EMP(P_EMPNO) THEN

DELETE FROM EMP WHERE EMPNO=P_EMPNO;

COMMIT;

EMP_COUNT:= EMP_COUNT - 1;

DBMS_OUTPUT.PUT_LINE('雇员'||P_EMPNO||'已删除!');

DBMS_OUTPUT.PUT_LINE('当前雇员总人数'||EMP_COUNT);

ELSE

DBMS_OUTPUT.PUT_LINE('雇员'||P_EMPNO||'不存在，不能删除!');

END IF;

EXCEPTION

WHEN OTHERS THEN

DBMS_OUTPUT.PUT_LINE('雇员'||P_EMPNO||'删除失败!');

END Fire_emp;

------------------公有过程：按工资升序输出所有雇员的应交所得税清单----------------------------

PROCEDURE show_emp_tax

IS

BEGIN

FOR emp_tax_record    IN    c_Emp    LOOP    --输出雇员的所得税

DBMS_OUTPUT.PUT_LINE(emp_tax_record.empno||', '|| emp_tax_record.ename||''' tax is '

||TO_CHAR(tax_emp (emp_tax_record.Empno))||'.');

END    LOOP;

DBMS_OUTPUT.PUT_LINE('当前雇员总人数：'||EMP_COUNT);

END show_emp_tax;

END emp_mgmt;

执行结果：

程序包主体已创建。

**步骤** **2****：初始化包：**

SET SERVEROUTPUT ON

EXECUTE emp_mgmt.INIT(8);

执行结果：

当前个人所得税率：8%

当前雇员总人数 16

初始化过程已经完成！16

**步骤** **3****：按工资升序输出所有雇员的应交所得税清单：**

EXECUTE emp_mgmt.INIT(8);

EXECUTE emp_mgmt.show_emp_tax;

执行结果：

7369, SMITH' tax is 7744.

7900, JAMES' tax is 9196.

7876, ADAMS' tax is 10648.

7521, WARD' tax is 12100.

7654, MARTIN' tax is 12100.

7934, MILLER' tax is 12584.

7844, TURNER' tax is 14520.

7499, ALLEN' tax is 15488.

7951, OLIVEN' tax is 20328.

7782, CLARK' tax is 23716.

7948, MIKE' tax is 26136.

7698, BLAKE' tax is 27588.

7566, JONES' tax is 28798.

7788, SCOTT' tax is 29040.

7902, FORD' tax is 29040.

7839, KING' tax is 48400.

当前雇员总人数: 16

PL/SQL 过程已成功完成。

**步骤** **4****：对员工表插入一条新记录：**

EXECUTE emp_mgmt.hire_emp (8001,'小王','CLERK',1000);

执行结果：

雇员 8001 已插入!

当前雇员总人数 17

PL/SQL 过程已成功完成。

**步骤** **5****：通过全局变量** **EMP_COUNT** **查看雇员人数：**

BEGIN

DBMS_OUTPUT.PUT_LINE('当前雇员总人数：'||emp_mgmt.EMP_COUNT);

END;

显示结果为：

当前雇员总人数：17

PL/SQL 过程已成功完成。

**步骤** **6****：删除员工表新插入的记录**

EXECUTE emp_mgmt.fire_emp(8001);

执行结果：

雇员 8001 删除失败!                        --   因为存在禁止删除的触发器，要执行 drop trigger emp_test;

PL/SQL 过程已成功完成。

删除触发器后，再次执行：

EXECUTE emp_mgmt.fire_emp(8001);

执行结果：

雇员 8001 已删除!

当前雇员总人数 16

PL/SQL 过程已成功完成。

**步骤** **7****：通过员工编号计算出员工应交个人所得税款**

DECLARE

V_empno emp.empno%type;

BEGIN

V_empno:=7951;

DBMS_OUTPUT.PUT_LINE(V_empno ||'     应交个人所得税款为：'|| emp_mgmt. tax_emp(V_empno));

END;

执行结果：

7951 应交个人所得税款为：20328

PL/SQL 过程已成功完成。

**三、** **实验报告**

记录实验内容 1 和 2。记录实验过程中遇到的困难和解决问题的方法。