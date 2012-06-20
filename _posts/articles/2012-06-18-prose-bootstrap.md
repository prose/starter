---
layout: article
title: Introducing Prose Bootstrap
abstract: Prose Bootstrap is a simple template in order to get started with Jekyll.
author_twitter: _mql
author: Michael Aufreiter
categories:
- articles
published: true
---


All you have to do is forking the repository and make your own adjustments.


Adjust Configuration
-----------------

Make sure you setup `_config.yml` correctly.

If your page lives under `http://username.github.com/sitename` your config.yml looks like this:

    auto: true
    server: true
    permalink: none
    baseurl: "sitename"
    exclude:
    - .gitignore
    - README.md


Use Prose.io to edit the contents of your site
-----------------

It was challenging, but Prose supports OAuth. I think it's very important to use OAuth over Basic Authentication, since Github data can be very sensible and no one wants to risk getting his password sniffed.

![Start](http://f.cl.ly/items/0t0A170b2Y093F2u1w45/Screen%20Shot%202012-05-23%20at%205.48.45%20PM.png)


**Browse**

Once you have selected a repository, you can browse your posts and sub-folders in a traditional file-browser-ish manner. You can create new files here as well, which immediately opens an empty document for you, which you can save after populating it with some text.

![Posts](http://f.cl.ly/items/0e0D1s292j422S0N3723/Screen%20Shot%202012-05-23%20at%204.58.48%20PM.png)


We use CodeMirror, a great software that makes browser-based editing a pleasure (the first time). Compared to a regular textarea, which has an annoying inline scoller this is a huge step forward I think.

![Edit](http://f.cl.ly/items/3E0Q2K3V0M3z1O2j1r1H/Screen%20Shot%202012-05-22%20at%201.53.28%20AM.png)

