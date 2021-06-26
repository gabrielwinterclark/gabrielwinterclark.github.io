class question {
	constructor (question,answer) {
		this.question = question;
		this.answer = answer;
	}
}

let quiz = [];
quiz.push(new question('What is the capital of Mexico?','Mexico City'));
quiz.push(new question('What is the capital of Russia?','Moscow'));
quiz.push(new question('What is the capital of Bangladesh','Dhaka'));

// Loop through the array printing out the question and the 
for (let i = 0; i < quiz.length; i++) {
  console.log(quiz[i]);
}
var questionOne = document.getElementById(questionOne)
var questionTwo = document.getElementById(questionTwo)
var questionThree = document.getElementbyID(questionThree)
var answerOne = document.getElementbyID(answerOne)
var answerTwo = document.getElementbyID(answerTwo)
var answerThree = document.getElementbyID(answerThree)
				       
questionOne.addEventListener("click", myFunction);

function myFunction() {
  alert ("Test");
} 
