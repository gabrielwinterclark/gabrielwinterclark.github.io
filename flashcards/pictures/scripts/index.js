//declare class question

class question {
	constructor (question,answer) {
		this.question = question;
		this.answer = answer;
	}
}

//grab questions, answers, next buttons, images, and image questions from HTML and assign variable names to work with

var questionOne = document.getElementById("questionOne");
var questionTwo = document.getElementById("questionTwo");
var questionThree = document.getElementById("questionThree");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var nextOne = document.getElementById("nextOne");
var nextTwo = document.getElementById("nextTwo");
var cathedraltext = document.getElementById("cathedraltext");
var revoluciontext = document.getElementById("revoluciontext");
var memorialtext = document.getElementById("memorialtext");
var cathedralimage = document.getElementById("cathedralimage");
var revolucionimage = document.getElementById("revolucionimage");
var memorialimage = document.getElementById("memorialimage");

//hide everything but the first question until later so that we only see one question at a time

answerOne.style.visibility = 'hidden';
questionTwo.style.visibility = 'hidden';
answerTwo.style.visibility = 'hidden';
questionThree.style.visibility = 'hidden';
answerThree.style.visibility = 'hidden';
nextOne.style.visibility = 'hidden';
nextTwo.style.visibility = 'hidden';
cathedraltext.style.visibility = 'hidden';
revoluciontext.style.visibility = 'hidden';
memorialtext.style.visibility = 'hidden';
cathedralimage.style.visibility = 'hidden';
revolucionimage.style.visibility = 'hidden';
memorialimage.style.visibility = 'hidden';

//declare an array called quiz to store questions and answers for printing to console
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
  revolucionimage.style.visibility = 'visible';
  revoluciontext.style.visibility = 'visible';
  console.log(quiz[0].answer);
}

questionTwo.addEventListener("mouseover", myFunctionTwo);

function myFunctionTwo() {
  answerTwo.style.visibility = 'visible'
  nextTwo.style.visibility = 'visible';
  cathedralimage.style.visibility = 'visible';
  cathedraltext.style.visibility = 'visible';
  console.log(quiz[1].answer);
}
	
questionThree.addEventListener("mouseover", myFunctionThree);

function myFunctionThree() {
  answerThree.style.visibility = 'visible';
  nextTwo.style.visibility = 'hidden';
  memorialimage.style.visibility = 'visible';
  memorialtext.style.visibility = 'visible';
  console.log(quiz[2].answer);
}

//add listener event for next buttons so that user can proceed to next question when they click next

nextOne.addEventListener("click", myNextOneFunction);

function myNextOneFunction( ) {
	nextOne.style.visibility = 'hidden';
	questionOne.style.visibility = 'hidden';
	answerOne.style.visibility = 'hidden';
	questionTwo.style.visibility = 'visible';
	revolucionimage.style.visibility = 'hidden';
	revoluciontext.style.visibility = 'hidden';
	console.log("Please hover over the question to see the answer.");
}	

nextTwo.addEventListener("click", myNextTwoFunction);

function myNextTwoFunction( ) {
	nextTwo.style.visibility = 'hidden';
	questionTwo.style.visibility = 'hidden';
	answerTwo.style.visibility = 'hidden';
	questionThree.style.visibility = 'visible';
	cathedraltext.style.visibility = 'hidden';
	cathedralimage.style.visibility = 'hidden';
	console.log("Please hover over the question to see the answer.");
}
