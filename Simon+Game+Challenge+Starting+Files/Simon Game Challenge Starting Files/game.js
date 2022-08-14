var buttonColours = ["red", "blue", "green", "yellow"]

var gamePattern = []

var userClickedPattern = []

var started = false;

var level = 0;


$(document).keypress(function(){
    if(!started){

        $("#level-title").text("Level "+ level);
        nextSequence()
        started = true;
    }
    
})


$(".btn").click(function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour)
    // need  to play the sound of the clicked button
    playSound(userChosenColour)
    animatePress(userChosenColour)

    checkAnswer(userClickedPattern.length-1);
})


// game logic development

function  checkAnswer(currentLevel){

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence()
            }, 1000)
    
        }
    }
    
    else{
        console.log("wrong");
        var audio2 = new Audio("sounds/wrong.mp3")
        audio2.play();
        $("body").addClass("game-over");

        

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200)

        $("h1").text("Game Over, Press Any Key to Restart");

        startOver();
    }
  

}


function nextSequence() {

    //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern = [];
  
    level++;
    $("#level-title").text("Level " + level);
  
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
  }



// function nextSequence(){
//     userClickedPattern = []

//     level++;

//     $("#level-title").text("Level "+ level);


//     var randomNumber = Math.floor(Math.random()*4);
    
//     var randomChosenColour = buttonColours[randomNumber]
//     gamePattern.push(randomChosenColour)
    
    

//     //selecting the button as per the randomChosenColour
//      $("#"+gamePattern[0]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//     playSound(randomChosenColour)
// }


function playSound(name){
    var audio1 = new Audio("sounds/"+ name+".mp3");
    audio1.play();
}

function animatePress(currentColour){
    console.log(currentColour)
    $("."+ currentColour).addClass("pressed");

    setTimeout(function(){
        $("."+ currentColour).removeClass("pressed")
    }, 100);
}

function startOver(){
    level = 0;
    gamePattern = []
    started = false;
}

