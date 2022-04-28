const username = document.querySelector('#username')
const saveScoreButton = document.querySelector('#saveScoreButton')
const finalScore = document.querySelector('#finalScore')
const MostRecentScore = localStorage.getItem('MostRecentScore')

const Quiz5Scores = JSON.parse(localStorage.getItem('Quiz5Scores')) || []

finalScore.innerText = MostRecentScore

username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value
})

SaveScore = e => {
    e.preventDefault()

    const score = {
        score: MostRecentScore,
        name: username.value
    }

    Quiz5Scores.push(score)

    Quiz5Scores.sort((a,b) => {
        return b.score - a.score
    })

    localStorage.setItem('Quiz5Scores', JSON.stringify(Quiz5Scores))
    window.location.assign('../home/scores.html')

    
}