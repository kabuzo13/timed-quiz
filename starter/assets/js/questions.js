var questions = [
    {
        title: "What is the capital of France?",
        choices: ["Madrid", "Lille", "Paris", "Berlin"],
        answer: "Paris",
    },
    {
        title: "What is the capital of Italy?",
        choices: ["Rome", "Venice", "Pisa", "Naples"],
        answer: "Rome",
    },
    {
        title: "What is the capital of Germany?",
        choices: ["Leipzig", "Berlin", "Munich", "Hamburg"],
        answer: "Berlin",
    }
]

var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");

var startEl = document.getElementById('start-screen');
var quizEl = document.getElementById('questions');
var choicesEl = document.getElementById('choices');

choicesEl.appendChild(button1);
choicesEl.appendChild(button2);
choicesEl.appendChild(button3);
choicesEl.appendChild(button4);



var score = 0;


// choice clicked, if choice = answer, moves onto next question and timer keeps counting down
// choice clicked, if choice =/= answer, moves onto next question and 10 seconds is subtracted from the time
// do not advance to next question without an answer clicked