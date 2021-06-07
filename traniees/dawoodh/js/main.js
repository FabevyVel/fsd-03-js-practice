// Random Number

let gamingInstruction,playerColorCode,machineColorCode,playerscore,machineScore;

const min = 1 , max = 7;
playerscore = 0;
machineScore = 0;

function rollTheDice () {
    let randomNumber = Math.random() * (max - min) + min;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}

function updateplayerscore(){
    let dicescore = rollTheDice ();
    console.log('playerscore: '  + playerscore +       'dicescore:' + dicescore)
    playerscore = playerscore + dicescore;
    return playerscore;
}
