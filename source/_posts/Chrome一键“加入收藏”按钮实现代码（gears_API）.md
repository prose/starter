title: Chrome一键“加入收藏”按钮实现代码（gears API）
tags:
  - chrome
  - gears
  - 代码
  - 收藏
id: 1987
categories:
  - JavaScript
  - 建站❤编程
date: 2011-04-22 20:46:33
---

在一些网站尤其是导航网站中上常常能够看到"加入收藏"、"设为首页"这样的链接，点击后就可以完成收藏本页以及更改首页操作，非常方便，也有助于提高网站的粘性。但由于各种浏览器的出现，要兼容所有浏览器越来越不容易了，目前网上翻出的代码还没见到有能够让Chrome“一键收藏”成功的。不过在前段时间开发[拾贝电台应用](https://chrome.google.com/webstore/search?q=%E6%8B%BE%E8%B4%9D%E7%94%B5%E5%8F%B0 "sbboy_radio_in_chrome_webstore")（Chrome Webstore）的时候，发现通过调用gears API可以生成应用的桌面图标，像桌面软件的快捷方式一样方便使用，达到和加入收藏一样的效果。于是把兼容 IE6,IE7,FF 的"加入收藏"代码与之整合，实现兼容三大主流浏览器（IE、Firefox、Chrome）的“一键收藏”按钮。

## 实现代码：

<pre>&lt;!-- 加入收藏代码 Start --&gt;
function AddFavorite(sURL, sTitle) {</pre>
<!--more-->
<pre>    try { //IE
        window.external.addFavorite(sURL, sTitle);
    } catch (e) {
        try { //Firefox
            window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
   try{//Chrome无法自动收藏，用创建快应用程序的捷方式来替代。
    createShortcut();
   } catch(e){
    alert("您的浏览器不支持自动加入收藏，请使用浏览器菜单手动设置.");   
   }

        }
    }
}
&lt;!-- 加入收藏代码 End --&gt;</pre>
<pre>&lt;!-- 创建图标代码 Start --&gt;
function createShortcut() {
  var desktop = google.gears.factory.create("beta.desktop");
  var description = "将网络电台放到桌面，方便日后访问该应用，享尽听广播乐趣！.";
  var name = "Online Radio";

  var icons = {
    "16x16": "images/icon16.png",
    "32x32": "images/icon32.png",
    "48x48": "images/icon48.png",
    "128x128": "images/icon128.png"
  };

  desktop.createShortcut(name,  // 应用名称，貌似不支持中文
                         "hello_world_shortcuts.html",  // url需考虑跨域问题
                         icons,  // icons (至少一个尺寸)
                         description);  // 应用描述 (可选)
}
&lt;!-- 创建图标代码 End --&gt;</pre>
//**买一送一，较为友好（在Chrome下同样有提示）的“设为首页”代码.**
<pre>&lt;!-- 设为首页代码 Start --&gt;
function setHomepage(pageURL) {
    if (document.all) {
        document.body.style.behavior='url(#default#homepage)';
        document.body.setHomePage(pageURL);
    }
    else {
            try { //IE
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
    try{ //Firefox
     var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components. interfaces.nsIPrefBranch);
     prefs.setCharPref('browser.startup.homepage',pageURL);
    } catch(e) {
                alert( "您的浏览器不支持该操作，请使用浏览器菜单手动设置." );
    }
            }
    }
}
&lt;!-- 设为首页代码 End --&gt;</pre>
下面是调用方法：

&lt;a title="[http://Radio.SBboy.com/](http://radio.sbboy.com/ "拾贝电台")" href="#" onclick="javascript:setHomepage(this.title);return false;"&gt;设为主页&lt;/a&gt;
&lt;a title="[http://Radio.SBboy.com/](http://radio.sbboy.com/ "拾贝电台")" href="#" onclick="javascript:AddFavorite(this.title, document.title);return false;"&gt;一键收藏&lt;/a&gt;

## 使用情况：

目前测试的有Chrome 11、Firefox4、IE8 结果如下：
<table>
<tbody>
<tr>
<th></th>
<th>IE</th>
<th>Firefox</th>
<th>Chrome</th>
</tr>
<tr>
<td>设为首页</td>
<td>正常</td>
<td>提示手动</td>
<td>创建图标</td>
</tr>
<tr>
<td>加入收藏</td>
<td>正常</td>
<td>正常</td>
<td>提示手动</td>
</tr>
</tbody>
</table>
&nbsp;

## 演示页面：

参看拾贝电台：[http://radio.sbboy.com/](http://radio.sbboy.com/ "拾贝电台")

电台使用说明：[http://sbboy.com/radiointro](http://sbboy.com/radiointro "拾贝电台帮助页面")

也欢迎试用我的第一个Chrome应用：

——拾贝电台 [https://chrome.google.com/webstore/detail/bhcbhdhdggalgngebimnmphddjnjffdo](https://chrome.google.com/webstore/detail/bhcbhdhdggalgngebimnmphddjnjffdo "拾贝电台 Chrome 应用") .