---
path: "/everything-is-new-in-web-typography.html"
date: "2018-10-21T10:40:00+02:00"  
title: "Everything (and nothing much) has changed in web typography"
description: "How to start using variable fonts in web development today"
thumbnail: ""
tags: ["type", "design", "web development", "hot-tips"]
publish: false
---

When you make a website, it's important to consider the weight of everything you include: images, CSS & JS, and fonts. If you are overloading your website with too many bytes of data, it will be a slow, frustrating experience for visitors – especially for anyone on a mobile connection, who may be paying for only a limited amount of data per month.

This leads most websites to limit the amount of fonts used to display information. Typographic flair is nice, but developers have to make tradeoffs between visual experience and performance. As a result, the vast majority of sites use as few type styles as possible. But what if sites could use 5, 10, or potentially _hundreds_ of font styles, all without exceeding the download size of 2 or 3 fonts? What new design possibities might be opened up on the web?

_Variable fonts_ aim to do just that: they pack a range of font styles into single font files, allowing more developers more typographic nuance without breaking their performance budget.

It's easy for articles and talks about variable fonts to over-hype the technology and to over-use flashy, animated examples. This is because most people presenting variable fonts are genuinely excited about them, but it can also lead to unproductive conversations. Variable fonts are an emerging technology, so not every question about them has been resolved yet. Yes, they will open some very cool possibilities in design. However, as the tech matures and gains support, variable fonts will mostly just start quietly replacing the web fonts that exist today, making websites load a little bit faster. As a web developer, you won't have to do anything different to get the main benefits of variable fonts in the long run. Still, there are lots of opportunities right now to dig in and make your designs a little (or a lot) better than before.

## What are variable fonts?

As most designers and developers are used to think of type families, they are collections of several (or many) fonts in related but different styles. A simple example is Times New Roman. On my macOS computer, this typeface includes:

* Times New Roman (Regular)
* Times New Roman Bold
* Times New Roman Italic
* Times New Roman Bold Italic

These fonts are non-flexible instances of the overall typeface, kept in separate font files. If you are setting the font style of a piece of text in Times New Roman, you can set it as Regular, Bold, Italic, or Bold Italic. To type designers, these types of individual styles are called "static instances."

By contrast, variable fonts have adjustable styles, and variable font files include several (or many) styles all within a single file. In use, these styles can be used just like static instances are used today (via CSS declarations in web browsers or drop-down menus in desktop software). However, in variable fonts, it is also possible to specify exact, in-between variations of styles – or even fluidly shift between styles.

[mutator sans gif?]

One useful thing to know in thinking about variable fonts is the concept of a stylistic _axis_. In the example above, the x-axis is labeled as "width" while the y-axis is labeled as "weight." Type designers think about typefaces as systems which have variations along these sorts of axes. A type axis doesn't just need to be weight or width – it can be anything that can be progressively shifted about the outlines of letters. Other common typographic axes are:

* **Optical Sizing** is how font outlines are adjusted to be most readable and look their best at a given size, large or small. In fonts where letters have a lot of contrast between thick and thin strokes (as is the case in most serif fonts, like Times New Roman), optical sizing tends to mean that thin strokes get relatively thicker for smaller sizes (like captions) to stay visible, while they get relatively thinner for larger sizes to maintain the feeling of drama in the design. Other things may change in optical sizing too, such as the amount spacing between letters, the depth of inner corners at the joints of strokes, and even the relative sizing of uppercase and lowercase letters.
* **Slant** is almost self-explanatory: it's the amount that letters are slanted in oblique fonts. Oblique fonts are similar to italic fonts, but "true" italic fonts often change the form and shape of many letters beyond just sloping them – most noticeably, the "a" and "g" will change into simpler, more-handwritten shapes. Oblique fonts are sometimes called "sloped romans," because they keep the upright form of letters, and simply put them at a slope. What may not be obvious about oblique and italic fonts is that type designers don't just run a mathematical skew transformation and call it a day. Skewing letters mathematically causes all sorts of distortions – for example, an "o" with monolinear strokes will become pinched and overly-pointy. The process often starts with a simple skew, but then the distortions are carefully corrected.
* **Italic** is like the slant axis, but because italic fonts change the form of many letters, this axis tends to be a 0–1, on-or-off axis. Depending on the font, it may not make sense to include an italic axis, because for many, it might mean a large increase in font size. More on this later.

