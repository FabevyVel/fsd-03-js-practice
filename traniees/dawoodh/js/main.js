// Random Number

function rollTheDice (min, max) {
    let randomNumber = Math.random() * (max - min) + min;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}