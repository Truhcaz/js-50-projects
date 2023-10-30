const quizzData = [
    {
        question : "Which language runs in a web browser?",
        a : "Java",
        b: "C", 
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question : "What does CSS stand for?",
        a : "Central Style Sheets",
        b: "Cascading Style Sheets", 
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question : "What does HTML stand for?",
        a : "Hypertext Markup Language",
        b: "Hypertext Markdown Language", 
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    },
    {
        question : "What year was JavaScript launched?",
        a : "1996",
        b: "1995", 
        c: "1994",
        d: "none of the above",
        correct: "b"
    },
];

const quizz = document.getElementById('quizz')
const answers = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuizz = 0 
let score = 0

loadQuizz()

function loadQuizz(){
    deselectAnswers()

    const currentQuizzData = quizzData[currentQuizz]

    question.innerText = currentQuizzData.question
    a_text.innerText = currentQuizzData.a
    b_text.innerText = currentQuizzData.b
    c_text.innerText = currentQuizzData.c
    d_text.innerText = currentQuizzData.d
}

function deselectAnswers(){
    answers.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answers.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    } )
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer){
        if(answer === quizzData[currentQuizz].correct){
            score++
        }

        currentQuizz++

        if(currentQuizz < quizzData.length){
            loadQuizz()
        } else {
            quizz.innerHTML = `
                <h2> You answered correctly at ${score} / ${quizzData.length} questions</h2>
                <button onClick="location.reload()"> Reload </button>
            `
        }
    }
})