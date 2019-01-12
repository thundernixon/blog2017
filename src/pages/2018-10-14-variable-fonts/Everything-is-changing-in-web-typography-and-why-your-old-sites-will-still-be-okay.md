---
path: "/everything-is-new-in-web-typography.html"
date: "2018-10-21T10:40:00+02:00"  
title: "Everything (and nothing much) has changed in web typography"
description: "How to start using variable fonts in web development today"
thumbnail: ""
tags: ["type", "design", "web development", "hot-tips"]
publish: false
---

# Everything is changing in web typography (and why your old sites will still be okay)
When you make a website, it's important to consider the data weight of everything you include: images, videos, CSS & JS, analytics trackers, and fonts. If you overload a site with too many bytes of data, it will be a slow, frustrating experience for visitors – especially for anyone on a mobile connection, who may have a slow connection, and might also be paying for only a limited amount of data per month.

Among other strategies to shed page weight, this pressure leads most websites to limit the amount of fonts used to display information. Typographic flair is nice, but each font is another file for users to download, and developers have to make tradeoffs between visual experience and overall performance. As a result, the most sites use as few type styles as possible. But what if sites could use five, ten, or potentially *hundreds* of font styles, all without exceeding the download size of two or three fonts? What new design possibilities might be opened up on the web?

*Variable fonts* pack a range of font styles into single font files, allowing developers vastly more typographic range and nuance – without breaking their performance budget. They do this by built in a different way than traditional, *static* fonts. Whereas static fonts have separate files for each style, each with separate outlines for glyphs, variable fonts have one file with one set of outlines, plus information on how these outlines morph in response to different stylistic variables. The most common type of variable font will be a font with Regular to Bold *master* styles, plus all possible interpolated *instances* in-between. If this doesn’t make sense yet, don’t worry – I’ll explain in more depth soon.


[ ] create gif or image

It's easy for articles and lectures about variable fonts to over-hype the technology or to over-use flashy, animated examples. This is because most people presenting variable fonts are genuinely excited about them and want to spread the word, but it can also lead to unproductive conversations. 

Variable fonts are an emerging technology, so not every question about them has been resolved yet. Yes, they will open some very cool possibilities in design. However, as they mature and gain support from browser and OS makers, variable fonts will mostly just start quietly replacing the web fonts that exist today, showing up with the same import code and CSS properties you’re already using to call static fonts today. This will cut down data transfers to make websites load faster, without you have to learn about more CSS properties or seek out new font files.

As a web developer, you won't have to do anything new to get the data-saving benefits of variable fonts. Of course, you could still be building all your web pages with table layout and only a few “web safe” system fonts, but you’ve probably pushed yourself to learn some of the great new layout features on the web like Flexbox and CSS Grid, and you’ve probably experienced the joys of loading custom fonts to unlock totally different typographic voices. If so, buckle up, because you’re about to get some very cool new possibilities with variable fonts.


## What are variable fonts?

As most designers and developers are used to thinking of type families, they are collections of several (or many) fonts in related but different styles. A simple example is Times New Roman. On my macOS computer, this typeface includes:


- Times New Roman (Regular)
- Times New Roman Bold
- Times New Roman Italic
- Times New Roman Bold Italic

These fonts are non-flexible instances of the overall typeface, kept in separate font files. If you are setting the font style of a piece of text in Times New Roman, you can set it as Regular, Bold, Italic, or Bold Italic. To type designers, these types of individual styles are called "static instances."
By contrast, variable fonts have adjustable styles, and variable font files include several (or many) styles all within a single file. In use, these styles can be used just like static instances are used today (via CSS declarations in web browsers or drop-down menus in desktop software). However, in variable fonts, it is also possible to specify exact, in-between variations of styles – or even fluidly shift between styles.


[ ] maybe use a mutator sans or source sans gif?

One useful thing to know in thinking about variable fonts is the concept of a stylistic *_axis_*. In the example above, the x-axis is labeled as "width" while the y-axis is labeled as "weight." Type designers think about typefaces as systems which have variations along these sorts of axes. A type axis doesn't just need to be weight or width – it can be anything that can be progressively shifted about the outlines of letters. Other common typographic axes are:


