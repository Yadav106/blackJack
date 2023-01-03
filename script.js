let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById('messageEl');
let cardsEl = document.getElementById('cardsEl');
let sumEl = document.getElementById('sumEl');

function startGame() {
    if(sum <= 20){
        message = "Do you want a new card?";
    } else if (sum === 21) {
        message = "You got a BlackJack!!!!";
        hasBlackjack = true;
    } else {
        message = "You're out of the Game!";
        isAlive = false;
    }
    sumEl.innerText = 'Sum : ' + sum;
    messageEl.innerText = message
}