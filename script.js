var score = 0;
var timeLeft = 10;

var circle = document.getElementById('circle');
var scoreDisplay = document.getElementById('score');
let restartBtn = document.getElementById('restart');
var countdown;

// Actualiza la posición del círculo aleatoriamente
function updateCirclePosition() {
  var gameContainer = document.getElementById('game-container');
  var containerWidth = gameContainer.offsetWidth - circle.offsetWidth;
  var containerHeight = gameContainer.offsetHeight - circle.offsetHeight;

  var randomX = Math.floor(Math.random() * containerWidth);
  var randomY = Math.floor(Math.random() * containerHeight);

  circle.style.left = randomX + 'px';
  circle.style.top = randomY + 'px';
}

// Maneja el clic en el círculo
function handleCircleClick() {
  let colors = ["green", "red", "white", "blue", "blueviolet"]
  let randomIndex = Math.floor(Math.random() * colors.length);
  score++;
  scoreDisplay.textContent = score;
  circle.style.backgroundColor = colors[randomIndex];
  

  updateCirclePosition();
}

// Inicia el juego
function startGame() {
  updateCirclePosition();

  circle.addEventListener('click', handleCircleClick);
  restartBtn.addEventListener('click', restartGame);

  countdown = setInterval(function() {
    timeLeft--;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      circle.removeEventListener('click', handleCircleClick);
      alert('Tiempo finalizado. Puntos totales: ' + score);
      restartGame();
    }
  }, 1000);
}

function restartGame(){
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = score;

    clearInterval(countdown)
    circle.removeEventListener('click', handleCircleClick)

    startGame();

}



// Comienza el juego al cargar la página
startGame();