- **Optical Sizing** is how font outlines are adjusted to be most readable and look their best at a given size, large or small. In fonts where letters have a lot of contrast between thick and thin strokes (as is the case in most serif fonts, like Times New Roman), optical sizing tends to mean that thin strokes get relatively thicker for smaller sizes (like captions) to stay visible, while they get relatively thinner for larger sizes to maintain the feeling of drama in the design. Other things may change in optical sizing too, such as the amount spacing between letters, the depth of inner corners at the joints of strokes, and even the relative sizing of uppercase and lowercase letters.
- **Slant** is almost self-explanatory: it's the amount that letters are slanted in oblique fonts. Oblique fonts are similar to italic fonts, but "true" italic fonts often change the form and shape of many letters beyond just sloping them – most noticeably, the "a" and "g" will change into simpler, more-handwritten shapes. Oblique fonts are sometimes called "sloped romans," because they keep the upright form of letters, and simply put them at a slope. What may not be obvious about oblique and italic fonts is that type designers don't just run a mathematical skew transformation and call it a day. Skewing letters mathematically causes all sorts of distortions – for example, an "o" with monolinear strokes will become pinched and overly-pointy. The process often starts with a simple skew, but then the distortions are carefully corrected.
- **Italic** is like the slant axis, but because italic fonts change the form of many letters, this axis tends to be a 0–1, on-or-off axis. Depending on the font, it may not make sense to include an italic axis, because for many, it might mean a large increase in font size. More on this later.

