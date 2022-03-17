// linking html elements to javascript doc //
const startBtn = document.querySelector("#start-btn");
const questionsAnswers = document.querySelector(".box")
const questionText = document.querySelector("#question");
const answers = document.querySelector("#answerBox");
const endGameText = document.querySelector(".container");
const resetButton = document.querySelector(".reset-button");
const timerElement = document.querySelector(".timer-count");
const win = document.querySelector(".win");
// using let for these undefined classes as they will be redefined later //
let randomQuestion = undefined;
let currentQuestion = undefined;
var timer = undefined;
var timerCount = undefined;
var winCounter = 0;


// Array of objects containing the questions and the answers //
const questionsList = [
        {
            Question: "Commonly used data types DO NOT include:",
            Answer: [
                {text: "Strings", Correct: false},
                {text: "Alerts", Correct: true},
                {text: "Numbers", Correct: false},
                {text: "Booleans", Correct: false}
            ]
        },
        {
            Question: "The condition of an if/else statement is stored inside a ________",
            Answer: [
                {text: "Quotes", Correct: false},
                {text: "Curly Brackets", Correct: false},
                {text: "Parenthesis", Correct: true},
                {text: "Square Brackets", Correct: false}
            ]

        },
        {
            Question: "Arrays in Javascript can be used to store ________",
            Answer: [
                {text: "Numbers", Correct: false},
                {text: "Strings", Correct: false},
                {text: "Other Arrays", Correct: false},
                {text: "All of the above", Correct: true}
            ]
        },
        {
            Question: "What does HTML stand for",
            Answer: [
                {text: "Hypertext Markup Langauge", Correct: true},
                {text: "Heres to My Love", Correct: false},
                {text: "Hypertext Markup Loading", Correct: false},
                {text: "None of the above", Correct: false}
            ]
        },
        {
            Question: "What tag is used to connect a stylesheet to your index.HTML file?",
            Answer: [
                {text: "Link tag", Correct: true},
                {text: "Script tag", Correct: false},
                {text: "Head tag", Correct: false},
                {text: "Stylesheet tag", Correct: false}
            ]
        }

];
// click event for starting the game upon click of the start button //
startBtn.addEventListener("click", startGame);

// initial function run when the start button is clicked, with some nested functions inside //
function startGame() {
    timerCount = 20
    timerElement.textContent = timerCount;
    startTimer()
    startBtn.classList.add("box")
    questionsAnswers.classList.remove("box")
    randomQuestion = questionsList.sort(() => Math.random() - .5)
    currentQuestion = 0
    nextQuestion()
}
  // The gameover function is called when timer reaches 0 or all questions are answered, this function stores your score to be used to submit a high score //
  function gameOver() {
    endGameText.innerHTML = "Game Over!"
    return window.location.assign('highscores.HTML')
  }

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;

      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        gameOver();
      }
    }, 1000);
  }

// function that shows the next question upon the correct answering of the previous one //
    function nextQuestion() {
    reset()
    showQuestion(randomQuestion[currentQuestion++]) 
}

// function that populates the html with a random question and potential answers from the questionsList array //
function showQuestion(questionsList) {
    questionText.innerText = questionsList.Question;
    questionsList.Answer.forEach(Answer => {
        const button = document.createElement('button')
        button.innerHTML = Answer.text
        button.classList.add("btn")
        if (Answer.Correct) {
            button.dataset.Correct = Answer.Correct
        }   
        button.addEventListener("click", checkAnswers)
        answers.appendChild(button)
        
    })
}

// clears the original html buttons from the screen //
function reset() {
    while (answers.firstChild) {
        answers.removeChild
        (answers.firstChild)
    }
}


    
// function that checks clicked answer against the correct type in the object and acts accordingly //
function checkAnswers(e) {
    const answerPicked = e.target
    const correct = answerPicked.dataset.Correct
    if (correct && randomQuestion.length > currentQuestion) {
        win.innerHTML++
        localStorage.setItem("mostRecentScore", win.innerHTML)
        nextQuestion()
    }   else if (correct && randomQuestion.length == currentQuestion) {
            win.innerHTML++
            localStorage.setItem("mostRecentScore", win.innerHTML)
            gameOver();
        } 
        // Subtracts an additional second for every wrongly clicked answer, theres only 4 seconds per question anyway so thats a big enough penalty //
            else if (!correct) {
            timerCount--
        }
}

  