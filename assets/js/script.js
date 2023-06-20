let stone = document.querySelector(".stoneItem");
let paperItem= document.querySelector(".paperItem");
let scissorsItem = document.querySelector(".scissorsItem");
let itemDiv = document.querySelector(".item");
let itemCumpDiv = document.querySelector(".itemCumputer");
let scoreContainer = document.querySelector(".score");
let startButton = document.querySelector("#startButton");
let resetCount = document.querySelector("#resetCount");
let rulesButton = document.querySelector(".rulesButton");
 
const opt = ["r", "p", "s"];

let newPS = document.createElement("p");
let newPP = document.createElement("p");
let newPR = document.createElement("p");
function getCumputerChoice() {
    const choice = opt[Math.floor(Math.random() * opt.length)];
    if (choice == "r") {
        newPR.textContent = "Cumputer chose Rock"
        itemCumpDiv.appendChild(newPR);
        newPP.style.display = "none"
        newPS.style.display = "none"
        newPR.style.display = "block"
    } else if (choice == "p") {
        newPP.textContent = "Cumputer chose Paper"
        itemCumpDiv.appendChild(newPP);
        newPP.style.display = "block"
        newPS.style.display = "none"
        newPR.style.display = "none"
    } else {
        newPS.textContent = "Cumputer chose Scissors"
        itemCumpDiv.appendChild(newPS);
        newPP.style.display = "none"
        newPS.style.display = "block"
        newPR.style.display = "none"
    }
    return choice
};

let scoreCount = 0;
let displayScore = document.querySelector("#scoreCount");
let scoreDisplayDraw = document.createElement("p");
let scoreDisplayWin = document.createElement("p");
let scoreDisplayLoose = document.createElement("p");

function game (userChoice) {
    let cumputerChoice = getCumputerChoice();
    if (scoreCount >= 5) {
        alert("GAME OVER")
       location.reload();
      }
    if (userChoice === cumputerChoice) {
        scoreDisplayDraw.textContent = "It's a Draw";
        scoreContainer.appendChild(scoreDisplayDraw);
        scoreDisplayDraw.style.display = "block";
        scoreDisplayWin.style.display = "none";
        scoreDisplayLoose.style.display = "none";
    } else if(userChoice == "r" && cumputerChoice == "s" || userChoice == "s" && cumputerChoice == "p" || userChoice == "p" && cumputerChoice == "r") {
    console.log("WIN")
    scoreCount++
    displayScore.innerHTML = scoreCount;
    scoreDisplayWin.textContent = "You Win";
    scoreContainer.appendChild(scoreDisplayWin);
    scoreDisplayDraw.style.display = "none";
    scoreDisplayWin.style.display = "block";
    scoreDisplayLoose.style.display = "none";
    }
    else {
        console.log("loos")
        scoreDisplayLoose.textContent = "You Loose";
        scoreContainer.appendChild(scoreDisplayLoose);
        scoreDisplayDraw.style.display = "none";
        scoreDisplayWin.style.display = "none";
        scoreDisplayLoose.style.display = "block";
    }

}
let displayChoiceRock = document.createElement("p");
let displayChoicePaper = document.createElement("p");
let displayChoiceScissors = document.createElement("p");


function main () {
    let rock = stone.addEventListener("click", () => {
        game("r");
        displayChoiceRock.textContent = "You chose rock";
        itemDiv.appendChild(displayChoiceRock);
        displayChoicePaper.style.display = "none"
        displayChoiceScissors.style.display = "none"
        displayChoiceRock.style.display = "block"
        
        
    });
    
    let paper = paperItem.addEventListener("click", () => {
        game("p");
        displayChoicePaper.textContent = "You chose paper";
        itemDiv.appendChild(displayChoicePaper);
        displayChoiceRock.style.display = "none"
        displayChoiceScissors.style.display = "none"
        displayChoicePaper.style.display = "block"
    });
    
    let scissors = scissorsItem.addEventListener("click", () => {
        game("s");
        displayChoiceScissors.textContent = "You chose scissors";
        itemDiv.appendChild(displayChoiceScissors);
        displayChoicePaper.style.display = "none"
        displayChoiceRock.style.display = "none"
        displayChoiceScissors.style.display = "block"
    })
    
}

resetCount.addEventListener("click", () => {
    scoreCount = 0;
    displayScore.innerHTML = scoreCount;
})
startButton.addEventListener("click", () => {
    alert("chose item")
    main()
})

rulesButton.addEventListener("click")