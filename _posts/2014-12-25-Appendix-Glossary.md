---
layout: post
title: "Glossary"
tags: [appendix]
prettyTag: "Supplemental Materials"
---

###Adaptive Design
Similar to responsive design, adaptive design conditionally displays one of a set of fixed-width [layouts](#layouts) based on the width of the device.

<!--potentially a dirty word-->

###Breakpoint
Breakpoints refer to the point at which a page changes from one layout to another. More technically, a breakpoint is the point at which the conditions for a given [media query](#mediaQueries) are met, and the CSS rules governing the display of page content change.

Two factors should inform the selection of breakpoints:

1. The design. If using a mobile first approach, start with the narrowest layout and increase the width of the page until it doesn't look right. At that point, create a breakpoint and a new layout. Repeat.
2. Careful thought should be taken before placing breakpoints below 700px. Doing so may require that different sets of assets be downloaded for a device depending on whether it is in portrait or landscape mode. Changing the device orientation will trigger new requests for assets, taxing both the user's data plan and their patience while waiting for "the same" images to be displayed after they are re-downloaded.


###Conditional Comments
To aid the support of older versions of Internet Explorer (like 8 and earlier), conditional comments may be used to selectively load javascript and style sheets specifically for those browsers. Conditional comments take the form of:

	<!--[if IE 6]>
		<link rel="stylesheet" type="text/css" href="Here's the IE6 specific stylesheet">
	<![endif]-->

For addional information, see the Microsoft Developer Network's page on [conditional comments](http://msdn.microsoft.com/en-us/library/ms537512(vs.85\).aspx).


### Content
It the broadest sense, content is the information that users come to a page to see. This could be as simple as the text and images that comprise a blog post or as complex as a dynamically generated set of text, images, and links that comprise a search results page. Regardless, this content should be stored, free of any styling like fonts or colors, in some form of content library. Usually, a content management system (CMS), is used to author and manage content.

###CSS Preprocessor
A CSS Preprocessor, when used thoughtfully, provides the ability to be more concise and expressive than with just CSS alone.  The CSS Preprocessor takes code written in the Pre-processor language (SCSS syntax in the case of the [SASS](http://sass-lang.com/) Preprocessor for example) and generates CSS from that.  

CSS Preprocessors offer tools such as variables, mixins, and the ability to enforce a hierarchy and inheritance via simple intending.  Libraries such as the [Compass](http://compass-style.org/) library for SASS offer ready to use mixins and patterns for common styling problems.

<h3 id="designPatterns">Design Pattern</h3>
A repeatable way to display something (e.g. a blog article) or accomplish a task (e.g. add something to the cart). Design patterns are extemely beneficial for both customers and for the team maintaining the site because they:

- Allow the content team to focus solely on the content, rather than splitting their attention between the presentation and the content itself
- Decrease the time and effort required to make updates to the site.
- Help users orient themselves on the site by using a consistent system for displaying information and functionality.
- Typically increase conversion by helping customers feel more comfortable on your site.


<h3 id="deviceDetection">Device Detection</h3>
A technique to identify certain devices and display content in a specific way for those devices. Frequently, this is done by comparing the `user-agent string` (a short bit of text that is supposed to contain information about the browser and device) against a list of known devices. Conditional code is then run based on the information contained in the user agent string. This practice has two **significant** drawbacks:

* Browsers typically (almost always) provide completely incorrect information
* Keeping an up-to-date list of all devices on the market is an unrealistic task

### Device Library
A collection of sample devices your customers are likely to be using. This library should be used to test designs and content to reasonably ensure that it will look good on all devices.


###Device Specific (Mobile/Tablet) Site
A site created specifically for a class of devices, usually mobile phones. Traffic from these devices to the main site are intercepted and redirected to the appropriate page on the mobile site. 


### Emulators
While it's important to test on real devices, it's not feasible to test on every device in the real world. When a specific class of devices isn't available, combining real device testing with device emulators (like the iOS emulator that ships with [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12)) will provide a reasonable assurance that something works as designed.


<h3 id="featureDetection">Feature Detection</h3>
The preferred alternative to [device detection](#deviceDetection), feature detection tests whether or not the device supports a given feature, and enables features that are supported. Feature detection is normally done by writing your own JavaScript to test if a fundamental property, method, etc. of the feature you are detecting exists or can be used, or by using a 3rd party feature detection library, such as the excellent [Modernizr](http://modernizr.com/). Modernizr provides feature tests and mechanisms for selectively applying CSS and JavaScript based on the results of those tests, for a whole host of different HTML5 and CSS3 features.

One common use of feature detection is to test for whether a device supports touch or not, and to enable functionality or styling specifically for touch enabled devices. For example, if it is determined that the device supports touch, code to support gestures can be loaded.

### Fluid (or flexible) elements vs. Fixed Elements
Elements whose width, rather than being fixed, is determined by the width of the device used to display the page. The width of these elements is usually defined in terms of percentages (e.g. 33.3333333% of the width of the device).

Fixed width elements have a specific width, usually defined in pixels (e.g. `width: 20px`) rather than a relative width.

<style>

#fluidFlexible div{
	background:#3AF;
	padding: 0 3rem;
	display:block;
	margin-top:1rem;
	text-align: center;
}

#fluidFlexible div:nth-child(1){
	width:10rem;
}

#fluidFlexible div:nth-child(2){
	width:20.833333333333%;
}
</style>

<div id="fluidFlexible">

	<div>Fixed Width</div>
	<div>Fluid Width</div>

</div>

<h3 id="gracefulDegradation">Graceful Degradation</h3>
A programming methodology that allows code to continue to function (if sub-optimally) rather than fail completely when optimal performance is not possible. This helps customers to access sites even under poor conditions, such as on a device that does not support javascript. Graceful degradation is similar to [progressive enhancement](#progressiveEnhancement) in that both help ensure users' access to content, however the central tenant of progressive enhancement that the bare minimum of technologies be required to access content and is only improved by more sophisticated technologies as the conditions under which the content is being viewed supports, allow for a more robust site.

### Grid System
A way to structure page templates that makes for visually pleasing pages and makes designing content much easier. Two popular grid frameworks are Zurb's [Foundation](http://foundation.zurb.com/) and Twitter's [Bootstrap](getbootstrap.com). As an example, the following code (in the Foundation framework) produces the twelve column grid shown below.

{% highlight css %}

	<div class="row">
	  <div class="large-4 columns">4</div>
	  <div class="large-4 columns">4</div>
	  <div class="large-4 columns">4</div>
	</div>
	<div class="row">
	  <div class="large-3 columns">3</div>
	  <div class="large-6 columns">6</div>
	  <div class="large-3 columns">3</div>
	</div>
	<div class="row">
	  <div class="large-2 columns">2</div>
	  <div class="large-8 columns">8</div>
	  <div class="large-2 columns">2</div>
	</div>
	<div class="row">
	  <div class="large-3 columns">3</div>
	  <div class="large-9 columns">9</div>
	</div>
	<div class="row">
	  <div class="large-4 columns">4</div>
	  <div class="large-8 columns">8</div>
	</div>
	<div class="row">
	  <div class="large-5 columns">5</div>
	  <div class="large-7 columns">7</div>
	</div>
	<div class="row">
	  <div class="large-6 columns">6</div>
	  <div class="large-6 columns">6</div>
	</div>

{% endhighlight %}
<div>
</div>

![Grid]({{ site.baseurl }}/img/glossary/grid.png)


###Image Scaling Behavior
Defined for each image, images typically scale in one of four ways (resize the browser to see the changes):

<style>

	#imageScalingBehavior{
		list-style: none;
		padding:0;
		margin:0;
	}

	#imageScalingBehavior li{
		padding-bottom: 2rem;
		min-height:9.375rem;
	}

	label{
		display: block;
	}

#imageScalingBehavior li > div{
	margin-top:.5rem;
}

#scale, #crop, #scaleAndCrop, #resize{
	max-width: 25rem;
}

	#scale{
		width:57.142857142857%;
		height:12.5rem;
		background:url('{{ site.baseurl }}/img/glossary/400x200.jpg') no-repeat;
		background-size: contain;
	}

	#crop{
		width:57.142857142857%;
		height: 12.5rem;
		background:center center url('{{ site.baseurl }}/img/glossary/400x200.jpg');
		background-size: 25rem auto;
		overflow:hidden;
	}

	#scaleAndCrop{
		width:57.142857142857%;
		height:12.5rem;
		overflow:hidden;
		background:center center url('{{ site.baseurl }}/img/glossary/400x400.jpg');
		background-size: cover;
	}

	#resize{
	background:url('{{ site.baseurl }}/img/glossary/400x200.jpg');
	background-size: cover;
	height:12.5rem;
	width:25rem;
	}

