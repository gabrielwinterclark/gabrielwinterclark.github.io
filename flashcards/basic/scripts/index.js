//declare class question

class question {
	constructor (question,answer) {
		this.question = question;
		this.answer = answer;
	}
}

//delcare an array called quiz to store questions and answers
let quiz = [];

//create 3 new objects and push them onto the array
quiz.push(new question("What is the capital of Mexico?","Mexico City"));
quiz.push(new question("What is the capital of Russia?","Moscow"));
quiz.push(new question("What is the capital of Bangladesh?","Dhaka"));

//loop through the array printing out the question in the console, and then waiting for the user to click before the answer is shown
function showQuestion(i) {
  for (let i = 0; i < quiz.length; i++) {
  console.log(quiz[i].question);
  document.querySelector('html').onclick = function() {
	  showAnswer(i);
  }
}
}

function showAnswer(i) {
  console.log(quiz[i].answer);
  ++i;
  document.querySelector('html').onclick = function() {showQuestion(i);}
}	

document.querySelector('html').onclick = function() {showQuestion(i);}
