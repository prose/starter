<script type="text/javascript">

    var postsHREF = [{% for post in site.posts limit:5 -%}"{{ post.url }}"{% unless forloop.last %},{% endunless %}{%- endfor %}];

    var postsTitle = [{% for post in site.posts limit:5 -%}"{{ post.title }}"{% unless forloop.last %},{% endunless %}{%- endfor %}];
    
    var postsDate = [{% for post in site.posts limit:5 -%}"{{ post.date | date:"%b %f %Y" }}"{% unless forloop.last %},{% endunless %}{%- endfor %}];
    
    var postsExcerpt = [{% for post in site.posts limit:5 -%}"{{ post.excerpt }}"{% unless forloop.last %},{% endunless %}{%- endfor %}];

</script>