var countdown =document.querySelector('#countdown');
var timer =document.querySelector('#timer');
var main =document.querySelector('main');
var h1 =document.querySelector('h1');
var p =document.querySelector('p');
var start =document.querySelector('#start');
var choices =document.querySelector('#choices');
var indicator =document.querySelector('#indicator');
var textinput =document.querySelector('input');
var form= document.querySelector('div');
var next= document.querySelector('button');
var back= document.querySelector('button');
var formBtn= document.querySelector('button');
var clear= document.querySelector('button');
var viewhighScore=document.querySelector('#highscores');

var countDown;
var counterInterval;
var highScore={
    initials: '',
    score: 0,
};
var scores=[];

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
        countDown=50;
        score=0;
    }
     function countdownTrigger(){
       p.remove();
        start.remove();
        counterInterval =setInterval(function(){
            countDown--;
        countdown.textContent=countDown;
            if(countDown===0){
                clearTimer(counterInterval);
            }
        }, 1000);
        renderQuestions();
            }
 
function renderQuestions (questionArr){
    questionArr= questionArr || 0;
   var newQuestion= quizQuestions[questionArr];
   h1.textContent=newQuestion.quizQuestions;

   var multipleChoice= document.createElement('div');
   choices.appendChild(multipleChoice);
   
   for (var i=0; i<newQuestion.choices.length; i++){
    var choice =newQuestion.choices[i];

    var list=document.createElement('li');
    list.setAttribute('list', i);
    list.textContent=choice;
    multipleChoice.appendChild(list);

    list.addEventListener('click', function(event){
        if(
            newQuestion.answer===
            parseInt(event.target.getAttribute('list')))
        {
            score +=10;
            indicator.innerHTML='<h2>Correct!';
                indicator.setAttribute('style', 'color: green');
        }  else {
                    countDown -=5;
                    indicator.innerHTML='<h2>Wrong!';
                        indicator.setAttribute('style', 'color: red');
        };
    
        newQuestion++;

        if(newQuestion===quizQuestions.length){
            clearTimeout(counterInterval);
            indicator.textContent='';
            multipleChoice.remove();
            h1.textContent="Quiz is over!";
            h1.appendChild(p);
            p.textContent="Your final score is: " + score;

            renderForm();
        }
        else{
            setTimeout(function(){
                init(newQuestion);
                multipleChoice.remove();
                indicator.textContent='';
            }, 1000);
        }
            });
        }
        }
    function renderForm(){
        form.textContent= 'Enter initials: ';
       formBtn.textContent='Sumbit';
       main.appendChild(form);
       form.appendChild(textinput)
       form.appendChild(formBtn);
    }
var highScore={
    initials: '',
    score: 0,
};
var scores=[];

    function submitScore(){
        var inputInitials= document.querySelector('input').value;

        highScore.initials=inputInitials;
        highScore.score= score;
        localStorage.setItem('highschore', JSON.stringify(highScore));
        main.innerHTML='';
        viewhighScore.textContent='';
        timer.textContent='';

        console.log(highScore);
        renderHighScores();

        function renderHighScores(){
            var storedScore=JSON.parse(localStorage.getItem('highScore'));
            h1.innerHTML = 'Highscores';
            main.appendChild(h1);
            highScore.setAttribute('class', 'highScore');
            highScore.textContent=`${storedScore.initials} - ${storedScore.score}`;
            h1.appendChild(highScore);
            back.textContent= 'Back';
            next.textContent='Next';
            clear.textContent='Clear';
            main.appendChild(back);
            main.appendChild(next);
            main.appendChild(clear);  
        }
function clear(){
    highScore.remove();
}
function back(){
    location.reload();
}
viewhighScore.addEventListener('click', function(){
p.remove();
start.remove();
renderHighScores();
});
    }

start.addEventListener('click', countdownTrigger);
next.addEventListener('click', next);
back.addEventListener('click', back);
formBtn.addEventListener('click', submitScore);
clear.addEventListener('click', clear);


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
 
// function init(){
//     countDown= 50;
//     countdownTrigger();
// }

// function countdownTrigger(){
    
//     if(countDown >0){
//         countDown--;
//         document.getElementById('timer').innerHTML= countDown;
//         if (countDown>0){
//             counter = setTimeout('countdownTrigger()', 1000);
//         }
      
//     }
// }
// init();