@media (max-width: 700px){
	#resize{
		height:6.25rem;
		width:8rem;
	}
}

</style>

<ul id="imageScalingBehavior">
	<li>
		<label>
			<b>Scale Uniformly</b>
			Images retain their aspect ratio, and the image scales up or down proportionally
		</label>
		<div id="scale">
		</div>
	</li>
	<li>
		<label>
			<b>Crop</b>
			Images stays the same size, but the area used to display it changes, resulting in parts of the image being hidden
		</label>
		<div id="crop">
		</div>
	</li>
	<li>
		<label>
			<b>Scale and Crop</b>
			Images both scale to fill the space and any overflow is cropped. This option is most often used when images are not square.
		</label>
		<div id="scaleAndCrop">
		</div>
	</li>
	<li>
		<label>
			<b>Resize</b>
			Similar to the scale uniformly behavior, except images change between a series of set sizes.
		</label>
		<div id="resize">
		</div>
	</li>
</ul>


<h3 id="infiniteScroll">Infinite Scroll</h3>
A design pattern commonly employed on search and subcategory pages where the first page of results are loaded (as one normally expects), and additional results are conditionally loaded as the user scrolls down the page. [Pinterest](http://www.pinterest.com/llbean/rustic-living/) uses this pattern (notice how the scroll bar changes length as you scroll down the page, indicating that the page has gotten longer).


<h3 id="layouts">Layouts</h3>
How content is presented between two breakpoints. Many sites have four layouts (three breakpoints) roughly corresponding to:

- tiny screens (typically mobile phones)
- small screens (typically large mobile phones and small tablets)
- medium screens (typically large tablets and small laptops/desktops)
- large screens (typically laptops and desktops)


<h3 id="mediaQueries">Media Queries</h3>
Media queries are bits of code that browsers use to determine how to display content. They take the basic form of, &#8220;If a particular attribute (such as viewport width) of the browser is X (at least 768px wide), then apply the following rules:...&#8221;

Below is an example. Resize the browser width to see the different style rules applied


{% highlight css %}

	/* Make the box red */
	#box {background-color: red;}

	/* If the viewport is less than 1000px, make the box orange */
	@media (max-width:1000px){
		#box{background-color: orange;}
	}

	/* If the viewport is less than 900px, make the box yellow */
	@media (max-width:900px){
		#box{background-color: yellow;}
	}	

	/* If the viewport is less than 1000px, make the box green */
	@media (max-width:800px){
		#box{background-color: green;}
	}
{% endhighlight %}

<style>

#box {
	padding:3rem;
	font-weight: bold;
	color:#333;
	display:inline-block;
	background-color: red;
	margin:2rem 0 0 50%;
	position: relative;
	left:-4rem;
}
@media (max-width:1000px){
		#box{background-color: orange;}
}
@media (max-width:900px){
		#box{background-color: yellow;}
}
@media (max-width:800px){
		#box{background-color: green;}
}

