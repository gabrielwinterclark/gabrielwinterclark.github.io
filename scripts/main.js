// A snippet of code to replace Mozilla is Cool with Hello World
 
// Grab the heading in the document
var myHeading = document.getElementByID('alpha').textContent="Hello World!";

function changeColor(newColor) {
  var elem = document.getElementById('myPara');
  elem.style.color = newColor;
}
