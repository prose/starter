title: ORACLE常用傻瓜問題1000問(全集)
tags:
  - oracle
  - 全集
  - 问题
id: 1263
categories:
  - 课件❤资料
date: 2010-06-09 20:14:46
---

## ORACLE常用傻瓜問題1000問全集

2\. ORACLE9IAS WEB CACHE的初始默认用户和密码？
administrator/administrator
5\. oracle 9i 怎么创建数据库?
dbca
6\. oracle中的裸设备指的是什么?
裸设备就是绕过文件系统直接访问的储存空间
7\. oracle如何区分 64-bit/32bit 版本？
$ sqlplus '/ AS SYSDBA'
SQL*Plus： Release 9.0.1.0.0 - Production on Mon Jul 14 17：01：09 2003
(c) Copyright 2001 Oracle Corporation. All rights reserved。
Connected to：
Oracle9i Enterprise Edition Release 9.0.1.0.0 - Production
With the Partitioning option
JServer Release 9.0.1.0.0 - Production
SQL&gt; select * from v$version；
BANNER
----------------------------------------------------------------
Oracle9i Enterprise Edition Release 9.0.1.0.0 - Production
PL/SQL Release 9.0.1.0.0 - Production
CORE 9.0.1.0.0 Production
TNS for Solaris： Version 9.0.1.0.0 - Production
NLSRTL Version 9.0.1.0.0 - Production
SQL&gt;
9\. 请问如何分辨某个用户是从哪台机器登陆ORACLE的?
SELECT machine ，terminal FROM V$SESSION；
10\. 用什么语句查询字段呢？
desc table_name 可以查询表的结构
select field_name，... from ... 可以查询字段的值
select * from all_tables where table_name like '%'
select * from all_tab_columns where table_name='??'
11\. 怎样得到触发器、过程、函数的创建脚本？
desc user_source
user_triggers
12\. 怎样计算一个表占用的空间的大小？
select owner，table_name，NUM_ROWS，BLOCKS*AAA/1024/1024 "Size M"，EMPTY_BLOCKS，LAST_ANALYZED
from dba_tables
where table_name='XXX'；
Here： AAA is the value of db_block_size；
XXX is the table name you want to check
13\. 如何查看最大会话数？
SELECT * FROM V$PARAMETER WHERE NAME LIKE 'proc%'；
SQL&gt;
SQL&gt; show parameter processes
NAME                    TYPE  VALUE
------------------------------------ ------- ------------------------------
aq_tm_processes            integer  1
db_writer_processes         integer  1
job_queue_processes         integer  4
log_archive_max_processes   integer  1
processes                  integer  200
这里为200个用户。
Select * from v$license；
其中sessions_highwater纪录曾经到达的最大会话数
14\. 如何查看系统被锁的事务时间？
select * from v$locked_object ；
15\. 如何以archivelog的方式运行oracle？
init.ora
log_archive_start = true
RESTART DATABASE
16\. 怎么获取有哪些用户在使用数据库？
select username from v$session；
17\. 数据表中的字段最大数是多少?
表或视图中的最大列数为 1000
18\. 怎样查得数据库的SID ?
select name from v$database；也可以直接查看 init.ora文件
19\. 如何在Oracle服务器上通过SQLPLUS查看本机IP地址 ?
select sys_context('userenv'，'ip_address') from dual；
如果是登陆本机数据库，只能返回127.0.0.1
20\. UNIX 下怎么调整数据库的时间？
su -root
date -u 08010000
21\. 在ORACLE TABLE中如何抓取MEMO类型栏为空的资料记录?
select remark from oms_flowrec where trim(' ' from remark) is not null ；
22\. 如何用BBB表的资料去更新AAA表的数据(有关联的字段)
UPDATE AAA SET BNS_SNM=(SELECT BNS_SNM FROM BBB WHERE AAA.DPT_NO=BBB.DPT_NO) WHERE BBB.DPT_NO IS NOT NULL；
23\. P4计算机安装方法
将SYMCJIT.DLL改为SYSMCJIT.OLD
24\. 如何查询SERVER是不是OPS?
SELECT *  FROM V$OPTION；
如果PARALLEL SERVER=TRUE则有OPS能
25\. 如何查询每个用户的权限?
SELECT *  FROM DBA_SYS_PRIVS；
26\. 如何将表移动表空间?
ALTER TABLE TABLE_NAME MOVE TABLESPACE_NAME；
27\. 如何将索引移动表空间?
ALTER INDEX INDEX_NAME REBUILD TABLESPACE TABLESPACE_NAME；
28\. 在LINUX，UNIX下如何启动DBA STUDIO?
OEMAPP  DBASTUDIO
29\. 查询锁的状况的对象有?
V$LOCK， V$LOCKED_OBJECT， V$SESSION， V$SQLAREA， V$PROCESS ；
查询锁的表的方法：
SELECT S.SID SESSION_ID,S.USERNAME, DECODE(LMODE, '0', 'None',1,'Null',2,'Row-S (SS)',3,'Row-X (SX)'

,4, 'Share' ,5, 'S/Row-X (SSX)',6, 'Exclusive',TO_CHAR(LMODE)) MODE_HELD,

DECODE(REQUEST ,0,'None' ,1, 'Null' ,2, 'Row-S (SS)',3,'Row-X (SX)',4, 'Share'

,5, 'S/Row-X (SSX)' ,6, 'Exclusive', TO_CHAR(REQUEST)) MODE_REQUESTED,

O.OWNER||'.'||O.OBJECT_NAME||' ('||O.OBJECT_TYPE||')', S.TYPE LOCK_TYPE, L.ID1 LOCK_ID1,

L.ID2 LOCK_ID2

FROM V$LOCK L,SYS.DBA_OBJECTS O,V$SESSION S

