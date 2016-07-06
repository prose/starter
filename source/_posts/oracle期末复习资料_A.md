title: oracle期末复习资料 A
tags:
  - oracle
  - 复习
  - 数据库
  - 期末
id: 1261
categories:
  - 课件❤资料
date: 2010-05-09 20:08:28
---

二、填空题

1、调用函数MOD(123,10)返回值为__3__。

2、select round (123.67,1) from dual;这语句输出值为____123.7___。

3、创建一个临时替代变量使用的字符是___&amp;__。

4、若v_comm = 2800, X := NVL (V_comm,0) ,则X的值为__2800___。

5、调用函数INSTR(‘Here you are’,’er’)返回值为__2__。

三、判断题

1、WHERE子句限制行记录，也可以指定限制分组结果的条件。            （×）

2、具有UNIQUE约束的列不能包含多个空值。                           （×）<!--more-->

3、DATE型数据中包含着时间值。                                      （√）

4、具有外键约束的列可以包含空值。                                   （√）

5、如果在类型为char(4)的列中输入“hello”，则只能存储hell。            （√）

6、含有Group by子句的查询，其结果是排好序的。                      （√）

7、定义游标时，其中的select语句不能使用order by子句。(子查询不能用)  （×）

8、过程可以有返回值。                                               （√）

9、触发器一定会被激发。                                             （×）

10、instead of触发器只是基于视图的。                                  （√）

四、写出相应的SQL语句（括号内为列名）

1、查询从事各工作（JOB）的员工人数。

Select job,count(*) from emp group by job;

2、查询与员工SMITH在同一部门(DEPTNO)的员工的姓名(ENAME)，工资(SAL)和部门。

Select ename,sal,deptno from emp where deptno=(select deptno from emp where ename=’SMITH’);

3、查询所有员工的姓名（ENAME），工资（SAL）和工资等级（GRADE）。

Select ename,sal,grade from emp,salgrade where sal between losal and hisal;

4、查询获得工资（SAL）最高的3个员工信息。

Select * from (select * from emp order by sal desc) where rownum&lt;=3;

5、查询所有员工的姓名（ENAME）及其主管姓名（ENAME）。

Select e1.ename empname,e2.ename mgrname from emp e1,emp e2 where e1.mgr=e2.empno;

五、简答题

1.      在PL/SQL程序中，进行用户自定义异常处理的3个步骤是什么？

可以通过声明和发布来截获自定义异常。

一、在声明部分为声明自定义异常名。

二、在执行部分使用 RAISE 语句显式地发布异常。

三、在相应的异常处理例程中引用已声明的异常。

2.      触发触发器的数据操作有哪些？

Insert 条件谓词 inserting；

Update条件谓词 updating；

Delete 条件谓词 deleting。

3.      解释视图的含义以及使用视图的好处。

视图是一种Oracle对象，是来自一张或多张表或视图中数据的子集的逻辑表示。

特点：限制对数据库的访问；容易实现数据的复杂的查询；维护数据的独立性；对于相同的数据可以产生不同的视图。

4.      简述ORACLE中5种约束及其作用。

Primary key 确保非空且唯一；

Foreign key 确保引用完整性；

Unique 确保列或者列的组合中的每个值都是唯一的；

Check 限制每条记录都要满足的条件；

Not null 确保该列不能保存空值。

5.      ORACLE中过程和函数的异同点。

两者都带有0个或多个参数，参数可以具有模式。

两者都是PL/SQL语句块的不同形式，都有声明段、可执行段以及异常段。

两者都可以存储在数据库中或在语句块中声明

两者不同的是，过程调用本身是一个PL/SQL语句，而函数总是向调用块返回一个值。

6.      使用%rowtype属性声明记录变量的优点是什么？

可以不必知道数据库中列的数量和类型。

在运行期间，数据库中列的数量和类型可能发生变化。

在SELECT语句中使用该属性可以有效地检索表中的行。

六、编程题

