
let roundWinner = "";
let yourLives = 5;
let enemyLives = 5;

// Computer random choise generator.
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'RANGE'
      case 1:
        return 'MELEE'
      case 2:
        return 'FLYING'
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
  const choiseRange = document.getElementById("ranged");
  const choiseMelee = document.getElementById("melee");
  const ChoiseFlying = document.getElementById("flying");
  
  choiseRange.addEventListener('click', () => handleClick('RANGE'))
  choiseMelee.addEventListener('click', () => handleClick('MELEE'))
  ChoiseFlying.addEventListener('click', () => handleClick('FLYING'))
});

  function handleClick(playerSelection) {
    const computerSelection = getComputerChoice()
    console.log(`Button clicked: ${playerSelection}`);
    console.log(`Enemy's choise: ${computerSelection}`);
    battle(playerSelection, computerSelection)
    // updateChoices(playerSelection, computerSelection)
    if (computerSelection === "RANGE"){
        document.getElementById("enemyUnit").src="./images/ranged.png";
    }
    if (computerSelection === "MELEE"){
        document.getElementById("enemyUnit").src="./images/melee.png";
    }
    if (computerSelection === "FLYING"){
        document.getElementById("enemyUnit").src="./images/flying.png";
    }
  }

function battle(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        roundWinner = "Tie";
        console.log(`Its a: ${roundWinner}`); 
    }
    if ((playerSelection === "RANGE" && computerSelection === "FLYING") ||
        (playerSelection === "MELEE" && computerSelection === "RANGE") ||
        (playerSelection === "FLYING" && computerSelection === "MELEE")) {
        roundWinner = "Player";
        console.log(`The winner is: ${roundWinner}`); 
    }
    if ((computerSelection === "RANGE" && playerSelection === "FLYING") ||
        (computerSelection === "MELEE" && playerSelection === "RANGE") ||
        (computerSelection === "FLYING" && playerSelection === "MELEE")) {
        roundWinner = "Computer"; 
        console.log(`The winner is: ${roundWinner}`);        
    }
    
     
    if (roundWinner === "Player"){
        enemyLives = enemyLives -1;            
        if (enemyLives <1){
          win();
        }
    }
    if (roundWinner === "Computer"){

        yourLives = yourLives -1;
        if (yourLives <1){
          lose();
        }
         
    }
    document.getElementById("score").innerHTML = "Your lives " + yourLives + " - " + enemyLives + " Enemy lives";   
    console.log("Your lives:" + enemyLives);
    console.log("Enemy lives:" + yourLives);
}



function win(){
  let winnerImage = document.getElementById("winner");
  let hidden = winnerImage.getAttribute("hidden");
  winnerImage.removeAttribute("hidden");
  document.getElementById("winner").src="./images/win.png";
  enemyLives = 5;
  yourLives = 5;
  console.log("YOU WIN");
}
function lose(){
  let winnerImage = document.getElementById("winner");
  let hidden = winnerImage.getAttribute("hidden");
  winnerImage.removeAttribute("hidden");
  document.getElementById("winner").src="./images/lose.png";
  enemyLives = 5;
  yourLives = 5;
  console.log("YOU LOST");
}
    
        



function onHoverRanged() {document.getElementById("ranged").src="./images/ranged-selected.png";}
function offHoverRanged() {document.getElementById("ranged").src="./images/ranged.png";}
function onHoverMelee() {document.getElementById("melee").src="./images/melee-selected.png";}
function offHoverMelee() {document.getElementById("melee").src="./images/melee.png";}
function onHoverFlying() {document.getElementById("flying").src="./images/flying-selected.png";}
function offHoverFlying() {document.getElementById("flying").src="./images/flying.png";}

