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

  <details class='splash'>
    <summary>
        {{ item.title }}
        <span class='date'>
        	{{item.date | date:"%b %d %Y"}}
        </span>
    </summary>
    <div>
      {{ item.content }}
    </div>
    <div>
    	<a href='{{ site.baseurl }}{{ item.url }}' style='float:right;'>view post &nbsp;&raquo;</a>
    </div>
  </details>
  {% endfor %}
</div>
