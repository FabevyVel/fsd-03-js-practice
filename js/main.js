/*
Variables:
    gamingInstruction
    playerColorCode
    machineColorCode
    playerScore
    machineScore
*/
let gamingInstruction, playerColorCode, machineColorCode, playerScore, machineScore;
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

function updatePlayerScore(){
    let diceScore = rollTheDice(); //1 - 6
    console.log('diceScore: ' + diceScore);
    playerScore = playerScore + diceScore; 
    console.log('playerScore: ' + playerScore);
    playerScore = snakeOrLadder(playerScore);
    console.log('playerScore after checking: ' + playerScore);
//    return playerScore;
}
