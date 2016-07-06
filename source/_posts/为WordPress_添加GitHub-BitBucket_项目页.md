title: 为WordPress 添加GitHub/BitBucket 项目页
id: 2466
categories:
  - PHP
date: 2013-05-05 18:09:25
tags:
---

插件的**作用**是将源码托管项目以列表的形式展现在独立页面， 目前支持Github和 BitBucket两个项目托管平台。 效果演示见[这里](/projects/)。
这里用到了GitHub &amp; BitBucket Project Lister 插件， 原作者已经停止更新， 且无法正常展示Gihtub 项目。
[这里](https://github.com/kainy/wordpress-github)是我fork的版本， 修正了两个错误：

<!--more-->

1.  中文乱码；
2.  由于Github 限制所有不带user agent 信息的请求， 而导致无法获取Github 项目信息的问题。
**安装**方法是下载[压缩包](https://github.com/kainy/wordpress-github/archive/master.zip)- 解压后上传到 `wp-content/plugins/` 目录 - 后台启用。如果通过WP后台插件搜索安装的是有问题的原版。
**使用**方法安装后按后台提示操作， 很简单就不介绍了， 实在不行百度一下也成。