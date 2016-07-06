title: java期末总复习资料
tags:
  - java
  - 复习
  - 大三
  - 期末
id: 1248
categories:
  - 课件❤资料
date: 2010-05-09 14:31:14
---

**第一讲**** **

** **

**Java****的特点：**

平台独立性和可移植性

面向对象（OO）** **

**OOP****和****POP****编程思路的差别**

所有计算机程序都由两类元素组成：代码和数据程序两种写法：以代码为核心 或 以数据为核心 进行组织编写。

1．   围绕“正在发生什么”编写---面向过程的编程

2．   围绕“谁将被影响”编写---面向对象的编程<!--more-->

纯粹面向过程的编程

（1）程序具有线性执行的特点。

（2）面向过程的程序可以认为是代码作用于数据。

面向对象的编程。

（1）围绕它的数据（对象）和为这个数据严格定义的接口来组织程序。

（2）面向对象的程序实际上是用数据控制对代码的访问。

**OOP****的特点 **

纯粹的面向对象程序设计有以下特点：

1.  所有的东西都是对象。例如max对象。
2.  程序是一大堆对象的组合。通过消息（参数）传递，各对象知道自己应该做些什么。
3.  每个对象都有自己的存储空间
4.  每个对象都属于某个类。每个对象都是某个"类"的一个"实例"。** **
**复习**

ü  面向对象(OOP)和面向过程(POP)在程序设计上有哪些区别？

ü  Java的哪2个特点决定了Java的存在和发展？

ü  Java application和Java applet 有那些区别？

** **

**讨论第一个****java application**

public class HelloWorld

{

public static void main(String args[])

{

System.out.println("Hello World !!");

}

}

说明：

1\. 关键字class声明了一个新类，HelloWorld是类名称标识符，整个类定义在一对{}之间，花括号的使用同C或C++相同。但是在java中，所有程序活动都发生在类内，这就是为什么java程序是面向对象的。

2.  public:访问说明符，允许程序员控制成员的可见性。main()必须定义为public类型，因为当程序开始执行的时候它需要被它外部的代码调用

3\. 关键字static 允许调用main()而不必先实现该类的一个实例

4\. 关键字void通知编译器:main()不返回任何值

5\. 在main()中接收了一个参数，是一个叫做args的参数 ，是String 类的一个实例数组。args用于存储程序运行时的任何命令行参数

6.  System是一个预定义可以访问系统的类，out是连接到控制台的输出流，由内置方法println()来实现输出，输出结果后带一个回车。

每一个程序语句以;结束。

**第二讲**** **

**标识符**

ü  程序员对程序中的各个元素加以命名时使用的命名记号称为标识符。

ü  Java语言中，标识符是以字母，下划线（_）,美元符($)和数字组成。第一个字符不能是数字。

合法的标识符

identifier        userName    User_Name

_sys_value     $change

非法的标识符

2mail        room#      class

**保留字**

ü  具有专门的意义和用途，不能当作一般的标识符使用，这些标识符称为关键字或保留字。

Java一共有50个保留字

在Java中，true、false和null都是小写的。不必死记这些保留字，当理解每个保留字的含义后，自然就记住了所有的保留字。

数据和返回值类型：int, void, return……

包/类/成员/接口：package, class, interface

访问控制：public, private, protected

循环及循环控制：if, switch, break

例外处理：throw, try, finally

保留词（无含义但不能使用）：goto, const

**常量与变量**

*   Java中的常 量 值 区 分 为 不 同 的 类 型，如 整 型 常 量 123，小数型 常 量 1.23，字 符 常 量 ‘ a’ ，布 尔 常 量 true、false以 及 字 符 串 常 量 "This is a constant string."。
*   常量用保留字final来实现
final typeSpecifier varName=value[,varName[=value]…];
如：final int NUM=100
*   程序中的基本存储单元，其定义包括变量名、变量类型和作用域几个部分，定义格式为：
Type varName [= value ][{, varName [=value]}];

int n = 3, n1 = 4;

*   Java中变量的缺省初值都是确定的：
布尔变量的初值为：false

整数变量的初值为：0

浮点数变量的初值为：0.0

** **引用（复合）变量的初值为：null

**Java****语言基本数据类型**

