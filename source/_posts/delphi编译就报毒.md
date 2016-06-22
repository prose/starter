title: delphi编译就报毒
tags:
  - delphi
  - 病毒
  - 编程
id: 432
categories:
  - 学习笔记
date: 2010-01-06 21:23:02
---

[![VeryCD最早的办公室](http://farm3.static.flickr.com/2218/2188260404_4da1cab1b8_m.jpg)](http://farm3.static.flickr.com/2218/2188260404_4da1cab1b8_m.jpg "VeryCD最早的办公室")这几天都在忙专周实验，今天用到delphi，一到编译时nod32就报毒，编译空文件也报毒，上网查了资料才明白，是编译文件被感染了，生成软件就会报毒。把自己找到的资料分享如下：
> <div id="_mcePaste">重新编译时，生成的exe突然nod32报毒。 提示：</div>
> <div id="_mcePaste">“Project1.exe Win32/Induc.A 病毒 的变种 已删除 - 已隔离 NT AUTHORITY\SYSTEM 在应用程序新建的文件上发生事件: C:\Program Files\Delphi7SE\Bin\delphi32.exe.”</div>
> <div id="_mcePaste">查阅 Win32/Induc.A ：</div>
> <div id="_mcePaste">8月20日更新nod32官方病毒解释</div>
> <div id="_mcePaste">Win32/Induc.A</div>
> <div id="_mcePaste">别名：Virus.Win32.Induc.a （卡巴斯基）， W32/Induc（麦克菲）, Virus:Win32/Induc.A (Microsoft)</div>
> <div id="_mcePaste">病毒类型：Virus（病毒）</div>
> <div id="_mcePaste">大小: 大约5 KB<!--more--></div>
> <div id="_mcePaste">影响平台：微软Windows操作系统</div>
> <div id="_mcePaste">可查杀病毒库版本：4346 (20090818)</div>
> <div id="_mcePaste">简介</div>
> <div id="_mcePaste">Win32/Induc.A 是一个可以在编译时（compile-time ）感染Delphi文件的病毒。</div>
> <div id="_mcePaste">发作</div>
> <div id="_mcePaste">该病毒没有任何复制自身的行为。</div>
> <div id="_mcePaste">该病毒针对下列文件进行拷贝（源文件，目的文件）：</div>
> <div id="_mcePaste">l  %delphi rootdir%\Lib\SysConst.dcu， %delphi rootdir%\Lib\SysConst.bak</div>
> <div id="_mcePaste">l  %delphi rootdir%\source\rtl\sys\SysConst.pas, %delphi rootdir%\Lib\SysConst.pas</div>
> <div id="_mcePaste">修改了下列文件：</div>
> <div id="_mcePaste">l  %delphi rootdir%\Lib\SysConst.pas</div>
> <div id="_mcePaste">该病毒将自身源代码写入文件。</div>
> <div id="_mcePaste">该病毒执行下列命令行：</div>
> <div id="_mcePaste">l  "%delphi rootdir%\Bin\dcc32.exe" "%delphi rootdir%\Lib\SysConst.pas"</div>
> <div id="_mcePaste">最终文件"%delphi rootdir%\Lib\SysConst.dcu"包括了原始代码。</div>
> <div id="_mcePaste">删除了下列文件：</div>
> <div id="_mcePaste">l  %delphi rootdir%\Lib\SysConst.pas</div>
> <div id="_mcePaste">文件感染</div>
> <div id="_mcePaste">Win32/Induc.A是一个感染Delphi编译文件的病毒。</div>
> <div id="_mcePaste">用Delphi语言编写的编译程序也会携带病毒代码。插入代码的大小为5KB。</div>
> <div id="_mcePaste">其他信息</div>
> <div id="_mcePaste">Delphi版本4、5、6、7 均受影响。</div>
> 重新编译时，生成的exe突然nod32报毒。 提示：　　“Project1.exe Win32/Induc.A 病毒 的变种 已删除 - 已隔离 NT AUTHORITY\SYSTEM 在应用程序新建的文件上发生事件: C:\Program Files\Delphi7SE\Bin\delphi32.exe.”　　    查阅 Win32/Induc.A ：    8月20日更新nod32官方病毒解释      Win32/Induc.A    别名：Virus.Win32.Induc.a （卡巴斯基）， W32/Induc（麦克菲）, Virus:Win32/Induc.A (Microsoft)
> 病毒类型：Virus（病毒）      大小: 大约5 KB
> 影响平台：微软Windows操作系统      可查杀病毒库版本：4346 (20090818)
> 
> 简介       Win32/Induc.A 是一个可以在编译时（compile-time ）感染Delphi文件的病毒。
> 发作    该病毒没有任何复制自身的行为。
> 该病毒针对下列文件进行拷贝（源文件，目的文件）：   l  %delphi rootdir%\Lib\SysConst.dcu， %delphi rootdir%\Lib\SysConst.bak  l  %delphi rootdir%\source\rtl\sys\SysConst.pas, %delphi rootdir%\Lib\SysConst.pas
> 修改了下列文件：   l  %delphi rootdir%\Lib\SysConst.pas
> 该病毒将自身源代码写入文件。
> 该病毒执行下列命令行：  l  "%delphi rootdir%\Bin\dcc32.exe" "%delphi rootdir%\Lib\SysConst.pas"
> 最终文件"%delphi rootdir%\Lib\SysConst.dcu"包括了原始代码。
> 删除了下列文件：   l  %delphi rootdir%\Lib\SysConst.pas
> 
> 文件感染      Win32/Induc.A是一个感染Delphi编译文件的病毒。     用Delphi语言编写的编译程序也会携带病毒代码。插入代码的大小为5KB。   其他信息      Delphi版本4、5、6、7 均受影响。
**下面是解决办法：**
> 如果DELPHI安装目录里的Lib\SysConst.dcu大于/等于17K,就说明中招了,SysConst.dcu正常大小是12K左右, 修复这个文件再重新编译程序就不会有问题了 (  在lib\下找到 sysconst.bak一个11.7K,把SysConst.dcu 20K的删了.改SysConst.bak为 SysConst.dcu一切OK!)