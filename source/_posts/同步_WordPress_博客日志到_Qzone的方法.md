title: 同步 WordPress 博客日志到 Qzone的方法
tags:
  - qzone
  - WordPress
  - 同步
  - 插件
id: 51
categories:
  - 学习笔记
date: 2009-12-25 12:11:00
---

我发现我是一个同步控，我把博客日志同步到雷猴，同步到嘀咕，然后同步到新浪微博，  好吧，今天就讲解下如何**同步 WordPress 博客日志到 Qzone**。

总所周知，QQ 的服务是不会有 API 的，但是如何同步到 Qzone 呢？这里的过程有点曲折，由于 Qzone 支持通过你的 QQ 邮箱发布，而 QQ 邮箱有支持 SMTP 协议，而 WordPress 所包含的 PHPMailer 类可以使用 SMTP 发邮件，所以我们可以通过使用 PHPMailer 同步 WordPress 博客日志到 Qzone。

首先我们可以通过下面的函数登录 QQ 邮箱并给 Qzone 发邮件（你需要首先打开 QQ 邮箱的 SMTP 功能）。
<pre>function smtp_mailer_qqmail($subject,$body){
    $qq_number = '';
    $qq_password = '';

    if ( !class_exists('PHPMailer') ) {<!--more-->
        require_once ABSPATH . WPINC . '/class-phpmailer.php';
        require_once ABSPATH . WPINC . '/class-smtp.php';
    }
    $mail = new PHPMailer();

    $mail-&gt;IsSMTP();
    $mail-&gt;Mailer   = "smtp";
    $mail-&gt;CharSet  = 'utf-8';
    $mail-&gt;Encoding = 'base64';
    $mail-&gt;IsHTML(true);
    $mail-&gt;SMTPAuth = true;
    $mail-&gt;Host     = "smtp.qq.com";
    $mail-&gt;Username = $qq_number."@qq.com";
    $mail-&gt;Password = $qq_password;
    $mail-&gt;From     = $qq_number."@qq.com";
    $mail-&gt;FromName = $qq_number; 

    $mail-&gt;AddAddress($qq_number."@qzone.qq.com");
    $mail-&gt;Subject = $subject;
    $mail-&gt;Body    = $body;
    $mail-&gt;Send();
}</pre>
其中需要把 `$qq_number` 和 `$qq_password` 设置成你的 QQ 号码和密码。

然后我们就可以通过 `publish_post` 这个 WordPress Hook，当发布日志的时候同步吧日志标题和内容同步到 Qzone。
<pre>add_action('publish_post', 'publish_post_2_qzone', 0);
function publish_post_2_qzone($post_ID){
    $qzone = get_post_meta($post_ID, 'qzone', true);
    if($qzone) return;

    $post_title = trim($_POST['post_title']);
    $post_except = trim($_POST['post_except']);
    if($post_except){
        $post_content = $post_except;
    }else{
        $post_content = mb_substr(strip_tags(trim($_POST['post_content'])),0,220);
    }
    $post_content= $post_content.'&lt;br /&gt;查看全文：&lt;a href="'.get_permalink($post_ID).'"&gt;'.get_permalink($post_ID).'&lt;/a&gt;';

    smtp_mailer_qqmail($post_title,$post_content);

    add_post_meta($post_ID, 'qzone', 'true', true);
}</pre>
总结下：

1.  打开 QQ 邮箱的 SMTP 功能。
2.  下载同步到 Qzone 插件：WP2Qzone。
3.  上传到 WordPress 插件目录中下并激活。[![](http://Kainy.CN/blog/wp-content/uploads/2009/12/qq.png "qq")](http://Kainy.CN/blog/wp-content/uploads/2009/12/qq.png)
4.  把插件中的 `$qq_number` 和 `$qq_password` 设置成你的 QQ 号码和密码。
5.  这样只要你一发布日志就会自动更新到 Qzone 中。

原文地址：[http://fairyfish.net/2009/12/04/wp-qzone/](http://fairyfish.net/2009/12/04/wp-qzone/)