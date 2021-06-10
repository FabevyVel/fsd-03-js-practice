   // Random Number

let gamingInstruction,playerColorCode,machineColorCode,playerscore,machineScore;

const min = 1 , max = 7;
playerscore = 0;
machineScore = 0;

function snakeOrLadder(currentScore) {

    // LADER UPSIDE

    if(currentScore == 1){
        return 38;
    }
    else if(currentScore == 4){
        return 14;
    }
    else if(currentScore == 9){
        return 31 ;
    }
    else if(currentScore == 21){
        return 42;
    }
    else if(currentScore == 28){
        return 84;
    }
    else if(currentScore == 36){
        return 44;
    }
    else if(currentScore == 51){
        return 67;
    }
    else if(currentScore == 71){
        return 91;
    }
    else if(currentScore == 80){
        return 100;
    }
  

        //SNAKE DOWNSIDE 
        

    else if(currentScore == 16){
        return 6;
    }
    else if(currentScore == 47){
        return 26;
    }
    else if(currentScore == 49){
        return 11;
    }
    else if(currentScore == 62){
        return 19;
    }
    else if(currentScore == 64){
        return 60;
    }
    else if(currentScore == 87){
        return 24;
    }
    else if(currentScore == 93){
        return 73;
    }
    else if(currentScore == 95){
        return 75;
    }
    else if(currentScore == 98){
        return 78;
    }
    else{
        return currentScore;
    }
}

function rollTheDice () {
    let randomNumber = Math.random() * (max - min) + min;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}

function updateplayerscore(){
    let dicescore = rollTheDice ();
    console.log('playerscore: '  + playerscore + 'dicescore:' + dicescore)
    playerscore = playerscore + dicescore;
    playerscore = snakeOrLadder(playerscore);
    return playerscore;
}