*   java语言的数据类型可分为简单类型和复合类型。
*   简单数据类型包括：
逻辑类型（Logical）：  boolean

字符类型（Textual）：  char

整数类型（Integer）：   byte， short， int， long

浮点类型（Floating）： float，double

*   复合数据类型包括：class 、interface 和数组
**简单数据类型（逻辑型）**

ü  布尔型数据只有两个值true和false，且它们不对应于任何整数值。

ü  布尔型变量的定义如：

boolean b = true;

**简单数据类型（字符型）**

ü  字符型数据代表16位的Unicode字符。字符型常量共有65536个。

ü  字符常量是用单引号括起来的一个字符‘a’ ‘B’ ‘\n’ ‘\u0030’。

特殊字符的常量表示法：

–  反斜线（Backslash）           ‘\\’

–  退格（Backspace）                       ‘\b’

–  回车（Carriage return）             ‘\r’

–  进纸符（Formfeed symbol）           ‘\f’

–  制表符（Table symbol）               ‘\t’

–  换行（New line）                           ‘\n’

–  单引号（Single quote）                ‘\’’

–  八进制数（ ‘\0’～‘\377’ ）               ‘\233’

–  Unicode字符                                    ‘\uHHHH’

ü  简单数据类型（整数型）整数型变量为byte、short、int或long。其中byte在机器中占8位，short占16位，int占32位，long占64位。

ü  整数型变量的定义如：

int x=123;

byte b = 8;

short s = 10;

long y = 123L;

long z = 123l;

没有以l或L结尾的数字，根据其实际值所属范围，可以被用作byte，short，或int型整数。

以l或L结尾的数字，无论其实际值所属范围怎样，都被用作long型整数。

**简单数据类型（浮点型）**

ü  浮点型变量为float或double，其中float在机器中占32位，double占64位。

ü  浮点型型变量的定义如：

–  double d1 = 127.0;        // 赋初值为127

–  double d2 = 127;  //赋初值为127

–  float f1 = 127.0f;  // 必须在数字后加f或F

–  float f2 = 4.0e38f;         //错误！32位浮点数不能超过 3.4028234663852886e38

–  float f3 = (float)d1;        //必须强制类型转换

浮点型常量：

1\. 十进制数形式

由数字和小数点组成，且必须有小数点，如0.123, .123, 123.,123.0

2\. 科学计数法形式

如：123e3或123E3，其中e或E之前必须有数字，且e或E后面的指数必须为整数。

32位浮点数形式： 0.23f,   1.23E-4f ,  . 18F

**简单数据类型**

数据类型                   所占位数               数的范围

char                          16                            0 ～65536

byte                           8                            -128～127

short                        16                          -32768～32767

int                             32              -2147483648～ 2147483647

long                          64              -9223372036854775808～…

float                    32             3.4e－038 ～3.4e＋038

double                      64                    1.7e－308 ～1.7e＋308

**Java****数据类型转换**

*   自动类型转换 (拓宽转换)
如果下列两个条件都能满足，那么将一种类型的数据赋给另外一种类型的变量时，将执行自动类型转换:

1\. 这两种类型是兼容的

2\. 目的类型数的范围比来源类型大

低-----------------------------------------------------&gt;高

byte —&gt; short—&gt; int —&gt; long—&gt; float —&gt; double

⑴自动转换
具 体地讲,当一个较“小”数据与一个较“大”的数据一起运算时,系统将自动将“小”数据转换成“大”数据,再进行运算。而在方法调用时,实际参数较“小”, 而被调用的方法的形式参数数据又较“大”时(若有匹配的,当然会直接调用匹配的方法),系统也将自动将“小”数据转换成“大”数据,再进行方法的调用,自 然,对于多个同名的重载方法,会转换成最“接近”的“大”数据并进行调用。
这些类型由“小”到“大”分别为 (byte，short，char)--int--long--float—double。这里我们所说的“大”与“小”,并不是指占用字节的多少,而是指表示值的范围的大小。
请看下面的示例：

①下面的语句可以在Java中直接通过：
byte b;
int i=b;
long l=b;
float f=b;
double d=b;

②如果低级类型为char型，向高级类型（整型）转换时，会转换为对应ASCII码值，例如
char c='c';
int i=c;
System.out.println("output:"+i);

输出：output:99;

