import React from 'react';
import GatsbyLink from 'gatsby-link';




class HelloFunc extends React.Component {

  const greeting = document.querySelector('.greeting');
  greeting.style.display = "none";

  const hand = document.querySelector('.hand');
  hand.style.display = "flex";

  const string = greeting.innerHTML;

  const array = string.split(' ');

  const body = document.querySelector('body');

  let i = 0;

  let lastX = 0;
  let lastY = 0;

  let fade = 0;

  printWords(e) {
    let {offsetX: x, offsetY: y} = e;
    if(this != e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
      }
    const offset = 37;
    //if it's far enough away from the last thing placed, run the function
    if ((x  > (lastX + offset)) || (x  < (lastX - offset)) || (y > (lastY + offset)) || (y < (lastY - offset))){
      hand.style.display = "none";
      //create positioned span of next word in greeting
      body.innerHTML += `
      <span class="fun-text" style="
        top:${y}px;
        left:${x}px;"
        >${array[i] + ' '}</span>
      `;
      // console.log(array[i]);
      // increment i to iterate through array
      (i == array.length - 1) ? i = 0 : i++;
      // set location of word just placed
      [lastX, lastY] = [x, y];
    }
  }
  body.addEventListener('mousemove', printWords);

  ///////touch handling

  const touchHere = document.querySelector(".touch");

  //take a and b from handleMove to feed into drawing coordinates
  touchPrint(a, b) {
    touchHere.style.display = "none";
    hand.style.display = "none";
    body.innerHTML += `
    <span class="fun-text" style="
      top:${b}px;
      left:${a}px;">${array[i] + ' '}</span>
    `;
    (i == array.length - 1) ? i = 0 : i++;
  }


  startup() {
    // var el = document.querySelector("body")[0];
    body.addEventListener("touchstart", handleStart, true);
    body.addEventListener("touchend", handleEnd, true);
    body.addEventListener("touchcancel", handleCancel, false);
    body.addEventListener("touchmove", handleMove, false);
    // log("initialized.");
  }
  startup();

  handleStart(e) {
    // e.preventDefault();
    console.log("handleStart", e.touches[0].clientX, e.touches[0].clientY);
    touchPrint(e.touches[0].clientX, e.touches[0].clientY);
  }
  handleEnd(e) {
    // e.preventDefault();
    console.log("handleEnd", e.touches[0].clientX, e.touches[0].clientY);
  }
  handleCancel(e) {
    // e.preventDefault();
    console.log("handleCancel", e.touches[0].clientX, e.touches[0].clientY);
  }
  handleMove(e) {
    // e.preventDefault();
    touchPrint(e.touches[0].clientX, e.touches[0].clientY);
    console.log("handleMove", e.touches[0].clientX, e.touches[0].clientY);
    // console.log(e);
  }
}