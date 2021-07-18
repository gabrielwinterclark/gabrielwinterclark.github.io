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

//start questionNumber at 0; we start with the first question in the array
let questionNumber = 0;

//once the user clicks on the page, we show the first question
document.querySelector('html').onclick = function() {showQuestion(questionNumber);}

//create a function to move through the questions
function showQuestion(i) {
	
//if there are objects left, show the appropriate question by changing the "question" paragraph in the HTML
  if (questionNumber < quiz.length) {

//remove the previous answer by changing the "answer" paragraph in the HTML, if there was one (if it's the first question, the answer should be blank anyway)
        document.getElementById("answer").innerHTML="";
	  
//and then show the question
	document.getElementById("question").innerHTML = quiz[i].question;
  	}
	
//if not, make the "question" paragraph in the HTML blank
  else {
	document.getElementById("question").innerHTML = "";
	return;
  }
}

//make a function to show each answer
function showAnswer(i) {
	
//show the appropriate answer by changing the "answer" paragraph in the HTML
  document.getElementById("answer").innerHTML = quiz[i].answer;
	
//add one to questionNumber so that we can move on to the next question
  ++questionNumber;
	
//wait for the user to click, then call a function so that we can move on to the next question (see below)
  document.querySelector('html').onclick = function() {nextQuestion();
  }
}
	  
//the function
function nextQuestion() {
	
//go back to the showQuestion function and start again for the next object
	  showQuestion(questionNumber);
	  
//remove the previous answer by setting the "answer" paragraph in the HTML to say nothing
	  document.getElementById("answer").innerHTML = "";
  }
