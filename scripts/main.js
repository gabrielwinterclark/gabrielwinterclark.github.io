// A snippet of code to replace Mozilla is Cool with Hello World
 
// Grab the heading in the document
const myHeading = document.getElementByID('title');
 
// Replace the heading text with Hello World!

myHeading.textContent = 'Hello world!';
function changeColor(newColor) {
  var elem = document.getElementById('myPara');
  elem.style.color = newColor;
}