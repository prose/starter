title: 为什么我们应该开始用CSS3和HTML5
tags:
  - css3
  - html5
  - IE6
id: 1796
categories:
  - HTML
date: 2010-12-13 21:04:05
---

前几天看了XJP兄的趣文[怎样在中国彻底消灭IE6](http://www.xjp.cc/2010-log/12/kill-ie6-in-china.html)，其中提出的几个方法确有其可行性，不过懂得推倒，更要思考重建；再结合[从国内 IE 6 的市场份额说开去](http://www.dbanotes.net/review/ie_6.html)，看来当下对IE6等旧技术的声讨已蔚然成风，即将取得阶“段性进展”。

停止对IE6的兼容和抛弃IE6 孰先孰后，这本身就是鸡蛋相生的悖论，打破这一僵局的最好方法就是任一方先付诸行动，而作为开发者，我们所能做的就是：停止IE6兼容页面的生产。

能保持IE6兼容的前端和敢于对IE6说NO的前端，哪个牛逼？看完本文也许能对你做出判断有所影响。

本文首先描述了IE6等过时的技术长期存在而阻碍新技术发展的现状；

然后分别从客户、访客、开发者的角度分析不同角色早CSS3和HTML5新技术普及中的作用；

进而分别从恐惧心理（Fear Factor）、满足现状（Comfortable Factor）、质疑心理（Doubt Factor）、信念不坚定（Faith<!--more--> Factor）、轻敌心态（“It’s Too Early” Factor）、标准未敲定（Validation Factor）几个因素探讨了阻碍人们深入HTML5等新技术的元凶。

最后的总结：为了解决一个现实的问题——使网页设计更加清楚和简单（ Plain and simple），我们必须行动起来，从今天开始使用CSS3和HTML5。

以下内容来自：http://www.smashingmagazine.com/2010/12/10/why-we-should-start-using-css3-and-html5-today

For a while now, here on Smashing Magazine, we have taken notice of how **many designers are reluctant to embrace the new technologies such as CSS3 or HTML5** because of the lack of full cross-browser support for these technologies. Many designers are complaining about the numerous ways how the lack of cross-browser compatibility is effectively holding us back and tying our hands — keeping us from completely being able to shine and show off the full scope of our abilities in our work. Many are holding on to the notion that once this push is made, we will wake to a whole new Web — full of exciting opportunities just waiting on the other side. So they wait for this day. When in reality, they are effectively waiting for Godot.

Just like the elusive character from Beckett’s classic play, this day of full cross-browser support is not ever truly going to find its dawn and deliver us this wonderful new Web where our work looks the same within the window of any and _every_ Web browser. Which means that many of us in the online reaches, from clients to designers to developers and on, are going to need to adjust our thinking so that we can realistically approach the Web as it is now, and more than likely how it will be in the future.

Sometimes it feels that we are hiding behind the lack of cross-browser compatibility to avoid learning new techniques that would actually dramatically improve our workflow. And that’s just wrong. Without an adjustment, we will continue to undersell the Web we have, and the landscape will remain unexcitingly stale and bound by this underestimation and mindset.

### Adjustment in Progress

Sorry if any bubbles are bursting here, but we have to wake up to the fact that full cross-browser support of new technologies is just not going to happen. Some users will still use older browsers and some users will still have browsers with deactivated JavaScript or images; some users will be having weird view port sizes and some will not have certain plugins installed.

But that’s OK, really.

The Web is a damn flexible medium, and rightly so. We should embrace its flexibility rather than trying to set boundaries for the available technologies in our mindset and in our designs. The earlier we start designing with the new technologies, the quicker their wide adoption will progress and the quicker we will get by the incompatibility caused by legacy browsers. More and more users are using more advanced browsers every single day, and by using new technologies, we actually encourage them to switch (if they can). Some users will not be able to upgrade, which is why our designs should have a basic fallback for older browsers, but it can’t be the reason to design only the fallback version and call it a night.

[![Selectivzr in Why We Should Start Using CSS3 and HTML5 Today](http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/12/selectivzr.jpg)](http://selectivizr.com/)

_[Select[ivizr]](http://selectivizr.com/) is one of the many tools that make it possible to use CSS3 today._

There are [so](http://www.smashingmagazine.com/2010/07/19/how-to-use-css3-media-queries-to-create-a-mobile-version-of-your-website/) [many](http://www.smashingmagazine.com/2010/06/17/start-using-css3-today-techniques-and-tutorials/) [remarkable](http://www.alistapart.com/articles/responsive-web-design/) [things](http://www.smashingmagazine.com/2010/10/11/local-storage-and-how-to-use-it/) that we, designers and developers, can do today: be it responsive designs with CSS3 media queries, rich Web typography (with full support today!) or HTML5 video and audio. And there are so many [useful](http://caniuse.com/) [tools](http://www.modernizr.com/) [and](http://selectivizr.com/) [resources](http://html5boilerplate.com/) that we can use right away to incorporate new technologies in our designs while still supporting older browsers. There is just no reason _not_ to use them.

We are the ones who can push the cross-browser support of these new technologies, encouraging and demanding the new features in future browsers. We have this power, and passing on it just because we don’t feel like there is no full support of them yet, should not be an option. We need to realize that we are the ones putting the wheels in motion and it’s up to us to decide what will be supported in the future browsers and what will not.

More exciting things [will be coming](http://opentype.info/blog/2010/08/14/better-web-typography-with-opentype-features/) [in the future](http://24ways.org/2010/my-css-wish-list). We should design for the future and we should design for today — making sure that our progressive designs work well in modern browsers and work fine in older browsers. The crucial mistake would be clinging to the past, trying to work with the old nasty hacks and workarounds that will become obsolete very soon.

We can continue to cling to this notion and wait for older browsers to become outdated, thereby selling ourselves and our potential short, or we can adjust our way of thinking about this and come at the Web from a whole new perspective. One where we understand the truth of the situation we are faced with. That our designs are not going to look the same in every browser and our code will not render the same in every browser. And that’s the bottom line.

[![Yaili-24ways in Why We Should Start Using CSS3 and HTML5 Today](http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/12/yaili-24ways.jpg)](http://24ways.org/2010/my-css-wish-list)

_Yaili’s beautiful piece [My CSS Wishlist on 24ways](http://24ways.org/2010/my-css-wish-list). Articles like these are the ones that push the boundaries of web design and encourage more innovation in the industry._

Andy Clarke spoke about this at the DIBI Conference earlier this year (you can check his presentation[Hardboiled Web Design on Vimeo](http://vimeo.com/17137962)). He really struck a nerve with his presentation, yet still we find so many stalling in this dream of complete Web standardization. So we wanted to address this issue here and keep this important idea being discussed and circulated. Because this waiting is not only hurting those of us working with the Web, but all of those who use the Web as well. Mainly through this plethora of untapped potential which could improve the overall experience across the spectrum for businesses, users and those with the skills to bring this sophisticated, rich, powerful new Web into existence.

#### For Our Clients

Now this will mean different things for different players in the game. For example, for our clients this means a much more developed and uniquely crafted design that is not bound by the boxes we have allowed our thinking to be contained in. However, this does come with a bit of a compromise that is expected on the parts of our clients as well. At least it does for this to work in the balanced and idealized way these things should play out. But this should be expected. Most change does not come without its compromises.

In this case, our clients have to accept the same truism that we do and concede that their projects will not look the same across various browsers. This is getting easier to convince them of in these times of the expanding mobile market, but they may still not be ready to concede this inch on the desktop side of the coin. Prices might be adjusted in some cases too, and that may be another area that the clients are not willing to accept. But with new doors being opened and more innovation, comes more time and dedicated efforts. These are a few of the implications for our clients, though the expanded innovation is where we should help them focus.

**In short:**

*   Conceding to the idea that the project will not be able to look the same across various browsers,
*   This means more developed and unfettered imaginative designs for our clients,
*   This could lead to increased costs for clients as well, but with higher levels of innovation and
*   Client’s visions for what they want will be less hindered by these limitations.

#### For the Users

The users are the ones who have the least amount invested in most of what is going on behind the scenes. They only see the end result, and they often do not think too much about the process that is involved which brings it to the screens before them. Again, with the mobile market, they have already come across the concept of varying interfaces throughout their varied devices. They only care about the functionality and most probably the style that appeals to them — but this is where their interest tends to end. Unless of course, they too are within the industry, and they may give it a second thought or more. So all this talk of cross-browser compatibility really doesn’t concern them, they really leave all that up to us to worry about.

Users only ever tend to notice anything if and when something does not work the way they expect it to from one place to the next. In most cases, they are willing to show something to a relative, friend or colleague, and suddenly from one device to the next, something is different that disrupts their ability to do so. That is when they actually take notice. But if we have done our jobs correctly, these transitions will remain smooth — even with the pushing of the envelopes that we are doing. So there is not much more that is going to change for the users other than a better experience. Average user is not going to check if a given site has the same rounded corners and drop-shadow in two different browsers installed on the user’s machine.

**In short:**

*   Potentially less disruptions of experience from one device to another and
*   An overall improved user experience.

#### For Designers/Developers

We, the designers and developers of the Web, too have to make the same concession our clients do and surrender the effort to craft the same exact presentation and experience across the vast spectrum of platforms and devices. This is not an easy idea to give up for a lot of those playing in these fields, but as has been already mentioned, we are allowing so much potential to be wasted. We could be taking the Web to new heights, but we allow ourselves to get hung up on who gets left behind in the process — and as a result we all end up getting left behind. Rather than viewing them as separate audiences and approaching them individually, so to speak, we allow the limitations of one group to limit us all.

[![Divide in Why We Should Start Using CSS3 and HTML5 Today](http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/11/divide.jpg)](http://www.flickr.com/photos/michaelsgalpert/5071561135/)

_Perhaps a divide and conquer mentality should be employed. [Image Credit](http://www.flickr.com/photos/michaelsgalpert/5071561135/)_

So this could mean a bit more thought for the desired follow through, and we are not suggesting that we strive to appease one group here and damn the rest. Instead, we should just take a unified approach, designing for those who can see and experience the latest, and another for those who cannot. It wouldn’t mean more work if we design with those users in mind and produce meaningful and clean code up front and then just adjust it for older browsers. Having to remember that not everyone is afforded the privilege of choosing which browser they are using. And if necessary, this approach can be charged for. So it could lead to more revenue along with exciting new opportunities — by bringing some of the fun back into the work that being boxed in with limitations has robbed us of.

**In short:**

*   Conceding to the idea that the project will not be able to look the same across various browsers,
*   A more open playing field for designers and developers all around; less restricted by this holding pattern,
*   More exciting and innovative landscape to attract new clientele,
*   Division of project audience into separate presentational approaches and
*   Probably less work involved because we don’t need the many hacks and workarounds we’ve used before.

### So What Are We Waiting For?

So if this new approach, or adjusted way of thinking can yield positive results across the browsers for everyone involved, then why are we still holding back? What is it that we are waiting for? Why not cast off these limitations thrown upon our fields and break out of these boxes? The next part of the discussion tries to suss out some of the contributing factors that could be responsible for keeping us restrained.

#### Fear Factor

[![Fail-Better in Why We Should Start Using CSS3 and HTML5 Today](http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/12/Fail-Better.jpg)](http://www.flickr.com/photos/prettyuglydesign/4673681658/)

_The fail awaits, and so some of us opt to stay back. Image by [Ben Didier](http://www.flickr.com/photos/prettyuglydesign/4673681658/)_

One contributing factor that has to be considered, is perhaps that we are being held back out of fear. This might be a fear of trying something new, now that we have gotten so comfortable waiting for that magic day of compatibility to come. This fear could also stem from not wanting to stand up to some particular clients and try to make them understand this truism of the Web and the concessions that need to be made — with regards to consistent presentation across the browsers. We get intimated, so to speak, into playing along with these unrealistic expectations, rather than trusting that we can make them see the truth of the situation. Whatever the cause is that drives this factor, we need to face our fears and move on.

It’s our responsibility of professionals to deliver high-quality work to our clients and advocate on and protect user’s interests. It’s our responsibility to confront clients when we have to, and we will have to do it at some point anyway, because 100% cross-browser compatibility is just not going to happen.

#### Comfortable Factor

A possible contributing factor that we should also look into is that some people in the community are just too comfortable with how we design today and are not willing to learn new technology. There are those of us who already tire of the extra work involved in the testing and coding to make everything work as it is, so we have little to no interest at all in an approach that seemingly calls for more thought and time. But really, if we start using new technologies today, we will have to master a learning curve first, but the advantages are certainly worth our efforts. We should see it as the challenge that will save us time and deliver better and cleaner code.

To some extent, today we are in the situation in which we were in the beginning of 2000s; at those times when the emergence and growing support of CSS in browsers made many developers question their approach to designing web sites with tables. If the majority of designers passed on CSS back then and if the whole design community didn’t push the Web standards forward, we probably still would be designing with tables.

#### Doubt Factor

Doubt is another thing we must consider when it comes to our being in hold mode, and this could be a major contributor to this issue. We begin to doubt ourselves and our ability to pull off this innovative, boundary pushing-kind-of-work, or to master these new techniques and specs, so we sink into the comfort of playing the waiting game and playing it safe with our designs and code. We just accept the limitations and quietly work around them, railing on against the various vendors and the W3C. We should take the new technologies as the challenge to conquer; we’ve learned HTML and CSS 2.1 and we can learn HTML5 and CSS3, too.

#### Faith Factor

[![I-want-to-believe in Why We Should Start Using CSS3 and HTML5 Today](http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/11/I-want-to-believe.jpg)](http://www.flickr.com/photos/fotologic/408096004/)

_Faith can be a good thing, but in this case, it can hold you back. Image by [fotologic](http://www.flickr.com/photos/fotologic/408096004/)_

Undoubtedly, some of us are holding off on moving forward into these new areas because we are faithfully clinging to the belief that the cross-browser support push will eventually happen. There are those saying that we will be better off as a community if we allowed the Web to evolve, and that this evolution should not be forced.

But this is not forcing evolution, it is just evolution. Just like with Darwin’s theory, the Web evolves in stages, it does not happen for the entire population at once. It is a gradual change over time. And that is what we should be allowing to happen with the Web, gradually using and implementing features for Web community here and there. This way forward progress is happening, and nobody should be held back from these evolutionary steps until we all can take them.

#### “It’s Too Early” Factor

Another possible contributor is the ever mocking “It’s too early” factor. Some members of the online community faithfully fear that if they go ahead and accept this new way forward and begin designing or developing in accordance, then as soon as they begin completing projects, the support might be dropped and they would need to update the projects they already completed in the past. It’s common to think that it’s just too early to work with new standards until they are fully implemented in many browsers; because it’s just not safe to assume that they will be implemented at all.

However, one needs to understand the difference between two groups of new features: the widely accepted ones (CSS3′s media queries, border-radius or drop-shadows or HTML5 canvas are not going to disappear) and the experimental ones (e.g. some [OpenType features are currently supported only in Firefox 4 Beta](http://opentype.info/blog/2010/08/14/better-web-typography-with-opentype-features/)). The widely accepted features are safe to use and they will not disappear for certain; the experimental features can always be extracted in a separate stylesheet and be easily updated and maintained when necessary. It might be a good idea not to use experimental, unsupported features in large corporate designs unless they are not affecting the critical design elements of the design.

#### Validation Factor

We cannot forget to mention that there are also many of us who are refusing to dabble in these new waters simply due to the fact that implementing some of these techniques or styles would cause a plethora of vendor-specific pefixes to appear in the stylesheet, thus impeding the validation we as professionals strive for.

Many of us would never put forth any project that does not fully validate with the W3C, and until these new specs are fully standardized and valid, we are unwilling to include them in their work. And because using CSS3 usually means using vendor-specific prefixes, we shouldn’t be using CSS3\. Right?

[![Validate in Why We Should Start Using CSS3 and HTML5 Today](http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/11/validate.jpg)](http://net.tutsplus.com/articles/general/but-it-doesnt-validate/)

_Jeffrey Way’s article [But It Doesn’t Validate](http://net.tutsplus.com/articles/general/but-it-doesnt-validate/)_

Well, not quite. As Jeffrey Way perfectly explains in his article [But it Doesn’t Validate](http://net.tutsplus.com/articles/general/but-it-doesnt-validate/), validation is not irrelevant, but the final score of the CSS validator might be. As Jeffrey says,
> “This score serves no higher purpose than to provide you with feedback. It neither contributes to accessibility, nor points out best-practices. In fact, the validator can be misleading, as it signals errors that aren’t errors, by any stretch of the imagination.
> 
> [...] Validation isn’t a game, and, while it might be fun to test your skills to determine how high you can get your score, always keep in mind: it doesn’t matter. And never, ever, ever compromise the use of the latest doctype, CSS3 techniques and selectors for the sake of validation.”
> 
> — Jeffrey Way, [But it Doesn’t Validate](http://net.tutsplus.com/articles/general/but-it-doesnt-validate/)
Having our work validate 100% is not always the best for the project. If we make sure that our code is clean and accessible, and that it validates without the CSS3/HTML5-properties, then we should take our work to the next level, meanwhile sacrificing part of the validation test results. We should not let this factor keep us back. If we have a chance for true innovation, then we shouldn’t allow ourselves to be restrained by unnecessary boundaries.

### All in All…

Whatever the factors that keep us from daring into these new CSS3 styles or new HTML5 coding techniques, just for a tangible example, need to be gotten over. Plain and simple. We need to move on and **start using CSS3 and HTML5 today**. The community will become a much more exciting and innovative playground, which in turn will improve experiences for as well as draw in more users to this dynamic new Web, which in turn will attract more clientele — effectively expanding the market. This is what could potentially be waiting on the other side of this fence that we are timidly facing — refusing to climb over it. Instead, waiting for a gate to be installed.

Until we get passed this limited way of looking at the situation, only then will we continue falling short of the full potential of ourselves and our field. Are there any areas that you would love to be venturing into, but you are not because of the lack of complete cross browser compatibility? Admittedly, I was a faith factor member of the community myself — how about you? And what CSS3 or HTML5 feature are you going to incorporate into your next design?

### Will You Use HTML5 / CSS3 In Your Next Design?