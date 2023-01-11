// Tic-Tac-Toe

/**
 * 
 * Two players; one X and one O, each take turns placing an X or an O, or capturing a square.
 * Three squares in a row either vertcally, horizontally, or diagonally.
 * 
 */
const winConditions = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]; //All Possible winning conditions.
const cells = document.querySelectorAll('.cell'); //An arry of our cells that make up the game board.
const statusText = document.querySelector('#status'); //Status element that will indicate player turn and display winner message.
const resetBtn = document.querySelector('#resetButton'); //Button to reset the game back to default.
let gameState = ['','','','','','','','']; //An array to track the game state and where Xs and Os have been placed.
let currentPlayer = 'X'; //X always starts.
let active = false; //If this boolean vlaue is active then check for winning conditions.

console.log(cells);
console.log(cells[8]);
console.log(resetBtn);

startGame();

function startGame(){
    cells.forEach(cell => cell.addEventListener('click', clickCell));
    resetBtn.addEventListener('click',resetGame);
    statusText.textContent = `${currentPlayer}'s Turn`;
}

function clickCell(){

}

function updateCell(cell, index){

}

function player(){

}

function checkWinCondition(){

}

function resetGame(){
    active = false;
    gameState = ['','','','','','','',''];
    currentPlayer = 'X';
    return;
}