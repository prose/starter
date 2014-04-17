# UXP

## Structure

This site is built with [Jekyll](http://jekyllrb.com/), including [Prose](http://prose.io) for editing files online. 

The files:

_css
_includes (site components such as header, footer)
_layouts (page templates for specific layouts)
_site (the "exported" site)
_config.yml (configuration options)
blog.rss
Gemfile
Gemfile.lock
index.html (site main page)
License.md
links.jsonp
site.css (main css)
site.js (main javascripts)

Are only used structure the site layout. None of these files need to be edited to contribute content to the site. 

**principles.md
practice.md
methods.md
patterns.md**

These are the main section of the site. 

**_posts**

This folder contains the blog posts on the front page. 

**img/**

This folder contains linked images in posts and pages. 


## Editing/Contributing

* Any of the main pages (Principles, Best Practice, Tools & Methods and Design patterns) can be edited directly in plain text, either via the prose editing interface or by syncing locally the git repository to your machine. 

* To add a blog post to the front page, simply create a new markdown (.md) file and save with this format 'YYYY-MM-DD-Post-title'.

* If you want to add an image to your page/post, place it in this folder and use this format to link to the image.

```
![alt text](/uxp/img/'addd image name here' )
```

## Prose Starter

Starter is a barebones starting point for responsive sites built on Jekyll and with
site management in [prose](http://prose.io). To get started, Fork this repo and [install Jekyll](http://jekyllrb.com/docs/installation).

To work on the site locally, run `jekyll serve --watch`, then visit `http://localhost:4000/starter` in your browser.

If you notice any problems or would like to contribute to the project start a discussion from the [issues page](https://github.com/prose/starter/issues)
