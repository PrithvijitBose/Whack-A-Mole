let score = 0;
let currentHole = null;
let gameActive = false;

const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');

function randomHole() {
    const index = Math.floor(Math.random() * holes.length);
    return holes[index];
}

function showMole() {
    if (!gameActive) return;
    const hole = randomHole();
    hole.classList.add('active');
    currentHole = hole;
    
    setTimeout(() => {
        hole.classList.remove('active');
        showMole();
    }, 1000);
}

function startGame() {
    if (gameActive) return;
    gameActive = true;
    score = 0;
    scoreDisplay.textContent = score;
    showMole();
}

function whackMole(event) {
    if (!gameActive) return;
    if (event.target.classList.contains('active')) {
        score++;
        scoreDisplay.textContent = score;
        event.target.classList.remove('active');
    }
}

holes.forEach(hole => {
    hole.addEventListener('click', whackMole);
});

document.addEventListener('DOMContentLoaded', startGame);
