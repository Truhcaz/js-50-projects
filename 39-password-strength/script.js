const passwordEl = document.getElementById('password')
const backgroundEl = document.getElementById('background')


passwordEl.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const blurValue = 20 - length * 2
    backgroundEl.style.filter = `blur(${blurValue}px)`
})
