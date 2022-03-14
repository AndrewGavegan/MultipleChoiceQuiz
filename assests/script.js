const startBtn = document.querySelector("#start-btn");
const questionsAnswers = document.querySelector(".box")
const questionText = document.querySelector("#question");
const answers = document.querySelector("#answerBox");
let randomQuestion = undefined;
let currentQuestion = undefined;
const questionsList = [
        {
            Question: "Commonly used data types DO NOT include:",
            Answer: [
                {text: "Strings", Correct: false},
                {text: "Alerts", Correct: true},
                {text: "Numbers", Correct: false},
                {text: "Booleans", Correct: false}
            ]
        }
];


startBtn.addEventListener("click", startGame);

function startGame() {
    console.log("started")
    startBtn.classList.add("box")
    questionsAnswers.classList.remove("box")
    randomQuestion = questionsList.sort(() => Math.random() - .5)
    currentQuestion = 0
    nextQuestion()
}

function nextQuestion() {
    showQuestion(randomQuestion[currentQuestion])
}

function showQuestion(questionsList) {
    questionText.innerText = questionsList.Question;
    questionsList.Answer.forEach(Answer => {
        const button = document.createElement('button')
        button.innerHTML = Answer.text
        button.classList.add("btn")
        
        answers.appendChild(button)
    })
}

function checkAnswers() {

}