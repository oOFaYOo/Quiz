let data = [
    {
        question: "Who was the first President of the United States?",
        number: "question 1 of 5",
        answer1: "George Washington",
        answer2: "Thomas Jefferson",
        answer3: "Thomas Edison",
        answer4: "I don't know",
        rightAnswer: "George Washington"
    },
    {
        question: "What is the answer to the Ultimate Question of Life, the Universe, and Everything?",
        number: "question 2 of 5",
        answer1: "Pi",
        answer2: "42",
        answer3: "Wah?",
        answer4: "I don't know",
        rightAnswer: "42"
    },
    {
        question: "Do you love to code?",
        number: "question 3 of 5",
        answer1: "No",
        answer2: "Yes",
        answer3: "Hell Yeah",
        answer4: "Hell No",
        rightAnswer: "Hell Yeah"
    },
    {
        question: "What's the best programming language?",
        number: "question 4 of 5",
        answer1: "Python",
        answer2: "C#",
        answer3: "Php",
        answer4: "Javascript",
        rightAnswer: "Javascript"
    },
    {
        question: "Is Leonardo DiCaprio Awesome?",
        number: "question 5 of 5",
        answer1: "Yes",
        answer2: "No",
        answer3: "Maybe",
        answer4: "He's okay",
        rightAnswer: "Yes"
    }
];
let buttons = document.getElementsByClassName("buttons");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let scoreResult = 0;
let i = 0;

drawNewQuestion(data[i]);

for (let button of buttons) {
    button.onclick = actionForClick;
}

function checkAnswer(questionAnswerInfo, event) {
    if (questionAnswerInfo.rightAnswer === event.path[0].answer) {
        scoreResult = scoreResult + 1;
    }
}

function actionForClick(event) {
    checkAnswer(data[i], event);
    i++;
    if (i > data.length - 1) {
        showResult()
    } else drawNewQuestion(data[i]);
}

function drawNewQuestion(questionObject) {
    document.getElementById("question").innerHTML = questionObject.question;
    document.getElementById("numberOfQuestion").innerHTML = questionObject.number;
    document.getElementById("answer1").innerHTML = questionObject.answer1;
    document.getElementById("answer2").innerHTML = questionObject.answer2;
    document.getElementById("answer3").innerHTML = questionObject.answer3;
    document.getElementById("answer4").innerHTML = questionObject.answer4;
    button1.answer = questionObject.answer1;
    button2.answer = questionObject.answer2;
    button3.answer = questionObject.answer3;
    button4.answer = questionObject.answer4;
}

function showResult() {
    document.getElementById("score").innerHTML = document.getElementById("score").innerHTML + ` ${scoreResult}`;
    document.getElementById("score").hidden = false;
    document.querySelectorAll("#question, .answersWithButtons, #numberOfQuestion").forEach((element) => element.hidden = true);
}
