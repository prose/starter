---
layout: post
title: "eCommerce Best Practices"
tags: [appendix]
prettyTag: "Supplemental Materials"
---

<style>
#process, #development, #ux, #design{
	color:#FFF;
	padding: 4rem 0;
	text-align: center;
	text-shadow:1px 1px 3px #111;
	margin: 2rem 0 1rem 0;
}

#process{
	background:url('{{ site.baseurl }}/img/best-practices/process.jpg');
	background-size: cover;
}

#development{
	background:url('{{ site.baseurl }}/img/best-practices/development.jpg');
	background-size: cover;
}

#ux{
	background:url('{{ site.baseurl }}/img/best-practices/ux.jpg');
	background-size: cover;
}

#design{
	background:url('{{ site.baseurl }}/img/best-practices/design.jpg');
	background-size: cover;
}

.source{
	font-size: 80%;
	font-style: italic;
}

</style>


Designing and developing in responsive design requires considerably more up-front planning, as well as improved asset management and workflow. Outlined below are Fluid’s recommendations for how to leverage best practices in Process, Development, User Experience and Design


<h2 id="process">Process</h2>

### Integrate Design and Development
The complexities of responsive design demand that for a project to be successful, designers, content creators, developers, and the business team work hand in hand from the inception of a project through its launch. The inefficiencies inherent to the waterfall process, while manageable on static width sites, almost always result in projects running over budget and time when working in responsive.

Enlisting a core team that will work on the project from start to finish can mitigate this. Issues with designs become evident much earlier in the project, preventing costly re-work down the line. Because each discipline is represented throughout the whole project, team members have a shared sense of ownership, reducing finger-pointing and blame; any issues that arise become the team's challenge to solve, rather than the designer's unaccounted edge case or a developer's misinterpretation of the documentation.

### Sketch. Build. Test. Repeat.
With the content, design, and development teams working simultaneously on the same project, any changes to the site can quickly be realized and tested. Because each team is involved from the start, each discipline is freed of having to create **perfect** documentation, and can instead focus all of their effort on the final product. Any holes in the documentation either doesn't need to be documented, as the development team already has a clear understanding of what is needed, or can easily be answered by talking to the designer.

This rapid "lean" approach has several implications. It allows designs to move much more quickly from a designer's inspiration to a state that can be tested and measured. Consequently, there's a much lower cost associated with making changes to a design, allowing project teams to rapidly develop and test multiple designs, and arrive at an optimal result sooner.


<h2 id="development">Development</h2>

### Separation of content and presentation
Responsive design is all about ensuring the best presentation of whatever content needs to be displayed. Implicit in this is that the presentation will change from device to device, while the content remains the same. To achieve this, the content must exist in an abstract form, free of any styling (the presentation).

### Performance budget
Performance budgets are tools that help ensure that pages always load quickly by putting a limit on things that negatively impact page load time. To create a performance budget, typically the team agrees on a maximum limit for the number of http requests for a page and the overall page weight (in kB). Any new features that the team wants to add must not cause the page to exceed either limit. If it does, one of three things must occur:

1. The page template is optimized to allow the inclusion of the feature without going over budget
2. Something else is removed from the page template
3. The new feature is not added

This ensures that pages always load quickly, regardless of the device.

### Load images through css
Images may be included on a page in two different ways. The first is by using the standard `<img>` tag. The second is to set an image for the background of a `<div>` element. Each method has it's advantages and disadvantages. Using `<img>` tags is a more robust solution, as they help ensure that even when something goes wrong on the client side, users will see the image.

However, using the `<div>` image background technique greatly simplifies the handling of responsive images by enabling media queries to control when images are downloaded. Using CSS rules like `display:none` or `visibility:hidden` on `<img>` tags merely hides the image on the front end; the client still downloads the image, impacting performance. When `display:none` or `visibility:hidden` are applied to divs with background images, the images aren't loaded unless the `<div>` is displayed. To control the display of images loaded as `<div>` backgrounds however, images will only be loaded for `<div>` elements that are displayed. This enables media queries to control when different images are loaded for different resolutions.


### Use font icons
Using font icons are recommended for adding iconography to your website.  They offer great scalability (look great on displays of any size) and are a faster way to download than equivalent raster images. In order to successfully use Font Icons on your site both Visual Design and Front End Development teams must be in close communication. Agreement on choice of Icon Font (using an existing one with proper licensing or creating a custom icon font) and examples of use, such as placement of icons in a given design element is critical. 


