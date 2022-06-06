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

  <h1>links</h1>
  
  <div class='splash' style='padding-bottom:3.42em;'>
    
    <ul>
      <li>
        <a href="{{site.baseurl}}/resume">
          resume
          <span class='date' style='float:right;'>
            {{ 'now' | date: "%Y" }}
          </span>
        </a>
      </li>
    </ul>
    
  </div> <!-- /.splash -->
  
  <h1>gallery</h1>

  <div class='gallery'> 

    {% for item in site.categories.post limit:1000 %}
      {% capture excerpt %}{{ item.excerpt }}{% endcapture %}
    	  {% capture url %}{{ item.url }}{% endcapture %}
    
      <div class='box'>
      
        <a href="{{site.baseurl}}{{item.url}}" class='gallery-img'>{{ item.excerpt }}</a>
        
      </div> <!-- /.box -->
      
    {% endfor %}
    
  </div> <!-- /.gallery -->

</div> <!-- /.listing -->