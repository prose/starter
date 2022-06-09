---
layout: default
url: contents/
title: contents
published: true
---

<style>
  .image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-gallery > li {
  height: 300px;
  cursor: pointer;
  position: relative;
}

.image-gallery li img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  border-radius: 5px;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(57, 57, 57, 0.502);
  top: 0;
  left: 0;
  transform: scale(0);
  transition: all 0.2s 0.1s ease-in-out;
  color: #fff;
  border-radius: 5px;
  /* center overlay text */
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-gallery > li {
  /* ... */
  position: relative;
  cursor: pointer;
}

/* hover */
.image-gallery li:hover .overlay {
  transform: scale(1);
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

  <span class='splash'></span>

  <div class='container'> 

    {% for item in site.categories.post limit:1000 %}
      {% capture excerpt %}{{ item.excerpt }}{% endcapture %}
    	  {% capture url %}{{ item.url }}{% endcapture %}
    
      <ul class='img-gallery'>
        <li>
      
        <a href="{{site.baseurl}}{{item.url}}">{{ item.excerpt }}
        <div class='overlay'>{{item.title}}</div>
        </a>
        
        </li>
      </ul>
      
    {% endfor %}
    
  </div> <!-- /.gallery -->

</div> <!-- /.listing -->