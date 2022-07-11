
var container = document.getElementById("container");
var startquiz = document.getElementById("start");
var count = document.getElementById("counter");

var wrong = document.getElementsByClassName("wrong");
var right = document.getElementsByClassName("right");

var q1 = document.getElementById("questions1");
var q2 = document.getElementById("questions2");
var q3 = document.getElementById("questions3");
var q4 = document.getElementById("questions4");
var q5 = document.getElementById("questions5");

var questions = [q1,q2,q3,q4,q5];

var secondsLeft = 75;

startquiz.addEventListener("click", setTime);

function setTime() {
   container.style.display = "none";
   setQuestions();
   var timerInterval = setInterval(function() {
      secondsLeft--;
      count.textContent = "Time: " + secondsLeft;
       if(secondsLeft <= 0) {
        for (var i = 0; i < questions.length; i++) {
          questions[i].style.display = "none";
          showResults();
         }
         clearInterval(timerInterval);  
      }
      
      }, 1000); 
  }
  

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
      nextQuestion(value);
      });
    }
    
    function nextQuestion(value) {

      if (value+1<questions.length){
        questions[value].style.display = "none";
        questions[value+1].style.display = "flex";
      } else {
        questions[value].style.display = "none";
        showResults();
      }
    }
  }
   
  function showResults {
    
  }