### Rely on CSS
In many places throughout the site, images are used when CSS rules could reliably create the same presentation. For example, the search bar uses two images, the field background and the search button, instead of using CSS rules to control the display. Using CSS will reduce page weight and 

### Lazy loading CSS and JS
Loading non-critical CSS and JS files via AJAX after initial load. To implement, load only the CSS and JS that are critical to render your page (core page style CSS, critical frameworks like JQuery and Pixel tags used for analytics). 

Then take any non-critical CSS and JS (typically third party code) This can then be "lazy loaded" essentially inserting the necessary JS and CSS into the body or the head of the HTML document after the initial load.  This often results in performance gain contributing to faster initial page load times without having to cut CSS and JS.  

Use a tool such as [webpagetest.org](http://webpagetest.org) to test performance times before and after. Test affected pages before and after in a variety of browsers to ensure performance of lazy loaded scripts are not adversely impacted.

### Reduce initial page load time with infinite scroll or view more button
Using [Infinite Scroll](/Appendix-Glossary#infiniteScroll) or [View More Button](/Appendix-Glossary#viewMoreButton) can provide faster page load time by loading a subset or "page-full" of results. This is especially useful on pages that may have a long list of items such as product list pages.

### Concatenate external files
Concatenating all of the javascript files needed for a page into one file will reduce the number of http requests made by the page, and can significantly improve page performance. Currently, the homepage makes 58 requests for javascript files and six requests for css files. While some files, like those supplied by external vendors, cannot be concatenated, many of these 64 files could be combined into just two: one css and one javascript file.



<h2 id="ux">User Experience</h2>

### Forms
<style>
	#address, #uncommon{
		margin:1rem 0;
		padding:1rem;
		border:1px solid #333;
		width: 100%;
	}

	#uncommon td{
		border: none;
	}

	.fieldLabel{
		text-align: right;
		font-weight: bold;
		padding-right: .5rem;
	}


	#address label, #address input, #address select{
		display:block;
		margin:.25rem;
	}

	#uncommon input, #address input{
		padding:.25rem;
		margin: .25rem;
		width: 16rem;
		max-width: 100%;
	}

	.optional{
		color:#888;
		font-size: 80%;
	}

</style>

While customers are now accustomed to entering in their personal information when making a purchase online, making that process as easy as possible supports conversion. While each form is different, the easiest forms typically:

1. Only include fields that are absolutely necessary. Every field included in a form discourages from completing the form, sometimes with costly results in terms of conversion.
2. Allow users to assume all fields are required unless clearly indicated otherwise. Optional fields should be the rare exception, and should be marked as such.
3. Avoid freeform input. Inputting text, especially on mobile, is tedious and error prone. If answers to a prompt is limited to a small set, use `type="radio"` (typically four or fewer options) or a `<select>` (five or more options) dropdown menu.
4. Use the `type` attribute to trigger the proper keyboard on devices that have multiple (soft) keyboards.
5. Use the length of each field to give a rough indication of the length of the expected input. A field that accepts only three characters should be shorter than a form that accepts 16.
6. Utilize client side validation to ensure that field values are valid. Typically, validation should occur on onBlur.
7. Use the `placeholder` attribute to pre-fill the field with sample input for the formfield (shown below).
8. Set the `tabindex` attribute so that pressing tab cycles through the form in the expected order.

In most cases, form labels should appear right aligned to the left of the form fields:
<table id="uncommon">
	<tr>
		<td class="fieldLabel">First Pet's Name</td>		<td><input placeholder="Felix" /></td>
	</tr>
	<tr>
		<td class="fieldLabel">City of Birth</td>				<td><input placeholder="New York" /></td>
	</tr>
	<tr>
		<td class="fieldLabel">Favorite Beverage</td>		<td><input placeholder="Coffee" /></td>
	</tr>
</table>

