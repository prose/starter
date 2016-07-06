title: 用HTML5无罪，挺CSS3有理
tags:
  - css3
  - html5
  - 普及
  - 标准
id: 1816
categories:
  - HTML
date: 2010-12-16 23:34:45
---

新特性无法很好地在现有浏览器中展现，是阻碍网页设计者采用最新技术的最大因素。除非你能够接受自己设计的网页在不同浏览器中有不同的外观，才有可能在现有环境下开始使用HTML5和CSS3。

虽然HTML5还 停留在草案阶段；然而换一种思路，如果你在等待CSS3的“完成”，也许将无法在有生之年看到那天的到来——要知道CSS2至今都未能为所有浏览器所支持！

本文作者的观点是：应该让每个用户获得效益最大化。对于那些使用前沿浏览器的用户，我们有什么理由不充分发挥哪些浏览器所提供的新特性？（呵呵，貌似和我《[比较拉风的特效尝试](http://kainy.cn/2010/11/kaistique/)》中的观点相似，**渐进增强**与**平稳退化**）.

说是这样说，但要推进新技术普及，比较务实的做法还是提供平滑过渡的方法，故文章大部分内容是关于HTML5和css3跨浏览器降级兼容方案，有兴趣者可继续往下看：<!--more-->

以下内容来自：http://net.tutsplus.com/tutorials/html-css-techniques/html5-and-css3-without-guilt

Not every HTML5 or CSS3 feature has widespread browser support, naturally. To compensate for this, enterprising developers have created a number of tools to let you use these technologies today, without leaving behind users who still live in the stone age.

* * *

## Prologue

### HTML5 Semantic Elements

The good news is that, except for Internet Explorer, you can create more semantic markup by using the new HTML5 elements — even in browsers which don’t officially support them. Just remember to set the correct display mode: `block`. The following snippet should reference all necessary elements:
<pre>article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
   display: block;
}</pre>

### IE Conditional Comments

Implementing many of the solutions in this tutorial involves including some JavaScript for specific Internet Explorer releases. Here is a quick overview: the test expression is enclosed in square brackets. We can check for specific versions or versions above or below a stated version. `lt` and `gt` mean _lower than _and _greater than_, respectively, while `lte` and `gte` mean _lower than or equal to_ and _greater than or equal to_.

Here are some quick examples:
<pre>[if IE 6]</pre>
Checks if the browser is Internet Explorer 6.
<pre>[if gt IE 6]</pre>
Checks for a version of Internet Explorer _greater_ than 6.

* * *

## Tool 1: HTML5 Shiv

