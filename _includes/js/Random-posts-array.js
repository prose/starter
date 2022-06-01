<script type="text/javascript">

    var postsHREF = [{% for post in site.posts %}"{{ post.url }}"{% unless forloop.last %},{% endunless %}{% endfor %}];

    var postsTitle = [{% for post in site.posts %}"{{ post.title }}"{% unless forloop.last %},{% endunless %}{% endfor %}];
    
    var postsDate = [{% for post in site.posts %}"{{ post.date | date:"%b %f %Y" }}"{% unless forloop.last %},{% endunless %}{% endfor %}];
    
    var postsExcerpt = [{% for post in site.posts %}"{{ post.excerpt }}"{% unless forloop.last %},{% endunless %}{% endfor %}];

</script>