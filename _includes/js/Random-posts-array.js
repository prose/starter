<script type="text/javascript">

    var postsHREF = [{% for post in site.posts limit:5 -%}"{{ post.url }}"{% unless forloop.last %},{% endunless %}{%- endfor %}];

    var postsTitle = [{% for post in site.posts limit:5 -%}"{{ post.title }}"{% unless forloop.last %},{% endunless %}{%- endfor %}];
    
    var postsExcerpt = [{% for item in site.categories.post limit:5 -%}"{{ item.excerpt }}"{% unless forloop.last %},{% endunless %}{%- endfor %}];

</script>