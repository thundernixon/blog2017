---
path: "/getting-started-with-drawbot"
date: "2017-12-10T11:46:16.408Z" 
title: "Getting started with parametric design in Drawbot"
tags: ["python", "code", "type design", "type testing", "drawbot"]
publish: true
---

As part of [Type and Media](http://typemedia.org) I am taking classes on Python from  [Just van Rossum](https://twitter.com/justvanrossum?lang=en) (Just is pronounced like "Yoost"). Just has done a ton to move type design technology forward, such as being one of the three main developers of the [UFO](https://fr.wikipedia.org/wiki/Unified_Font_Object) font file format. He has done some wonderful design/development collaboration over the years — a recent project of note was the identity for the Lowlands festival, with visual design by [Hansje van Halem](http://www.hansje.net/Lowlands-Festival-2017-ongoing-project) and coding by Just. A fun and crazy fact: Just's brother, Guido, invented Python. Most importantly, Just also happens to be patient and great at breaking down programming concepts for beginners, so it's been great to learn from him.

Just van Rossum has started teaching us Python with [DrawBot](http://www.drawbot.com), which is a fun program for macOS that allows you to make artwork and animations with code. If you've ever tried [CodePen](https://codepen.com), DrawBot is a bit like that, but for Python instead of HTML/CSS/JS. Basically, you type code in one panel of the app, and when you run it, the result shows up on the other panel. You can then export the result into different file formats like PDF, SVG, MOV, PNG, JPEG, etc.

Making artwork with code can definitely be tricky in some ways, but also allows you to make things that would be impossible (or stupidly time-consuming) in tools like Adobe Illustrator or After Effects. As a benefit specific to type designers, once you learn about working with Python in Drawbot, you can take these same skills into Robofont or Glyphs to manipulate your fonts.

I tend to learn best when I take notes. When I'm learning about code, it's helpful for me to follow along with the code as well as document some of the instruction around the code. I've found that Dropbox Paper is really great for this kind of quick note-taking, because it is the best of markdown and a collaborative, easy document tool like Google Docs. Because I'm already taking notes, I will be cleaning them up a bit and sharing them here so others can get started on learning Python, making cool things in Drawbot, and maybe even using scripting in type development.

Without further ado, here are the slightly-cleaned-up notes from our first session of class on September 13th, 2017:

---

> Python is simple. DrawBot adds the ability to draw stuff. — Just van Rossum


### Docs at:
http://www.drawbot.com

### Download at:
http://www.drawbot.com/content/download.html

### Some super-cool examples of what you can do in Drawbot:
http://dailydrawbot.tumblr.com/


## Getting started

### Say hello

```Python
print "hello"
```

Hit the shortcut `⌘R` to run

### Draw a rectangle

```Python
rect(100,200,300,400)
```

Hit the shortcut `⌘R` to run

> Strings use stupid quotes (primes).

## Some advice from Just

Clarity in code matters. You might use comments to explain certain things. Do not write only for the computer – write for others.

The computer does only what you *tell it* to do, not always what you *want it* to do.

### Commenting Code

You can comment a line with `#`, but commenting is so frequent, it has shortcuts:

- `⌘}` to comment a line (command shift right bracket)
- `⌘{` to uncomment a line (command shift right bracket)

### Syntax and syntax errors

Whitespace is sometimes optional, unless you’re in a string. 

- Indentations that aren’t needed will give a syntax error:
    Traceback (most recent call last):
      File "hello_world-091317.py", line 3
        rect(0,0,300,500)
        ^
    IndentationError: unexpected indent


> error messages can be a bit scary at first, but they are very helpful. Even after 30 years of programming, I use them all the time to get where I’m going.

What happens in a syntax error

- the program runs until it hits a line it doesn’t understand
- it stops, and tells you `Traceback (most recent call last):`
- It tells you the file and line that failed
- It tells you the type of error
- Note: Python is case-sensitive. 


## Let’s talk more about the rectangle
- Drawbot has a canvas
  - this is a default size, which you can change
  - coordinates start at left-bottom
  - default units are “points”. you can change this later.
    - there are 72 points in an inch
    - one inch is 2.54 cm
    - (so, there are 28.346456693 points in a cm)
  - You can save this as a vector PDF, then open in illustrator, etc

### Draw an ellipse

```Python
oval(500,500,500,500)
```

### Coordinate system

The coordinate system is like the grids you learned about in math class, not like the system you might know from web layout. The origin is the bottom-left, making rectangle objects use the following arguments:

```
(distance from left, distance from bottom, width, height)
```


## Colors

If you want red shapes, put the following at the top of your document:

```Python
fill(1,0,0)
```

If you want a blue stroke

```Python
stroke(0,0,1)
```

Make the stroke thicker

```Python
strokeWidth(10)
```

### Order matters.

- If you set a color, only the shapes that follow will be that color. 
- If you place a shape after another, it will be on top of the former shape.
- To exclude a stroke from a shape, place `stroke(None)` before a shape

<img src="./images/1.png" alt="red circles" />


### Color trivia: why is RGB typically set in 255?

If you're already a designer or developer, you have probably already learned about how screen color is made of a combination of red, green, and blue pixels. When all three are fully off, you see black, when all three are fully on, you see white, and the other colors are just mixes in between.

A bit is the smallest unit of information that can be stored on a computer – 0 is “off” and 1 is “on”. With 2 bits, we have four possible combinations, so we can count up from 0 to 3: `00` is 0, `01` is 1, `10` is 2, `11` is 3. If we use 3 bits, we can count to 8: `100` is 5, `101` is 6, etc. With *8 bits*, also known as 1 *byte*, we have 256 possible combinations, so we can  you can count from 0 to 255. 

For each color channel in RGB, you can use a single byte to count from 0 to 255, in order to have all those steps between fully-off and fully-on. With three channels, the total amount of possible colors is 2⁸ * 2⁸ * 2⁸, or 2²⁴ (16,777,216). With just 3 bytes, a computer can store a color value that is one in almost 17 million!

Wikipedia has a pretty amazing article on the [RGB color model](https://en.wikipedia.org/wiki/RGB_color_model) if you'd like a deeper explanation and some useful diagrams.

As an aside to this aside, we can do this type of math operation in Python: `2 ** 24` is the markup for 2²⁴, so `print 2 ** 24` prints `16777216`.

### Setting colors in Drawbot uses values of 0 to 1.

To make a different color, just use decimals in the color naming. So, `fill(1,0.5,0)` will give full red, half green, and yield orange.

To convert, you can simply divide typical 0–255 RGB values by 255, and use the result. So, if you have `rgba(145,21,255,.125)`, you can divide 145 by 255 to get about .569, 21 by 255 to get about .082, and 255 by 255 to get 1. The alpha is already 0–1, so it's fine as-is.

In brief:
- You can use decimals with color values. 
- If you add a fourth number, it will be the alpha channel (transparency)
- (Tip for Europeans): if you use floating-point numbers, be sure to use a dot, not a comma



<img src="./images/2.png" alt="change your fill color to orange" />

*Change your fill color to orange*

<img src="./images/3.png" alt="You can even play with things like shadows, in colors if you want" />

*You can even play with things like colorful shadows if you want*


# Let’s learn some Python fundamentals

`print "some string"` will print in the console

- a string must be inside quotes
- you can print other things, like var
- you can do math by using numbers and symbols

### Strings

Strings must be on a single line. So:

```Python
print "abc
    def
    ghi
"

```

… will throw an error: `SyntaxError: EOL while scanning string literal` (EOL means “end of line”)

But, you can set a block of text by starting and ending with `"""`:

```Python
# strings must be on a single line, unless you wrap with """
print """

    ||  ||  ||
        ||
        ===
    \\\______//
        ``````

    """
```

- prints

```    
    ||  ||  ||
        ||
        ===
    \\______//
        ``````
```

This can be helpful if you're working with ASCII art, or using multiple paragraphs of text for a string variable.

### Q: When  will we use the triple quotes?
When you want to set columns of text, this can be helpful. Python doesn’t really have the concept of a “console,” but rather it has standard text output. 
… these are good questions, but we will cover other stuff and come back to this later



## Variables

Defined like `a = 123`. Case-sensitive.

```Python
a = 123

print a

print A # throws error
```

Variables cannot start with a number.

```Python
a2 # valid variable
2a # throws error
```


## Random numbers

`print random()` will provide a random number between 0 and 1.
`print randint(10,25)` will give random integer between 10 and 25

Try `rect(100,100,100, randint(10, 500))` to create a rectangle that will have a random height on any run

Try adding a random color:

```Python
fill(random(),random(),random())
rect(100,100,100, randint(10, 500))
```
    
<img src="./images/4.png" alt="Random rectangles in Drawbot" />

# Let’s make a letter

```Python
rect(100, 200, 40, 400)
rect(400, 200, 40, 400)
rect(140, 400, 260 , 40)
```

...will result in a capital H with a red crossbar:

<img src="./images/5.png" alt="A letter H with two stems and a crossbar" />

You can make it more flexible if you set the "stroke thickness" of the letter with a variable:

```Python
w = 40

rect(100, 200, w, 400)
rect(400, 200, w, 400)
rect(140, 400, 260 , w * 0.9)
```

...resulting in this:

<img src="./images/6.png" alt="Using a variable to set stroke widths of letter H" />

# Tips

If English is your non-primary language, you may be tempted to write comments in your primary language. However, it is useful to write comments in English – even if you are pretty sure you are the only person who will ever see this code. For better or worse, English is the common language of technology and code, so at some point, you will need English to collaborate with others in code.

Code is about breaking down your ideas into smaller and smaller components. Don’t think “I want to make a font editor;” think, “how do i make a rectangle?”

# Homework

Use the [Courseware](http://www.drawbot.com/content/courseware.html) in the Docs. If you get stuck or zoned out, don’t waste a whole evening trying to get unstuck – reach out for help to get unstuck. It may be a simple thing – don’t waste too much time on it.


## Q & A

### Q: are there plugins/extensions?

Not really. Everything you write is a kind of plugin. 

However, there are python libraries which you can “import.” There is a whole python library you can load. There are also third party libraries. Drawbot has built-in things like Math and Random number generators

### Q: how do we draw rounded rectangles?

There’s not really a way. This is pretty primitive. 

One tip: type `print dir()` to see all your options in the console.

### Q: Can you import a PDF vector and interact with it?

Sort of. You can place jpegs and pdfs, then position, stretch, and clip them. But you can’t really modify them.

### Q: can you group things? Can you set a class?

Not really. That’s thinking in HTML/CSS terms. It’s a higher-level of thinking. DrawBot is a bit more like painting things. PageBot does work more along those lines. A general coding principle is to avoid repeating yourself.

**What is PageBot?** 

(My short answer): PageBot is the future of professional document design, especially for print, which allows you to program document layouts that you might otherwise make in a tool like InDesign. The programmatic nature promises more flexibility, efficiency, and allows responsive export to different sizes for print as well as web and ebook formats.

(Just's answer): Watch a lecture about PageBot, from Petr van Blokland at ATypI 2017: https://www.youtube.com/watch?v=fPasHswCB8E

# Thanks for reading!

I'm typing into the void, so hopefully someone out there has enjoyed this. Did you actually read this post? Have you tried any of these examples in DrawBot yet? Would you like me to clean up my other notes to in follow-up posts? Let me know [on Twitter](https://twitter.com/thundernixon)!

## Next up:

There's plenty more to learn about the basics of Python and DrawBot. If you're still going strong, [check out Part 2 of this introduction](../getting-started-with-drawbot-part_2).