③对于byte,short,char三种类型而言，他们是平级的，因此不能相互自动转换，可以使用下述的强制类型转换。
short i=99 ;
char c=(char)i;
System.out.println("output:"+c);

输出：output:c;

*   数字类型（numeric）都是彼此兼容的
*   数字类型（numeric）和字符类型（char）或布尔类型（boolean）是不兼容的
*   字符类型（char）和布尔类型（boolean）也是互相不兼容的
*   强制类型转换(缩小转换)
将源数据类型的值变小以适合目标类型数据。

例如：

int a=257;

byte b;

b=(byte)a;

*   强制类型转换(截断转换)
将浮点数赋给整型的时候，截断转换就发生了。

例如：

float a=6.334F;

int b;

b=(int)a;    //b的结果是6,而0.334被丢弃。** **

*   表达式中类型的自动提升
byte类型和short类型的表达式操作的结果会被自动提升为int

例如：

byte a=50;

a=a*a;  //该句出错！

注：如果表达式中有一个操作数为Long型，则整个表达式被提升到Long型。

class Promote

{

public static void main(String args[])

{

byte b=42;

char c='a';

short s=1024;

int i=50000;

float f=5.67f;

double d=.1234;

_____  result=(f*b)_(i/c)-(d*s);

}

}

** **

**第三讲**

**运算符**

ü  算术运算符： +，―，*，/，%，++，――

ü  关系运算符： &gt;，&lt;，&gt;=，&lt;=，==，!=

ü  布尔逻辑运算符： !，&amp;，|,^

ü  条件运算符：  ? ：

ü  赋值运算符： =，及其扩展赋值运算符如  +=，―=，*=，/=等。

/与%:

public class num

{

public static void main(String args[])

{

int i=5;

double d=5;

System.out.println(d%3);

}

}

(int)5/3=1  (double)5/3=1.66667

(int)5%3=2 (float)5%3=2.0 (float)5.2%3=2.2

int i,k;

i=10;

k=i&lt;0?-i:I;

a=true;

b=false;

a|b=

a&amp;b=

a^b=

运算符的优先次序

1）. , [] , ()                     9）&amp;

2）++ , -- , ! , ~        10）^

3）new (type)        11）|

4）* , / , %                   12）&amp;&amp;

5）+ , -                     13）||

6）&gt;&gt; , &gt;&gt;&gt; , &lt;&lt;          14）?:

7）&gt; , &lt; , &gt;= , &lt;=       15）= , += , -= , *= , /= , %= , ^=

8）== , !=                     16）&amp;= , |= , &lt;&lt;= , &gt;&gt;= , &gt;&gt;&gt;=

**表达式**

*   表达式是由操作数和运算符按一定的语法形式组成的符号序列。
*   一个常量或一个变量名字是最简单的表达式，其值即该常量或变量的值；
*   表达式的值还可以用作其他运算的操作数，形成更复杂的表达式。
**语句**

Java中的语句可以分为五类：

ü      方法调用语句

ü  表达式语句

ü  复合语句

ü  控制语句

ü  package语句和import语句

控制语句

Java的控制语句有3种类型：

条件语句

循环语句

转移语句：break; continue; return

多分支语句switch

switch (expression)

{

           case value1 :

           {

                           statements1;

                   break;

           }

           ……

           case valueN :

           {

                   statementsN;

                   break;

           }

           [default  :

           {

                   defaultStatements;

           }]

   }

   备注：

   表达式expression的返回值类型必须是这几种类型之一：int、byte、char、short。

    case子句中的值valueI必须是常量，而且所有case子句中的值应是不同的。

    default子句是任选的。

    break语句用来在执行完一个case分支后，使程序跳出switch语句，即终止switch语句的执行。

   <span style="text-decoration: underline;">（如果某个case</span><span style="text-decoration: underline;">分支后没有break</span><span style="text-decoration: underline;">语句，程序将不再做比较而执行下一个分支。_）_</span>

    switch语句的功能可以用if-else语句来实现，但某些情况下，使用switch语句更简炼。

for语句执行时，首先执行初始化操作，然后判断终止条件是否满足，如果满足，则执行循环体中的语句，最后执行迭代部分。完成一次循环后，重新判断终止条件。

