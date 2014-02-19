---
layout: post
title: "Common Pages and Modules"
tags: [appendix]
prettyTag: "Supplemental Materials"
---

<h3 id="home">Homepage</h3>
The {{site.client.name}} homepage should give users who have never been to the site before a strong impression of the brand, a sense of the Yankee Ingenuity and hearty New England spirit that {{site.client.name}} is born of. For users who have been to the site before, the homepage should confirm that they are on the correct site, advise them of any new developments, such as a sale or new collection, and facilitate finding what they're looking for. To accomplish this, the homepage should include:

- Large, expressive imagery
- Featured brand content
- Featured products or product lines


<h3 id="category">Category (Department) Page</h3>
The category or department pages should focus on a particular business segment (such as Women or Outdoor Gear). This page has two purposes.

1. To help customers to find the content or product they are looking for
2. To help customers learn more about the products or content offered by {{site.client.name}}.

To accomplish this, the category page should include:

- Large, expressive imagery
- Featured products or product lines - within the department or category
- Featured brand content - related to the department or category

<h3 id="subcat">Subcategory Page</h3>
The subcategoy page exists to show the breadth of product offered by {{site.client.name}}. The subcatgory page should feature products front and center in a compelling, uncluttered way. This page should include:

- **A product grid** - Used to display products in a given subcategory. Product images in the grid should be as large and detailed as possible, and any information necessary to differentiate that product from any other should be displayed.
- **Filters** - Used to narrow the results returned by the search. Filters should be clear and easy to use, with plenty of space between controls to help users to interact with the intended filter control
- **Related Content** - Helpful content may be in the product grid to help users to learn more about the brand or products.


<h3 id="SRP">Search Results Page</h3>
Similar to the subcategory page, the search results page display results for a search query. Search results pages typically include:

- **A product grid** - Used to display products that match the search term. This module may also contain content that is returned for the search term.
- **Filters** - Used to narrow the results returned by the search.


<h3 id="PDP">Product Detail Page</h3>
The goal of a product detail page is to help the customer to easily learn as much about a product as they want and to help them to decide if the product is right for them. To accomplish this, the following elements are typically included on a product detail page:

- **A product image** - A detailed image of the product
- **Configuration Controls** - Controls that allow the customer to specify the size or color of the item
- **Product description** - A written description of the product and any details about the product that may be pertinent, such as material, water resistance/proofing, or special care instructions
- **Related Content** - For brands like {{site.client.name}}, telling the product story is nearly as (and sometimes even more) important as the product description. Rich, branded content should be included on the product detail page to give users a clear sense of the brand and impress upon them the value of every {{site.client.name}} product.

###Cart Page
The cart page is used to display all of the items that the user is considering purchasing. Frequently, carts serve a similar function as a wishlist, where customers keep products they have not committed to purchasing yet. As such, products and product details should be prominently displayed on this page. Typically, the cart page consists of:

- **A product grid** - Displays all of the products the user has added to the cart. Unlike the product grid on the subcategory page, details like color, quantity, and size are displayed and, frequently, are editable.
- **Order Subtotal** - an informational box that shows the current item subtotal.
- **Checkout Button** - a Call to Action that begins the checkout process
- **Shipping Calculator** - A form that estimates the cost of shipping and shipping date based on the user's ZIP code.

###Shipping Page
A page where users specify shipping details, like destination address and shipping method. This page should be as free of extraneous elements as possible.

###Billing Page
A page where users specify billing details, like billing address and payment method. This page should be as free of extraneous elements as possible.

###Order Review Page
A page that allows the user to review the items they are set to purchase one last time before placing their order. Like the shipping and billing page, this page should be as free of extraneous elements as possible.

###Order Confirmation Page
A page that gives the user confirmation that their order has been placed. Because of the high satisfaction that users have with their {{site.client.name}} products, frequently users are extremely happy with their new purchase and want to share about their purchase to their friends. To support this behavior, make it easy for users to post to their various social networks directly from this page.

##Common Template Modules

###Header
This appears on every page on the site. Frequently, an abreviated form of the header that contains only the brand logo (linking back to the homepage) appears once the customer has entered the checkout flow

####Main Navigation
The main tool for browsing content on the site.

####Utility Navigation
The utility navigation is supplemental to the main navigation and typically includes links to the cart and account pages.

####Search Box
A form that allows the customer to search for products or content on the site.

###Footer
Appears at the bottom of every page of the site and contains links to additional resources for the user.

###Heros
Most frequently shown at the top of the home and category (department) pages, the hero is a branded image typically promoting a line of products. Typically, this module consists of:

- A background image
- A title
- A subtitle
- a call to action

Clicking or tapping on the call to aciton takes the user to the relevant page.

###Touts
Spaces that are used to display promotional content. Typically, this module consists of:

- A background image
- A title
- A subtitle
- A call to action

Clicking or tapping anywhere within the module takes the user to the relevant page.

###Merchandizing/Cross Sell
A space where products may be displayed. Typically, these are managed in one of two ways:

- **Manually** - An administrator sets the products that appear in the module as well as the order of those products. This method is typically preferred for merchandizing modules that appear on the [home](#home) or [category](#category) pages, where only a small number of modules must be determined.
- **Dynamically** - An automated system uses data to determine the products that appear in the module. This method is typically preferred for merchandizing modules that appear on the [Product Detail Page](#PDP), where a large number of modules must be maintained.

<h3 id="productGrid">Product Grid</h3>
Appears on [subcategory](#subcat) and [search results](#SRP) pages, product grids display a variety of product within the specified subcategory or returned for a given search term.

<h3 id="itemTile">Item Tile</h3>
Appears on [subcategory](#subcat) and [search results](#SRP) pages, as well as within Merchandizing modules, product tiles typically feature:

- An image of the product
- The product's name
- The price of the product

###Filters or Refinements
Used to limit the products shown to the user to only ones that posess a desired attribute. Appears on [subcategory](#subcat) and [search results](#SRP) pages. The product attributes that appear as filters are ideally determined by the products being filtered. If none of the products in the set posess a particular attribute, that attribute filter is not displayed.