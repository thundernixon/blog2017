---
path: "/aliases-on-the-mac_os-command-line"
date: "2017-12-15T11:46:16.408Z" 
title: "Make the macOS command line super convenient with aliases"
tags: ["command line", "git", "code", "hot tips"]
publish: true
---

You may already know that the command line allows you to interact with the core of your computer via the “bash” shell (I’m resisting the urge to get into etymology and a description of shells, but if you’re curious, check out the “More Reading” section at the end of this post). 

Bash gives you some conveniences that I wasn’t aware of for a long time. Once you’re in the terminal, you don’t want to waste time typing and navigating when you don’t need to, and bash allows you to create short commands which will stand in for longer commands. For this post, I’m grouping these shortcuts into the general term *aliases*.

# Why use aliases?

If you use the command line to help with your design or development workflow, you are probably someone who likes looking for ways to your workflow faster and more effective. Hopefully, you’ve already found a good command line tool like [iTerm2, that allows you to set up a hotkey to pull open the window.](https://www.iterm2.com/documentation-hotkey.html) (If you are using the command line but still using the standard macOS Terminal app, *definitely* switch to something like iTerm2). 

Still, if you’re using the command line without much customization, you will end up typing repetitive commands, daily or even multiple times an hour. No, it doesn’t take *that* much time or brain power to type `git add .` and then  `git commit -m` and then your commit message. You could even do it in one command if you strung together `git add -A && git commit -m` and then your message. But what if you could simply type `git ac` and then your message? You’d be able to more quickly make commits without losing mental flow. Or what if you could run a single command to boot up everything you need to start your workday, or to start working on a project?

Enter command line *aliases* and *functions.*

Before you get too far into examples and how-to flows, it’s worth noting that you could probably use [Alfred](https://www.alfredapp.com/) to set up a few of these shortcuts as workflows. However, though I love Alfred for math and desktop navigation, I admittedly haven’t converted to the PowerPack yet (I’m on a student budget), so I can’t speak to this feature set personally. Even if *you* have the PowerPack but aren’t yet using command line aliases, you will most likely still find aliases useful. In particular, I don’t think git aliases would work (or work as well) in Alfred.


## When might you use aliases?

The potential set of use cases for aliases is endless, but for me, as a designer & development dabbler, I’ve found that I love them for navigation and git commands.

To get specific, I’m actually combining *bash aliases*, *bash functions*, and *git aliases* in this post. When you use them, they feel similar and provide similar utility. However, they each need to be set up slightly differently, so it took me a bit of digging to find out how to make them work. Hopefully you benefit from my digging!

**Navigate to a project folder with a single word**

If you’re working on projects using the command line, you need to start every new work session by navigating to the right folder. If you’re doing it the “easy” way, this might mean getting to the folder in Finder, right-clicking and copying it, then using `cd path/path/folder` to change to it. If you’re staying in the command line entirely, you might be using a series of `cd` and `ls` commands to get there. 

No more! Once you set up an alias, you can simply type a command like `blog` and be instantly in the right folder to work on your blog project.

**Open a project in your favorite text editor with a single word**

You could open your text editor, then use “Open” to click around into the project you want, *or* you could type an alias like `codeblog` into the command line and instantly have the project open in your favorite text editor. This command also uses a simple bash alias.

**Open frequent websites, or perform several tasks together (with a single word)**

If you’re like me, you open the same websites every day when you get on your computer, and maybe even do so multiple times per day. You might start each day by opening your email, open your team’s scrum board after than, and start each meeting by opening a note-taking tool like the wonderful [Dropbox Paper](https://paper.dropbox.com/).

With a bash function, you could type `email` to open your email, `scrum`  to open your scrum board, or `paper` to open Dropbox Paper in your chosen browser. If you want to get fancy, you could even string a few websites together (and even projects to open in desktop apps) into a single command like `work`, and instantly start your workday with email, notes, and GitHub notifications in the browser, plus your latest project in your code editor or design tool.

These commands are doing more than just finding items on your computer, so they require the bash *function* syntax. They’re almost as simple to create as basic aliases, though.

**Shorten your most frequent git commands**

When I started using VS Code, it was something of a revelation to know that I could use the source control portion of the sidebar to type something, then hit **command + enter** to “add” and “commit” all changed files in a single action. So, when I started committing type design projects in Robofont, it was a bummer to go back to using separate commands `git add .` and then `git commit -m "example change message"` a bunch of times per day. Yes, I do know that it’s sometimes useful to stage only some files for a specific commit, but I don’t feel the need to reach for that capability very often. So, I missed the single-action approach, and I started looking for a shortcut, which led me to aliases in the first place.

With a simple git alias, I can now just run `git ac "example change message"`, and feel the warm glow that I’ve saved some annoying keystrokes.



# How to make bash aliases
## Make your .bash_profile file if you don’t yet have one

`cd ~/`
`ls -A`

If `.bash_profile` exists, you can open it with `open .bash_profile` (or `code .bash_profile` if you happen to be using VS Code as a text editor, which I highly recommend).

If it doesn’t exist, run `touch .bash_profile` to create it, then open it. 


## Navigation to folders with the basic alias syntax

Navigating to a folder in the command line just requires `cd`, and then the folder path.

To make this faster, open your `.bash_profile` file and set up an alias like:


    alias nameOfAlias='cd /Users/yourname/folder/another_folder/project_folder'

…making sure that there is *no space* between the alias name and the `=`, and then copying the full file path of the project. To get your folder path, you can get to the folder in finder, right-click it, copy the name, paste it into the command line, then copy that.

## Open a project in your text editor with an alias

I happen to use [VS Code](https://code.visualstudio.com/) as my main text editor, and with VS Code, you can open a project directly from the command line with the command `code` and the project path. This too can be made into an alias.

For example, when I want to blog, I can just run the command `blog` and open up my blog pages, because I have set up the following alias:


    alias blog='code /Users/stephennixon/Sites/blog2017-gatsby/src/pages' 

If you prefer to code in another text editor, there are also ways to set up similar commands [for Atom](https://stackoverflow.com/questions/22390709/how-to-open-atom-editor-from-command-line-in-os-x) and [for Sublime](http://www.sublimetext.com/docs/2/osx_command_line.html).

If you want to quickly open in your `.bash_profile`  in the future, it’s worth remembering that you can use `code ~/.bash_profile`. Ironically, it doesn’t work to set up an alias for this, without your `.bash_profile` opening every time you open a command line session.

## For navigation to URLs or stringing together multiple aliases, use the "function" syntax

You can open a URL from the command line with a command like `open https://paper.dropbox.com`. However, you can’t set this up with a regular alias, because that resource doesn’t sit under the same parent directory of your `.bash_profile`. 

Still, it’s easy to make it work in a similar way, by using a bash function like the following:


    function paper {
      open https://paper.dropbox.com
    }

The above function allows me to open Dropbox Paper, which I use for note-taking.

If you want to specify a browser, you can use the option `-a "Application"`, like:


    function paper {
      open -a "Firefox" https://paper.dropbox.com
    }

What’s even cooler is that you can string together multiple commands in a function, like:


    function work {
      open https://paper.dropbox.com
      open https://inbox.google.com
      code /Users/stephennixon/Sites/blog2017-gatsby/src/pages
    }

With this function, I can open up my notes, my email, and my current code project, all at once by simply typing `work`.

# How to make git aliases

Git Aliases work slightly differently, though they’re actually what I use most often, as in my aforementioned `git ac` command.

To set up a git alias, just open your commit line and use the `git config` command, like the following to set up `git co` in place of `git checkout`:


    git config --global alias.co checkout

As you might expect, by flagging this config as `--global` you make it possible to use this alias on any git repo on your machine. If you want a git alias to only work for the current git repo, you could leave that option out.

I sometimes find myself wanting to make a branch and move to it, but I forget the proper syntax. I’ve made this simpler by simply setting up `git cb` as an alias:


    git config alias.cb 'checkout -b'

Aliases get better for more complicated git commands. You might have something fancy you’d like to do like just viewing only the most recent commit, for which you don’t want to type `git` `*show -s HEAD^{commit}*`. To get the same result with an alias, run:


    git config alias.last show -s HEAD^{commit}

By far my most-used alias is `git ac`, to let me add and commit all unstaged changes in one go. For this, you can run: 


    git config --global alias.ac !git add -A && git commit -m

Notice: this last one needed a `!` in the command. You need to include the exclamation point before your alias text in order to string together multiple commands so that they expand as if typed inline.

# Using aliases day to day

The easiest way to review your bash aliases and functions might just be to run the command `open ~/.bash_profile` or `code ~/.bash_profile`, but if you're curious, you can also view aliases and functions right in the command line with the techniques below. Likewise, git aliases are simplest to view and edit with `open ~/.gitconfig` or  `code ~/.gitconfig`, but you can also view these through command line.

## View your existing aliases from the command line

Run the command `alias` to show your available aliases:


    Stephen-Nixons-MacBook-Pro-2:~ stephennixon$ alias
    alias blog='code /Users/stephennixon/Sites/blog2017-gatsby/src/pages'
    alias cochin='cd /Users/stephennixon/Dropbox/KABK_netherlands/type_media/01-tm_revival/cochin-project'
    alias gatsby='cd /Users/stephennixon/Sites/blog2017-gatsby'
    alias greek='cd /Users/stephennixon/Dropbox/KABK_netherlands/type_media/08-tm_bilak/04-greek-spectral/Spectral-master-greek'
    alias robo='cd /Users/stephennixon/Dropbox/KABK_netherlands/type_media/11-robofont-scripting'
    alias stroop='cd /Users/stephennixon/Dropbox/KABK_netherlands/type_media/02-tm_contrast/stroop-project'
    alias tm='cd /Users/stephennixon/Dropbox/KABK_netherlands/type_media'



## View existing functions from the command line

You can run `typeset -f` to show your available functions:


    Stephen-Nixons-MacBook-Pro-2:~ stephennixon$ typeset -f
    paper ()
    {
        open https://paper.dropbox.com
    }


## View git aliases

You can view global git aliases with the command :

    git config --get-regexp ^alias\.

If you really want to see aliases in the command line, it would be worth setting up an alias:


    git config --global alias.alias "config --get-regexp ^alias\."

Again, it’s probably simpler to just open the git config in your code editor. If you’ve set up the git aliases in this blog post, they will be nicely laid in `~/.gitconfig` as:


    [alias]
        co = checkout
        cb = checkout -b
        ac = !git add -A && git commit -m
      

If you set up git aliases without the `--global` flag, these will be in the git config of the repo in which you set them up, rather than the global config.

# Happy aliasing, and thanks for reading!

Are these aliases and functions working for you, or did you run into any issues (or typos in the post)? Have you found any other must-use aliases? Let me know on [Twitter](https://twitter.com/thundernixon)!

## More useful reading:

This post includes a lot more suggestions for useful aliases, and helped me figure out the right syntax for bash functions:
https://www.digitalocean.com/community/tutorials/an-introduction-to-useful-bash-aliases-and-functions

This post gives some etymology and background on the bash shell: http://www.macdevcenter.com/pub/a/mac/2004/02/24/bash.html

Here’s the documentation on Git Aliases
https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases

A few more shell tricks:
http://brettterpstra.com/2014/08/06/shell-tricks-the-os-x-open-command/

