var nextSequence = () => {
    return Math.floor(Math.random() * 4);
}
var randomNumber = nextSequence();
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor = buttonColors[randomNumber];
var gamePattern = [];
gamePattern.push(randomChosenColor);
$("#"+randomChosenColor).fadeOut(100).fadeIn(100);