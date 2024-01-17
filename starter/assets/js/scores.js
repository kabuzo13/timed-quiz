var savedScore = localStorage.getItem('high-score', timeLeft);
var savedInitials = localStorage.getItem('initials', initials);

var li = document.createElement("li");

var highScore = document.getElementById('highscores');
highScore.appendChild(li);

li.textContent = savedScore + savedInitials;