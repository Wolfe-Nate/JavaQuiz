// making a quiz about JavaScirpt fundamentals

//make a start button , then a timer starts showing the first question
var startGame = document.querySelector("#gameStart");
var questionCont = document.querySelector("#questionsCont");
var timerEl = document.querySelector(".timer-count");
var option1 = document.getElementById("option1"); // choices for questions
var option2 = document.getElementById("option2"); // choices for questions
var option3 = document.getElementById("option3"); // choices for questions
var check = document.getElementById("check");
var questionTitle = document.getElementById("question"); // the question its self
var timeState;
var timerCount = 60;
var questionIndex = 0;
var questionArray = [
  {
    question:
      "Question 1 Which of these President combos is not a father & son?",
    choices: [
      "John Adams & John Quincy Adams",
      "George W. Bush & George H.W. Bush",
      "Franklin Delano Roosevelt & Theodore 'Teddy' Roosevelt",
    ], //
    answer: 2,
    explanation: "Correct, they were distant fifth-cousins.",
  },
  {
    question:
      "Question 2 Which President was the first to be assignated in History?",
    choices: ["Abraham Lincoln", "William Mickinley", "John F. Kennedy"],
    answer: 0,
    explanation:
      "correct fast fact John Wilkes Boothe said 'Sic semper tyrannis! (Ever thus to tyrants!) The South is avenged' after he jumped from the balcony to the stage.",
  },
  {
    question:
      "Question 3 Which President was never elected to office of Pesident or to the office of Vice President?",

    choices: ["Gerald Ford", "John Tyler", "Millard Filmore"],
    answer: 0,
    explanation:
      "correct Ford took the Vice President role from Spiro Agnew, due to a scandal. Then Ford assumed the Presidency from Richard Nixon after the Watergate scandal.",
  },
  {
    question:
      "Question 4 Which President has served the most amount of time in office?",
    choices: ["Barack Obama", "Franklin Delano Roosevelt", "Oliver Tree"],
    answer: 0,
    explanation:
      "correct he served from 1933 till his death in 1945. He is only president to serve more than 2 terms.",
  },
  {
    question:
      "Question 5 Who was the first President to visit Russia after WWII?",
    choices: ["Gerald Ford 1974", "Richard Nixon 1972", "Ronald Reagan 1988"],
    answer: 0,
    explanation:
      "correct He visited Moscow, Leningrad, and Kiev all parts of the USSR",
  },
];

console.log(questionArray);
questionCont.style.display = "none";
//Need function of start game

function startTimer() {
  timeState = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount <= 0) {
      clearInterval(timeState);
    }
  }, 1000);
}
//start button is going to be event listener. timer is a set interval.
//questions will be in an array
function displayQuestions() {
  questionTitle.textContent = questionArray[questionIndex].question;
  option1.textContent = questionArray[questionIndex].choices[0];
  option2.textContent = questionArray[questionIndex].choices[1];
  option3.textContent = questionArray[questionIndex].choices[2];
}
//on a question is answered time is deducted from the timer, a penalty
function checkAnswer() {
  if (this.getAttribute("data-value") == questionArray[questionIndex].answer) {
    check.textContent = questionArray[questionIndex].explanation;
  } else {
    check.textContent = "incorrect";
    timerCount = timerCount - 10;
  }
  if (questionIndex < questionArray.length - 1) {
    questionIndex++;
    displayQuestions();
  } else {
    alert("end"); // hide questionCont
    // local storage and highscores a tag that links to highscore. append highscores and like to main page for restart.
  }
}
//if all questions are answered or the timer reaches 0 the game is over.
//when the game is over an alert will pop up and save my Initials and score, local storage.
startGame.addEventListener("click", function () {
  questionCont.style.display = "block";
  startGame.style.display = "none";
  displayQuestions();
  startTimer();
});

option1.addEventListener("click", checkAnswer);
option2.addEventListener("click", checkAnswer);
option3.addEventListener("click", checkAnswer);
