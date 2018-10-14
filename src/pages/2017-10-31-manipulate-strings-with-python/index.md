---
path: "/manipulate-strings-with-python.html"
date: "2017-10-31T11:46:18.408Z" 
title: "How to manipulate a string with Python in the macOS command line"
tags: ["python", "code", "type design", "type testing"]
publish: true
---

These weeks, I'm doing a lot of type design for class, and part of this is testing fonts that are just in their early stages, often with a very limited character set. For this, I find myself needing to work with strings of text to test my partially-complete fonts. For instance, I may want to test a font that has only a lowercase drawn, or maybe even a font with a partial lowercase and no punctuation.

With [RoboFont](http://doc.robofont.com/), I can easily "Test Install" a font, and use it within programs like InDesign, which I can then print test pages from.

For this, I want to be able to test strings of text that I copy from books, Wikipedia, or wherever else – without getting "[tofu](https://en.m.wikipedia.org/wiki/Noto_fonts#Etymology)" (rectangles where there are characters the font doesn't include) or picking through the text to delete or replace characters I don't have. Computers are good at that kind of repetitive, boring work, right?

Enter Python! With a few very simple lines of Python, you can easily manipulate strings of text to transform them into whatever you need. At first, I was using the fantastic app [Drawbot](http://www.drawbot.com/) to add a string and print it in a changed way, but I've since realized that Python can also be used in any macOS terminal app. For me, this is even faster, as I already have [iTerm2](https://www.iterm2.com/) set to be accessible with a hotkey command.

## Without further ado, here's how to manipulate a string with Python in the macOS command line

### Set it up

1. Start Python in the command line
    1. Open a terminal app. If you don't have something like iTerm or Hyper, the macOS utility "Terminal" also works just fine.
    2. Type `Python` into the terminal, then hit Return to run the command.
    3. You will see `>>>`, telling you that you are now using Python.

2. Define the string you want to manipulate. To preserve line breaks, wrap it in `"""` (three quotes).
```
myString = """
In computer programming, a string is traditionally a sequence of characters, either as a literal constant or as some kind of variable.
```

### Now, you can manipulate the string!

When you manipulate a string, you can either make a new variable, then print _that_, or else simply print directly. For something more complex or if you might want to run multiple separate changes, you would probably want to define a variable, but for simple work like this, I mostly just print my transformed strings directly.

#### Transforming to uppercase or lowercase

Let's say you want to change the string to only uppercase letters. Type and run the command `print(myString.upper())`. This will give you the string as:
```
IN COMPUTER PROGRAMMING, A STRING IS TRADITIONALLY A SEQUENCE OF CHARACTERS, EITHER AS A LITERAL CONSTANT OR AS SOME KIND OF VARIABLE.
```

Alternatively, you could change this to all-lowercase letters by running `print(myString.lower())`.

#### Transforming a non-English string (e.g. Greek) to all-lowercase

If you have a non-English string, it won't work to just put `.lower()` or `.upper()` on it, but it's still easy to transform.

Set up your string (I've made this "title case" to make this example more obvious):

```
greekString = "Η Ανάδρομη Κίνηση Είναι η Κίνηση Σε Αντίθετη Κατεύθυνση Από Την Κίνηση Ενός Άλλου Αντικειμένου"
```

Use the same `print` method as usual, but add inn `decode('utf-8')`, like the following:

```
print greekString.decode('utf-8').lower()
```

This will print the string in all lowercase:

```
η ανάδρομη κίνηση είναι η κίνηση σε αντίθετη κατεύθυνση από την κίνηση ενός άλλου αντικειμένου
```

Of course, you can also use `print greekString.decode('utf-8').upper()` to print the whole thing in all-caps.


#### Removing characters such as punctuation

Want to remove punctuation, or maybe all instances of a certain letter? The way to remove things in Python is to use the `replace()` method, then replace your unwanted character with an empty string. 

For example, to replace all instances of `a` with `e`, you would simply run `print(myString.replace("a","e"))`. This would give you:

```
In computer progremming, e string is treditionelly e sequence of cherecters, either es e literel constent or es some kind of verieble.
```

If you instead wanted to remove `a`, just replace it with nothing (which is an empty string, or two quotes with nothing between them: `print(myString.replace("a",""))`:

```
In computer progrmming,  string is trditionlly  sequence of chrcters, either s  literl constnt or s some kind of vrible.
```

To remove or replace several things, you can chain these `replace()` methods.

As an example, let's print `myString` without commas, periods, or the letter `a`. 

```
>>> print(myString.replace(",","").replace(".","").replace("a",""))

In computer progrmming  string is trditionlly  sequence of chrcters either s  literl constnt or s some kind of vrible

```

_Update, December 9, 2017: [@JesenTanadi](https://twitter.com/jesentanadi) made a script to give these sorts of character substitutions a simple, quick UI within RoboFont. [Check it out on GitHub.](https://github.com/jtanadi/robofontScripts/tree/master/noTofu)_

#### Adding a "control character" between every character in your string

One of the cool things RoboFont does in its "Space Center" is to allow you to add any character between every character in a test string. This is super helpful for spacing, because you can do things like adding the letter "l" between every other letter, and make sure all spacing is visually consistent against this vertical character. The one problem: I can't figure out how to copy the control character string for testing print in InDesign, etc. Luckily, this is super easy to do in Python, too! Simply use the `join()` method.

```
>>> print("n".join(myString))

nInnn ncnonmnpnuntnenrn npnrnongnrnanmnmninnngn,n nan nsntnrninnngn ninsn ntnrnandnintninonnnanlnlnyn nan nsnenqnunennncnen nonfn ncnhnanrnancntnenrnsn,n nenintnhnenrn nansn nan nlnintnenrnanln ncnonnnsntnannntn nonrn nansn nsnonmnen nkninnndn nonfn nvnanrninanbnlnen.n
```

There, whatever you put into quotes before `.join(myString)` is placed in between all characters. This is also useful if you want to do something like inserting spaces between all characters in the alphabet.

```
>>> print(" ".join("abcdefghijklmnopqrstuvwxyz"))
a b c d e f g h i j k l m n o p q r s t u v w x y z
```

#### Putting them together

Just like you can chain `replace()` methods, you can also chain different methods, like `lower()`, `replace()`, and `join()`. Let's print `myString` in all uppercase, with no punctuation, and with the letter "H" between all characters. Instead of trying to fit this all into a long, crazy single command, let's break it into a couple of variables to make things easy and fast.

First make a variable that is the string without punctuation, and in all uppercase, then print it to make sure it worked:

```
>>> myTestString = myString.replace(",","").replace(".","").upper()
>>> print(myTestString)

IN COMPUTER PROGRAMMING A STRING IS TRADITIONALLY A SEQUENCE OF CHARACTERS EITHER AS A LITERAL CONSTANT OR AS SOME KIND OF VARIABLE

```

Next, use `join()` to add in the control character `H`. You can either print this directly, or make a new variable if you want to do more transformations after this.


```
>>> print("H".join(myTestString))

HIHNH HCHOHMHPHUHTHEHRH HPHRHOHGHRHAHMHMHIHNHGH HAH HSHTHRHIHNHGH HIHSH HTHRHAHDHIHTHIHOHNHAHLHLHYH HAH HSHEHQHUHEHNHCHEH HOHFH HCHHHAHRHAHCHTHEHRHSH HEHIHTHHHEHRH HAHSH HAH HLHIHTHEHRHAHLH HCHOHNHSHTHAHNHTH HOHRH HAHSH HSHOHMHEH HKHIHNHDH HOHFH HVHAHRHIHAHBHLHEH

```

There you have it! Happy font testing. 🤖

---

_Update: Don't want to type or copy-paste the alphabet or numbers? I've also written [a simple post about how you can easily generate sample strings with Python](/generate-sample-strings-with-python)._