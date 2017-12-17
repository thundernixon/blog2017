---
path: "/getting-started-with-drawbot-part_2"
date: "2017-12-16T11:46:16.408Z" 
title: "Getting started with parametric design in Drawbot, Part 2"
tags: ["python", "code", "type design", "type testing", "drawbot"]
publish: true
---

The following are notes taken from Just van Rossum's Python class in the KABK Type and Media program, on Sep 20, 2017. If you haven't yet learned anything about Drawbot, [start with part 1 of this series](../12-04-17-drawbot-for-beginners).

In these classes, Just does a great job of breaking down concepts and going in a logical order, but he also goes quite fast. So, these notes are what I could take at that speed, while I was also following along doing the examples in Drawbot. If you find anything that is unclear, feel free to [reach out to me via Twitter](https://twitter.com/thundernixon) and ask me about it.

## Drawbot editor

Drawbot isn’t the world’s greatest text editor, but it does do some neat things.

### Numbers

Highlight a number, then hold `command` while hitting up/down arrows. Hold `Shift` to move by 10, `option` to move by 0.1, and `option + shift` to move by 0.01.

When you have a number highlighted, you can old `command`, then `click + drag` to move the value up and down. You can even highlight two numbers to move them together.

### Text highlighting with the keyboard only

Like most text environments, you can highlight text by holding `shift`, then using left/right/up/down arrows.

### Tabbing

You can tab in/out a whole block of text by highlighting it, then using `Command + ]` or `Command + [`

## Booleans & `if` statements

```Python
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
```

You can compare the values of two variables:

```Python
nameA = "Stephen"
nameB = "Steven"

if nameA == nameB:
    print "the names are equal"
else:
    print "the names are different"

# prints "the names are different"

numA = 12
numB = 12

if numA == numB:
    print "the numbers are equal"

# prints "the numbers are equal"
```

### is “Variable” the name?

They could also be described as “labels for objects”

Can also be called a “parameter”


> Python is completely object oriented, and not "statically typed". You do not need to declare variables before using them, or declare their type. Every variable in Python is an object.
> https://www.learnpython.org/en/Variables_and_Types

### Identity equivalents

- strong equivalents are `is` and `is not`

### Conditionals

```Python
if a != b:
    print "yes"
```


## Indexing

```Python
list = [12, 34, 123, 232, "string"]

print list[1] # 34
```

Python is “zero indexed” – counting on lists starts from zero (the same is true in for loops, etc).

### Length

```Python
print len(list) # prints 5, the "length" of the list
```

You can print the last item of the list, or count from the last item

```Python
print list[-1] # prints last item
print list[-2] # prints second-to-last item
print list[len(list) - 1] # longer form of list[-1]
```

A string also has a length:

```Python
print len("abc") # prints 3
```

## Managing lists

You can manage data in lists, like

```Python
list.append("a new item")
print list # [12, 34, 123, 232, 'hey look a string', 'a new item']
```


## “For” loops

```Python
residents = ["carlos", "stephen", "sean"]

for roommate in residents:
    print roommate # prints carlos stephen sean (on new lines each)
```
      

You can also loop through the letters of a string

```Python
for item in "abcde":
    print item # prints a b c d e
```


Q: What is a “counter”
A: each time you go through a “for loop,” the variable you assign to the list you are going through increases by 1. Using this value each time you go through the loop allows you to do things differently each time you run through the loop.



# Loops

```Python
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
```

### 👆 That was a lot of typing. Instead, let's use a loop:

```Python
for i in range(6):
    x = 50 + i * 150
    print x
    rect(x, 300, 100, 100)
```

In addition to being faster to write, this is more flexible, too! We can now easily change the quantity of squares.

### Let’s make a grid and make y flexible

```Python
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
```

(By the way, `i` is common in code loop examples, because it’s short for “interger.” As an extension, `j` is popular as the next loop variable, and so on.)


## Modulo

Want to alternate between things in an odd/even, or "every nth object" fasion? You can reach for *modulo*.

The Modulo math operation divides by something, and outputs the remainder. It is represented by `%`.

***SO***, If you modulo-divide a number by 2 like `x % 2`, it will result in `1` if it’s an odd number (truthy), and `0` if its even (falsy). You can add this to a grid example to alternate between shapes or colors:

```Python
if j % 2:
    fill(1,0,0) # makes odd shapes red
```

You can make a checkerboard like

```Python
if (i + j) % 2:
    fill(1,0,0) # makes odd shapes on first row red, then even shapes on next row red
```


*In my next post about Drawbot, I will diverge from class notes and take an "explain it like I'm 5" deep-dive into making a perfect, expandable grid in Drawbot. [Scroll to the bottom of this post](#thanks) if you'd like to get there now.*

# Questions from class

### Q: What version of python should we be focused on?

In DrawBot, we are using Python 2.7. There is also an experimental version of DrawBot that uses Python 3.6.

Robofont scripting uses Python 2.7, so as beginners and students learning about type design, using Drawbot in Python 2.7 works in our favor. 

<h1 id="thanks"> Thanks for reading!</h1>

If you'd like to keep charging ahead, I've written a deep-dive tutorial into making a "perfect" grid in Drawbot: [check out the next post in this DrawBot series](../make-a-perfect-expandable-grid-in-drawbot).

I'm typing these posts into the void, so hopefully someone out there has enjoyed this. Did you actually read this post? Have you tried any of these examples in DrawBot yet? Would you like me to clean up my other notes to in follow-up posts? Let me know [on Twitter](https://twitter.com/thundernixon)!

