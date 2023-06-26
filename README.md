# Frontend Mentor - Multi-step form solution
This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). 
Also made express server with database to callect answers

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I'm proud with](#what-i-learned)


## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Links

- Live Site URL: https://multi-step-fullstack-e45e885f1be3.herokuapp.com/

## My process

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Node.js and express

### What I learned

How to create custom inputs like checkboxes and radio

```css
.custom-radio {
    background-color: var(--dark-blue-color);
    border-radius: 10em;
    display: flex;
    align-items: center;
    padding: 0.3em;
    gap: 0.5em;
}
.custom-radio input {
    opacity: 0;
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: #fff;
    width: 0.8em;
    height: 0.8em;
    border: 0;
    border-radius: 50%;
}

.custom-radio input:checked {
    opacity: 1;
}
.custom-radio input::before {
    box-shadow: inset 1em 1em #fff;
}
```
How to use throtteled versions of functions 
```js
const trottle = (fn, t) => {
    let arg;
    let blockUntil = -1;
    let tm;
    return function tr (...args) {
            if (Date.now() > blockUntil) {
                blockUntil = Date.now() + t;
                fn(...args);
            } else {
                clearTimeout(tm);
                arg = [...args];
                tm = setTimeout(()=>fn(...arg), blockUntil - Date.now())
            }
    }
}
```

And also I worked hard to make whole thing not hardcoded. So if I whant to make another form, I could build it from current components relatively quickly

