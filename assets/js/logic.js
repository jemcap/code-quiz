// Create a code quiz that contains the following requirements:

// * A start button that when clicked a timer starts and the first question appears.
// How to start timer when button is clicked?

let startScreen = document.querySelector("#start-screen");

// Grab button
let startBtn = document.querySelector("#start");
// Grab timer
let timeContent = document.querySelector(".timer");
let timeClock = document.querySelector("#time");
let quizEl = document.querySelector("#questions");
let qTitle = document.querySelector("#question-title");
let choiceA = document.querySelector("#a");
let choiceB = document.querySelector("#b");
let choiceC = document.querySelector("#c");
let choiceD = document.querySelector("#d");


let timer = 75;
let score = 0;

// When the start button is clicked, it must hide the starting content and display the questions on screen
function startQuiz() {
  startBtn.addEventListener("click", function () {
    startScreen.style.display = "none";
    renderQ();
    quizEl.style.display = "block";

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
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

// How to navigate to the first question at the same time the button is clicked?
// It should transition to the question when the button is clicked and the timer starts to count down

let lastQuestionIndex = questions.length - 1;
let runningQuestion = 0;

// Manipulate the DOM so that the content is displayed on the screen from the objects in the arrays in questions.js

function renderQ() {
  let q = questions[runningQuestion];
  qTitle.innerHTML = q.question;
  choiceA.innerHTML = q.a;
  choiceB.innerHTML = q.b;
  choiceC.innerHTML = q.c;
  choiceD.innerHTML = q.d;
}


function checkAnswer(answer) {
  if (questions[runningQuestion].correct === answer) {
    answerCorrect();
  } else {
    answerWrong();
  }
  if (runningQuestion < lastQuestionIndex) {
    runningQuestion++;
    renderQ();
  }
}



function answerCorrect() {
  let correctSfx = new Audio("assets/sfx/correct.wav");
  correctSfx.play();
  score += 50
}

function answerWrong() {
  let incorrectSfx = new Audio("assets/sfx/incorrect.wav");
  incorrectSfx.play();
  timer -= 10;
  score -= 25;
}

function finalScore() {



}

// The questions should be stored in an array with the answer options

// The data from the array should display to the webpage.
// The answer option(s) must also appear under the question for the user to answer

// How to display whether the chosen answer was correct or incorrect?

//   * Questions contain buttons for each answer.
//   *
//   * When answer is clicked, the next question appears
//   *
//   * If the answer clicked was incorrect then subtract time from the clock

// * The quiz should end when all questions are answered or the timer reaches 0.

//   * When the game ends, it should display their score and give the user the ability to save their initials and their score
