
var startquiz = document.getElementById("start");

var count = document.getElementById("counter");
count.innerHTML = "counter";


for (i=75; i>0 ;i--) {
    if {

    }

    if else (i===1){ 
        endquiz()
    }
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }



function endquiz () {

}