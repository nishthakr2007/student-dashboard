let shortTimer = document.querySelector("#shortTimer");
let longTimer = document.querySelector("#longTimer");
let start = document.querySelector("#startBtn");
let pause = document.querySelector("#pauseBtn");
let reset = document.querySelector("#resetBtn");
let timerDisplay = document.querySelector("#displayTime");

//initialization 

let startTime = 25;
let remainingTime = startTime * 60;
let timer = null;

let updateDisplay = () =>{
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    let updatedMinutes = String(minutes).padStart(2,"0");
    let updatedSeconds = String(seconds).padStart(2,"0");
    let displayTime = updatedMinutes + ":" + updatedSeconds;
    timerDisplay.innerText = displayTime;
}

let startTimer = () =>{
    if(timer!== null) return;
    if(remainingTime <= 0) return;

    timer = setInterval(()=>{
        //decrese the time 
       
        remainingTime = remainingTime-1;
        updateDisplay();
        
        if(remainingTime <= 0){
        clearInterval(timer);
        timer = null;
        alert("Focus session completed. Great job!");
    
    }}, 1000)
}

let pauseTimer = ()=>{
    clearInterval(timer);
    timer = null;

}

let resetTimer = ()=>{
    clearInterval(timer);
    timer = null;
    remainingTime = startTime * 60;
    updateDisplay();
} 

  let SelectshortTimer = ()=>{
    startTime = 25;
    resetTimer();

}

let SelectlongTimer = ()=>{
     startTime = 50;
    resetTimer();
}

shortTimer.addEventListener("click", SelectshortTimer);
longTimer.addEventListener("click", SelectlongTimer);
start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click",resetTimer);

updateDisplay();