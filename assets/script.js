var questionsArr = [
  {
    question: "first question",
    answers: [
      {
        text: "true",
        correct: true,
      },
      {
        text: "false",
        correct: false,
      },
      {
        text: "false",
        correct: false,
      },
      {
        text: "false",
        correct: false,
      },
    ],
  },
  {
    question: "second question",
    answers: [
      {
        text: "true",
        correct: true,
      },
      {
        text: "false",
        correct: false,
      },
      {
        text: "false",
        correct: false,
      },
      {
        text: "false",
        correct: false,
      },
    ],
  },
];

var currentQuestion = 0;
var score = 0;
var timeSpent = 0;
var currentTime = 50;

var timer = document.querySelector("#timer");
var start = document.querySelector("#start");
var nextButton = document.querySelector("#next");
var questionContainer = document.querySelector("#question-container");
var questionTitle = document.querySelector("#question-title");
var questionAnswers = document.querySelector("#answer-buttons");
var incorrectTitle = document.querySelector("#incorrect");
var correctTitle = document.querySelector("#correct");
var scoreForm = document.querySelector("section");
var main = document.querySelector("main");
var highScore = document.querySelector("#score");

start.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);

function startGame() {
  currentQuestion = 0;
  start.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  nextQuestion();
  startTimer();
}

function nextQuestion() {
  clearPrevQuestion();
  showQuestion(questionsArr[currentQuestion]);
  currentQuestion++;
}

function clearPrevQuestion() {
  nextButton.classList.add("hidden");
  correctTitle.classList.add("hidden");
  incorrectTitle.classList.add("hidden");
  questionAnswers.innerText = "";
}

function chooseAnswer(event) {
  var selected = event.target;
  var correctAns = selected.classList.contains("true");
  console.log(correctAns);
  if (correctAns) {
    correctTitle.classList.remove("hidden");
    score++;
  } else {
    incorrectTitle.classList.remove("hidden");
    timeSpent += 10;
  }

  nextButton.classList.remove("hidden");
}

function showQuestion(question) {
  questionTitle.innerHTML = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("buttons");
    button.classList.add(`${answer.correct}`);
    button.addEventListener("click", chooseAnswer);
    questionAnswers.appendChild(button);
  });
}

function startTimer() {
  console.log(timeSpent);
  timer.textContent = currentTime;
  setTimer = setInterval(function () {
    timeSpent++;
    timer.textContent = currentTime - timeSpent;
    if (timeSpent == 50) {
      clearInterval(setTimer);
      main.classList.add("hidden");
      scoreForm.classList.remove("hidden");
      highScore.innerText = score;
    }
  }, 1000);
}
