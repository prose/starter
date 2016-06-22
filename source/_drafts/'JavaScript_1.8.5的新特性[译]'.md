title: 'JavaScript 1.8.5的新特性[译]'
tags:
  - JavaScript
  - 特性
id: 1785
categories:
  - JavaScript
---

It’s a great time for JavaScript. Not only is it becoming a much more respected language, but it’s also growing in leaps and bounds – both in popularity and features. As more browsers begin to implement the features of the ECMAScript 5th edition standard, JavaScript becomes an even more powerful platform for you to develop on. In this tutorial, we’ll talk about the new methods that are available to you.

* * *

## What is ECMAScript 5?

ECMAScript is the official name of what we all call JavaScript. That doesn’t mean we’re wrong; it’s just that the name “JavaScript” is a trademark of Oracle; so Ecma International (originally the European Computer Manufacturers Association—hence ECMA) uses the term “ECMAScript” to refer to the standard of JavaScript. The latest version of this standard is the 5th edition, and it was approved just over a year ago (on December 3, 2009). It encompasses a huge range of great additions, and several of those are starting to show up in browsers. The implementations of ECMAScript 5 is called JavaScript 1.8.5.

In this tutorial, we’re going to be looking at the JavaScript 1.8.5 functions that are available to us in the Firefox 4 betas. You’ll be happy to discover that most of the latest versions of other browsers have these, too . . . except for one. This time, it’s Opera, as IE9 has included many of these.

* * *

## Function 1: Object.create

This method is a very important one; it really cleans up prototypal inheritance. Previously (in ECMAScript 3rd edition), to create an object and set its prototype, you’d do something like this:
<pre>function Cat(name) {
    this.name   = name;
    this.paws   = 4;
    this.hungry = false;
    this.eaten  = [];
}
Cat.prototype = {
    constructor : Cat,
    play        : function () { this.hungry = true; return "playing!"; },
    feed        : function (food) { this.eaten.push(food); this.hungry = false; },
    speak       : function () { return "Meow" }
};</pre>
Am I the only one who thinks it looks weird to have the prototype _outside_ the constructor function? And inheriting gets even messier. With `Object.create`, things get a lot easier. The above could be coded like this:
<pre>var dog = {
    name   : "dog",
    paws   : 4,
    hungry : false,
    eaten  : null,
    play        : function () { this.hungry = true; return "playing!"; },
    feed        : function (food) { if (!this.eaten) { this.eaten = []; } this.eaten.push(food); this.hungry = false; },
    speak       : function () { return "Woof!" }
};

var my_dog = Object.create(dog);</pre>
What’s going on here is this: I’m calling `object.create`, passing it an object to use as the prototype of the new object that `Object.create` is returning. When using `Object.create`, I don’t have to worry about defining the prototype separately. In fact, I have a lot more flexibility to decide how to go about creating and inheriting objects. For example, I can’t put the `eaten` array on the prototype, because an array is a reference value, so every object created from `dog` will share that array. I’ve decided to check for it before using it here, but if I wanted to wrap `Object.create(dog)` in a `make_dog` function, I could assign it there just as easily.

That’s what’s great about `Object.create`; you can choose how to do it.

There’s a second parameter that `Object.create` takes; it’s a properties descriptor object. It’s a bit complicated, but it’s also a part of the next function we’ll look at, so let’s check that out.

*   [MDN Documentation](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/create)
*   Browser Support

    *   Firefox 4
    *   Internet Explorer 9
    *   Safari 5
    *   Chrome 5+

* * *

## Function 2: Object.defineProperty

If you’ve got an object that you want to define a property on, you’ll probably do it this way:
<pre>my_dog.age = 2;</pre>
This still works fine in ES5, but if you want some more fine-grained control, you can have it with`Object.defineProperty`. The first parameter is the object you’re assigning the property on. The second parameter is the name of the property, as a string. The final property is the descriptor object. Here’s how that works. It’s (obviously) an object and it can have a combination of the following properties, all of which describe the property we’re adding:

*   **value**: use this to set the value of a property. Defaults to `undefined`.
*   **writable**: use this boolean to define whether this is a read-only variable. If it’s writable, it’s `true`. Defaults to `false`.
*   **configurable**: use this boolean to define whether the type (value vs. method) of this property can be changed, or whether the property can be deleted. If it’s configurable, it’s `true`. Defaults to `false`.
*   **enumerable**: use this boolean to define whether this property is included when the properties of the object are enumerated (a for-in loop or the keys method). Defaults to `false`.
*   **get**: use this to define a custom getter method. Defaults to `undefined`.
*   **set**: use this to define a custom setter method. Defaults to `undefined`.
Notice that the defaults for the boolean options above are the reverse of the old `obj.prop = val` standards. Also, know that you can’t define `value` or `writable` when `get` or `set` are defined, and vice versa.

So, how would you use this? Try this:
<pre>// assume my_dog from above

Object.defineProperty(my_dog, "age", {
    set : function (age) { this.human_years = age * 7; },
    get : function () { return this.human_years / 7; },
    enumerable : true
});

