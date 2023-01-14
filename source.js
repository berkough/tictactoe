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
let gameState = ['','','','','','','','','']; //An array to track the game state and where Xs and Os have been placed.
let currentPlayer = 'X'; //X always starts.
let active = false; //If this boolean vlaue is active then check for winning conditions.

/** Console Log checks. 
console.log(cells);
console.log(cells[8]);
console.log(resetBtn); */

game();

function game(){
    cells.forEach(cell => cell.addEventListener('click', clickCell));
    resetBtn.addEventListener('click',resetGame);
    statusText.innerHTML = `${currentPlayer}'s Turn`;
    active = true;
}

function clickCell(){
    const cellId = this.getAttribute("id");
    console.log('clickCell():'+cellId);
    if(gameState[cellId]!= '' || !active){
        return;
    } else {
        updateCell(this, cellId);
    }
    player();
    checkWinCondition();
}

function updateCell(cell, index){
    gameState[index] = currentPlayer;
    cell.innerHTML = currentPlayer;
}

function player(){
    if(currentPlayer == 'X'){
        currentPlayer = 'O';
    } else if (currentPlayer == 'O'){
        currentPlayer = 'X';
    }
    statusText.innerHTML = `${currentPlayer}'s turn`;
}

function checkWinCondition(){

}

function resetGame(){
    currentPlayer = 'X';
    gameState = ['','','','','','','','',''];
    statusText.innerHTML = `${currentPlayer}'s Turn`;
    cells.forEach(cell => cell.innerHTML = '');
    active = true;
}