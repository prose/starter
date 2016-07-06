title: 网络操作系统（Linux）期末复习题
tags:
  - Linux
  - 复习
  - 大三
  - 期末
  - 网络操作系统
id: 1250
categories:
  - 课件❤资料
date: 2010-06-09 14:35:00
---

## **考试题型：**

填空题10空 10分

选择题20题 20分

综合题（回答问题2大题）50分

编程题2小题 10分

简答题2小题 10分

1.  Linux的基本命令的使用
2.  linux的shell编程
3.  linux下的各种服务器的配置
<!--more-->

课后习题  实验  每年的网络工程师试题 和网络管理员试题

期末总评（平时30分 期末考试70分）

## **选择题**

1\. Linux文件权限一共10位长度，分成四段，第三段表示的内容是 。
A 文件类型                     B 文件所有者的权限
C 文件所有者所在组的权限       D 其他用户的权限

2\.   在使用mkdir命令创建新的目录时，在其父目录不存在时先创建父目录的选项是 。D
A -m             B -d              C -f               D –p

3\. 终止一个前台进程可能用到的命令和操作 。
A kill                      B &lt;CTRL&gt;+C                C shut down               D halt

4\. 局域网的网络地址192.168.1.0/24，局域网络连接其它网络的网关地址是192.168.1.1。主机192.168.1.20访问172.16.1.0/24网络时，其路由设置正确的是。

A .route add –net 192.168.1.0 gw 192.168.1.1  netmask 255.255.255.0 metric 1
B. route add –net 172.16.1.0 gw 192.168.1.1 netmask 255.255.255.255 metric 1
C. route add –net 172.16.1.0 gw 172.16.1.1 netmask 255.255.255.0 metric 1
D. route add default 192.168.1.0 netmask 172.168.1.1 metric 1

5\. 下列提法中，不属于ifconfig命令作用范围的是 。
A 配置本地回环地址             B 配置网卡的IP地址
C 激活网络适配器                D 加载网卡到内核中

6\. 下列文件中，包含了主机名到IP地址的映射关系的文件是： 。
A /etc/HOSTNAME         B /etc/hosts           C /etc/resolv.conf          D /etc/networks

7\. 配置Apache 1.3.19服务器需要修改的配置文件为___ ______
A httpd.conf              B access.conf          C srm.conf          D named.conf

8\. 若一台计算机的内存为128MB，则交换分区的大小通常是 。
A 64MB            B 128MB              C 256MB              D 512MB

9\. 当我们与某远程网络连接不上时，就需要跟踪路由查看，以便了解在网络的什么位置出现了问题，满足该目的的命令是   。
A ping                     B ifconfig               C traceroute               D netstat

10\. NFS是   系统。
A 文件                     B 磁盘                C 网络文件         D 操作

11\. Linux文件系统的文件都按其作用分门别类地放在相关的目录中，对于外部设备文件，一般应将其放在   目录中。
A /bin                    B /etc                 C /dev                  D /lib

13\. 将Windows C:盘(hda1)安装在Linux文件系统的/winsys目录下，命令是 。B
A root@l04.edu.cn:~#mount dev/hda1 /winsys
B root@l04.edu.cn:~#mount /dev/hda1 /winsys
C root@l04.edu.cn:~#mount /dev/hda1 winsys
D root@l04.edu.cn:~#mount dev/hda1 winsys

14\. 在shell中变量的赋值有四种方法，其中，采用name=12的方法称   。
A 直接赋值                B使用read命令           C 使用命令行参数      D使用命令的输出

15\. 对名为fido的文件用chmod 551 fido 进行了修改，则它的许可权是   。
A -rwxr-xr-x         B -rwxr--r--          C -r--r--r--            D -r-xr-x—x

16.在下列的名称中，不属于DNS服务器类型的是：____ ____
A Primary Master Server             B Secondary Master Server
C samba                                           D Cache_only Server

17\. 网络管理员对WWW服务器进行访问、控制存取和运行等控制，这些控制可在 A 文件中体现。
A httpd.conf                 B lilo.conf            C inetd.conf          D resolv.conf

18\. 对文件进行归档的命令为   。D
A dd              B cpio           C gzip                  D tar

19\. 建立一个新文件可以使用的命令为  D。
A chmod               B more            C cp                   D touch

20\. 在使用匿名登录ftp时，用户名为  B 。
A users          B anonymous               C root           D guest

21\. Linux 文件名的长度不得超过   个字符。C
A 64              B 128              C 256                   D 512

22\. 从后台启动进程，应在命令的结尾加上符号A   。
A &amp;              B @              C #                      D $

23\. 在Shell脚本中，用来读取文件内各个域的内容并将其赋值给Shell变量的命令是  D 。
A fold           B join             C tr                    D read

24\. Apache服务器默认的接听连接端口号是  C 。
A 1024            B 800          C 80              D 8

25\. OpenSSL是一个 A  。
A 加密软件  B 邮件系统  C 数据库 管理 系统  D 嵌入式脚本编程语言

26\. Samba服务器的配置文件是 D  。
A httpd.conf    B inetd.conf        C rc.samba     D smb.conf

27\. 关于DNS服务器，叙述正确的是 D  。
A DNS服务器配置不需要配置客户端
B 建立某个分区的DNS服务器时只需要建立一个主DNS服务器
C 主DNS服务器需要启动named进程，而辅DNS服务器不需要
D DNS服务器的root.cache文件包含了根名字服务器的有关信息

28\. 退出交互模式的shell，应键入 C  。
A &lt;Esc&gt;;       B ^q       C exit     D quit

29.将光盘CD-ROM（hdc）安装到文件系统的/mnt/cdrom目录下的命令是   。
A mount /mnt/cdrom                          B mount /mnt/cdrom /dev/hdc
C mount /dev/hdc /mnt/cdrom             D mount /dev/hdc

