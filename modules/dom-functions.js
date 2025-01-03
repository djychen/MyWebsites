/* dom-functions.js */
/* accepts a domElement as an input and either shows or hides that element depending on its current display style value. */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}

/* accepts a domElement as an input and then sets its background color to a random */
const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
        
  domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}

//export { toggleHiddenElement, changeToFunkyColor };
const resources = { 
  toggleHiddenElement, 
  changeToFunkyColor
}

export default resources;
