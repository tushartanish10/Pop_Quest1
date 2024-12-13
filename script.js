// function makeBubbles(){
// var clutter=" ";
// for(var i=1;i<=168;i++){
//     var rn=Math.floor(Math.random()*10);
//    clutter += `<div class="bubble">${rn}</div>`;
// }
// document.querySelector("#pbtm").innerHTML=clutter;
// }

// var timer=0;
// var hitrn=0;
// const difficultySettings = {
//     easy: { timer: 60, bubbles: 100 },
//     medium: { timer: 45, bubbles: 150 },
//     hard: { timer: 30, bubbles: 200 },
// };

// document.querySelector("#easy").addEventListener("click", () => startGame('easy'));
// document.querySelector("#medium").addEventListener("click", () => startGame('medium'));
// document.querySelector("#hard").addEventListener("click", () => startGame('hard'));

// function startGame(level) {
//     if (gameStarted) return;  
//     gameStarted = true;
//     const gameSettings = difficultySettings[level];
//     timer = gameSettings.timer;
//     score=0;
    
//     document.querySelector("#start-screen").style.display = "none";
//     document.querySelector("#game-screen").style.display = "block";
//     document.querySelector("#scoreval").textContent = score;
//     document.querySelector("#timerval").textContent = timer;

   
//     makeBubbles(gameSettings.bubbles);
//     runTimer();
//     getnewhit();
// }

// function runTimer(){
//     var timerint =setInterval(function(){
//         if(timer>0){;
//         timer--;
//         document.querySelector("#timerval").textContent=timer;
//         }else{
//             clearInterval(timerint);
//             document.querySelector("#timerval").textContent="Time Over";
//             document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1><h2>Your Score is ${score}</h2>`;
//         }
//     },1000);
// }
// function getnewhit(){
//     hitrn =Math.floor(Math.random()*10);
//     document.querySelector("#hitval").textContent=hitrn;;

// }
// var score = 0;
// function increaseScore(){
//     score += 10;
//     document.querySelector("#scoreval").textContent=score;

// }
// document.querySelector("#pbtm").addEventListener("click",function(dets){
//     var clickednum=(Number(dets.target.textContent));
//     if(clickednum === hitrn){
//         increaseScore();
//         makeBubbles(difficultySettings.easy.bubbles);
//         getnewhit();
//     }
// });
// document.querySelector("#restart").addEventListener("click", restartGame);
// let timerInterval;
// let gameStarted = false;
// // Function to end the game
// function endGame() {
//     clearInterval(timerInterval);  // Stop the timer
//     document.querySelector("#timerval").textContent = "Game Over";
//     document.querySelector("#pbtm").innerHTML = `<h1>Game Over Your Score is ${score}</h1>`;
//     gameStarted = false;  // Prevent new games from starting while one is active
// }

// // Add event listener for the "End Game" button
// document.querySelector("#end-game").addEventListener("click", endGame);

// // Add event listeners for difficulty buttons
// document.querySelector("#easy").addEventListener("click", () => startGame('easy'));
// document.querySelector("#medium").addEventListener("click", () => startGame('medium'));
// document.querySelector("#hard").addEventListener("click", () => startGame('hard'));

// // Restart Game functionality (reset everything)
// function restartGame() {
//     timer = 60;
//     score = 0;
//     document.querySelector("#timerval").textContent = timer;
//     document.querySelector("#scoreval").textContent = score;
//     document.querySelector("#hitval").textContent = hitrn;
//     makeBubbles(difficultySettings.easy.bubbles);
//     runTimer();
//     getnewhit();
// }

// document.querySelector("#restart").addEventListener("click", restartGame);


// runTimer();
// makeBubbles();
// getnewhit();

// Corrected JavaScript Code

function makeBubbles() {
    let clutter = "";
    for (let i = 1; i <= 168; i++) {
        const rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

let timer = 0;
let hitrn = 0;
let score = 0;
let gameStarted = false; // Flag to prevent starting multiple games
let timerInterval; // Reference to the timer interval

const difficultySettings = {
    easy: { timer: 60, bubbles: 100 },
    medium: { timer: 45, bubbles: 150 },
    hard: { timer: 30, bubbles: 200 },
};

document.querySelector("#easy").addEventListener("click", () => startGame("easy"));
document.querySelector("#medium").addEventListener("click", () => startGame("medium"));
document.querySelector("#hard").addEventListener("click", () => startGame("hard"));

document.querySelector("#restart").addEventListener("click", restartGame);
document.querySelector("#end-game").addEventListener("click", endGame);

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    const clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        const currentLevel = Object.keys(difficultySettings).find(level => difficultySettings[level].timer === timer);
        makeBubbles(difficultySettings[currentLevel]?.bubbles || difficultySettings.easy.bubbles);
        getnewhit();
    }
});

function startGame(level) {
    if (gameStarted) return; // Prevent starting a new game while one is active

    gameStarted = true;
    const gameSettings = difficultySettings[level];
    timer = gameSettings.timer;
    score = 0;

    // Display game screen
    document.querySelector("#start-screen").style.display = "none";
    document.querySelector("#game-screen").style.display = "block";

    // Initialize UI
    document.querySelector("#scoreval").textContent = score;
    document.querySelector("#timerval").textContent = timer;

    makeBubbles(gameSettings.bubbles);
    runTimer();
    getnewhit();
}

function runTimer() {
    timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function getnewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function restartGame() {
    clearInterval(timerInterval); // Stop the current timer

    timer = 60; // Default timer for restart (easy level by default)
    score = 0;
    hitrn = Math.floor(Math.random() * 10);

    // Reset UI elements
    document.querySelector("#timerval").textContent = timer;
    document.querySelector("#scoreval").textContent = score;
    document.querySelector("#hitval").textContent = hitrn;
    document.querySelector("#pbtm").innerHTML = "";

    makeBubbles(difficultySettings.easy.bubbles);
    runTimer();
    getnewhit();

    gameStarted = true; // Ensure game is marked as active
}

function endGame() {
    clearInterval(timerInterval); // Stop the timer
    document.querySelector("#timerval").textContent = "Time Over";
    document.querySelector("#pbtm").innerHTML = `<h1>Game Over Your Score is ${score}</h1>`;
    gameStarted = false; // Reset game state
}
