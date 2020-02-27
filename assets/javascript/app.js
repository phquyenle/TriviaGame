$(document).ready(function() {
var trivia=[
    {
        question:"In the story of Snow White and the Seven Dwarfs, how did the evil witch poison Snow White?",
        answers:["a. With an Apple",'b. With a Cake','c.With a Doughnut','d. With a Sandwich'],
        answer:0
           

    },
    {
        question: "Which of these fairy tale princesses loses a shoe?",
        answers: ["a. Belle","b.Cinderella","c. Snow White", "d. Elsa",],
        answer:1
    },
    {
        question:"In the fairy tale about the princesses who dance all night, who discovers their secret?",
        answers:["a. A prince","b. A soldier","c. A witch", "d. A woodcutter"],
       answer:1
    },
    { 
        question: "In which popular story would you find a talking cricket?",
        answers: ["a. Cinderella","b. Pinocchio","c. Briar Rose","d. Peter Pan"],
       answer:1
    },
    {
        question:"The character of Maleficent appears in which fairy tale? ",
        answers:["a. Snow White", "b. Thumbelina","c. Sleeping Beauty", "d. Red Rose" ],
      answer:2

    },
    {
        question:"In the original story, Hansel and Gretel get assistance from what kind of creature on their way home from the witch's home?",
        answers:["a. A duck","b. A frog","c. An eagle", "d. A horse"],
        answer: 0
    },
    {
        question:"The movie takes place in the fictional Kingdom of Arendelle, where the two princesses, Elsa and Anna, live. At the beginning, the two are seen in a moonlit bedroom as Anna tries to wake her sister so they can play. What does Anna say that eventually gets Elsa out of bed?",
        answers:["a. Do you want to make snowflakes?", "b. Do you want to buil an igloo?","c. Do you want to build a snowman?", "d. Do you want to go sledding?"],
           answer: 2
       
    },

];
var seconds;
var time;
var correctCount= 0;
var wrongCount=0;
var unansweredCount=0;
var currentQuestion;
var selectanswer;
var game;
var clock;
var intervalId;
var answered;
// gif to go along with each questions
var gifArray =['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7'];
//messages to show up at the end of questions
var messages = {
   correct: "Yes, you got it!",
 incorrect: "No, that's not it",
 endTime: "Out of time!",
  done: "Let's see how well you did!"
 }
 

//start button 
$("#startBtn").on ('click', function(){
    $(this).hide();
    startGame();
    
})
    
  // start over button   
  $("#startoverBtn").on ('click', function(){
    $(this).hide();
    startGame();
    backgroundSound.play();
})

function startGame (){
    $("#correctanswer").empty();
    $("#wronganswer").empty();
    $("#unanswered").empty();
    currentQuestion =0;
    correctCount=0;
    wrongCount=0;
    unansweredCount=0;
    newQuestion();
    var backgroundSound=document.createElement("audio");
    backgroundSound.setAttribute("src","assets/sound/early-sunrise.mp3");
    backgroundSound.play();
    backgroundSound.loop=true;
    //var correctSound= document.createElement("audio");
    //var incorrectSound= document.createElement("audio");
    //correctSound.setAttribute("src", "assets/sound/chimes-glassy.mp3");
    //incorrectSound.setAttribute("src","assets/sound/glitch-in-the-matrix.mp3");

};



function newQuestion () {
    $("#correctanswer").empty();
    $("#message").empty();
    $('#gif').empty();
    answered = true;
    // to display question number out of the total number of questions
    $("#currentQuestion").html('Question #' + (currentQuestion+1) + '/' + trivia.length );
    $(".questions").html('<h2>' + trivia[currentQuestion].question + '</h2>'); 
    for (var q = 0; q < 4; q++){
		var options = $('<div>');
		options.text(trivia[currentQuestion].answers[q]);
		options.attr({'data-index': q });
	    options.addClass('thisChoice');
		$('.answerlist').append(options);
    }
  runTimer();
    $('.thisChoice').on('click',function(){
		selectanswer = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}; 

  


   


 
// timer

function runTimer() {
    seconds= 20;
    $("#timeLeft").html("<h4> Time remaining: " + seconds+ "</h4>");
    time= setInterval(decrement, 1000);
    answered = true;
};
//countdown 
 function decrement (){
     $("#timeLeft").html("<h4> Time remaining: " + seconds + "</h4>");
     seconds --;
     if (seconds < 1) {
        clearInterval(time);
        answerPage();
        answered= false;
       }

 };

 function answerPage() {
     $('.questions').empty();
    $(".thisChoice").empty();
    $('#currenQuestions').empty();


    var answerListtext= trivia[currentQuestion].answers[trivia[currentQuestion].answer];
    var answerListindex= trivia[currentQuestion].answer;
  
$("#gif").html('<img src="assets/images/' + gifArray[currentQuestion] + '.gif" width="400px">');
        if (selectanswer === answerListindex && (answered === true) ){
            $('#message').html(messages.correct);
            correctCount++;
            //correctSound.play();
            $('#correctanswer').html('<p> Right answers: ' + correctCount + '</p>');
        }
        else if (selectanswer != answerListindex && (answered === true) )
    {
        $("#message").html(messages.incorrect);
        wrongCount++;
        //incorrectSound.play();
        $('#wronganswer').html('<p> Wrong answers: ' + wrongCount + '</p>');
    }

    else {
        unansweredCount++;
        $("#message").html(messages.endTime);
        answered=true;
    }
    if(currentQuestion == (trivia.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 5000);
	}	
 }
function scoreboard(){
    $('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();

	$('#endingmessage').html(messages.done);
	$('#correctanswer').html("Correct Answers: " + correctCount);
	$('#wronganswer').html(" Wrong Answers: " + wrongCount);
    $('#unanswered').html("Unanswered: " + unansweredCount);
    $('#startoverBtn').show();
    $('#startoverBtn').html('Play again?');
}

});


