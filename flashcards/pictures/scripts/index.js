//declare class question

class question {
	constructor (question,answer,pictureinfo,picture) {
		this.question = question;
		this.answer = answer;
		this.pictureinfo = pictureinfo;
		this.picture = picture;
	}
};

//delcare an array called quiz to store questions and answers
let quiz = [];

//create variable names for any images that are going to be put into the array
var mexicoImage = document.getElementById("mexicoImage");
var russiaImage = document.getElementById("russiaImage");
var bangladeshImage = document.getElementById("bangladeshImage");

//hide the images for now
mexicoImage.style.visibility='hidden';
russiaImage.style.visibility='hidden';
bangladeshImage.style.visibility='hidden';

//create 3 new objects and push them onto the array, using the variables defined above to push any new images
quiz.push(new question("What is the capital of Mexico?","Mexico City","Can you identify this Mexico City landmark?", mexicoImage));
quiz.push(new question("What is the capital of Russia?","Moscow","Can you identify this Moscow landmark?", russiaImage));
quiz.push(new question("What is the capital of Bangladesh?","Dhaka","Can you identify this Dhaka landmark?", bangladeshImage));

//start questionNumber at 0; we start with the first question in the array
let questionNumber = 0;

//once the user clicks on the page, we show the first question
document.querySelector('html').onclick = function() {showQuestion(questionNumber);}

//create a function to move through the questions
function showQuestion(i) {

//remove the previous answer, picture info, and picture by changing the appropriate paragraphs in the HTML, if there was one (if it's the first question, the answer/picture/picture info should be blank anyway)
  document.getElementById("answer").innerHTML = "";
  document.getElementById("pictureinfo").innerHTML = "";
  document.getElementById("picture").innerHTML = "";
	
//if there are objects left, show the appropriate question by changing the "question" paragraph in the HTML
  if (questionNumber < quiz.length) {
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
	
//show the appropriate answer, picture, and picture info by changing the appropriate paragraphs in the HTML
  document.getElementById("answer").innerHTML = quiz[i].answer;
  document.getElementById("pictureinfo").innerHTML = quiz[i].pictureinfo;
  document.getElementById("picture").innerHTML = quiz[i].picture;
	
//add one to questionNumber so that we can move on to the next question
  ++questionNumber;
	
//wait for the user to click, then call a function so that we can move on to the next question (see below)	
  document.querySelector('html').onclick = function() {nextQuestion();
  }
}

//go back to the showQuestion function and start again for the next object
function nextQuestion() {
  document.querySelector('html').onclick = function() {
	  showQuestion(questionNumber);
	  
//remove the previous answer, picture, and picture info in the HTML to say nothing
  document.getElementById("answer").innerHTML = "";
  document.getElementById("pictureinfo").innerHTML = "";
  document.getElementById("picture").innerHTML = ""
  }
}
