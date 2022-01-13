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

    {% if date != ndate %}
      <h4 class='month'>{{item.date | date: '%B %Y'}}</h4>
    {% endif %}
  <details class='splash'>
    <summary>
        {{item.title}} 
        <span class='date'>
          &#126; {{item.date | date:"%b %d"}}
        </span>
    </summary>
    <div>
      {{ item.content }}
      <span><a href="{{site.url}}{{item.url}}">{{ item.title }}</a></span>
    </div>
  </details>
  {% endfor %}
</div>
