
const username = document.getElementById('username')
var finalScore = document.getElementById('finalScore')
const returnBtn = document.getElementById('returnBtn')
var highScoresList = document.getElementById('highScoresList')

returnBtn.addEventListener('click', () =>{
    return window.location.assign("index.HTML")
})


const mostRecentScore = localStorage.getItem('mostRecentScore')
finalScore.innerHTML = "You got " + mostRecentScore + " points!";
username.addEventListener("keyup", () => {
    // console.log(username.value);
})

const MAX_HIGH_SCORES = 5
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

var save = document.querySelector("#saveBtn")
save.addEventListener("click", function(event) {
    event.preventDefault()
    console.log("i clicked this button")

    score = {
        score: mostRecentScore,
        name: username.value
    }
    highScores.push(score)

    highScores.sort((a, b) => b.score - a.score)

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores))

})

highScoresList.innerHTML = highScores.map(score => {
    return `<li class="nameList">${score.name}-${score.score}</li>`;}).join('');