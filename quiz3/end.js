const username = document.querySelector('#username')
const saveScoreButton = document.querySelector('#saveScoreButton')
const finalScore = document.querySelector('#finalScore')
const MostRecentScore = localStorage.getItem('MostRecentScore')

const Quiz3Scores = JSON.parse(localStorage.getItem('Quiz3Scores')) || []

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

    Quiz3Scores.push(score)

    Quiz3Scores.sort((a,b) => {
        return b.score - a.score
    })

    localStorage.setItem('Quiz3Scores', JSON.stringify(Quiz3Scores))
    window.location.assign('../home/scores.html')

    
}