WHERE L.SID = S.SID AND L.ID1 = O.OBJECT_ID;
30\. 如何解锁?
ALTER SYSTEM KILL SESSION  ‘SID，SERIR#’；
31\. SQLPLUS下如何修改编辑器?
DEFINE _EDITOR="&amp;lt;编辑器的完整路经&gt;"  -- 必须加上双引号来定义新的编辑器，也可以把这个写在$ORACLE_HOME/sqlplus/admin/glogin.sql里面使它永久有效。
32\. ORACLE产生随机数的函数?
DBMS_RANDOM.RANDOM
33\. LINUX下查询磁盘竞争状况命令?
sar  -d
33\. LINUX下查询CPU竞争状况命令?
sar   -r
34\. 查询当前用户对象?
SELECT *  FROM USER_OBJECTS；
SELECT *  FROM DBA_SEGMENTS；
35\. 如何获取错误信息?
SELECT *  FROM  USER_ERRORS；
36\. 如何获取链接状况?
SELECT * FROM DBA_DB_LINKS；
37\. 查看数据库字符状况?
SELECT *  FROM NLS_DATABASE_PARAMETERS；
SELECT *  FROM V$NLS_PARAMETERS；
38\. 查询表空间信息?
SELECT *  FROM  DBA_DATA_FILES；
39\. ORACLE的INTERAL用户要口令?
修改 SQLNET.ORA
SQLNET.AUTHENTICATION_SERVICES=(NTS)
40\. 出现JAVA.EXE的解决办法?
一般是将ORACLEORAHOMEXIHTTPSERVER改成手工启动可以的，X是8或9
41\. 如何给表、列加注释？
SQL&gt;comment on table 表 is '表注释'；
注释已创建。
SQL&gt;comment on column 表.列 is '列注释'；
注释已创建。
SQL&gt; select * from user_tab_comments where comments is not null；
42\. 如何查看各个表空间占用磁盘情况？
SQL&gt; col tablespace format a20
SQL&gt; select
b.file_id         文件ID号，
b.tablespace_name       表空间名，
b.bytes         字节数，
(b.bytes-sum(nvl(a.bytes，0)))   已使用，
sum(nvl(a.bytes，0))     剩余空间，
sum(nvl(a.bytes，0))/(b.bytes)*100   剩余百分比
from dba_free_space a，dba_data_files b
where a.file_id=b.file_id
group by b.tablespace_name，b.file_id，b.bytes
order by b.file_id
43\. 如把ORACLE设置为MTS或专用模式？
#dispatchers="(PROTOCOL=TCP) (SERVICE=SIDXDB)"
加上就是MTS，注释就是专用模式，SID是指你的实例名。
44\. 如何才能得知系统当前的SCN号 ?
select max(ktuxescnw * power(2，32) + ktuxescnb) from x$ktuxe；
45\. 请问如何在ORACLE中取毫秒?
9i之前不支持，9i开始有timestamp。
9i可以用select systimestamp from dual；
**46\. ****如何在字符串里加回车？
** select 'Welcome to visit'||chr(10)||'www.CSDN.NET' from dual ;
**47\. ****中文是如何排序的？
** Oracle9i之前，中文是按照二进制编码进行排序的。
在oracle9i中新增了按照拼音、部首、笔画排序功能。设置NLS_SORT值：
SCHINESE_RADICAL_M 按照部首（第一顺序）、笔划（第二顺序）排序
SCHINESE_STROKE_M 按照笔划（第一顺序）、部首（第二顺序）排序
SCHINESE_PINYIN_M 按照拼音排序
48.  Oracle8i中对象名可以用中文吗？
可以
49\. 如何改变WIN中SQL*Plus启动选项？
SQL*PLUS自身的选项设置我们可以在$ORACLE_HOME/sqlplus/admin/glogin.sql中设置。
50\. 怎样修改oracel数据库的默认日期?
alter session set nls_date_format='yyyymmddhh24miss'；
或可以在init.ora中加上一行 nls_date_format='yyyymmddhh24miss'
51\. 如何将小表放入keep池中?
alter table xxx storage(buffer_pool keep)；
52\. 如何检查是否安装了某个patch?
check that  oraInventory
53\. 如何使select语句使查询结果自动生成序号?
select rownum，COL from table；
54\. 如何知道数据裤中某个表所在的tablespace?
select tablespace_name from user_tables where table_name='TEST'；
select * from user_tables中有个字段TABLESPACE_NAME，（oracle）；
select * from dba_segments where …；
55\. 怎么可以快速做一个和原表一样的备份表?
create table new_table as (select * from old_table)；
55\. 怎么在sqlplus下修改procedure?
select line，trim(text) t from user_source where name =’A’ order by line；
56\. 怎样解除PROCEDURE被意外锁定?
alter system kill session ，把那个session给杀掉，不过你要先查出她的session id 或把该过程重新改个名字就可以了。
57\. SQL Reference是个什么东西？
是一本sql的使用手册，包括语法、函数等等，Oracle官方网站的文档中心提供下载。
58\. 如何查看数据库的状态?
UNIX下
ps -ef | grep ora
Windows下
看服务是否起来；是否可以连上数据库
59\. 请问如何修改一张表的主键?
alter table aaa
drop constraint aaa_key ；
alter table aaa
add constraint aaa_key primary key(a1，b1) ；
60\. 改变数据文件的大小?
用 ALTER DATABASE .... DATAFILE .... ；
手工改变数据文件的大小，对于原来的 数据文件有没有损害。
61\. 怎样查看ORACLE中有哪些程序在运行之中？
查看v$sessions表
62\. 怎么可以看到数据库有多少个tablespace?
select  *   from dba_tablespaces；
**63\. ****如何修改oracle数据库的用户连接数？
**修改initSID.ora，将process加大，重启数据库。
**64\. ****如何查出一条记录的最后更新时间?
** 可以用logminer 察看
**65\. ****如何在PL/SQL中读写文件？
**UTL_FILE包允许用户通过PL/SQL读写操作系统文件。
66\. 怎样把“&amp;”放入一条记录中？
insert into a values (translate ('at{&amp;}t'，'at{}'，'at'))；
67\. EXP　如何加QUERY参数？
EXP USER/PASS FILE=A.DMP TABLES(BSEMPMS)
QUERY='"WHERE EMP_NO=\'S09394\'\"﹔
68\. 关于oracle8i支持简体和繁体的字符集问题？
ZHS16GBK可以支持
69\. Data Guard是什么软件？
就是Standby的换代产品
70\. 如何创建SPFILE?
SQL&gt; connect / as sysdba
SQL&gt; select * from v$version；
SQL&gt; create pfile from spfile；
SQL&gt; CREATE SPFILE FROM PFILE='E：\ora9i\admin\eygle\pfile\init.ora'；
文件已创建。
SQL&gt; CREATE SPFILE='E：\ora9i\database\SPFILEEYGLE.ORA' FROM PFILE='E：\ora9i\admin\eygle\pfile\init.ora'；
文件已创建。
71\. 内核参数的应用?
shmmax
含义：这个设置并不决定究竟Oracle数据库或者操作系统使用多少物理内存，只决定了最多可以使用的内存数目。这个设置也不影响操作系统的内核资源。
设置方法：0.5*物理内存
例子：Set shmsys：shminfo_shmmax=10485760
shmmin
含义：共享内存的最小大小。
设置方法：一般都设置成为1。
例子：Set shmsys：shminfo_shmmin=1：
shmmni
含义：系统中共享内存段的最大个数。
例子：Set shmsys：shminfo_shmmni=100
shmseg
含义：每个用户进程可以使用的最多的共享内存段的数目。
例子：Set shmsys：shminfo_shmseg=20：
semmni
含义：系统中semaphore identifierer的最大个数。
设置方法：把这个变量的值设置为这个系统上的所有Oracle的实例的init.ora中的最大的那个processes的那个值加10。
例子：Set semsys：seminfo_semmni=100
semmns
含义：系统中emaphores的最大个数。
设置方法：这个值可以通过以下方式计算得到：各个Oracle实例的initSID.ora里边的processes的值的总和（除去最大的Processes参数）＋最大的那个Processes×2＋10×Oracle实例的个数。
例子：Set semsys：seminfo_semmns=200
semmsl
含义：一个set中semaphore的最大个数。
设置方法：设置成为10＋所有Oracle实例的InitSID.ora中最大的Processes的值。
例子：Set semsys：seminfo_semmsl=-200
72\. 怎样查看哪些用户拥有SYSDBA、SYSOPER权限？
SQL&gt;conn sys/change_on_install
SQL&gt;select * from V_$PWFILE_USERS；
73\. 如何单独备份一个或多个表？
exp 用户/密码 tables=(表1，…，表2)
74\. 如何单独备份一个或多个用户？
exp system/manager owner=(用户1，用户2，…，用户n) file=导出文件
75\. 如何对CLOB字段进行全文检索？
SELECT * FROM A WHERE dbms_lob.instr(a.a，'K'，1，1)&gt;0；
76\. 如何显示当前连接用户?
SHOW  USER
**77\. ****如何查看数据文件放置的路径?
**col file_name format a50
SQL&gt; select tablespace_name，file_id，bytes/1024/1024，file_name from dba_data_files order by file_id；
78\. 如何查看现有回滚段及其状态?
SQL&gt; col segment format a30
SQL&gt; SELECT SEGMENT_NAME，OWNER，TABLESPACE_NAME，SEGMENT_ID，FILE_ID，STATUS FROM DBA_ROLLBACK_SEGS
79\. 如何改变一个字段初始定义的Check范围？
SQL&gt; alter table xxx drop constraint constraint_name；
之后再创建新约束：
SQL&gt; alter table xxx add constraint constraint_name check()；
80\. Oracle常用系统文件有哪些？
通过以下视图显示这些文件信息：v$database，v$datafile，v$logfile v$controlfile v$parameter；
81\. 内连接INNER JOIN?
select a.* from bsempms a，bsdptms b where a.dpt_no=b.dpt_no；
82\. 如何外连接?
select a.* from bsempms a，bsdptms b where a.dpt_no=b.dpt_no(+)；
select a.* from bsempms a，bsdptms b wherea.dpt_no(+)=b.dpt_no；
83\. 如何执行脚本SQL文件?
SQL&gt;$PATH/filename.sql；
84\. 如何快速清空一个大表?
SQL&gt;truncate table table_name；
85\. 如何查有多少个数据库实例?
SQL&gt;SELECT * FROM V$INSTANCE；
86\. 如何查询数据库有多少表?
SQL&gt;select * from all_tables；
87\. 如何测试SQL语句执行所用的时间?
SQL&gt;set timing on；
SQL&gt;select * from tablename；
88\. CHR()的反函数?
ASCII()
SELECT CHAR(65) FROM DUAL；
SELECT ASCII('A') FROM DUAL；
89\. 字符串的连接
SELECT CONCAT(COL1，COL2) FROM TABLE；
SELECT COL1||COL2 FROM TABLE；
90\. 怎么把select出来的结果导到一个文本文件中？
SQL&gt;SPOOL C：\ABCD.TXT；
SQL&gt;select * from table；
SQL &gt;spool off；
91\. 怎样估算SQL执行的I/O数 ?
SQL&gt;SET AUTOTRACE ON ；
SQL&gt;SELECT * FROM TABLE；
或
SQL&gt;SELECT *  FROM  v$filestat；可以查看IO数
92\. 如何在sqlplus下改变字段大小?
alter table table_name modify (field_name varchar2(100))；
改大行，改小不行（除非都是空的）
93\. 如何查询某天的数据?
select * from table_name where trunc(日期字段)＝to_date('2003-05-02'，'yyyy-mm-dd')；
**94\. sql ****语句如何插入全年日期？
**create table BSYEAR (d date)；
insert into BSYEAR
select to_date('20030101'，'yyyymmdd')+rownum-1
from all_objects
where rownum &amp;lt;= to_char(to_date('20031231'，'yyyymmdd')，'ddd')；
95\. 如果修改表名?
alter table old_table_name rename to new_table_name；
96\. 如何取得命令的返回状态值？
sqlcode=0
97\. 如何知道用户拥有的权限?
SELECT * FROM dba_sys_privs ；
98\. 从网上下载的ORACLE9I与市场上卖的标准版有什么区别？
从功能上说没有区别，只不过oracle公司有明文规定；从网站上下载的oracle产品不得用于商业用途，否则侵权。
99\. 怎样判断数据库是运行在归档模式下还是运行在非归档模式下？
进入dbastudio，历程--〉数据库---〉归档查看。
100\. sql&gt;startup pfile和ifile，spfile有什么区别？
pfile就是Oracle传统的初始化参数文件，文本格式的；
ifile类似于c语言里的include，用于把另一个文件引入；
spfile是9i里新增的并且是默认的参数文件，二进制格式；
startup后应该只可接pfile。
<!--nextpage-->
101\. 如何搜索出前N条记录？
SELECT * FROM empLOYEE WHERE ROWNUM &amp;lt; n
ORDER BY empno；
102\. 如何知道机器上的Oracle支持多少并发用户数?
SQL&gt;conn internal  ；
SQL&gt;show parameter processes ；
103\. db_block_size可以修改吗?
一般不可以﹐不建议这样做的。
104\. 如何统计两个表的记录总数?
select (select count(id) from aa)+(select count(id) from bb) 总数 from dual；
105\. 怎样用Sql语句实现查找一列中第N大值？
select * from
(select t.*，dense_rank() over (order by sal) rank from employee)
where rank = N；
106\. 如何在给现有的日期加上2年？(
select add_months(sysdate，24) from dual；
107\. USED_UBLK为负值表示什么意思?
It is "harmless"。
**108\. Connect string****是指什么?
** 应该是tnsnames.ora中的服务名后面的内容
109\. 怎样扩大REDO LOG的大小？
建立一个临时的redolog组，然后切换日志，删除以前的日志，建立新的日志。
110\. tablespace 是否不能大于4G?
没有限制。
111\. 返回大于等于N的最小整数值?
SELECT CEIL(N)  FROM DUAL；
112\. 返回小于等于N的最小整数值?
SELECT FLOOR(N)  FROM DUAL；
113\. 返回当前月的最后一天?
SELECT LAST_DAY(SYSDATE)  FROM DUAL；
114\. 如何不同用户间数据导入?
IMP  SYSTEM/MANAGER  FILE=AA.DMP  FROMUSER=USER_OLD   TOUSER=USER_NEW  ROWS=Y  INDEXES=Y ；
115\. 如何找数据库表的主键字段的名称?
SQL&gt;SELECT * FROM user_constraints WHERE CONSTRAINT_TYPE='P' and   table_name='TABLE_NAME'；
116\. 两个结果集互加的函数?
SQL&gt;SELECT * FROM BSEMPMS_OLD INTERSECT SELECT * FROM BSEMPMS_NEW；
SQL&gt;SELECT * FROM BSEMPMS_OLD UNION SELECT * FROM BSEMPMS_NEW
SQL&gt;SELECT * FROM BSEMPMS_OLD UNION ALL SELECT * FROM BSEMPMS_NEW；
117\. 两个结果集互减的函数?
SQL&gt;SELECT * FROM BSEMPMS_OLD MINUS SELECT * FROM BSEMPMS_NEW；
118\. 如何配置Sequence?
建sequence seq_custid
create sequence seq_custid start 1 incrememt by 1；
建表时：
create table cust
{ cust_id smallint not null，
...}
insert 时：
insert into table cust
values( seq_cust.nextval，...)
日期的各部分的常用的的写法
119\. 取时间点的年份的写法：
SELECT TO_CHAR(SYSDATE，'YYYY') FROM DUAL；
120\. 取时间点的月份的写法：
SELECT TO_CHAR(SYSDATE，'MM') FROM DUAL；
121\. 取时间点的日的写法：
SELECT TO_CHAR(SYSDATE，'DD') FROM DUAL；
122\. 取时间点的时的写法：
SELECT TO_CHAR(SYSDATE，'HH24') FROM DUAL；
123\. 取时间点的分的写法：
SELECT TO_CHAR(SYSDATE，'MI') FROM DUAL；
124\. 取时间点的秒的写法：
SELECT TO_CHAR(SYSDATE，'SS') FROM DUAL；
125\. 取时间点的日期的写法：
SELECT TRUNC(SYSDATE) FROM DUAL；
126\. 取时间点的时间的写法：
SELECT TO_CHAR(SYSDATE，'HH24：MI：SS') FROM DUAL；
127\. 日期，时间形态变为字符形态：
SELECT TO_CHAR(SYSDATE) FROM DUAL；
128\. 将字符串转换成日期或时间形态：
SELECT TO_DATE('2003/08/01') FROM DUAL；
129\. 返回参数的星期几的写法：
SELECT TO_CHAR(SYSDATE，'D') FROM DUAL；
130\. 返回参数一年中的第几天的写法：
SELECT TO_CHAR(SYSDATE，'DDD') FROM DUAL；
131\. 返回午夜和参数中指定的时间值之间的秒数的写法：
SELECT TO_CHAR(SYSDATE，'SSSSS') FROM DUAL；
132\. 返回参数中一年的第几周的写法：
SELECT TO_CHAR(SYSDATE，'WW') FROM DUAL；
虚拟字段
133\. CURRVAL 和 nextval
为表创建序列
CREATE SEQUENCE EMPSEQ ... ；
SELECT empseq.currval FROM DUAL ；
自动插入序列的数值
INSERT INTO emp
VALUES (empseq.nextval, 'LEWIS', 'CLERK',
7902, SYSDATE, 1200, NULL, 20) ；
134\. ROWNUM
按设定排序的行的序号
SELECT * FROM emp WHERE ROWNUM &lt;=&amp;lt;
135\. ROWID
返回行的物理地址
SELECT ROWID, ename FROM emp  WHERE deptno = 20 ；
136\. 将N秒转换为时分秒格式？
set serverout on
declare
N number ：= 1000000；
ret varchar2(100)；
begin
ret ：= trunc(n/3600) || '小时' || to_char(to_date(mod(n,3600),'sssss'),'fmmi"分   "ss"秒"') ；
dbms_output.put_line(ret)；
end；
137\. 如何查询做比较大的排序的进程？
SELECT b.tablespace, b.segfile#, b.segblk#, b.blocks, a.sid, a.serial#, a.username, a.osuser, a.status
FROM v$session a,v$sort_usage b
WHERE a.saddr = b.session_addr
ORDER BY b.tablespace, b.segfile#, b.segblk#, b.blocks ；
138\. 如何查询做比较大的排序的进程的SQL语句？
select /*+ ORDERED */ sql_text from v$sqltext a
where a.hash_value = (
select sql_hash_value from v$session b
where b.sid = &amp;sid and b.serial# = &amp;serial)
order by piece asc ；
139\. 如何查找重复记录？
SELECT * FROM TABLE_NAME
WHERE ROWID!=(SELECT MAX(ROWID) FROM TABLE_NAME D
WHERE TABLE_NAME.COL1=D.COL1 AND TABLE_NAME.COL2=D.COL2)；
**140\. ****如何删除重复记录？
** DELETE FROM TABLE_NAME
WHERE ROWID!=(SELECT MAX(ROWID) FROM TABLE_NAME D
WHERE TABLE_NAME.COL1=D.COL1 AND TABLE_NAME.COL2=D.COL2)；
141\. 如何快速编译所有视图？
SQL &gt;SPOOL VIEW1.SQL
SQL &gt;SELECT ‘ALTER VIEW ‘||TNAME||’
COMPILE；’ FROM TAB；
SQL &gt;SPOOL OFF
然后执行VIEW1.SQL即可。
SQL &gt;VIEW1.SQL；
142\. ORA-01555 SNAPSHOT TOO OLD的解决办法
增加MINEXTENTS的值，增加区的大小，设置一个高的OPTIMAL值。
143\. 事务要求的回滚段空间不够，表现为表空间用满（ORA-01560错误），回滚段扩展到达参数      MAXEXTENTS的值（ORA-01628）的解决办法。
向回滚段表空间添加文件或使已有的文件变大；增加MAXEXTENTS的值。
144\. 如何加密ORACLE的存储过程？
下列存储过程内容放在AA.SQL文件中
create or replace procedure testCCB(i in number) as
begin
dbms_output.put_line('输入参数是'||to_char(i))；
end；
SQL&gt;wrap iname=a.sql；
PL/SQL Wrapper： Release 8.1.7.0.0 - Production on Tue Nov 27 22：26：48 2001
Copyright (c) Oracle Corporation 1993, 2000.  All Rights Reserved。
Processing AA.sql to AA.plb
运行AA.plb
SQL&gt; @AA.plb ；
145\. 如何监控事例的等待？
select event,sum(decode(wait_Time,0,0,1)) "rev",
sum(decode(wait_Time,0,1,0)) "Curr",count(*) "Tot"
from v$session_Wait
group by event order by 4；
146\. 如何回滚段的争用情况？
select name, waits, gets, waits/gets "Ratio"
from v$rollstat C, v$rollname D
where C.usn = D.usn；
147\. 如何监控表空间的 I/O 比例？
select B.tablespace_name name, B.file_name "ile", A.phyrds pyr, A.phyblkrd pbr, A.phywrts pyw, A.phyblkwrt pbw
from v$filestat A, dba_data_files B
where A.file# = B.file_id
order by B.tablespace_name；
148\. 如何监控文件系统的 I/O 比例？
select substr(C.file#,1,2) "#", substr(C.name,1,30) "Name", C.status, C.bytes, D.phyrds, D.phywrts
from v$datafile C, v$filestat D
where C.file# = D.file#；
149\. 如何在某个用户下找所有的索引？
select user_indexes.table_name, user_indexes.index_name,uniqueness, column_name
from user_ind_columns, user_indexes
where user_ind_columns.index_name = user_indexes.index_name
and user_ind_columns.table_name = user_indexes.table_name
order by user_indexes.table_type, user_indexes.table_name,
user_indexes.index_name, column_position；
150\. 如何监控 SGA 的命中率？
select a.value + b.value "logical_reads", c.value "phys_reads",
round(100 * ((a.value+b.value)-c.value) / (a.value+b.value)) "BUFFER HIT RATIO"
from v$sysstat a, v$sysstat b, v$sysstat c
where a.statistic# = 38 and b.statistic# = 39
and c.statistic# = 40；
151\. 如何监控 SGA 中字典缓冲区的命中率？
select parameter, gets,Getmisses , getmisses/(gets+getmisses)*100 "miss ratio",
(1-(sum(getmisses)/ (sum(gets)+sum(getmisses))))*100 "Hit ratio"
from v$rowcache
where gets+getmisses &amp;lt;&gt;0
group by parameter, gets, getmisses；
152\. 如何监控 SGA 中共享缓存区的命中率，应该小于1% ？
select sum(pins) "Total Pins", sum(reloads) "Total Reloads",
sum(reloads)/sum(pins) *100 libcache
from v$librarycache；
select sum(pinhits-reloads)/sum(pins) "hit radio",sum(reloads)/sum(pins)    "reload percent"
from v$librarycache；
153\. 如何显示所有数据库对象的类别和大小？
select count(name) num_instances ,type ,sum(source_size) source_size ,
sum(parsed_size) parsed_size ,sum(code_size) code_size ,sum(error_size)    error_size,
sum(source_size) +sum(parsed_size) +sum(code_size) +sum(error_size)    size_required
from dba_object_size
group by type order by 2；
154\. 监控 SGA 中重做日志缓存区的命中率，应该小于1%
SELECT name, gets, misses, immediate_gets, immediate_misses,
Decode(gets,0,0,misses/gets*100) ratio1,
Decode(immediate_gets+immediate_misses,0,0,
immediate_misses/(immediate_gets+immediate_misses)*100) ratio2
FROM v$latch WHERE name IN ('redo allocation', 'redo copy')；
155\. 监控内存和硬盘的排序比率，最好使它小于 .10，增加 sort_area_size
SELECT name, value FROM v$sysstat WHERE name IN ('sorts (memory)', 'sorts(disk)')；
156\. 如何监控当前数据库谁在运行什么SQL语句？
SELECT osuser, username, sql_text from v$session a, v$sqltext b
where a.sql_address =b.address order by address, piece；
157\. 如何监控字典缓冲区？
SELECT (SUM(PINS - RELOADS)) / SUM(PINS) "LIB CACHE" FROM V$LIBRARYCACHE；
SELECT (SUM(GETS - GETMISSES - USAGE - FIXED)) / SUM(GETS) "ROW CACHE" FROM    V$ROWCACHE；
SELECT SUM(PINS) "EXECUTIONS", SUM(RELOADS) "CACHE MISSES WHILE EXECUTING" FROM    V$LIBRARYCACHE；
后者除以前者,此比率小于1%,接近0%为好。
SELECT SUM(GETS) "DICTIONARY GETS",SUM(GETMISSES) "DICTIONARY CACHE GET MISSES"
FROM V$ROWCACHE
158\. 监控 MTS
select busy/(busy+idle) "shared servers busy" from v$dispatcher；
此值大于0.5时，参数需加大
select sum(wait)/sum(totalq) "ispatcher waits" from v$queue where type='dispatcher'；
select count(*) from v$dispatcher；
select servers_highwater from v$mts；
servers_highwater接近mts_max_servers时，参数需加大
159\. 如何知道当前用户的ID号?
SQL&gt;SHOW USER；
或    SQL&gt;select user from dual；
160\. 如何查看碎片程度高的表?
SELECT segment_name table_name , COUNT(*) extents
FROM dba_segments WHERE owner NOT IN ('SYS', 'SYSTEM') GROUP BY segment_name
HAVING COUNT(*) = (SELECT MAX( COUNT(*) ) FROM dba_segments GROUP BY segment_name)；
162\. 如何知道表在表空间中的存储情况?
select segment_name,sum(bytes),count(*) ext_quan from dba_extents where
tablespace_name='&amp;tablespace_name' and segment_type='TABLE' group by tablespace_name,segment_name；
163\. 如何知道索引在表空间中的存储情况?
select segment_name,count(*) from dba_extents where segment_type='INDEX' and owner='&amp;wner'
group by segment_name；
164、如何知道使用CPU多的用户session?
11是cpu used by this session
select a.sid,spid,status,substr(a.program,1,40) prog,a.terminal,osuser,value/60/100 value
from v$session a,v$process b,v$sesstat c
where c.statistic#=11 and c.sid=a.sid and a.paddr=b.addr order by value desc；
165\. 如何知道监听器日志文件?
以8I为例
$ORACLE_HOME/NETWORK/LOG/LISTENER.LOG
166\. 如何知道监听器参数文件?
以8I为例
$ORACLE_HOME/NETWORK/ADMIN/LISTENER.ORA
167\. 如何知道TNS 连接文件?
以8I为例
$ORACLE_HOME/NETWORK/ADMIN/TNSNAMES.ORA
168\. 如何知道Sql*Net 环境文件?
以8I为例
$ORACLE_HOME/NETWORK/ADMIN/SQLNET.ORA
169\. 如何知道警告日志文件?
以8I为例
$ORACLE_HOME/ADMIN/SID/BDUMP/SIDALRT.LOG
170\. 如何知道基本结构?
以8I为例
$ORACLE_HOME/RDBMS/ADMIN/STANDARD.SQL
171\. 如何知道建立数据字典视图?
以8I为例
$ORACLE_HOME/RDBMS/ADMIN/CATALOG.SQL
172\. 如何知道建立审计用数据字典视图?
以8I为例
$ORACLE_HOME/RDBMS/ADMIN/CATAUDIT.SQL
173\. 如何知道建立快照用数据字典视图?
以8I为例
$ORACLE_HOME/RDBMS/ADMIN/CATSNAP.SQL
SQL语句的优化方法
174\. /*+ALL_ROWS*/
表明对语句块选择基于开销的优化方法，并获得最佳吞吐量，使资源消耗最小化。
例如：
SELECT /*+ALL+_ROWS*/ EMP_NO，EMP_NAM，DAT_IN FROM BSEMPMS WHERE EMP_NO='CCBZZP'；
175\. /*+FIRST_ROWS*/
表明对语句块选择基于开销的优化方法，并获得最佳响应时间，使资源消耗最小化。
例如：
SELECT /*+FIRST_ROWS*/ EMP_NO，EMP_NAM，DAT_IN FROM BSEMPMS WHERE    EMP_NO='CCBZZP'；
176\. /*+CHOOSE*/
表明如果数据字典中有访问表的统计信息，将基于开销的优化方法，并获得最佳的吞吐量；
表明如果数据字典中没有访问表的统计信息，将基于规则开销的优化方法；
例如：
SELECT /*+CHOOSE*/ EMP_NO，EMP_NAM，DAT_IN FROM BSEMPMS WHERE EMP_NO='CCBZZP'；
177\. /*+RULE*/
表明对语句块选择基于规则的优化方法。
例如：
SELECT /*+ RULE */ EMP_NO，EMP_NAM，DAT_IN FROM BSEMPMS WHERE EMP_NO='CCBZZP'；
178\. /*+FULL(TABLE)*/
表明对表选择全局扫描的方法。
例如：
SELECT /*+FULL(A)*/ EMP_NO，EMP_NAM FROM BSEMPMS A WHERE EMP_NO='CCBZZP'；
179\. /*+ROWID(TABLE)*/
提示明确表明对指定表根据ROWID进行访问。
例如：
SELECT /*+ROWID(BSEMPMS)*/ * FROM BSEMPMS WHERE ROWID&gt;='AAAAAAAAAAAAAA'
AND EMP_NO='CCBZZP'；
180\. /*+CLUSTER(TABLE)*/
提示明确表明对指定表选择簇扫描的访问方法，它只对簇对象有效。
例如：
SELECT  /*+CLUSTER */ BSEMPMS.EMP_NO，DPT_NO FROM BSEMPMS，BSDPTMS
WHERE DPT_NO='TEC304' AND BSEMPMS.DPT_NO=BSDPTMS.DPT_NO；
181\. /*+INDEX(TABLE INDEX_NAME)*/
表明对表选择索引的扫描方法。
例如：
SELECT /*+INDEX(BSEMPMS SEX_INDEX) USE SEX_INDEX BECAUSE THERE ARE FEWMALE    BSEMPMS */  FROM BSEMPMS WHERE SEX='M'；
182\. /*+INDEX_ASC(TABLE INDEX_NAME)*/
表明对表选择索引升序的扫描方法。
例如：
SELECT /*+INDEX_ASC(BSEMPMS PK_BSEMPMS) */  FROM BSEMPMS WHERE DPT_NO='CCBZZP'；
183\. /*+INDEX_COMBINE*/
为指定表选择位图访问路经，如果INDEX_COMBINE中没有提供作为参数的索引，将选择出位图索引的
布尔组合方式。
例如：
SELECT /*+INDEX_COMBINE(BSEMPMS SAL_BMI HIREDATE_BMI)*/ * FROM BSEMPMS
WHERE SAL&amp;lt;5000000 AND HIREDATE&amp;lt;SYSDATE；
184\. /*+INDEX_JOIN(TABLE INDEX_NAME)*/
提示明确命令优化器使用索引作为访问路径。
例如：
SELECT /*+INDEX_JOIN(BSEMPMS SAL_HMI HIREDATE_BMI)*/ SAL，HIREDATE
FROM BSEMPMS WHERE SAL&amp;lt;60000；
185\. /*+INDEX_DESC(TABLE INDEX_NAME)*/
表明对表选择索引降序的扫描方法。
例如：
SELECT /*+INDEX_DESC(BSEMPMS PK_BSEMPMS) */  FROM BSEMPMS WHERE    DPT_NO='CCBZZP'；
186\. /*+INDEX_FFS(TABLE INDEX_NAME)*/
对指定的表执行快速全索引扫描，而不是全表扫描的办法。
例如：
SELECT /*+INDEX_FFS(BSEMPMS IN_EMPNAM)*/ * FROM BSEMPMS WHERE DPT_NO='TEC305'；
187\. /*+ADD_EQUAL TABLE INDEX_NAM1，INDEX_NAM2，...*/
提示明确进行执行规划的选择，将几个单列索引的扫描合起来。
例如：
SELECT /*+INDEX_FFS(BSEMPMS IN_DPTNO，IN_EMPNO，IN_SEX)*/ * FROM BSEMPMS WHERE EMP_NO='CCBZZP' AND DPT_NO='TDC306'；
188\. /*+USE_CONCAT*/
对查询中的WHERE后面的OR条件进行转换为UNION ALL的组合查询。
例如：
SELECT /*+USE_CONCAT*/ * FROM BSEMPMS WHERE DPT_NO='TDC506' AND SEX='M'；
189\. /*+NO_EXPAND*/
对于WHERE后面的OR 或者IN-LIST的查询语句，NO_EXPAND将阻止其基于优化器对其进行扩展。
例如：
SELECT /*+NO_EXPAND*/ * FROM BSEMPMS WHERE  DPT_NO='TDC506' AND SEX='M'；
190\. /*+NOWRITE*/
禁止对查询块的查询重写操作。
191\. /*+REWRITE*/
可以将视图作为参数。
192\. /*+MERGE(TABLE)*/
能够对视图的各个查询进行相应的合并。
例如：
SELECT /*+MERGE(V) */ A.EMP_NO，A.EMP_NAM，B.DPT_NO FROM BSEMPMS A (SELET DPT_NO，AVG(SAL) AS AVG_SAL FROM BSEMPMS B GROUP BY DPT_NO) V WHERE A.DPT_NO=V.DPT_NO AND A.SAL&gt;V.AVG_SAL；
193\. /*+NO_MERGE(TABLE)*/
对于有可合并的视图不再合并。
例如：
SELECT /*+NO_MERGE(V) */ A.EMP_NO，A.EMP_NAM，B.DPT_NO FROM BSEMPMS A (SELET DPT_NO，AVG(SAL) AS AVG_SAL FROM BSEMPMS B GROUP BY DPT_NO) V WHERE A.DPT_NO=V.DPT_NO AND A.SAL&gt;V.AVG_SAL；
194\. /*+ORDERED*/
根据表出现在FROM中的顺序，ORDERED使ORACLE依此顺序对其连接。
例如：
SELECT /*+ORDERED*/ A.COL1，B.COL2，C.COL3 FROM TABLE1 A，TABLE2 B，TABLE3 C WHERE A.COL1=B.COL1 AND B.COL1=C.COL1；
195\. /*+USE_NL(TABLE)*/
将指定表与嵌套的连接的行源进行连接，并把指定表作为内部表。
例如：
SELECT /*+ORDERED USE_NL(BSEMPMS)*/ BSDPTMS.DPT_NO，BSEMPMS.EMP_NO，BSEMPMS.EMP_NAM FROM BSEMPMS，BSDPTMS WHERE BSEMPMS.DPT_NO=BSDPTMS.DPT_NO；
196\. /*+USE_MERGE(TABLE)*/
将指定的表与其它行源通过合并排序连接方式连接起来。
例如：
SELECT /*+USE_MERGE(BSEMPMS，BSDPTMS)*/ * FROM BSEMPMS，BSDPTMS WHERE BSEMPMS.DPT_NO=BSDPTMS.DPT_NO；
197\. /*+USE_HASH(TABLE)*/
将指定的表与其它行源通过哈希连接方式连接起来。
例如：
SELECT /*+USE_HASH(BSEMPMS，BSDPTMS)*/ * FROM BSEMPMS，BSDPTMS WHERE BSEMPMS.DPT_NO=BSDPTMS.DPT_NO；
198\. /*+DRIVING_SITE(TABLE)*/
强制与ORACLE所选择的位置不同的表进行查询执行。
例如：
SELECT /*+DRIVING_SITE(DEPT)*/ * FROM BSEMPMS，DEPT@BSDPTMS WHERE BSEMPMS.DPT_NO=DEPT.DPT_NO；199\. /*+LEADING(TABLE)*/
将指定的表作为连接次序中的首表。

200\. /*+CACHE(TABLE)*/
当进行全表扫描时，CACHE提示能够将表的检索块放置在缓冲区缓存中最近最少列表LRU的最近使用端
例如：
SELECT /*+FULL(BSEMPMS) CAHE(BSEMPMS) */ EMP_NAM FROM  BSEMPMS；
<!--nextpage-->
201\. /*+NOCACHE(TABLE)*/
当进行全表扫描时，CACHE提示能够将表的检索块放置在缓冲区缓存中最近最少列表LRU的最近使用端
例如：
SELECT /*+FULL(BSEMPMS) NOCAHE(BSEMPMS) */ EMP_NAM FROM  BSEMPMS；
202\. /*+APPEND*/
直接插入到表的最后，可以提高速度。
insert /*+append*/ into test1  select * from test4 ；
203\. /*+NOAPPEND*/
通过在插入语句生存期内停止并行模式来启动常规插入。
insert /*+noappend*/ into test1  select * from test4 ；
ORACLE内部函数
204\. 如何得到字符串的第一个字符的ASCII值?
ASCII(CHAR)
SELECT ASCII('ABCDE') FROM DUAL；
结果： 65
205\. 如何得到数值N指定的字符?
CHR(N)
SELECT CHR(68) FROM DUAL；
结果： D
206\. 如何连接两个字符串?
CONCAT(CHAR1，CHAR2)
SELECT CONCAT('ABC'，'DEFGH') FROM DUAL；
结果： 'ABCDEFGH'
207\. 如何将列中的数值代替为字符串?
DECODE(CHAR，N1，CHAR1，N2，CHAR2...)
SELECT DECODE(DAY，1，'SUN'，2，'MON') FROM DUAL；
208\. INITCAP(CHAR)
将字符串CHAR的第一个字符为大写，其余为小写。
SELECT INITCAP('ABCDE') FROM DUAL；
209\. LENGTH(CHAR)
取一字符串CHAR的长度。
SELECT LENGTH('ABCDE') FROM DUAL；
210\. LOWER(CHAR)
将字符串CHAR全部变为小写。
SELECT LOWER('ABCDE') FROM DUAL；
211\. LPAD(CHAR1，N，CHAR2)
用字符串CHAR2包括的字符左填CHAR1，使其长度为N。
SELECT LPAD('ABCDEFG'，10'123') FROM DUAL；
结果： '123ABCDEFG'
212\. LTRIM(CHAR，SET)
从字符串CHAR的左边移去字符串SET中的字符，直到第一个不是SET中的字符为止。
SELECT ('CDEFG'，'CD') FROM DUAL；
结果： 'EFG'
213\. NLS_INITCAP(CHAR)
取字符CHAR的第一个字符大写，其余字符为小写。
SELECT NLS_INITCAP('ABCDE') FROM DUAL；
214\. NLS_LOWER(CHAR)
将字符串CHAR包括的字符全部小写。
SELECT NLS_LOWER('AAAA') FROM DUAL；
215\. NLS_UPPER(CHAR)
将字符串CHAR包括的字符全部大写。
SELECT NLS_UPPER('AAAA') FROM DUAL；
216\. REPLACE(CHAR1，CHAR2，CHAR3)
用字符串CHAR3代替每一个列值为CHAR2的列，其结果放在CHAR1中。
SELECT REPLACE(EMP_NO，'123'，'456') FROM DUAL；
217\. RPAD(CHAR1，N，CHAR2)
用字符串CHAR2右填字符串CHAR1，使其长度为N。
SELECT RPAD('234'，8，'0') FROM DUAL；
218\. RTRIM(CHAR，SET)
移去字符串CHAR右边的字符串SET中的字符，直到最后一个不是SET中的字符为止。
SELECT RTRIM('ABCDE'，'DE') FROM DUAL；
219\. SUBSTR(CHAR，M，N)
得到字符串CHAR从M处开始的N个字符. 双字节字符，一个汉字为一个字符的。
SELECT SUBSTR('ABCDE'，2，3) FROM DUAL；
220\. SUBSTRB(CHAR，M，N)
得到字符串CHAR从M处开始的N个字符. 双字节字符，一个汉字为二个字符的。
SELECT SUBSTRB('ABCDE'，2，3) FROM DUAL；
221\. TRANSLATE(CHAR1，CHAR2，CHAR3)
将CHAR1中的CHAR2的部分用CHAR3代替。
SELECT TRANSLATE('ABCDEFGH'，'DE'，'MN') FROM  DUAL；
222\. UPPER(CHAR)
将字符串CHAR全部为大写。
223\. ADD_MONTHS(D，N)
将N个月增加到D日期。
SELECT ADD_MONTHS(SYSDATE，5) FROM DUAL；
224\. LAST_DAY(D)
得到包含D日期的月份的最后的一天的日期。
SELECT LAST_DAY(SYSDATE) FROM DUAL；
225\. MONTH_BETWEEN(D1，D2)
得到两个日期之间的月数。
SELECT MONTH_BETWEEN(D1，D2) FROM DUAL；
226\. NEXT_DAY(D，CHAR)
得到比日期D晚的由CHAR命名的第一个周日的日期。
SELECT NEXT_DAY(TO_DATE('2003/09/20')，'SATDAY') FROM DUAL；
227\. ROUNT(D，FMT)
得到按指定的模式FMT舍入到的最进的日期。
SELECT ROUNT('2003/09/20'，MONTH) FROM DUAL；
228\. SYSDATE
得到当前系统的日期和时间。
SELECT SYSDATE FROM DUAL；
229\. TO_CHAR(D，FMT)
将日期D转换为FMT的字符串。
SELECT TO_CHAR(SYSDATE，'YYYY/MM/DD') FROM DUAL；
230\. TO_DATE(CHAR，FMT)
将字符串CHAR按FMT的格式转换为日期。
SELECT TO_DATE('2003/09/20'，'YYYY/MM/DD') FROM DUAL；
231\. ABS(N)
得到N的绝对值。
SELECT ABS(-6) FROM DUAL；
232\. CEIL(N)
得到大于或等于N的最大整数。
SELECT CEIL(5.6) FROM DUAL；
233\. COS(N)
得到N的余弦值。
SELECT COS(1) FROM DUAL；
234\. SIN(N)
得到N的正弦值。
SELECT SIN(1) FROM DUAL；
235\. COSH(N)
得到N的双曲余弦值。
SELECT COSH(1) FROM DUAL；
236\. EXP(N)
得到N的E的N次幂。
SELECT EXP(1) FROM DUAL；
237\. FLOOR(N)
得到小于或等于N的最小整数。
SELECT FLOOR(5.6) FROM DUAL；
238\. LN(N)
得到N的自然对数。
SELECT LN(1) FROM DUAL；
239\. LOG(M，N)
得到以M为底N的对数。
SELECT LOG(2，8) FROM DUAL；
240\. MOD(M，N)
得到M除以N的余数。
SELECT MOD(100，7) FROM DUAL；
241\. POWER(M，N)
得到M的N幂。
SELECT POWER(4，3) FROM DUAL；
242\. ROUND(N，M)
将N舍入到小数点后M位。
SELECT (78.87653，2) FROM DUAL；
243\. SIGN(N)
当N&amp;lt;0时，得到-1；
当N&gt;0时，得到1；
当N=0时，得到0；
SELECT SIGN(99) FROM DUAL；
244\. SINH(N)
得到N的双曲正弦值。
SELECT SINH(1) FROM DUAL；
245\. SORT(N)
得到N的平方根，N&gt;=0
SELECT SORT(9) FROM DUAL；
246\. TAN(N)
得到N的正切值。
SELECT TAN(0) FROM DUAL；
247\. TANH(N)
得到N的双曲正切值。
SELECT TANH(0) FROM DUAL；
248\. TRUNC(N，M)
得到在M位截断的N的值。
SELECT TRUNC(7.7788，2) FROM DUAL；
249\. COUNT()
计算满足条件的记录数。
SELECT COUNT(*) FROM TABLE1 WHERE COL1='AAA'；
250\. MAX()
对指定的列求最大值。
SELECT MAX(COL1) FROM TABLE1；
251\. MIN()
对指定的列求最小值。
SELECT MIN(COL1) FROM TABLE1；
252\. AVG()
对指定的列求平均值。
SELECT AVG(COL1) FROM TABLE1；
253\. SUM()
计算列的和。
SELECT SUM(COL1) FROM DUAL；
254\. TO_NUMBER(CHAR)
将字符转换为数值。
SELECT TO_NUMBER('999') FROM DUAL；
255\. CHARTOROWID(CHAR)
将包含外部语法ROWID的CHAR或VARCHAR2数值转换为内部的二进制语法，参数CHAR必须是包含外部语法的ROWID的18字符的字符串。
SELECT NAME FROM BSEMPMS WHERE ROWID=CHARTOROWID('AAAAfZAABAAACp8AAO')；
NAME ：  LEIXUE
256\. CONVERT(CHAR，DEST_CHAR_SET，SOURCE_CHAR_SET)
CONVERT将字符串CHAR中的字符从SOURCE_CHAR_SET标识的字符集转换为由DEST_CHAR_SET标识的字符集
SELECT CONVERT('GroB'，'US7ASCII'，'WE8HP') 'CONVERSION' FROM PUBS；
CONVERSION：  Gross
257\. HEXTORAW(CHAR)
将包含十六进制的CHAR转换为一个RAW数值。
INSERT INTO BSEMPMS(RAW_COLUMN) SELECT HEXTORAW('7D') FROM TEST；
258\. RAWTOHEX(RAW)
将RAW数值转换为一个包含十六进制的CHAR值。
SELECT RAWTOHEX(RAW_COLUMN) 'CONVERSION' FROM BSEMPMS；
CONVERSION：  7D
259\. ROWIDTOCHAR(ROWID)
将一个ROWID数值转换为VARCHAR2数据类型。
SELECT ROWID FROM BSEMPMS WHERE ROWIDTOCHAR(ROWID) LIKE '%BR1AAB%'；
260\. TO_MULTI_BYTE(CHAR)
将CHAR中的单字节转换为等价的多字节字符。
SELECT TO_MULTI_BYTE('ASFDFD') FROM TEST；
261\. TO_SINGLE_BYTE(CHAR)
将CHAR中的多字节转换为等价的单字节字符。
SELECT TO_SINGLE_BYTE('ASFDFD') FROM TEST；
262\. TRANSLATE USING(TEXT USING {CHAR_CS|NCHAR_CS})
将文本TEXT按照指定的转换方式转换成数据库字符集和民族字符集。
其中TEXT是待转换的。
USING CHAR_CS参数转换TEXT为数据库字符集，输出数据类型是VARCHAR2。
USING NCHAR_CS参数转换TEXT为数据库字符集，输出数据类型是NVARCHAR2。
CREATE TABLE TEST(CHAR_COL CHAR(20)，NCHAR_COL NCHAR(20))；
INSERT INTO TEST VALUES('HI，N'BYE')；
SELECT * FROM TEST；
263\. DUMP(EXPR，RETURN_FORMAT，START_POSITION，LENGTH)
返回一个包含数据类型代码，字节长度等内部表示信息的VARCHAR2值.返回结果是当前数据库字符集，数据类型按照下面规定的内部数据类型的编码作为一个数字进行返回：
代码       数据类型
0          VARCHAR2
1          NUMBER
8          LONG
12         DATE
23         RAW
24         LONG RAW
69         ROWID
96         CHAR
106        MSSLABEL
参数RETUEN_FORMAT指定按照下面的基数表示返回的数值。
RETURN_FORMAT   RESULT
8              8进制
10             10进制
16             16进制
17             单字符表示
如果参数RETURN_FORMAT没有指定，则按十进制表示返回。
如果参数START_POSITION和LENGTH被指定，则从START_POSITION开始的长为LENGTH的字节将被返回，缺省是返回整数表示。
SELECT DUMP('ABC'，1016) FROM TEST；
select dump(ename，8，3，2) 'example' from emp where name='ccbzzp'；
264\. empty_b|clob()
返回一个空的LOB定位符，用在初始化LOB变量，或用在INSERT及UPDATE声明去初始化LOB列或将其属性置为空。
INSERT INTO TABLE1 VALUES(EMPTY_BLOB())；
UPDATE TABLE1 SET CLOB_COL=EMPTY_BLOB()；
265\. BFILENAME('DIRECTORY'，'FILENAME')
返回一个BFILE定位符，相关的二进制LOB物理文件在服务器的文件系统上.目录DIRECTORY是指在服务器的文件系统上实际搜索路径全名的别名. FILENAME是指服务器的文件系统的文件名。
INSERT INTO FILE_TAB VALUES(BFILENAME('LOB_DIR'，'IMAGE1.GIF'))；

266\. GREATEST(EXPR，EXPR，...)
GREATEST返回参数的最大值。
SELECT GREATEST('HARRY'，'HARRIOT'，'HAROLD') 'SAMPLE' FROM TABLE1；
267\. LEAST(EXPR，EXPR，...)
LEAST返回参数的最小值。
SELECT LEAST('HARRY'，'HARRIOT'，'HAROLD') 'SAMPLE' FROM TABLE1；
268\. NLS_CHARSET_DECL_LEN(BYTECNT，CSID)
返回一个NCHAR列的宽度。
SELECT NLS_CHARSET_DECL_LEN(200，NLS_CHARSET_ID('JA16EEFDFDF')) FROM TABLE1；
269\. NLS_CHARSET_ID(TEXT)
返回相应于NLS字符集名字的NLS字符集ID数。
SELECT NLS_CHARSET_D('JADFDFFDF') FROM TABLE1；
270\. NLS_CHARSET_NAME(N)
返回相应于ID数N的NLS字符集名称。
SELECT NLS_CHARSET_NAME(2) FROM TABLE1；
271\. NVL(EXPR1，EXPR2)
若EXPR1是NULL，则返回EXPR2，否则返回EXPR1。
SELECT NAME，NVL(TO_CHAR(COMM)，'NOT APPLICATION') FROM TABLE1；
272\. UID
返回唯一标识当前数据库用户的整数。
SELECT UID FROM TABLE1；
273\. USER
用VARCHAR2数据类型返回当前ORACLE用户的名称。
SELECT USER，UID FROM TABLE1；
274\. USERENV(OPTION)
返回当前的会话信息。
OPTION='ISDBA'若当前是DBA角色，则为TRUE，否则FALSE。
OPTION='LANGUAGE'返回数据库的字符集。
OPTION='SESSIONID'为当前会话标识符。
OPTION='ENTRYID'返回可审计的会话标识符。
OPTION='LANG'返回会话语言名称的ISO简记。
OPTION='INSTANCE'返回当前的实例。
SELECT USERENV('LANGUAGE') FROM DUAL；
275\. VSIZE(EXPR)
返回EXPR内部表示的字节数。
SELECT NAME，VSIZE(NAME) FROM TABLE1；
276\. DEREF(E)
返回参数E的对象引用。
SELECT DEREF(C2) FROM TABLE1；
277\. REFTOHEX(R)
将参数R转换为16进制。
SELECT REFTOHEX(C2) FROM TABLE1；
278\. MAKE_REF(TABLE，KEY，KEY...)
通过把给定的键作为主键来创建给定视图对象中一行的引用。
CREATE TYPE T1 AS OBJECT(A NUMBER，B NUMBER)；
CREATE TABLE TB1(C1 NUMBER，C2 NUMBER，PRIMARY KEY(C1，C2))；
CREATE VIEW V1 OF T1 WITH OBJECT OID(A，B) AS SELECT * FROM TB1；
SELECT MAKE_REF(V1，1，3) FROM PUBS；
279\. STDDEV(DISTINCT|ALL X)
STDDEV给出一组行值的标准差。
SELECT STDDEV(SALARY) AS EXAMPLE FROM EMPLOYEE；
280\. VARIANCE(DISTINCT|ALL X)
VARIANCE返回一组行中所有VALUE的方差。
SELECT VARIANCE(SALARY) AS EXAMPLE FROM EMPLOYEE；
9I管理的V$视图
281\. V$ACCESS
显示当前被锁定的数据库中的对象及正在访问他们的会话。
282\. V$ACTIVE_INSTANCES
为当前安装的数据库中出现的所有实例建立从实例名到实例号的映射。
283\. V$ACTIVE_SESS_POOL_MTH
所有活动的会话池资源分配方法。
284\. V$AQ
当前数据库中的队列的统计量。
285\. V$ARCHIVE
归档所需的重做日志文件中的信息。
286\. V$ARCHIVE_DEST
当前实例的所有归档日志目的文件及它们的当前值，模式，状态。
287\. V$ARCHIVE_PROCESSES
为一个实例提供不同的ARCH进程状态的信息。
288\. V$ARCHIVE_LOG
控制文件中的归档日志信息。
289\. V$BACKUP
所有联机数据文件的备份状态。
290\. V$BACKUP_ASYNC_IO
从控制文件中显示备份集的信息。
291\. V$BACKUP_CORRUPTION
从控制文件中显示数据文件备份中有关损坏的信息。
292\. V$BACKUP_DATAFILE
从控制文件中显示备份数据文件和备份控制文件的信息。
293\. V$BACKUP_DEVICE
显示关于支持备份设备的信息。
294\. V$BACKUP_PIECE
从控制文件中显示备份块的信息。
295\. V$BACKUP_REDOLOG
从控制文件中显示关于备份集中归档日志的信息。
296\. V$BACKUP_SET
从控制文件中显示备份集的信息。
297\. V$BACKUP_SYNC_IO
从控制文件中显示备份集的信息。
298\. V$BGPROCESS
描述后台进程。
299\. V$BH
是9I的实时应用集群视图.为系统全局区中的每一个缓冲区给出了状态和探查次数。
300\. V$BSP
显示用在缓存中块服务器后台进程上的统计信息。
<!--nextpage-->
301\. V$BUFFER_POOL
显示实例缓冲池的信息。
302\. V$BUFFER_POOL_STATISTICS
显示实例缓冲池的信息。
303\. V$CACHE
包含当前实例的SGA中的每一个块的头部信息。
304\. V$CACHE_LOCK
包含当前实例的SGA中的每一个块的头部信息. 和V$CACHE非常相似，
除特使平台锁管理器标识符号不同外。
305\. V$CACHE_TRANSFER
除了只显示那些被探查了至少一次的块的信息外，和V$CACHE功能相同。
306\. V$CIRCUIT
包含关于虚电路的信息，是用户通过调度程序和服务器到数据库的所有连接。
307\. V$CLASS_PING
显示每一个块类中被探查块的数目。
308\. V$COMPATIBILITY
显示数据库实例使用的特征，可以阻止数据库回到早期的版本中去。
309\. V$COMPATSEG
显示数据库实例使用的永久性特征，可以阻止数据库回到早期的版本中去。
310\. V$CONTEXT
列出当前对话的设置属性。
311\. V$CONTROLFILE
列出控制文件的名称。
312\. V$CONTROLFILE_RECORD_SECTION
显示控制文件记录部分的信息。
313\. V$COPY_CORRUPTION
显示控制文件中数据文件损坏的信息。
314\. V$CR_BLOCK_SERVER
显示用在缓存中块服务器后台进程上的统计信息。
315\. V$DATABASE
包含控制文件中数据库的信息。
316\. V$DATAFILE
包含控制文件中数据库文件的信息。
317\. V$DATAFILE_COPY
包含控制文件中数据库文件副本的信息。
318\. V$DATAFILE_HEADER
显示数据文件头部的数据文件信息。
319\. V$DB_CACHE_ADVICE
根据缓存的大小估计出物理读的数量。
320\. V$DB_OBJECT_CACHE
缓存在库缓存中的数据库对象。
321\. V$DB_PIPES
显示实例中的共享池当前描绘的管道。
322\. V$DBFILE
列出组成数据库的所有数据文件。
323\. V$DBLINK
查询会话所打开的所有数据库连接。
324\. V$DELETED_OBJECT
显示控制文件中被删除归档日志。
325\. V$DISPATCHER
提供调度进程的信息。
326\. V$DISPATCHER_RATE
为调度进程提供优质提供速率统计量。
327\. V$DLM_ALL_LOCKS
列出当前所有锁的信息。
328\. V$DLM_CONVERT_LOCAL
本地锁转换操作所消耗的时间。
329\. V$DLM_CONVERT_REMOTE
远程锁转换操作所消耗的时间。
330\. V$DLM_LATCH
它是过时的，参见V$LATCH
331\. V$DLM_LOCKS
这些是锁管理器已知的被阻塞或阻塞其它对象的锁信息。
332\. V$DLM_MISC
显示多种DLM统计量。
333\. V$DLM_RESS
显示当前锁管理器已知的全部资源的信息。
334\. V$ENABLEDPRIVE
显示被授予的特权。
335\. V$ENQUEUE_LOCK
显示排队对象所拥有的全部锁。
336\. V$EVENT_NAME
包含等待事件的信息。
337\. V$EXECUTION
显示并行执行中的信息。
338\. V$FALSE_PING
可能得到探查失败的缓冲区。
339\. V$FAST_START_SERVERS
执行并行操作事务恢复的所有从属操作的信息。
340\. V$FAST_START_TRANSACTIONS
恢复中的事务进展信息。
341\. V$FILE_CACHE_TRANSFER
显示每个数据文件中探查的块的数量。
342\. V$FILE_PING
显示每个数据文件被探查的块数目。
343\. V$FILESTAT
包含文件关于读/写统计量信息。
344\. V$FIXED_TABLE
显示数据库中所有动态性能表和视图及导出表。
345\. V$FIXED_VIEW_DEFINITION
显示所有固定视图的定义。
346\. V$GC_ELEMENTS_WITH_COLLISIONS
可以找到保护多缓存的锁。
347\. V$GES_BLOCKING_ENQUEUE
这些是锁管理器已知的被阻塞或阻塞其它对象的锁信息。
348\. V$GES_CONVERT_LOCAL
本地锁转换操作

UID

3453

帖子

15343

精华

[55](http://www.oracle.com.cn/digest.php?authorid=3453)

积分

15980

流通积分

15980 点

金钱

101 O元

阅读权限

255

在线时间

182 小时

注册时间

2003-12-19

最后登录

2008-7-24

[查看个人网站](http://yaoyp.spaces.live.com/)

[查看详细资料](http://www.oracle.com.cn/space.php?action=viewpro&amp;uid=3453)

**回复： ORACLE常用傻瓜問題1000問(之六)**

349\. V$GES_CONVERT_REMOTE
远程锁转换操作所消耗的时间。
350\. V$GES_ENQUEUE
显示当前锁管理员知道的所有的锁。
351\. V$GES_LATCH
参见V$LATCH
352\. V$GES_RESOURCE
显示当前锁管理器已知的全部资源的信息。
353\. V$GES_STATISTICS
显示多种DLM统计量。
354\. V$GLOBAL_BLOCKED_LOCKS
显示全局块锁。
355\. V$GLOBAL_TRANSACTION
显示当前激活的全局事务的信息。
356\. V$HS_AGENT
标识当前运行在一个给定的主机上的HS代理的集合。
357\. V$HS_SESSION
ORACLE服务器打开的HS会话集。
358\. V$INDEXED_FIXED_COLUMN
显示建立索引的动态性能表中的列(X$表)。
359\. V$INSTANCE
显示当前实例的状态。
360\. V$INSTANCE_RECOVERY
用来监视执行用户指定恢复读次数的限制机制。
361\. V$LATCH
为非双亲简易锁列出统计量。
362\. V$LATCH_CHILDREN
关于子简易锁的统计量。
363\. V$LATCH_MISSES
试图获得一个简易锁失败的统计量。
364\. V$LATCH_PARENT
包含关于双亲简易锁的统计量。
365\. V$LATCHHOLDER
当前简易锁持有者的信息。
366\. V$LATCHNAME
包含关于显示在V$LATCH中的简易锁的解码简易锁名字的信息。
367\. V$LIBRARYCACHE
关于高速缓存性能和活动的统计量。
368\. V$LICENSE
许可证限制的信息。
369\. V$LOADCSTAT
包含在一个直接装载执行过程中所编译的SQL*LOADER统计量。
370\. V$LOCK
当前ORACLE所持有的锁。
371\. V$LOCK_ACTIVITY
显示当前实例的DLM锁操作活动。
372\. V$LOCK_ELEMENT
每一个被缓存使用的PCM锁在V$LOCK_ELEMENTS中都有一个条目。
373\. V$LOCKED_OBJECT
列出每个事务所获得的全部锁。
374\. V$LOCK_WITH_COLLISIONS
可以查询出保护多缓冲区的锁。
375\. V$LOG
控制文件中日志文件的信息。
376\. V$LOG_HISTORY
控制文件中日志文件的历史信息。
377\. V$LOGFILE
包含重做日志文件的信息。
378\. V$LOGHIST
控制文件中日志文件的日志历史信息。
379\. V$LOGMNR_CONTENTS
日志历史信息。
380\. V$LOGMNR_DICTIONARY
日志历史信息。
381\. V$LOGMNR_LOGS
日志信息。
382\. V$LOGMNR_PARAMETERS
日志信息。
383\. V$MTS
包含调节多线程的服务器的信息。
384\. V$MYSTAT
当前会话的统计量。
385\. V$NLS_PARAMETERS
当前NLS参数信息。
386\. V$NLS_VALID_VALUES
列出所有NLS参数的有效值。
387\. V$OBJECT_DEPENDENCY
能够通过当前装载在共享池中的包，过程或游标来决定依赖哪一个对象。
388\. V$OBJECT_USAGE
来监视索引的使用。
389\. V$OBSOLETE_PARAMETER
列出陈旧的参数。
390\. V$OFFINE_RANGE
显示控制文件中数据文件的脱机信息。
391\. V$OPEN_CURSOR
列出每一个会话当前打开的和解析的游标。
392\. V$OPTION
列出ORACLE服务安装的状况。
393\. V$PARALLEL_DEGREE_LIMIT_MTH
显示所有有效的并行度限制资源分配的方法。
394\. V$PARAMETER
列出关于初始化参数的信息。
395\. V$PARAMETER2
列出了当前影响会话的参数和参数值。
396\. V$PGASTAT
列出ORACLE内存使用统计。
397\. V$PING
与V$CACHE一样。
398\. V$PQ_SESSTAT
列出并行查询会话的统计信息。
399\. V$PQ_SLAVE
一个实例上每个活动并行执行服务器的统计量。
400\. V$PQ_SYSSTAT
列出并行查询的系统的统计量。
<!--nextpage-->
401\. V$PQ_TQSTAT
包含并行执行操作上的统计量.帮助在一个查询中测定不平衡的问题。
402\. V$PROCESS
包含关于当前活动进程的信息。
403\. V$PROXY_ARCHIVEDLOG
包含归档日志备份文件的描述信息，这些备份文件带有一个称为PROXY副本的新特征。
404\. V$PROXY_DATAFILE
包含数据文件和控制文件备份的描述信息，这些备份文件带有一个称为PROXY副本的新特征。
405\. V$PWFILE_USERS
列出被授予SYSDBA和SYSOPER特权的用户。
406\. V$PX_PROCESS
包含正在运行并行操作的会话的信息。
407\. V$PX_PROCESS_SYSSTAT
包含正在运行并行操作的会话的信息。
408\. V$PX_SESSION
包含正在运行并行操作的会话的信息。
409\. V$PX_SESSTAT
包含正在运行并行操作的会话的信息。
410\. V$QUEUE
包含多线程消息队列的信息。
411\. V$QUEUEING_MTH
显示所有可用的查询资源分配方法。
412\. V$RECOVER_FILE
显示需要介质恢复的文件状态。
413\. V$RECOVERY_FILE_STATUS
包含对每个恢复命令的每一数据文件的一行信息。
414\. V$RECOVERY_LOG
列出需要完成介质恢复的归档日志的信息.这个信息来自V$LOG_HISTORY
415\. V$RECOVERY_PROCESS
能够用来跟踪数据库恢复操作，以便他们不会被终止执行。
也用来估算进程中完成这个操作所需的时间。
416\. V$RECOVERY_STATUS
包含当前恢复进程的统计量。
417\. V$REQDIST
列出MTS调度程序请求次数的直方图的统计量。
418\. V$RESERVED_WORDS
给出PL/SQL编译器所使用的关键字的列表。
419\. V$RESOURCE
包含资源名和地址信息。
420\. V$RESOURCE_LIMIT
显示系统资源的全局资源使用的信息。
421\. V$ROLLNAME
列出所有联机回滚段的信息。
422\. V$ROLLSTAT
包含回滚段的统计量。
423\. V$ROWCACHE
显示活动数据字典的统计量。
424\. V$ROWCACHE_PARENT
显示数据字典中所有双亲对象的信息。
425\. V$ROWCACHE_SUBORDINATE
显示数据字典中从属对象的信息。
426\. V$RSRC_CONSUMER_GROUP
显示与当前活动资源消费者用户组相关联的数据。
427\. V$RSRC_CONSUMER_GROUP_CPU_MTH
为资源消费者用户组显示所有可用的资源的分配方法。
428\. V$RSRC_PLAN
显示当前所有活动资源方案的名称。
429\. V$RSRC_PLAN_CPU_MTH
显示所有用于资源方案的可用CPU资源分配方法。
430\. V$SESS_IO
为每个用户会话列出I/O统计。
431\. V$SESSION
列出当前每一个会话的会话信息。
432\. V$SESSION_CONNECT_INFO
显示当前会话的网络连接的信息。
433\. V$SESSION_CURSOR_CACHE
显示当前会话的游标用法的信息。
434\. V$SESSION_EVENT
列出一个会话在等待一个事件的信息。
435\. V$SESSION_LONGOPS
显示一个长时间运行操作的状态。
436\. V$SESSION_OBJECT_CACHE
显示本地服务器上当前用户对话的对象高速缓存的统计量。
437\. V$SESSION_WAIT
列出正在等待的活动会话的资源或事件。
438\. V$SESSTAT
列出用户会话统计量。
439\. V$SGA
包含系统全局区的总统计量。
440\. V$SGASTAT
包含系统全局区的详细信息。
441\. V$SHARED_POOL_RESERVED
列出能帮助你调节共享池中保留池和空间的统计量。
442\. V$SHARED_SERVER
包含共享服务器进程的信息。
443\. V$SHARED_SERVER_MONITOR
包含调试共享服务器进程的信息。
444\. V$SORT_SEGMENT
包含一个给定实例中每一个排序段的信息。
445\. V$SPPARAMETER
列出SPFILE的内容。
446\. V$SQL
列出SQL共享区的统计量。
447\. V$SQL_BIND_DATA
如果数据在服务器中可用，它将对查询这个视图的会话所拥有的每个游标中的每一个不同的连接变量，显示客户端发送的实际连接数据。
448\. V$SQL_BIND_METADATA
对查询这个视图的会话所拥有的每个游标中的每一个不同的连接变量，显示客户端提供的连接元数据。
449\. V$SQL_CURSOR
显示与查询这个视图的会话相关的每一个游标的DEBUG信息。
450\. V$SQL_PLAN
包含装载到库缓存中每个子游标的执行计划信息。
451\. V$SQL_SHARED_CURSOR
为什么一个特定的子游标没有与存在的子查询的共享的解释。
452\. V$SQL_SHARED_MEMEORY
关于共享内存快照的游标的信息。
453\. V$SQL_REDIRECTION
标识复位向的SQL语句。
454\. V$SQL_WORKAREA
显示被SQL游标使用的工作区信息。
455\. V$SQL_WORKAREA_ACTIVE
包含当前由系统分配的工作区的昫间信息。
456\. V$SQLAREA
共享SQL的统计量。
457\. V$SQLTEXT
包含SGA中属于共享SQL游标的SQL语句文本。
458\. V$SQLTEXT_WITH_NEWLINES
不能用空格代替新行制表符外，和V$SQLTEXT功能一样。
459\. V$STATNAME
显示V$SESSTAT和V$SYSTAT表中的统计量的译码统计名字。
460\. V$SUBCACHE
显示当前装载于库高速缓存中的从属高速缓存的信息。
461\. V$SYSSTAT
列出系统统计量。
462\. V$SYSTEM_CURSOR_CACHE
系统范围的信息。
463\. V$SYSTEM_EVENT
包含等待一个事件的全部信息。
464\. V$SYSTEM_PARAMETER
包含系统参数信息。
465\. V$SYSTEM_PARAMETER2
ORACLE实例中当前影响的参数和参数的值。
466\. V$TABLESPACE
控制文件中表空间的信息。
467\. V$TEMP_CACHE_TRANSFER
显示每个数据文件中探查块的数量。
468\. V$TEMP_EXTENT_MAP
显示所有临时表空间的每一个单元的状态信息。
469\. V$TEMP_EXTENT_POOL
显示被一个给定实例使用的临时空间缓存的状态。
470\. V$TEMP_PING
显示每一个数据文件探查的块数。
471\. V$TEMP_SPACE_HEADER
显示每一个临时表空间中每一个文件的聚集信息，涉及每个空间首部中当前使用多少空间和有多少自由空间。
472\. V$TEMPFILE
显示临时文件的信息。
473\. V$TEMPORARY_LOBS
显示临时的LOB。
474\. V$TEMPSTAT
包含文件读/写的统计信息。
475\. V$THREAD
包含控制文件中的线程信息。
476\. V$TIMER
列出以1%秒计的流逝时间。
477\. V$TIMEZONE_NAMES
列出合法的时区名称。
478\. V$TRANSACTION
列出系统中的活动事务。
479\. V$TRANSACTION_ENQUEUE
显示事务状态对象所拥有的锁。
480\. V$TYPE_SIZE
列出不同数据库组件的大小，以便用来估算数据块的容量大小。
481\. V$UNDOSTAT
显示一个历史统计数据来显示系统工作的如何。
482\. V$VERSION
列出ORACLE服务器中核心库组件的版本号。
483\. V$VPD_POLICY
列出与当前在库缓存中的游标相关的所有安全策略。
484\. V$WAITSTAT
列出块竞争统计量
9I管理的数据字典DBA视图
485\. DBA_2PC_NEIGHBORS
包含未决事务的引入或流出的连接信息。
486\. DBA_ALL_TABLES
显示数据库中所有表的描述。
487\. DBA_APPLICATION_ROLES
所有的具有函数定义的验证策略的角色。
488\. DBA_ASSOCIATIONS
显示用户定义的统计信息。
489\. DBA_AUDIT_EXISTS
列出AUDIT NOT EXISTS和AUDIT EXISTS产生的审计跟踪。
490\. DBA_AUDIT_OBJECT
系统中所有对象的审计跟踪记录。
491\. DBA_AUDIT_SESSION
列出关于CONNECT和DISCONNECT的所有审计跟踪信息。
492\. DBA_AUDIT_STATEMENT
列出关于GRANT，REVOKE，AUDIT，NOAUDIT，ALTER SYSTEM语句的审计跟踪信息。
493\. DBA_AUDIT_TRAIL
列出所有的审计跟踪条目。
494\. DBA_BLOCKERS
列出正有人等待一个会话持有的锁的所有会话，但并非它们自己在等待一个锁。
495\. DBA_BASE_TABLE_MVIEWS
描述数据库中所有的物化视图。
496\. DBA_CATALOG
列出所有数据库标，视图，同义词和序列。
497\. DBA_CLU_COLUMNS
列出表列到聚集列的映射。
498\. DBA_CLUSTER_HASH_EXPRESSIONS
列出所有聚集的散列HASH函数。
499\. DBA_CLUSTERS
包含数据库中所有聚集的描述。
500\. DBA_COL_COMMENTS
所有表和视图的列的注解。
<!--nextpage-->
501\. DBA_COL_PRIVS
列出数据库中授予列的所有特权。
502\. DBA_COLL_TYPES
显示数据库中所有命名的集合类型。
503\. DBA_CONS_COLUMNS
包含在约束定义中的，可访问的列的信息。
504\. DBA_CONSTRAINTS
所有表上约束的定义。
505\. DBA_CONTEXT
所有上下文名字空间的信息。
506\. DBA_DATA_FILES
数据库文件的信息。
507\. DBA_DB_LINKS
数据库中的所有数据库链接。
508\. DBA_DDL_LOCKS
数据库所持有的所有的DDL锁。
509\. DBA_DEPENDENCIES
列出对象之间的依赖性。
510\. DBA_DIM_ATTRIBUTES
代表维级和功能依赖的列之间的关系。
511\. DBA_DIM_JOIN_KEY
代表两个维之间的连接。
512\. DBA_DIM_LEVEL_KEY
代表一个维级的列。
513\. DBA_DIM_LEVELS
代表一个维级。
514\. DBA_DIMENSIONS
代表维对象。
515\. DBA_DIRECTORIES
提供数据库所有对象的信息。
516\. DBA_DML_LOCKS
列出数据库中所有的DML锁，和对一个DML锁的所存未决请求。
517\. DBA_ERRORS
列出数据库中所有存储的对象的当前错误。
518\. DBA_EXP_FILES
包含导出文件的信息。
519\. DBA_EXP_OBJECTS
列出以增量方式导出的对象。
520\. DBA_EXP_VERSION
包含最后导出会话的版本号。
521\. DBA_EXTENTS
列出数据库中组成所有段的信息。
522\. DBA_EXTERNAL_TABLES
描述数据库中的所有的外部表。
523\. DBA_FREE_SPACE
列出所有表空间中的空闲分区。
524\. DBA_FREE_SPACE_COALESCED
包含表空间中合并空间的统计数据。
525\. DBA_HISTOGRAMS
DBA_TAB_HISTOGRAMS的同义词。
526\. DBA_IND_COLUMNS
包含在所有表和聚集中组成索引的列的描述。
527\. DBA_IND_EXPRESSIONS
包含在所有表和聚集中函数型索引的表达式。
528\. DBA_IND_PARTITIONS
为每一个索引分区，描述分区级的分区信息，分区的存储参数和ANALYZE决定的各种分区统计数据。
529\. DBA_IND_SUBPARTITIONS
为当前用户拥有的每一个索引分区，描述分区级的分区信息，分区的存储参数和ANALYZE决定的各种分区统计数据。
530\. DBA_INDEXES
数据库中所有索引的描述。
531\. DBA_INDEXTYPE_COMMENTS
数据库中所有的用户定义的索引类型。
532\. DBA_INDEXTYPE_OPERATORS
列出索引类型支持的所有操作符。
533\. DBA_INDEXTYPES
所有的索引类型。
534\. DBA_INTERNAL_TRIGGERS
数据库中所有的内部触发器。
535\. DBA_JOBS
数据库中的所有的作业。
536\. DBA_JOBS_RUNING
数据库中的所有当前运行的作业。
537\. DBA_JOIN_IND_COLUMNS
描述数据库中的所有的连接条件。
538\. DBA_KGLLOCK
列出在KGL对象上所有的锁和PINS。
539\. DBA_LIBRARIES
列出数据库中的所有的库。
540\. DBA_LOB_PARTITIONS
包含在表中的用户可访问的JOB。
541\. DBA_LOB_SUBPARTITIONS
显示LOB数据子分区中的分区级属性。
542\. DBA_LOBS
包含在所有表中的LOB。
543\. DBA_LOCK_INTERNAL
包含每个被持有的锁或简易锁的一行信息，及每一个未决请求的一行信息。
544\. DBA_LOCKS
列出数据库中持有的锁或简易锁，及每一个未决请求信息。
545\. DBA_LOG_GROUP_COLUMNS
描述在日志组中指定的数据库中的所有列的信息。
546\. DBA_METHOD_PARAMS
数据库中类型的方法参数的描述。
547\. DBA_METHOD_RESULTS
数据库中所有类型的方法结果的描述。
548\. DBA_MVIEW_AGGREGATES
在聚集实例化视图的SELECT列表中出现的分组函数。
549\. DBA_MVIEW_ANALYSIS
代表潜在地支持查询重写。
550\. DBA_MVIEW_LOG_FILTER_COLS
列出所有记录在物化视图日志中的所有列。
551\. DBA_MVIEW_REFRESH_TIMES
描述在数据库中所有物化视图的刷新时间。
552\. DBA_MVIEWS
描述在数据库中所有物化视图。
553\. DBA_NESTED_TABLES
在所有表中嵌套表的描述。
554\. DBA_OBJ_AUDIT_OPTS
列出一个用户所有对象的审计选项。
555\. DBA_OBJECT_SIZE
列出各类对象用字节表示的大小。
556\. DBA_OBJECT_TABLES
显示数据库中所有对象表的描述。
557\. DBA_OBJECTS
列出数据库中所有的对象。
558\. DBA_OPANCILLARY
列出操作连接符的附加信息。
559\. DBA_OPARGUMENTS
列出操作连接符的参数信息。
560\. DBA_ORPHAN_KEY_TABLE
报告那些在基表下有坏块的索引中的键值。
561\. DBA_OUTLINE_HINTS
列出组成概要的提示符。
562\. DBA_OUTLINES
列出有关概要的信息。
563\. DBA_PART_COL_STATISTICS
所有分区表的列统计数据和直方图信息。
564\. DBA_PART_HISTOGRAMS
所有表分区上直方图的直方图数据。
565\. DBA_PART_INDEXES
所有分区索引的对象级分区信息。
566\. DBA_PART_KEY_COLUMNS
所有分区对象的分区关键字列。
567\. DBA_PART_LOBS
描述分区LOB的表级信息。
568\. DBA_PART_TABLES
列出所有分区表的对象级分区信息。
569\. DBA_PARTIAL_DROP_TABS
描述部分删除的表。
570\. DBA_PENDING_TRANSACTIONS
提供关于未完成事务的信息。
571\. DBA_POLICIES
列出数据库中的所有的安全策略。
572\. DBA_PRIV_AUDIT_OPTS
通过系统和由用户审计的当前系统特权。
573\. DBA_PROCEDURES
所有函数及过程和他们的相关属性。
574\. DBA_PROFILES
显示所有启动文件及限制。
575\. DBA_PROXIES
显示系统中所有代理连接的信息。
576\. DBA_PUBLISHED_COLUMNS
描述所有存在源列的表。
577\. DBA_QUEUE_SCHEDULES
描述当前传播信息的方案。
578\. DBA_QUEUE_TABLES
描述在数据库中建立的所有队列表中的队列的名称和类型。
579\. DBA_QUEUES
描述数据库中每一个队列的操作特性。
580\. DBA_RCHILD
列出任何刷新组中的所有子组。
581\. DBA_REFRESH
列出所有刷新组。
582\. DBA_REFRESH_CHILDREN
列出刷新组中的所有对象。
583\. DBA_REFS
数据库中所有表的对象类型列中的REF列和REF属性。
584\. DBA_REGISTERED_MVIEW_GROUPS
列出了在该地点所有重组的物化视图。
585\. DBA_REGISTERED_MVIEWS
数据库中所有注册了的物化视图。
586\. DBA_REGISTERED_SNAPSHOT_GROUPS
列出该场地的所有快照登记组。
587\. DBA_REGISTERED_SNAPSHOTS
检索本地表的远程快照的信息。
588\. DBA_REPAIR_TABLE
通过DBA_REPAIR.CHECK_OBJECT过程发现的任何损坏。
589\. DBA_RESUMABLE
列出了在系统中执行的可恢复的语句。
590\. DBA_RGROUP
列出所有刷新组。
591\. DBA_ROLE_PRIVS
列出授予用户角色的角色。
592\. DBA_ROLES
数据库中存在的所有角色。
593\. DBA_ROLLBACK_SEGS
包含回滚段的描述。
594\. DBA_RSRC_CONSUMER_GROUP_PRIVS
列出所有已被授权的资源管理员消费组，用户和角色。
595\. DBA_RSRC_CONSUMER_GROUPS
数据库中所有资源消费组。
596\. DBA_RSRC_MANAGER_SYSTEM_PRIVS
列出所有已授予属于资源管理员系统特权的用户和角色。
597\. DBA_RSRC_PLAN_DIRECTIVES
数据库中存在的所有资源计划的指示。
598\. DBA_RSRC_PLANS
数据库中存在的所有资源计划。
599\. DBA_SEGMENTS
分配给所有数据库段的存储信息。
600\. DBA_SEQUENCES
数据库中所有序列的描述。
<!--nextpage-->
601\. DBA_SNAPSHOT_LOG_FILTER_COLS
列出记录在快照日志上的所有过滤列。
602\. DBA_SNAPSHOT_LOGS
数据库中所有的快照日志。
603\. DBA_SNAPSHOT_REFRESH_TIMES
列出快照刷新次数。
604\. DBA_SNAPSHOTS
数据库中所有的快照。
605\. DBA_SOURCE
数据库中所有存储对象的来源。
606\. DBA_SOURCE_TABLES
允许发行者查看所有现有的源表。
607\. DBA_SQLJ_TYPE_ATTRS
数据库中所有关于SQLJ对象的所有属性。
608\. DBA_SQLJ_TYPE_METHODS
数据库中所有类型的方法。
609\. DBA_SQLJ_TYPES
数据库中所有关于SQLJ对象类型信息。
610\. DBA_STMT_AUDIT_OPTS
描述通过系统并由用户审计的当前系统审计选项。
611\. DBA_STORED_SETTINGS
列出具有执行特权的存储PL/SQL单元的永久参数设置信息。
612\. DBA_SUBPART_COL_STATISTICS
列出表子分区的列统计数据和直方图信息。
613\. DBA_SUBPART_HISTOGRAMS
列出表子分区中直方图的实际数据。
614\. DBA_SUBPART_KEY_COLUMNS
允许发行者查看他们预定的所有发行的列。
615\. DBA_SUBPART_TABLES
允许发行者查看他们预定的所有发行的表。
616\. DBA_SUBSCRIPTIONS
允许发行者查看所有的预定。
617\. DBA_SYNONYMS
数据库中所有同义词。
618\. DBA_SYS_PRIVS
授予用户和角色的系统特权。
619\. DBA_TAB_COL_STATISTICS
包含在DBA_TAB_COLUMNS视图中的列统计数据和直方图信息。
620\. DBA_TAB_COLUMNS
所有表，视图和聚集的描述列的信息。
621\. DBA_TAB_COMMENTS
数据库中所有列和表的注解。
622\. DBA_TAB_HISTOGRAMS
所有表中列的直方图。
623\. DBA_TAB_MODIFICATIONS
显示数据库中所有的上次统计后被修改了的表。
624\. DBA_TAB_PARTITIONS
对表的分区，描述它的分区级分区信息，分区的存储参数和由ANALYZE决定的各种分区统计数据。
625\. DBA_TAB_PRIVS
列出授予用户的角色的系统特权。
626\. DBA_TAB_SUBPARTITIONS
对表的子分区，描述它的分区级分区信息，分区的存储参数和由ANALYZE决定的各种分区统计数据。

UID

3453

帖子

15343

精华

[55](http://www.oracle.com.cn/digest.php?authorid=3453)

积分

15980

流通积分

15980 点

金钱

101 O元

阅读权限

255

在线时间

182 小时

注册时间

2003-12-19

最后登录

2008-7-24

[查看个人网站](http://yaoyp.spaces.live.com/)

[查看详细资料](http://www.oracle.com.cn/space.php?action=viewpro&amp;uid=3453)

627\. DBA_TABLES
数据库中所有关系表的描述。
628\. DBA_TABLESPACES
所有表空间的描述。
629\. DBA_TEMP_FILES
数据库临时文件信息。
630\. DBA_TRANSFORMATIONS
数据库中所有消息传递信息。
631\. DBA_TRIGGER_COLS
所有触发器列的用法。
632\. DBA_TRIGGERS
数据库中所有的触发器。
633\. DBA_TS_QUOTAS
所有用户的表空间的限额。
634\. DBA_TYPE_ATTRS
数据库类型的属性。
635\. DBA_TYPE_METHODS
描述数据库中所有类型的方法。
636\. DBA_TYPES
数据库中所有的抽象数据类型。
637\. DBA_UNDO_EXTENTS
在撤消表空间的每个范围的提交时间。
638\. DBA_UNUSED_COL_TABS
对所有未使用列的描述。
639\. DBA_UPDATABLE_COLUMNS
对可在一个连接视图中，由数据库管理员更新的列的描述。
640\. DBA_USERS
数据库所有用户信息。
641\. DBA_USTATS
当前用户信息。
642\. DBA_VARRAYS
用户可以访问的视图的文本。
643\. DBA_VIEWS
数据库中所有视图的文本。
644\. DBA_WAITERS
列出所有正在等待一个锁的会话，以及列出正在阻止它们获得该锁的会话。
9I管理的数据字典USER视图
645\. USER_ALL_TABLES
包含对用户可用的表的描述。
646\. USER_ARGUMENTS
列出对用户可存取的对象中的参数。
647\. USER_ASSOCIATIONS
当前用户所拥有的相关对象的用户定义的统计。
648\. USER_AUDIT_OBJECT
关于对象的语句审计跟踪记录。
649\. USER_AUDIT_SESSION
关于用户连接或断开的全部审计跟踪记录。
650\. USER_AUDIT_STATEMENT
列出用户发出的GRANT，REVOKE，AUDIT，NOAUDIT，ALTER SYSTEM语句的审计跟踪条目。
651\. USER_AUDIT_TRAIL
与用户有关的审计跟踪条目。
652\. USER_BASE_TABLE_MVIEWS
当前用户拥有的所有使用物化视图日志的物化视图。
653\. USER_CATALOG
用户拥有的表，视图，同义词和序列。
654\. USER_CLU_COLUMNS
用户表的列到聚集列的映射。
655\. USER_CLUSTER_HASH_EXPRESSIONS
用户可存取的所有聚集及哈希函数。
656\. USER_CLUSTERS
用户拥有的聚集的说明。
657\. USER_COL_COMMENTS
列出用户表或视图的列上的注释。
658\. USER_COL_PRIVS
列出列上的授权，用户是所有者，授予者或被授予者。
659\. USER_COL_PRIVS_MADE
列出用户拥有对象的列上的全部授权。
660\. USER_COL_PRIVS_RECD
列出列上的授权，用户是被授予者。
661\. USER_COLL_TYPES
用户的命名集合类型。
662\. USER_CONS_COLUMNS
用户拥有的约束定义中的列信息。
663\. USER_CONSTRAINTS
用户表上的约束定义。
664\. USER_DB_LINKS
数据库链信息。
665\. USER_DEPENDENCIES
用户的对象之间的依赖关系。
666\. USER_DIM_ATTRIBUTES
当前用户模式下维级别和功能依赖之间的关系。
667\. USER_DIM_CHILD_OF
当前用户拥有的1到N维水平的层次关系。
668\. USER_DIM_HIERARCHIES
当前用户拥有的维的层次。
669\. USER_DIM_JOIN_KEY
当前用户拥有的维之间的连接。
670\. USER_DIM_LEVEL_KEY
当前用户拥有的一个维级的列。
671\. USER_DIM_LEVELS
当前用户拥有的一个维列。
672\. USER_DIMENSIONS
当前用户模式下维对象。
673\. USER_ERRORS
用户的所有存储对象上的当前错误。
674\. USER_EXTENTS
属于用户对象的段的范围。
675\. USER_EXTERNAL_TABLES
当前用户拥有的所有的外部对象。
676\. USER_FREE_SPACE
用户可存取表空间中的空闲范围。
678\. USER_HISTOGRAMS
该视图是USER_HISTOGRAMS的同义词。
679\. USER_IND_COLUMNS
用户索引和表上的列。
680\. USER_IND_EXPRESSIONS
当前用户拥有的表上基于函数的索引的表达式。
681\. USER_IND_SUBPARTITIONS
当前用户拥有的每个字分区的属性，分区级别的分区信息，子分区的存储参数，ANALYZE决定的各种分区统计。
682\. USER_INDEXES
当前用户拥有的索引的说明。
683\. USER_INDEXTYPE_COMMENTS
当前用户拥有的用户定义的索引类型的所有注释。
684\. USER_INDEXTYPE_OPERATORS
当前用户拥有的索引类型的所有操作。
685\. USER_INDEXTYPES
当前用户拥有的所有索引类型。
686\. USER_INTERNAL_TRIGGERS
当前用户拥有的所有表上的内部触发器。
687\. USER_JOBS
用户拥有的所有作业。
688\. USER_JOIN_IND_COLUMNS
当前用户拥有的数据库中所有的连接条件。
689\. USER_LIBRARIES
列出用户拥有的所有库。
690\. USER_LOB_PARTITIONS
当前用户拥有的LOB数据子分区中的分区级属性。
691\. USER_LOBS
显示用户表中包含的LOB。
692\. USER_LOG_GROUP_COLUMNS
当前用户拥有的在日志中指定的列。
693\. USER_LOG_GROUPS
数据库中当前用户拥有的所有表的日志组定义。
694\. USER_METHOD_PARAMS
当前用户拥有的用户类型的方法参数。
695\. USER_MVIEW_AGGREGATES
当前用户拥有的在聚集实例化视图的SELECT列表中出现的分组函数。
696\. USER_MVIEW_ANALYSIS
当前用户拥有的所有的物化视图用来潜在地支持查询重写并有可用于应用程序分析的附加信息。
697\. USER_MVIEW_DETAIL_RELATIONS
代表命名细节关系。
698\. USER_MVIEW_JOINS
描述在一个实例化视图的WHERE子句中，两个列之间的连接。
699\. USER_MVIEW_KEYS
物化视图基于当前用户模式的在SELECT列表中的列或表达式。
700\. USER_MVIEW_REFRESH_TIMES
数据库中当前用户拥有的所有的物化视图的刷新时间.
<!--nextpage-->
701\. USER_MVIEWS
数据库中当前用户拥有的所有的物化视图。
702\. USER_NESTED_TABLES
当前用户拥有的表中的嵌套表。
703\. USER_OBJ_AUDIT_OPTS
用户拥有的表和视图的审计选项。
704\. USER_OBJECT_SIZE
用户拥有的PL/SQL对象的大小。
705\. USER_OBJECT_TABLES
用户拥有的对象表.
706\. USER_OBJECT
用户拥有的对象。
707\. USER_OPANCILLARY
当前用户拥有的操作的辅助信息。
708\. USER_OPARGUMENTS
当前用户拥有的操作的论据信息。
709\. USER_OPBINDINGS
当前用户拥有的操作的绑定。
710\. USER_OPERATOR_COMMENTS
当前用户拥有的用户自定义的操作的所有注释。
711\. USER_OPERATORS
当前用户拥有的所有操作。
712\. USER_OUTLINE_HINTS
当前用户拥有的组成概要的暗示的设置。
713\. USER_OUTLINES
当前用户拥有的所有概要。
714\. USER_PART_COL_STATISTICS
当前用户拥有的表分区的列统计和柱状图数据.
715\. USER_PART_HISTOGRAMS
当前用户可存取的表分区上柱状图数据。
716\. USER_PART_KEY_COLUMNS
当前用户拥有的分区对象的分区键列。
717\. USER_PART_INDEXES
当前用户拥有的所有分区所有的对象级分区信息。
718\. USER_PART_LOBS
当前用户拥有的分区大型对象的表级信息。
719\. USER_PART_TABLES
当前用户拥有的分区表的对象级分区信息。
720\. USER_PARTIAL_DROP_TABS
当前用户模式下有部分删除表操作的所有表。
721\. USER_PASSWORD_LIMITS
分配给用户的口令参数文件。
722\. USER_POLICIES
当前用户拥有的所有对象的安全策略。
723\. USER_PROCEDURES
当前用户拥有的所有的函数和过错以及它们的相关属性。
724\. USER_PROXIES
当前用户被允许代理的连接信息。
725\. USER_PUBLISHED_COLUMNS
描述有特权的所有存在的源表列。
726\. USER_QUEUE_SCHEDULES
关于队列时间表的信息。
727\. USER_QUEUE_TABLES
只描述用户模式中创建的队列表中的队列。
728\. USER_QUEUES
用户模式中的每个队列的所有刷新组。
729\. USER_REFRESH
当前用户拥有的所有刷新组。
730\. USER_REFRESH_CHILDREN
列出刷新组中的所有对象。
731\. USER_REFS
用户表的对象类型列中的REF列和REF属性。
732\. USER_REGISTERED_MVIEWS
当前用户拥有的所有注册的物化视图.
733\. USER_REGISTERED_SNAPSHOTS
当前用户拥有的所有注册的快照。
734\. USER_RESOURCE_LIMITS
当前用户的资源限制。
735\. USER_RESUMABLE
列出当前用户执行的可恢复语句。
736\. USER_ROLS_PRIVS
列出授予用户的角色。
737\. USER_RSRC_CONSUMER_GROUP_PRIVS
列出授予用户的所有的资源消耗组。
738\. USER_RSRC_MANAGER_SYSTEM_PRIVS
列出所有被授予了DBMS_RESOURCE_MANAGER包的系统特权的用户。
739\. USER_SEGMENTS
列出属于用户对象的数据库段的存储分配信息。
740\. USER_SEQUENCES
用户序列的说明。
741\. USER_SNAPSHOT_LOGS
用户拥有的所有快照日志。
742\. USER_SNAPSHOT_REFRESH_TIMES
快照刷新的次数。
743\. USER_SNAPSHOTS
用户可查看的快照。
744\. USER_SOURCE
属于用户的所有存储对象的文本来源。
745\. USER_SORCE_TABLES
允许你查看所有有预定特权的现有的源表。
746\. USER_SQLJ_TYPE_ATTRS
当前用户拥有的关于SQLJ对象的所有属性.
747\. USER_SQLJ_TYPE_METHODS
当前用户拥有的类型方法.
748\. USER_SQLJ_TYPES
当前用户拥有的关于SQLJ对象类型信息.
749\. USER_STORED_SETTINGS
当前用户拥有的存储的PL/SQL单元的永久参数设置。
750\. USER_SUBPART_COL_STATISTICS
显示当前用户拥有的子分区对象的子分区的列统计和柱状图信息.
751\. USER_SUBPART_HISTOGRAMS
显示当前用户拥有的表子分区中柱状图的实际柱状图数据.
752\. USER_SUBPART_KEY_COLUMNS
显示当前用户拥有的子分区对象的子分区的列统计和柱状图信息。
753\. USER_SUBSCRIBED_COLUMNS
允许发行者查看所有的预定的所有发行的列.
754\. USER_SUBSCRIBED_TABLES
允许发行者查看所有的预定的所有发行的表。
755\. USER_SUBSCRIPTIONS
允许发行者查看所有的预定。
756\. USER_SYSNONYMS
当前用户拥有的私人同义词。
7 57\. USER_SYS_PRIVS
授予用户的系统特权。
758\. USER_TAB_COL_STATISTICS
包含USER_TAB_COLUMNS视图中的列统计和柱状图信息。
759\. USER_TAB_COLUMNS
用户表或视图或聚集上的列的信息。
760\. USER_TAB_COMMENTS
用户拥有表或视图上的注释。
761\. USER_TAB_HISTOGRAMS
用户表的列上的柱状图。
762\. USER_TAB_MODIFICATIONS
用户拥有了的所有上次统计后被修改了的表。
763\. USER_TAB_PARTITIONS
用户拥有的每个表子分区的名称，存储属性，其所属表和分区名。
764\. USER_TAB_PRIVS
对象上的特权。
765\. USER_TAB_PRIVS_MADE
用户拥有对象上的全部特权。
766\. USER_TAB_PRIVS_RECD
包含对象上的特权，用户为被授予者。
767\. USER_TAB_SUBPARTITIONS
用户拥有的每个子分区的名称，存储属性，其所属表和分区名。
768\. USER_TABLES
用户拥有的关系表的描述。
769\. USER_TABLESPACES
可存取的表空间的描述。
770\. USER_TRANSFORMATIONS
特定用户拥有的转变信息。
771\. USER_TRIGGER_COLS
用户触发器中列的用法。
772\. USER_TRIGGERS
用户触发器的说明。
773\. USER_TYPES
表中用户的类型。
774\. USER_TYPE_ATTRS
用户的类型的属性。
775\. USER_TS_QUOTAS
用户的表空间限额。
776\. USER_METHODS
用户的方法类型。
777\. USER_UNUSED_COL_TABS
包含了未用列的所有表。
778\. USER_UPDATABLE_COLUMNS
在连接视图中对用户可修改的列的描述。
779\. USER_USERS
当前用户的信息。
780\. USER_USTATS
用户拥有的用户定义统计。
781\. USER_VARRAYS
用户拥有的所有数组。
782\. USER_VIEWS
用户拥有的视图的文本。
9I管理的数据字典ALL视图
783\. ALL_ALL_TABLES
用户可存取的所有表。
784\. ALL_ARGUMENTS
用户可存取的对象的所有参数。
785\. ALL_ASSOCIATIONS
用户定义的统计信息。
786\. ALL_BASE_TABLE_MVIEWS
用户可存取的所有物化视图信息。
787\. ALL_CATALOG
用户可存取的全部表，同义词，视土和序列。
788\. ALL_CLUSTER_HASH_EXPRESSIONS
用户可存取的聚集的HASH函数。
789\. ALL_CLUSTERS
用户可存取的所有聚集。
790\. ALL_COL_COMMENTS
用户可存取的表或视图上注释。
791\. ALL_COL_PRIVS
列出列上的授权，用户或PUBLIC是授予者。
792\. ALL_COL_PRIVS_MADE
列出列上的授权，用户是属主或授权者.
793\. ALL_COL_PRIVS_RECD
列出列上的授权，用户或PUBLIC是授权者.
794\. ALL_COLL_TYPES
用户可存取的命名的集合类型。
795\. ALL_CONS_COLUMNS
包含在约束定义中可存取列的信息。
796\. ALL_CONSTRAINTS
列出可存取表上的约束定义。
797\. ALL_CONTEXT
显示活动的上下问信息。
798\. ALL_DB_LINKS
用户可存取的数据链。
799\. ALL_DEF_AUDIT_OPTS
包含在对象建立时所应用的缺省对象审计选项。
800\. ALL_DEPENDENCIES
用户可存取的的对象之间的依赖关系。
<!--nextpage-->
801\. ALL_DIM_HIERARCHIES
显示维的层次。
802\. ALL_DIM_JOIN_KEY
描述两个维之间的连接。
803\. ALL_DIM_LEVEL_KEY
描述维级的列。
804\. ALL_DIM_LEVELS
描述维级别。
805\. ALL_DIMENSIONS
包含维对象的信息。
806\. ALL_DIRECTORIES
用户可存取的所有目录描述。
807\. ALL_ERRORS
用户可存取的所有对象上的当前错误。
808\. ALL_EXTERNAL_TABLES
用户可存取的外部表。
809\. ALL_HISTOGRAMS
等于ALL_TAB_HISTOGRAMS别名。
810\. ALL_IND_COLUMNS
用户可存取的索引列。
811\. ALL_IND_EXPRESSIONS
用户可存取的表上的功能索引表达式。
812\. ALL_IND_PARTITIONS
为索引分区，描述分区级的分区信息。
813\. ALL_IND_SUBPARTITONS
为索引子分区，描述子分区级的分区信息。
814\. ALL_INDEXES
用户可存取的表上的索引描述。
815\. ALL_INDEXTYPE_COMMNETS
用户可存取的用户定义的索引类型。
816\. ALL_INDEXTYPE_OPERATORS
显示索引类型支持的所有操作符。
817\. ALL_INDEXTYPES
显示所有的索引类型。
818\. ALL_INTERNAL_TRIGGERS
用户可存取的内部触发器。
819\. ALL_JOBS
数据库中的所有作业。
820\. ALL_JOIN_IND_COLUMNS
描述你存取的位映像连接索引的连接条件。
821\. ALL_LIBRARIES
用户可存取的所有库。
822\. ALL_LOB_PARTITIONS
用户可存取的表中包含LOB。
823\. ALL_LOB_SUBPARTITIONS
显示LOB数据子分区的分区级别。
824\. ALL_LOBS
用户可存取的表中包含LOB。
825\. ALL_LOG_GROUP_COLUMNS
用户可存取的定义在日志组中的列。
826\. ALL_LOG_GROUPS
用户可存取的表上的日志组定义。
827\. ALL_METHOD_PARAMS
用户可存取的类型的方法参数。
828\. ALL_METHOD_RESULTS
用户可存取的类型的方法结果。
829\. ALL_MVIEW_AGGREGATES
合计类的物化视图的SELECT列表中出现的分组函数。
830\. ALL_MVIEW_ANALYSIS
描述可能支持查询重写和有可用于应用程序分析的额外信息的物化视图，但不包含远程和非静态的。
831\. ALL_MVIEW_DETAIL_RELATIONS
描述物化视图FROM列表中的，或间接被FROM列表中视图引用的命名细节关系。
832\. ALL_MVIEW_JOINS
描述物化视图WHERE子句中两列间的连接。
833\. ALL_MVIEW_KEYS
描述物化视图FROM列表中的，或间接被FROM列表中视图引用的命名细节关系.
834\. ALL_MVIEW_REFRESH_TIMES
用户可存取的物化视图的刷新时间。
835\. ALL_MVIEWS
用户可存取的所有的物化视图。
836\. ALL_NESTED_TABLES
用户可存取的表中的嵌套表。
837\. ALL_OBJECT_TABLES
用户可存取的对象表的描述。
838\. ALL_OPANCILLARY
显示操作符的辅助信息。
839\. ALL_OPARGUMENTS
显示操作符捆绑的变元信息。
840\. ALL_OPBINDINGS
显示操作符捆绑。
841\. ALL_OPERATOR_COMMENTS
用户可存取的用户定义操作的所有注释。
842\. ALL_OPERATORS
用户可存取的操作符。
843\. ALL_OUTLINE_HINTS
用户可存取的概要的提示。
844\. ALL_OUTLINES
用户可存取的所有概要。
845\. ALL_PART_COL_STATISTICS
用户可存取的表分区的列统计和柱状图信息。
846\. ALL_PART_HISTOGRAMS
用户可存取的表分区的柱状数据.
847\. ALL_PART_INDEXES
当前用户可存取的所有分区索引的对象级分区信息。
848\. ALL_PART_KEY_COLUMNS
当前用户可存取的分区对象的分区键值。
849\. ALL_PART_LOBS
当前用户可存取的分区LOB的表级信息。
850\. ALL_PART_TABLES
当前用户可存取的分区表的对象级分区信息。
851\. ALL_PARTIAL_DROP_TABS
当前用户可存取的有局部删除表的表。
852\. ALL_POLICIES
当前用户可存取的所有表和视图上的所有策略。
853\. ALL_PROCEDURES
列出所有的函数和过程及相关属性。
854\. ALL_PUBLISHED_COLUMNS
描述用户有特权的存在的源表列。
855\. ALL_QUEUE_TABLES
当前用户可存取的队列表的所有队列。
856\. ALL_QUEUES
显示用户有入队或出队特权的队列信息。
857\. ALL_REFRESH
当前用户可存取的所有刷新组。
858\. ALL_REFRESH_CHILDREN
列出刷新组中的所有对象。
859\. ALL_REFRESH_DEPENDENCIES
显示当前模式中所有概要或快照的依赖细节或容器表名称。
860\. ALL_REFS
当前用户可存取的对象类型列中的REF列和REF属性。
861\. ALL_REGISTERED_MVIEWS
当前用户可存取的所有物化视图。
862\. ALL_REGISTERED_SNAPSHOTS
列出所有注册的快照。
863\. ALL_SEQUENCES
当前用户可存取的所有序列。
864\. ALL_SNAPSHOT_LOGS
当前用户可存取的物化视图日志。
865\. ALL_SNAPSHOT_REFRESH_TIMES
快照刷新次数。
866\. ALL_SOURCE
当前用户可存取的所有存储对象的文本源。
867\. ALL_SOURCE_TABLES
允许发行者查看所有存在的源表。
868\. ALL_SQLJ_TYPE_ATTRS
当前用户可存取的关于SQLJ对象的所有属性。
869\. ALL_SQLJ_TYPE_METHODS
当前用户可存取的类型方法。
870\. ALL_SQLJ_TYPES
当前用户可存取的关于SQLJ对象类型信息。
871\. ALL_STORED_SETTINGS
当前用户有其执行特权的存储PL/SQL单元的永久参数设置。
872\. ALL_SUBPART_COL_STATISTICS
包含USER_TAB_COLUMNS的列统计和柱状信息。
873\. ALL_SUBPART_HISTOGRAMS
显示表子分区中柱状图的实际柱状图信息。
874\. ALL_SUBPART_KEY_COLUMNS
显示使用复合范围/HASH方法分区的表的子分区键值。
875\. ALL_SUBSCRIBED_COLUMNS
允许发行者查看他们预定的所有发行的列。
876\. ALL_SUBSCRIBED_TABLES
允许发行者查看他们预定的所有发行的表.
877\. ALL_SUBSCRIPTIONS
允许发行者查看他们所有的预定.
878\. ALL_SUMDELIA
用户可存取的直接路径装载条目。
879\. ALL_SYNONYMS
用户可存取的所有同义词。
880\. ALL_TAB_COL_STATISTICS
包含ALL_TAB_COLUMNS的列统计和柱状信息。
881\. ALL_TAB_COLUMNS
用户可存取的所有表，视图和聚集的列。
882\. ALL_TAB_COMMENTS
用户可存取的表和视图中的注释。
883\. ALL_TAB_HISTOGRAMS
用户可存取的表和视图中的柱状信息.
884\. ALL_TAB_MODIFICATIONS
用户可存取的上次统计后被修改了的表。
885\. ALL_TAB_PRIVS
列出对象上的授权，用户或PUBLIC用户是被授予者。
886\. ALL_TAB_PRIVS_MADE
列出用户的授权和用户对象上的授权。
887\. ALL_TAB_PRIVS_RECD
列出对象上的授权，用户和PUBLIC是被授予者。
888\. ALL_TAB_SUBPARTITIONS
用户可存取的每个表子分区的名称，存储属性，其所属的表和分区名。
889\. ALL_TABLES
用户可存取的关系表的描述。
890\. ALL_TRIGGERS
用户拥有的触发器。
891\. ALL_TRIGGER_COLS
用户拥有的触发器的列及用法.
892\. ALL_TYPE_ATTRS
用户可存取的类型的属性。
893\. ALL_TYPE_METHODS
用户可存取的类型的方法。
894\. ALL_TYPES
用户可存取的类型。
895\. ALL_UNUSED_COL_TABS
包含未使用列的所有表。
896\. ALL_UPDATABLE_COLUMNS
包含莫连接视图中可以修改的所有列的描述。
897\. ALL_USERS
数据库中所有用户的信息。
898\. ALL_USTATS
用户可存取的用户定义统计。
899\. ALL_VARRAYS
用户可存取的所有数组。
900\. ALL_VIEWS
用户可存取的视图的文本。
ORACLE9I的数据字典
<!--nextpage-->
901\. CHAINED_ROWS
存储带LIST CHAINED ROWS子句的ANALYZE命令的输出。
902\. CHAINGE_SOURCES
允许发行者查看现有的变化资源。
903\. CHANGE_SETS
允许发行者查看现有的变化设置。
904\. CHANGE_TABLES
允许发行者查看现有的变化表。
905\. CODE_PIECES
ORACLE存取这个视图用于创建关于对象大小的视图。
906\. CODE_SIZE
ORACLE存取这个视图用于创建关于对象大小的视图.
907\. COLS
USER_TAB_COLUMNS同义词。
908\. COLUMN_PRIVILEGES
列出列上的授权状况。
909\. DATABASE_PROPERTIES
列出当前缺省的临时表空间的名称。
910\. DBMS_ALERT_INFO
描述注册了的警告。
911\. DBMS_LOCK_ALLOCATED
描述用户分配了的锁。
912\. DEPTREE
有UTLDTREE.SQL创建，包好对象依赖树的信息。
913\. DICT_COLUMNS
包含数据字典表和视图列的描述。
914\. DICTIONARY
包含数据字典表和视图列的描述.
915\. ERROR_SIZE
ORACLE存取这个视图用于创建关于对象大小的视图。
916\. EXCEPTIONS
包含完整约束的违反信息。
917\. FILE_LOCKS
实时应用集群视图，显示到GC_FILES_TO_LOCKS中指定数据文件的PCM锁映象。
918\. FILE_PING
实时应用集群视图，显示每个数据文件连接的块数。
919\. GLOBAL_NAME
当前数据库的全局名。
920\. HS_ALL_CAPS
包含关于非ORACLE(FDS)数据存储有关的所有兼容性信息。
921\. HS_ALL_DD
包含关于非ORACLE(FDS)数据存储的数据字典信息。
922\. HS_ALL_INITS
包含关于非ORACLE(FDS)数据存储的初始化参数信息。
923\. HS_BASE_CAPS
包含关于非ORACLE(FDS)数据存储的基本性能信息。
924\. HS_BASE_DD
显示基本数据字典翻译表的信息。
925\. HS_CLASS_CAPS
包含属于非ORACLE(FDS)数据存储的类指定性能信息。
926\. HS_CLASS_INIT
包含关于非ORACLE(FDS)类指定初始化参数信息。
927\. HS_EXTERNAL_OBJECT_PRIVILEGES
包含授予用户的对象上的特权的信息。
928\. HS_EXTERNAL_OBJECTS
包含ORACLE服务器可存取的所有分布式外部对象的信息。
929\. HS_FDS_CLASS
包含合法的非ORACLE(FDS)类的信息。
930\. HS_FDS_INST
包含合法的非ORACLE(FDS)实例的信息.
931\. HS_INST_CAPS
包含实例指定的性能信息。
932\. HS_INST_DD
显示非ORACLE(FDS)实例特定的数据字典翻译的信息。
933\. HS_INST_INIT
显示非ORACLE(FDS)实例指定的初始化参数的信息。
934\. IDEPTREE
列出依赖树。
935\. INDEX_HISTOGRAM
包含THE ANALYZE INDEX ... VALIDATE STRUCTURE命令的信息。
936\. INDEX_STATS
包含ANALYZE INDEX ... VALIDATE STRUCTURE命令的信息.
937\. NLS_DATABASE_PRAMETERS
列出数据库中永久的NLS参数信息。
938\. NLS_INSTANCE_PARAMETERS
列出实例中永久的NLS参数信息。
939\. NLS_SESSION_PARAMETERS
列出会话中永久的NLS参数信息.
940\. PARSED_PIECES
ORACLE存取这个视图用于创建关于对象大小的视图。
941\. PARSED_SIZE
ORACLE存取这个视图用于创建关于对象大小的视图。
942\. PLAN_TABLE
EXPLAN PLAN语句的结果表。
943\. PLUGGABLE_SET_CHECK
包含可插入的设置检查。
944\. PRODUCT_COMPONENT_VERSION
包含组成产品的版本和状态信息。
945\. PROXY_USERS
描述那些能假设其它用户身份的用户。
946\. PSTUBTBL
包含PSTUB程序生成的根上的信息，以便ORACLE FORM3.0客户可以调用ORACLE数据库中的存储过程。
947\. PUBLIC_DEPTENDENCY
列出对象的依赖。
948\. PUBUCSYN
包含公共同义词上的信息。
949\. QUEUE_PRIVILEGES
显示那些特权授予给了会话的高级查询对象。
950\. RESOURCE_COST
列出每个资源的开销。
951\. RESOURCE_MAP
包含资源的描述。
952\. ROLE_ROLE_PRIVS
包含授予其它角色的角色信息。
953\. ROLE_SYS_PRIVS
包含授予角色的系统特权的信息。
954\. ROLE_TAB_PRIVS
包含授予角色的表特权的信息.
955\. SESSION_CONTEXT
列出当前会话的属性和值设置。
956\. SESSION_PRIVS
列出当前对用户可用的特权。
957\. SESSION_ROLES
列出当前对用户启用的角色.
958\. SOURCE_SIZE
ORACLE存取这个视图用于创建关于对象大小的视图。
959\. STMT_AUDIT_OPTION_MAP
包含审计选项类型代码的信息。
960\. SYSCATALOG
该视图用于与ORACLE5版本保持兼容，建议不使用之。
961\. SYSFILES
该视图用于与ORACLE5版本保持兼容，建议不使用之。
962\. SYSSEGOBJ
该视图用于与ORACLE5版本保持兼容，建议不使用之。
963\. SYSTEM_PRIVILEGE_MAP
包含系统特权代码的信息。
964\. SYS_OBJECTS
将对象ID映射到对象类型和段数据块地址。
965\. TABLE_PRIVILEGE_MAP
包含关于存取特权代码的信息。
966\. TABLE_PRIVILEGES
包含对象上的特权信息。
967\. TABQUOTAS
该视图用于与ORACLE5版本保持兼容，建议不使用之。
968\. TRUSTED_SERVERS
显示服务器是信任的还是不信任的。
969\. TS_PITR_CHECK
提供可能禁止表空间及时点恢复继续的依赖或约束信息。
970\. TS_PITR_OBJECTS_TO_BE_DROPPED
列出作为执行表空间及时点恢复的结果而丢失的所有对象。
971\. UNI_PLUGGABLE_SET_CHECK
保护可插的检查信息。