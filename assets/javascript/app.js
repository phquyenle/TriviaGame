$(document).ready(function() {
var trivia=[
    {
        question:"In the story of Snow White and the Seven Dwarfs, how did the evil witch poison Snow White?",
        answer:[
            { answer: 'a. With an Apple', value:true},
            {answer:'b. With a Cake', value:false},
            {answer: 'c.With a Doughnut', value:false},
            {answer:'d. With a Sandwich', value:false},
            ],
            photo: "assets/images/question1.gif"

    },
    {
        question: "Which of these fairy tale princesses loses a shoe?",
        answer: [
            {answer: "a. Belle", value:false },
            {answer: "b.Cinderella", value:true},
            {answer: "c. Snow White", value:false},
            {answer: "d. Elsa", value:false},
        ],
        photo: "assets/images/question2.gif"
    },
    {
        question:"In the fairy tale about the princesses who dance all night, who discovers their secret?",
        answer:[
            {answer:"a. A prince", value:false},
            {answer:"b. A soldier", value: true},
            {answer:"c. A witch", value:false},
            {answer: "d. A woodcutter", value:false},
        ],
        photo:"assets/images/question3.gif"
    },
    { 
        question: "In which popular story would you find a talking cricket?",
        answer: [
            {answer:"a. Cinderella", value:false},
            {answer:"b. Pinocchio", value:true},
            {answer: "c. Briar Rose", value:false},
            {answer:"d. Peter Pan", value:false},
        ],
        photo:"assets/images/question4.gif"
    },
    {
        question:"The character of Maleficent appears in which fairy tale? ",
        answer:[
            {answer:"a. Snow White", value:false},
            {answer:"b. Thumbelina", value:false},
            {answer:"c. Sleeping Beauty", value:true},
            { answer:"d. Red Rose", value: false},
        ],
        photo:"assets/images/question5.gif"

    },
    {
        question:"In the original story, Hansel and Gretel get assistance from what kind of creature on their way home from the witch's home?",
        answer:[
            {answer:"a. A duck", value:true},
            {answer:"b. A frog", value:false},
             {answer:   "c. An eagle", value:false},
              {answer:  "d. A horse", value:false},
        ],
        photo:"assets/images/question6.gif"
    },
    {
        question:"The movie takes place in the fictional Kingdom of Arendelle, where the two princesses, Elsa and Anna, live. At the beginning, the two are seen in a moonlit bedroom as Anna tries to wake her sister so they can play. What does Anna say that eventually gets Elsa out of bed?",
        answer:[
            {answer:"a. Do you want to make snowflakes?", value: false},
            {answer:"b. Do you want to buil an igloo?", value: false},
            {answer:"c. Do you want to build a snowman?", value:true},
            {answer:"d. Do you want to go sledding?", value: false},
        ],
        photo:"assets/images/question7.gif"
    },

];
//var currentQuestion;
var timer= 30;
var correctCount= 0;
var wrongCount=0;
var unansweredCount=0;
var game;
var clock;
var running= false;
var intervalId,
//var messages = {
//   correct: "Yes, you got it!",
//   incorrect: "No, that's not it",
//  endTime: "Out of time!",
//  done: "Let's see how well you did!"
//}

//start button 
$('#startBtn').on('click', function(){
	$("#start").hide();
    displayQuestion();
    runTimer();
    for (var j=o; j < trivia.length; j++){
        holder.push(trivia[j]);
    }
    }); 
//hiding the reset button 
$("#reset").hide();

// timer

function runTimer () {
    if (!running {
        intervalId= setInterval(decrement, 1000 );
        running= true;
    }
};
//countdown 
 function decrement (){
     $("#timeLeft").html("<h4> Time remaining: " + timer + "</h4>");
     timer --;
     // stop when reach 0

     if (timer === 0) {
         unansweredCount++;
         stop ();
    
     }
 }

function stop () {
    running = false;
    clearInterval(intervalId);
}



})
