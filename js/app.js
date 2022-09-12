/*-----------------------Constants-----------------------*/

const actionsArray = [
    "He's hungry!",
    "He needs caffeine!",
    "He needs a nap!",
    "He needs a friend!"
]

/*-------------------Variables (state)-------------------*/

let level, progress

/*---------------Cached Element References---------------*/

const messageEl = document.getElementById('message')
const icons = document.querySelectorAll('.icons > div')
const firstEvolution = document.getElementById('evolution1')
const secondEvolution = document.getElementById('evolution2')
const finalEvolution = document.getElementById('evolution3')
const startBtn = document.getElementById('start')
const levelCount = document.querySelector('h4')
const progBar = document.querySelectorAll('.progress-bar')
let countdownEl = document.getElementById('countdown')
let randomNumber = Math.floor(Math.random()*actionsArray.length)
console.log(actionsArray[randomNumber]);

/*--------------------Event Listeners--------------------*/

startBtn.addEventListener('click', start)


/*-----------------------Functions-----------------------*/

init ()

function init () {
    secondEvolution.style.display = "none"
    finalEvolution.style.display = "none"
    progBar.item(0).setAttribute('style', 'width: 0%')
}

function start () {
    // let timeLeft = 60
    // let timer = setInterval(() => {
    //     timeLeft -= 1
    //     countdownEl.textContent = timeLeft
    // if (timeLeft === 0) {
    //     clearInterval(timer)
    // }
    // }, 1000)
    level = 1
    progress = 0
    startBtn.style.display = "block"
    firstEvolution.style.display = "block"
    messageEl.textContent = "Start?"
    progBar.item(0).setAttribute('style', 'width: 0%')
    render()
}


function render () {
    progBar.item(0).setAttribute('style', `width: ${progress}%`)
    if (level === 3) {
        finalEvolution.style.display = "block"
        secondEvolution.style.display = "none"
        firstEvolution.style.display = "none"
        messageEl.textContent = "You did it!"
        levelCount.textContent = "Level: 3"
    } else if (level === 2) {
        finalEvolution.style.display = "none"
        secondEvolution.style.display = "block"
        firstEvolution.style.display = "none"
        levelCount.textContent = "Level: 2"
    } else if (level === 1) {
        finalEvolution.style.display = "none"
        secondEvolution.style.display = "none"
        firstEvolution.style.display = "block"
        levelCount.textContent = "Level: 1"
    }
}