There are currently just five "registered" font axes (weight, width, optical size, slant, and italic), but axes can also be creative and totally new. If you want to see lots of creative, entertaining typographic axes, check out [v-fonts.com](https://v-fonts.com), a collection of all the variable fonts currently available – including fonts with axes like [Serifs](https://v-fonts.com/fonts/foreday), [Distortion](https://v-fonts.com/fonts/tweak-display), and [Temperature, Yeast, & Gravity](https://v-fonts.com/fonts/cheee-variable).

An important note: not all variable fonts support every axis, because the design complexity of supporting just a couple is very high, and because each additional axis does increase the weight of resulting font files. So, just like before, designers will need to select the right typeface for each project.

## Why do variable fonts matter?

As the intro of this article indicates, one of the primary things driving the development of adoption of variable font technology is web performance. Websites with even a modest range of typographic expression need 3 or 4 separate font files. The typical blog needs Regular and Italic styles for text, plus Bold and maybe Bold Italic for headlines. Using variable fonts, the same blog could serve just one (or two, depending on the typeface) font files. That makes for better font compression and fewer HTTP requests.

However, the primary thing about variable fonts that is most exciting to many designers is the chance to make and use fonts in totally new ways. Whereas today many websites constrain their typography to reduce the amount of fonts served, web developers could begin to use many more font styles without having to worry about serving more data. Because of how variable fonts are built, a website would use as much data to serve Regular and Bold styles as they would for a Light, Regular, Medium, Bold, and Heavy styles. The website might even throw in additional styles, such as width, optical sizing, or slant, all without having to serve much more data. Some of this could allow more useful nuance in typography, and some of this verges into wacky, fun possibilities:

* Headlines could adjust width to keep a large point size on small screens without causing wordbreaks or overflow by becoming narrower for narrower viewports.
* A table or graph of values could use many different font weights to quickly emphasize relative value – bigger values could use bolder text, and smaller values could use lighter text.
* A small image title could adjust its optical size to gracefully scale into the headline of a clicked news story.
* An inline link could adjust its weight and slant to become bold italic when a user hovers on it, without any text reflowing (depending on the font used – many fonts change widths for bold and italic variations, but some don't).
* A racing game's heads-up display could use a slanting and backslanting font to "lean in" to the curves of a race course.

A caveat: it is currently fairly processor-intensive for web browsers to animate between variable font styles. So, examples of variable fonts used in animations aren't things that can be safely used on most websites today. Hopefully, this will change in the future as web browsers get smarter about how they shift between styles in variable fonts.

## Where can you use variable fonts today?

## How can you use variable fonts?

Support varies for different features of variable fonts, and some of the ways type designers tend to think about variable fonts is somewhat different from the way they are currently being implemented in web browsers.

Namely, because variable fonts are taking the place of static font instances, there is a lot of care being put into the design of "named instances" – the preset combinations of the axes in a variable font.

**font-weight**

**font-stretch**

Not yet implemented in iOS Safari

https://caniuse.com/#feat=css-font-stretch

**font-optical-sizing**

**font-style**

* ital
  * Controlled by `font-style: italic;`
  * A 0-1, false/true value
* slnt
  * Controlled by `font-style: oblique 12deg;`
  * Even though `font-style: oblique;` is well-supported, this doesn't currently set the `slnt` axis of variable fonts. In fact, it only has an effect in Firefox, where it merely skews fonts, even if they do have a `slnt` axis.
  * TODO: test in more browsers if you are claiming something like this

## What's the browser support like?

## What are the issues to look out for?

## More reading:

* CSS Tricks article
* DJR's article on font sizing
* v-fonts
* OHno type co article on variable fonts (AGIA logo)
