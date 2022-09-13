/*-----------------------Constants-----------------------*/

const actionsArray = [
    "He's hungry!",
    "He needs caffeine!",
    "He needs a nap!",
    "He needs a friend!"
]

/*-------------------Variables (state)-------------------*/

let level = 1
let progress = 0
let timeLeft, timer 
let hasLost = false

/*---------------Cached Element References---------------*/

const messageEl = document.getElementById('message')
const icons = document.querySelectorAll('.icons > div')
const firstEvolution = document.getElementById('evolution1')
const secondEvolution = document.getElementById('evolution2')
const finalEvolution = document.getElementById('evolution3')
const startBtn = document.getElementById('start')
const restartBtn = document.getElementById('restart')
const levelCount = document.querySelector('h4')
const progBar = document.querySelectorAll('.progress-bar')
const foodBtn = document.getElementById('food')
const coffeeBtn = document.getElementById('coffee')
const sleepBtn = document.getElementById('sleep')
const friendBtn = document.getElementById('friend')
let countdownEl = document.getElementById('countdown')
let randomNumber = Math.floor(Math.random()*actionsArray.length)


/*--------------------Event Listeners--------------------*/

startBtn.addEventListener('click', start)
restartBtn.addEventListener('click', restart)
foodBtn.addEventListener('click', foodClick)
coffeeBtn.addEventListener('click', coffeeClick)
sleepBtn.addEventListener('click', sleepClick)
friendBtn.addEventListener('click', friendClick)

/*-----------------------Functions-----------------------*/

init ()

function init () {
    secondEvolution.style.display = "none"
    finalEvolution.style.display = "none"
    progBar.item(0).setAttribute('style', 'width: 0%')
    restartBtn.style.display = "none"
}

setInterval(winOrLose, 1000)

function winOrLose () {
    console.log('Hit')
    console.log(countdownEl.textContent)
    console.log(level);
    if (countdownEl.textContent === '0' && level !== 3) {
        messageEl.textContent = "You lose"
        hasLost = true
    }
}

function start () {
    let timeLeft = 30
    timer = setInterval(() => {
        timeLeft -= 1
        countdownEl.textContent = timeLeft
    if (timeLeft === 0) {
        clearInterval(timer)
        countdownEl.textContent = '0'
    } else if (level === 3) {
        clearInterval (timer)
        countdownEl.textContent = '🎉'
    } 
    }, 1000)
    level = 1
    progress = 0
    startBtn.style.display = "block"
    firstEvolution.style.display = "block"
    secondEvolution.style.display = "none"
    finalEvolution.style.display = "none"
    progBar.item(0).setAttribute('style', 'width: 0%')
    startBtn.style.display = "none"
    restartBtn.style.display = "block"
    render()
}

function restart () {
    clearInterval(timer)
    countdownEl.textContent = ''
    startBtn.style.display = "block"
    restartBtn.style.display = "none"
    hasLost = false
    messageEl.textContent = ''
    messageEl.textContent = "Start?"
    firstEvolution.style.display = "block"
    secondEvolution.style.display = "none"
    finalEvolution.style.display = "none"
    levelCount.textContent = "Level: 1"
    progBar.item(0).setAttribute('style', 'width: 0%')
}

function foodClick () {
    if (hasLost === true) {
        return
    } else if (messageEl.textContent === actionsArray[0]) {
        progress += 10
    }
    render()
}

function coffeeClick () {
    if (hasLost === true) {
        return
    } else if (messageEl.textContent === actionsArray[1]) {
        progress += 10
    }
    render()
}

function sleepClick () {
    if (hasLost === true) {
        return
    } else if (messageEl.textContent === actionsArray[2]) {
        progress += 10
    }
    render()
}

function friendClick () {
    if (hasLost === true) {
        return
    } else if (messageEl.textContent === actionsArray[3]) {
        progress += 10
    }
    render()
}

function render () {
    messageEl.textContent = actionsArray[Math.floor(Math.random()*actionsArray.length)]
    if (progress === 100) {
        level += 1
        progress = 0
    }
    progBar.item(0).setAttribute('style', `width: ${progress}%`)
    if (level === 3) {
        finalEvolution.style.display = "block"
        secondEvolution.style.display = "none"
        firstEvolution.style.display = "none"
        messageEl.textContent = "You did it!"
        levelCount.textContent = "Level: 3"
        countdownEl.textContent = "🎉"
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

