title: 静态资源(JS、CSS)的版本化、优化及增量部署
tags:
  - 优化
  - 部署
id: 2176
categories:
  - 建站❤编程
date: 2013-02-13 22:42:25
---

### 版本化

Web前端性能优化中很重要的一个部分是文件加载的优化，静态文件在客户端缓存的做法可减少请求量，减小服务器和带宽压力的同时让页面加载更顺畅，提升浏览体验。

所以在服务环境中（产品上线后），一般会通过header允许浏览器缓存，并设置一个过期时间（Expires）。但若在Expires期内对资源文件做修改，客户端仍由缓存读取旧版文件而非从服务器加载，则可能造成样式破坏或脚本报错等问题。这就要求我们在开启缓存的同时，在文件更新后通知客户端更新缓存文件，也就是这里要说的“版本化”——对静态文件uri中加入版本信息，每次文件改动的同时更新版本信息，告知浏览器文件版本，从而确保始终调用最新的资源文件。

<!--more-->

常见的做法是将版本信息加入到资源文件uri中的QueryString部分，如WordPress对jQuery库文件的引用

`/wp-includes/js/jquery/jquery.js?ver=1.8.3`（QueryString用红色标记）

按照规范，这么做是没有问题的，因为任何动态资源都不应进行缓存，但偏偏有部分浏览器未严格执行规范，造成此做法存在浏览器兼容性问题。

&nbsp;

针对此问题，比较彻底的解决办法是将版本信息加入到资源文件uri中的路径或者文件名部分。

`/wp-includes/js/jquery/jquery.js`（路径部分用红色标记，文件名部分用蓝色标记）

但这样一来，每次文件改动都需进行重命名操作，将给文件管理带来不便。我们可通过配置rewrite规则将资源文件请求uri中的版本信息去除来规避此问题。

分两边做：

1.  在资源文件名中加入版本信息，确保客户端请求资源文件时加载到最新版本；
2.  服务器配置rewrite规则，在接收到文件请求时将请求uri中的版本信息去除，避免文件管理上的麻烦。
具体到厝边项目中，我们使用的是在文件名结尾处加入以“=V”标识起始的版本信息，如对jQuery库文件的引用：

`/servtools/lib/jquery=V80.js`

目标资源文件为“/servtools/lib/jquery.js”，但页面上引用的uri文件名中的“=V80”是由文件哈希值计算而来，每次文件改动都会变化，文件名变化则浏览器当作新的文件向服务器请求。

服务器接到uri为“/servtools/lib/jquery=V80.js”的请求后，按rewrite规则将起始标识“=V”至文件后缀“.js”的版本信息（红色标记）部分去除，读取的是实际资源文件“/servtools/lib/jquery.js”。

所以以下这些路径请求到的实际都是同一个文件

