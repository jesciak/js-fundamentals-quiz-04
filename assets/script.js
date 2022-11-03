var countdown =document.querySelector('#countdown');
var timer =document.querySelector('#timer');
var main =document.querySelector('main');
var h1 =document.querySelector('h1');
var p =document.querySelector('p');
var start =document.querySelector('#start');
var choices =document.querySelector('#choices');
var indicator =document.querySelector('#indicator');





var quizQuestions = [
    {
        questions: "Arrays in Javascript can be used to store _______________?",
        choices: ["1. <numbers and strings>", "2. <other arrays>", "3. <booleans>", "4. <all of the above>"],
        answer: 3,
    },
    {
        questions:  "Commonly used data types DO NOT include:",
        choices: ["1. <strings>", "2. <alerts>", "3. <booleans>", "4. <numbers>"],
        answer: 1,
    },
    {
        questions: "String values must be enclosed within ______________ when being assigned to variables.",
        choices:["1. <quotes>", "2. <commas>", "3. <curly brackets>", "4. <parenthesis>"],
        answer: 0,
    },
    {
        questions: "A very useful tool used during developement and debugging for printing content to the debugger is:",
        choices: ["1. <for loops>", "2. <JavaScript>", "3. <console.log>", "4. <terminal/bash>"],
        answer: 2,
    },
    {
        questions: "The condition in an if/else statement is enclosed with _____________.",
        choices: ["1. <parenthesis>", "2. <quotes>", "3. <square brackets>", "4. <curly brackets>"],
        answer: 0,
    },
];
 
function init(){
    countDown= 50;
    countdownTrigger();
}

function countdownTrigger(){
    if(countDown >0){
        countDown--;
        document.getElementById('start').innerHTML= countDown;
        if (countDown>0){
            counter = setTimeout('countdownTrigger()', 1000);
        }
    }
}
init();

function renderQuestions (questionArr){
    questionArr= questionArr || 0;
   
}

// function init(){
//     countDown=30;
//     score=0;
// };
//  function startQuiz(){
//     textElement.remove();
//     startButton.reomove();
//     timerInterval =setInterval(function(){
//         setSeconds==;
//         sElement.textContent=countDown;
//         if(countDown===0){
//             clearTimer(timerInterval);
//         }
//     }, 1000);
//         }
 
