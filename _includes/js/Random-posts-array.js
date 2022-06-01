<script type="text/javascript">

    var postsHREF = [{% for post in site.posts limit:5 -%}"{{ post.url }}"{% unless forloop.last %},{% endunless %}{%- endfor %}];

    var postsTitle = [{% for post in site.posts limit:5 -%}"{{ post.title }}"{% unless forloop.last %},{% endunless %}{%- endfor %}];
    
    var postsExcerpt = [{% for item in site.categories.post limit:1000 -%}
      {% capture date %}{{ item.date | date: '%B %Y' }}{% endcapture %}
      {% capture url %}{{ item.url }}{% endcapture %}
      
      <div class='splash' style='padding-bottom:3.66em;'>
      <a href="{{site.baseurl}}{{item.url}}">{{ item.excerpt }}</a>
        <div style='padding-bottom:2em; padding-top:.66em;'>
          {{ item.title }}
          <span class='date'>
               &#152; {{item.date | date:"%b %d %Y"}}
          </span>
          <a href="{{site.baseurl}}{{item.url}}">
          <h4 class='item'></h4>
          <span class='date' href='{{ site.baseurl }}{{ item.url }}' style='float:right;'>
            	view post &nbsp;&raquo;
           </span>
          </a>
        </div>
      </div>
    {% unless forloop.last %},{% endunless %}{%- endfor %}];

</script>