---
layout: default
url: post/
title: post
published: true
---


<div class='col12' style='padding-bottom:6em;'>

  <div class='splash'> 

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