my_dog.age = 2;
my_dog.human_years; // 14</pre>
Apart from the fact that [dog years aren’t really 7 human years](http://www.dogyears.com/), you should notice that we didn’t set `value` or`writable` here, because we’re using `get` and `set`. These functions aren’t ever accessed directly. They are “magically” run behind the scenes when you assign or request a property. In this example, I’m using these functions to keep `age` and `human_years` in “sync.” If you don’t want the “other” value accessible, you could use a anonymous, self-invoking function to hide it with closure:
<pre>Object.defineProperty(my_dog, "age", (function () {
    var human_years;

    return {
        set : function (age) { human_years = age * 7; },
        get : function () { return human_years / 7; },
        enumerable : true
    };

}()));</pre>
Of course, there’s nothing to stop you from doing something stupid inside `get` or `set`, so use it wisely.

You can use a form of the property descriptor object to add properties to objects with `Object.create`. Do it as follows:
<pre>var your_dog = Object.create(dog, {
    age : {
        get : function () { /* . . . */ },
        set : function () { /* . . . */ },
        enumerable: true
    },
    gender : {
        value : "female"
    }
});</pre>
Just use the property name as a property of the descriptor object; then, set the attributes via an object in the value.

*   [MDN Documentation](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/defineProperty)
*   Browser Support

    *   Firefox 4
    *   Internet Explorer 9
    *   Safari 5
    *   Chrome 5+

* * *

## Function 3: Object.defineProperties

If you want to define several properties at once, you can use a property descriptors object just as with`Object.create` to define them, using `Object.defineProperties`.
<pre>Object.defineProperties(my_dog, {
    age : {
        get : function () { /* . . . */ },
        set : function () { /* . . . */ },
        enumerable: true
    },
    gender : {
        value : "female"
    }
});</pre>
You’ll want to note—for the rare case when you’re not using an object literal as the second parameter—that only the enumerable properties of the properties object will be used.

*   [MDN Documentation](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/defineProperties)
*   Browser Support

    *   Firefox 4
    *   Internet Explorer 9
    *   Safari 5
    *   Chrome 5+

* * *

## Function 4: Object.getOwnPropertyDescriptor

If you ever want to know the specifics of a property, you can use this function, `Object.getOwnPropertyDescriptor`. Take note of the “Own”; this only works with properties on the object itself, not up its prototype chain.
<pre>var person = { name : "Joe" };

Object.getOwnPropertyDescriptor(person, "name"); // { configurable : true, enumerable : true, value : "Joe", writable : true }</pre>
As you can see, this works with properties set in both the old and new way. `Object.getOwnPropertyDescriptor`takes two parameters: the object and the property name as a string.

*   [MDN Documentation](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
*   Browser Support

    *   Firefox 4
    *   Internet Explorer 8+
    *   Safari 5
    *   Chrome 5+

* * *

## Function 5: Object.keys

Ever wanted to get all the keys of an object? Now, you can do so easily with `Object.keys`. Pass this function an object, and it will return an array of all the enumerable properties of that object. You can also pass it an array, and you’ll get back an array of the indices.
<pre>var horse = { name : "Ed", age : 4, job : "jumping", owner : "Jim" };

var horse_keys = Object.keys(horse); // ["name", "age", "job", "owner"];</pre>

*   [MDN Documentation](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys)
*   Browser Support

    *   Firefox 4
    *   Internet Explorer 9
    *   Safari 5
    *   Chrome 5+

* * *

## Function 6: Object.getOwnPropertyNames

This one is just like `Object.keys`, except that it includes all the properties—even the ones that _aren’t_ enumerable. By the longer function name, you can tell they discourage the use of it. Usually, you’ll want `keys` instead.

*   [MDN Documentation](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
*   Browser Support

    *   Firefox 4
    *   Internet Explorer 9
    *   Safari 5
    *   Chrome 5+

* * *

## Function 7: Object.preventExtensions / Object.isExtensible

If you’ve ever wanted to create a function that doesn’t accept new parameters, you can do so now. Run your object through `Object.preventExtensions`, and it will decline all attempts to add new parameters. This function goes hand in hand with `Object.isExtensible`, which returns `true` if you can extend the object and `false` if you can’t.
<pre>    var product = { name : "Foobar", rating : 3.5 };

    Object.isExtensible(product); // true

    Object.preventExtentions(product);

    Object.isExtensible(product); // false

    product.price = "$10.00"; // doesn't work

    product.price; // undefined</pre>
You should note that all the properties on the object at the time you run `Object.preventExtensions` can still be changed or deleted (assuming their attributes allow that).

*   [MDN Documentation](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/preventExtensions)
*   Browser Support

    *   Firefox 4
    *   Internet Explorer 9
    *   Chrome 6+

* * *

## Function 8: Object.seal / Object.isSealed

Sealing an object is one step up from preventing extensions. A sealed object won’t let you add or delete properties, or change properties from a value (like a string) to an accessor (a method) or vice versa. You’ll still be able to read and write properties, of course. You can find out if an object is sealed by using `Object.isSealed`.
<pre>var pet = { name : "Browser", type : "dog" };

Object.seal(pet);

pet.name = "Oreo";

pet.age = 2; // doesn't work

pet.type = function () { /**/ }; // doesn't work

delete pet.name; // doesn't work</pre>

*   [MDN Documentation](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/seal)
*   Browser Support

    *   Firefox 4
    *   Internet Explorer 9
    *   Chrome 6+

* * *

## Function 9: Object.freeze / Object.isFrozen

Freezing it yet another step further. A frozen object can’t be changed in any way; it’s read-only. You can verify the frozenness of an object with, you guessed it, `Object.isFrozen`.
<pre>var obj = { greeting : "Hi!" };

Object.freeze(obj);

Object.isFrozen(obj); // true</pre>

*   [MDN Documentation](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/freeze)
*   Browser Support

    *   Firefox 4
    *   Internet Explorer 9
    *   Chrome 6+

* * *

## Function 10: Array.isArray

You’d think that it wouldn’t be too hard to determine that a given variable is an array. After all, everything else works fine with the `typeof` operator. However, JavaScript arrays are of inconsistent ilk. They’re actually closer array-like objects (even though we usually use that term to refer to things like `arguments` and `NodeList`s). This function gives you a way to be 100% sure that what you’re working with is an array. Pass it a variable, and it returns the boolean.
<pre>var names = ["Collis", "Cyan"];

Array.isArray(names); // true</pre>
For more on why we need this function, check out the docs, linked to below.

*   [MDN Documentation](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray)
*   Browser Support

    *   Firefox 4
    *   Internet Explorer 9
    *   Safari 5
    *   Chrome 5+
    *   Opera 10.5+

* * *

## Function 11: Date.prototype.toJSON

This isn’t too big, but if you ever want to store dates in JSON, you might find this useful. Date objects now have a `toJSON` function that will convert the date to a JSON string date.
<pre>new Date().toJSON(); // "2010-12-06T16:25:40.040Z"</pre>

*   [MDN Documentation](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toJSON)

* * *

## Function 12: Function.prototype.bind

You’re probably familiar with using `call` and `apply` to [reassign the value of `this` in a function](http://net.tutsplus.com/tutorials/javascript-ajax/quick-tip-calling-javascript-methods-on-other-objects/).
<pre>var arr1 = ["1", "2", "3"],
    arr2 = ["4", "5", "6"];

Array.prototype.push.apply(arr1, arr2);</pre>
These methods allow you to change the value of `this` within a function. If you want to do something like this often, `Function.prototype.bind` returns a new function with `this` bound to whatever you pass in, so you can save it to a variable.
<pre>var tooltip = { text: "Click here to . . . " },
    overlay = { text: "Please enter the number of attendees" };

function show_text () {
    // really, do something more useful here
    console.log(this.text);
}

tooltip.show = show_text.bind(tooltip);
tooltip.show();

overlay.show = show_text.bind(overlay);

overlay.show();</pre>
Of course, this might not be the most practical example, but it gives you the idea!

*   [MDN Documentation](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind)
*   Browser Support

    *   Firefox 4
    *   Internet Explorer 9
    *   Chrome 7+

* * *

## But Wait, There’s More …

Those are the ECMAScript 5th Edition (or JavaScript 1.8.5) functions that have been added to the Firefox 4 betas. There are a few other changes to JavaScript that they are implementing as well, which you can check out[in the release notes](https://developer.mozilla.org/en/JavaScript/New_in_JavaScript/1.8.5).

However, there are a bunch of ECMAScipt 5 functions that were already supported in Firefox 3, and several other browsers. Have you played with any of these?

*   [Object.getPrototypeOf](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
*   [String.prototype.trim](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/trim)
*   [Array.prototype.indexOf](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf)
*   [Array.prototype.lastIndexOf](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
*   [Array.prototype.every](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every)
*   [Array.prototype.some](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some)
*   [Array.prototype.forEach](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach)
*   [Array.prototype.map](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/map)
*   [Array.prototype.filter](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/filter)
*   [Array.prototype.reduce](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reduce)
*   [Array.prototype.reduceRight](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/ReduceRight)
<small>Note: these are linked to their MDN Documentation.</small>

If you want to see which browsers and versions support these functions, you can check out [this compatibility table, made by Juriy Zaytsev (Kangax)](http://kangax.github.com/es5-compat-table/). The nice thing about most of these functions is that if a browser doesn’t support it, you can usually add support, with something like this:
<pre>if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
// Courtesy of Douglas Crockford: http://javascript.crockford.com/prototypal.html</pre>

* * *

## What ECMAScript 5 Features are you Using?

The slew of new functions we’ve looked at here is really only a small part of the goodness added to the ECMAScript standard in the 5th edition. Are there any other features you’re specifically looking forward to using, or maybe even using right now? Let’s here it in the comments!

原文地址：http://feedproxy.google.com/~r/nettuts/~3/QmaGbRZTC4M/