There are currently just five "registered" font axes (weight, width, optical size, slant, and italic), but axes can also be creative and totally new. If you want to see lots of creative, entertaining typographic axes, check out [v-fonts.com](https://v-fonts.com), a collection of all the variable fonts currently available – including fonts with axes like [Serifs](https://v-fonts.com/fonts/foreday), [Distortion](https://v-fonts.com/fonts/tweak-display), and [Temperature, Yeast, & Gravity](https://v-fonts.com/fonts/cheee-variable).

An important note: not all variable fonts support every axis, because the design complexity of supporting just a couple is very high, and because each additional axis does increase the weight of resulting font files. So, just like before, designers will need to select the right typeface for each project.


## Why do variable fonts matter?

As the intro of this article indicates, one of the primary things driving the development of adoption of variable font technology is web performance. Websites with even a modest range of typographic expression need 3 or 4 separate font files. The typical blog needs Regular and Italic styles for text, plus Bold and maybe Bold Italic for headlines. Using variable fonts, the same blog could serve just one (or two, depending on the typeface) font files. That makes for better font compression and fewer HTTP requests.

However, the primary thing about variable fonts that is most exciting to many designers is the chance to make and use fonts in totally new ways. Whereas today many websites constrain their typography to reduce the amount of fonts served, web developers could begin to use many more font styles without having to worry about serving more data. Because of how variable fonts are built, a website would use as much data to serve Regular and Bold styles as they would for a Light, Regular, Medium, Bold, and Heavy styles. The website might even throw in additional styles, such as width, optical sizing, or slant, all without having to serve much more data. Some of this could allow more useful nuance in typography, and some of this verges into wacky, fun possibilities:


- Headlines could adjust width to keep a large point size on small screens without causing wordbreaks or overflow by becoming narrower for narrower viewports.
- A table or graph of values could use many different font weights to quickly emphasize relative value – bigger values could use bolder text, and smaller values could use lighter text.
- A small image title could adjust its optical size to gracefully scale into the headline of a clicked news story.
- An inline link could adjust its weight and slant to become bold italic when a user hovers on it, without any text reflowing (depending on the font used – many fonts change widths for bold and italic variations, but some don't).
- A racing game could use a slanting and backslanting (sort of like a reverse-italic) font in the user’s heads-up display font to "lean in" to the curves of a race course.

A current limitation: it is currently fairly processor-intensive for web browsers to animate between variable font styles. So, examples of variable fonts used in animations aren't things that can be safely used on most websites today. Hopefully, this will change in the future as web browsers get smarter about how they shift between styles in variable fonts.


## Handling variable fonts in CSS

The [CSS Fonts Module Level 4 Spec](https://drafts.csswg.org/css-fonts-4/#introduction) is a great resource to see how the CSS consortium is specifying how fonts will work on the web. It’s a dense document, however, but there are a few highlights to know in terms of variable fonts.

Support varies for different features of variable fonts, and some of the ways type designers tend to think about variable fonts is somewhat different from the way they are currently being implemented in web browsers.

Because variable fonts are taking the place of static font instances, there is still a lot of care being put into the design of "named instances" – the preset combinations of the axes in a variable font. This is very useful in desktop software, where users expect to access different font styles from a drop-down menu. There is a [draft spec](https://drafts.csswg.org/css-fonts-4/#font-rend-desc) for calling named instances in CSS, but the [strongly-recommended](https://drafts.csswg.org/css-fonts-4/#font-variation-settings-def) way of specifying font styles instances is with existing CSS properties: 
  

> When possible, authors should generally use the other properties related to font variations (such as `font-optical-sizing`) whenever possible and only use this property for special cases where its use is the only way of accessing a particular infrequently used font variation.

**Weight**
Setting font weight is something you’re probably already familiar with in CSS, and variable fonts are being specifically made to match existing expectations. Like standard fonts today, `font-weight:400;` will call the regular weight and `font-weight:700;` will call the bold weight. The total weight range is [100–900, from “Thin" to “Black.”](https://drafts.csswg.org/css-fonts-4/#font-weight-prop)

**Width**
After font weights, widths will be the next font axis to gain widespread support. This axis will be called by the `[font-stretch](https://drafts.csswg.org/css-fonts-4/#font-stretch-prop)`  property. Normal width will be set as `font-stretch: 100%;`, with narrower widths set down to `50%` and the widest widths going up to `200%`. 

Not yet implemented in iOS Safari
https://caniuse.com/#feat=css-font-stretch

**Optical Size**
Optical sizing will be set via `font-optical-sizing`, with the only two values being `auto`, where the browser automatically sets the optical size based on factors like font size and screen pixel density, and `none`, where the optical size won’t adjust. 

**Slant & Italic**

- slnt
  - Controlled by `font-style: oblique 12deg;`
  - Even though `font-style: oblique;` is well-supported, this doesn't currently set the `slnt` axis of variable fonts. In fact, it only has an effect in Firefox, where it merely skews fonts, even if they do have a `slnt` axis.
    [ ] To do: test in more browsers if you are claiming something like this


- ital
  - Controlled by `font-style: italic;`
  - A 0-1, false/true value

  

## What about uncommon font axes?

To control any variable font axes, you can also use the “low-level” control, `font-variation-settings`. This will set any set of axes, and operates by setting the specific value of each axis called.

As an example, say you want to set type at 745 weight, 14px optical size, and also use a custom axis like Distortion. Each of these has a “tag” you can call, so you could set this like:


    font-variation-settings: 
      'wght' 745, /* Weight */
      'opsz' 14,  /* Optical Size*/
      'DSTN' 850  /* Distortion (Custom axes are tagged in all-caps) */
      ; 

  
Custom axes have their own tags which must be set in all-caps and are supposed to be spelled without vowels.  Because different custom axes have different logical bases, you can only be sure of the value range by learning it from the font creator, or by dropping the font file into a tool like [Wakamai Fondue](https://wakamaifondue.com/) (which is a useful tool for non-variable fonts, too, answering the question “What can my font do?” with useful details and CSS snippets.


# Using variable fonts today


## Using font weight

In his excellent article [*How to use variable fonts in the real world*](https://medium.com/clear-left-thinking/how-to-use-variable-fonts-in-the-real-world-e6d73065a604), Richard Rutter explains in detail how his studio, Clearleft, used a variable font to build a conference website. He has some really valuable insights in there, including specifying how to call in variable fonts with fallback static font instances. In short: you call font styles like you would have before, but in each `@font-face` rule, you include a `src` call to the variable version with `format('woff2-variations')` specified.


    @font-face {
      font-family: 'SourceSans';
      src: url('source-sans-variable.woff2') format('woff2-variations'), /* var font*/
           url('source-sans-regular.woff2') format('woff2'); /* static fallback*/
      font-weight: 400; 
    }
    @font-face {
      font-family: 'SourceSans';
      src: url('source-sans-variable.woff2') format('woff2-variations'), /* var font*/
           url('source-sans-black.woff2') format('woff2'); /* static fallback*/
      font-weight: 900; 
    }

When variable fonts have nearly-full browser support in the future, it will be possible to achieve a similar result with just one `@font-face` rule, and no fallbacks, so long as the `font-weight` property is given a min and max value:


    @font-face {
      font-family: 'SourceSans';
      src: url('source-sans-variable.woff2') format('woff2-variations'); /* var font*/
      font-weight: 100 900; 
    }



[ ] find if this is the case to register other font axes
## Cool & useful technique: use CSS Custom Properties to better control and cascade styles with `**font-variation-settings**`

Because it’s the early days of variable fonts, `font-variation-settings` is one of the easiest ways of controlling variable fonts. This will change in the future, but for now, it’s useful to know if you’re working with variable fonts.

This method can be a bit frustrating at times, because it disrupts the “cascade” of properties that elements usually get from CSS. To make this method less rigid to work with, it’s very useful to know this one-weird-trick with CSS Custom Properties.

In normal usage, `font-variation-settings` specifies all the styles for an element. If an axis is available and *not* set, it will use its default setting (most often, whatever is the middle or lowest value on an axis, depending how a font is built). If you’ve ever found that you can’t apply two separate or cascasding `transform` properties to an element, the problem is similar. 


[ ] **embed from codepen** https://codepen.io/thundernixon/pen/MPdwZL?editors=1100

**A drawback worth knowing:** setting axes this way isn’t “semantic,” so the browser doesn’t know what styles to use for fallback fonts. Depending on your use case, this may or may not be critical. If you *do* use this approach, you should probably try to also specify similar font styles with the usual CSS.


## The good news: variable font support is getting better and better!

A tricky thing about using variable fonts so far has been that support for them is still growing and still has a few bumps. There are complicated rendering issues for software makers and OS vendors to solve before things work perfectly, because variable fonts use different rules than static fonts. Some of the most noticeable issues have stemmed from variable fonts having overlapped shapes in some letters, rather than combining all paths in each glyph, as static fonts traditionally have.

One troubling issue was that, in different web browsers on macOS, the overlapping shapes in letters would render with little “hairlines” of missing fill color. This didn’t always happen, but it was pretty distracting when it did. I eventually found a hack around this, applying the CSS `text-shadow: 0 0;` to text to give it a shadow with zero distance and blur, plus a matching shadow to match font color. Here’s my original post on it: [https://twitter.com/ThunderNixon/status/1009878237068001280](https://twitter.com/ThunderNixon/status/1009878237068001280)

Luckily, since then, this rendering issue has been fixed by an update to macOS. So, variable fonts are now a big step closer to rendering as intended!


## What's the browser support like?

Not all browsers support variable fonts yet, but the relative usage of support in browsers is growing quickly. Basic browser support stats don’t give the full picture, because it doesn’t include all of the nuances of font rendering and CSS control for variable fonts. Still, it helps to show that variable fonts are quickly coming into the mainstream!


![https://caniuse.com/#feat=variable-fonts](https://d2mxuefqeaa7sj.cloudfront.net/s_7440201BD878CF51D26A644CE00DD48C90C17818F407ED103020F735B246B06D_1541802239581_image.png)



## How to start building with variable fonts, today

You can snoop around on Codepen and fork a demo (or even copy in the import code). Here are a few of my favorites:

- [Grassy Text with Variable fonts, by Mandy Michael](https://codepen.io/mandymichael/pen/YYaWop)
- [Variable fonts simple demo, by Mandy Michael](https://codepen.io/mandymichael/pen/dJjobp)
- [Variable font "gravity" scroll using Chee, by Mandy Michael](https://codepen.io/mandymichael/pen/LJeZBO)
- [FF Meta Variable Font Demo, by Jason Jason Pamental](https://codepen.io/jpamental/pen/MGEPEL)
- [Animating variable font headlines using IntersectionObserver, by MSEdgeDev](https://codepen.io/MSEdgeDev/pen/mxeOGW)
- [Using a variable font with fallback fonts, by Oliver](https://codepen.io/glyphe/pen/XxZzYV)

You can download an open-source variable font file, then use this on a service like [Codepen Projects](https://codepen.io/projects/) or [CodeSandbox](https://codesandbox.io). 

- [Source Sans](https://github.com/adobe-fonts/source-sans-pro/releases)
- [Mutator Sans](https://github.com/LettError/mutatorSans)
- [InterUI](https://github.com/rsms/inter/releases)
- [Amstelvar Alpha](https://github.com/TypeNetwork/Amstelvar/releases)
- [Nu Alphabet](https://github.com/tipotipos/nu-alfabet)
- [Barlow](https://github.com/jpt/barlow/tree/master/fonts/gx)

You can buy a licensed variable font from marketplaces like Type Network, FontStand, or Future Fonts.


## More reading:
- [One File, Many Options: Using Variable Fonts on the Web](https://css-tricks.com/one-file-many-options-using-variable-fonts-web/), CSS Tricks
- [Font file size tests for Gimlet](http://stuff.djr.com/gimlet-vf-size-test/), David Jonathan Ross
- [Practical Uses for Variable Lettering](https://ohnotype.co/blog/practical-uses-for-variable-lettering), OHno Type Co
- https://medium.com/clear-left-thinking/how-to-use-variable-fonts-in-the-real-world-e6d73065a604
- [Introduction to variable fonts on the web](https://developers.google.com/web/fundamentals/design-and-ux/typography/variable-fonts/), by Mustafa Kurtuldu
- https://www.typenetwork.com/brochure/opentype-font-variations/

