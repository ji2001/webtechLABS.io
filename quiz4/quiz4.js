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
        Question: "What's the first name of the singer in this video?",
        Choice1: 'Eve',
        Choice2: 'Diane',
        Choice3: 'Louise',
        Choice4: 'Grace',
        answer: 2,
        media: 'media/question1.mp4',
    },
    {
        Question: "Who produced the song in this video?",
        Choice1: "DJ Trace",
        Choice2: "Photek",
        Choice3: "Roni Size",
        Choice4: "Aphrodite",
        answer: 4,
        media: 'media/question2.mp4',
    },
    {
        Question: "What is this song called?",
        Choice1: "On A Ragga Tip",
        Choice2: "Way In My Brain",
        Choice3: "Out Of Space",
        Choice4: "Lighter",
        answer: 1,
        media: 'media/question3.mp4',
    },
    {
        Question: "Who is talking first in this clip?",
        Choice1: "LTJ Bukem",
        Choice2: "Fabio",
        Choice3: "Grooverider",
        Choice4: "DJ SS",
        answer: 2,
        media: 'media/question4.mp4',
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