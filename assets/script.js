var questionsArr = [
  {
    question: "Which of the following is a disadvantage of using JavaScript?",
    answers: [
      {
        text: "Client-side JavaScript does not allow the reading or writing of files.",
        correct: false,
      },
      {
        text: "JavaScript can not be used for Networking applications because there is no such support available.",
        correct: false,
      },
      {
        text: "JavaScript doesn't have any multithreading or multiprocess capabilities.",
        correct: false,
      },
      {
        text: "all of the above",
        correct: true,
      },
    ],
  },
  {
    question:
      "Can you pass a anonymous function as an argument to another function?",
    answers: [
      {
        text: "true",
        correct: true,
      },
      {
        text: "false",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following type of variable takes precedence over other if names are same?",
    answers: [
      {
        text: " global variable",
        correct: false,
      },
      {
        text: "local variable",
        correct: true,
      },
      {
        text: "Both of the above.",
        correct: false,
      },
      {
        text: "None of the above.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which built-in method returns the calling string value converted to upper case?",
    answers: [
      {
        text: "toUpperCase()",
        correct: true,
      },
      {
        text: "toUpper()",
        correct: false,
      },
      {
        text: "changeCase(case",
        correct: false,
      },
      {
        text: "None of the above.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
    answers: [
      {
        text: "toSource()",
        correct: false,
      },
      {
        text: "valueOf()",
        correct: true,
      },
      {
        text: "toString()",
        correct: false,
      },
      {
        text: "None of the above.",
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
  //starts the game, starts timer and sets the current question to 0
  //the start of the array
  currentQuestion = 0;
  start.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  nextQuestion();
  startTimer();
}

function nextQuestion() {
  //checks if there is more questions in the array if there isnt ends the game
  if (!(questionsArr.length == currentQuestion)) {
    clearPrevQuestion();
    showQuestion(questionsArr[currentQuestion]);
    currentQuestion++;
  } else {
    endQuiz();
  }
}

function clearPrevQuestion() {
  //makes sure to hide buttons and text from the previous question
  nextButton.classList.add("hidden");
  correctTitle.classList.add("hidden");
  incorrectTitle.classList.add("hidden");
  questionAnswers.innerText = "";
}

function chooseAnswer(event) {
  //grabs answer clicked
  var selected = event.target;
  var correctAns = selected.classList.contains("true");
  //checks if its correct or incorrect to show result
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
  //loops through array to get the question and answer and add them to the DOM
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

function endQuiz() {
  //shows the end input and total score
  main.classList.add("hidden");
  scoreForm.classList.remove("hidden");
  highScore.innerText = score;
}

function startTimer() {
  //shows time remaining in the quiz
  timer.textContent = currentTime;
  var setTimer = setInterval(function () {
    //variable to reduce current time and to add time to when question in answered wrong
    timeSpent++;
    timer.textContent = currentTime - timeSpent;
    //ends game once max time is reached
    if (timeSpent >= 50) {
      clearInterval(setTimer);
      endQuiz();
    }
  }, 1000);
}
