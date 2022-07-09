const reloadBtn = document.querySelector('.reload');
const options = document.querySelector(".options")
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let moves = 0;
let player;
let computer;
let result;
const gameOver = function() {
  options.style.display = 'none';
  reloadBtn.innerText = 'Restart';
  reloadBtn.style.display = 'flex'
  reloadBtn.addEventListener('click',() => {
  window.location.reload();
  })
}

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerPlay();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    move()
}));

function computerPlay(){
      
      const randNum = Math.floor(Math.random() * 3) + 1;
      
      switch(randNum){
        case 1:
        computer = "Rock";
          document.getElementById("computer-choice").src = "rock.png";
        break
        case 2:
        computer = "Paper";
          document.getElementById("computer-choice").src = "paper.png";
        break
        case 3:
        computer = "Scissors";
         document.getElementById("computer-choice").src = "scissors.png";
        break;
          }       
    }

    function checkWinner(){
      if(player == computer){
        return "Draw!";
      }
      else if(computer == "Rock"){
        return (player == "Paper") ? "You Win!" : "You Lose!"
      }
      else if(computer == "Paper"){
        return (player == "Scissors") ? "You Win!" : "You Lose!"
      }
      else if(computer == "Scissors"){
        return (player == "Rock") ? "You Win!" : "You Lose!"
      }
  }

  function move() {
    const movesLeft = document.querySelector('.movesleft');
    moves++;
   movesLeft.innerText = `Moves Left: ${10-moves}`;
if(moves == 10){
 gameOver();
  }
}

    function chooseRock() {
        document.getElementById("my-choice").src = "rock.png"
    }
    function choosePaper() {
        document.getElementById("my-choice").src = "paper.png";
    }
    function chooseScissors() {
        document.getElementById("my-choice").src = "scissors.png";
    }


