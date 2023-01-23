/*
// button onclick -foreach - linking
-Steps: 
// reset button

// need computer and user input - send to function for result
// which will be shown in result container.
    - player score
    - hands - what used
    - result
    - 
// (i.e after => rock paper scissor and above => reset button)

//buttons have value - rock paper scissor
*/

















const player = {
    score : 0
}
const Computer ={
    score : 0
}

const rpsButtons = document.querySelectorAll('.rpsButton');
// console.log(rpsButtons);

/**
 * Method renders the game.
 * @param {String} input 
 */
function renderGame(userChoice){
    const userInput = userChoice;
    const computerInput =  generateComputerInput();
    const result = getResult(computerInput.value,userInput);
    showResult(userInput,computerInput.value,result);

}



/**
 * Method used to return Computer Choice.
 * @returns {String} 
 */
const generateComputerInput = () => {
    let randomNo = Math.floor(Math.random() * rpsButtons.length);
    return rpsButtons[randomNo];
}



/**
 * result -lost/ won?
 * @param {String} computerInput 
 * @param {String} UserInput 
 */
const getResult = (computerInput, userInput ) => {
    
    if(userInput == computerInput ){
        return 'It is a Draw!';
    }
    else if(userInput=='Rock' && computerInput=='Scissors' ||
    userInput=='Scissors' && computerInput=='Paper'||
    userInput=='Paper' && computerInput=='Rock'){
        player.score += 1;
        return 'You win!';
    }
    else{
        Computer.score += 1;
        return 'You Lose!' ;
    }
}

/**
 * Shows Score, hands and result after each battle
 * @param {string} userInput 
 * @param {string} computerInput 
 * @param {string} result 
 */
function showResult(userInput,computerInput,result){
    let playerScoreDiv = document.getElementById('player-score');
    let handsDiv = document.getElementById('hands');
    let resultdiv = document.getElementById('result');

    playerScoreDiv.innerText = `Player : ${player.score}  Computer : ${Computer.score} `;
    handsDiv.innerText =  ` 😀 ${userInput} VS 🤖 ${computerInput}`;
    resultdiv.innerText = result;
}


/**
 * Driver Code
 */
function playGame(){

    rpsButtons.forEach(rpsButton=>{
        rpsButton.onclick = () => renderGame(rpsButton.value); 
    })
    const endGameButton = document.getElementById('endGame-Button');
    endGameButton.onclick = () => resetScore();
}

/**
 * Reset the score
 */
function resetScore(){
    let playerScoreDiv = document.getElementById('player-score');
    let handsDiv = document.getElementById('hands');
    let resultDiv = document.getElementById('result');

    player.score = 0;
    Computer.score = 0;
    playerScoreDiv.innerText='';
    handsDiv.innerText='';
    resultDiv.innerText='';
}


// Calling Driver code onLoad
playGame();
