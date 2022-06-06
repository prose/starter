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
    grid-template-columns: repeat(auto-fill,minmax(20vh, 1fr));
    grid-auto-rows: minmax(min-content, max-content);
    justify-content: center;
  }

  .box {
    flex-basis: 25%;
    width: 100%;
    padding: 10px;
  }

  .gallery-img img {
    width: 20vh;
	object-fit: cover;
    transform: scale(1); 
    transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
</style>


<div class='listing col6 pad4h margin3' style='padding-bottom:6em;'>
  
  <div class='splash' style='padding-bottom:.42em;'>
    <h3>links</h3>
    <a href="{{site.baseurl}}/resume">
      resume
      <span class='date' style='float:right;'>
        {{ 'now' | date: "%Y" }}
      </span>
    </a>
  </div>
  
</div>

<div class='listing col6 pad4h margin3' style='padding-bottom:6em;'>

  <div class='splash' style='padding-bottom:.42em;'>
    <h3>posts</h3>
  </div>
    
    {% for item in site.categories.post limit:1000 %}
    {% capture date %}{{ item.date | date: '%B %Y' }}{% endcapture %}
  	{% capture url %}{{ item.url }}{% endcapture %}
  
    <div class='splash' style='padding-bottom:.42em;'>
      <div style='padding-bottom:0em; padding-top:0.0em;'>
        <a href="{{site.baseurl}}{{item.url}}">
          {{ item.title }}
          <span class='date' href='{{ site.baseurl }}{{ item.url }}' style='float:right;'>
          {{item.date | date:"%b %d %Y"}}
         </span>
        </a>
      </div>
    </div>

</div>

<div class='splash'>
  <h3>gallery</h3>
</div>

<div class='gallery col9'> 

  {% for item in site.categories.post limit:1000 %}
    {% capture date %}{{ item.date | date: '%B %Y' }}{% endcapture %}
  	{% capture url %}{{ item.url }}{% endcapture %}
  
    <div class='box'>
      <a href="{{site.baseurl}}{{item.url}}" class='gallery-img'>{{ item.excerpt }}</a>
    </div>
    
  {% endfor %}
  
</div>

<hr />