1、创建一个PL/SQL块，根据用户输入的编号，在emp表中查询出该编号的员工姓名、部门号及其主管编号，要有异常处理。

SET serveroutput ON;

Declare

v_empno emp.empno%type:=’&amp;员工编号’;

v_ename emp.ename%type;

v_deptno emp.deptno%type;

v_mgr emp.mgr%type;

Begin

SELECT ename,deptno,mgr INTO v_ename,v_deptno,v_mgr from emp WHERE empno=v_empno;

DBMS_OUTPUT.PUT_LINE(‘员工’||v_ename||’在部门’||’v_deptno’||’主管’||v_mgr);

EXCEPTION

WHEN NO_DATA_FOUND THEN

DBMS_OUTPUT.PUT_LINE(‘没有此员工’);

END;

2、创建一个PL/SQL块，根据用户输入的工作，从emp表中逐条输出从事这一工作的每位员工的编号、姓名和受雇如期，每条信息格式如下：（用游标实现）

编号    姓名      受雇日期

7751    JOHN      95-12-31

Declare

Cursor emp_cur(v_job emp.job%TYPE) is

Select empno,ename,hiredate from emp where job=v_job;

v_empno emp.empno%TYPE;

v_ename emp.ename%TYPE;

v_hiredate emp.hiredate%TYPE;

BEGIN

OPEN emp_cur(upper(‘&amp;job’));

LOOP

Fetch emp_cur INTO v_empno,v_ename,v_hiredate;

Exit when emp_cur%NOTFOUND;

DBMS_OUTPUT.PUT_LINE(‘编号   姓名   工资’);

DBMS_OUTPUT.PUT_LINE(v_empno||v_ename||v_hiredate);

END LOOP;

CLOSE emp_cur;

END;

Declare

Cursor emp_cur(v_job emp.job%TYPE) is

Select empno,ename,hiredate from emp where job=v_job;

v_empno emp.empno%TYPE;

v_ename emp.ename%TYPE;

v_hiredate emp.hiredate%TYPE;

BEGIN

FOR i IN emp_cur(upper(‘&amp;job’)) LOOP

v_empno:=i.empno;

v_ename:=i. ename;

v_hiredate:=i. hiredate;

DBMS_OUTPUT.PUT_LINE(‘编号   姓名   工资’);

DBMS_OUTPUT.PUT_LINE(v_empno||v_ename||v_hiredate);

END LOOP;

END;

3、编写一个函数，用于判断EMP表中某一工作（JOB）是否存在，若EMP表存在此工作名称，则返回TRUE，否则返回FALSE。

CREATE OR REPLACE FUNCTION f_emp(f_job emp.job%TYPE)

RETURN BOOLEAN

Is

v_job emp.job%TYPE;

BEGIN

SELECT DISTINCT job INTO v_job FROM emp WHERE job=f_job;

RETURN TRUE;

EXCEPTION

WHEN NO_DATA_FOUND THEN

RETURN FALSE;

END f_emp;

Begin

If f_emp(upper(‘&amp;job’)) THEN

DBMS_OUTPUT.PUT_LINE(‘日’);

ELSE

DBMS_OUTPUT.PUT_LINE(‘插’);

END IF;

END;

4、编写一触发器，在EMP表执行插入或修改前被激发，此触发器将对员工的工资（SAL）超过5000进行报错，不能插入或修改，不超过5000的才将员工编号、工作及当时的日期（SYSDATE）插入UP_EMP表

（注：此表已建好，表结构为UP_EMP（EMPNO NUMBER(4),SAL NUMBER(7,2),UDETE DATE））

CREATE OR REPLACE TRIGGER t_emp_sal

BEFORE INSERT OR UPDATE ON emp

Begin

IF :new.sal&gt;5000 THEN

RAISE_APPLICATIONG_ERROR(‘ERROR!!’);

ELSE

INSERT int up_emp VALUES(empno,sal,sysdate);

END IF;

END;