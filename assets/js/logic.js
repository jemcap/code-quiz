// Create a code quiz that contains the following requirements:

// * A start button that when clicked a timer starts and the first question appears.
// How to navigate to the first question and start timer when button is clicked?

// Grab button
let startBtn = document.querySelector("#start");
// Grab timer
let timeContent = document.querySelector(".timer");
let timeClock = document.querySelector("#time");



function startQuiz() {
  startBtn.addEventListener("click", function() {
    var timer = 75;

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      timer--;
      timeClock.textContent = timer;

      if (timer === 0) {
        clearInterval(timeInterval);
        return;
      }
    }, 1000);
  });
}

startQuiz();



//   * Questions contain buttons for each answer.
//   *
//   * When answer is clicked, the next question appears
//   *
//   * If the answer clicked was incorrect then subtract time from the clock

// * The quiz should end when all questions are answered or the timer reaches 0.

//   * When the game ends, it should display their score and give the user the ability to save their initials and their score
