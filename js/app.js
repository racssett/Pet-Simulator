/*-----------------------Constants-----------------------*/

const actionArray = [
    "He's hungry!",
    "He needs caffeine",
    "He needs a nap",
    "He needs a friend"
]

/*-------------------Variables (state)-------------------*/

let level, timer

/*---------------Cached Element References---------------*/

const messageEl = document.getElementById('message')

const icons = document.querySelectorAll('.icons > div')

const firstEvolution = document.getElementById('evolution1')

const secondEvolution = document.getElementById('evolution2')

const finalEvolution = document.getElementById('evolution3')

const startBtn = document.getElementById('start')

const restartBtn = document.getElementById('restart')

const levelCount = document.querySelector('h4')
console.log(levelCount);

/*--------------------Event Listeners--------------------*/




/*-----------------------Functions-----------------------*/

init()

function init () {
    timer = 0
    level = 1
    firstEvolution.style = "display: block"
    secondEvolution.style = "display: none"
    finalEvolution.style = "display: none"
    startBtn.style = "display: block"
    restartBtn.style = "display: none"
    messageEl.textContent = "Start?"
    render()
}

function render () {
    if (level === 3) {
        finalEvolution.style = "display: block"
        secondEvolution.style = "display: none"
        messageEl.textContent = "You did it!"
    } else if (level === 2) {
        secondEvolution.style = "dispaly: block"
        levelCount.textContent = "Level: 2"
    }
}