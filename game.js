
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];

var started = false;
var level = 0;


//computer random pattern 
$(document).keypress(function () {
    
    if (!started) {
        $("h1").html("Level " + level);
        nextSequence();
        started = true;
    }
});


function nextSequence() {
    userClickPattern = [];
    level++;
    $("h1").html("Level " + level);
    var randomColor = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomColor);
    myFlash(randomColor);
    coolSound(randomColor);
}

    
//detect the userclick
$(".btn").click(function(e){
    var userClick = e.target.id;
   userClickPattern.push(userClick);
   myFlash(userClick);
   coolSound(userClick);
   myShadow(userClick);
   checkAnswer(userClickPattern.length-1);
  

}) 

//game

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
        if (userClickPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
        $("body").addClass("game-over");
        $("h1").html("GAME OVER!!, Press Any Key To Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();

    }

}

// the sound
function coolSound(colorTransfered) {
    switch (colorTransfered) {
        case "green":
            var audio = new Audio('sounds/green.mp3');
            audio.play();
            break;
        case "blue":
            var audio = new Audio('sounds/blue.mp3');
            audio.play();
            break;
        case "yellow":
            var audio = new Audio('sounds/yellow.mp3');
            audio.play();
            break;
        case "red":
            var audio = new Audio('sounds/red.mp3');
            audio.play();
            break;

        default:
            var audio = new Audio('sounds/wrong.mp3');
            audio.play();
    }
}




//linking the array with the innerHTML

function myFlash(myColor) {
    var activeButton = $("." + myColor);
    activeButton.delay(50).fadeOut(100).fadeIn(100);
    
};

function myShadow(myShadowColor) {
    var selectedButton = $("." + myShadowColor);
    selectedButton.addClass("pressed");

  setTimeout(function(){
   selectedButton.removeClass("pressed");
  },100);
};

function startOver() {
    level = 0;
    gamePattern = [];
    started = false
} 