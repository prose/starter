title: 教你制作定制版安卓系统（Android ROM）
tags:
  - android
  - rom
  - 制作
  - 手机
  - 系统
id: 1323
categories:
  - 系统❤软件
date: 2010-08-16 21:41:49
---

有点玩机兴趣的android爱好者，应该对custom ROM这种东西都不陌生，它大致就相当于我们封装定制版pc系统中用到的Ghost（*.gho）文件。在介绍root权限获取的时候，就直接用的MoDaCo Custom ROM作为例子。适用于Hero比较好的ROM还有不少，比如Drizzy’s Custom HeroROM等等，都可以在XDA上找到。肯定有不少朋友感到很好奇，这些ROM都是怎么做的。考虑到中文社区相关资料比较少，在这里抛砖引玉，大概原理介绍一下。

对于第三方ROM来讲，通常都包括两部分，一个recoveryimage，一个update.zip。而大多数的第三方ROM的特色，就是加入了很多东西，比如superuser程序来获得root权限，busybox来扩充命令行下的功能，各种各样的配置文件或者小工具，比如默认打开中文locale，等等。这些看似神奇的改动，都是在update.zip里面搞的，custom recoveryimage的主要作用就是引导用户的操作，比如让你先备份，再应用update.zip，再重启之类的操作。由于custom recoveryimage和update.zip的耦合性很小，所以不少custom ROM直接都用同一个custom recoveryimage，这个好像是出自MoDaCo作者之手。再然后，我之前的文章已经有对 recoveryimage的简单讲解，所以这里，我主要介绍一下update.zip的制作。<!--more-->

如果我们直接把MoDaCoROM中的update.zip解包，我们会发现有一个boot.img，一个data文件夹，一个system文件夹，一个META-INF文件夹。这个data文件夹放的是init.rc，而本来在系统中，init.rc就是在data目录下的。当然，两者的作用不一样，这里的init.rc主要作用是开机执行你希望执行的命令，比如MoDaCo的init.rc就是install busybox。

而值得详细说明的，就是system文件夹。MoDaCoROM版本的system下有一系列作者希望放到系统中的工具，对于apk文件，就放到app下，工具就放到bin和xbin下，依此类推。换句话说，system或者data这个目录层次结构是取决于你自己的，你希望放的东西属于什么，应该运行在online系统的什么目录下，update.zip里面就应该是有相应的目录路径，然后东西就放在里面。

具体点，我们现在要依样画葫芦，搞一个新的update.zip，那么第一步就是首先建立一个文件夹
> mkdir new-update

好，假设我新update.zip的作用就是预装我自己的一个程序，my.apk，那么，我建立对应的子目录
> mkdir -p new-update/system/app
> 
> cp my.apk !$

这样，system目录就完成了。但是这时，update.zip的目录层次还没完，我们看MoDaCoROM中的update.zip中有文件夹叫META-INF，这个文件夹很关键，除了根目录下的三个文件外，里面层层目录，就包括了一个文件，叫update-script，内容如下
> show_progress 0.1 0
> 
> copy_dir PACKAGE:system SYSTEM:
> 
> set_perm_recursive 0 0 0755 0644 SYSTEM:xbin
> 
> set_perm_recursive 0 0 0755 0644 SYSTEM:sd
> 
> set_perm 0 0 04755 SYSTEM:bin/su
> 
> set_perm 0 0 04755 SYSTEM:bin/a2sd
> 
> set_perm 0 0 04755 SYSTEM:xbin/busybox
> 
> copy_dir PACKAGE:data DATA:
> 
> show_progress 0.2 0
> 
> format BOOT:
> 
> write_raw_image PACKAGE:boot.img BOOT:
> 
> show_progress 0.2 10

这里面的内容，大部分是针对你要做的修改设置的。比如
> copy_dir PACKAGE:system SYSTEM:

