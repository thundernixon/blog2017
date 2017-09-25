---
path: "/use-drawbot-with-github-and-vscode.html"
date: "2017-09-14T09:49:16.408Z" 
title: "Use Drawbot with GitHub and VS Code"
tags: ["drawbot", "python", "github", "vs code", "development", "code", "typemedia", "hot tips"]
publish: true
---

My TypeMedia class is taking our first forays into Drawbot, a program that allows you to make drawings and animations programmatically with Python. To me, it feels a lot like [CodePen](https://codepen.io) for Python. 

However, there are a few things that Drawbot doesn’t do that I’ve grown accustomed to in my exploration of web development. One thing is version control and collaboration, an essentially part of modern development – for this, GitHub is hard to beat. Another is offering a super-efficient code workflow with helpful extensions – for this, VS Code is my current favorite text editor.


## Why use GitHub and VS Code?

[GitHub](http://github.com), a website and service built around [Git](https://en.wikipedia.org/wiki/Git), is the de facto way software is developed today, and it offers a brilliant system for versioning, managing, and collaborating on code. Git is really smart, in that it stores each different version as only the changes it includes, versus the prior version. It also allows “branching” and “merging” and other features that enable exploration and collaboration. That may not make complete sense, but it’s a near-magical system that allows massive projects to have detailed histories, even with many, many contributors, all while helping these collaborators to avoid conflicts in their versions while working.

[VS Code](https://code.visualstudio.com/) is a text editor for all types of code. It has a built-in file explorer, terminal, and Git manager, plus a thriving community building extensions that offer all kinds of productivity boosters. Writing code in VS Code is simply faster and more pleasant than in any other tool.


## Using VS Code with Drawbot

Initially, I thought it would take some kind of VS Code extension to efficiently send code written in VC Code over to Drawbot, to run. After Googling and looking at various extensions meant to send text from VS Code to other apps and services, then looking for methods using a task runner like Gulp, I realized: you’re just editing the same document in two programs. Do you even need anything special to send text between them? As it turns out, not really.

Let’s say you create a file like `hello_world.py` in Drawbot. You can then open this in VS Code, type a new line of Python, hit `⌘ + S` to save, and then hit `⌘ + Tab` to move back to Drawbot. As soon as you’re back to Drawbot, the code updates. If you’re in “Live Coding” mode, it will also run instantly. If not, you can hit `⌘ + R` to run, as usual. 

Possibly, there *is* something that could act like BrowserSync does for web development, automatically running and injecting HTML, CSS, and JS on every “Save.” If anyone out there knows of such a tool, please let me know! Potentially, I may try again to find this, or find whether I can make this work on my own. Until then, however, editing the same file in both programs and toggling between them is pretty efficient for me, and certainly worth it to unlock VS Code as my text editor.


# Using GitHub for a Drawbot project
## First, let’s set up our remote repo on GitHub
1. If you don’t already have a GitHub account, sign up at https://github.com.
2. Next, you need a repository (“repo” for short – basically a folder for code). There are a few ways to create a new repository in GitHub, but one is to click the “plus” sign in the top right of the toolbar, next to your avatar.
<p class="screenshot">
<img src="./images/1.png">
</p>


3. Give your repo a simple title, and a description that would describe things to an outsider in one line.
  1. Repos are public by default. Partly, this is because the spirit of software development on GitHub is to be opensource-first, so that others can see what you’ve made and build on it themselves. If you want private repos, you can pay $7/month. I haven’t had a good reason to do this yet, but I might at some point.
  2. You can “Initialize this repository with a README” if you want to describe it further, but let’s skip that for now.
  3. Click the green “Create Repository” button to create your repo!

<span class="screenshot">
<img src="./images/2.png">
</span>


7. So long as you initialized without a README, you now see your repo, with instructions on how to set it up.

<span class="screenshot">
<img src="./images/3.png">
</span>


## Set up your local repo

Now that we have a “remote” repo (on GitHub’s servers), we can hook it up to a “local” repo on our computer. For this, we will use a command line. 


1. First things first: open up your terminal. 
  1. Go to Mac Spotlight (the magnifying glass in the top right of your Mac screen), and type “terminal” to open the terminal app
<p>
<img src="./images/4.png">
</p>


3. Now, we need to navigate to a folder where we want to keep our code project. 
1. The terminal looks intimidating if you’re not used to it, but you really only need to know a few things to be comfortable in it. 
    1. It’s a “command line interface” (CLI), where you interact with your computer through text commands, in contrast to “graphic user interfaces” (GUIs), where you use your mouse and interact with windows, buttons, etc. To run a command, you type it (or paste it in) and hit enter/return. 
    1. Run `ls` to "list” the files and folders in your current working directory (folders are called “directories” in the CLI)
    1. Run `cd FOLDER1/FOLDER2/etc`  to *change directory* to folder1, folder2, etc. Note: these are placeholders for your folder names. So, if `ls` shows that you have a folder called “code,” you would run `cd code`. If you know that a project “tm-drawbot” is inside “code,” you could navigate directly to it with `cd code/tm-drawbot`
    1. A simple way to navigate folders in the command line is by running `ls` to see what folders and files exist at your current location, then running `cd FOLDERNAME` to navigate a level deeper, and repeating this
    1. To make a new folder, run `mkdir FOLDERNAME`, short for “make directory”, ( “`FOLDERNAME`” is your desired folder name). It tends to be convenient to match your project’s folder name with the project name on GitHub. To make a new file in the current folder, run `touch FILENAME` . As you do this, keep in mind your current folder location (if you ever want to know this detail, you can always run `pwd`, short for “print working directory”.
    1. The command line takes separates command pieces with word spaces. So, if you ever need to enter a file or folder name that includes a space, you must “escape” it with a backslash, like `cd folder\ name\ with\ spaces`. For this reason, it tends to be useful to name folders and files with no spaces.
    1. Handy shortcut: if you have Finder open, and you find the specific folder you want to be in in the command line, you can simply drag it into command line to add in the full pathname, escaped spaces and all. 
    1. If you ever want to open your current directory in Finder, run `open .` and it’ll pop open.
2. You’ve changed directory into the folder holding your project, correct? I sometimes forget to do this. If you haven’t, do so by using `ls` and `cd` or via drag-and-drop, as described in step 1.
3. Now we will set up the folder as a Git repo. Let’s look at the instructions from GitHub, line by line:
  1. `echo "# drawbot" >> README.md` 👈 this creates a README file in the folder, so you can describe it for others, later on
  2. `git init` 👈 this “initializes” the folder as a git repo, by adding a hidden dot file
  3. `git add README.md` 👈 this adds your README.md file into the git history
  4. `git commit -m "first commit"`  👈 this makes your first “commit,” a signpost of where you are at in the history of the project
  5. `git remote add origin git@github.com:YOUR_USERNAME/YOUR_PROJECT.git`  👈 this hooks up your local repo to the remote repo on GitHub. Note: make sure you copy the proper HTTPS or SSH URL from your GitHub repo
  6. `git push -u origin master`  👈 this pushes your README up to the remote! Well done on your first git push!
  7. Hot Tip™: you can actually just copy/paste all six lines from GitHub into your command line and run them all at once, but it’s useful to know what each one does.
4. Now that you’ve pushed your project, go back to GitHub in your web browser, and refresh the page. It should now show that you have README.md in your project code, plus any other files that may have been in the folder you made into your git repo.

<span class="screenshot">
<img src="./images/5.png">
</span>

## Now, let’s make a new version of your project

We’re going to work in VS Code just a bit, now. If you haven’t already, download it from https://code.visualstudio.com/. 
Once you’ve installed it, go back into your Terminal window.

1. Just like you can open the current directory in Finder by running `open .`, you can open your current directory in VS Code by running `code .` – go ahead and do this now.

<img src="./images/6.png">



2. You should now have a VS Code window, along with your files displaying on the left side.
3. Try editing a file or creating a new one. If you’re following along with the Drawbot example, go into your drawbot script and make any change. I’ll add a second rectangle to my super-simple file.
```
    rect(100,100,100,100)
    rect(300,300,100,100) # adding a new rectangle
```
4. If VS Code prompts you to install “Linter pylint,” just click “Close” – we’ll handle this later.
5. If you don’t already have your script open in Drawbot, open Drawbot, then open the file you’ve just edited. 
  1. Edits in VS Code will show up in Drawbot as soon as you change from VS Code to Drawbot. You can change back and forth really quickly between apps with the shortcut `command + tab`. You can navigate back further by holding down `command` , and either hitting `tab` again or just by using `left` and `right` arrow keys (this is incredibly useful for using a Mac in general, so if you aren’t already using it … try it: you’ll love it).
6. Now for the cool part: using VS Code’s built-in Source Control manager (SCM). See how there’s a few icons on the left bar of VS Code? Click the one with the number badge on it. This will show the SCM sidebar. Any time you save a change to a file in a git repo, it will be added to this SCM sidebar.

<img src="./images/7.png">

7. When you click into the SCM sidebar, you should automatically be in the text input box – if not, click into it. Write a “commit message” here.
    1. A commit message can be anything short, but good commit messages are present-tense descriptions of the change(s) you’ve made, so that another person (or yourself, in the future) can see it in the git history and have a good idea of what changed with a given commit. Commits should happen pretty frequently, so you should never have to describe very many changes in any one commit message. If you are making a website, an example commit might be “Increased logo size” or “Changed button color in footer.”
    2. Here, I will write “added second rectangle”
    3. Use `command + enter` to make your commit. The files that were under “Changes” are now “commited” to your Git history, as a distinct point you can revert to in the history, if you want to (with the whole project, or just with a specific file or files).


8. Now, we just need to push your changes, so they’re on GitHub, and both backed up and ready to collaborate on and/or manage. Click the ••• icon in the top of the SCM sidebar, and select “Push.”  

<p class="screenshot">
<img src="./images/8.png">
</p>

9. Go to GitHub, and refresh the page. You should see your edited file, your commit message right next to it, and the time since you committed the change. Files that were changed earlier show their distinct commits.

<span class="screenshot">
<img src="./images/9.png">
</span>
</br>

💥 **Boom!** 💥 

You’ve made remote and local repos, edited your project in VS Code, and committed and pushed to GitHub. Now, you can keep track of your project, safely experiment, add and track to-do’s with GitHub issues, and ask other coders to collaborate, whether they’re a across the room or across the world.


# Notes

- If you followed along closely, your GitHub repo now has the file `.DS_Store` in it. It doesn’t really matter, but it doesn’t need to be there – it’s a macOS file, so we can remove it and “ignore” it in the future. Add the file `.gitignore` to the top-level of your project, and write `.DS_Store` in it (nothing else, for now). Make a commit like “Add gitignore with DS_Store.” 
  - Then go to your terminal, and in the project directory, run:
    git rm -r --cached . 
    git add .
  - That recursively removed all files from the Git Index, and then added in everything not set to be ignored (so, it will work with one ignored file or many). Now, commit that change:
    git commit -am "Remove ignored files"
  - And to send this cleaned-up state to GitHub, run `Git Push`, or push from VS Code (these both do the same thing).
  - [Answer found on Stack Overflow](https://stackoverflow.com/questions/1274057/how-to-make-git-forget-about-a-file-that-was-tracked-but-is-now-in-gitignore)
- Using Git tends to involve a fair amount of Googling. 90% of the time, VS Code has the functions you need, but occasionally, you’ll need to Google how to do certain things. To learn more about what you can do with Git, the book [Git for Humans](https://abookapart.com/products/git-for-humans) is excellent. There are also lots of [great](https://git-scm.com/doc) [docs](https://help.github.com/) [and](http://learngitbranching.js.org/) [tutorials](https://try.github.io/levels/1/challenges/1) [available](https://www.codecademy.com/learn/learn-git) for free online. If you’re in class with me, you can also ask me if Google and/or Stack Overflow aren’t turning something up within a few minutes of searching.
- If you're only ever working in the command line when you're also in VS Code, you might find it convenient to simply use the Terminal that is built into VS Code. For this, just go to `View > Integrated Terminal`, or use the shortcut `control + backtick` [iTerm2](https://www.iterm2.com/) is a nice upgrade from the standard Mac terminal.
- Are you having issues with the pylint linter install? If so, let me know, and I can let you know if I've figured it out, myself.
- One more fun thing about VS Code: [you can control the color theming for each "workspace,"](https://code.visualstudio.com/docs/getstarted/theme-color-reference) which is typically a project folder, but can also be any folder. For example, for this blog, I use my default theme, _One Dark Pro Vivid_, but in the subfolder that holds the markdown for blog posts, I've set up a light color scheme, so it feels a bit more like a writing environment. You can edit the sidebar, tabs, everything. Give it a shot!