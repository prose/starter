---
layout: default
url: contents/
section: posts
title: contents
published: true
---

<div class='listing col6 pad4h margin3' style='padding-bottom:6em;'>
  {% for item in site.categories.post limit:1000 %}
    {% capture date %}{{ item.date | date: '%B %Y' }}{% endcapture %}
    {% capture ndate %}{{ item.next.date | date: '%B %Y' }}{% endcapture %}
  	{% capture url %}{{ item.url }}{% endcapture %}
  
    <div class='splash' style='padding-bottom:.42em;'>
      <!--{{ item.excerpt }}-->
      <div style='padding-bottom:0em; padding-top:0.0em;'>
        <a href="{{site.baseurl}}{{item.url}}">
          {{ item.title }}
        <!--<h4 class='item'></h4> h4 is current rule -->
        <span class='date' href='{{ site.baseurl }}{{ item.url }}' style='float:right;'>
          {{item.date | date:"%b %d %Y"}}
         </span>
        </a>
      </div>
    </div>
  {% endfor %}
</div>
