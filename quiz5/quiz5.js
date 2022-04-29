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
        Question: "What is this break called?",
        Choice1: 'Amen',
        Choice2: 'Your Sound',
        Choice3: 'Think',
        Choice4: 'Apache',
        answer: 1,
        media: 'media/question1.mp3',
    },
    {
        Question: "What is this break called?",
        Choice1: "Limb",
        Choice2: "Your Sound",
        Choice3: "Amen",
        Choice4: "Apache",
        answer: 2,
        media: 'media/question2.mp3',
    },
    {
        Question: "What is this break called?",
        Choice1: "Wonderwall",
        Choice2: "Helicopter",
        Choice3: "Fools Gold",
        Choice4: "Prodigy",
        answer: 3,
        media: 'media/question3.mp3',
    },
    {
        Question: "What is this break called?",
        Choice1: "Shy FX",
        Choice2: "Apache",
        Choice3: "Think",
        Choice4: "Amen",
        answer: 3,
        media: 'media/question4.mp3',
    }

]

BeginQuiz = () => {
    QuestionCounter = 0
    Score = 0
    availableQuestions = [...Questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || QuestionCounter > 4) {
        localStorage.setItem('MostRecentScore', Score)

        return window.location.assign('./end.html')
    }

    QuestionCounter++
    ProgressText.innerText = `Question ${QuestionCounter} of 4`
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