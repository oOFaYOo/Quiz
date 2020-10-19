let question = document.getElementById("question");
let numberOfQuestion = document.getElementById("numberOfQuestion");
let buttons = document.getElementsByClassName("buttons");
let score = document.getElementById("score");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let scoreResult = 0;
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");

for(let button of buttons){
    button.onclick = updateQuestionNumberAnswers;
}

function updateQuestionNumberAnswers (event) {
    if (question.innerHTML === "Who was the first President of the United States?"){
        writeTextInQuestionNumberAnswers("What is the answer to the Ultimate Question of Life, the Universe, and Everything?", "question 2 of 5", "Pi", "42", "Wah?", "I don't know");
        if(event.path[0] === button1){
            scoring();
        }
        return;
    }
    if (question.innerHTML === "What is the answer to the Ultimate Question of Life, the Universe, and Everything?"){
        writeTextInQuestionNumberAnswers("Do you love to code?", "question 3 of 5", "No", "Yes", "Hell Yeah", "Hell No");
        if(event.path[0] === button2){
            scoring();
        }
        return;
    }
    if (question.innerHTML === "Do you love to code?"){
        writeTextInQuestionNumberAnswers("What's the best programming language?", "question 4 of 5", "Python", "C#", "Php", "Javascript");
        if(event.path[0] === button3){
            scoring();
        }
        return;
    }
    if (question.innerHTML === "What's the best programming language?"){
        writeTextInQuestionNumberAnswers("Is Leonardo DiCaprio Awesome?", "question 5 of 5", "Yes", "No", "Maybe", "He's okay");
        if(event.path[0] === button4){
            scoring();
        }
        return;
    }
    if (question.innerHTML === "Is Leonardo DiCaprio Awesome?"){
        if(event.path[0] === button1){
            scoring();
        }
        showResult();
    }
}

function writeTextInQuestionNumberAnswers(textOfQuestion, textOfNumberOfQuestion, textOfAnswer1, textOfAnswer2, textOfAnswer3, textOfAnswer4) {
    question.innerHTML = textOfQuestion;
    numberOfQuestion.innerHTML = textOfNumberOfQuestion;
    answer1.innerHTML = textOfAnswer1;
    answer2.innerHTML = textOfAnswer2;
    answer3.innerHTML = textOfAnswer3;
    answer4.innerHTML = textOfAnswer4;
}

function showResult() {
    score.innerHTML = score.innerHTML + ` ${scoreResult}`;
    score.hidden = false;
    document.querySelectorAll("#question, .answersWithButtons, #numberOfQuestion").forEach((element) => element.hidden = true);
}

function scoring() {
    scoreResult = scoreResult + 1;
}

