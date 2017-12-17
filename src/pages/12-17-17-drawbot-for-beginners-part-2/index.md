---
path: "/getting-started-with-drawbot-part_2"
date: "2017-12-17T11:46:16.408Z" 
title: "Getting started with parametric design in Drawbot, Part 2"
tags: ["python", "code", "type design", "type testing", "drawbot"]
publish: true
---

The following are notes taken from Just van Rossum's Python class in the KABK Type and Media program, on Sep 20, 2017. If you haven't yet learned anything about Drawbot, [start with part 1 of this series](../12-04-17-drawbot-for-beginners).

In these classes, Just does a great job of breaking down concepts and going in a logical order, but he also goes quite fast. So, these notes are what I could take at that speed, while I was also following along doing the examples in Drawbot. If you find anything that is unclear, feel free to [reach out to me via Twitter](https://twitter.com/thundernixon) and ask me about it.

## Drawbot editor

Drawbot isn’t the world’s greatest text editor, but it does do some neat things.

**Numbers**

Highlight a number, then hold `command` while hitting up/down arrows. Hold `Shift` to move by 10, `option` to move by 0.1, and `option + shift` to move by 0.01.

When you have a number highlighted, you can old `command`, then `click + drag` to move the value up and down. You can even highlight two numbers to move them together.

**Text highlighting with the keyboard only**

Like most text environments, you can highlight text by holding `shift`, then using left/right/up/down arrows.

**Tabbing**

You can tab in/out a whole block of text by highlighting it, then using `Command + ]` or `Command + [`

## Booleans & `if` statements
    if 3:
        print "yes"
        # non-zero numbers or strings are true
        
    if 0:
        print "zero"
        # false
        
    if "":
        print "empty string"
        # false
        
    if True:
        print "True"
        # True (and False) have capitals
        
    
    if 2 < 5:
        print "yup"
        # 2 < 5 can be run anywhere, and the True/False value can be referenced
        
    a = 123
    
    if a is not None:
        print "yes"

You can compare values of two variables

    if 

**is “Variable” the name?**

They could also be described as “labels for objects”

Can also be called a “parameter”


> Python is completely object oriented, and not "statically typed". You do not need to declare variables before using them, or declare their type. Every variable in Python is an object.
> https://www.learnpython.org/en/Variables_and_Types

**Identity equivalents**

- strong equivalents are `is` and `is not`

**Conditionals**

    if a != b:
      print "yes"


## Indexing
    list = [12, 34, 123, 232, "string"]
    
    print list[1] # 34

Python is “zero indexed” – counting on lists starts from zero (the same is true in for loops, etc).

**Length**

    print len(list) # prints 5, the "length" of the list

You can print the last item of the list, or count from the last item

    print list[-1] # prints last item
    print list[-2] # prints second-to-last item
    print list[len(list) - 1] # longer form of list[-1]

A string also has a length:

    print len("abc") # prints 3
## Managing lists

You can manage data in lists, like

    list.append("a new item")
    print list # [12, 34, 123, 232, 'hey look a string', 'a new item']


## “For” loops
    residents = ["carlos", "stephen", "sean"]
    
    for roommate in residents:
      print roommate # prints carlos stephen sean (on new lines each)
      

You can also loop through the letters of a string

    for item in "abcde":
        print item # prints a b c d e


Q: What is a “counter”
A: each time you go through a “for loop,” the variable you assign to the list you are going through increases by 1. Using this value each time you go through the loop allows you to do things differently each time you run through the loop.



# Loops


    x= 50
    rect(x,100,100,100)
    x= 200
    rect(x,100,100,100)
    x= 350
    rect(x,100,100,100)
    x= 500
    rect(x,100,100,100)
    x= 650
    rect(x,100,100,100)
    x= 800
    rect(x,100,100,100)
    
    ### 👆 That was a lot of typing. instead, let's use a loop:
    for i in range(6):
        x = 50 + i * 150
        print x
        rect(x, 300, 100, 100)
        
        # This is more flexible, too! we can now easily change the quantity of squares

**Now let’s make a grid, and make y flexible**


    gridDistance = 150
    squareSize = 120
    
    for i in range(6):
        x = 70 + i * gridDistance
        for j in range(6):
            y = 70 + j * gridDistance
            if x < 500 and y < 500:
                rect(x, y, squareSize, squareSize)
            else:
                oval(x, y, squareSize, squareSize)

(By the way, `i` is common in code loop examples, because it’s short for “interger.” As an extension, `j` is popular as the next loop variable, and so on.)


Come back to this (trying to make squares more flexible):

    w = 1000
    h = 1000
    squares = 2
    for i in range(squares):
        x = (w / ((squares + 1) * 2)) + i * (w / (squares))
        for j in range(squares):
            y = (w / (squares * 2)) + j * (w / (squares))
            rect(x, y, w / ((squares + 1) * 2), h / ((squares + 1) * 2))




## Modulo

Want to alternate?

The Modulo divides by something, and outputs the remainder.

SO, If you divide a number by 2, it will be 1 if it’s an odd number (truthy), and 0 if its even (falsy). You can add this to a grid example to alternate between things:

    if j % 2:

You can make a checkerboard like

    if (i + j) % 2:


# Questions to ask

**Q: What version of python should we be focused on?**
In drawbot, we are using Python 2.7
Robofont and Glyphs are also using Python 2.7



# Project ideas
## Contribute to Drawbot code?
- Could you add code to make the text editor nicer? e.g. 
  - allowing users to duplicate & move lines with `option` and `shift`
  - One shortcut to comment/uncomment a line
  - Allow `command plus/minus` to enlarge/shrink text
  - *but* ***what if*** *drawbot text editing is intentionally painful, to urge beginners to code less, but smarter?* 
## Alphabet
- what if you take the “IBM Radio” (dieter rams) style alphabet, and make that into a user-controllable alphabet builder, with sliders that can edit different characters to set the alphabet?

