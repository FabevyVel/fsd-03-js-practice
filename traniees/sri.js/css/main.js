/*
variables:
    GamingInstructions 
    PlayerColorCode 
    MachineColorCode
    PlayerScore
    MachineScore
*/ 
let gamingInstructions,playerColorCode,machineColorCode,playerScore,machineScore;


function rollTheDice(min, max ){
   let randomNumber = Math.random() *(max - min) + min;
   //TODO: Generate random number in javascript
   return randomNumber; 
}