For forms the user is accustomed to filling out frequently (such as address forms and payment methods) form fields should be left aligned, with field labels above:
<form id="address">
	<label for="name">Name</label>
	<input placeholder="Johny Appleseed" id="name" />
	<label for="streetAddress">Street address</label>
	<input placeholder="123 Memory Ln" id="streetAddress" />
	<label for="streetAddress2">Street address 2 <span class="optional">(optional)</span></label>
	<input placeholder="8th Floor" id="streetAddress2" />
	<label for="city">City</label>
	<input placeholder="Freeport" id="city" />
	<label for="state">State</label>
	<select id="state">
		<option selected="selected">Select a State</option>
		<option value="AL">Alabama</option>
		<option value="AK">Alaska</option>
		<option value="AZ">Arizona</option>
		<option value="AR">Arkansas</option>
		<option value="CA">California</option>
		<option value="CO">Colorado</option>
		<option value="CT">Connecticut</option>
		<option value="DE">Delaware</option>
		<option value="DC">District Of Columbia</option>
		<option value="FL">Florida</option>
		<option value="GA">Georgia</option>
		<option value="HI">Hawaii</option>
		<option value="ID">Idaho</option>
		<option value="IL">Illinois</option>
		<option value="IN">Indiana</option>
		<option value="IA">Iowa</option>
		<option value="KS">Kansas</option>
		<option value="KY">Kentucky</option>
		<option value="LA">Louisiana</option>
		<option value="ME">Maine</option>
		<option value="MD">Maryland</option>
		<option value="MA">Massachusetts</option>
		<option value="MI">Michigan</option>
		<option value="MN">Minnesota</option>
		<option value="MS">Mississippi</option>
		<option value="MO">Missouri</option>
		<option value="MT">Montana</option>
		<option value="NE">Nebraska</option>
		<option value="NV">Nevada</option>
		<option value="NH">New Hampshire</option>
		<option value="NJ">New Jersey</option>
		<option value="NM">New Mexico</option>
		<option value="NY">New York</option>
		<option value="NC">North Carolina</option>
		<option value="ND">North Dakota</option>
		<option value="OH">Ohio</option>
		<option value="OK">Oklahoma</option>
		<option value="OR">Oregon</option>
		<option value="PA">Pennsylvania</option>
		<option value="RI">Rhode Island</option>
		<option value="SC">South Carolina</option>
		<option value="SD">South Dakota</option>
		<option value="TN">Tennessee</option>
		<option value="TX">Texas</option>
		<option value="UT">Utah</option>
		<option value="VT">Vermont</option>
		<option value="VA">Virginia</option>
		<option value="WA">Washington</option>
		<option value="WV">West Virginia</option>
		<option value="WI">Wisconsin</option>
		<option value="WY">Wyoming</option>
	</select>
	<label for="zip">ZIP Code</label>
	<input placeholder="04032" id="zip" style="width:5rem;" />

</form>

### Passwords
Humans are inherently bad at passwords. A good password is long and complicated. To encourage your customers to create a strong password, a password strength indicator should be shown that dynamically evaluates the password the customer has entered and displays the relative strength of that password. Additionally, tips for the creation of a strong password should be displayed, such as:

- At least eight characters long
- At least one number
- At least one upper and lower case letter
- At least one special character

Other than the length requirement, these should only be suggestions, not restrictions. Ultimately, it is up to the customer to determine how secure they want their password to be.

### Performance as a feature
While some design features (like using beautiful, on-brand imagery or copy with a strong voice) of a site are obvious, others, like performance, are less so. User's don't necessarily notice when a page takes a long time to load, but it can severly affect key metrics like conversion, site revenue, and bounce rates:

* Amazon found that for every 100ms decrease in page load time, revenue rose by 1% <a class="source" href="http://www.scribd.com/doc/4970486/Make-Data-Useful-by-Greg-Linden-Amazoncom">source</a>  
* Google found that a delay of only a *half second* in page load time resulted in a 20% drop in traffic <a class="source" href="http://glinden.blogspot.com/2006/11/marissa-mayer-at-web-20.html">source</a>  
* One in four people abandon a page if it takes more than four seconds to load <a class="source" href="http://bradfrostweb.com/blog/post/performance-as-design/">source</a>  

While performance may seem like the responsibility of the engineers, how the site is designed can have a far bigger impact on performance than optimizing code. Images are typically the largest contributor to page weight on a site, so reducing the number of images that have to be loaded can significantly impact load time. Using design elements that can be defined using CSS, rather than relying on images, frequently improves performance significantly.

