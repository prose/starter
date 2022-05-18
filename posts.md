---
layout: default
url: posts/
section: posts
published: true
---

<div class='listing col6 pad4h margin3' style='padding-bottom:6em;'>
  {% for item in site.categories.post limit:1000 %}
    {% capture date %}{{ item.date | date: '%B %Y' }}{% endcapture %}
    {% capture ndate %}{{ item.next.date | date: '%B %Y' }}{% endcapture %}
  	{% capture url %}{{ item.url }}{% endcapture %}
  
    <div class='splash' style='padding-bottom:.66em;'>
      <!--{{ item.excerpt }}-->
      <div style='padding-bottom:1em; padding-top:.66em;'>
        {{ item.title }}
        <span class='date'>
             &#152; {{item.date | date:"%b %d %Y"}}
        </span>
        <a href="{{site.baseurl}}{{item.url}}">
        <!--<h4 class='item'></h4> h4 is current rule -->
        <span class='date' href='{{ site.baseurl }}{{ item.url }}' style='float:right;'>
          	view post &nbsp;&raquo;
         </span>
        </a>
      </div>
    </div>
  {% endfor %}
</div>
