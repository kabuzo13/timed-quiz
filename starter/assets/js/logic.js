var start = document.getElementById('start');
start.addEventListener("click", function startQuiz(){

})

function startQuiz() {
    countdown()
    console.log("Hello world");
    startEl.classList.add('hide');
    quizEl.classList.remove('hide');
};



var timerEl = document.getElementById('time');
var endEl = document.getElementById('end-screen');
var numberCorrect = document.getElementById('final-score');


var score = numberCorrect;

// timer starts when quiz starts

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            displayScore();
        }
    }, 1000);
}

function displayScore() {
// link numberCorrect - FINAL SCORE IS HOW MANY SECONDS YOU HAVE LEFT WHEN FINISHED
}

// subtract time when question is answered incorrectly


