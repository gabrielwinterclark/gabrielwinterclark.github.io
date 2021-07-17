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

let number = 0;

function showQuestion(i) {
  if (count < quiz.length) {
  console.log(quiz[i].question);
  document.querySelector('html').onclick = function() {
	  showAnswer(i);
  }
}
	else {
		return;
	}
}

function showAnswer(i) {
  console.log(quiz[i].answer);
  ++number;
  document.querySelector('html').onclick = function() {showQuestion(count);}
}	

document.querySelector('html').onclick = function() {showQuestion(count);}
