let score = 0;
let timeLeft = 30;
let timer;

function startGame() {
    score = 0;
    timeLeft = 30;
    document.getElementById('score').innerText = `Очки: ${score}`; 
    document.getElementById('timer').innerText = `Время: ${timeLeft}`; 
    document.getElementById('mouse').style.display = 'block';
    moveMouse();
    startTimer();
}

function moveMouse() {
    const mouse = document.getElementById('mouse');
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    mouse.style.left = `${x}px`; 
    mouse.style.top = `${y}px`; 
}

function catchMouse() {
    score++;
    document.getElementById('score').innerText = `Очки: ${score}`;
    moveMouse();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Время: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    alert(`Игра окончена! Ваши очки: ${score}`);
    document.getElementById('mouse').style.display = 'none';
}

document.getElementById('mouse').onclick = catchMouse;