const username = document.querySelector('#username')
const saveScoreButton = document.querySelector('#saveScoreButton')
const finalScore = document.querySelector('#finalScore')
const MostRecentScore = localStorage.getItem('MostRecentScore')

const Quiz4Scores = JSON.parse(localStorage.getItem('Quiz4Scores')) || []

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

    Quiz4Scores.push(score)

    Quiz4Scores.sort((a,b) => {
        return b.score - a.score
    })

    localStorage.setItem('Quiz4Scores', JSON.stringify(Quiz4Scores))
    window.location.assign('../home/scores.html')

    
}