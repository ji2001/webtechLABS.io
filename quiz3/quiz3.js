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
        Question: "What's this song?",
        Choice1: 'Black',
        Choice2: 'Lighter',
        Choice3: 'Coffee',
        Choice4: 'Limb By Limb',
        answer: 1,
        media: 'Question1.mp3',
    },
    {
        Question: "What's this song?",
        Choice1: "Lighter V.I.P",
        Choice2: "Your Sound",
        Choice3: "Dark Angel",
        Choice4: "Lord of The Null Lines",
        answer: 2,
        media: 'Question2.mp3',
    },
    {
        Question: "What's this song?",
        Choice1: "Super Sharp Shooter",
        Choice2: "Arabian Nights",
        Choice3: "Chopper",
        Choice4: "Dark Soldier",
        answer: 4,
        media: 'Question3.mp3',
    },
    {
        Question: "What's this song?",
        Choice1: "Some Justice",
        Choice2: "Limb By Limb",
        Choice3: "Junglist",
        Choice4: "The Return",
        answer: 1,
        media: 'Question4.mp3',
    },
    {
        Question: "What's this song?",
        Choice1: "Your Sound",
        Choice2: "Mother",
        Choice3: "Atlantis",
        Choice4: "Black",
        answer: 3,
        media: 'Question5.mp3',
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

    document.getElementById("QuestionMedia").setAttribute('src', currentQuestion.media);

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