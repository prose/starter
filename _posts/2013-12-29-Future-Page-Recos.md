---
layout: post
title: "Improving Page Performance"
tags: [futureState]
prettyTag: "Looking Ahead"
---

### Fluid Recommends:  
* Make fewer HTTP Requests by using the following techniques:
  * Make JavaScript and CSS external files (not inline).
  * Minify JavaScript and CSS (only those that are critical to initial page load).
  * Lazy Load JavaScripts and CSS (asynchronously load files that are "not critical" to initial page load) to prevent resources from "blocking" load.
* Use a CDN for hosting static assets (CSS, JS libraries and images).
* Leverage browser caching
  * Setting an expiry date or a maximum age in the HTTP headers for static resources instructs the browser to load previously downloaded resources from local disk rather than over the network.
