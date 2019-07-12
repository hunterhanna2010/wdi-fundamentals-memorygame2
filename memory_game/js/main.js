//create four variables that simulate the cards in your game
//string data types
//two "queen" values and two "king" values
//name variables cardOne, cardTwo, cardThree, cardFour
//console.log("User flipped " + cardOne); repeat through cardFour

var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log("User flipped " + cardThree);
console.log("User flipped " + cardFour);

//create an array 'cards'
//the array should hold four strings. Two for 'queen' and two for 'king'
//create another array 'cardsinPlay'
//set its value to an empty array
//create a variable 'cardOne' and store the first item in the 'cards' array in it.
//add this first card to the 'cardsinPlay' array
//Use the push() method to add 'cardOne' to the end of the 'cardsinPlay' array
//Ex. cardsinPlay.push(cardOne)
//console.log("User flipped queen");
//create var 'cardTwo' and store the third item in 'cards' array
//add this second card to the 'cardsInPlay' array
//Use the push method to add cardTwo to the end of the 'cardsInPlay' array
//write an 'if' statement that checks to see if the length of the 'cardsInPlay' array is 2
//use the length property to find out how many items are in the 'cardsInPlay' array and use the === operator to see if the length is equal to 2
//create an if...else statement that checks for the equality between the two cards in the 'cardsInPlay' array.
//for the condition, check to see if the first card in the 'cardsInPlay' array is equal to the the second card in the 'cardsInPlay' array
//if the values are equal, create an alert("You found a Match!");
//if the values are not equal, create another alert("sorry, try again");

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
var cardOne = cards [0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");
var cardTwo = cards [2];
cardsInPlay.push(cardTwo);
console.log("User flipped king");

if (cardsInPlay.length === 2) {
	console.log("Sorry, please try again");
} else if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a Match!");
}



