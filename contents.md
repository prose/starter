---
layout: default
url: contents/
title: contents
published: true
---

<style>
   /*! gallery style fot testing */
  .gallery {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
    justify-content: center;
  }

  .box {
    flex-basis: 25%;
    width: 100%;
    padding: 10px;
    margin: 2px;
  }

  .gallery-img img {
    width: 200px;
    height: 200px;
	object-fit: cover;
    transform: scale(1); 
    transition: all 0.3s ease-in-out;
    margin: auto;
  &:hover {
    transform: scale(1.05);
  }
</style>

<div class='listing col6 pad4h margin3'><div class='splash'><h2>gallery</h2></div></div>

<div class='gallery'>

  {% for item in site.categories.post limit:1000 %}
    {% capture date %}{{ item.date | date: '%B %Y' }}{% endcapture %}
  	{% capture url %}{{ item.url }}{% endcapture %}
  
    <div class='box'>
      <a href="{{site.baseurl}}{{item.url}}" class='gallery-img'>{{ item.excerpt }}</a>
    </div>
    
  {% endfor %}
  
</div>

<hr />