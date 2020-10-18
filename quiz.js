let question = document.getElementById("question");
let numberOfQuestion = document.getElementById("numberOfQuestion");
let buttons = document.getElementsByClassName("buttons");
let score = document.getElementById("score");

for(let button of buttons){
    button.onclick = updateQuestionAndNumber;
}

function updateQuestionAndNumber () {
    if (question.innerHTML === "Who was the first President of the United States?"){
        writeTextInQuestionAndNumber("What is the answer to the Ultimate Question of Life, the Universe, and Everything?", "question 2 of 5");
        return;
    }
    if (question.innerHTML === "What is the answer to the Ultimate Question of Life, the Universe, and Everything?"){
        writeTextInQuestionAndNumber("Do you love to code?", "question 3 of 5");
        return;
    }
    if (question.innerHTML === "Do you love to code?"){
        writeTextInQuestionAndNumber("What's the best programming language?", "question 4 of 5");
        return;
    }
    if (question.innerHTML === "What's the best programming language?"){
        writeTextInQuestionAndNumber("Is Leonardo DiCaprio Awesome?", "question 5 of 5" );
        return;
    }
    if (question.innerHTML === "Is Leonardo DiCaprio Awesome?"){
        showResult();
    }
} 

function writeTextInQuestionAndNumber(textOfQuestion, textOfNumberOfQuestion) {
    question.innerHTML = textOfQuestion;
    numberOfQuestion.innerHTML = textOfNumberOfQuestion; 
}

function showResult() {
    score.hidden = false;
    document.querySelectorAll("#question, .answersWithButtons, #numberOfQuestion").forEach((element) => element.hidden = true);
}

