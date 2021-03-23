//build a timer function , when answer incorrect subtract from the timer. 
//make the start button function that calls the timer function
//and make sure to clear out so the start button does not start a new function every time it is pressed
//when all questions have been answered or times run out the game is over
//store score in localStorage and allow an input for initals 
// need a variable to keep score 

let timer = 30;

let timeEl = document.querySelector(".time");
let start_button = document.querySelector("#start_game");
let questions = [];


//array of objects for questions and answers 
questions = [{text: " Which is not a primitive data type in JavaScript? ", answer: ["A. Boolean", "B. Undefined", "C.Pizza", "D. Number"], correctAnswerIndex : 2},

{text: " Which can you use to declare a variable in JavaScript? ", answer: ["A. Var", "B. Const", "C. Let", "D. All of the above"], correctAnswerIndex : 3},

{text: " Inside which HTML element do we put the JavaScript? ", answer: ["A. <script>", "B. <js>", "C. <javascript>", "D. <scripting>"], correctAnswerIndex : 0},

{text: " Where is the correct place to insert a JavaScript? ", answer: ["A. <body> section", "B. <head> section", "C. <section>", "D. You do not have to insert Javascript"], correctAnswerIndex : 0},

{text: " How do you write 'Hello World' in an alert box? ", answer: ["A. promt('Hello World')", "B. confirm('Hello World')", "C. alert('Hello World')", "D. 'Hello World'"], correctAnswerIndex : 2},

{text: "How would you call a function named 'myFunction'? ", answer: ["A. call", "B. myFunction()", "C. myFunction", "D. function(my)"], correctAnswerIndex : 1},

{text: " Which is the syntax for writing a for loop? ", answer: ["A. for(i = 0; i < O; i++)", "B. Undefined", "C. i = 0; i = 1", "D. forLoop()"], correctAnswerIndex : 0},

{text: " How can you add a comment in a JavaScript? ", answer: ["A. This is a comment", "B. <!This is a comment-->", "C.Pizza", "D. //this is a comment"], correctAnswerIndex : 3}

];

start_button.addEventListener("click",function (){
    
setTime();
});










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