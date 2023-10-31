const container = document.querySelector('.container')
const randomURL = 'https://source.unsplash.com/random/'
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${randomURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize(){
    return `${getRandomNb()}x${getRandomNb()}`
}

function getRandomNb(){
    return Math.floor(Math.random()*10) +300
}