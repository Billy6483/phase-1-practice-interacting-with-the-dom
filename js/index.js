// Select the timer display element
const timerDisplay = document.querySelector('#counter');

// Initialize the counter value
let counterValue = 0;

// Function to update timer display
function updateTimer() {
    timerDisplay.textContent = counterValue;
    counterValue++;
}

// Start the timer using setInterval
let intervalID = setInterval(updateTimer, 1000);
