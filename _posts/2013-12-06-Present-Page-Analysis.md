---
layout: post
title: "Page Analysis"
tags: [presentState]
prettyTag: "Present State"
---
<div class="recommendations">
<b>In this section:</b>
<ul>
<li>Performance analyses of Home Page and Product Detail Page</li>
<li>Comparison to Zappos.com</li>
<li>{{site.client.name}} page loads not up to industry standard</li>
</ul>
</div>

Without insight to the coding of {{site.client.url}}, Fluid performed some analyses of {{site.client.url}}'s home page and a representative Product Detail Page. Google Page Speed and WebPageTest.org were used to gauge page performance. 

For comparison purposes, tests were also run against online retailer Zappos' home page and a product detail page. 
 
**{{site.client.name}} Home Page:**  

* URL: http://www.{{site.client.url}}  
* Google PageSpeed Desktop Score 61/100 http://goo.gl/fLsr2S  
* WebPageTest: http://www.webpagetest.org/result/131205_84_8TN/1/details/
 * Fully Loaded Time: 5.404s
 * First View/Fully Loaded Requests 158

**{{site.client.name}} Wicked Good Moccasins PDP Page:** 

* URL: http://www.{{site.client.url}}/llb/shop/18664?page=womens-wicked-good-moccasins
* Google Page speed desktop score 63/100: http://goo.gl/2CFND4
* WebPageTest: http://www.webpagetest.org/result/140114_Q4_RQ8/ 
 * First View/Fully Loaded Time: 7.116s
 * First View/Fully Loaded Requests 160;

**Zappos Home Page**  

* URL: http://www.zappos.com/
* Google PageSpeed Desktop Score 85/100: http://goo.gl/gzcuSy
* Webpagetest: http://www.webpagetest.org/result/140114_Y1_VCG/ 
 * First View/Fully Loaded Time: 3.952s
 * First View/Fully Loaded Requests: 133 

**Zappos PDP: UGG Kids Bailey Bow Tall Kids Boot**

* URL: http://www.zappos.com/ugg-kids-bailey-bow-holiday-little-kid-big-kid-black
* Google PageSpeed Desktop Score 87/100: http://goo.gl/sFQmZY
* Webpagetest: http://www.webpagetest.org/result/140114_E8_W0A/ 
 * First View/Fully Loaded Time: 3.800s
 * First View/Fully Loaded Requests: 135 

### Results:

Page load time and potential user experience adversely affected due to several factors.  Before moving to a responsive design solution these issues must be addressed.

  * Several JavaScripts and CSS blocks loaded inline in HTML.
  * Images, JavaScript and CSS not optimized for better performance.
  * Static assets (images, most JavaScript libraries and CSS files) are hosted at {{site.client.url}} instead of a CDN.
  * Render-blocking JavaScript and CSS.
  * Browser has to download assets every time, no caching.

Fluid Recommends: [Make fewer HTTP requests, using a CDN and caching](/Future-Page-Recos)

<!-- Ran [Google Page Speed](http://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fwww.{{site.client.url}}%2F&tab=desktop) and [WebPageTest.org](http://www.webpagetest.org/result/131205_84_8TN/1/details/) tests on {{site.client.url}} Home Page. --> 