30\. 将光盘/dev/hdc卸载的命令是  。
A umount /dev/hdc                     B unmount /dev/hdc
C umount /mnt/cdrom /dev/hdc    D unmount /mnt/cdrom /dev/hdc

31\. 可以完成主机名与IP地址的正向解析和反向解析任务的命令是：A  。
A nslookup           B arp             C ifconfig             D dnslook

32\. 下列变量名中有效的shell变量名是： C 。
A -2-time                    B _2$3          C trust_no_1         D 2004file

33\. 已知某用户stud1，其用户目录为/home/stud1。如果当前目录为/home，进入目录/home/stud1/test的命令是   C。
A cd test          B cd /stud1/test           C cd stud1/test              D cd home

34\. 已知某用户stud1，其用户目录为/home/stud1。分页显示当前目录下的所有文件的文件或目录名、用户组、用户、文件大小、文件或目录权限、文件创建时间等信息的命令是  D 。
A more ls –al               B more –al ls          C more &lt; ls –al           D ls –al | more

35\. 如果想配置一台匿名ftp服务器，应修改  C文件。
A /etc/gateway              B /etc/ftpservers           C /etc/ftpusers         D /etc/inetd.conf

36\. Samba服务器的进程由  两部分组成 B。
A named和sendmail           B smbd和nmbd            C bootp和dhcpd        D httpd和squid

37\. 要配置NFS服务器，在服务器端主要配置   文件。
A /etc/rc.d/rc.inet1          B /etc/rc.d/rc.M          C /etc/exports               D /etc/rc.d/rc.S

38.为保证在启动服务器时自动启动DHCP进程，应对  文件进行编辑。
A /etc/rc.d/rc.inet2               B /etc/rc.d/rc.inet1               C /etc/dhcpd.conf         D /etc/rc.d/rc.S

39\. 在配置代理服务器时，若设置代理服务器的工作缓存为64MB，配置行应为   。
A cache 64MB                     B cache_dir ufs /usr/local/squid/cache 10000 16 256
C cache_ mgr 64MB            D cache_ mem 64MB

40\. B 命令是在vi编辑器中执行存盘退出。
A :q              B ZZ             C :q!             D :WQ

41\.   目录存放着Linux的源代码。B
A /etc            B /usr/src         C /usr          D /home

42\. 文件exer1的访问权限为rw-r--r--，现要增加所有用户的执行权限和同组用户的写权限，下列命令正确的是 A  。
A chmod a+x g+w exer1             B chmod 765 exer1
C chmod o+x exer1                    D chmod g+w exer1

43\. 有关归档和压缩命令，下面描述正确的是   。
A 用uncompress命令解压缩由compress命令生成的后缀为.zip的压缩文件
B unzip命令和gzip命令可以解压缩相同类型的文件
C tar归档且压缩的文件可以由gzip命令解压缩
D tar命令归档后的文件也是一种压缩文件

44.不是shell具有的功能和特点的是 A  。
A 管道         B 输入输出重定向             C 执行后台进程         D 处理程序命令

45\. 下列对shell变量FRUIT操作，正确的是：C   。
A 为变量赋值：$FRUIT=apple                B 显示变量的值：fruit=apple
C 显示变量的值：echo $FRUIT               D 判断变量是否有值：[ -f “$FRUIT” ]

46\. How do you install an RPM? Choose the best answer:  B

A. rpm -evh packagename.rpm

B. rpm -ivh packagename.rpm

C. rpm -q packagename.rpm

D. rpm -qa *.rpm

E. rpm -ql *.rpm

47.linux交换分区的作用是________

A. 保存系统软件                       B. 保存访问过的网页文件

C．虚拟内存空间                      D. 作为用户的主目录

48\. linux操作系统中，cd ../.. 命令的作用是______D_

A .转到当前目录的上级目录                     B.转到根目录

C．转到/root目录                            D.转到当前目录的上两级目录

49.____C__命令能实现重新启动linux操作系统

A.init0                  B. halt           C. Shutdown –r     D. shutdown  -h

50.当linux用户需要将FTP默认的21号端口修改为8800，可以修改__B____配置文件

A./etc/vsftpd/userconf                     B. /etc/vsftpd/vsftpd.conf

C./etc/resolv.conf                      D. /etc/hosts

51.要使Samba服务器在网上邻居中出现的主机名为smbserver，其配置文件smb.conf中应包含  B   。

A. workgroup=smbserver                 B. netbios

C. server string=smbserver                 D. guest account=smbserver

52\. 某Apache服务器的配置文件httpd.conf包含如下所示配置项。在<span style="text-decoration: underline;">（</span><span style="text-decoration: underline;">1</span><span style="text-decoration: underline;">）</span>处选择合适的选项，使得用户可通过http://www.test.cn访问到该Apache服务器；当用户访问http:// 111.25.4.30:80时，会访问到<span style="text-decoration: underline;"> </span><span style="text-decoration: underline;">（2</span><span style="text-decoration: underline;">）</span>虚拟主机。

NameVirtualHost 111.25.4.30: 80

&lt;VirtualHost 111.25.4.30: 80&gt;

ServerName www.othertest.com

DocumentRoot /www/othertest

&lt;/VirtualHost&gt;

&lt;VirtualHost 111.25.4.30: 80&gt;

ServerName <span style="text-decoration: underline;">（</span><span style="text-decoration: underline;">1</span><span style="text-decoration: underline;">）</span>

DocumentRoot /www/otherdate

&lt;/VirtualHost&gt;

&lt;VirtualHost 111.25.4.30: 80&gt;

ServerName www.test.com

ServerAlias test.com *.test.com

DocumentRoot /www/test

&lt;/VirtualHost&gt;

