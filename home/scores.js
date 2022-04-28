const Quiz1ScoresList = document.querySelector('#Quiz1ScoresList')
const Quiz1Scores = JSON.parse(localStorage.getItem("Quiz1Scores")) || []

Quiz1ScoresList.innerHTML =
Quiz1Scores.map(score => {
    return `<li class="Score">${score.name} - ${score.score}</li>`
}).join("")

const Quiz2ScoresList = document.querySelector('#Quiz2ScoresList')
const Quiz2Scores = JSON.parse(localStorage.getItem("Quiz2Scores")) || []

Quiz2ScoresList.innerHTML =
Quiz2Scores.map(score => {
    return `<li class="Score">${score.name} - ${score.score}</li>`
}).join("")

const Quiz3ScoresList = document.querySelector('#Quiz3ScoresList')
const Quiz3Scores = JSON.parse(localStorage.getItem("Quiz3Scores")) || []

Quiz3ScoresList.innerHTML =
Quiz3Scores.map(score => {
    return `<li class="Score">${score.name} - ${score.score}</li>`
}).join("")

const Quiz4ScoresList = document.querySelector('#Quiz4ScoresList')
const Quiz4Scores = JSON.parse(localStorage.getItem("Quiz4Scores")) || []

Quiz4ScoresList.innerHTML =
Quiz4Scores.map(score => {
    return `<li class="Score">${score.name} - ${score.score}</li>`
}).join("")

const Quiz5ScoresList = document.querySelector('#Quiz5ScoresList')
const Quiz5Scores = JSON.parse(localStorage.getItem("Quiz5Scores")) || []

Quiz5ScoresList.innerHTML =
Quiz5Scores.map(score => {
    return `<li class="Score">${score.name} - ${score.score}</li>`
}).join("")