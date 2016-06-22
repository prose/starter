title: '15个提高WordPress博客速度的技巧[译]'
tags:
  - WordPress
  - 博客
  - 技巧
id: 1712
categories:
  - 建站❤编程
date: 2010-11-18 06:20:16
---

网络上关于WordPress提速优化的文章已是数不胜数，这里也译一篇来凑凑热闹，毕竟网站的优化在怎么提也不过分，大概没有人会嫌自己的网站加载过快吧。
<div>
> Slow WordPress Blogs turn everyone off – Google doesn’t like sites that load slowly, and readers have to impatiently wait to read your brilliant material. In that waiting time, they might even click that back button. Fast-loading websites and blogs are a necessity in the impatient information age.
反应慢的WordPress博客会让访客们扫兴—Google也不喜欢加载速度慢的网站，读者常常为了一览你的风采必须经历无奈的等待。在等待的过程中，他们甚至可能点击关闭按钮。博客网站的加载速度在这信息爆炸的时代显得更加重要。<!--more-->
> Luckily, there are plugins you can use and general advise you can follow in order to speed up your WordPress blog, making it more appealing to your visitors and the search engines. Today, we have a post with 15 ways to help you to speed up your WordPress blog. Please feel free to comment!
幸运的是，已有很多你可以使用的WordPress插件和前人总结的网站加速经验，使得你的博客对访客和搜索引擎更加友好。这篇文章将介绍15个提高你的WordPress博客加载速度的方法，期待您的评论！
> Plugins That Speed Up WordPress
> Plugins extend the WordPress system by allowing you to use third-party code to extend the functionality of your WordPress blog. These plugins can do a lot more than just make your blog prettier – they can make it faster as well. Here are 5 must-have plugins to speed up your WordPress blog.
**提高加载速度的插件**

插件通过为您提供可以扩展你WordPress博客功能的第三方代码，使得WordPress系统可扩展性大大增加。除了令你的博客看起来更美观，插件还能做到更多——通过使用插件，也可以提速博客，这儿介绍5个提高WordPress博客速度的必备插件。
> WP Super Cache: Any PHP files on your web page have to be processed before they load. Processing takes time. WP Super Cache makes static html files from your dynamic php pages – all your browser has to do is read and display, no waiting for processing. Download
WP Super Cache：任何一个PHP脚本文件在输出前都会运行一次。脚本的运行需要时间，WP Super Cache为动态脚本生成静态html文件——这样访问者的浏览器所需要做的仅是读取和展现，而不需要等待脚本的运行。[下载插件](http://wordpress.org/extend/plugins/wp-super-cache/)
> Optimize DB: You can log into your MYSQL database manually and tell it to optimize tables, or, even easier, you could download the Optimize DB plugin that will do it for you. Optimising your databases saves you time on every query, so depending on your website, that means some big speed increases. Download
Optimize DB：你可以登陆MYSQL数据库，手动优化数据表，或者，更方便地使用Optimize DB插件来为你做这些事。优化后的数据库可以缩短查询时间，效果因你的网站而定，也就是说，可能会带来很大的速度提升。[下载插件](http://wordpress.org/extend/plugins/optimize-db/)
> Parrallelize: Each hostname (a name used to identify a device for internet and other communication) can only handle 2-4 http requests at a time. Parrallelize will automatically submit requests to different hostnames to parallelize http requests. Download
> 
> DB Cache: Each database query uses up precious CPU cycles. DB Cache loads all queries into the cache to reduce CPU load. Download
Parrallelize：每个主机名（用于用于识别因特网设备的名称）一次只能够响应2-4个http请求。Parrallelize会自动提交请求道不同主机名来均衡http请求。[下载插件](http://wordpress.org/extend/plugins/parrallelize)

DB Cache：每个数据库查询都会占用宝贵CPU周期。DB Cache通过缓存所有查询结果来减少CPU加载。[下载插件](http://wordpress.org/extend/plugins/db-cache)
> CDN Tools: JavaScript and media files are expensive in terms of load time. CDN Tools will load them to an external server in order to reduce load times – it can even load your larger JavaScript files for free from Google servers! Download
CDN Tools：Javascript和多媒体文件需要较多的加载时间。CDN Tools会将它们加载到另外的服务器上来减少加载时间——甚至是从Google服务器来调用你较大的JavaScript文件，而这一切都是免费的。[下载插件](http://wordpress.org/extend/plugins/cdn-tools)
> General Tips to Speed Up WordPress
**一些提高WordPress速度的技巧**
> Aside from plugins, you can do a lot of things yourself to speed up your WordPress blog. Some of them are one-time things, some of them are long-term habits. Follow these 10 tips to speed up your WordPress blog.
在除了使用插件，你还可以通过其他手段来为WordPress博客提速。有一些是一次性的，另外一些则需要养成良好的使用习惯并长期坚持。按以下10个技巧来加速你的WordPress博客。
> Stay up to date: WordPress periodically comes out with new releases that include security fixes and new functionality. In addition, each new release usually contains code fixes and speed improvements. The newest releases support plugins that let you speed up your blog. Updating is a hassle, but definitely worth the work.
保持博客程序更新：WordPress会周期性的发布新版本，新版本不仅包括安全问题的修复，也提供了新功能。除此之外，每个新版本通常包含代码修正和速度提升，最新的版本支持用来为您的博客提速的插件。保持更新是有些麻烦，但这些工作是值得你为之付出的。
> Remove unused plugins: They slow down your blog by adding unnecessary, unused code that still has to load every time somebody accesses your page.
移除不需要的插件：无用的插件会使你的博客变慢，因为它们增加页面受访问时加载的不必要、不可用的代码。
> Disable post revisions: Post revisions, great for multi-author blogs, aren’t really necessary for single-author endeavors. Post revisions creates a new row in your wp_posts table every time you save a post. As that space adds up, your speed slows down. Turn revisions off in your wp_config.php file by adding the line define(‘WP_POST_REVISIONS’, false); right after the ” tag
禁用文章版本控制：文章版本，对于多作者协作的博客也许很有必要，对于个人博客却未必。文章版本在你保存文章是你wp_post表中添加一行。由于空间的消耗，你的速度也随之下降，禁用的方法是：在你的wp_config.php文件中的 &lt;?php标签后增加define(‘WP_POST_REVISIONS’, false)。
> Unlike some blogging platforms, WordPress makes it easy to speed up your blog. Use these plugins and follow this advice to see immediate speed improvements.
不像其他的博客程序，WordPress使得你的博客提速工作很容易。使用这些插件，并遵循这几条建议，你就会看到显著的提速效果。

原文地址：http://www.admixweb.com/2010/11/12/15-ways-to-speed-up-your-wordpress-blog

译言网地址：[http://article.yeeyan.org/view/122441/150491/](http://article.yeeyan.org/view/122441/150491)

</div>