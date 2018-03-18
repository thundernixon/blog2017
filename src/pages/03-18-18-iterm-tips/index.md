---
path: "/1-800-iterm-bling.html"
date: "2018-03-18T17:13:20+02:00"  
title: "Level up your terminal game with iTerm2’s Hotkey Window and text settings"
tags: ["command line", "code", "hot tips"]
publish: true
---

Occasionally, I’ll be talking with someone as I’m on my computer, and I pull up my terminal to enter a git command or something similar. If they use the terminal a lot but haven’t seen or tried the “hotkey window” in a terminal before, they sometimes react with, “*wait – what the heck was that??*” I remember when I first had that reaction, too, and I was glad when someone showed me how to look and feel like an elite hacker.

The secret is iTerm2, “a terminal emulator for macOS that does amazing things,” according to [its website](http://iterm2.com/). It’s super-customizable, and even though [Hyper](https://hyper.is/) terminal is more trendy these days, the hotkey window in iTerm2 works so much more smoothly than anything else I’ve tried. I love using multiple macOS spaces while I work, often using a web browser in one space, a code editor in another, and visual design tools in more spaces. With a hotkey window, I have a convenient terminal always at the ready, without worrying about switching my current space to enter a quick command.

## How to get iTerm and set up the “Hotkey Window”

Let’s set up the hotkey window:

1. Download [iTerm2](http://iterm2.com/), unzip it, move it to your applications folder, and right-click to open it.
2. Open the iTerm2 Preferences (It has a *lot* of settings, so in the past, setting it up on new computers has taken me some time to figure out again. That’s partly why I’m writing this guide). Since you'll be opening up the settings a lot while you set things up, remember that you can access Preferences with the shortcut `command`+`,`.
3. Go to the *Profiles* tab.
  1. Something quirky about iTerm2 is that it has overall settings *plus* “Profiles” which you can set up with different collections of settings – you can reconfigure every setting for each profile. This may seem complicated at first, but it’s useful in that it allows you to experiment with different setups. You could even use a completely different style of terminal based on what type of work you were doing, if you *really* live in the terminal. Anyway, for now we will simply set up a single profile to have a Hotkey window.
4. Go to the *Keys* section of the *Profiles* tab.

<p>
<img src="./images/iterm-profiles-keys.png" alt="iTerm2's Profiles and Keys tab" />
</p>

4. While you’re in the *Keys* section, check the box in the “Hotkey Window” section. 
5. Now, click the button labeled “Configure Hotkey Window…”
6. A panel with options slides down. Use “click to set” the Hotkey, then hit your desired key combo. 
  1. I use **control+space** for my hotkey combo, because it’s easy to hit with one hand, and it’s right next to my [Alfred app](https://www.alfredapp.com/) hotkey.
7. You can select other options, if you want. I personally like to select “Animate showing and hiding,” and I don’t find that the “Floating window” works very well (it stays behind my other windows, for whatever reason).

<p>
<img src="./images/iterm-configure-hotkey.png" alt="iTerm2's Hotkey Configuration panel" />
</p>


8. The last step to making this hotkey window work well is to make sure iTerm2 launches when you boot up your computer, *but also* that it launches in a hidden state. Otherwise, you’ll get a non-hotkey window when you boot it up, and you will have two iTerm2 windows to deal with, which can be confusing and annoying. To do this:
  1. Open your mac System Preferences, then go to *Users & Groups.*
  2. Go to the *Login Items* tab. These are all the apps that will start when you log into your mac user profile.
  3. Click the `+` button to add an item to this list, then navigate to your Applications folder and select iTerm.
  4. Mark the checkbox to “Hide” iTerm on log in. If you haven’t already done so, I highly recommend hiding *all* your login items so you aren’t greeting with a bunch of windows each time you power up your computer.


<p>
<img src="./images/mac_os-login-items.png" alt="macOS user login items" />
</p>


Well done! You should now be able to pull open your terminal with the quick press of a hotkey, and impress your friends with your elite hacking skills.

## Give yourself a better text cursor

Something a lot of new terminal users are thrown off by is that the cursor is a character-wide rectangle, and it edits the *left side* of itself, rather than the character it is highlighting. I’m guessing that many people who are used to this have justified it in their brains and think it’s natural enough. However, if something causes a consistent delay (however momentary) in the very basic function of knowing your input location, I say it’s a *fucking terrible design*. Luckily, it’s easy to change back to the more-familiar, better-designed, blinking vertical bar.

To change the cursor in iTerm, simply go to the *Text* tab of your Profile, then in the *Cursor* section select “Vertical Bar” and check “Blinking cursor.”

<p>
<img src="./images/iterm-profiles-text.png" alt="macOS user login items" />
</p>


In fact, this is also simple to change in the basic macOS Terminal app. The option is under *Profiles > Text > Cursor.* If you are teaching someone to use the terminal for the first time, it might be worth helping them to adjust this so they don’t get needlessly tripped up later on.

<p>
<img src="./images/mac-terminal-prefs-text.png" alt="macOS user login items" />
</p>



## Make text selectable with modifier keys

It was a revelation when I learned that modifier keys allowed me to travel around and select text with extra efficiency. If you work with text a lot, you probably already know about these, but briefly:

- Holding **option** (`⌥`) and hitting a left/right arrow key moves the cursor left/right, a word at a time
- Holding **command** (`⌘`) while hitting left/right arrows allows you to move to the beggining/end of the current line of text
- Holding **shift** (`⇧`) allows you to select the text you move the cursor across with arrow keys, including with **option** and **command** modifiers. 

It was annoying to me, then, that my efficient text maneuvering didn’t happen in the terminal. I know the terminal is from an earlier time, but does it *still* need to feel like the 1980s? No!

### Set option + arrow keys to move by whole words

1. Go to iTerm *Preferences > Profiles > Keys*
2. Click the `+` button to add in a key mapping
3. You will be adding in “hex codes” that connect key combo presses to actions in iTerm. The process is click to set your key combo, selecting “Send Hex Code” from the list of possible actions, and entering a specific code. There are a few more codes available on this Stack Overflow thread, but I find the most useful to be these:

**Move cursor to beginning of line** </br>
`⌘`+`←` & Send Hex Codes: `0x01`

**Move cursor to beginning of line** </br>
`⌘`+`→` & Send Hex Codes: `0x05`

**Move cursor left by one word** </br>
`⌥`+`←` & Send Hex Codes: `0x1b 0x62`

**Move cursor right by one word** </br>
`⌥`+`→` & Send Hex Codes: `0x1b 0x66`

**Enable “undo” (useful if you type or paste in the wrong command)** </br>
`⌘`+`z` & Send Hex Codes: `0x1f`

4. Some of these may clash with existing key mappings. If they aren’t working, go to *Preferences > Keys* and delete mappings that use the same key combos.

### Enable command+shift+arrow keys for selection of lines:


1. Profiles > Keys > [Add]
2. Enter in  `⌘`+`⇧`+`←` 
3. Select the action “Move Start of Selection Back”
4. Select the option “Move by line”
5. Then, make sure there isn’t a global hotkey overriding this.

…And do the reverse for moving the end of text selection forward.

A caveat to selecting whole lines: if you are in the standard bash shell or most ZSH themes, you will also be selecting whatever text is in front of your entered commands. So, if you enter `banner hello` and select the line, you will be selecting something like `bash-3.2$ banner hello`. If you find a better way to do this, let me know!


## Add aliases to speed up frequent tasks

It’s easy to set up “aliases” – key words that map to bigger commands – in the terminal. Check out my post [**Make the macOS command line super convenient with aliases**](https://typefloundry.com/aliases-on-the-mac_os-command-line) if you’re interested.

## Go further: Install zshell to get better theming and more conveniences

If you want to make your terminal even *nicer*, you can install Zshell, find a good theme, and use powerline fonts to really customize things. A solid course covering this and more is available in a Wes Bos video course at https://commandlinepoweruser.com/ (it’s free, and Wes Bos tutorials are great in general). 


## Happy commanding

Thanks for reading. If you have any questions, if you found this useful, or even if you just spot a typo, [let me know on Twitter](https://twitter.com/thundernixon)!