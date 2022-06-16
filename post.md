---
layout: default
url: post/
title: post
published: true
---

<style>
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-gallery > li {
  flex-grow: 1;
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

.image-gallery::after {
  content: "";
  flex-grow: 999;
}
</style>


<div class='col12' style='padding-bottom:6em;'>

  <div class='container'> 

    {% for item in site.categories.post limit:1000 %}
      {% capture excerpt %}{{ item.excerpt }}{% endcapture %}
    	  {% capture url %}{{ item.url }}{% endcapture %}
    
      <ul class='image-gallery'>
        <li>
      
          <a href="{{site.baseurl}}{{item.url}}">
            {{ item.excerpt }}
            <div class='overlay'><span>{{item.title}}</span></div>
          </a>
        
        </li>
      </ul>
      
    {% endfor %}
    
  </div> <!-- /.container -->

</div> <!-- /.col12 -->