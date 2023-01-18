var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickPattern = [];
//var level = "Level" + i


// var toggle = function() {
//     var on = false;
//     return function() {
//     if(!on) {
//         on = true;
//         //Do stuff if ON
//         return;
//     }
//     //Do stuff if OFF
//     on = false;
// }
// }();

// toggle();

//computer random pattern 
$(document).keypress(function(nextSequence) {
    var txtInput = nextSequence.keyCode;
    var letterToBe = String.fromCharCode(txtInput);
    
    if(letterToBe === "n") {
        playGame();
        
    // var randomColor = buttonColors[Math.floor(Math.random() * 4)];
    // gamePattern.push(randomColor);
    // myFlash(randomColor);
    // coolSound(randomColor);
    // levelCounter();
     
    
    } else{
        $("h1").html("You click the wrong letter DUMB FUCK refresh to play the game!!!"); 
   }
});

function playGame() {
var randomColor = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomColor);
    myFlash(randomColor);
    coolSound(randomColor);
    levelCounter();
    //userClickPattern.length = 0;
}


//modify the level number
var counter = [];
function levelCounter() {
        var count = 1;
        var level = counter.length;

        counter.push(count)

    $("h1").html("Level " + level);   
}
    
//detect the userclick
$(".btn").click(function(e){
    var userClick = e.target.id;
   userClickPattern.push(userClick);
   myFlash(userClick);
   coolSound(userClick);
   myShadow(userClick);
   checkAnswer(userClick);
  

}) 

//game

function checkAnswer(currentLevel) {
    var userInput = userClickPattern.toString(); // need to conver it to string first because cant compare object(array is obj)
    var gameInput = gamePattern.toString();
    // var userInput = userClickPattern[userClickPattern.length-1];
    // var gameInput = gamePattern[gamePattern.length-1];

    if (userInput === gameInput) {
        
        setTimeout(playGame, 1000);
        userClickPattern.length = 0;
    } else {
        setTimeout(gameOver, 1000);
        // $("h1").html("GAME OVER!!");
        // counter.length = 0;
        
    }
}


function gameOver(){
    $("h1").html("GAME OVER!!");
    counter.length = 0;
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