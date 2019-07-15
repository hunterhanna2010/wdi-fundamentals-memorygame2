
var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: './images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: './images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: './images/king-of-diamonds.png'
}
];
var cardsInPlay = [];
var playerScore = 0;
var scoreDisplay = document.getElementById('scoreDisplay');

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a Match!");
			playerScore++;
			scoreDisplay.textContent = playerScore;
		} else {
			alert("sorry, please try again.");
		}
	}
}


var flipCard = function () {
	console.log(this);
	var cardId = this.getAttribute("data-id");
	console.log(cardId);
	this.setAttribute("src", cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	
	if (cardsInPlay.length === 2) {
	checkForMatch();
}	else {
	flipCard ();

	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	}
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "./images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

var resetButton = document.getElementById('reset'); 
		resetButton.addEventListener("click", function() {
		var playedCards = document.getElementById("game-board").children
		for (var i = 0; i < playedCards.length; i++) {
			playedCards[i].setAttribute("src", "./images/back.png");
			

			cardsinPlay = [];
		}
		});


createBoard();




