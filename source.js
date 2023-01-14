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

//Game is the main function but relies mainly on the clickCell function because that is the players' input.
function game(){
    cells.forEach(cell => cell.addEventListener('click', clickCell)); //Add an event listener for all the cells.
    resetBtn.addEventListener('click',resetGame); //In case we need to reset to a default state.
    statusText.innerHTML = `${currentPlayer}'s Turn`; //Post the status at the bottom.
    active = true;
}

//Grab the id of the div that we click on on add it to the gameState array as long as there isn't already something there.
function clickCell(){
    const cellId = this.getAttribute("id");
    console.log('clickCell():'+cellId);
    if(gameState[cellId]!= '' || !active){ //also makke sure active isn't set to false.
        return;
    } else {
        updateCell(this, cellId);
    }
    player(); //We need to switch between X and O.
    checkWinCondition();
}

/**Place an X or an O at inside the clicked div and also make sure to set the index of 
 * the gameState array with either X or O. */
function updateCell(cell, index){
    gameState[index] = currentPlayer;
    cell.innerHTML = currentPlayer;
}

//Simply switch between X and O.
function player(){
    if(currentPlayer == 'X'){
        currentPlayer = 'O';
    } else if (currentPlayer == 'O'){
        currentPlayer = 'X';
    }
    statusText.innerHTML = `${currentPlayer}'s turn`;
}

function checkWinCondition(){
    for(let i = 0; i < winConditions.length; i++){
        let condition = winConditions[i];
        let posA = condition[0]; //Possible win position 1 for X or O.
        let posB = condition[1]; //Possible win position 2 for X or O.
        let posC = condition[2]; //Possible win position 3 for X or O.

        //Check if X is in all three win positions.
        if (gameState[posA] === 'X' && gameState[posB] ==='X' && gameState[posC] === 'X'){
            statusText.innerHTML = 'X is the Winner!';
            active = false;
        //Check if O is in all three win positions.
        } else if (gameState[posA] === 'O' && gameState[posB] ==='O' && gameState[posC] === 'O'){
            statusText.innerHTML = 'O is the Winner!';
            active = false;
        //Do all of the indexes of the gameState array have something in them?
        } else if (gameState.every((gsi) => gsi != '')){
            statusText.innerHTML = "Cat's game! It's a draw.";
        }
    }
}

//Set all the necessary values back to their defaults.
function resetGame(){
    currentPlayer = 'X';
    gameState = ['','','','','','','','',''];
    statusText.innerHTML = `${currentPlayer}'s Turn`;
    cells.forEach(cell => cell.innerHTML = '');
    active = true;
}