---
layout: page
---
 1 <div>
 3    <section>
 4       <ul>
 5          {% for post in site.posts %}
 6          <li>
 7             [<time datetime="{{ post.date | date_to_xmlschema }}"></time>{{ post.date | date: "%Y-%m-%d" }}]
 8             <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a>
 9          </li>
10          {% endfor %}
11       </ul>
12    </section>
13 </div>