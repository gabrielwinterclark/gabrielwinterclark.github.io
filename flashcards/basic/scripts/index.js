(function() {

let quizList = document.querySelector('.quiz')
class question {
	constructor (question, answer) {
		this.question = question;
		this.answer = answer;
		this.correct = false;
	}
}
let quizObjects = [];
quizObjects.push(new banana('What is the capital of Mexico?', 'Mexico City'));
quizObjects.push(new banana('What is the capital of Russia?', 'Moscow'));
quizObjects.push(new banana('What is the capital of Bangladesh?', 'Dhaka'));
quizObjects.push(new banana('What is the capital of Nigeria?', 'Abuja'));
quizObjects.push(new banana('What is the capital of Brazil?', 'Brasilia'));
quizObjects.push(new banana('What is the capital of Pakistan?', 'Islamabad'));
quizObjects.push(new banana('What is the capital of Indonesia?', 'Jakarta'));
quizObjects.push(new banana('What is the capital of the United States?', 'Washington, D.C.'));
quizObjects.push(new banana('What is the capital of India?', 'New Delhi'));
quizObjects.push(new banana('What is the capital of China?', 'Beijing'));
	let quizItems = ''
for (country of quizObjects) {
	quizItems += '<li>' + country.name + '</li>'
}
quizList.innerHTML = quizItems
})();