</style>

<div id="box">
	BOX
</div>


<h3 id="mobileFirst">Mobile First</h3>
A design methodology that encourages project teams to begin by designing the most limited experience necessary to get content to the user, and then relying on progressive enhancement to add features and functionality as the device supports it.



<h3 id="atomicDesign">Modular or Atomic Design</h3>
A design system that builds pages out of discrete units. For example, buttons and form fields may combine to be a search field, or a form for submitting a comment on a blog post. Both are made of the same basic elements, but may be re-combined in different ways to create different modules. These modules may then be combined to form page templates, which, when these templates have been populated with content, become pages on the site.

####Elements
Elements are the fundamental units that make up pages, such as the examples shown here, field labels, form fields, and buttons.

![Page]({{ site.baseurl }}/img/glossary/element.png)

####Components
Elements may be combined together to create components. Components typically have one small bit of functionality, such as allowing the user to perform a search, or navigate to a page.

![Page]({{ site.baseurl }}/img/glossary/component.png)

####Modules
Modules are larger, more complex page parts.

![Page]({{ site.baseurl }}/img/glossary/module.png)

####Templates
Templates are the bare structure of a page without any content. Typically, page templates are reused in their entirety throughout the site to present different, but formally identical, content in the same manner. As an example, Category pages typically use the same page template, even though the content is different.

![Page]({{ site.baseurl }}/img/glossary/template.png)

####Pages
Pages are pages as they appear to the end user. 

![Page]({{ site.baseurl }}/img/glossary/page.png)


### Module Templates
Use modules to balance the needs of the technical team to support a vast number of devices and the business team to display myriad content in an engaging way.  Modules may be templatized to allow for different content.

Modules may themselves have multiple templates that can be used to display content.

