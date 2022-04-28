const username = document.querySelector('#username')
const saveScoreButton = document.querySelector('#saveScoreButton')
const finalScore = document.querySelector('#finalScore')
const MostRecentScore = localStorage.getItem('MostRecentScore')

const Quiz1Scores = JSON.parse(localStorage.getItem('Quiz1Scores')) || []

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

    Quiz1Scores.push(score)

    Quiz1Scores.sort((a,b) => {
        return b.score - a.score
    })

    localStorage.setItem('Quiz1Scores', JSON.stringify(Quiz1Scores))
    window.location.assign('../home/scores.html')

    
}