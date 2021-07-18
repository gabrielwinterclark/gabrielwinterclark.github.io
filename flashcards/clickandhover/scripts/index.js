//declare class question

class question {
	constructor (question,answer) {
		this.question = question;
		this.answer = answer;
	}
};

//delcare an array called quiz to store questions and answers
let quiz = [];

//create 3 new objects and push them onto the array
quiz.push(new question("What is the capital of Mexico?","Mexico City"));
quiz.push(new question("What is the capital of Russia?","Moscow"));
quiz.push(new question("What is the capital of Bangladesh?","Dhaka"));

let questionNumber = 0;

document.querySelector('html').onclick = function() {showQuestion(questionNumber);}

function showQuestion(i) {
  document.getElementById("answer").innerHTML = "";
  if (questionNumber < quiz.length) {
	document.getElementById("question").innerHTML = quiz[i].question;
  	}
  else {
	document.getElementById("question").innerHTML = "";
	return;
  }
}

function showAnswer(i) {
  document.getElementById("answer").innerHTML = quiz[i].answer;
  ++questionNumber;
  document.querySelector('html').onclick = function() {nextQuestion();
  }
}

function nextQuestion() {
  document.querySelector('html').onclick = function() {
	  showQuestion(questionNumber);
  document.getElementById("answer").innerHTML = "";
  }
}
