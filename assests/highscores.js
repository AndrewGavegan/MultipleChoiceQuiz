const highScoresList = document.querySelector('#highScoresList')


function renderHighscore() {
    var lastScore = JSON.parse(localStorage.getItem("winCount"))
    var initials = document.getElementById('initials').value
     if (lastScore !== null) {
         highScoresList.innerHTML = initials + ": " + lastScore
         localStorage.setItem("playerInitials", initials);
     } else {
         return
     }
}

var save = document.querySelector("#saveBtn")

save.addEventListener("click", function(event) {
    event.preventDefault()
    renderHighscore()
})