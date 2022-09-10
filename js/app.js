/*-----------------------Constants-----------------------*/




/*-------------------Variables (state)-------------------*/

let level, timer

/*---------------Cached Element References---------------*/

const messageEl = document.getElementById('message')
console.log(messageEl)

const icons = document.querySelectorAll('.icons > div')
console.log(icons)

const firstEvolution = document.getElementById('evolution1')
console.log(firstEvolution)

const secondEvolution = document.getElementById('evolution2')
console.log(secondEvolution)

const finalEvolution = document.getElementById('evolution3')
console.log(finalEvolution)

const startBtn = document.getElementById('start')
console.log(startBtn)

const restartBtn = document.getElementById('restart')
console.log(restartBtn);

/*--------------------Event Listeners--------------------*/




/*-----------------------Functions-----------------------*/

function init () {
    timer = 0
    level = 1
    firstEvolution.style = "display: block"
    secondEvolution.style = "display: hidden"
    finalEvolution.style = "display: hidden"
    startBtn.style = "display: block"
    restartBtn.style = "display: hidden"
}