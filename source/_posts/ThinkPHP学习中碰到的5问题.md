title: ThinkPHP学习中碰到的5问题
tags:
  - tingkphp
  - 开发
  - 框架
  - 编程
id: 1281
categories:
  - PHP
date: 2010-07-20 08:48:07
---

最近都在学习ThinkPHP框架，出来透透气，学习过程中碰到一些疑问，跟大伙讨论一下

缓存相信大家或多或少都有一定的应用，但一般我们应该什么时候用到缓存，如何有效的利用缓存，不知道大家有什么见解，呵呵。

我们现在做到项目是ThinkSNS系统的二次开发，这种项目应该怎样进行缓存才能达到最优的效果，我现在的做法是，尽量的将一些数据直接放入文件中，利用聚合技术，将数据库中的一些分散项目存入文件，然后读取的时候直接从文件读取，而不经过或者少经过数据库，这样是不是更有效些呢？

跟大家效流一下用到的几个技术：
_
_
**1.数据库缓存：**

1.  function get_dbdata($table,$condition='',$encache=1,$cache_life=-1)
2.  {
3.  if($table==''){return false;}
4.  $table=ucfirst($table);
5.  $is_cache=($encache==0)?true:false;
6.  //$encache的作用：0-不用缓存数据 1-缓存数据 2-强制更新缓存
7.  if(1==$encache)<!--more-->
8.  {$cache_name=md5($table.$condition);
9.  $temp_data = S($cache_name);//在我的项目中不是用S操作，而是用F操作，这样可以规定路径，分类存放
10.  if($temp_data['condition']==$condition and ($temp_data['cache_life']==-1 or $temp_data['cache_life']&gt;time()))
11.  {$is_cache=true;return $temp_data['data'];}
12.  }
13.  $Dao = D("$table");
14.  $list = $Dao-&gt;where($condition)-&gt;select();
15.  if(false===$list){return false;}
16.  if($encache&gt;1 or false==$is_cache)
17.  {$data['condition']=$condition;
18.  $data['cache_life']=($cache_life&lt;=0)?-1:time()+3600*$cache_life;//以小时为单位;
19.  $data['data']=$list;
20.  $cache_name=md5($table.$condition);
21.  S($cache_name,$data);//FF($cache_name,'temp',$data);呵呵，我还是用F操作，因为它可以指定路径，这个是F变种
22.  }
23.  return $list;
24.  }
以后在使用过程中直接$data=get_dbdata('table');就可以得到数据了，当然这是针对一般的应用tp也有lazy方法，但没有具体用过，究竟这种做法好吗？望各位潜水的大牛们指教一二.
_注：有一点很希望tp能改进，希望tp的S功能能很灵活的指定目录，虽然1.6 dev的增加了S目录指定，但我认为这个不太灵活，因为S操作是md5值做为文件名，有时文件多了感觉会出问题，最好能动态的指定位置。不知道这点担心有没有必要！
_
_
_
**2.数据库操作时是用in操作好些还是不用in操作好些？如果用别的方法有什么更好的途径来解决。**

比如有时要集体更新表的某个字段，通过复选区框选择id如果用正常的方式用in操作是最好的，但我听某些牛人说这样操作会很耗资源的。如： update table status=1 where id in(10,20,30);

这里贡献两个小的通用函数，来自动生成类似10,20,30的功能（自动处理字符型数据）

1.  function array_string($ary,$fgf=',',$force=true)
2.  {
3.  if(!is_array($ary)){$ary=array($ary);}
4.  if(count($ary)==0){return '';}
5.  if($force){$ary=array_map('add_string',$ary);}
6.  $str=implode($fgf,$ary);
7.  return $str;
8.  }
9.  function add_string($str) {
10.  if(!is_numeric($str))
11.  {return "'{$str}'";}
12.  else
13.  {return $str;}
14.  }
_
_

可以这样调用：

1.  $model?= D($this-&gt;name);
2.  $pk = $model-&gt;getpk();
3.  $ids = array_string($_REQUEST['id']);
4.  $result = $model-&gt;where("{$pk} in ({$ids})")-&gt;delete();
_
_

**3.多用继承属性是否有效率。**

比如我现在的所有action 都是建立在BaseAction中，我在BaseAction中建立了index,add,insert,update,delete
然后还设置了一些全局变量在BaseAction中，这样是否有效率，我说的效率是指执行效率，开发上来说肯定是最有效率的。因为我现在好多函数都不用写了。不过在Baseaction中加太多的判断也不是太好！

这里须要指出我上一篇写的一个BUG，如果在BaseAction中定义了index而别的Action中定义_before_index()或者_after_index() 程序会出现错误。须要另行指定。比如我现在就加了一句
if(method_exists($this,'_af_update')){$this-&gt;_af_update();}
_
_
**4.建议开发项目中对一些更新比较频繁的数据进行缓存数组的建立**

比如：一个统计用户动做的表，如果不断的更新肯定很耗资源，如果我们建立一个数组后来实现分批缓存，集体更新.
_
_
**5.对于统计操作建议建立专门的缓存数组，或者干脆写入文件中，再集体更新。**

例如文章的统计什么的，我现在的项目,目录是用TP的toTree方法生成的数组，为每个文章模块添加一个属性，即内部文章的数量，然后每添加或修改文章时对此表进行操作，做相应的添加、移动，删除操作，我想象中的做法是这样的：数据库-totree（生成数组）-缓存数组（以后的读操做都在这个数组中进行）－生成统计数组（每个栏目id对应一数组），所有添加，修改之类的操作涉及数量改变全在统计数组中进行，统计数组在一定时间内不缓存，如果需要则强制缓存。

但现在我只能实现到缓存数组那步，下面就不知道如何写下去，即，将数组放在内存中，然后一定时间后写数据库或者将文件缓存至系统。用析构函数吗？哪位大侠能指点一下最好！