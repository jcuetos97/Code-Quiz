
// Buttons
var startbttn = document.getElementById("start");
var submitbttn = document.getElementById("submitbttn");
var homebttn = document.getElementById("homebttn");
var clearbttn = document.getElementById("clearbttn");
var gobackbttn = document.getElementById("gobackbttn");

// Containers
var scorecontainer = document.getElementById("scorecontainer");
var container = document.getElementById("container");
var highscorecontainer = document.getElementById("highscorecontainer");
var scoreList = document.getElementById("scoreList");

// Time counter
var count = document.getElementById("counter");

// Answer type
var wrong = document.getElementsByClassName("wrong");
var right = document.getElementsByClassName("right");

// Questions
var q1 = document.getElementById("questions1");
var q2 = document.getElementById("questions2");
var q3 = document.getElementById("questions3");
var q4 = document.getElementById("questions4");
var q5 = document.getElementById("questions5");

// Others
var alldone = document.getElementById("alldone");
var initialsInput = document.getElementById("initials");
var initials = [];
var scores = [];
var questions = [q1,q2,q3,q4,q5];
var questionscorrect = 0;
var secondsLeft = 75;
var timerInterval;
var li;

// Start
startbttn.addEventListener("click", setTime);

// Time count
function setTime() {
   container.style.display = "none";
   setQuestions();
   timerInterval = setInterval(function() {
      secondsLeft--;
      count.textContent = "Time: " + secondsLeft;
       if(secondsLeft <= 0) {
        for (var i = 0; i < questions.length; i++) {
          questions[i].style.display = "none";
          count.style.display = "none";
         }
         showResults();
         clearInterval(timerInterval);  
      }
      
      }, 1000); 
}
  
// Rendering questions and options
function setQuestions() {
  q1.style.display = "flex"; 
  value =  -1; 
  
  for (var i = 0; i < wrong.length; i++) {
    wrong[i].addEventListener("click", function(){
      secondsLeft -=10;
      value +=1;
      nextQuestion(value);
    }); 
  }

  for (var i = 0; i < right.length; i++) {
    right[i].addEventListener("click", function(){
    value  +=1;
    questionscorrect +=1;
    nextQuestion(value);
    });
  }
    
  function nextQuestion(value) {

    if (value+1<questions.length){
      questions[value].style.display = "none";
      questions[value+1].style.display = "flex";
    } else {
      questions[value].style.display = "none";
      clearInterval(timerInterval);
      count.style.display = "none"; 
      showResults();
    }
  }
}

// Show final results
function showResults() {
  scorecontainer.style.display = "flex";
  var finalscore = document.createElement("text")
  finalscore.textContent= "Your final score is " + secondsLeft + ". You've got " + questionscorrect + " right answer(s) out of 5.";
  alldone.appendChild(finalscore);
}

// Submission of initials
submitbttn.addEventListener ("click", function(event) {
  event.preventDefault();
  var initialsText = initialsInput.value.toUpperCase().trim() + " : " + secondsLeft + " points";

  if (initialsText === "") {
    return;
  }

  initials.push(initialsText);
  initialsInput.value = "";
  storeinitials();
  highscore();
});

// Home button (page reload)
homebttn.addEventListener ("click", function() {
      window.location.reload();
});

// Go back button (page reload)
gobackbttn.addEventListener ("click", function() {
  window.location.reload();
});

// High score button
highscorebttn.addEventListener ("click", function() {

  if (highscorecontainer.style.display = "none") {
    scoreList.innerHTML = "";
    highscore();
  } 
});

// Rendering highest scores
function highscore() {  
 
  if (container.style.display = "flex"){
    container.style.display = "none";
  }
 
  if (scorecontainer.style.display = "flex"){
    scorecontainer.style.display = "none";
  }
 
  for (var i = 0; i < questions.length; i++){
    questions[i].style.display = "none";
    count.style.display = "none";
    clearInterval(timerInterval);
  }
 
  highscorecontainer.style.display = "flex"; 
  
  for (var i = 0; i < initials.length; i++){
    var initial = initials[i];

    li = document.createElement("li");
    li.textContent = initial;
    li.setAttribute("data-index", i);
    scoreList.appendChild(li);
  }
}

// Store scores
function storeinitials() {
  localStorage.setItem("initials", JSON.stringify(initials));
}

// Clear scores
clearbttn.addEventListener ("click", function() {
  window.localStorage.clear();
  scoreList.innerHTML = "";
});

// Get stored scores
var storedInitials = JSON.parse(localStorage.getItem("initials"));
if (storedInitials !== null) {
    initials = storedInitials;
  }

// Navbar hides when scrolling down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0px";
      document.getElementById("time").style.top = "100px";
    } else {
      document.getElementById("navbar").style.top = "-115px";
      document.getElementById("time").style.top = "-115px";
    }
    prevScrollpos = currentScrollPos;
  }