const scoreContainer = document.querySelector(".header__score");
const stepsContainer = document.querySelector(".steps");
const fightContainer = document.querySelector(".fight");

const scoreCount = scoreContainer.querySelector(".score__count");

let currentScore = 0


if(stepsContainer){
  const scissorButton = stepsContainer.querySelector(".circle__scissor");

  scissorButton.addEventListener("click", ()=>{
    currentScore++;
    if (scoreContainer && scoreCount) {
     scoreCount.innerText = currentScore;
    }
  })
}

const steps = {
 ROCK: "rock",
 PAPER: "paper",
 SCISSORS: "scissors",
 LIZARD: "lizard",
 SPOCK: "spock",
};

const stepToImage = {
 [steps.ROCK]: "./assets/images/icon-rock.svg",
 [steps.PAPER]: "./assets/images/icon-paper.svg",
 [steps.SCISSORS]: "./assets/images/icon-scissors.svg",
 [steps.LIZARD]: "./assets/images/icon-lizard.svg",
 [steps.SPOCK]: "./assets/images/icon-spock.svg",
};


function PickStep(step){

  if(stepsContainer && fightContainer){
    stepsContainer.classList.add("hidden");
    fightContainer.classList.remove("hidden");

    const userPicked = fightContainer.querySelector(".step__picked");
    const pickedIcon = document.createElement("img");
    pickedIcon.className = "circle__icon";
    pickedIcon.src = stepToImage[step]
    userPicked.appendChild(pickedIcon);
    userPicked.classList.add(step);
    userPicked.classList.add("animate__animated");
    userPicked.classList.add("animate__flip");
  }

  // switch(step){
  //   case "scissor":

  //     break;
  // }
  
}

function PlaySound(soundobj) {
 var thissound = document.getElementById(soundobj);
 thissound.play();
}

function StopSound(soundobj) {
 var thissound = document.getElementById(soundobj);
 thissound.pause();
 thissound.currentTime = 0;
}

function RandomNumber(){
  return Math.floor(Math.random() * 5);
}