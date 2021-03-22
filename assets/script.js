//build a timer function , when answer incorrect subtract from the timer. 
//make the start button function that calls the timer function
//and make sure to clear out so the start button does not start a new function every time it is pressed
//when all questions have been answered or times run out the game is over
//store score in localStorage and allow an input for initals 
// need a variable to keep score 

let timer = 60;

let timeEl = document.querySelector(".time");
let start_button = document.querySelector("#start_game_button");

start_button.addEventListener("click",function (){
    
setTime();


}
)









function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timer--;
      timeEl.textContent = "Time:" + timer;
  
      if(timer === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        
      }
  
    }, 1000);
}