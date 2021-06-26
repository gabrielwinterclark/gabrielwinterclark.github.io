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

// Loop through the array printing out the question and the answer
let i = 0;
while (i < quiz.length)  {
  console.log(quiz[i].question + ' ' + quiz[i].answer);
  ++i
}