（1）A．www.othertest.com                         B．www.test.com

C．www.test.cn                                 D．ftp.test.com

（2）A．www.othertest.com                         B．www.test.com

C．www.test.cn                                 D．ftp.test.com

53.实现VPN的关键技术主要有隧道技术、加解密技术、<span style="text-decoration: underline;"> </span><span style="text-decoration: underline;">（1D</span><span style="text-decoration: underline;">） </span>和身份认证技术。如果需要在传输层实现VPN，可选的协议是<span style="text-decoration: underline;"> </span><span style="text-decoration: underline;">（2</span><span style="text-decoration: underline;">） </span>。

（1）A. 入侵检测技术                                B. 病毒防治技术

C. 安全审计技术                              D. 密钥管理技术

（2）A. L2TP                                              B. PPTP

C. TLS                                              D. IPsec

54.在一台256M RAM的计算机上安装Linux系统，交换分区（swap）的大小合理的设置应该为____B____。
A．128M　　　　B．512M　　　　C．1024M　　　　　D．4096M

55.在Linux 中系统的配置文件存放在________目录下。
A．/bin　　　　 B．/etc　　　　C．/dev　　　　　 D．/root

56.在Linux 中，下列________可以获得任何Linux 命令的在线帮助。
A．# help &lt;command&gt;　　　　B．#show &lt;command&gt;
C．# man &lt;command&gt;　　　　 D．# ls &lt;command&gt;

57.在Linux操作系统中手工安装Apache服务器时，默认的Web站点的目录为____。
A. /etc/httpd　　B. /var/log/httpd　C. /etc/home　D. /home/httpd

58.在Linux中，__  __命令可用显示当前用户的工作目录。
A. #where　　　　B. #md　　　　 C. #pwd　　　D. #rd

59\. 在Linux 操作系统中把外部设备当作文件统一管理，外部设备文件通常放在___ ___目录中。
A．/dev　　　　　B．/lib　　　　　C．/etc　　　　　D．/bin

60\. 下列____C__命令可以更改一个文件的权限设置。
A．attrib　　　　B．file　　　　　C．chmod　　　　 D．change

61.通过Samba 组件实现Linux 与Windows 文件资源共享时，需要提供的守护进程(daemon)是_____。
A．bind　　　　　B．smbd　　　　　C．named　　　　 D．shard

62\. 下列文件中，包含了主机名到IP地址的映射关系的文件是：B
A /etc/HOSTNAME B /etc/hosts C /etc/resolv.conf D /etc/networks

63\. 在shell中变量的赋值有四种方法，其中，采用name=12的方法称 A 。
A 直接赋值                        B使用read命令
C 使用命令行参数             D使用命令的输出
64\. Linux有三个查看文件的命令，若希望在查看文件内容过程中可以用光标上下移动来查看文件内容，应使用 C 命令。
A cat             B more                C less                   D menu
65\. 对名为fido的文件用chmod 551 fido 进行了修改，则它的许可权是 D  。
A -rwxr-xr-x                B -rwxr--r--            C -r--r--r--          D -r-xr-x—x
66\. 关闭linux系统（不重新启动）可使用命令 。
A Ctrl+Alt+Del            B halt                   C shutdown -r now     D reboot

67.在vi编辑器中的命令模式下，键入  可在光标当前所在行下添加一新行。
A &lt;a&gt;;         B &lt;o&gt;;           C &lt;I&gt;;               D A
68．在vi编辑器中的命令模式下，删除当前光标处的字符使用 A 命令。
A &lt;x&gt;;         B &lt;d&gt;;&lt;w&gt;;              C &lt;D&gt;;         D &lt;d&gt;;&lt;d&gt;;
69．在vi编辑器中的命令模式下，重复上一次对编辑的文本进行的操作，可使用  命令。
A 上箭头             B 下箭头                      C &lt;.&gt;;                 D &lt;*&gt;;
70．用命令ls -al显示出文件ff的描述如下所示，由此可知文件ff的类型为   。
-rwxr-xr-- 1 root root 599 Cec 10 17:12 ff
A 普通文件                 B 硬链接                    C 目录                 D 符号链接

71\. Apache服务器默认的接听连接端口号是C   。
A 1024           B 800                 C 80                    D 8
72\. 关于DNS服务器，叙述正确的是   。
A DNS服务器配置不需要配置客户端
B 建立某个分区的DNS服务器时只需要建立一个主DNS服务器
C 主DNS服务器需要启动named进程，而辅DNS服务器不需要
D DNS服务器的root.ca文件包含了根名字服务器的有关信息

73\. 设超级用户root当前所在目录为：/usr/local，键入cd命令后，用户当前所在目录为B   。
A /home              B /root          C /home/root              D /usr/local

74\. 在Linux操作系统中，对DHCP配置文件的参数描述错误的是<span style="text-decoration: underline;"> </span>。

A. fixed-address ip用于分配给客户端一个固定的地址

B. hardware用于指定网卡接口类型和MAC地址

C. max-lease-time用于指定最大租赁时间长度

D. option用于设置可分配的地址池

75.在Linux操作系统中，<span style="text-decoration: underline;">_______</span>配置文件包含主机名到IP地址的映射。

A. /etc/hostname                             B. /etc/hosts

C. /etc/resolv.conf                            D. /etc/networks

## Shell 编程题

1．  用Shell编程，判断一文件是不是字符设备文件，如果是将其拷贝到 /dev 目录下。

2．  设计一个shell程序，添加一个新组为class1，然后添加属于这个组的30个用户，用户名的形式为stdxx，其中xx从01到30。

3．  编写shell程序，实现自动删除50个账号的功能。账号名为stud1至stud50。