初始化、终止以及迭代部分都可以为空语句(但分号不能省)，三者均为空的时候，相当于一个无限循环。

在初始化部分和迭代部分可以使用逗号语句，来进行多个操作。逗号语句是用逗号分隔的语句序列。

      for( int i=0, int j=10; i&lt;j; i++, j--)

      {

      ……

      }

在switch语中，break语句用来终止switch语句的执行，使程序从整个switch语句后的第一条语句开始执行。

在循环语句中，break用于终止并跳出循环，从紧跟着循环体代码段后的语句执行。

continue语句用来结束本次循环，跳过循环体中下面尚未执行的语句，接着进行终止条件的判断，以决定是否继续循环。对于for语句，在进行终止条件的判断前，还要先执行迭代语句。它的格式为：

   continue；

也可以用continue跳转到括号指明的外层循环中，这时的格式为

   continue outerLable;

单独一条return语句放在方法中间时，会产生编译错误,因为其后的语句将不会执行到。若真需要退出方法，可以通过将return语句嵌入某些语句（如if-else）来使程序在未执行完方法中所有语句时退出。

**第****4****讲**** **

** **

** **

**1、 ****类的基础** **——****类与对象的概念**

类就是对象的**模板**，它定义一类对象所能**共同**拥有的属性和**共同**的行为。

对象就是类的**实例**。

**2、 ****如何创建一个类？ **

ü  使用关键字class来创建类。

ü  类中的属性可以是任何一种Java数据类型。

ü  类中的方法可分为三大类：构造方法，存取方法和功能方法。

*   构构造方法在对象创建时被调用；
*   构造方法与类同名；
*   构造方法没有任何返回值。
备注：

当你定义一个类时，你要准确地声明它属性和方法。可能非常简单的类只有属性，但绝大多数类包含两者。

使用关键字class来创建类。实际上，类被完全限制在它的格式中。

在绝大多数情况下，类中的属性操作和存取被定义在类的方法中。

**3、 ****方法定义的语法规范**

**[****方法修饰字] **返回类型  方法名称(参数1,参数2,…)

{

…(statements;)    //方法体：方法的内容

}

修饰字：[public | protected | private ] [static] [final | abstract] [native] [synchronized]

ü 返回类型可以是任意的Java数据类型，当一个方法不需要返回值时，返回类型为void。

ü

**4****、如何创建并使用对象？ **

n     一个简单的类

class Box

{

double width;

double height;

double depth;

}

ü  创建一个Box类的对象：Box mybox=new Box();

ü  访问mybox对象的属性：mybox.width

备注：

Box类有三个属性，但不包含任何方法。

当你创建类的一个对象的时候，该对象包含由这个类所定义的每个属性变量的copy。因此，每个box对象都包含自己的属性变量，即width,height,depth。访问类的变量，要使用“.”运算符，将对象名和属性名（或方法名）连接起来。例如：mybox.width=100;

**练习：水仙花数**

class ShuiXianHua

{

int num;

int[] result;

double[] ws;

ShuiXianHua(int n)

{

num=n;

result=new int[10];

ws=new double[n];

}

int getNumber()

{

return num;

}

void setNumber(int n)

{

num=n;

result=new int[n];

}

int[] getShuiXianHua()

{

int start=(int)Math.pow(10,num-1);

int end=(int)Math.pow(10,num);

int count=0;

for(int i=start;i&lt;end;i++)

{

for(int j=0;j&lt;num;j++)

{

ws[j]=getWS(i,j);

}

if(judgeSXH(i,ws))

{

result[count]=i;

count++        ;

}

}

return result;

}

int getWS(int shuzi,int djw)

{

return       (int)(shuzi/(Math.pow(10,djw)))%10;

}

boolean judgeSXH(double temp_shuzi,double[] temp_ws)

{

boolean tag=false;

double compu_result=0;

for(int k=0;k&lt;num;k++)

{

compu_result+=Math.pow(temp_ws[k],num);

}

if(compu_result==temp_shuzi)

{

tag=true;

}

return tag;

}

}

public class Test

{

public static void main(String args[])

{

int numb=Integer.parseInt(args[0]);

ShuiXianHua SXH=new ShuiXianHua(numb);

int[] print_result=SXH.getShuiXianHua();

for(int i=0;i&lt;print_result.length;i++)

{

if(print_result[i]!=0)

{

System.out.println(print_result[i]);

}

}

}

}

