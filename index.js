const scoreContainer = document.querySelector(".header__score");
const stepsContainer = document.querySelector(".steps");
const fightContainer = document.querySelector(".fight");

const scoreCount = scoreContainer.querySelector(".score__count");

const steps = {
 ROCK: "rock",
 PAPER: "paper",
 SCISSORS: "scissors",
 LIZARD: "lizard",
 SPOCK: "spock",
};

const stepAssets = {
 [steps.ROCK]: {
  url: "./assets/images/icon-rock.svg",
  rule: [steps.SCISSORS, steps.LIZARD],
 },
 [steps.PAPER]: {
  url: "./assets/images/icon-paper.svg",
  rule: [steps.ROCK, steps.SPOCK],
 },
 [steps.SCISSORS]: {
  url: "./assets/images/icon-scissors.svg",
  rule: [steps.PAPER, steps.LIZARD],
 },
 [steps.LIZARD]: {
  url: "./assets/images/icon-lizard.svg",
  rule: [steps.PAPER, steps.SPOCK],
 },
 [steps.SPOCK]: {
  url: "./assets/images/icon-spock.svg",
  rule: [steps.ROCK, steps.SCISSORS],
 },
};

if(stepsContainer && fightContainer){
  let currentScore = 0;

  function PickStep(step){

    stepsContainer.classList.add("hidden");
    fightContainer.classList.remove("hidden");

    const userPicked = fightContainer.querySelector(".step__picked");
    const pickedIcon = document.createElement("img");
    pickedIcon.className = "circle__icon";
    pickedIcon.src = stepAssets[step].url;
    userPicked.appendChild(pickedIcon);
    userPicked.classList.add(step);
    userPicked.classList.add("animate__animated");
    userPicked.classList.add("animate__flip");

    const randomNumber = Math.floor(Math.random() * 5);
    const stepValues = Object.values(steps);
    
    setTimeout(()=>{
      ShowComputerPick(stepValues[randomNumber]);
    }, 2000);
    
    setTimeout(()=>{
      fightContainer.classList.add("fight__club");
    }, 3000)
    
    setTimeout(()=>{
      
      DisplayResult(stepAssets[step], stepValues[randomNumber]);
    }, 4000);
  }

  function DisplayResult(user, computer){
    let result = ""
    if(user.rule.includes(computer)){
      currentScore++;
      scoreCount.innerText = currentScore;
      result = "<h1>You Win</h1>";
    }else if (!user.rule.includes(computer)) {
      result = "<h1>You Lose</h1>";
    } else {
     ("<h1>It's a Tie</h1>");
    }
    const wins = document.createElement("div");
    wins.className = "winner";
    wins.classList.add("animate__animated");
    wins.classList.add("animate__bounce");
    wins.innerHTML = result;
    fightContainer.appendChild(wins);
    const playButton = document.createElement("button");
    playButton.innerText = "PLAY AGAIN";
    wins.appendChild(playButton);
    
    playButton.addEventListener("click", ()=>{
      stepsContainer.classList.remove("hidden");
      fightContainer.classList.add("hidden");
      fightContainer.classList.remove("fight__club");
      fightContainer.removeChild(wins);
      const computerPicked = fightContainer.querySelector(".right__picked");
      computerPicked.innerHTML= "";
      computerPicked.className = "right__picked";
      const userPicked = fightContainer.querySelector(".step__picked");
      const PickedIcon = userPicked.querySelector(".circle__icon");
      userPicked.removeChild(PickedIcon);
      userPicked.className = "step__picked";
    })
  }

  function ShowComputerPick(computer){
    const computerPicked = fightContainer.querySelector(".right__picked");
    const computerPickedIcon = document.createElement("img");
    computerPicked.classList.add("computer__picked");

    computerPickedIcon.className = "circle__icon";
    computerPickedIcon.src = stepAssets[computer].url;
    computerPicked.appendChild(computerPickedIcon);

    computerPicked.classList.add(computer);
    computerPicked.classList.add("animate__animated");
    computerPicked.classList.add("animate__flip");
  }
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