<label>Hero Module with One Image</label>
![One Image Hero]({{ site.baseurl }}/img/glossary/hero1.png)

<label>Hero Module with Two Images</label>
![Two Image Hero]({{ site.baseurl }}/img/glossary/hero2.png)

<label>Hero Module with Three Images</label>
![Three Image Hero]({{ site.baseurl }}/img/glossary/hero3.png)


###Off&#8210;Canvas Pattern
A design pattern, commonly used for navigation on mobile pages, where part of the page is drawn "off canvas" to the left or right of the viewable portion of the page. Tapping a button reveals the portion of the page that was off canvas. After an exhaustive study and testing, wikipedia elected to use this pattern on their [mobile site](http://en.m.wikipedia.org/wiki/Llbean). Tapping the menu button (&#9776;) on the top left of the page reveals the off canvas navigation.


### Performance Budget
Performance budgets are an effective technique of putting a limit on factors that negatively impact page load time. To create a performance budget, the team must agree on a maximum limit for the number of http requests for a page and the overall page weight (in kB). Any new features that the team wants to add must not cause the page to exceed either limit. If it does, one of three things must occur:

1. The page template is optimized to allow the inclusion of the feature without going over budget.
2. Something else is removed from the page template.
3. The new feature is not added.

This ensures that pages always load quickly, regardless of the device. The value of having a fast site cannot be stressed enough:

- Amazon found that for every 100ms decrease in page load time, revenue rose by 1%. *[source](http://www.scribd.com/doc/4970486/Make-Data-Useful-by-Greg-Linden-Amazoncom)*
- Google found that a delay of only a *half second* in page load time resulted in a 20% drop in traffic *[source](http://glinden.blogspot.com/2006/11/marissa-mayer-at-web-20.html)*
- One in four people abandon a page if it takes more than four seconds to load *[source](http://bradfrostweb.com/blog/post/performance-as-design/)*


<h3 id="progressiveEnhancement">Progressive Enhancement</h3>
A best practice, design and build strategy that helps ensure that customers always receive the information they request by ensuring the display of the bare minimum content and functionality necessary and then enhancing that content as supported by the device. See the Best Practices document for an [example](/Lessons-Learned/#progressiveEnhancement).


###Responsive design
A design feature where the presentation (styling) of content changes based on information about the device from which the content is being viewed, allowing for the optimal presentation of that content. This is accomplished by separating content from the presentation layer. asking simple questions (known as [media queries](#mediaQueries)) about the device displaying the content, and using those answers to determine how that content is displayed.



### Separation of Content and Styling
Unlike the physical world of print, content on the web can exist independent of the presentation. Fonts and styling can be changed without making any changes to the content itself. Users can view content from an ever increasing variety of devices, their phone, their computer, their car. Separating content from its presentation and allowing the capabilities of the display device to determine the presentation of the content ensures the best presentation of that content. This is the heart of responsive design.

### Styling (Presentation)
Rules that determine how content is displayed on the site. Examples include: fonts, color palette, page layout, and how that content may be accessed. This is controlled with CSS, or more frequently, a CSS pre-processor.


### Style Guide
A style guide is an agreed upon set of rules that govern the display of elements on the site. A style guide, like brand guidelines, should be carefully thought out to ensure that elements always look good on the page, regardless of other page content. This ensures that when new content is created, it will look good. This makes authoring new content extremely quick by allowing content creators to focus on creating content and avoid multiple rounds of review. See the [Style Guide entry in the Best Practices section](/Best-Practices#styleGuide) of this document.


<h3 id="viewMoreButton">View More Button</h3>
The View More Button pattern is a variation to the infinite scroll pattern. Rather than using scroll events to trigger the loading of additional results, a button is placed at the bottom of the product grid, that when clicked loads additional results. This pattern can have several advantages over the more standard infinite scroll pattern, as it ensures that customers always have access to the footer and can help users stay oriented on long pages. 

Using this "View More" pattern has an advantage over the Infinite Scroll pattern by allowing users to access the footer of the page and can help orient customers on the page.



###Viewport
The space on the screen on which the page is drawn. On desktops, this is determined by the width of the browser window. <span id="viewport"></span>For non-desktop devices, the width of the viewport is set at a default value and then the page is zoomed out so that it fits on the display.

<script type="text/javascript">

function reDraw(){
	viewportWidth  = document.documentElement.clientWidth;
	document.getElementById('viewport').innerHTML = "For example, the current width of the viewport on this device is " + viewportWidth + "px. ";
}

window.onload = reDraw;
window.onresize = reDraw;
</script>
