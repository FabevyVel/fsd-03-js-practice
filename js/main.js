/*
Variables:
    gamingInstruction
    playerColorCode
    machineColorCode
    playerScore
    machineScore
*/
let gamingInstruction, playerColorCode, machineColorCode, playerScore, machineScore;

let playerCoinElement = document.getElementById('player-coin'),
    machineCoinElement = document.getElementById('machine-coin');

const min = 1, max = 7;
playerScore = 0;
machineScore = 0;

function snakeOrLadder(currentScore){
    if(currentScore == 1){
        return 38;
    }else if(currentScore == 4){
        return 14;
    }else if(currentScore == 9){
        return 31;
    }else if(currentScore == 16){
        return 6;
    }else if(currentScore == 21){
        return 42;
    }else if(currentScore == 28){
        return 84;
    }else if(currentScore == 36){
        return 44;
    }else if(currentScore ==  47){
        return 26;
    }else if(currentScore == 49){
        return 11;
    }else if(currentScore == 51){
        return 67;
    }else if(currentScore == 56){
        return 53
    }else if(currentScore == 62){
        return 19;
    }else if(currentScore == 64){
        return 60;
    }else if (currentScore == 71){
        return 91;
    }else if(currentScore == 80){
        return 100;
    }else if(currentScore == 87){
        return 24;
    }else if(currentScore == 93){
        return 73;
    } else if (currentScore == 95){
        return 75;
    }else if(currentScore == 98){
        return 78;
    }else{
        return currentScore;
    }
}

function rollTheDice(){
    let randomNumber = Math.random() * (max - min) + min;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}

function findPlayerCoinPosition(){
    let left, top, group, position = {};

    // top => 550 ; left => 30
    //Do calculation based on value of 'playerScore'

    //Find Top Value 
    top = (playerScore - 1 ) / 10; //0.1 => 9.9
    top = parseInt(top); // 0 => 9
    top = 550 - (top * 60);

    //Find Left Value

    left = playerScore % 10;
    left = (left == 0) ? 10 : left;
    // left = 1, 2, 3, 4, 10


    //find group
    // sub 1 from player score, so that first number will be either odd / even
    //playerScore = 15;
    group = playerScore - 1; // 15-1 => 14
    group = group / 10; // 14 /10 => 1.4
    group = parseInt(group) // parseInt(1.4) => 1
    group = group % 2 // 1 % 2 => 1 ; 3 % 2 => 1 ; 2 % 2 => 0

    if(group == 0){
        left = ((left-1)*60) + 30; //=((left-1)*60)+30
    }else{
        left = ((11-left-1)*60)+30;  //=((11-left-1)*60)+30
    }

    position.left = left;
    position.top = top;

    return position;
    
}
function applyPosition(element, value){
    element.style.left = value.left+'px';
    element.style.top = value.top+'px';
}
function findMachineCoinPosition(){
    let left, top, group, position = {};

    // top => 550 ; left => 30
    //Do calculation based on value of 'playerScore'

    //Find Top Value 
    top = (machineScore - 1 ) / 10; //0.1 => 9.9
    top = parseInt(top); // 0 => 9
    top = 550 - (top * 60);

    //Find Left Value

    left = machineScore % 10;
    left = (left == 0) ? 10 : left;
    // left = 1, 2, 3, 4, 10


    //find group
    // sub 1 from player score, so that first number will be either odd / even
    //playerScore = 15;
    group = machineScore - 1; // 15-1 => 14
    group = group / 10; // 14 /10 => 1.4
    group = parseInt(group) // parseInt(1.4) => 1
    group = group % 2 // 1 % 2 => 1 ; 3 % 2 => 1 ; 2 % 2 => 0

    if(group == 0){
        left = ((left-1)*60) + 30; //=((left-1)*60)+30
    }else{
        left = ((11-left-1)*60)+30;  //=((11-left-1)*60)+30
    }

    top += 25; // top = top + 25;

    position.left = left;
    position.top = top;

    return position;
}

let updatePlayerScore = function (){
    let position;
    let diceScore = rollTheDice(); //1 - 6
    playerScore = playerScore + diceScore;
    
    playerScore = snakeOrLadder(playerScore);

    // Todo: Perform an animation here

    // Update value in UI
    let playerScoreElement = document.getElementById('player-score');
    playerScoreElement.innerHTML = playerScore;

    
    position = findPlayerCoinPosition();
    applyPosition( playerCoinElement, position);
    
}

function updateMachineScore(){
    let position;
    let diceScore = rollTheDice(); //1 - 6
    console.log('diceScore: ' + diceScore);
    machineScore = machineScore + diceScore; 
    console.log('machineScore: ' + machineScore);
    machineScore = snakeOrLadder(machineScore);
    console.log('machineScore after checking: ' + machineScore);
//    return machineScore;

    let machineScoreElement = document.getElementById('machine-score');
    machineScoreElement.innerHTML = machineScore;
    
    position = findMachineCoinPosition();
    applyPosition( machineCoinElement, position);
}

function checkIfWon(score){
    if(score >= 100){
        return true
    }else{
        return false
    }
}

// Todo: Improve the code flow.
function handleDiceClick(){
    // update player score
    updatePlayerScore();

    // check if player won
    if(playerScore >= 100){

        let resultElement = document.getElementById('result');
        resultElement.innerHTML = 'Wow! You won.';

    }else{
        
        updateMachineScore();

        if(machineScore >= 20){
            let resultElement = document.getElementById('result');
            resultElement.innerHTML = 'Sorry, You lost.';
        }
    }
}

let rollElement = document.getElementById('roll');
rollElement.addEventListener('click', handleDiceClick);