In anything IE, excluding the most recent version (IE9), you cannot apply styles to elements that the browser does not recognize. Your spiffy, new HTML5 elements, in all their glory, are impervious to CSS rules in that environment. This is where Remy Sharp’s [html5shiv](http://code.google.com/p/html5shiv/) (sometimes called html5 shim) comes to the rescue. Simply include it in your page’s `&lt;head&gt;` section and you will be able to style the new HTML5 elements perfectly.
<pre>&lt;!--[if lt IE 9]&gt;

&lt;script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"&gt;&lt;/script&gt;
&lt;![endif]--&gt;</pre>
Notice how the conditional comments only load the html5shiv code on the condition that the version of Internet Explorer is lower than 9\. Other browsers, such as Firefox and Chrome, will also ignore this tag and won’t execute the script, thus saving bandwidth.

html5 shiv is based on a simple workaround: it directs IE to create the elements with JavaScript (they don’t even need to be inserted into the DOM).
<pre>document.createElement('header');</pre>
At this point, they can be styled normally. Additionally, the more recent versions integrate [IE Print Protector](http://www.iecss.com/print-protector/), which fixes a bug where the HTML5 elements disappear when printing the page..

* * *

## Tool 2: Modernizr

> Modernizr allows you to provide “backup” styling in browsers that do not support certain HTML5 and CSS3 features.
[Modernizr](http://www.modernizr.com/) is perhaps the best known of these tools, but it is also fairly misunderstood (the name does not help). Take a deep breath: contrary to popular misconception, Modernizr does _not_ enable HTML5 and CSS3 functionalities in browsers that do not support them (although it _does_ include html5shiv to allow you to use HTML5 elements in IE &lt; 9).
> Apart from the html5shiv functionality, Modernizr does one thing and one thing only: it runs a series of feature detection tests when loaded, and then inserts the results into the `class` attribute of the `&lt;html&gt;` tag.
Modernizr’s primary purpose is to allow you to offer “backup” styling in browsers that do not support certain HTML5 and CSS3 features. This is somewhat different than traditional graceful degradation, where we use the same CSS styling in all browsers, and then engineer it so that, when specific capabilities are missing, the result is still acceptable.

Now for an example of how Modernizr operates: if a browser supports `border-radius` and the `column-count`property, the following classes will be applied:
<pre>     &lt;html&gt;</pre>
On the other hand, if the same properties are not supported — say, in IE7 — you will find:
<pre>     &lt;html&gt;</pre>
At this point, you can then use these classes to apply unique styling in browsers with different capabilities. For instance, if you want to apply a different style to a paragraph, depending on whether CSS columns are supported, you can do:
<pre>  .csscolumns p {
    /* Style when columns available */
   }

  .no-csscolumns p {
    /* Style when columns not available */
   }</pre>
If a browser does not support columns, the `.csscolumns` class will not be present in the body, and the browser will never have a chance to apply the rule which uses it.

Some might object that this brings us back to the old times of building a different site for each browser. It is true that nothing stops you from writing so many style declarations that use advanced CSS3 features that your stylesheet becomes virtually empty when these rules cannot be applied.

If you want to use Modernizr in a way that makes sense, you must rely on your design talent to conceive alternative styles that don’t break the design and don’t require throwing away the rest of the stylesheet. For example, you might try replacing drop shadows on letters, when they are not available, with a bold typeface or transparency with a different color.

### Usage

To use Modernizr, include the minified file, and apply a class of `no-js` to the `&lt;html&gt;` element. This last precaution allows you to provide styles for when JavaScript is completely deactivated; obviously, in those cases, Modernizr can’t help you at all. If JavaScript is enabled, Modernizr will kick in and replace the `no-js` with the results of its feature detection operations.
<pre>&lt;head&gt;
&lt;script src="modernizr-1.x.min.js" type="text/javascript"&gt;&lt;/script&gt;

&lt;/head&gt;
&lt;body&gt;
. . . . .
&lt;/body&gt;</pre>
If you’re willing to accept that all websites needn’t display identically across all browsers, you’ll find that Modernizr is an essential tool in your web dev belt!

* * *

## Tool 3: IE 6 Universal CSS

On the same note, designer [Andy Clarke](http://www.stuffandnonsense.co.uk/blog) has devised an [elegant solution](http://code.google.com/p/universal-ie6-css/) for solving IE6′s lack of standard compliance. Called “Universal IE6″, this stylesheet focuses exclusively on typography. The key is to use conditional comments to hide all other stylesheets from IE 6.
<pre>&lt;!--[if ! lte IE 6]&gt;&lt;!--&gt;
/* Stylesheets for browsers other than Internet Explorer 6 */
&lt;!--&lt;![endif]--&gt;

&lt;!--[if lte IE 6]&gt;
&lt;link rel="stylesheet" href="http://universal-ie6-css.googlecode.com/files/ie6.1.1.css" media="screen, projection"&gt;
&lt;![endif]--&gt;</pre>
**Important Note**: Remember to include the latest version, as instructions for older ones are still floating around the web. The final results looks like so:

[![Universal IE6 CSS sample result](http://a.kainy.cn/201012/universal_IE6.jpg)](http://a.kainy.cn/201012/universal_IE6.jpg)
> You have zero work to do to support IE 6 on a new site.
This approach has a pretty obvious advantage compared to classical alternate stylesheets: you have zero work to do to support IE 6 on a new site. The disadvantage, of course, is that the site displays very little of your design. Further, your HTML foundations also has to be rock-solid, in order for the page to be usable even with most styling disabled.

Note that Universal IE6 CSS does not include any styling for HTML5-only elements such as `&lt;section&gt;` or`&lt;footer&gt;`. It is not a problem unless you are relying on those elements exclusively to obtain block level display for some parts of the page. Generally, you would always wrap your text also at least in a paragraph or list element.

This solution is clearly not for everybody, and you might find clients who flat out disagree with their site looking_broken_when viewed in IE6.
> You might also argue that, at this point, you can just as well drop IE6 support entirely. Andy Clarke has summarized [his answers to these objections here](http://forabeautifulweb.com/blog/about/universal_internet_explorer_6_css).
This approach works best for content-centric sites, and catastrophically for web applications; but then again, building a modern web application to work well on IE 6 is a challenge in itself.

* * *

## Tool 4: Selectivizr

[![Selectivizr Support](http://a.kainy.cn/201012/1292601103-jquerySelectivizr.png)](http://a.kainy.cn/201012/1292601103-jquerySelectivizr.png)

Our next champion is a JavaScript utility which aims to introduce new capabilities into older browsers (well, actually just IE 6-8): [Selectivizr](http://selectivizr.com/) works in tandem with other JavaScript libraries such as jQuery, Dojo or MooTools to add support for a range of more advanced CSS selectors.

I’ve listed a few below, though note that the full list of capabilities will be dependent upon your preferred JavaScript library.

*   `:hover`
*   `:focus`
*   `:first-child`
*   `:last-child`
*   `:first-line`
*   `:first-letter`
To use Selectivizr, download it from their home page and include it within your `&lt;head&gt;` section, together with one of the support libraries. Here is an example with jQuery:
<pre>&lt;script src="jquery-1.4.4.min.js"&gt;&lt;/script&gt;
&lt;!--[if lte IE 8]&gt;
  &lt;script src="selectivizr.js"&gt;&lt;/script&gt;

 &lt;![endif]--&gt;</pre>
> Selectivizr works in tandem with other JavaScript libraries to provide CSS3 support for IE 6-8.
This point is very important: Selectivizr cannot work alone; it requires your preferred library to be present. Luckily, it is compatible with the huge majority of popular JavaScript libraries. Chances are, if you are using JavaScript on your site, you probably have an appropriate library already included.

### DOMAssisant

On the other hand, if you won’t be using a library as well, an alternative solution is to use the light weight[DOMAssistant](http://www.domassistant.com/), although you might still prefer your usual JavaScript library for greater ease in managing files.

Be careful though, as the precise selectors that Selectivizr makes available depends on which supporting library is chosen. According to the home page, right now the greatest range of selectors is available with MooTools, while unfortunately jQuery makes the least number of selectors available. It must also be said that some of the selectors that are not available with jQuery are quite exotic and rarely used in the real world usage. **[Refer to our “30 CSS Selectors you Must Memorize”](http://net.tutsplus.com/tutorials/html-css-techniques/the-30-css-selectors-you-must-memorize/) article for a full list of selectors.**

As it happens, with most JavaScript solutions for CSS woes, some restrictions apply.

*   For Selectivizr to perform its magic, stylesheets must be loaded from the same domain as HTML pages. This rules out, for instance, hosting stylesheets and other assets on a CDN.
*   You are forced to use the `&lt;link&gt;` element to include your stylesheets (as opposed to `&lt;style&gt;`).
*   Selectivizr does not update styling if the DOM changes after the page has finished loading (if you add elements in response to a user action, for instance).

* * *

## Tool 5: CSS3Pie

[CSS3Pie](http://css3pie.com/) also enhances Internet Explorer’s [6-8] capabilities, but in a much more native way, as it effectively enables the use of a number of spiffy CSS3 properties, like` border-radius, linear-gradient, box-shadow, border-image` as well as adds support for multiple backgrounds. Use CSS3Pie and say goodbye to manually sliced and positioned rounded corners.
> CSS3Pie: say goodbye to manually sliced and positioned rounded corners.
The way it works is by leveraging little known proprietary Microsoft extensions: the CSS `behavior` property and HTML component files ([official documentation](http://msdn.microsoft.com/en-us/library/ms532146%28v=VS.85%29.aspx)). This extension allows you to attach JavaScript to certain HTML elements using CSS. The JavaScript is included together with some Microsoft proprietary tags, in `.htc` files which are referenced within the style rules.
> For this reason alone, many developers might argue that you shouldn’t use CSS3Pie. Internet Explorer’s proprietary tags are performance heavy and produce less-attractive output.
Why doesn’t CSS3Pie use plain JavaScript? Well there is a [JS-specific version](http://css3pie.com/documentation/pie-js/), though the team advises against its usage, due to the fact that the JavaScript blocks the parsing of the page.

With the current `.htc` solution, implementation is quite simple: you only need to upload a single file from the CSS3Pie distribution, `PIE.htc`, to your server. Afterward, every time you use one of the supported CSS3 properties, add the code below:
<pre>behavior: url(path/to/PIE.htc);</pre>
Above, `path/to/PIE.htc` is the path, relative to the HTML file being served; _not_ the stylesheet.

### Server Side Instructions

Of course, CSS3Pie can only do its magic in Internet Explorer. It also needs a bit of care and feeding on the server side:

*   You should ensure that the `PIE.htc` file is served with a `text/x-component` content type. The distribution includes a PHP script that can take care of this if you are not allowed to modify your server configuration, for instance on a shared host.
*   `PIE.htc` can also trigger ActiveX warnings, usually when you are testing it on your localhost. This last problem requires the [Mark of the Web](http://msdn.microsoft.com/en-us/library/ms537628%28VS.85%29.aspx) workaround to be solved.
CSS3Pie is still, at the time of this writing, in beta mode – as there are still some [kinks to be ironed out](http://css3pie.com/documentation/known-issues/).

* * *

## Tool 6: HTML5 Boilerplate

> HTML5 Boilerplate goes much further than your standard starter templates.
[HTML5 Boilerplate](http://html5boilerplate.com/) can be described as a set of templates to help you get started building modern HTML5 websites as rapidly as possible. But HTML5 Boilerplate goes much further than your standard starter templates.

For instance, it bundles the latest version of Modernizr (same creator), and the HTML even links to the latest Google-hosted jQuery, Yahoo profiler and Google Analytics scripts for you. The CSS contains the usual reset rules, but also a wealth of @media queries to get you started with [responsive web design](http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-a-crash-course-in-css-media-queries/) targeting mobile devices.

### Configuration Files

The most unique feature is that, on top of client configuration, you also get the server side: configuration files for Apache and Nginx. This allows you to maximize download speeds and optimize HTML5 video delivery. In particular, the _.htaccess_ files for Apache might be very convenient to drop into a shared hosting account, as often things like `gzip` compression and `expires` are not active by default.

### Does it do too Much?

Some people might argue that HTML5 Boilerplate takes a bit too many decisions for them (hell, the Apache configuration even automatically strips www. in front of the domain name!) or that it is somewhat Google-centric, though, nonetheless, it’s always interesting to study the files and find what problems the authors have anticipated.

**Further, you’re certainly encouraged to break it down for your personal needs. This is simply a boilerplate to get you started.**

### A Visual Overview

If you want a detailed breakdown of everything HTML5 Boilerplate includes, Paul Irish recorded an exclusive[screencast](http://net.tutsplus.com/tutorials/html-css-techniques/the-official-guide-to-html5-boilerplate/) for Nettuts+.

<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="600" height="413" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="src" value="http://blip.tv/play/gcMVgffAOgI.m4v" /><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><embed type="application/x-shockwave-flash" width="600" height="413" src="http://blip.tv/play/gcMVgffAOgI.m4v" allowfullscreen="true" wmode="transparent"></embed></object>(墙外)

A fully commented version is available at [html5boilerplate.com](http://www.html5boilerplate.com/).

* * *

## Epilogue: Be Bold

Often, the fear of implementing features which do not enjoy full browser support discourages designers from adopting the latest technologies. While the demographics of your audience has to be considered carefully, as well as your client’s wishes, if you accept that sites don’t have to look the same in all browsers, it is possible to make full use today of HTML5 and CSS3.

Think of it this way: if you wait until CSS3 “is complete,” you’ll be waiting forever. CSS2 isn’t even fully supported across all browsers yet! The guiding principle here is that every user should get the most bang for his buck: if he is using a bleeding edge browser, why not take advantage of all the features that browser provides?

Let us know what you think about these issues in the comments. Thank you so much for reading!