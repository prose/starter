---
layout: default
url: contents/
title: contents
published: true
---

<style>
body{
  margin: 0;
}

gallery-img {
  column-width: 300px;
  column-gap: 5px;
  padding: 5px;
}

gallery-img img{
  width: 43%; 
}
</style>

<div class='gallery'>

  {% for item in site.categories.post limit:1000 %}
    {% capture date %}{{ item.date | date: '%B %Y' }}{% endcapture %}
  	{% capture url %}{{ item.url }}{% endcapture %}
  
    <div class='box'>
      <a href="{{site.baseurl}}{{item.url}}" class='gallery-img'>{{ item.excerpt }}</a>
    </div>
    
  {% endfor %}
  
</div>