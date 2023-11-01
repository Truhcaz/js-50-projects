const screens = document.querySelectorAll('.screen');
const chooseMonsterBtns = document.querySelectorAll('.choose-monster-btn');
const startBtn = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');
let seconds = 0;
let score = 0;
let selectedMonster = {}

startBtn.addEventListener('click', () => screens[0].classList.add('up'))
chooseMonsterBtns.forEach( btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')

        selectedMonster = {src, alt}
        screens[1].classList.add('up')
        setTimeout(createMonster, 1000)
        startGame()
    })
})

function startGame(){
    setInterval(increaseTime, 1000)
}

function increaseTime(){
    let m = Math.floor(seconds/60)
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createMonster(){
    const monster = document.createElement('div')
    monster.classList.add('monster')
    const {x, y} = getRandomLocation()
    monster.style.top = `${y}px`
    monster.style.left = `${x}px`
    monster.innerHTML = `
    <img src="${selectedMonster.src}" alt="${selectedMonster.alt}" style="transform: rotate(${Math.random() * 360}deg)"/>
    `
    monster.addEventListener('click', catchMonster);
    
    gameContainer.appendChild(monster)
}

function getRandomLocation(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return {x, y}
}

function catchMonster(){
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addMonsters()
}

function addMonsters(){
    setTimeout(createMonster, 1000)
    setTimeout(createMonster, 1500)
}

function increaseScore(){
    score++
    if (score > 19){
        messageEl.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}