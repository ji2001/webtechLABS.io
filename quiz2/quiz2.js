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
        Question: "Which of these is NOT an alias of Rob Playford'?",
        Choice1: "Charlie Say's",
        Choice2: 'Dvus',
        Choice3: 'Austin',
        Choice4: 'Metalheads',
        answer: 3,
        media: 'media/Question1.jpg',
    },
    {
        Question: "DJ SS started which record label?",
        Choice1: "Formation Records",
        Choice2: "Foundation Records",
        Choice3: "Deep Jungle",
        Choice4: "Suburban Base",
        answer: 1,
        media: 'media/Question2.jpg',
    },
    {
        Question: "Who was the first to use the term Jungle to describe the genre of music?",
        Choice1: "Congo Natty",
        Choice2: "Noise Factory",
        Choice3: "Goldie",
        Choice4: "A Guy Called Gerald",
        answer: 2,
        media: 'media/Question3.jpg',
    },
    {
        Question: "Who produced under the alias Fire Fox?",
        Choice1: "Ray Keith",
        Choice2: "Tim Reaper",
        Choice3: "M-Beat",
        Choice4: "Roni Size",
        answer: 4,
        media: 'media/Question4.jpg',
    },
    {
        Question: "What are the real first names of the duo 'Krome & Time'?",
        Choice1: "Bernard and Terry",
        Choice2: "Rick and Gilbert",
        Choice3: "Ronnie and Steven",
        Choice4: "Clifford and Rob",
        answer: 1,
        media: 'media/Question5.jpg',
    },
    {
        Question: "Which rapper is sampled in the alphabet sample in Super Sharp Shooter?",
        Choice1: "The Notorious B.I.G",
        Choice2: "Method Man",
        Choice3: "LL Cool J",
        Choice4: "Eazy E",
        answer: 3,
        media: 'media/Question6.jpg',
    }

]

BeginQuiz = () => {
    QuestionCounter = 0
    Score = 0
    availableQuestions = [...Questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || QuestionCounter > 6) {
        localStorage.setItem('MostRecentScore', Score)

        return window.location.assign('./end.html')
    }

    QuestionCounter++
    ProgressText.innerText = `Question ${QuestionCounter} of 6`
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