**5、 ****Java****中的类、方法和变量——****垃圾回收：finalize()****方法**

u   使用new运算符为一个对象动态地分配内存；

u  使用finalize方法为一个对象执行撤消操作。

ü  在类中定义finalize( )方法，为类增加收尾操作

ü  protected void finalize() { 。。。。 }

ü  在一个对象被垃圾回收器回收之前，java解释器会自动调用对象的finalize( )方法。

备注：

在java中有一种自动处理，重新分配内存的方法：垃圾回收技术。该技术会自动地将java认为不再需要的对象所占用的内存释放掉。

但是，当一个对象正在处理的是非java资源的时候，如window字符字体或者文件接口等，为了保证一个对象被撤消前，这些资源被释放，我们需要为一个类提供收尾的机制(finalization)。

**6****、进一步研究方法和类 ----****方法重载**

u  在JAVA中，同一个类中的2个或2个以上的方法可以有同一个名字，只要它们的参数声明不同即可。

u  该方法就被称为**重载**（overload），这个过程称为**方法重载**（method overload）。

u  当一个重载方法被调用时，JAVA会在调用方法的参数和接收到的变量之间寻找匹配。（例一）

u  Java自动类型转换也适用于重载方法接收的变量。（例二）

u  方法重载是JAVA实现**多态性**的一种方式。

u  “一个接口，多个方法”

备注：

当一个重载方法被调用时，java用参数的类型和（或）数量来表明实际调用的重载方法的版本。

一个重载方法的参数类型和（或）数量必须是不同的。

虽然每个重载方法可以有不同的返回类型，但是返回类型并不足以区分所使用的是哪个方法。

Java调用一个重载方法的时候，参数与调用参数匹配的方法被执行。

例一：

class Overload

{

void test()

{

System.out.println("no parameter!");

}

void test(int a)

{

System.out.println("one parameter!:"+a);

}

void test(int a,int b)

{

System.out.println("two parameter!"+a+"  "+b);

}

double test(double a)

{

System.out.println("double a:"+a);

return a*a;

}

}

public class Test

{

public static void main(String args[])

{

Overload ob=new Overload();

double result;

ob.test();

ob.test(10);

ob.test(10,20);

result=ob.test(123.25);

System.out.println("result of ob.test(123.25):"+result);

}

}

例二：

class Overload

{

void test()

{

System.out.println("no parameter!");

}

/********

void test(int a)

{

System.out.println("one parameter!:"+a);

}

*********/

void test(int a,int b)

{

System.out.println("two parameter!"+a+"  "+b);

}

void test(double a)

{

System.out.println("void test(double a):"+a);

}

}

public class Test

{

public static void main(String args[])

{

Overload ob=new Overload();

int i=88;

ob.test();

ob.test(10,20);

ob.test(i);

ob.test(123.2);

}

}

**7、 ****进一步研究方法和类----****把对象作为参数**

u  方法的参数也可以是对象。

u  时常会去构造一些对象，这些对象的初始状态同一些已经存在的对象一样。

u  定义一个构造方法，该方法将另外一个对象作为它的参数。

class Test

{

int a,b;

Test(int i,int j)

{

a=i;

b=j;

}

boolean equals(Test o)

{

if(o.a==a &amp; o.b==b)

{

return true;

}

else

{

return false;

}

}

}

public class PassOb

{

public static void main(String args[])

{

Test ob1=new Test(100,22);

Test ob2=new Test(100,22);

Test ob3=new Test(-1,-1);

System.out.println("ob1==ob2:"+ob1.equals(ob2));

System.out.println("ob1==ob3:"+ob1.equals(ob3));

}

}

**8、 ****进一步研究方法和类 ----****返回对象**

u  方法能够返回任何类型的数据，包括某个类的对象。

class Test

{

int a;

Test(int i)

{

a=i;

}

Test incrByTen()

{

Test temp=new Test(a+10);

return temp;

}

}

public class PassOb

{

public static void main(String args[])

{

Test ob1=new Test(2);

Test ob2;

ob2=ob1.incrByTen();

System.out.println("1st,ob1.a:"+ob1.a);

System.out.println("1st,ob2.a:"+ob2.a);

ob2=ob2.incrByTen();

System.out.println("2nd,ob1.a:"+ob2.a);

}

}

