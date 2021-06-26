//declare class question

class question {
	constructor (question,answer) {
		this.question = question;
		this.answer = answer;
	}
}

//grab questions, answers, and next buttons from HTML and assign variable names

var questionOne = document.getElementById("questionOne");
var questionTwo = document.getElementById("questionTwo");
var questionThree = document.getElementById("questionThree");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var nextOne = document.getElementById("nextOne");
var nextTwo = document.getElementById("nextTwo");

//hide everything but the first question until later

answerOne.style.visibility = 'hidden';
questionTwo.style.visibility = 'hidden';
answerTwo.style.visibility = 'hidden';
questionThree.style.visibility = 'hidden';
answerThree.style.visibility = 'hidden';
nextOne.style.visibility = 'hidden';
nextTwo.style.visibility = 'hidden';

//delcare an array called quiz
let quiz = [];

//create 3 new objects and push them onto the array
quiz.push(new question("What is the capital of Mexico?","Mexico City"));
quiz.push(new question("What is the capital of Russia?","Moscow"));
quiz.push(new question("What is the capital of Bangladesh?","Dhaka"));

//loop through the array printing out the question and the answer in the console
for (let i = 0; i < quiz.length; i++) {
  console.log(quiz[i].question);
}

//print a message explaining that the user must hover to see answers

console.log("Please hover over the question to see the answer.")

//add a listener event for each question to display the answer when the question is clicked, make next buttons visible, and explain again to the user that they must hover to see answers				       

questionOne.addEventListener("mouseover", myFunctionOne);

function myFunctionOne() {
  answerOne.style.visibility = 'visible';
  nextOne.style.visibility = 'visible';	
  console.log(quiz[0].answer)
  console.log("Please hover over the question to see the answer.");
}

questionTwo.addEventListener("mouseover", myFunctionTwo);

function myFunctionTwo() {
  answerTwo.style.visibility = 'visible'
  nextTwo.style.visibility = 'visible';
  console.log(quiz[1].answer);
  console.log("Please hover over the question to see the answer.";
}
	
questionThree.addEventListener("mouseover", myFunctionThree);

function myFunctionThree() {
  answerThree.style.visibility = 'visible';
  nextTwo.style.visibility = 'hidden';
  console.log(quiz[2].answer)
}

//add listener event for next buttons

nextOne.addEventListener("click", myNextOneFunction);

function myNextOneFunction( ) {
	nextOne.style.visibility = 'hidden';
	questionOne.style.visibility = 'hidden';
	answerOne.style.visibility = 'hidden';
	questionTwo.style.visibility = 'visible';
}	

nextTwo.addEventListener("click", myNextTwoFunction);

function myNextTwoFunction( ) {
	nextTwo.style.visibility = 'hidden';
	questionTwo.style.visibility = 'hidden';
	answerTwo.style.visibility = 'hidden';
	questionThree.style.visibility = 'visible';
}
