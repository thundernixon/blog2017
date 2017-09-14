---
path: "/handle-events-in-gatsbyjs-components.html"
date: "2017-09-14T09:49:16.408Z" 
title: "Handle events to manipulate the DOM in GatsbyJS React components"
tags: ["react", "gatsby", "code", "javascript, "es6"]
publish: true
---

**My initial question:**


> I’ve recently been working on a blog using GatsbyJS, which is based on React. https://typefloundry.com
> 
> The main challenge I have with it right now is how to the use javascript to manipulate the DOM in react. I know basic javascript, but my basic knowledge is querying for an element, adding an event listener, and triggering a function with that, such as adding CSS or HTML to the page. However, my initial efforts aren’t working in React. I’d love to do simple things with JS like grabbing the first letter of a blog post then duplicating that as a “drop cap” to the side of the post, or converting my “About” page into an overlay, rather than a separate page.
> 
> I _think_ it’s mostly a matter of properly figuring out the lifecycle methods like “ComponentDidMount,” and probably about setting the state. But, even after going through the Wes Bos _React for Beginners_ video course, I am still unsure of this.
> 
> Have any of you found any especially good tutorials/videos for manipulating the DOM in React? Am I on the right track with what I need to explore, or is there something else I should be looking at?

**Responses from Learning Gardens:**
**nickbytes** 
I've had to do a drop cap on a few sites, and i've always used the `::first-letter` pseudo selector, pretty decent support http://caniuse.com/#search=first-letter

As for general react ecosystem knowledge, I have a channel of some resources I've really liked https://www.are.na/nick-beattie/roadmap-to-javascript-enlightenment (edited)

Here's an example of a pretty common modal library https://reactcommunity.org/react-modal/

Sometimes you can do basic modals by something something like

     className={`modal ${this.state.modalVisible
                ? "modal--open"
                : "modal--close"}`}
            >
      <h1>Modal Content</h1>
    </div>

Use `modal--open`and `modal--close` to handle where/how modal is shown

^^^^ you'll need to do a little work to make sure thats accessible

Docs have a decent overview of events https://facebook.github.io/react/docs/handling-events.html which you've probably seen. (edited)

Depending on what you want to do with the DOM, `componentDidMount` can be a fine time to manipulate it.

If you have any more questions (or code), would be more than willing to help out

also, cool site!

**tarngerine**
so generally you shouldn't be manipulating the DOM with JS outside of a react component after it's been rendered. the render() function should contain all the logic for displaying different states, and should only change whenever the component's state changes.
i agree w everything nick says above, but i'd add that one thing i love about react is that i don't have to use JS to manipulate CSS classes to get dynamic behavior — i can just code that into the component itself
so for the example of the modal, rather than applying a class to the modal
that shows or hides it, i'd use the render() function to decide whether or not to even render it

    render: function() {
      const modal = (
        stuff here
      );
      return (
        About
        {this.state.showModal ? modal : ''}
      );
    }


# How to actually make a modal work in a component

It *was super useful to follow Nick’s suggestion and read the React documentation about* [*Handling Events*](https://facebook.github.io/react/docs/handling-events.html) *. I basically followed along with that, and was able to modify it for my use case. If you are specifically trying to make a modal show up, and you are still confused after reading through that, come back here and try to follow this example.*


## Set up the modal

The general structure you need to set up of this component is (step-by-step is below):

    //import stuff
    import React, { Component } from 'react';
    
    //the class you are making your component from
    class AboutModal extends Component {
      // constructor to set state and bind "this"
      constructor(props) {
          super(props);
          this.state = {showModal: false};
          this.handleClick = this.handleClick.bind(this);
        }
    
      // function to handle the click
       handleClick() {
        this.setState(prevState => ({
          showModal: !prevState.showModal
        }));
      }
      
      // the render() method to put stuff into the DOM
      render() {
        // the modal you will toggle on and off
        const modal = (
          <div className="modal">
            Hello, my name is Godzilla
          </div>
        );
        
        // the return() to put your default HTML into the DOM
        return (
            // wrapper div of component
            <div className="about">
              // 
              <div className='button' onClick={this.handleClick}>
                Open Modal
              </div>
              // where you want the modal to show up
              {this.state.showModal ? modal : ''} 
            </div>
        );
      }
    }
    // export the class so you can call it elsewhere
    export default AboutModal;



1. First, bind `this` in the component, by 
  1. setting a default state of the variable, and 
  2. binding the function you’ll create next
    constructor(props) {
          super(props);
          this.state = {showModal: false};
          this.handleClick = this.handleClick.bind(this);
        }
2. Then, create the function to toggle the true/false value of your state.
    handleClick() {
        this.setState(prevState => ({
          showModal: !prevState.showModal
        }));
      }
3. Include the event handler in your link/div/button/whatever, by simply using an `onClick` to cue the function
    <div className='button' onClick={this.handleClick}>
      Open Modal
    </div>
4. At the start of your `render()` method, make a const to hold the modal
    const modal = (
          <div className="modal">
            Hello, my name is Godzilla
          </div>
        );



## Allow a user to close the modal

Now that the modal opens, you probably want to make it close. For this, I chose to include an “X” button. 

1. You basically need a button that will trigger the same handleClick function onClick. Update the `modal` variable to include the following:
    const modal = (
          <div className="modal">
            Hello, my name is Godzilla
            <div className="exit" onClick={this.handleClick}>
              X
            </div>
          </div>
        );
            


## Give it some style

I’m using [Styled Components](https://www.styled-components.com/docs/basics) for this. I’m even more new to this than to React, so it’s taken some getting used to, but I’m liking it so far. Certainly for this task, it is useful.


1. Overall, the process is super simple. If you want to style something, you change the name of its element, similar to how you name components in React, in general. So, say I want to style the “button that opens the about modal.” Instead of adding a class, I change the element `<div>…</div>` to `<OpenAbout>…</OpenAbout>`. 
  1. Above the `render()` method, I can add a `const` to set the CSS styles of the <OpenAbout> element. The basic things I want are for it to act like a link for users, but making their cursor turn into the little pointing hand.
    const OpenAbout = styled.div`
      cursor: pointer;
      `;
2. **Now for the tricky part: conditional styling.** It wasn’t immediately clear how to do this, from the Styled Components docs. My modal will have a slightly-transparent background, and “replace” this “OpenAbout” button with a “close” button. So, I want to hide this OpenAbout button *if* the modal is showing. This requires using a “prop” in the element to fill in a CSS attribute.
  1. In the `<OpenAbout>` opening element tag, you can add `*display*``={``*this*``.state.showModal ? "none" : "block"}`. Basically, this says, “***if*** showModal is true (the modal is open),  *do not* *display* the Open button (display: none, because we want the Open button hidden), ***otherwise*** *do display* the Open button (display: block, to make it show, so people can click it to open the modal).”
  2. Almost there! Now, to make the OpenAbout CSS respect this prop, update its variable to:
    const OpenAbout = styled.div`
      cursor: pointer;
      display: ${props => props.display};
      `;
3. Let’s do one more thing to this button: on larger screens, I want it to stick in the bottom-left corner. If you’re used to Sass, this is super easy – just update the CSS to:
    const OpenAbout = styled.div`
        cursor: pointer;
        display: ${props => props.display};
        @media (min-width: 1040px) {
            position: fixed;
            bottom: 2.25rem;
            left: 2.25rem;
        }
      `;


Warning: `will-change: transform;` blocked my `position: fixed` close button, and was really tricky to catch. [According to a Stack Overflow answer](https://stackoverflow.com/questions/15194313/transform3d-not-working-with-position-fixed-children), this is because transforms create their own coordinate system, which overrides the browser