4．  设计一个shell程序，在每月第一天备份并压缩/etc目录的所有内容，存放在/root/bak目录里，且文件名为如下形式yymmdd_etc，yy为年，mm为月，dd为日。Shell程序fileback存放在/usr/bin目录下。

5．  设计一个Shell程序，在/userdata目录下建立50个目录，即user1～user50，并设置每个目录的权限，其中其他用户的权限为：读；文件所有者的权限为：读、写、执行；文件所有者所在组的权限为：读、执行。

6．  在/home下创建100个目录，目录名为std1-100

7．  请在/home创建目录stu，创建的stu目录的使用者是netstu,用户组是net。且满足用户的所有者对该目录有读、写和执行权，同组用户有读和执行权，其他用户对该目录没有任何权限。

8．  ABC软件开发公司的开发人员Tom将要参与一个新项目的开发。现在他需要在自己的个人目录下面建立一个子目录project，然后在该新建的子目录下面再分别建立三个子目录：Source、Doc和scrīpt。以便以后用来存放开发过程中需要用到的开发文档和源程序等文件。

9．  ABC软件开发公司即将开始在Linux系统上进行两个项目的开发。开发人员David和Peter组成一个小组，负责A项目的开发；开发人员Jack和Mike组成另一个小组，负责B项目的开发。系统管理员ray需要为这四名开发人员分别建立用户账号，并满足以下要求：
（1）建立目录“/Project_a”，该目录里面的文件只能由David和Peter两人读取、增加、删除、修改以及执行，其他用户不能对该目录进行任何的访问操作；
（2）建立目录“/Project_b”，该目录里面的文件只能由Jack和Mike两人读取、增加、删除、修改以及执行，其他用户不能对该目录进行任何的访问操作；
（3）建立目录“/project”，该目录里面的文件只能由David、Peter、Jack和Mike四个人读取、增加、删除、修改以及执行，其他用户只可以对该目录进行只读的操作。

## **Linux****简答题**

** **

**1****、简述Linux ****的优点：**

Linux 是一个多用户多任务操作系统，每个用户对自己的资源有特定的权限，互不影响。每个用户还可以同时执行多个程序，各个程序的运行互相独立。

Linux 为用户提供了直观、易操作、交互性强的图形化界面。Linux 还支持的传统 UNIX 基于文本的命令行界面。

Linux具有紧密地和内核结合在一起的网络功能, 为用户提供了大量 Internet 工具，如 FTP，TELNET 和 SLIP 等。它支持 Internet，远程文件传输和远程访问。

Linux是一套自由软件，用户不仅可以无偿地得到它，还可以获得源代码，因此就可以按照自己的需求任意地修改和补充它们。用户可以按照自己的需要修改内核源代码，加入新的外部设备。

Linux不仅是一个功能强大的操作系统，而且还包括了丰富的应用软件，除了文本编辑器、办公、娱乐等应用软件外，还提供了比较完整的程序开发工具。从Internet上可以下载Linux及其源代码，还可以从Internet上下载许多Linux的应用程序。在有关Linux的网站上，基本上能够找到适合任何特殊需要的应用程序及其源代码。

2、**IDE2 ****的主分区的第一个逻辑分区的设备代号（文件名称）是什么？**** **

/dev/hdc5

3、**早期的**** Unix ****系统文件名最多允许**** 14 ****个字符，而新的**** Unix ****与**** Linux ****系统中，文件名最多可以容许几个字符？****
**答：
255个字符

**4****、一般而言安装**** Linux ****至少要有哪两个分区呢？**** **

根目录 / (root)

虚拟内存 Swap

**5****、一般而言，在**** RAM ****为**** 64MB ****或**** 128 MB ****的系统中，**** swap ****要开多大？**** **

约两倍的 RAM ，亦即为 128 MB 或 256 MB。

**6****、默认的**** Linux ****文件格式是什么？**

Ext3

7、**Red Hat Linux ****支持多种文件类型，下面列出常用的文件类型和他们的用处。**** **

**ext2** — 支持标准的 Unix 文件类型，支持长文件名（255字符）

**ext3** — 在ext2 基础上扩展，加入了日志支持，使系统文件在崩溃后能够快速恢复。

**software RAID** — 生成两个或多个软RAID 分区，使用户可以建立RAID 设备。

**swap** — 交换分区用于支持虚拟内存。

**Vfat** — 和Windows 95/NT长文件名FAT系统兼容的Linux文件系统。

启动装载程序有GRUB (省缺的)和LILO两种。它们不仅可以用来启动Linux 还可以启动其他系统，如 Windows 系统等。

8、**如何删除****Linux**

删除Linux，只须使用fdisk 命令，清除分配给Linux的分区。但要注意的是，在Linux 下建立的分区应当使用Linux 自己的分区程序来删除。删除Linux 后，要删除lilo，则要使用Wndiows 引导盘启动，然后输入命令: fdisk /mbr。

**1****、使用什么命令在****Linux****文件系统的不同目录之间切换，如何显示当**前所在的目录？

cd 是在Linux文件系统的不同目录之间切换的命令。pwd命令显示当前所在的目录。

**2****、使用什么命令列出当前目录中的文件和子目录名？**** **

使用 ls 命令将列出当前目录中的文件和子目录名。

使用dir或vdir命令也可以列出目录中的文件清单。使用上与ls命令类似。

**3****、****使用什么命令****把两个文件的合并成一个**** ****文件？。**** **

cat命令可用来进行文件的合并、建立、覆盖或者添加内容等操作。

**4****、有那些命令可用来查看文件的内容，这些命令有什么不同？**** **

cat命令用来把文件内容显示到屏幕上，还用来进行文件的合并、建立、覆盖或者添加内容等操作。

more命令可以在浏览文件的时候前后翻页，在阅读长文本时特别有用。

less命令比more命令功能更强，是许多程序(比如man命令等)使用的缺省的阅读命令。less 的输出结果可以向前或向后翻页，但是 more 仅能向前翻页。

