let card;
let sum = 0;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById('messageEl');
let cardsEl = document.getElementById('cardsEl');
let sumEl = document.getElementById('sumEl');
let button = document.getElementById('stgm');

function startGame() {
    button.innerText = 'NEW CARD';
    card = Math.floor(Math.random()*10)+1;
    sum += card;
    cardsEl.innerText += ` ${card}`;
    sumEl.innerText = 'Sum : ' + sum;
    if(sum <= 20){
        message = "Do you want a new card?";
    } else if (sum === 21) {
        message = "You got a BlackJack!!!!";
        hasBlackjack = true;
        button.innerText = 'RESTART';
        button.onclick = restart;
    } else {
        message = "You're out of the Game!";
        isAlive = false;
        button.innerText = 'RESTART';
        button.onclick = restart;
    }
    messageEl.innerText = message
}

function restart() {
    button.innerText = 'NEW CARD'
    button.onclick = startGame;
    sum = 0;
    cardsEl.innerText = 'Cards : '
    startGame();
}