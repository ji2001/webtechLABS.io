const Question = document.querySelector('#Question');
const Choices = Array.from(document.querySelectorAll('.ChoiceText'));
const ProgressText = document.querySelector('#ProgressText');
const ScoreText = document.querySelector('#Score');
const ProgressBarFull = document.querySelector('#ProgressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let Score = 0
let QuestionCounter = 0
let availableQuestions = []
let img = document.querySelector('img')

let Questions = [
    {
        Question: "Who produced the 1996 album 'Timeless'?",
        Choice1: 'Goldie',
        Choice2: 'Roni Size & Represent',
        Choice3: 'Doc Scott',
        Choice4: 'David Guetta',
        answer: 1,
        media: 'media/Question1.jpg',
    },
    {
        Question: "Which band recorded the original Amen Break sample?",
        Choice1: "The Wombats",
        Choice2: "The Who",
        Choice3: "The Windows",
        Choice4: "The Winstons",
        answer: 4,
        media: 'media/Question2.jpg',
    },
    {
        Question: "Which record label was founded by Goldie, Kemistry and Storm?",
        Choice1: "Moving Shadow",
        Choice2: "Metalheadz",
        Choice3: "V Recordings",
        Choice4: "XL Recordings",
        answer: 2,
        media: 'media/Question3.jpg',
    },
    {
        Question: "Who produced General Levy's hit song 'Incredible'?",
        Choice1: "Shy FX",
        Choice2: "Congo Natty",
        Choice3: "M-Beat",
        Choice4: "DJ Trace",
        answer: 3,
        media: 'media/Question4.jpg',
    },
    {
        Question: "Who was the MC who featured on Shy FX - Original Nuttah?",
        Choice1: "General Levy",
        Choice2: "D Double E",
        Choice3: "Rebel MC",
        Choice4: "UK Apache",
        answer: 4,
        media: 'media/Question5.jpg',
    }

]

BeginQuiz = () => {
    QuestionCounter = 0
    Score = 0
    availableQuestions = [...Questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || QuestionCounter > 5) {
        localStorage.setItem('MostRecentScore', Score)

        return window.location.assign('./end.html')
    }

    QuestionCounter++
    ProgressText.innerText = `Question ${QuestionCounter} of 5`
    ProgressBarFull.style.width = `${(QuestionCounter/5) * 100}%`
    
    const QuestionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[QuestionsIndex]
    Question.innerText = currentQuestion.Question

    img.src = currentQuestion.media

    Choices.forEach(Choice => {
        const number = Choice.dataset['number']
        Choice.innerText = currentQuestion['Choice' + number]

    })

    availableQuestions.splice(QuestionsIndex, 1)

    acceptingAnswers = true
}

Choices.forEach(Choice => {
    Choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(1)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    Score +=num
    ScoreText.innerText = Score
}

BeginQuiz()