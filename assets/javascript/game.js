var randomNumber = Math.floor(Math.random()*(120 - 19 + 1) + 19);
var winCount = 0;
var loseCount = 0;
var blue = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var pink = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var green = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var purple = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var userScore = 0;


function shuffleCrystalValues(){
	blue = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	pink = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	green = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	purple = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}


function gamePlay(){
	if(userScore === randomNumber){
		winCount++;
		$('#win-counter').text(winCount);
        $('#win-or-lose').text('You win!');
        alert
		randomNumber = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(randomNumber);
		userScore = 0;
		$('#current-score-counter').text(userScore);
		shuffleCrystalValues();
	} else if(userScore > randomNumber){
		loseCount++;
		$('#loss-counter').html(loseCount);
		$('#win-or-lose').text('You lose!');
		randomNumber = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(randomNumber);
		userScore = 0;
		$('#current-score-counter').text(userScore);
		shuffleCrystalValues();
	}
}



$('#random-number').text(randomNumber);



$('#blue').on('click', function(){
	userScore += blue;
	$('#current-score-counter').text(userScore);
	gamePlay();
});


$('#pink').on('click', function(){
	userScore += pink;
	$('#current-score-counter').text(userScore);
	gamePlay();
});


$('#green').on('click', function(){
	userScore += green;
	$('#current-score-counter').text(userScore);
	gamePlay();
});


$('#purple').on('click', function(){
	userScore += purple;
	$('#current-score-counter').text(userScore);
	gamePlay();
});















