
var container = document.getElementById("container");
var questioncontainer = document.querySelector("questioncontainer");
var startquiz = document.getElementById("start");
var count = document.getElementById("counter");
var home = document.getElementById("home");

var wrong = document.getElementById("wrong");
var right = document.getElementsByClassName("right");

var q1 = document.getElementById("questions1");
var q2 = document.getElementById("questions2");
var q3 = document.getElementById("questions3");
var q4 = document.getElementById("questions4");
var q5 = document.getElementById("questions5");

var secondsLeft = 75;


startquiz.addEventListener("click", setTime);


function setTime() {
   container.style.display = "none";
   setQuestions();
   var timerInterval = setInterval(function() {
       secondsLeft--;
      count.textContent = "Time: " + secondsLeft;
       if(secondsLeft === 0) {
         clearInterval(timerInterval);
       }
     }, 1000);  
   };

   function setQuestions() {
      q1.style.display = "flex";
      console.log(wrong);
      wrong.onclick =  function () {
      console.log ("wrong");
      secondsLeft -=10;
    }

    right.onclick =  function () {
      console.log ("right");
      right.style.backgroundColor = "green";
    }
    
   }; 

  
   