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

//declare a variable called "questionNumber" and set it equal to 0 - so we can access this variable outside the if/else code below
let questionNumber = 0;

//create a function that displays questions one at a time
function showQuestion(i) {
  if (questionNumber < quiz.length) {
	document.getElementById("question").innerHTML = quiz[i].question;
  	}
  }
  else {
	return;
  }
}

//make a function that will show the answer of each question after the user clicks
function showAnswer(i) {
  document.getElementById("moveOn").style.visibility = hidden;

//add one to questionNumber so that we can move through the questions
  ++questionNumber;
//add another handler so that when the user clicks, the next question is shown and we move back to the showQuestion function
  document.querySelector('html').onclick = function() {
	  showQuestion(questionNumber);
  }
}	