head和tail命令用来阅读文件的开头或者结尾的部分。加上参数-n x 可以指定查看 x 行。

**5****、使用什么命令来查询文件的属性？**** **

答：

ls –al, file, ls attr

**6****、如何将一个文件的修改日期改成目前的时间？**** **

touch命令用来建立文件或用来更新文件的修改日期。

**7****、新建、移动、删除和复制****文件****使用什么命令？**** **

Cat、touch命令可用来建立文件。

rm命令可以用来删除文件和目录。

mv命令用于文件改名，也可以用来在文件系统内移动文件或者子目录。

cp命令用来对文件进行复制操作。

**8****、新建、移动、删除和复制****目录****使用什么命令？**** **

mkdir命令用于建立子目录。此命令可以一次建立多个子目录。

mv命令用于文件改名，也可以用来在文件系统内移动文件或者子目录。

rm命令可以用来删除文件和目录。

rmdir命令用来删除空子目录。

cp命令用来对子目录进行复制操作。

**9****、在进行文件比较时，常使用的是**** diff ****与**** comm ****，这两者有何不同？**** **

使用comm命令可以对两个有序的文件进行比较。

使用diff命令可以找到两个文本文件的差别。此命令将两个文件进行逐行比较，并返回有区别的行，并指出如何修改第一个文件（file1）才能使其和第二个文件相同。

**10****、使用什么命令确定文件类型、统计文件中的信息？**** **

命令file用来确定文件的类型。使用此命令时，可以指定一个或多个文件名。

wc命令可以统计指定文件中的字节数、字数、行数, 并将统计结果显示在屏幕上。

**11****、最****常用的获得帮助的****命令是什么？**** **

man 联机帮助手册；查询每个命令的使用方法；help 查询Shell命令；whatis 和apropos查询某个命令；Whereis、locate 、which查询某个文件的位置；Find 查找具有用户指定特定属性的文件；Grep 在文件中查找特定的内容。

**12****、在获取帮助时，常使用的是**** ****man**** ****与**** ****help**** ****，这两者有何不同？**** **

要使用Linux操作系统,首先要知道如何获得帮助。Linux系统中有大量命令和实用工具软件，当用户想使用某个命令,而又不清楚命令的具体使用方法时,可以借助Linux提供的联机帮助手册获取各种命令和软件的使用信息。

只要输入man命令和待要查命令的名称（如man cd），就会在屏幕上列出帮助页。

help命令用于查看Shell命令的使用方法。在所查找的命令后输入help命令，就可以看到所查命令的内容了。

**13****、****简述如何使用****RPM****安装软件。**** **

如果想安装某个rpm软件包，需要使用 - i参数，指定要安装的软件包名称。在安装或者删除软件之前，必须以root 身份登录进入系统或者拥有root的权限。例如，要安装gperf软件包，在光盘驱动器插入Red Hat的第二张安装盘之后输入如下的命令：

# rpm -i /mnt/cdrom/ RedHat/RPMS/ gperf-2.7.2-9.i386.rpm

**14****、****简述如何使用****RPM****删除软件。**

要删除软件包，需要使用 -e删除参数，后面跟上这个程序的名称，范例如下：

# rpm -e foo

**15****、****简述如何使用****RPM****进行软件升级。**

要升级到新的版本，需要使用- U 参数，范例如下：

$ rpm -Uvh foo-2.0-1.i386.rpm

foo                       ####################################

RPM将自动卸载已安装的老版本软件包并安装新软件包，使用- U 参数时，即使不存在老版本也会安装新软件包。因为RPM 能自动处理配置文件，所以如果新老版本的配置文件不一样，屏幕上就会显示类似如下的信息：

**16****．简述如何使用****RPM****进行软件包查询。**

使用命令rpm –q可以查询已安装软件包的信息。在命令中加入参数可以指明要查询哪些软件包。

-a 查询所有已安装的软件包。

-f &lt;file&gt; 将查询包含有文件&lt;file&gt;. 的软件包。

-p &lt;packagefile&gt; 查询软件包文件名为&lt;packagefile&gt;. 的软件包。

-i 显示软件包信息，如描述， 发行号， 尺寸， 构建日期， 安装日期， 平台等。

-l 显示软件包中的文件列表。

-s 显示软件包中所有文件的状态。.

-d 显示被标注为文档的文件列表(man 手册， info 手册等)。

-c 显示被标注为配置文件的文件列表。

-v 使显示格式类似使用 ls -l 命令的显示格式。

**17****．简述如何使用****RPM****校验软件包。**

要对已安装软件包进行检查，要使用- V 参数，范例如下：

# rpm -V taper

如果屏幕上不显示任何信息，表示一切正常。而如果软件包中的任何文件在长度、所有权限、存取权限等方面发生了改变，就会显示出错信息。

**18****．在误删了一些文件后，如何使用****RPM****检查出系统都丢失了那些文件。**

在误删了一些文件后，可以使用rpm –Va 命令检查出系统都丢失了那些文件。

如果出现错误，就会显示错误信息。错误代码是8位长字符串，每一个字符表示一种属性。“.”表示测试通过。以下字符表示错误种类：

5 MD5 校验码

S 文件尺寸

L 符号连接

T 文件修改日期

D 设备

U 用户

G 用户组

M 模式

e (包括权限和文件类型)

19.**如何在命令行方式下进行****vi****文本编辑器。**

在 shell 提示下键入 vi，将启动 **vi**，。如果在 shell 提示下键入 vi &lt;_filename_&gt;，则在打开 **vi** 的同时，把文本文件调入到编辑器中。首次启动vi，在屏幕上将回给出简单的提示，下图就是首次打开vi 的界面。