<h3 id="progressiveEnhancement">Content First and Progressive Enhancement</h3>
Customers come to websites looking for content. This content might be images or text, or it could be the ability to purchase product. Whatever the content, it's what the user has come to see and it should be easy to access regardless of the device or connection speed. To ensure this, pages should be constructed in the most robust manner possible.

For devices that are more fully featured (high end phones, tablets, and computers) [Feature detection](/Appendix-Glossary#featureDetection) should be used to determine the display capabilities of the device and enable the enhancements that the device is capable of. As the capabilities of the device increases, the content is *progressively enhanced* with those features.

As an example, in the space below, an element in shown. Depending on the device you are viewing this from, this area may display:

- A looping video taken from the International Space Station
- An image taken from that video
- A blue area with the message "Sorry, this video is not available in your browser. Upgrading or [changing your browser](http://whatbrowser.org) may fix this problem."

<style>
#videoContainer{
	background:#00A7E8;
}

video{
	display: block; /* otherwise there's a weird margin at the bottom of the video */
	width:100%;
}
</style>

<div id="videoContainer">
	<video autoplay="true" loop="loop" muted="muted" volume="0" poster="{{ site.baseurl }}/img/best-practices/aurora.png">
		<source type="video/webm" src="{{ site.baseurl }}/video/Aurora_Borealis_Pass_over_the_United_States_at_Night.480p.webm">
		<source type="vidoe/ogv" src="{{ site.baseurl }}/video/Aurora_Borealis_Pass_over_the_United_States_at_Night.480p.ogv">
		<img src="{{ site.baseurl }}/img/best-practices/aurora.png" />
		Sorry, this video is not available in your browser. Upgrading or <a href="http://whatbrowser.org">changing your browser</a> may fix this problem.
{{ site.baseurl }}/video>
</div>
<a class="source" href="http://commons.wikimedia.org/wiki/File:Aurora_Borealis_Pass_over_the_United_States_at_Night.ogv">video source</a>

<h2 id="design">Design</h2>

### Integration of content and commerce
Selectively integrating content directly into the sales flow, rather than isolating it to the company history page, will remind existing customers of the worth of the products they're perusing and introduce new customers to the value of your merchandise.

Similarly, placing content (such as blog posts or customer generated photos) along side the products to which they are related will help communicate the value of the products to those customers.

<h3 id="styleGuide">Digital reference guide</h3>
Style guides can be thought of as a manual of [design patterns](/Appendix-Glossary#designPatterns) for your site. A style guide provides instructions on how to present every elements on the site. Developing a solid style guide takes time, but it ensures consistent presentation of elements on the site. Recently, [Starbucks](http://www.starbucks.com/static/reference/styleguide/) and [NPR](http://www.npr.org/about/images/press/NPRLogoGuidelines.pdf) both [open sourced](http://en.wikipedia.org/wiki/Open_source) their style guides in an effort to help advance the digital development. Starbucks' style guide in particular is an *excellent* guide to the types of information that should be included in a style guide. To create a style guide:

1. The visual design team, content creators, and the development teams work in concert to develop a design system for the visual treatment of every element on the site. Considerations should be made for how each element interacts with every other element.
2. An HTML and CSS version of the style guide is created. This ensures two things:
  * That each of the styles defined work as intended
  * Easy and speed of future development of content
3. Adhere to the style guide. Exceptions to the style guide should be rare and carefully considered. Ideally, rules are created to define when exceptions may be made.


### Modular Design
Separating content and styling from each other allows the same styling (be it a button, a modules, or a complete page template) to be reused across the site to display different content of a similar type. Because of the complexity of responsive design, repeatable patterns should be applied throughout the site to decrease the amount of time and effort asociated with making changes to the site. The homepage, for example could be comprised of the following reusable elements:

![Homepage]({{ site.baseurl }}/img/best-practices/homepage.png)

Using modular design will *significantly* reduce the effort associated with making any change to the site. See [Atomic Design](/Appendix-Glossary#atomicDesign) within the glossary for more information.


### HTML templates
Use HTML Templates for web pages and emails that change periodically. This cuts down on wasteful "reinventing the wheel" development practices by encouraging reuse of existing HTML code and design elements. 

To arrive at the initial number of HTML layouts, determine how often a given page will need a new layout over 1-2 years.  Identify layouts that have worked well in the past including any modules and patterns that occur within them. Content and modules within the layouts can be modified to create new templates. This exercise should yield a number of reusable HTML templates that can be added to and updated as needed.
