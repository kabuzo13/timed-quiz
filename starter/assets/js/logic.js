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
var initialInput = document.getElementsByTagName('input [type="text"]');
var initials = initialInput.textContent;

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
};

function endScreen() {
    quizEl.classList.add('hide');
    endEl.classList.remove('hide');
    displayScore();
    localStorage.setItem('high-score', timeLeft);
    localStorage.setItem('initials', initials);
};

function displayScore() {
    score.textContent = timeLeft;
    // console.log(score);
};

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
};

function displayChoices() {
    button1.textContent = questions[questionIndex].choices[0];
    button2.textContent = questions[questionIndex].choices[1];
    button3.textContent = questions[questionIndex].choices[2];
    button4.textContent = questions[questionIndex].choices[3];
};

function displayQuestions() {
    qTitle.textContent = questions[questionIndex].title;
};

choicesEl.addEventListener('click', function(event) {
    // console.log(event.target);
    if(event.target.tagName === "BUTTON") {
        checkAnswer(event);
    }
});

function saveHighScore() {
    localStorage.setItem('high-score', timeLeft);
    var initials = initialInput.textContent;
    localStorage.setItem('initials', initials);
};

var start = document.getElementById('start');
var questionIndex = 0;
start.addEventListener("click", function (){
    startQuiz();
}) ;

var submit = document.getElementById('submit');
submit.addEventListener('submit', function(){
    saveHighScore();
});