vi 有“一般模式”、“编辑模式”和“命令模式”三种模式。Vi启动后直接进入一般模式。此时可以查看整个文件，也可以进行删除、复制、粘贴等操作，但是却无法插入文字。此时按键都将被视为命令。

要能够编辑文本，首先要按下i, I, o, O, a, A, r, R等键（分别代表插入、覆盖、附加和替换），这时将进入编辑模式。按下上述的字母后，屏幕的左下方会出现“INSERT”或“REPLACE”，这表示现在可以输入文字了。要从编辑模式中退出，返回到一般模式，只要按下“Esc”键即可。在一般模式下，输入冒号：或斜杠/，光标将移动到屏幕最下一行，此时可以根据需要输入命令，最常用的命令如下：
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="234" valign="top">:w</td>
<td width="236" valign="top">将编辑的文本存盘。</td>
</tr>
<tr>
<td width="234" valign="top">:w!</td>
<td width="236" valign="top">若文件属性为“只读”时，强制存盘</td>
</tr>
<tr>
<td width="234" valign="top">:q</td>
<td width="236" valign="top">退出 vi</td>
</tr>
<tr>
<td width="234" valign="top">:q!</td>
<td width="236" valign="top">退出且不存盘。</td>
</tr>
<tr>
<td width="234" valign="top">:wq</td>
<td width="236" valign="top">存盘并退出</td>
</tr>
<tr>
<td width="234" valign="top">:e!</td>
<td width="236" valign="top">将文本还原到最初始状态。</td>
</tr>
</tbody>
</table>
21**、使用什么命令在****Linux****文件系统的不同目录之间切换，如何显示当**前所在的目录？

cd 是在Linux文件系统的不同目录之间切换的命令。pwd命令显示当前所在的目录。

**22****、使用什么命令列出当前目录中的文件和子目录名？**

使用 ls 命令将列出当前目录中的文件和子目录名。

使用dir或vdir命令也可以列出目录中的文件清单。使用上与ls命令类似。

**23****、****使用什么命令****把两个文件的合并成一个**** ****文件？。**

cat命令可用来进行文件的合并、建立、覆盖或者添加内容等操作。

**24****、有那些命令可用来查看文件的内容，这些命令有什么不同？**

cat命令用来把文件内容显示到屏幕上，还用来进行文件的合并、建立、覆盖或者添加内容等操作。

more命令可以在浏览文件的时候前后翻页，在阅读长文本时特别有用。

less命令比more命令功能更强，是许多程序(比如man命令等)使用的缺省的阅读命令。less 的输出结果可以向前或向后翻页，但是 more 仅能向前翻页。

head和tail命令用来阅读文件的开头或者结尾的部分。加上参数-n x 可以指定查看 x 行。

**25****、使用什么命令来查询文件的属性？**** **

答：

ls –al, file, ls attr

**26****、如何将一个文件的修改日期改成目前的时间？**** **

touch命令用来建立文件或用来更新文件的修改日期。

**27****、新建、移动、删除和复制****文件****使用什么命令？**** **

Cat、touch命令可用来建立文件。

rm命令可以用来删除文件和目录。

mv命令用于文件改名，也可以用来在文件系统内移动文件或者子目录。

cp命令用来对文件进行复制操作。

**28****、新建、移动、删除和复制****目录****使用什么命令？**** **

mkdir命令用于建立子目录。此命令可以一次建立多个子目录。

mv命令用于文件改名，也可以用来在文件系统内移动文件或者子目录。

rm命令可以用来删除文件和目录。

rmdir命令用来删除空子目录。

cp命令用来对子目录进行复制操作。

**29****、在进行文件比较时，常使用的是**** diff ****与**** comm ****，这两者有何不同？**** **

使用comm命令可以对两个有序的文件进行比较。

使用diff命令可以找到两个文本文件的差别。此命令将两个文件进行逐行比较，并返回有区别的行，并指出如何修改第一个文件（file1）才能使其和第二个文件相同。

**30****、使用什么命令确定文件类型、统计文件中的信息？**** **

命令file用来确定文件的类型。使用此命令时，可以指定一个或多个文件名。

wc命令可以统计指定文件中的字节数、字数、行数, 并将统计结果显示在屏幕上。

**31****、最****常用的获得帮助的****命令是什么？**** **

man 联机帮助手册；查询每个命令的使用方法；help 查询Shell命令；whatis 和apropos查询某个命令；Whereis、locate 、which查询某个文件的位置；Find 查找具有用户指定特定属性的文件；Grep 在文件中查找特定的内容。

**32****、在获取帮助时，常使用的是**** ****man**** ****与**** ****help**** ****，这两者有何不同？**** **

要使用Linux操作系统,首先要知道如何获得帮助。Linux系统中有大量命令和实用工具软件，当用户想使用某个命令,而又不清楚命令的具体使用方法时,可以借助Linux提供的联机帮助手册获取各种命令和软件的使用信息。

只要输入man命令和待要查命令的名称（如man cd），就会在屏幕上列出帮助页。

help命令用于查看Shell命令的使用方法。在所查找的命令后输入help命令，就可以看到所查命令的内容了。

**33****、要知道**** date ****如何使用，应该如何查询？**** **

最简单的方式就是使用 man date 或 info date 来查看，如果该套件有完整说明的话，那么应该也可以在 /usr/share/doc 里面找到说明档！

** **

**34****、想要查询**** /etc/crontab ****与**** crontab ****这个程序的用法与写法，请问我该如何线上查询？**** **

查询 crontab 指令可以使用 man crontab 或 info crontab ，至于查询 /etc/crontab ，则可以使用 man 5 crontab啰！

**35****、****whatis****命令****和****whereis****命令****有何不同？**** **

