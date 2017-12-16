---
path: "/getting-started-with-drawbot"
date: "2017-12-10T11:46:16.408Z" 
title: "Getting started with parametric design in Drawbot"
tags: ["python", "code", "type design", "type testing", "drawbot"]
publish: true
---

As part of [Type and Media](http://typemedia.org), I am taking classes on Python from  [Just van Rossum](https://twitter.com/justvanrossum?lang=en). Just has done a ton to move type design technology forward, and he has done some wonderful design collaboration over the years — a recent project of note was the identity for the Lowlands festival, with [Hansje van Halem](http://www.hansje.net/Lowlands-Festival-2017-ongoing-project). Fun/crazy fact: Just's brother, Guido, invented Python. Just also happens to be patient and great at breaking down programming concepts for beginners, so it's been great to learn from him.

Just van Rossum has started teaching us Python with [Drawbot](http://www.drawbot.com), which is a fun program that allows you to make artwork and animations with code. This can be tricky in some ways, but also allows you to make things that would be impossible (or stupidly time-consuming) in tools like Adobe Illustrator or After Effects. As a benefit specific to type designers, once you learn about working with Python in Drawbot, you can take these same skills into Robofont or Glyphs to manipulate your fonts.

I tend to learn best when I take notes. When I'm learning about code, it's helpful for me to follow along with the code as well as document some of the instruction around the code. I've found that Dropbox Paper is really great for this kind of quick note-taking, because it is the best of markdown and a collaborative, easy document tool like Google Docs. Because I'm already taking notes, I will be cleaning them up a bit and sharing them here so others can get started on learning Python, making cool things in Drawbot, and maybe even using scripting in type development.

Without further ado, here are the slightly-cleaned-up notes from our first session of class on September 13th, 2017:

---

> Python is simple. DrawBot adds the ability to draw stuff. — Just van Rossum


**Docs at:**
http://www.drawbot.com

**Download at:**
http://www.drawbot.com/content/download.html

**Some super-cool examples of what you can do in Drawbot:**
http://dailydrawbot.tumblr.com/


## Getting started

**Say hello**

    print "hello"

`⌘R` to run

**Draw a rectangle**

    rect(100,200,300,400)

`⌘R` to run

> Strings use stupid quotes (primes).

## Some advice from Just

Clarity in code matters. You might use comments to explain certain things. Do not write only for the computer – write for others.

The computer does only what you *tell it* to do, not always what you *want it* to do.

You can comment a line with `#`, but commenting is so frequent, it has shortcuts:

- `⌘}` to comment a line (command shift right bracket)
- `⌘{` to uncomment a line (command shift right bracket)

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

**Draw an ellipse**

    oval(500,500,500,500)

**Coordinate system**
`(origin from left, origin from bottom, width, height)`


## Colors

If you want red shapes, put the following at the top of your document:

    fill(1,0,0)

If you want a blue stroke

    stroke(0,0,1)

Make the stroke thicker

    strokeWidth(10)

***Order matters.***

- If you set a color, only the shapes that follow will be that color. 
- If you place a shape after another, it will be on top of the former shape.
- To exclude a stroke from a shape, place `stroke(None)` before a shape




<p>
![](https://d2mxuefqeaa7sj.cloudfront.net/s_E5A04C27368DACACF710CC435D8CEA6C5815F037285ECBED5EBF244945BD6423_1505295150181_image.png)
</p>

<img src="./images/1.png" alt="red circles" />


**Color trivia: why is RGB set in 255?** 
256 is 2⁸. A byte is the smallest unit of information that can be stored on a computer – 0 is “off” and 1 is “on”. If we use 3 bits, we can count to 3. With 8 bits, we can count to 256. So, if you start at 0, you can count to 255. So, for each color channel, you can count from 0 to 255. The total amount of colors is 2²⁴ (or 16,777,216). 

Let’s try this in Python: `print 2 ** 24` yields `16777216`.

To make a different color, just use decimals in the color naming. So, `fill(1,0.5,0)` will give full red, half green, and yield orange. 

- You can use decimals with these. 
- If you add a fourth number, it will be the alpha channel (transparency)
- (tip for Europeans) If you use floating-point numbers, be sure to use a dot, not a comma



<img src="./images/2.png" alt="change your fill color to orange" />

*Change your fill color to orange*

<img src="./images/3.png" alt="You can even play with things like shadows, in colors if you want" />

*You can even play with things like colorful shadows if you want*


# Let’s learn some Python fundamentals

`print "some string"` will print in the console

- a string must be inside quotes
- you can print other things, like var
- you can do math by using numbers and symbols

**Strings**

- Must be on a single line

```
    # strings must be on a single line
    print "abc
        def
```
… will throw an error: `SyntaxError: EOL while scanning string literal` (EOL means “end of line”)

- but, you can set a block of text by starting and ending with `"""`:

```
    # strings must be on a single line, unless you wrap with """
    print """
    
        ||  ||  ||
            ||
           ===
        \\\______//
          ``````
    
        """
- prints
    
        ||  ||  ||
            ||
           ===
        \\______//
          ``````
```

  **Q: When  will we use the triple quotes?**
  When you want to set columns of text, this can be helpful. Python doesn’t really have the concept of a “console,” but rather it has standard text output. 
  … these are good questions, but we will cover other stuff and come back to this later



## Variables

Defined like `a = 123`. Case-sensitive.


    a = 123
    
    print a
    
    print A # throws error

Variables cannot start with a number. 

    a2 # valid variable
    2a # throws error



## Random numbers

`print random()` will provide a random number between 0 and 1.
`print randint(10,25)` will give random integer between 10 and 25

Try `rect(100,100,100, randint(10, 500))` to create a rectangle that will have a random height on any run

Try adding a random color:

    
    fill(random(),random(),random())
    rect(100,100,100, randint(10, 500))
    
<img src="./images/4.png" alt="" />

# Let’s make a letter
    rect(100, 200, 40, 400)
    rect(400, 200, 40, 400)
    rect(140, 400, 260 , 40)



<img src="./images/5.png" alt="A letter H with two stems and a crossbar" />



<img src="./images/6.png" alt="Using a variable to set stroke widths of letter H" />

# Tips

You may be tempted to write comments in your primary language, but it is useful to write comments in English – even if you are pretty sure you are the only person who will ever see this code.

Code is about breaking down your ideas into smaller and smaller components. Don’t think “I want to make a font editor,” Think, “how do i make a rectangle.” 

# Homework

Use the [Courseware](http://www.drawbot.com/content/courseware.html) in the Docs. If you get stuck or zoned out, don’t waste a whole evening trying to get unstuck – reach out for help to get unstuck. It may be a simple thing – don’t waste too much time on it.

- Make notes of your questions, so you can ask in the next class


## Q & A

**Q: are there plugins/extensions?**

Not really. Everything you write is a kind of plugin. 

However, there are python libraries which you can “import.” There is a whole python library you can load. There are also third party libraries. Drawbot has built-in things like Math and Random number generators

**Q: how do we draw rounded rectangles?**

There’s not really a way. This is pretty primitive. 

One tip: type `print dir()` to see all your options in the console.

**Q: Can you import a PDF vector and interact with it?**

Sort of. You can place jpegs and pdfs, then position, stretch, and clip them. But you can’t really modify them.

**Q: can you group things? Can you set a class?**

Not really. That’s thinking in HTML/CSS terms. It’s a higher-level of thinking. DrawBot is a bit more like painting things. PageBot does work more along those lines. A general coding principle is to avoid repeating yourself. 

Very interesting lecture about PageBot, from Petr van Blokland at ATypI 2017: https://www.youtube.com/watch?v=fPasHswCB8E

# Thanks for reading!

I'm typing into the void, so hopefully someone out there has enjoyed this. Did you actually read this post? Have you tried any of these examples in DrawBot yet? Would you like me to clean up my other notes to in follow-up posts? Let me know [on Twitter](https://twitter.com/thundernixon)!