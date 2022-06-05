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

<h2 style='listing col6 pad4h margin3'>gallery</h2>

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


<!-- <div class='listing col6 pad4h margin3' style='padding-bottom:6em;'>
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
</div> -->