*   [http://cuobian.com/servtools/lib/jquery=V80.js](http://cuobian.com/servtools/lib/jquery=V80.js)
*   [http://cuobian.com/servtools/lib/jquery=V90.js](http://cuobian.com/servtools/lib/jquery=V90.js)
*   [http://cuobian.com/servtools/lib/jquery=V90%E3%80%82min.js](http://cuobian.com/servtools/lib/jquery=V90%E3%80%82min.js)
*   [http://cuobian.com/servtools/lib/jquery=V90=pak.js](http://cuobian.com/servtools/lib/jquery=V90=min.js)
版本信息的加入，是在网站编译时完成的，编译时通过正则匹配，将模板文件中对指定目录下css、js文件的引用uri获取，读取文件哈希值计算版本号，然后在中文件名加入该信息。

编译时能做的另外一个小优化是对静态文件使用子域名，如s.cuobian.com来访问图片、音乐、css、和js等，好处有三点：

1.  无cookie信息
2.  跨域缓存
3.  并行加载

### 优化

静态文件部署前进行合并、压缩也是前端性能优化的一个重要途径，在厝边项目我们使用了[gruntjs](https://github.com/gruntjs "Grunt is a task-based command line build tool for JavaScript projects.")完成这些工作。得益于nodejs中丰富的模块，我们得以在投入较少的时间和学习成本后，每次发布仅需一个命令行即可完成这些优化，使有限的人力能够更多的投入到开发工作中，这对于像我们这样的创业团队尤为可贵。

*   css压缩：cssmin
*   js压缩：uglify（gruntjs）
*   js模块打包：requirejs（r.js）
*   js模板预编译：handlebars
优化后的文件不覆盖原文件，而是在文件名后缀部分之前加入发布标识“.pub”，如“/servtools/lib/jquery.js”，压缩后文件为“/servtools/lib/jquery.pub.js”，在服务器上同时保留两份。通过rewrite规则将不带“.pub”标识的请求返回带“.pub”标识的文件内容，这样做的目的是，若在非工作时间发现严重错误，可直接使用未优化的文件排错、改名后重新发布，减小对工作环境依赖，同时确保通过Web无法直接访问未优化的源文件。

&nbsp;

<del>由于具体规则与服务器环境和程序上下文关联紧密，这里仅探讨思路，正则匹配和rewrite规则代码这里也没必要公布。我作为前端一枚都能想得到的规则，想必也难不到您。</del>

&nbsp;

php 正则：
> …
> /*l开头如localhost、l.cuobian.com 为调试模式；
> tag.cuobian.com 为预发布模式；
> 127.0.0.1、cuobian.com 为发布模式。
> */
> function isLocal(){ //l.cuobian.com访问
> return strpos($_SERVER['SERVER_NAME'], 'l')=== 0;
> }
> function isTag(){ //tag.cuobian.com访问
> return strpos($_SERVER['SERVER_NAME'], 'tag')=== 0;
> }
> function isPublished(){
> return !(isLocal()|| isTag());
> }
> /* 读取文件上次修改时间作为版本号加入url路径 */
> function autoVer($url, $fileRoot= "../", $keepExtension= true){
> $path = pathinfo($url);
> $pubStr= isLocal()? '': '.pub';
> $verStr = '=V'.substr(md5_file($fileRoot.$path['dirname']. '/'. $path['filename']. $pubStr. '.'. $path['extension']), 2, 2);
> $notVer= strpos($path['filename'], '!ver');
> $extension= $keepExtension? '.' .$path['extension']: '';//是否保留后缀
> $host= (!isPublished()|| $notVer)? '': '//s.cuobian.com/';//是否加入域名
> $file_ver= $notVer? str_replace('!ver', '', $path['filename']): $path['filename']. $verStr;//文件名含'!ver'则不进行版本化
> return $host. $path['dirname']. '/'. $file_ver. $extension;
> }
> 
> $compile_file= preg_replace("/(?&lt;!\/)(servtools|skin\/default|sysadmin)\/(.+)\.(js|css)/e", "autoVer('$0')", $compile_file);
> 
> …
nginx write 规则：
> location ~ ^/(servtools|skin/default|sysadmin)/(.+)=(.*).(js|css)$ {
> set $path $1;
> set $file $2;
> set $version $3;
> set $ext $4;
> rewrite ^.*$ /$path/${file}.$ext last;
> }
> location ~ ^/(servtools|skin/default|sysadmin)/([^.]+)(.js|.css)$ {
> set $dir $1;
> set $pathName $2;
> set $dotExt $3;
> rewrite ^.*$ /$dir/$pathName.pub$dotExt last;
> }
.htaccess rewrite 规则：
> RewriteEngine on
> 
> #Rules for Versioned Static Files 转.pub文件
> #RewriteRule ^(servtools|skin/default|sysadmin)/(.+)=(.+)\.(js|css)$ $1/$2.pub.$4 [L]
> 
> #Rules for Versioned Static Files
> RewriteRule ^(servtools|skin\/default|sysadmin)\/(.+)=(.+)\.(js|css)$ $1/$2.$4 [L]

### 增量部署

版本管理软件svn

每工作日例行的增量部署开始于下班前半小时，一般十分钟内完成。每月或每次有重大改动，进行一次版本合并，并重传全部网站文件。

以上是个人在所参与项目中关于网站文件部署的一些实践心得，也希望有经验者参与到交流中来。