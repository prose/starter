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

    <details class='splash' style='padding-bottom:.66em;'>
      <summary>
          {{ item.title }}
          <span class='date'>
               &#152; {{item.date | date:"%b %d %Y"}}
          </span>
      </summary>
      <div style='padding-bottom:2em;'>
        {{ item.excerpt }}
        <a href="{{site.baseurl}}{{item.url}}">
        <h4 class='item'></h4>
        <span class='date' href='{{ site.baseurl }}{{ item.url }}' style='float:right;'>view post &nbsp;&raquo;</span>
        </a>
      </div>
    </details>
  {% endfor %}
</div>