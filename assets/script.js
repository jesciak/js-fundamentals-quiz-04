var countdown =document.querySelector('#countdown');
var timer =document.querySelector('#timer');
var viewhighScore=document.querySelector('#highscores');
var main =document.querySelector('#main-content');
var body =document.querySelector('body');
var message =document.querySelector('h1');
var textEl =document.querySelector('p');
var startBtn =document.querySelector('#start');
var choiceList =document.querySelector('#choice-list');
var indicator =document.querySelector('#indicator');
var textinput =document.createElement('input');
var form= document.createElement('div');
var back= document.createElement('button');
var formBtn= document.createElement('button');
var clear= document.createElement('button');
var highscoreEl=document.createElement('div');

var questions = [
    {
        questions: "Arrays in Javascript can be used to store _______________?",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above",],
        answer: 3,
    },
    {
        questions:  "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. alerts", "3. booleans", "4. numbers",],
        answer: 1,
    },
    {
        questions: "String values must be enclosed within ______________ when being assigned to variables.",
        choices:["1. quotes", "2. commas", "3. curly brackets", "4. parenthesis",],
        answer: 0,
    },
    {
        questions: "A very useful tool used during developement and debugging for printing content to the debugger is:",
        choices: ["1. for loops", "2. JavaScript", "3. console.log", "4. terminal/bash",],
        answer: 2,
    },
    {
        questions: "The condition in an if/else statement is enclosed with _____________.",
        choices: ["1. parenthesis", "2. quotes", "3. square brackets", "4. curly brackets",],
        answer: 0,
    },
];



init();
    function init(){
        countDown=50;
        score=0;
    }
     function countdownTrigger(){
       textEl.remove();
        startBtn.remove();
        timerInterval =setInterval(function(){
            countDown--;
        countdown.textContent=countDown;
            if(countDown===0){
                clearInterval(timerInterval);
            }
        }, 1000);
        displayQuestions();
            }
 
function displayQuestions (questionArr){
    questionArr= questionArr || 0;
   var newQuestion= questions[questionArr];
   message.textContent=newQuestion.questions;
   

   var multipleChoice= document.createElement('h3');
   choiceList.appendChild(multipleChoice);
   
   for (var i=0; i< newQuestion.choices.length; i++){
    var choiceData =newQuestion.choices[i];

    var list=document.createElement('li');
    list.setAttribute('data-index', i);
    list.textContent=choiceData;
    multipleChoice.appendChild(list);

    list.addEventListener('click', function(event){
        if(
            newQuestion.answer=== parseInt(event.target.getAttribute('data-index')))
        {
            score +=10;
            indicator.innerHTML='<hr/>Correct!';
                indicator.setAttribute('style', 'color: gray');
        }  else {
                    countDown -=10;
                    indicator.innerHTML='<hr/>Wrong!';
                        indicator.setAttribute('style', 'color: gray',);
        };
    
        questionArr++;

        if(questionArr===questions.length){
            clearInterval(timerInterval);
            indicator.textContent='';
            multipleChoice.remove();
        message.textContent="Quiz is over!";
            message.appendChild(textEl);
           textEl.textContent="Your final score is: " + score;

            renderForm();
        }
        else{
            setTimeout(function(){
                displayQuestions(questionArr);
                multipleChoice.remove();
                indicator.textEl='';
            }, 1000);
        }
            });
        }
        }
    function renderForm(){
    form.textContent= 'Enter initials: ';
       formBtn.textContent='Submit';
       main.appendChild(form);
       form.appendChild(textinput);
       form.appendChild(formBtn);
    }
    var highScore={
        initials: '',
        score: 0,
    };
    var scores=[];
    var countDown;
    var timerInterval;

    function submitScore(){
        var inputInitials= document.querySelector('input').value;

        highScore.initials=inputInitials;
        highScore.score= score;
        localStorage.setItem('highscore', JSON.stringify(highScore));
        main.innerHTML='';
        viewhighScore.textContent='';
        timer.textContent='';

        
        SaveScores();
    }
        function SaveScores(){
            var storedScore=JSON.parse(localStorage.getItem('highScore'));
            message.innerHTML = 'Highscores';
            main.appendChild(message);
            highscoreEl.setAttribute('class', 'high-score');
            console.log(storedScore.initials);
            console.log(storedScore.score);
            highscoreEl.textContent=`${storedScore.initials} - ${storedScore.score}`;
            message.appendChild(highscoreEl);
            back.textContent= 'Back';
            clear.textContent='Clear';
            main.appendChild(back);
            main.appendChild(clear);  
        }
function clear(){
    highscoreEl.remove();
}
function back(){
    location.reload();
}
viewhighScore.addEventListener('click', function(){
textEl.remove();
startBtn.remove();
SaveScores();
});
    

startBtn.addEventListener('click', countdownTrigger);
back.addEventListener('click', back);
formBtn.addEventListener('click', submitScore);
clear.addEventListener('click', clear);
   