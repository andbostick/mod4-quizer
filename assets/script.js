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
];

var currentQuestion;

var start = document.querySelector("#start");
var nextButton = document.querySelector("#next");
var questionContainer = document.querySelector("#question-container");
var questionTitle = document.querySelector("#question-title");
var questionAnswers = document.querySelector("#answer-buttons");

start.addEventListener("click", startGame);

function startGame() {
  currentQuestion = 0;
  start.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  nextQuestion();
}

function nextQuestion() {
  clearPrevQuestion();
  showQuestion(questionsArr[currentQuestion]);
}

function clearPrevQuestion() {
  nextButton.classList.add("hidden");
  questionAnswers.innerText = "";
}

function chooseAnswer() {}

function showQuestion(question) {
  questionTitle.innerHTML = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("buttons");
    button.addEventListener("click", chooseAnswer);
    questionAnswers.appendChild(button);
  });
}
