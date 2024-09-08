const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

let timerInterval;
let elapsedTime = 0;
let isRunning = false;

// Function to format time in hh:mm:ss format
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((ms % 1000) / 10);

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}:${String(milliseconds).padStart(2, "0")}`;
}

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    const startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      timeDisplay.textContent = formatTime(elapsedTime);
    }, 10);
  }
}

function pauseStopwatch() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timerInterval);
  }
}

function resetStopwatch() {
  isRunning = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  timeDisplay.textContent = "00:00:00";
}

startBtn.addEventListener("click", startStopwatch);
pauseBtn.addEventListener("click", pauseStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
