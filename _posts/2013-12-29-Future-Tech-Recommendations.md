---
layout: post
title: "Technical Recommendations"
tags: [futureState]
prettyTag: "Looking Ahead"
---
<div> 
<h3>Fluid Recommends:</h3>
<ul>
<li>Better organize your code so you can optimize to improve load time.
    <ul>
        <li>Modularize code for better loading and reuse.</li>
        <li>Only inline JavaScript if deemed absolutely necessary (e.g. data analytics scripts are often run inline).  Move inline code out of JSPs and CHTML blocks.</li>
        <li>Consider using a module loader like RequireJS.  A module loader allows you to load scripts in parallel instead of serially.  You can build in dependecies, perform concatenation and minification and asynchronously load resources (i.e. "lazy loading" of scripts and style sheets).</li>
    </ul>
</li>
<li>Estimate out effort to build a new guided navigation leveraging existing JS libraries (on {{site.client.url}} website) and the effort to refactor the legacy guided navigation. Compare the estimates and consider what the savings of time and code would be if the legacy guided navigation code were sunsetted in favor of a new guided navigation.</li>
<li>Initiate a project with the team that provides product data. Provide details of all the scenarios where you would need to get JSON data filtered to include only the necessary results.</li>
<li>Serve up images using CDN. For some cases in a responsive site, it is beneficial to serve up a smaller image asset for phone and tablet devices, for instance the image at the top of a category page.  In this case a server can output the image in the various sizes.  The CSS for the image can load the appropriate image as a background-image based on media queries.</li>
<li>Use a CSS Preprocessor such as Sass to better organize CSS.  Sass offers variables and the ability to enforce inheritance through nesting.</li>
<li>Preprocessor syntax provides a richer visual structure and is much easier to read and update than static CSS. Sass also can be augmented by the Compass library which provides mixins to quickly implement and extend common CSS techniques. (Note: {{site.client.name}} has already started to use Sass on a some projects, but its use should be extended with the goal of covering the whole site).</li>
<li>Review 3rd party scripts to determine what can be done internally to mitigate performance and scope issues.
    <ul>
        <li>One technique to prevent JavaScript polluting global scope is to store the content in a namespaced module.  This namespaced module uses an immediately invoked function expression, which stores scope within the function.  The third party can be run from the new namespaced module. Alternatively, Fluid strongly recommends a module loader such as RequireJS for this task.</li>
        <li>Preventing collisions in the higher levels of the DOM can be more tricky.  See if ID or classname selectors can be bound to other elements instead of window or body. DOM collisions might take more research and follow up with the script vendor to best resolve.</li>
        <li>Third parties often have their own dependencies and need their own versions of libraries such as jQuery.  The third party vendor should be consulted to determine if your current version of jQuery is compatible, and if not, how to mitigate it.  Using a module loader like RequireJS to provide scope for third party script dependencies might be the best solution for supporting multiple versions of jQuery. Alternately the module pattern or using the "noConflict" technique can be employed.</li>
    </ul> 
</li>
</ul>
</div>

<br>
