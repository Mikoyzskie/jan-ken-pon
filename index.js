const scoreContainer = document.querySelector(".header__score");
const stepsContainer = document.querySelector(".steps")

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



function PlaySound(soundobj) {
 var thissound = document.getElementById(soundobj);
 thissound.play();
}

function StopSound(soundobj) {
 var thissound = document.getElementById(soundobj);
 thissound.pause();
 thissound.currentTime = 0;
}