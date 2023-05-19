//console.log(dociment.querySelector('.message).textContent);

// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = '?';

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

//console.log(document.querySelector('.guess).value);


// const x = function() {
//     console.log(23);
// }

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)
    
    //When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';

        //When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        //Style DOM
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '15rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }

        //When guess is too high
    } else if (guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too High!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0
        }

        //When guess is too low
    } else if (guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too Low!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0
        }
    } 
});
