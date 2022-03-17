// linking html elements to javascript doc //
const startBtn = document.querySelector("#start-btn");
const questionsAnswers = document.querySelector(".box")
const questionText = document.querySelector("#question");
const answers = document.querySelector("#answerBox");
var endGameText = document.querySelector(".container");
// using let for these undefined classes as they will be redefined later //
let randomQuestion = undefined;
let currentQuestion = undefined;

var resetButton = document.querySelector(".reset-button");
var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var winCounter = 0;
// var loseCounter = 0;
var isWin = false;
var timer = undefined;
var timerCount = undefined;

// array of objects containing the questions and the answers //
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
        }

];
const questionLength = questionsList.length;
// click event for starting the game upon click of the start button //
startBtn.addEventListener("click", startGame);

// initial function run at the start of the game with some nested functions inside //
function startGame() {
    console.log("started")
    timerCount = 20
    timerElement.textContent = timerCount;
    startTimer()
    startBtn.classList.add("box")
    questionsAnswers.classList.remove("box")
    randomQuestion = questionsList.sort(() => Math.random() - .5)
    currentQuestion = 0
    nextQuestion()
}

// The winGame function is called when the win condition is met
function winGame() {
    winCounter++
    setWins()
  }
  
  // The loseGame function is called when timer reaches 0
  function gameOver() {
    endGameText.innerHTML = "Game Over!"
    return window.location.assign('highscores.HTML')
  }

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        gameOver();
      }
    }, 1000);
  }

// function that shows the next question upon the answering of the previous one //
    
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


// function that checks clicked answer against the correct type in the object //
function checkAnswers(e) {
    const answerPicked = e.target
    const correct = answerPicked.dataset.Correct
    if (correct && randomQuestion.length > currentQuestion) {
        winGame()
        nextQuestion()
    }   else if (correct && randomQuestion.length == currentQuestion) {
            gameOver();
        }
}

function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
  }
  

// These functions are used by init
function getWins() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
      winCounter = 0;
    } else {
      // If a value is retrieved from client storage set the winCounter to that value
      winCounter = storedWins;
    }
    //Render win count to page
    win.textContent = winCounter;
  }


