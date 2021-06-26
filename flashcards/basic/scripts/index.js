//declare class question

class question {
	constructor (question,answer) {
		this.question = question;
		this.answer = answer;
	}
}

//grab questions and answers from HTML and assign variable names

var questionOne = document.getElementById("questionOne");
var questionTwo = document.getElementById("questionTwo");
var questionThree = document.getElementById("questionThree");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");

//hide the answers until later
answerOne.style.visibility = 'hidden';
answerTwo.style.visibility = 'hidden';
answerThree.style.visibility = 'hidden';

//delcare an array called quiz
let quiz = [];

//create 3 new objects and push them onto the array
quiz.push(new question("What is the capital of Mexico?","Mexico City"));
quiz.push(new question("What is the capital of Russia?","Moscow"));
quiz.push(new question("What is the capital of Bangladesh?","Dhaka"));

//loop through the array printing out the question and the answer in the console
for (let i = 0; i < quiz.length; i++) {
  console.log(quiz[i]);
}

//add a listener event for each question to display the answer when the question is clicked				       

questionOne.addEventListener("click", myFunctionOne);

function myFunctionOne() {
  answerOne.style.visibility = 'visible';
}

questionTwo.addEventListener("click", myFunctionTwo);

function myFunctionTwo() {
  answerTwo.style.visibility = 'visible';
}

questionThree.addEventListener("click", myFunctionThree);

function myFunctionThree() {
  answerThree.style.visibility = 'visible';
}

//add a listener event for each question to display an alert on hover explaining that the user needs to click to see the answer

questionOne.addEventListener("mouseover", myHoverFunction);
questionTwo.addEventListener("mouseover", myHoverFunction);
questionThree.addEventListener("mouseover", myHoverFunction);

function myHoverFunction() {
  console.log("Please click the question to view the answer!");
}
