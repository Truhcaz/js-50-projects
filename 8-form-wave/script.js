
const labels = document.querySelectorAll('.form-control label');
const delay = 50;

labels.forEach(label =>{
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) => `<span style='transition-delay : ${delay * (index+1)}ms;'>${letter}</span>`)
        .join('');
})