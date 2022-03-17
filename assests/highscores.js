// linking html elements to javascript doc //
const username = document.getElementById('username')
var finalScore = document.getElementById('finalScore')
const returnBtn = document.getElementById('returnBtn')
var highScoresList = document.getElementById('highScoresList')
var save = document.querySelector("#saveBtn")

// event for play again button to take you back to the game //
returnBtn.addEventListener('click', () =>{
    return window.location.assign("index.HTML")
})

// creating a variable that holds the stored score that you got, then prints it next to some strings to remind you what you got //
const mostRecentScore = localStorage.getItem('mostRecentScore')
finalScore.innerHTML = "You scored " + mostRecentScore + "!   ";


const MAX_HIGH_SCORES = 5
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// mapping and printing any existing highscores and names onto the screen upon loading the page //
highScoresList.innerHTML = highScores.map(score => {
    return `<li class="nameList">Player: ${score.name} /  Score: ${score.score}</li>`;}).join('');

// when save is clicked default is prevented, input is combined with what you scored, pushed into the highscores array, checked agaisnt the other high scores,//
// if it is in the top 5 scores that are stored, it is converted to a string, which is then displayed in innerHTML of the UL we have //
// input bar and save button are taken away upon submitting to prevent submitting the same score multiple times //
save.addEventListener("click", function(event) {
    event.preventDefault()
    
    score = {
        score: mostRecentScore,
        name: username.value
    }
    highScores.push(score)

    highScores.sort((a, b) => b.score - a.score)

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores))
    
    username.style.display = 'none';
    saveBtn.style.display = 'none';
    
    highScoresList.innerHTML = highScores.map(score => {
    return `<li class="nameList">Player: ${score.name} /  Score:${score.score}</li>`;}).join('');
})

