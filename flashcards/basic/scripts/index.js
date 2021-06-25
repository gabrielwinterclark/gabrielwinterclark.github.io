(function() {

let quizList = document.querySelector('.quiz')

let quizObjects = [
	{
	"question" = "What is the capital of Mexico?",
	"answer" = "Mexico City"
	},
	{
	"question" = "What is the capital of Russia?",
	"answer" = "Moscow"
	},
	{
	"question" = "What is the capital of Bangladesh?",
	"answer" = "Dhaka"
	}
];
	let quizItems = ''
for (country of quizObjects) {
	quizItems += '<li>' + country.name + '</li>'
}
quizList.innerHTML = quizItems
})();
