'use strict';

//selecting elements
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const player1 = document.getElementById('name--0');
const player2 = document.getElementById('name--1')
const currentScore = document.getElementById('current--0')
const currentScore2 = document.getElementById('current--1')
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const diceRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold')
const instructions = document.querySelector('.btn--instruction')
const instruct = document.querySelector('.instruction')
const overlay = document.querySelector('.overlay');
const closeInstruction = document.querySelector('.close--instruction')

let scores, score, activePlayer, playing;

const revertOriginal = function(){
    instruct.classList.add('hidden');
    overlay.classList.add('hidden');
};

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
activePlayer = activePlayer === 0 ? 1 : 0;
score = 0;

//change colour of background
player1El.classList.toggle('player--active');
player2El.classList.toggle('player--active');}

const init = function(){
scores = [0,0];
score = 0
activePlayer = 0;
playing = true;
    player1El.classList.remove('player--winner')
    player2El.classList.remove('player--winner')
    player2El.classList.remove('player--active')
    //make player 1 begin
    player1El.classList.add('player--active')

    //reset all scores
    score0El.textContent = 0
score1El.textContent = 0
currentScore.textContent = 0
currentScore2.textContent = 0
dice.classList.add('hidden');
};

    
init();

console.log();


//starting conditions (remove dice and scores)
score0El.textContent = '0'
score1El.textContent = '0'
dice.classList.add('hidden');

//rolling dice functionality
diceRoll.addEventListener('click', function(){
    if(playing){    //generate random dice roll
    const randomNumber = Math.trunc(Math.random()*6)+1;
//dsiplay dice
dice.classList.remove('hidden')
dice.src = `dice-${randomNumber}.png`
//check for rolled 1: if true switch to next player
if(randomNumber !== 1){
score += randomNumber
document.getElementById(`current--${activePlayer}`).textContent = score;

} else{
//switch to next player and dont add score
switchPlayer()

}
}})

btnHold.addEventListener('click', function(){
    if(playing)
    //add current score to score of active players score
    scores[activePlayer] += score;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    //check if score is >=100
    if(scores[activePlayer] >= 40){
        //finish game
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector
        dice.classList.add('hidden');
    } else {
        switchPlayer()
    }
})

btnNew.addEventListener('click', init)

//creating a modal window for instructions page 
instructions.addEventListener('click', function(){
    instruct.classList.remove('hidden');
    overlay.classList.remove('hidden');

})

closeInstruction.addEventListener('click', revertOriginal);
overlay.addEventListener('click', revertOriginal);

document.addEventListener('keydown', function(event){
    console.log(event);
    if(event.key === 'Escape'){
        revertOriginal()
    }
})
