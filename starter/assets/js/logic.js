var start = document.getElementById('start');
var questionIndex = 0;
start.addEventListener("click", function (){
    startQuiz();
}) 
// move to bottom
// call functions and event listeners last

function startQuiz() {
    countdown()
    startEl.classList.add('hide');
    quizEl.classList.remove('hide');
    displayQuestions();
    displayChoices();
};



var timerEl = document.getElementById('time');
var endEl = document.getElementById('end-screen');
var score = document.getElementById('final-score');

var timeLeft = 60;
var timeInterval;

function countdown() {

    timeInterval = setInterval(function () {
        if (timeLeft >= 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            endScreen();
        }
    }, 1000);
}

function endScreen() {
    quizEl.classList.add('hide');
    endEl.classList.remove('hide');
    displayScore();
}

function displayScore() {
    score.textContent = timeLeft;
    console.log(score);
}

function checkAnswer(event) {
    if (event.target.textContent !== questions[questionIndex].answer) {
        timeLeft -=10;
    };
    if (questionIndex < questions.length - 1) {
        questionIndex++;
        displayQuestions();
        displayChoices();
    } else {
        clearInterval(timeInterval);
        endScreen();
    }
}

function displayChoices() {
    button1.textContent = questions[questionIndex].choices[0];
    button2.textContent = questions[questionIndex].choices[1];
    button3.textContent = questions[questionIndex].choices[2];
    button4.textContent = questions[questionIndex].choices[3];
};

function displayQuestions() {
    qTitle.textContent = questions[questionIndex].title;
}

choicesEl.addEventListener('click', function(event) {
    console.log(event.target);
    if(event.target.tagName === "BUTTON") {
        checkAnswer(event);
    }
})

