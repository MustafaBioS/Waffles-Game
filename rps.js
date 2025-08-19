    const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
let result = document.querySelector('.result')

let choices = ['Rock', 'Paper', 'Scissors']

function homePage() {
    window.location.href = 'index.html';
}



rock.addEventListener('click', () => {

    var randomIndex = Math.floor(Math.random() * 3);
    var randomChoice = choices[randomIndex];

    console.log(randomChoice)
    if (randomChoice === 'Rock') {
        result.textContent = `Draw, Opponent Chose ${randomChoice}`
    }
    if (randomChoice === 'Paper') {
        result.textContent = `You Lose, Opponent Chose ${randomChoice}`
    }
    if (randomChoice === 'Scissors') {
        result.textContent = `You Win, Opponent Chose ${randomChoice}`
    }
})

paper.addEventListener('click', () => {
    var randomIndex = Math.floor(Math.random() * 3);
    var randomChoice = choices[randomIndex];
    console.log(randomChoice)

    if (randomChoice === 'Rock') {
        result.textContent = `You Win, Opponent Chose ${randomChoice}`
    }
    if (randomChoice === 'Paper') {
        result.textContent = `Draw, Opponent Chose ${randomChoice}`
    }
    if (randomChoice === 'Scissors') {
        result.textContent = `You Lose, Opponent Chose ${randomChoice}`
    }
})

scissors.addEventListener('click', () => {
    var randomIndex = Math.floor(Math.random() * 3);
    var randomChoice = choices[randomIndex];
    console.log(randomChoice)

    if (randomChoice === 'Rock') {
        result.textContent = `You Lose, Opponent Chose ${randomChoice}`
    }
    if (randomChoice === 'Paper') {
        result.textContent = `You Win, Opponent Chose ${randomChoice}`
    }
    if (randomChoice === 'Scissors') {
        result.textContent = `Draw, Opponent Chose ${randomChoice}`
    }
})