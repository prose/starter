---
layout: post
title: "Technical Challenges"
tags: [presentState]
prettyTag: "Present State"
---
<div class="recommendations">
<b>In this section:</b>
<ul>
    <li>Poor code organization results in poor page performance</li>
    <li>Misplaced JavaScript hinders performance</li>
    <li>Managing images as static assets unsustainable</li>
</ul>
</div>
During stakeholder interviews and in follow up conversations, Fluid asked the technical staff to identify the types of challenges they encounter when working on {{site.client.url}}.

>Supporting browsers across specific devices makes it really difficult to manage code and bugs.

<p></p>
  
>The development team is creating one-offs but really needs to be consistent. It feels like we’re creating everything from zero every time.

* Code is not organized into manageable modules, often resulting in poor performance. Script and style blocks are often inline in the HTML. Code is not concatenated or minified.
* JavaScript in JSPs needs to be removed.
* JavaScript inline and in CHTML blocks need to be removed.
* Guided navigation JavaScript is too large. Its functionality could be handled by other libraries on the site. 
* JSON objects are too large. We get all product data in our JSON as opposed to the subset we need.
* Images are managed as static assets. 
* CSS structure we have is not maintainable - Reused, hard to make changes, it is huge.
* 3rd party scripts were not built with performance in mind. They sit at the top of the DOM and often clash, resulting in coping issues. Many of them use their own version of jQuery, typically an older version that overrides our later version.

Fluid Recommends: [Improve organization and leverage best practices](/Future-Tech-Recommendations)

