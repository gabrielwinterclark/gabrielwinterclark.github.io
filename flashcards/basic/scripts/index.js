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

//delcare an array called quiz
let quiz = [];

//create 3 new objects and push them onto the array
quiz.push(new question('What is the capital of Mexico?','Mexico City'));
quiz.push(new question('What is the capital of Russia?','Moscow'));
quiz.push(new question('What is the capital of Bangladesh','Dhaka'));

//loop through the array printing out the question and the answer in the console
for (let i = 0; i < quiz.length; i++) {
  console.log(quiz[i]);
}

//add a listener event for each question to display the answer when the question is clicked				       
questionOne.addEventListener("click", myFunction);

function myFunction() {
  alert (answerOne);
}

questionTwo.addEventListener("click", myFunction);

function myFunction() {
  alert (answerTwo);
}

questionThree.addEventListener("click", myFunction);

function myFunction() {
  alert (answerThree);
}
