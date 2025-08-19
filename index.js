const clickerGame = document.querySelector('.clicker');
const RPS = document.querySelector('.rps');
const click = document.querySelector('.click');
const counter = document.querySelector('.counter');
const countBtn = document.querySelector('.countBtn');
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
let result = document.querySelector('.result')

var count = 0;

let backgrounds = ["360_F_1476798877_zYudTkdk6r4pNi1grBiJGNw0uVhCUVJS.jpg", "heart-waffle-pattern-background_62539-184.avif", "istockphoto-1226485254-612x612.jpg",
    "seamless-pattern-of-cute-dessert-character-cartoon-waffle-with-different-emotions-flat-illustration-vector.jpg", 
    "seamless-pattern-waffles-with-various-fillings-vector-illustration_647193-2617.avif",
    "waffle-seamless-pattern-sweets-illustration-bakery-wallpaper-design-element-menu-graphic-sugar-food-cartoon-flat-doodle-drawing-outline-sketch-style-fabric-print-template-vector.jpg",
    "yellow-waffle-seamless-vector-pattern-cartoon-wafer-repeated-background-ice-cream-cone-texture_540634-265.avif"]

let choices = ['Rock', 'Paper', 'Scissors']

countBtn.addEventListener('click', increment);

function openClickerGame() {
        window.location.href = 'clicker.html';
};


function openRpsGame() {
        window.location.href = 'rps.html';
};

function changeBackground() {
    var randomIndex = Math.floor(Math.random() * 7);
     var backgroundIndex = backgrounds[randomIndex];
     const fullURL = 'Assets/' + backgroundIndex;
        document.body.style.backgroundImage = `url(${fullURL})`;
    };

function homePage() {
    window.location.href = 'index.html';
}

function increment() { 
    count++;
    counter.textContent = count;
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