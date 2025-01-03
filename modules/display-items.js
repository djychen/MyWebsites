//import { toggleHiddenElement, changeToFunkyColor } from './dom-functions.js';
import domFunctions from './dom-functions.js';
const { toggleHiddenElement, changeToFunkyColor } = domFunctions;

const buttonElement1 = document.getElementById('item-button1');
const pElement1 = document.getElementById('item-p1');
const buttonElement2 = document.getElementById('item-button2');
const pElement2 = document.getElementById('item-p2');
const buttonElement3 = document.getElementById('item-button3');
const pElement3 = document.getElementById('item-p3');

function addButtonBehavior(button, element) {
  button.addEventListener('click', () => {
    toggleHiddenElement(element);
    /* setInterval(() => changeToFunkyColor(element), 200); */
  });
};

addButtonBehavior(buttonElement1, pElement1);
addButtonBehavior(buttonElement2, pElement2);
addButtonBehavior(buttonElement3, pElement3);
