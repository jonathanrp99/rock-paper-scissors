    const playerText = document.querySelector('#playerText');
    const computerText = document.querySelector('#computerText');
    const resultText = document.querySelector('#resultText');
    const choiceBtns = document.querySelectorAll('.choices');
    

function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch(randomNum) {
        case 1:
            computer = 'rock'
        break
        case 2:
            computer = 'paper'
        break
        case 3:
            computer = 'scissor'
        break
    }
    
}