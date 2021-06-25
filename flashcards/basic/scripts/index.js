let quiz = document.querySelector("quiz")
class question {
	constructor (question, answer) {
		this.question = question;
		this.answer = answer;
		this.correct = false;
	}
}
let quiz = [];
quiz.push(new question('What is the capital of Mexico?', 'Mexico City'));
quiz.push(new question('What is the capital of Russia?', 'Moscow'));
quiz.push(new question('What is the capital of Bangladesh?', 'Dhaka'));
quiz.push(new question('What is the capital of Nigeria?', 'Abuja'));
quiz.push(new question('What is the capital of Brazil?', 'Brasilia'));
quiz.push(new question('What is the capital of Pakistan?', 'Islamabad'));
quiz.push(new question('What is the capital of Indonesia?', 'Jakarta'));
quiz.push(new question('What is the capital of the United States?', 'Washington, D.C.'));
quiz.push(new question('What is the capital of India?', 'New Delhi'));
quiz.push(new question('What is the capital of China?', 'Beijing'));
let i = 0;
while (i < quiz.length)  {
  console.log(quiz[i].question + ' ' + quiz[i].answer);
  ++i
}
