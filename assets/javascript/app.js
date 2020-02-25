$(document).ready(function() {
var trivia=[
    {
        question:"In the story of Snow White and the Seven Dwarfs, how did the evil witch poison Snow White?",
        answers:[
            { answer: 'a. With an Apple', value:true},
            {answer:'b. With a Cake', value:false},
            {answer: 'c.With a Doughnut', value:false},
            {answer:'d. With a Sandwich', value:false},
            ],
            photo: "assets/images/question1.gif"

    },
    {
        question: "Which of these fairy tale princesses loses a shoe?",
        answers: [
            {answer: "a. Belle", value:false },
            {answer: "b.Cinderella", value:true},
            {answer: "c. Snow White", value:false},
            {answer: "d. Elsa", value:false},
        ],
        photo: "assets/images/question2.gif"
    },
    {
        question:"In the fairy tale about the princesses who dance all night, who discovers their secret?",
        answers:[
            {answer:"a. A prince", value:false},
            {answer:"b. A soldier", value: true},
            {answer:"c. A witch", value:false},
            {answer: "d. A woodcutter", value:false},
        ],
        photo:"assets/images/question3.gif"
    },
    { 
        question: "In which popular story would you find a talking cricket?",
        answers: [
            {answer:"a. Cinderella", value:false},
            {answer:"b. Pinocchio", value:true},
            {answer: "c. Briar Rose", value:false},
            {answer:"d. Peter Pan", value:false},
        ],
        photo:"assets/images/question4.gif"
    },
    {
        question:"The character of Maleficent appears in which fairy tale? ",
        answers:[
            {answer:"a. Snow White", value:false},
            {answer:"b. Thumbelina", value:false},
            {answer:"c. Sleeping Beauty", value:true},
            { answer:"d. Red Rose", value: false},
        ],
        photo:"assets/images/question5.gif"

    },
    {
        question:"In the original story, Hansel and Gretel get assistance from what kind of creature on their way home from the witch's home?",
        answers:[
            {answer:"a. A duck", value:true},
            {answer:"b. A frog", value:false},
             {answer:   "c. An eagle", value:false},
              {answer:  "d. A horse", value:false},
        ],
        photo:"assets/images/question6.gif"
    },
    {
        question:"The movie takes place in the fictional Kingdom of Arendelle, where the two princesses, Elsa and Anna, live. At the beginning, the two are seen in a moonlit bedroom as Anna tries to wake her sister so they can play. What does Anna say that eventually gets Elsa out of bed?",
        answers:[
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
var counter =0;
var correctCount= 0;
var wrongCount=0;
var unansweredCount=0;
var currentQuestion;
var selectanswer;
var game;
var clock;
var intervalId;
var gifArray =['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7'];
var messages = {
   correct: "Yes, you got it!",
 incorrect: "No, that's not it",
 endTime: "Out of time!",
  done: "Let's see how well you did!"
 }

//start button 
$("#startBtn").on ('click', function(){
    $(this).hide();
    runTimer();
    startGame();
})
    
  // start over button   
$("#startoverBtn").on('click', function (){
    $(this).hide();
    startGame();
});

function startGame (){
    $("#correctanswer").empty();
    $("#wronganswer").empty();
    $("#unanswered").empty();
    currentQuestion =0;
    correctCount=0;
    wrongCount=0;
    unansweredCount=0;
    newQuestion();

};
// random order of questions everytime



function newQuestion () {
    $("#correctanswer").empty();
    $("#message").empty();
    // to display question number out of the total number of questions
    $(".questions").html('Question #' + (currentQuestion+1) + '/' + trivia.length );
    $(".questions").html('<h2>' + trivia[currentQuestion].question + '</h2>'); 
    var showingAnswers =
    '<p class="answer first-answer">' +
   trivia[counter].answers[0].answer +
    '</p><p class="answer">' +
trivia[counter].answers[1].answer +
    '</p><p class="answer">' +
   trivia[counter].answers[2].answer +
    '</p><p class="answer">' +
   trivia[counter].answers[3].answer +
    '</p>';

  $('.answerlist').html(showingAnswers);

    //clicking an answer will pause the time
    $(".answerlist").on('click', function(){
   selectanswer=$(this).data('index');
   clearInterval(time);
    });

   
    
    }; 

  


   


 
// timer

function runTimer() {
    seconds= 20;
    $("#timeLeft").html("<h4> Time remaining: " + timer + "</h4>");
    time= setInterval(decrement, 1000);
};
//countdown 
 function decrement (){
     $("#timeLeft").html("<h4> Time remaining: " + timer + "</h4>");
     seconds --;
     if (seconds < 1) {
        clearInterval(time);
        answerpage();
       }
     // stop when reach 0

     if (seconds === 0) {
         unansweredCount++;
         stop ();
    
     };
 };

 function answerpage (){
     $('.questions').empty();

    var answerList= trivia[counter].answers;
    var answer =$(".answerpage");
$("#gif").html('<img src="assets/images/' + gifArray[currentQuestion] + '.gif" width="480px">');
    for (var q=0; q < answerList.length; q++){
        if (selectanswer === answerList[q].answer && answerList[i].value === true) {
            $('#message').html(messages.correct);
            correctCount++;
            var right = $(this).attr('class', 'right-answer answer');
            $('.time').html(timeLeft);
            $('#correctanswer').html('<p>Right answers: ' + correctCount + '</p><br>');
        }
        else if (selectanswer === answerList[q] && answerList[q].value === false) 
    {
        $("#message").html(messages.incorrect);
        $(this).attr('class', 'wrong-answer answer' );
        wrongCount++;
        $('.time').html(timeLeft);
        $('#wronganswer').html('<p>Wrong answers: ' + wrongCount + '</p>');
    }

    else {
        unansweredCount++;
        $("#message").html(messages.endTime);
    }
 }



};

});