使用whatis命令可以得到有关命令帮助页的简单介绍，这些信息保存在whatis数据库中。如果此命令不能使用，就需要以root身份登录，然后执行命令makewhatis命令，重新建立whatis数据库。

whereis命令只能查找源代码、二进制文件和帮助文件，而不是所有类型的文件。执行命令后，可以提供这个文件的二进制可执行文件、源代码文件和使用手册页存放的位置。例如：查找ls命令在什么目录下。

36.**在命令行方式下要为文件和目录创建备份文件如何操作。**

最常用的备份工具是tar。tar命令用来为文件和目录创建备份文件（或称为打包）。使用tar 命令可以把多个文件和目录创建成一个备份文件。使用此命令也可以改变备份文件中的文件，或者向备份文件中加入新的文件。tar命令在生成备份文件时，不对文件进行压缩，所以打包所生成的备份文件的大小将等于备份文件中所有文件原大小的总和。

**37****、常用的文件压缩命令有什么？**

gzip是对文件进行压缩的命令。gunzip命令将压缩文件还原，它可以正确地还原由gzip、zip和compress等命令生成的压缩文件。

Zip也是常用的压缩软件， unzip命令用于解压缩。在DOS 或者Windows 9X里使用的.zip文件也可以用unzip来解压。范例如下：

bzip2，bunzip2 是压缩比最高的压缩工具。

38、**要查找包含特定字符串的文件，应使用什么命令，简述这个命令的基本用法。**

grep命令用来查找包含特定字符串的文件。其基本用法是：

# grep &lt;pattern&gt; &lt;files...&gt;

其中pattern是要查找的字符串，files是用空格分隔的待查找的文件列表，列表中使用通配符。列表中所有都必须是文件，不能是目录。grep在找到符合条件的文件时，将显示文件名和包含该字符串的行。

** **

**39****、指出下列命令查找的是什么文件？**

**# grep -n basic  *.txt****。**

**# grep -n ****‘****basic using****’**** *.txt****。**

**# grep ****‘****^$****’**** filename**

**# grep ****‘****\.****’**** filename**

1．查找当前目录下包含字符串“vcs”的所有文本文件。

2．查找当前目录下包含字符串“vcs using”的所有文本文件。

3． 在文件中查找空行：

4．查找文件中包含句点的行：

40、**要修改文件或目录所属的组，使用什么命令**

要修改文件或目录所属的组，可以使用chgrp 命令

**41****、使用什么命令可以改变文件或目录的所有者。**

Chown

42、**如一个文件属性为**** –rwxrwxrwx ****则这个文件的权限如何****？**** **

任何人可读取、可写入亦可删除。

43、**当一个文件属性为**** ****–****rwxrwxrwt ****则这个文件的权限是什么样的？**** **

答：

任何人皆可读取、可写入，但是不可删除该文件(或目录)，除了 root 与文件或目录拥有者有权可以删除。

**44****、如要将一个文件属性改为**** ****–****rwxr-xr****—应如何使用？又如何将文件属性改为**** ****–****rwxr-sr-x ****与**** ****–****rwxr-xr-t****这个属性？**** **

答：

chmod 754 filename, chmod u=rwx,g=rx,o=r filename

chmod 2755 filename

chmod 1755 filename

45、**Linux****文件系统中包括的主要文件类型有****：**

普通文件：普通文件包括文本文件、二进制可执行文件、shell脚本文件以及各种类型的数据文件，如图像文件、声音文件等。

目录文件：目录文件是一种特殊的文件，它们包含文件名和子目录名，以及查找这些文件和子目录所必需的信息。

链接文件：普通的链接实际上不是文件，它们仅是指向同一索引节点的目录条目，是一个索引节点表。

设备文件：Linux系统把每一个输入/输出设备都看成一个文件，与普通文件一样处理，这样可以使文件与设备的操作尽可能统一。其中可以读写单个字符的是设备字符设备（如键盘）；不能访问单个字符，而必须整块读写的设备称作块设备（如磁盘）。

46、**在使用命令时**** ****“****.****”****，****“****..****”****和****“****~****”****，表示什么。**

在使用命令时，用“.”表示当前目录，用“..”表示上一级目录，用“~”表示自己的主目录。

47、**什么是绝对路径与相对路径**** **

路径又分相对路径和绝对路径。 绝对路径是指从""开始的路径，也称为完全路径；相对路径是从用户当前目录开始的路径。系统中每一个文件都有一个完全路径名。用户要访问一个文件时，可以通过路径名来引用。此时可以使用绝对路径名，也可以使用相对路径名。

48、**在**** Linux ****系统中，什么是目录，文件结构是什么样的？**** **

目录是Linux系统中的一种特殊文件，目录中保存的是文件名和i节点数组。Linux系统把文件信息以树型结构组织起来。树形结构由一个根目录（root）和根目录下的子目录构成。每一个目录内可以包含下一级目录、文件、指向其他文件系统的指针（符号链接）、表示设备的设备名（如/dev/tty）等。

49、**如何中断一个正在运行的进程？**

当要中断一个前台进程的时候，可以按&lt;Ctrl+c&gt;键。而要中止一个后台进程就必须使用kill或top命令。首先利用ps命令获得要中止进程的PID。然后就可以使用kill命令后接这个PID 删除这个进程。

50、**使用什么命令建立新用户组、删除组、改变组属性？**

创建新用户组使用groupadd命令或直接编辑/etc/group文件，在其中加入一行groupname：password：groupID：users指定组的各种信息，完成组的建立。删除用户组可以使用groupdel命令或直接编辑/etc/group文件，删除对应用户组记录。groupmod命令用于改变用户组的属性。

51、**使用什么命令建立新用户，删除用户，****查找并显示用户信息、显示用户自身的名称、修改用户****属性？**

