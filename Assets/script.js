// making a quiz about JavaScirpt fundamentals

//make a start button , then a timer starts showing the first question
var startGame = document.querySelector(".gamestart");
var timerEl = document.querySelector(".timer-count");
var questionChoices = // choices for questions
var questionTitle = // the question its self
var timerDisplay = // make an ID of timer-display in function
var questionIndex = 0;
var questionArray = [
  {"Question 1 Which of these President combos is not a father & son?"
  "John Adams & John Quincy Adams",
  "George W. Bush & George H.W. Bush",
  "Franklin Delano Roosevelt & Theodore 'Teddy' Roosevelt"}// Correct they were distant fifth-cousins
  
  "Question 2 Which President was the first to be assignated in History?"
  "Abraham Lincoln",// correct fast fact he said “Sic semper tyrannis! (Ever thus to tyrants!) The South is avenged" after he jumped from the balcony to the stage.
  "William Mickinley",
  "John F. Kennedy",
  
  "Question 3 Which President was never elected to office of Pesident or to the office of Vice President?"
  "Gerald Ford"// correct Ford took the Vice President role from Spiro Agnew, due to a scandal. Then Ford assumed the Presidency from Richard Nixon after the Watergate scandal.
  "John Tyler"
  "Millard Filmore"

  "Question 4 Which President has served the most amount of time in office?"
  "Barack Obama",
  "Franklin Delano Roosevelt"// correct he served from 1933 till his death in 1945. He is only president to serve more than 2 terms.
  "Oliver Tree"

  "Question 5 Who was the first President to visit Russia after WWII?"
  "Gerald Ford 1974"
  "Richard Nixon 1972" // correct He visited Moscow, Leningrad, and Kiev all parts of the USSR.
  "Ronald Reagan 1988"
];

 //Need function of start game
 
function startTimer() {
  timeState = setInterval(function(){
    timerCount--;
    timerDisplay.textContent = timerCount;
    if (timerCount <= 0) {
      clearInterval(timeState);
    }
  }, 1000);
}
//start button is going to be event listener. timer is a set interval.
//questions will be in an array
function displayQuestions() {
  questionDiv.removeAttribute("class");
  questionTitle.textContent = currentQuestion.title;
  questionChoices.textContent =""
  currentQuestion.choices.forEach(function(choice){
    newBtn.setAttribute("value", choice)
    newBtn.textContent = choice;
    newBtn.onclick = checkAnswer;
    questionChoices.appendChild(newBtn);
  })
}
//on a question is answered time is deducted from the timer, a penalty
function checkAnswer() {
  if (this.value === questionArray [questionIndex].answer){
    alert("Correct!")
  }
  else{
    alert("Incorrect")
    timerCount = timerCount -10;
    timerDisplay.textContent = timerCount;
  }
  questionIndex++;
  displayQuestions()
}
//if all questions are answered or the timer reaches 0 the game is over.
//when the game is over an alert will pop up and save my Initials and score, local storage.
addEventListener("click", startGame)