**9、 ****进一步研究方法和类----****理解static**

u  ** ** 类中被static修饰的属性或方法，完全独立于该类的任何对象，能够在类的任何对象被创建之前访问。

u  当声明一个对象时，并不产生static变量的copy，所有对象共享同一个static变量。

u  声明为static的方法有以下几条限制：

ü    它们仅能调用其他的static方法；

ü  它们只能访问static属性；

ü  它们不能以任何方式引用this或super；

u  在类的外面，可以通过在类的名字后加点号运算符来访问类中的static属性或方法。

**如：**classname.method();

**10****、进一步研究方法和类----****使用命令行参数**

u   可以通过命令行参数将信息传递给main()。

u  命令行参数是程序执行时在命令行中紧跟在程序名后的信息。

u  命令行参数作为字符串存储在传递给main()的String数组中。

public class PassOb

{

public static void main(String args[])

{

for(int i=0;i&lt;args.length;i++)

{

System.out.println("args["+i+"]:"+args[i]);

}

}

}

练习：

利用static变量设计实例计数器。该计数器可以统计并判断该类创建的对象的次数是否大于3。

class ObjectCounter

{

static int num=0;

ObjectCounter()

{

setNumber();

judgeNumber();

}

int getNumber()

{

return num;

}

void setNumber()

{

int temp=getNumber();

num=++temp;

}

void judgeNumber()

{

if(num&gt;3)

{

System.out.println("****Warning****You have created 3 Objects already!");

}

else

{

System.out.println("You have created "+num+" Objects.");

}

}

}

public class Test

{

public static void main(String args[])

{

ObjectCounter c1=new ObjectCounter();

ObjectCounter c2=new ObjectCounter();

ObjectCounter c3=new ObjectCounter();

ObjectCounter c4=new ObjectCounter();

}

}

**第****5****讲**** **

** **

** **

**1****、数组——****一维数组：定义**

一维数组的定义方式之一：

type arrayName[ ]；

ü  其中类型(type)可以为Java中任意的数据类型，包括简单类型和复合类型;

ü  数组名arrayName为一个合法的标识符

ü  [ ]指明该变量是一个数组类型变量。

一维数组的定义方式之二：

type[ ] arrayName；

我们可以有两种定义数组的方式：

int intArray[ ]  或 int[ ]  intArray；

Date dateArray[ ]  或  Date[ ]  dateArray;

**1、 ****数组——****一维数组：初始化**

一维数组定义之后，必须经过初始化才可以引用。数组的初始化分为静态初始化和动态初始化两种。

**静态初始化：**在定义数组的同时对数组元素进行初始化。

int  intArray[ ]={1,2,3,4};   //定义了一个含有4个  // 元素的int型数组。

**动态初始化**：使用运算符new为数组分配空间。

*   对于简单类型的数组，其格式如下：
type arrayName[ ]=new type[arraySize];

type[ ] arrayName=new type[arraySize];

如：

int intArray[ ] = new int[5];

int[ ] intArray= new int[5];

*   对于复合类型的数组，需要经过两步空间分配。
**首先**： type arrayName[ ]=new type[arraySize];

**然后**：arrayName[0]=new type(paramList);

…

arrayName[arraySize-1]=new type(paramList);

**例如：**

Date stringArray[];  //定义一个String类型的数组

stringArray = new String[3];  //给数组stringArray分配3个应用

//空间，初始化每个引用值为null

stringArray[0]=new Date( );

stringArray[1]=new Date( );

stringArray[2]=new Date( );

String s1[]=new String[3],s2[]=new String[2];   //一条声明语句中创建多个数组

**1、 ****数组——****一维数组：引用**

数组元素的引用方式为：

arrayName[index]

index为数组下标，可以是整型常数或表达式，如：arrayName[1], arrayName[i], arrayName[6*i]等。

**注：**下标是0序的，即从0开始，一直到数组长度减1

**1、 ****数组——****一维数组：数组长度的获取方式**

** **在Java中，每个数组都有一个属性length指明它的长度，获取的方式如下：

arrayName.length

例：

int[ ] myArray=new int[10];

