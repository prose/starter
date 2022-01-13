---
layout: default
url: posts/
section: posts
published: true
---

<div class='listing col6 pad4h margin3'>
  {% for item in site.categories.post limit:1000 %}
    {% capture date %}{{ item.date | date: '%B %Y' }}{% endcapture %}
    {% capture ndate %}{{ item.next.date | date: '%B %Y' }}{% endcapture %}
  	{% capture url %}{{ item.url }}{% endcapture %}

  <a href='{{ site.baseurl }}{{ item.url }}' class='pretty'>{{ item.title }}</a>
  <details class='splash'>
    <summary>
        <span class='date'>
        	{{item.date | date:"%b %d %Y"}}
        </span>
    </summary>
    <div>
      {{ item.content }}
    </div>
    <a href='{{ site.baseurl }}{{ item.url }}'>view post &nbsp;&raquo;</a>
  </details>
  {% endfor %}
</div>
