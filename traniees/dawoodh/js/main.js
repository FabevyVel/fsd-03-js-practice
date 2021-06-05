// Random Number
const min = 1, max = 7;
PlayerScore = 0;
machineScore = 0;

function rollTheDice () {
    let randomNumber = Math.random() * (max - min) + min;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}