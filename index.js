const data = [
    {
        id: 1,
        question: "Who was the first leader of USSR?",
        answers: [
            {answer: "Vladimir Lenin ",iscorrect: true},
            {answer: "Joseph Stalin ",iscorrect: false},
            {answer: "Nikita Khrushchev ",iscorrect: false},
            {answer: "Mikhail Gorbachev ",iscorrect: false},
        ]
    },
    {
        id: 2,
        question: "Paris fell to Nazi Germany in which year?",
        answers: [
            {answer: "1941",iscorrect: false},
            {answer: "1942",iscorrect: false},
            {answer: "1940",iscorrect: true},
            {answer: "1943",iscorrect: false},
        ]
    },
    {
        id: 3,
        question: "Which two countries were the first to declare war on Germany",
        answers: [
            {answer: "Italy and Greece",iscorrect: false},
            {answer: "Britain and France",iscorrect: true},
            {answer: "Norway and Denmark",iscorrect: false},
            {answer: "The United States and the USSR",iscorrect: false},
        ]
    },
    {
        id: 4,
        question: ". What were the first two western European countries that Germany invaded?",
        answers: [
            {answer: "France and Belgium",iscorrect: false},
            {answer: "Norway and Denmark",iscorrect: true},
            {answer: "Switzerland and Liechtenstein",iscorrect: false},
            {answer: "Austria and the Netherlands",iscorrect: false},
        ]
    },
    {
        id: 5,
        question: "Where was the French surrender to Germany signed?",
        answers: [
            {answer: "In Paris",iscorrect: false},
            {answer: "In Berlin",iscorrect: false},
            {answer: "On a boat",iscorrect: false},
            {answer: "In a railway car",iscorrect: true},
        ]
    },
]

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");  

let qIndex =0;
let correctCount = 0;
let wrongCount = 0;
let total =0;
let selectedAnswer;

const playAgain = ()=>{
     qIndex =0;
     correctCount = 0;
     wrongCount = 0;
     total =0;
     showQuestion(qIndex);
}

play.addEventListener("click",()=>{
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain()
})

const showResult = ()=>{
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";

    resultScreen.querySelector(".correct").textContent = `Correct Answers: ${correctCount}`
    resultScreen.querySelector(".wrong").textContent = `Wrong Answers: ${wrongCount}`
    resultScreen.querySelector (".score").textContent = `Score: ${(correctCount- wrongCount)*10}`
}

const showQuestion = (qNumber) =>{
    if(qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item,index)=>
        `
        <div class="answer">
        <input name = "answer" type="radio" id=${index} value=${item.iscorrect}>
        <label for=${index}>${item.answer}</label>
    </div>
        `
    ).join("");

    selectAnswer();
};

const selectAnswer = ()=>{
    answersContainer.querySelectorAll("input").forEach(el=>{
        el.addEventListener("click",(e)=>{
            selectedAnswer = e.target.value;
        })
    })
}

const submitAnswer = ()=>{
    submit.addEventListener("click",()=>{
        if(selectedAnswer!=null){
        selectedAnswer === "true" ?correctCount++ :wrongCount++;
        qIndex++;
        showQuestion(qIndex);
        }else{
            alert("Select an answer!");
        }
    })
}

showQuestion(qIndex);
submitAnswer();

