let question = document.getElementById("question");
let numberOfQuestion = document.getElementById("numberOfQuestion");
let buttons = document.getElementsByClassName("buttons");
let score = document.getElementById("score");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");

for(let button of buttons){
    button.onclick = updateQuestionNumberAnswers;
}

function updateQuestionNumberAnswers () {
    if (question.innerHTML === "Who was the first President of the United States?"){
        writeTextInQuestionNumberAnswers("What is the answer to the Ultimate Question of Life, the Universe, and Everything?", "question 2 of 5", "Pi", "42", "Wah?", "I don't know");
        return;
    }
    if (question.innerHTML === "What is the answer to the Ultimate Question of Life, the Universe, and Everything?"){
        writeTextInQuestionNumberAnswers("Do you love to code?", "question 3 of 5", "No", "Yes", "Hell Yeah", "Hell No");
        return;
    }
    if (question.innerHTML === "Do you love to code?"){
        writeTextInQuestionNumberAnswers("What's the best programming language?", "question 4 of 5", "Javascript", "C#", "Php", "Python");
        return;
    }
    if (question.innerHTML === "What's the best programming language?"){
        writeTextInQuestionNumberAnswers("Is Leonardo DiCaprio Awesome?", "question 5 of 5", "Yes", "No", "Maybe", "He's okay");
        return;
    }
    if (question.innerHTML === "Is Leonardo DiCaprio Awesome?"){
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
    score.hidden = false;
    document.querySelectorAll("#question, .answersWithButtons, #numberOfQuestion").forEach((element) => element.hidden = true);
}

