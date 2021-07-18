//declare class question

class question {
	constructor (question,answer) {
		this.question = question;
		this.answer = answer;
	}
};

var q = document.getElementById("question");
var a = document.getElementById("answer");

//delcare an array called quiz to store questions and answers
let quiz = [];

//create 3 new objects and push them onto the array
quiz.push(new question("What is the capital of Mexico?","Mexico City"));
quiz.push(new question("What is the capital of Russia?","Moscow"));
quiz.push(new question("What is the capital of Bangladesh?","Dhaka"));

let questionNumber = 0;

function showQuestion(i) {
  document.getElementById("answer").innerHTML = "";
  if (questionNumber < quiz.length) {
	q = quiz[i].question;
  	}
  else {
	q = "";
	return;
  }
}

function showAnswer(i) {
  a = quiz[i].answer;
  ++questionNumber;
  document.querySelector('html').onclick = function() {nextQuestion();
  }
}

function nextQuestion() {
  document.querySelector('html').onclick = function() {
	  showQuestion(questionNumber);
  a = "";
  }
}	

document.querySelector('html').onclick = function() {showQuestion(questionNumber);}
