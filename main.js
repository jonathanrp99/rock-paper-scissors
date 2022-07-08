
const options = document.querySelector(".options")

const gameOver = function() {
    options.style.display = 'none';
}

let moves = 0
    
    
    
    function computerPlay(){
        const movesLeft = document.querySelector('.movesleft');
        moves++;
        movesLeft.innerText = `Moves Left: ${10-moves}`;  
        
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
        
    if(moves == 10){
      gameOver();
    }
  }


    function chooseRock() {
        document.getElementById("my-choice").src = "rock.png"
        computerPlay()       
    }
    function choosePaper() {
        document.getElementById("my-choice").src = "paper.png";
        computerPlay()
    }
    function chooseScissors() {
        document.getElementById("my-choice").src = "scissors.png";
        computerPlay()
    }
    
    
