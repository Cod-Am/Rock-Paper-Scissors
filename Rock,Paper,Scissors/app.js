const computerChoiceDisplay= document.getElementById("computer-choice");
const userChoiceDisplay= document.getElementById("user-choice");
const resultDisplay=document.getElementById("result");
const possibleChoices=document.querySelectorAll("button")
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice=> possibleChoice.addEventListener("click",(e)=>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoices();
}))
function generateComputerChoices(){
    const randomNumber =Math.floor(Math.random()*3+1); 
    console.log("Random number: " + randomNumber);
    if(randomNumber===1){
        computerChoice="rock"
    }
    if(randomNumber===2){
        computerChoice="paper"
    }
    if(randomNumber===3){
        computerChoice="scissors"
    }
    computerChoiceDisplay.innerHTML=computerChoice;
    getResult();
}
function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw... ~_~";
    } else if (
        (computerChoice === "Paper" && userChoice === "Rock") ||
        (computerChoice === "Scissors" && userChoice === "Paper") ||
        (computerChoice === "Rock" && userChoice === "Scissors")
    ) {
        result = "You Win! ^_^";;
    } else {
        result = "You Lose... (┬┬﹏┬┬)"
    }

    resultDisplay.innerHTML = result;
}