创建用户必须先运行“adduser 用户名”来增加用户，再运行“passwd 用户名”来改变用户的密码。用户可以直接编辑/etc/passwd 和/etc/shadow文件来添加用户。

要删除用户，使用userdel命令：或从/etc/passwd文件中删除该用户的相关条目，并删除该用户的目录及所有相关文件。

Whois命令用来查找并显示用户信息。

whoami命令显示用户自身的名称。

usermod命令用来修改用户属性。

52、**文件****/etc/**shadow** ****中，每行包含****9****个字段，前****8****个字段它们各代表什么？**** **

1．    用户名

2．    口令

3．    口令最后修改时间

4．    口令两次修改的最小时间间隔

5．    口令使用时限

6．    预警时间

7．    超时停用时限

8．    用户帐号使用期限

53、**如何暂停帐号，以后再启用重新帐号？**** **

要临时禁止一个用户，可以把/etc/passwd文件中该用户信息字段前加入*或#，使次用户无法登录。以后需要解冻的时候，将*或#去掉。

或使用passwd –l [用户名] 命令可以禁止此用户，要恢复使用passwd –u [用户名]命令。

另外，将 /etc/passwd 的 shell 字段写成 /sbin/nologin ，或将 /etc/shadow 的第八个字段（帐号取消日期），设定为小于当前日期的值，即可让该帐号暂时无法登入主机。

54、**Linux ****使用者的帐号、密码与群组的名称文件放在哪里？**** **

/etc/passwd

/etc/shadow

/etc/group

55.**文件****/etc/passwd ****中，每行包含****7****个字段，它们各代表什么？**** **

用户名

加密格式的口令（星号*表示不能在登录时使用）。

用户标识数（UID此数值范围0-65536，前500号为系统使用，第一个用户的UID为501）

组标识数（GID，和UID一样，第一个组的GID为501）

用户信息 （用户的附加信息，如姓名，地址等）

用户的根目录

登录shell(登录时运行的shell程序，默认指定为/bin/bash)

56、**什么是****DNS****，有什么用处？**

DNS主要用于域名的正向解析和反向解析。正向解析就是将域名转换为IP地址，反向解析则是将IP转换为域名。DNS中有主服务器和次服务器。主服务器主要负责维护某个域的域名解析数据库，并向外界提供该域的域名查询，每个DNS都必须有主服务器。次服务器从主服务器复制域名解析数据。当主服务器关闭时，则由次服务器向外界提供查询。

**57****、****Linux ****系统当中，**** DNS ****是用什么软件实现的，最主要的命令有什么？**

Linux下的DNS是使用BIND来实现的，BIND的服务器端软件是named守护进程，如果在安装时指定要安装DNS服务，named将自动安装到系统中。使用 ndc 命令可以管理DNS，最主要的命令有：rndc start（启动DNS 服务）；rndc stop（停止DNS 服务）；rndc restart（重新启动DNS 服务）。

58、**给出完成下列DHCP服务器配置后的设置文件的内容。**

**任务：内部网段为**** 192.168.10.0-192.168.11.255****，路由（****router****）为**** 192.168.10.1 ****，****DNS ****的**** IP 202.106.99.120****和****202.99.8.1****；每个客户预设租约为**** 3 ****天，最长为**** 6 ****天；**** **

**要分配为动态的**** IP ****从**** 192.168.10.100 ****到**** 192.168.10.200 ****。要为****MAC ****是****03:CC:68:58:2D:AB****的主机指定名称为****zhxin.bac.gov.cn ****，且**** IP ****为**** 192.168.10.44****。**** ****其它的**** IP****保留。**

default-lease-time 259200; # 预设的租约时间，后面接的时间为秒。

max-lease-time 518400;     #超过租约时间可续约最长只有 518400 秒

option domain-name "bac.gov.cn" ; # 设定域名称为 bac.gov.cn

option domain-name-servers 202.106.99.120,202.99.8.1 ;

subnet 192.168.10.0 netmask 255.255.255.0 {

range 192.168.1.100 192.168.1.200; 

option broadcast-address 192.168.10.255;

option routers 192.168.10.1;

}

host zhxin.bac.gov.cn {

hardware ethernet 03:CC:68:58:2D:AB;

fixed-address 192.168.10.144;

option broadcast-address 192.168.10.255;

option routers 192.168.10.1;

}

60、**如何启动，终止、重新启动和查看****WWW****服务**

要启动WWW服务，需要执行命令：

# /etc/rc.d/init.d/httpd –k start

要停止WWW 服务，应输入命令：

# /etc/rc.d/init.d/httpd –k stop

要重新启动WWW 服务，应输入命令：

# /etc/rc.d/init.d/httpd –k restart

要查看WWW 服务是否运行，应输入命令：

# ps aux | grep httpd

**61****、从IP地址查找域名或从域名来查找IP地址应使用什么命令？**

Nslookup

62、**/etc/hosts.allow****、**** /etc/hosts.deny ****、****/etc/sysconfig/network ****、****/etc/host.conf****文件有什么用？**

xinetd使用 /etc/hosts.allow文件指定允许访问服务器、使用Intemet服务的计算机。而用 /etc/hosts.deny文件，xinetd指定拒绝访问的计算机。

/etc/sysconfig/network是网络配置文件，提供IP地址与Internet网络名称的列表。每一行提供一个特定网络的信息，主要为route命令提供信息以维护路由表。

/etc/host.conf文件是用来设置主机名解析顺序的。

63、**xinetd****与****/etc/xinetd.conf****文件有什么用？**

xinetd是负责接受来自Intemet客户端请求的守护程序，收到客户的服务请求后，xinetd首先从/etc/services中找到服务使用的端口号及通信协议，然后将客户端请求发送至正确的服务程序，守护程序本身并不执行任何具体的服务。/etc/xinetd.conf是此守护程序的配置文件。