就是把system中新增的工具拷贝到手机上，然后
> set_perm_recursive 0 0 0755 0644 SYSTEM:xbin
> 
> set_perm_recursive 0 0 0755 0644 SYSTEM:sd
> 
> set_perm 0 0 04755 SYSTEM:bin/su
> 
> set_perm 0 0 04755 SYSTEM:bin/a2sd
> 
> set_perm 0 0 04755 SYSTEM:xbin/busybox

就是设置MoDaCo ROM中新增程序的权限，然后
> copy_dir PACKAGE:data DATA:

把data下的内容（就是那个init.rc）复制到手机上，然后
> format BOOT:
> 
> write_raw_image PACKAGE:boot.img BOOT:

刷boot分区。

那我们这里没有这么多新增的东西，应该怎么写呢？
> copy_dir PACKAGE:system SYSTEM:
> 
> set_perm_recursive 0 0 04755 SYSTEM:app/my.apk

就可以了。你当然还可以做一些别的事情，比如加一个FORMAT DATA之类的^_^开个玩笑，千万别这个干，不然你的数据就全没了。

好，那么也就是说，我们要在自己的new-update目录下也建一个/META-INF/com/google/目录，然后把新的update-script扔进去。

完了么？差一点。其实如果你没有别的需求了，那么就完了，可以把下面这一小块跳过。下面这一小块，是关于boot.img的。在如何修改Android系统的Ramdisk以及boot镜像文章中，我们谈到，如果刷boot镜像有问题，就要用别的方法让系统boot我们自己的bootimage了，这个别的方法，自然就是用update.zip了。MoDaCoROM版本的update.zip也包括了一个boot.img，但是如果我们有出于各种需求自己修改的boot.img，自然就可以替换掉原来的了。当然注意，如果加了boot.img，那么update-script里面就不能漏掉
> write_raw_image PACKAGE:boot.img BOOT:

这句。

好，到现在，我们的new-update目录下有
> /system/app/my.apk
> 
> /META-INF/com/google/update-script
> 
> /META-INF/MANIFEST.MF
> 
> /META-INF/CERT.SF
> 
> /META-INF/CERT.RSA
> 
> boot.img
恩，那么就进入打包阶段。你可能会问，这有什么难的，直接zip一下不就得了。如果要是这么简单就好了，你打包后，必须把你的内容都sign一下，得到相应的cert，才能在fastboot模式中被承认并成功刷机。

在sign你的文件之前，先做这么几件事

打包。进入update文件夹，zip update.zip xxx xxxx xxxx xxxxxxxx。什么意思呢，就是只把你需要的文件打包，不要用./*作为参数。而且相对路径最好是在update下面，不要在外面用zipupdate.zip ./update/*这种命令打包

去sun网站下载最新的jre

下载这个文件testsign

一定要用JRE1.6.0.16或者更高，我知道这个有点恶心，但是提供下载的testsigh.jar就是按照这个版本或者更高编译的，你用老版本就运行不了。

好，下下来以后，执行这个命令
> ~/jre1.6.0_16/bin/java -classpath testsign_path/testsign.jar testsign update.zip update-signed.zip

稍微讲解一下，java程序是最新jre下的，testsign_path是你放testsign.jar的地方，建议放到sdk的tool目录下。update是待sign文件，update-signed是指定的生成文件名。

sign执行完后，用unzip -l看，会发现
> /META-INF/MANIFEST.MF
> 
> /META-INF/CERT.SF
> 
> /META-INF/CERT.RSA

三个文件的日期属性变了。我怀疑就是重新生成了这三个文件。但如果之前打包时候不包括这三个文件，sign完又不会新生成。因为不管大局，所以我就没有仔细研究，有清楚的朋友恳请赐教。

好了，现在，把你自己的update.zip放到sd卡上，在fastboot下通过recovery image引导，执行update.zip，然后就享受你自己的修改成果吧:)

最后提醒一句，任何类似的操作之前，都把自己的手机做好备份。此方法仅供参考，我不对任何因此造成的破坏负责，嘿嘿。