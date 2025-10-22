
let workTime = 25 * 60;
let timeLeft = workTime;
let timerInterval = null;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");


function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}


function startTimer() {
  if (isRunning) return; 
  isRunning = true;
  timerInterval = setInterval(() => {
    timeLeft--;
    updateDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      isRunning = false;
      alert("¡Tiempo terminado! ☕");
      timeLeft = workTime; 
      updateDisplay();
    }
  }, 1000);
}


function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}


function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  timeLeft = workTime;
  updateDisplay();
}


startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);


updateDisplay();