System.out.println(**myArray.length**);

**问题**：intArray的最后一个元素的下标用length怎么表示？

<span style="text-decoration: underline;">元素最大下标为length</span><span style="text-decoration: underline;">－1</span>

<span style="text-decoration: underline;"> </span>

**1、 ****数组——****多维数组**

*   在任何语言中，**多维数组都被看作数组的数组**。
*   二维数组是一个特殊的一维数组，其每一个元素又是一个一维数组。
**1****、数组 ——****二维数组：定义**

*   二维数组的定义方式之一：
type arrayName[ ][ ] ;

*   二维数组的定义方式之二：
type[ ][ ] arrayName;

**1、 ****数组——****二维数组：初始化**

**静态初始化：**在定义数组的同时为数组分配空间。

int  intArray[ ][ ]="{{"1,2},{2,3},{3,4},{4,5"}}";

**动态初始化：**对高维数组来说，分配内存空间有

下面两种方法：

ü  一次性为每一维分配空间，如：

type arrayName[ ][ ]=new type[arraylength1][arraylength2]

例如：

int a[ ][ ]=new int[2][3]；

ü  分别为每一维分配空间，如：

String s[ ][ ]=new String[2][ ];

s[0]=new String[2];

s[1]=new String[3];

s[0][0]=new String(“Good”);

s[0][1]=new String(“Luck”);

s[1][0]=new String(“to”);

s[1][1]=new String(“you”);

s[1][2]=new String(“!”);

**1、 ****数组——****二维数组：引用**

对二维数组中每个元素，引用方式为：

arrayName[index1][index2]

**注：**其中index1和index2为数组下标，为整型常数和表达式，都是0序的。

**2、 ****字符串——String**

u    字符串是字符的序列，它是组织字符的基本数据结构，从某种程度上来说有些类似于字符的数组。

u   在Java中，字符串被当作对象来处理。** **

有两种方法可以初始化一个字符串对象：

*   使用字符串常量直接初始化字符串对象，如：
String s="Hello world! ";

**2、 ****字符串——String****：创建**

*   使用String类的构造函数来初始化字符串对象：
ü   String( )：无参数的缺省的构造方法用来创建一个空串。

String s = new String( );

ü  String( String value)：利用已经存在的字符串常量创建一个新的String对象，该对象的内容与给出的字符串常量一致。

String s=new String(“hello”);

ü  String( char value[ ] )：通过给构造方法传递一个字符数组可以创建一个非空串。

char chars[ ] = { ‘a’ , ‘b’ , ‘c’ };

String s = new String( chars ) ;

ü  String( char [ ] , int startIndex, int numChars )：

**char chars[] = { 'a' , 'b' , 'c' , 'd' , 'e' , 'f' }**

String s = new String ( chars , 2 , 3 );

该方法生成的串s为“cde”。(注意数组的下标从0开始)

注：tring( char [ ] , int startIndex, int numChars )：这种方法用来创建一个非空串，并且指明所创建的字符串在字符数组中的起始地址以及所包含的字符个数。

** **

**2****、字符串——String****：基本方法**

1\. l**ength**

public int length( )

此方法返回字符串中的字符个数，如：

String s = "abc";

System.out.println( s.length( ) );

则将显示字符个数为3。

2\. **charAt **

public char charAt (int index )

该方法返回字符串中index位置上的字符，其中index值的范围是0～length-1。

3\. **getChars **

如果要从字符串中提取一个以上的字符，则可以用此方法：

public void getchars (int startIndex,int endIndex,**char** target[],int targetStartIndex)

** **String s="abcdefghijkl";

char[] c={'1','1','1','1','1'};

s.getChars(2,4,c,2);

String result=new String(c);

System.out.println(c);

类似于**getChars**方法，只是串中的字符均用8位表示，参数及用法同上。

4\. **indexOf****和lastIndexOf **

搜索字符串。这两种方法中，如果查找成功，则返回匹配成功的字符的位置，如果没有查找到，则都返回 -1。

int indexOf (char ch)

int lastIndexOf (char ch)

返回字符ch在字符串中出现的第一个和最后一个位置。

int indexOf(String str)

int lastindexOf(String str)

返回子串str中第一个字符在字符串中出现的始末位置。

5\. **＋ **

在Java中，运算符“＋”可以用来实现字符串的连接，如：

String s = “He is” + age + “years old.”

6\. **equals**和**equalsIgnoreCase **

public boolean equals( object str)

public boolean equalsIgnoreCase( object str )

判断两个字符串是否相等，则可以用此方法。相等则返回 true，不等则返回false，两种方法的区别在于：  equalsIgnoreCase不区分字母大小写，而equals则须区分。

**7\. ****substring **

public String substring(int beginIndex)

public String substring(int beginIndex,int endIndex)

用来得到字符串中指定范围内的子串beginIndex~endIndex之间的子串，得到的子串包括beginIndex位置的字符，但不包括endIndex位置的字符。

8**. replace()**

public String replace(char original , char repalcement)

用一个字符来替换原字符串中一个字符的所有值

String s=“Hello”.replace(‘l’,’w’);

结果：”Hewwo”

9\. **trim() **

public String trim()方法将字符串前面和后面的空格符删除。

**10\. toLowerCase() ****和 toUpperCase() **

public String toLowerCase()

把串中的所有字符转换成小写

public String toUpperCase()

把串中的所有字符转换成大写

**3、 ****字符串——StringTokenizer **

从一个字符串析取子字符串

n  构造方法

n  StringTokenizer(String str)  //缺省分隔符，为空格

n  StringTokenizer(String str, String delim)  //指定分隔符

n  int countTokens()：返回Token的数目

n  boolean hasMoreTokens()：是否还有下一个Token

n  String nextToken()：返回下一个Token

n  String nextToken(String delim) ：改变分隔符，从当前位置处，继续返回下一个Token。

例：

StringTokenizer st = new StringTokenizer(“this is a test”);

while (st.hasMoreTokens())

{

System.out.println(st.nextToken());

}

输出结果为：

this

is

a

test

** **

**练习：字典问题**

class Dictionary

{

Word[] w=new Word[10];

Dictionary()

{ }

Word getWord(int index)

{ return w[index];        }

Word[] getWord()

{

return w;

}

void setWord(Word w1,int word_index)

{  w[word_index]=w1;  }

String getWord(String eng)

{

String temp,result="sorry,found none!";

for(int i=0;i&lt;w.length;i++)

{

if(w[i]!=null)

{

temp=w[i].getEng();

if(temp.equals(eng))

{

result=w[i].getChn();

break;

}

else

{

continue;

}

}

}

return result;

}

void addWord(Word w2)

{

for(int i=0;i&lt;w.length;i++)

{

if(w[i]==null)

{

w[i]=w2;

break;

}

}

}

void addWord(String eng,String chn)

{

Word temp_word=new Word(eng,chn);

addWord(temp_word);

}

boolean delWord(String msg)

{

boolean tag=false;

String temp_eng="";

String temp_chn="";

for(int i=0;i&lt;w.length;i++)

{

if(w[i]!=null)

{

temp_eng=w[i].getEng();

temp_chn=w[i].getChn();

if(temp_eng.equals(msg)|temp_chn.equals(msg))

{

w[i]=null;

tag=true;

break;

}

else

{

continue;

}

}

}

return tag;

}

}

class Word

{

String eng;

String chn;

Word(String new_eng,String new_chn)

{

eng=new_eng;

chn=new_chn;

}

void setEng(String new_eng)

{ eng=new_eng;  }

String getEng()

{ return eng;  }

void setChn(String new_chn)

{ chn=new_chn;  }

String getChn()

{  return chn; }

}

public class Test

{

public static void main(String args[ ])

{

Dictionary d=new Dictionary();

d.addWord("dog","狗");

d.addWord("cat","猫");

d.addWord("pig","猪");

d.addWord("sheep","羊");

//d.delWord("狗");

System.out.println("********************************************");

Word[] w=d.getWord();

System.out.println("The dictionary's content is as following:");

for(int i=0;i&lt;w.length;i++)

{

if(w[i]!=null)

{

System.out.println(w[i].getEng()+"-------&gt;"+w[i].getChn());

}

}

System.out.println("********************************************");

if(args.length!=0)

{

System.out.println("Trying to translate the word : \""+args[0]+"\"");

System.out.println("The result is ："+d.getWord(args[0]));

}

}

}