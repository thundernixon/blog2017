---
path: "/generate-sample-strings-with-python"
date: "2017-11-01T11:46:16.408Z" 
title: "How to generate simple sample strings with Python in the macOS command line"
tags: ["python", "code", "type design", "type testing"]
publish: true
---
Recently, I wrote a post about [manipulating strings with Python](./manipulate-strings-with-python.html) to help in font testing (from here, I'll refer to this as "the previous post").

I received the feedback/tip that Python can also help you generate the alphabet or digits quickly and easily, which is obviously also helpful if you aren't copying in a string from somewhere else.

1. As in the previous post, you start by opening your Terminal / command line application.

2. Type `Python` and hit return to enter Python mode. In this mode, your Python lines will start with `>>>`, and values printed by Python will simply appear on their own lines, without any prefixing.

3. To generate an alphabet or digits, you need to import the Python string module. Do this by running the command `import string`. If nothing much happens, things are going well.

4. Now, you can generate useful strings! Here are a few that are useful:
```Python
>>> print string.uppercase 
ABCDEFGHIJKLMNOPQRSTUVWXYZ
```
```Python
>>> print string.lowercase 
ABCDEFGHIJKLMNOPQRSTUVWXYZ
```
```Python
>>> print string.digits
'0123456789'
```

5. And now, if you'd like to use the manipulations described in the previous post, you can! Either print it directly, or define the string as a variable and manipulate that. So, this:
```Python
>>> print string.join(string.uppercase, "|") 
A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z
```
...could also be done as:
```Python
>>> alphabet = string.uppercase
>>> print "|".join(alphabet)
A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z
```

For the actual documentation of these output possibilities, visit [the official Python String module documentation](https://docs.python.org/2/library/string.html). For the possibilities of how you can manipulate strings, you can check out [my previous post](./manipulate-strings-with-python.html) for a starter set that I find helpful, and also visit [the official Python String Methods documentation](https://docs.python.org/2/library/stdtypes.html#string-methods).