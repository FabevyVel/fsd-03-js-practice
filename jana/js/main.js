/*
GamingInstruction
playerColorCode
MachineColorCode
PlayerScore
MachineScore
*/

let GamingInstruction,playerColorCode,machineColorCode,playerScore,machineScore
const min = 1, max = 7;
playerScore=0;
machineScore=0;

function snakeOrLadder(currentScore) {
    
}

function rollthedice() {
    let randomNumber= Math.random() * (max-min)+ min;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
    
}

function updatePlayerScore() {
    let diceScore = rollthedice();
    console.log('playerScore:' + playerScore ,'diceScore'+diceScore)
    playerScore = playerScore + diceScore;
    return playerScore;    
}
