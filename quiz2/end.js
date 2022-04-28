const username = document.querySelector('#username')
const saveScoreButton = document.querySelector('#saveScoreButton')
const finalScore = document.querySelector('#finalScore')
const MostRecentScore = localStorage.getItem('MostRecentScore')

const Quiz2Scores = JSON.parse(localStorage.getItem('Quiz2Scores')) || []

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

    Quiz2Scores.push(score)

    Quiz2Scores.sort((a,b) => {
        return b.score - a.score
    })

    localStorage.setItem('Quiz2Scores', JSON.stringify(Quiz2Scores))
    window.location.assign('../home/scores.html')

    
}